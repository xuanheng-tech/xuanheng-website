export type Locale = 'zh' | 'en';

export type PageKey = 'home' | 'products' | 'openSource' | 'research' | 'projects' | 'about' | 'contact' | 'trust' | 'updates';

/** Section index pages that each list one slice of the project catalogue. */
export type SectionKey = 'products' | 'openSource' | 'research';

export const PROJECT_SLUGS = {
  chainVerify: 'chainverify',
  agriPulse: 'agripulse',
  embodiedFlow: 'embodiedflow',
  mechLens: 'mechlens',
  gitFinalizer: 'git-finalizer',
  contextLoader: 'context-loader',
  snapshotRunner: 'snapshot-runner',
  worktreeController: 'worktree-controller',
  quantitativeResearchPlatform: 'quantitative-research-platform',
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
  demoCta: string;
  themeSwitchLabel: string;
  themeOptions: Record<'light' | 'dark' | 'system', string>;
  filingNavigationLabel: string;
  backToTop: string;
}

export type ProjectGroup = 'product' | 'model' | 'openSourceTool' | 'researchSystem';

export const PROJECT_GROUP_ORDER: ProjectGroup[] = ['product', 'openSourceTool', 'model', 'researchSystem'];

export interface ProjectCopy {
  slug: ProjectSlug;
  detailPath: string;
  number: string;
  group: ProjectGroup;
  category: string;
  name: string;
  englishName: string;
  summary: string;
  /** One-line product slogan shown under the name. */
  slogan?: string;
  cardSummary?: string;
  status: string;
  focus: string[];
  overview: string[];
  capabilities: Array<{
    name: string;
    description: string;
  }>;
  workflow: string[];
  workflowLabel?: string;
  workflowEyebrow?: string;
  systemLayers: string[];
  currentState: {
    implemented: string;
    currentFocus: string;
    nextDirection: string;
  };
  principles?: string[];
  repositoryUrl?: string;
  /** Label of the mailto demo-request button shown on product pages. */
  demoCta?: string;
  media?: ProjectMediaAsset[];
}

export interface ProjectMediaAsset {
  src: string;
  width: number;
  height: number;
  mobileSrc?: string;
  mobileWidth?: number;
  mobileHeight?: number;
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

export type TrustIcon = 'source' | 'boundary' | 'review' | 'private';

export interface TrustItem {
  icon: TrustIcon;
  title: string;
  description: string;
}

export interface SectionIntroCopy {
  kicker: string;
  title: string;
  lead: string;
  viewAll: string;
}

export interface OpenSourceChainStep {
  slug: ProjectSlug;
  step: string;
  distribution: string;
  distributionUrl: string;
}

export interface HomeCopy {
  hero: {
    kicker: string;
    title: [string, string];
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    brandMarkLabel: string;
    signature: [string, string];
  };
  trust: {
    label: string;
    items: TrustItem[];
  };
  products: SectionIntroCopy;
  openSource: SectionIntroCopy;
  research: SectionIntroCopy;
  philosophy: {
    lead: string;
    concepts: Array<{
      symbol: string;
      description: string;
    }>;
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
    lead: string;
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

export interface PageHeroCopy {
  kicker: string;
  title: [string, string];
  lead: string;
}

export interface ListingPageCopy {
  hero: PageHeroCopy;
  listing: {
    kicker: string;
    title: string;
  };
  next: {
    label: string;
    linkLabel: string;
  };
}

export interface SectionPagesCopy {
  products: ListingPageCopy;
  openSource: Omit<ListingPageCopy, 'listing'> & {
    chainTitle: string;
    chain: OpenSourceChainStep[];
  };
  research: ListingPageCopy;
}

export interface ContactFormCopy {
  label: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  optional: string;
  interest: string;
  interestPlaceholder: string;
  interestOptions: string[];
  message: string;
  messagePlaceholder: string;
  consentBefore: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
}

export interface TrustSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface UpdateEntry {
  /** ISO date (YYYY-MM-DD) or month (YYYY-MM). */
  date: string;
  tag: string;
  title: string;
  body?: string;
  href?: string;
  linkLabel?: string;
}

export interface UpdatesCopy {
  hero: PageHeroCopy;
  entries: UpdateEntry[];
  home: { kicker: string; title: string; viewAll: string };
}

export interface TrustCopy {
  hero: PageHeroCopy;
  sections: TrustSection[];
  updated: string;
}

export interface ContactCopy {
  kicker: string;
  title: string;
  companyLines: string[];
  demo: {
    title: string;
    lead: string;
    mailLead: string;
    mailSubject: string;
  };
  form: ContactFormCopy;
  thanks: {
    seo: SeoCopy;
    kicker: string;
    title: string;
    lead: string;
    backLabel: string;
  };
  emailLabel: string;
  address: {
    label: string;
    value: string;
    note: string;
  };
  phone: {
    label: string;
    display: string;
    href: string;
    hours: string;
  };
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
  wecom?: {
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
  repository: string;
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
  projectsPage: ListingPageCopy;
  sections: SectionPagesCopy;
  contact: ContactCopy;
  trust: TrustCopy;
  updates: UpdatesCopy;
}
