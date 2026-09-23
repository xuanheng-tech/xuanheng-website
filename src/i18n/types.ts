export type Locale = 'zh' | 'en';

export type PageKey = 'home' | 'about' | 'projects' | 'contact';

export const PROJECT_SLUGS = {
  quantitativeResearchPlatform: 'quantitative-research-platform',
  agentWorkspace: 'agent-workspace',
  snapshotRunner: 'snapshot-runner',
  contextLoader: 'context-loader',
} as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[keyof typeof PROJECT_SLUGS];

export interface SeoCopy {
  title: string;
  description: string;
}

export interface ChromeCopy {
  brandHomeLabel: string;
  mainNavigationLabel: string;
  mobileNavigationLabel: string;
  mobileMenuLabel: string;
  languageSwitcherLabel: string;
  skipToContent: string;
  filingNavigationLabel: string;
  backToTop: string;
}

export type ProjectGroup = 'researchSystem' | 'openSourceTool';

export interface ProjectCopy {
  slug: ProjectSlug;
  detailPath: string;
  number: string;
  group: ProjectGroup;
  category: string;
  name: string;
  englishName: string;
  summary: string;
  cardSummary?: string;
  status: string;
  focus: string[];
  overview: string[];
  capabilities: Array<{
    name: string;
    description: string;
  }>;
  workflow: string[];
  systemLayers: string[];
  currentState: {
    implemented: string;
    currentFocus: string;
    nextDirection: string;
  };
  principles?: string[];
  repositoryUrl?: string;
  media?: ProjectMediaAsset[];
}

export interface ProjectMediaAsset {
  src: string;
  alt: string;
  placement: 'hero' | 'system' | 'gallery';
  kind: 'image' | 'screenshot' | 'diagram';
  caption?: string;
}

export interface ResearchAreaCopy {
  index: string;
  title: string;
  description: string;
}

export interface HomeCopy {
  hero: {
    kicker: string;
    title: string;
    statement: [string, string];
    intro: string[];
    primaryCta: string;
    secondaryCta: string;
    brandMarkLabel: string;
  };
  philosophy: {
    lead: string;
    concepts: Array<{
      symbol: string;
      description: string;
    }>;
  };
  research: {
    kicker: string;
    title: string;
    lead: [string, string?];
    areas: ResearchAreaCopy[];
  };
  selectedProjects: {
    kicker: string;
    title: string;
    viewAll: string;
  };
  aboutPreview: {
    kicker: string;
    title: string;
    lead: string;
    paragraphs: string[];
    linkLabel: string;
  };
  contact: {
    kicker: string;
    title: string;
  };
}

export interface AboutCopy {
  hero: {
    kicker: string;
    title: [string, string];
    lead: string;
  };
  factsLabel: string;
  facts: Array<{
    label: string;
    value: string;
  }>;
  company: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  philosophy: {
    kicker: string;
    title: string;
    statements: [string, string];
  };
  directions: {
    kicker: string;
    title: string;
    lead: string;
    items: ResearchAreaCopy[];
  };
  next: {
    label: string;
    linkLabel: string;
  };
}

export interface ProjectsPageCopy {
  hero: {
    kicker: string;
    title: [string, string];
    lead: string;
  };
  listing: {
    kicker: string;
    title: string;
  };
  next: {
    label: string;
    linkLabel: string;
  };
}

export interface ContactCopy {
  kicker: string;
  title: string;
  companyLines: string[];
  emailLabel: string;
  x?: {
    label: string;
    value: string;
    href: string;
  };
  wechat?: {
    label: string;
    caption: string;
    image: string;
    imageAlt: string;
  };
}

export interface ProjectLabels {
  project: string;
  focus: string;
  focusAriaSuffix: string;
  viewProject: string;
  backToProjects: string;
  groups: Record<ProjectGroup, string>;
}

export interface ProjectDetailLabels {
  overview: string;
  capabilities: string;
  workflow: string;
  systemView: string;
  currentState: string;
  principles: string;
  implemented: string;
  currentFocus: string;
  nextDirection: string;
  previousProject: string;
  allProjects: string;
  nextProject: string;
  projectNavigationLabel: string;
}

export interface SiteContent {
  locale: Locale;
  htmlLang: 'zh-CN' | 'en';
  ogLocale: 'zh_CN' | 'en_US';
  navigation: Record<PageKey, string>;
  chrome: ChromeCopy;
  seo: Record<PageKey, SeoCopy>;
  projectLabels: ProjectLabels;
  projectDetailLabels: ProjectDetailLabels;
  projects: ProjectCopy[];
  home: HomeCopy;
  about: AboutCopy;
  projectsPage: ProjectsPageCopy;
  contact: ContactCopy;
}
