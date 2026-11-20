"""Render a 1200x630 share card (og:image) for every canonical page.

Reads kicker and h1 from the built pages, so run it after a build and rebuild afterwards:

    npm run build && python3 scripts/build-og-images.py && npm run build

Needs Playwright with Chromium (python3 -m playwright install chromium). Writes public/og/.
"""

import html
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
OUT = ROOT / 'public' / 'og'
MARK = (ROOT / 'public' / 'brand' / 'xuanheng-mark.svg').read_text(encoding='utf-8')


def og_name(route: str) -> str:
    """Must match ogImagePath in src/layouts/BaseLayout.astro."""
    path = route.strip('/')
    if path in ('', 'zh-cn'):
        path = f'{path}/home'.lstrip('/')
    return f'{path}.png'


def text(fragment: str) -> str:
    fragment = re.sub(r'<br\s*/?>|</span>\s*<span[^>]*>', '\n', fragment)
    return html.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


def card(route: str, page: str) -> str:
    chinese = route.startswith('/zh-cn/')
    kicker = re.search(r'<p class="eyebrow[^"]*"[^>]*>(.*?)</p>', page, re.S)
    title = re.search(r'<h1\b[^>]*>(.*?)</h1>', page, re.S)
    assert title, route
    lines = [line for line in text(title.group(1)).split('\n') if line.strip()]
    heading = '<br>'.join(html.escape(line.strip()) for line in lines)
    longest = max(len(line) for line in lines) * (1.0 if chinese else 0.5)
    size = 96 if longest <= 8 else 80 if longest <= 11 else 64 if longest <= 15 else 52
    family = ('"Noto Sans CJK SC", "Noto Sans SC", sans-serif' if chinese
              else '"Iowan Old Style", Baskerville, "Times New Roman", serif')
    weight = 600 if chinese else 500
    return f'''<!doctype html><meta charset="utf-8"><style>
      * {{ margin: 0; box-sizing: border-box; }}
      body {{ width: 1200px; height: 630px; background: #f6f1e8; color: #171717;
             font-family: "Noto Sans CJK SC", system-ui, sans-serif; position: relative; overflow: hidden; }}
      .frame {{ position: absolute; inset: 56px 72px; display: flex; flex-direction: column; }}
      .brand {{ display: flex; align-items: center; gap: 16px; }}
      .brand svg {{ height: 58px; width: auto; }}
      .brand b {{ font-size: 26px; letter-spacing: .12em; }}
      .brand small {{ display: block; font-size: 12px; letter-spacing: .14em; color: #6b655c; font-weight: 600; }}
      .kicker {{ margin-top: auto; color: #b43a32; font-size: 20px; font-weight: 600; letter-spacing: .08em; }}
      h1 {{ margin-top: 18px; font-family: {family}; font-weight: {weight}; font-size: {size}px;
            line-height: 1.15; letter-spacing: {'0' if chinese else '-0.02em'}; }}
      .foot {{ margin-top: 36px; padding-top: 18px; border-top: 1px solid #cfc6b8; display: flex;
               justify-content: space-between; color: #6b655c; font-size: 18px; }}
      .bar {{ position: absolute; left: 0; top: 0; bottom: 0; width: 12px; background: #b43a32; }}
    </style>
    <div class="bar"></div>
    <div class="frame">
      <div class="brand">{MARK}<div><b>玄衡科技</b><small>XUANHENG TECHNOLOGY</small></div></div>
      <p class="kicker">{html.escape(text(kicker.group(1))) if kicker else ''}</p>
      <h1>{heading}</h1>
      <div class="foot"><span>www.xuanhengtech.cn</span><span>{'可溯源 · 可复核 · 可私有化部署' if chinese else 'Traceable · Reviewable · On-premise'}</span></div>
    </div>'''


def main() -> None:
    sitemap = (ROOT / 'public' / 'sitemap.xml').read_text(encoding='utf-8')
    routes = [re.sub(r'^https://[^/]+', '', loc) for loc in re.findall(r'<loc>([^<]+)</loc>', sitemap)]
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        page = browser.new_page(viewport={'width': 1200, 'height': 630})
        for route in routes:
            built = (DIST / route.strip('/') / 'index.html').read_text(encoding='utf-8')
            page.set_content(card(route, built))
            target = OUT / og_name(route)
            target.parent.mkdir(parents=True, exist_ok=True)
            page.screenshot(path=str(target))
        browser.close()
    print(f'{len(routes)} cards in {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
