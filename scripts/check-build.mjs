// Check the static output, not just the source route shells. Runs after every build.
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const site = 'https://www.xuanhengtech.cn';
const english = ['/', '/about/', '/projects/', '/contact/',
  ...['quantitative-research-platform', 'agent-workspace', 'snapshot-runner', 'context-loader']
    .map((slug) => `/projects/${slug}/`)];
const routes = [...english, ...english.map((route) => `/zh-cn${route}`)];
const output = resolve('dist');
const fileFor = (route) => resolve(output, `.${route}`, route.endsWith('/') ? 'index.html' : '');
const read = (route) => readFileSync(fileFor(route), 'utf8');
const decode = (value) => value.replaceAll('&amp;', '&');
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>`, 'gi'))]
  .map((match) => Object.fromEntries([...match[1].matchAll(/([\w-]+)=["']([^"']*)["']/g)]
    .map((attribute) => [attribute[1], decode(attribute[2])])));

const sitemap = read('/sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(locations.toSorted(), routes.map((route) => site + route).toSorted(),
  'sitemap must contain exactly the 16 canonical bilingual routes');
assert.match(read('/robots.txt'), new RegExp(`Sitemap: ${site.replaceAll('.', '\\.')}\/sitemap\\.xml`));

let linksChecked = 0;
for (const route of routes) {
  const html = read(route);
  const chinese = route.startsWith('/zh-cn/');
  assert.equal(tags(html, 'html')[0]?.lang, chinese ? 'zh-CN' : 'en', `${route}: locale`);
  assert.match(html, /<main\b/);
  assert.equal(tags(html, 'h1').length, 1, `${route}: one h1`);
  assert.doesNotMatch(html, /<script\b/i, `${route}: static page must have no client scripts`);
  assert.doesNotMatch(html, /(?:localhost|127\.0\.0\.1|\/home\/hsd\/)/, `${route}: workstation data`);

  const linkTags = tags(html, 'link');
  assert.equal(linkTags.filter((tag) => tag.rel === 'canonical').length, 1);
  assert.equal(linkTags.find((tag) => tag.rel === 'canonical')?.href, site + route);
  const en = chinese ? route.slice('/zh-cn'.length) : route;
  const zh = `/zh-cn${en}`;
  for (const [language, counterpart] of [['en', en], ['zh-CN', zh], ['x-default', en]]) {
    assert.equal(linkTags.filter((tag) => tag.hreflang === language).length, 1);
    assert.equal(linkTags.find((tag) => tag.hreflang === language)?.href, site + counterpart,
      `${route}: ${language} counterpart`);
  }
  const anchors = tags(html, 'a');
  assert(anchors.some((tag) => tag.lang === 'en' && tag.href === en), `${route}: EN switch`);
  assert(anchors.some((tag) => tag.lang === 'zh-CN' && tag.href === zh), `${route}: 中文 switch`);
  assert(linkTags.some((tag) => tag.rel === 'icon' && tag.href === '/brand/xuanheng-mark.svg'));

  const references = [...anchors, ...linkTags, ...tags(html, 'img')]
    .map((tag) => tag.href ?? tag.src).filter(Boolean);
  for (const tag of [...tags(html, 'img'), ...tags(html, 'source')]) {
    if (tag.srcset) references.push(...tag.srcset.split(',').map((item) => item.trim().split(/\s+/)[0]));
  }
  for (const value of references) {
    const url = new URL(value, site + route);
    if (url.origin !== site) continue;
    const path = decodeURIComponent(url.pathname);
    assert(existsSync(fileFor(path)), `${route}: missing local target ${path}`);
    if (url.hash) {
      const target = path === route ? html : read(path);
      const fragment = decodeURIComponent(url.hash.slice(1));
      assert(tags(target, '[a-z][\\w:-]*').some((item) => item.id === fragment),
        `${route}: missing fragment ${value}`);
    }
    linksChecked += 1;
  }
}

const redirects = new Map(read('/_redirects').split('\n')
  .filter((line) => line.trim() && !line.trim().startsWith('#'))
  .map((line) => {
    const [from, to, status, ...extra] = line.trim().split(/\s+/);
    assert.equal(extra.length, 0, 'redirect syntax');
    assert.equal(status, '301!', `${from}: permanent forced redirect`);
    assert(routes.includes(to), `${from}: redirect must target a canonical route`);
    return [from, to];
  }));
assert.equal(redirects.size, 22, 'all legacy and retired routes must be covered');
for (const route of english) {
  const alias = `/en${route}`;
  assert.equal(redirects.get(alias), route);
  assert.equal(redirects.get(alias.slice(0, -1)), route);
  const html = read(alias);
  assert.doesNotMatch(html, /<script\b/i);
  assert(tags(html, 'meta').some((tag) => tag['http-equiv'] === 'refresh' && tag.content === `0;url=${route}`));
  assert(tags(html, 'link').some((tag) => tag.rel === 'canonical' && tag.href === site + route));
}
for (const prefix of ['', '/en', '/zh-cn']) {
  const target = prefix === '/zh-cn' ? '/zh-cn/projects/' : '/projects/';
  for (const suffix of ['', '/']) {
    assert.equal(redirects.get(`${prefix}/projects/policy-intelligence${suffix}`), target);
  }
}
assert(tags(read('/404.html'), 'meta').some((tag) => tag.name === 'robots' && tag.content.includes('noindex')));
console.log(`PASS - static build: ${routes.length} routes, ${redirects.size} redirects, ${linksChecked} local links/assets; SEO, language switches, no client scripts, 404 noindex`);
