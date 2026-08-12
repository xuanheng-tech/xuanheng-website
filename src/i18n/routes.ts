import type { Locale, PageKey, ProjectSlug } from './types';

export const pageOrder: PageKey[] = ['home', 'about', 'projects', 'contact'];

export const routes: Record<Locale, Record<PageKey, string>> = {
  zh: {
    home: '/',
    about: '/about/',
    projects: '/projects/',
    contact: '/contact/',
  },
  en: {
    home: '/en/',
    about: '/en/about/',
    projects: '/en/projects/',
    contact: '/en/contact/',
  },
};

export const routeFor = (locale: Locale, page: PageKey) => routes[locale][page];

export const projectRouteFor = (locale: Locale, slug: ProjectSlug) =>
  `${routes[locale].projects}${slug}/`;
