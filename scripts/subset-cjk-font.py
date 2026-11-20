"""Subset Noto Sans CJK SC to the Chinese characters the site actually uses.

Run after changing Chinese copy (the post-build check names this command when coverage fails):

    uv run --with fonttools --with brotli python scripts/subset-cjk-font.py

Source fonts come from the Ubuntu package fonts-noto-cjk; pass --source-dir to use another copy.
Writes public/fonts/noto-sans-sc-{400,500,700}.woff2 and scripts/cjk-subset-chars.txt.
"""

import argparse
import re
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTCollection

ROOT = Path(__file__).resolve().parent.parent
WEIGHTS = {400: 'Regular', 500: 'Medium', 700: 'Bold'}
# Must match the unicode-range in src/styles/global.css and CJK_PATTERN in scripts/check-build.mjs.
CJK = re.compile(r'[　-〿㐀-䶿一-鿿＀-￯]')


def site_characters() -> str:
    files = [*ROOT.glob('src/**/*.ts'), *ROOT.glob('src/**/*.astro')]
    found = set()
    for path in files:
        found.update(CJK.findall(path.read_text(encoding='utf-8')))
    return ''.join(sorted(found))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--source-dir', type=Path, default=Path('/usr/share/fonts/opentype/noto'))
    args = parser.parse_args()

    text = site_characters()
    out_dir = ROOT / 'public' / 'fonts'
    for weight, style in WEIGHTS.items():
        collection = TTCollection(args.source_dir / f'NotoSansCJK-{style}.ttc')
        font = next(f for f in collection.fonts if 'CJK SC' in f['name'].getDebugName(1))
        options = subset.Options()
        options.layout_features = ['*']
        options.name_IDs = ['*']
        subsetter = subset.Subsetter(options)
        subsetter.populate(text=text)
        subsetter.subset(font)
        font.flavor = 'woff2'
        target = out_dir / f'noto-sans-sc-{weight}.woff2'
        font.save(target)
        print(f'{target.relative_to(ROOT)}: {target.stat().st_size // 1024} KB')

    (ROOT / 'scripts' / 'cjk-subset-chars.txt').write_text(text + '\n', encoding='utf-8')
    print(f'{len(text)} characters')


if __name__ == '__main__':
    main()
