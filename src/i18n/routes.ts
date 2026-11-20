import type { Locale, PageKey, ProjectGroup, ProjectSlug, SectionKey } from './types';

/** Main navigation. The header demo button stays as the primary CTA; 联系 covers phone, WeCom and email. */
export const pageOrder: PageKey[] = ['home', 'products', 'openSource', 'research', 'about', 'contact'];

export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: '/',
    products: '/products/',
    openSource: '/open-source/',
    research: '/research/',
    projects: '/projects/',
    about: '/about/',
    contact: '/contact/',
  },
  zh: {
    home: '/zh-cn/',
    products: '/zh-cn/products/',
    openSource: '/zh-cn/open-source/',
    research: '/zh-cn/research/',
    projects: '/zh-cn/projects/',
    about: '/zh-cn/about/',
    contact: '/zh-cn/contact/',
  },
};

export const routeFor = (locale: Locale, page: PageKey) => routes[locale][page];

export const projectRouteFor = (locale: Locale, slug: ProjectSlug) =>
  `${routes[locale].projects}${slug}/`;

/** Which section index a project group belongs to. */
export const sectionForGroup: Record<ProjectGroup, SectionKey> = {
  product: 'products',
  model: 'research',
  openSourceTool: 'openSource',
  researchSystem: 'research',
};

export const groupsForSection: Record<SectionKey, ProjectGroup[]> = {
  products: ['product'],
  openSource: ['openSourceTool'],
  research: ['model', 'researchSystem'],
};
