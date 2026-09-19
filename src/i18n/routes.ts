import type { Locale, PageKey, ProjectSlug } from './types';

export const pageOrder: PageKey[] = ['home', 'about', 'projects', 'contact'];

export const routes: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: '/',
    about: '/about/',
    projects: '/projects/',
    contact: '/contact/',
  },
  zh: {
    home: '/zh-cn/',
    about: '/zh-cn/about/',
    projects: '/zh-cn/projects/',
    contact: '/zh-cn/contact/',
  },
};

export const routeFor = (locale: Locale, page: PageKey) => routes[locale][page];

export const projectRouteFor = (locale: Locale, slug: ProjectSlug) =>
  `${routes[locale].projects}${slug}/`;
