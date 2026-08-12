import { projectRouteFor } from './routes';
import { PROJECT_SLUGS, type SiteContent } from './types';

export const en = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  navigation: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  chrome: {
    brandHomeLabel: 'Xuanheng Technology home',
    mainNavigationLabel: 'Main navigation',
    mobileNavigationLabel: 'Mobile navigation',
    mobileMenuLabel: 'Navigation menu',
    languageSwitcherLabel: 'Language selection',
    skipToContent: 'Skip to main content',
    filingNavigationLabel: 'Registration information',
    backToTop: 'Back to top',
  },
  seo: {
    home: {
      title: 'Xuanheng Technology | Research & Computational Systems',
      description: 'Independent technology company in Suzhou focused on artificial intelligence, quantitative research and computational systems.',
    },
    about: {
      title: 'About | Xuanheng Technology',
      description: 'Learn about Xuanheng Technology, our research philosophy and our work across AI, quantitative research and computational systems.',
    },
    projects: {
      title: 'Research & Projects | Xuanheng Technology',
      description: 'Research prototypes and internal systems spanning AI agents, policy intelligence and quantitative research infrastructure.',
    },
    contact: {
      title: 'Contact | Xuanheng Technology',
      description: 'Contact Suzhou Xuanheng Technology Co., Ltd.',
    },
  },
  projectLabels: {
    project: 'PROJECT',
    focus: 'FOCUS',
    focusAriaSuffix: 'focus areas',
    viewProject: 'View Project',
    backToProjects: 'Back to Projects',
  },
  projectDetailLabels: {
    overview: 'Overview',
    capabilities: 'Capabilities',
    workflow: 'Workflow',
    systemView: 'System View',
    currentState: 'Current State',
    principles: 'Principles',
    implemented: 'Implemented',
    currentFocus: 'Current Focus',
    nextDirection: 'Next Direction',
    previousProject: 'Previous Project',
    allProjects: 'All Projects',
    nextProject: 'Next Project',
    projectNavigationLabel: 'Project navigation',
  },
  projects: [
    {
      slug: PROJECT_SLUGS.agentWorkspace,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.agentWorkspace),
      number: '01',
      category: 'AGENT SYSTEM',
      name: 'Agent Workspace',
      englishName: 'Agent Workspace',
      summary: 'An AI agent workspace for individuals and organizations.',
      status: 'Status: Research Prototype',
      focus: ['AI Agent', 'Human-AI Collaboration', 'Knowledge Management'],
      overview: [
        'Exploring new forms of human-AI collaboration for complex knowledge work.',
        'Connecting tasks, knowledge context and verifiable execution for individuals and organizations.',
      ],
      capabilities: [
        {
          name: 'Agent Workflows',
          description: 'Organizing intelligent execution steps and state across complex tasks.',
        },
        {
          name: 'Human-AI Collaboration',
          description: 'Keeping human judgment and control clear at critical points.',
        },
        {
          name: 'Knowledge Management',
          description: 'Connecting task materials, context and resulting knowledge.',
        },
      ],
      workflow: ['Task Input', 'Context Building', 'Agent Execution', 'Result Validation'],
      systemLayers: [
        'Interaction Layer',
        'Agent & Workflow Layer',
        'Knowledge & Evidence Layer',
        'Execution Layer',
      ],
      currentState: {
        implemented: 'A foundational workspace for tasks, agents and execution records.',
        currentFocus: 'Improving observability and human-AI collaboration in complex work.',
        nextDirection: 'Extending knowledge workflows and organizational use cases.',
      },
      principles: [
        'Complex work requires observable execution.',
        'Intelligent execution should remain accountable to human judgment.',
      ],
    },
    {
      slug: PROJECT_SLUGS.policyIntelligence,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.policyIntelligence),
      number: '02',
      category: 'POLICY INTELLIGENCE',
      name: 'Policy Intelligence',
      englishName: 'Policy Intelligence',
      summary: 'A data intelligence system for public policy research.',
      status: 'Status: Research Prototype',
      focus: ['Policy Research', 'Structured Knowledge', 'AI Analysis'],
      overview: [
        'Combining structured information, knowledge management and AI-assisted analysis to improve policy research workflows.',
        'Creating a clear and traceable path from policy materials to retrieval and research analysis.',
      ],
      capabilities: [
        {
          name: 'Structured Knowledge',
          description: 'Organizing distributed policy information into searchable structures.',
        },
        {
          name: 'Intelligent Retrieval',
          description: 'Locating relevant sources and relationships around research questions.',
        },
        {
          name: 'Assisted Analysis',
          description: 'Supporting comparison, synthesis and policy research judgment.',
        },
      ],
      workflow: ['Information Intake', 'Structuring', 'Retrieval & Analysis', 'Research Output'],
      systemLayers: ['Data Layer', 'Knowledge Layer', 'Retrieval Layer', 'Analysis Layer'],
      currentState: {
        implemented: 'A research prototype for organizing and analysing policy information.',
        currentFocus: 'Strengthening the link between structured knowledge and retrieval analysis.',
        nextDirection: 'Extending workflows for complex policy research topics.',
      },
    },
    {
      slug: PROJECT_SLUGS.quantitativeResearchPlatform,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.quantitativeResearchPlatform),
      number: '03',
      category: 'QUANTITATIVE RESEARCH',
      name: 'Quantitative Research Platform',
      englishName: 'Quantitative Research Platform',
      summary: 'An internally developed quantitative research infrastructure.',
      status: 'Status: Internal Research System',
      focus: ['Quantitative Research', 'Data Infrastructure', 'Research Engineering'],
      overview: [
        'Supporting data, factor research, experiment management and trading-system development.',
        'Maintaining a consistent data and experimentation path from research validation to engineering execution.',
      ],
      capabilities: [
        {
          name: 'Data Engineering',
          description: 'Managing research data acquisition, processing and quality control.',
        },
        {
          name: 'Factor Research',
          description: 'Supporting hypotheses, feature construction and statistical testing.',
        },
        {
          name: 'Experiment Management',
          description: 'Recording configurations, results and reproducible research processes.',
        },
        {
          name: 'Trading Execution',
          description: 'Connecting research outputs with controlled execution systems.',
        },
      ],
      workflow: ['Data Preparation', 'Research Modelling', 'Experiment Validation', 'Execution'],
      systemLayers: [
        'Data Infrastructure',
        'Research Engine',
        'Experiment Management',
        'Execution System',
      ],
      currentState: {
        implemented: 'An internal system spanning data, research and experiment management.',
        currentFocus: 'Improving consistency, reproducibility and research engineering efficiency.',
        nextDirection: 'Continuing to connect research processes with execution systems.',
      },
      principles: [
        'Research processes must be reproducible.',
        'Data, experiments and execution should remain consistent.',
      ],
    },
  ],
  home: {
    hero: {
      kicker: 'Independent Research & Technology · Suzhou',
      title: 'Xuanheng Technology',
      statement: [
        'Exploring structure, patterns and intelligence',
        'in complex systems.',
      ],
      intro: [
        'Independent research and technology studio focused on quantitative research, artificial intelligence and computational systems.',
      ],
      primaryCta: 'Explore Projects',
      secondaryCta: 'About Xuanheng',
      brandMarkLabel: 'Xuanheng brand mark',
    },
    philosophy: {
      kicker: '01 · Philosophy',
      title: 'The Meaning of Xuanheng',
      lead: 'Exploring the unknown. Measuring complexity.',
      concepts: [
        {
          symbol: 'Xuan',
          description: '“Xuan” represents the exploration of structures that remain unknown.',
        },
        {
          symbol: 'Heng',
          description: '“Heng” represents measurement and balance within complex systems.',
        },
      ],
      summary: 'Xuanheng Technology applies mathematics, computation and artificial intelligence to study patterns in complex systems and build technologies for future research.',
    },
    research: {
      kicker: '02 · Research',
      title: 'Research Areas',
      lead: [
        'Research across data, artificial intelligence',
        'and computational infrastructure.',
      ],
      areas: [
        {
          index: '01',
          title: 'Quantitative Research',
          description: 'Using data, statistical methods and computational models to investigate structural patterns in financial markets.',
        },
        {
          index: '02',
          title: 'Artificial Intelligence',
          description: 'Researching AI agents, intelligent workflows and human-AI collaboration systems.',
        },
        {
          index: '03',
          title: 'Computational Systems',
          description: 'Building data infrastructure, experimental platforms and intelligent engineering systems.',
        },
      ],
    },
    selectedProjects: {
      kicker: '03 · Selected Work',
      title: 'Selected Projects',
      viewAll: 'View All Projects',
    },
    aboutPreview: {
      kicker: '04 · About',
      title: 'About Xuanheng',
      lead: 'Xuanheng Technology is based in Suzhou, China.',
      paragraphs: [
        'Our work focuses on artificial intelligence, quantitative research and computational systems.',
        'We combine mathematical thinking, engineering practice and intelligent tools for long-term research.',
      ],
      linkLabel: 'Our Research Philosophy',
    },
    contact: {
      kicker: '05 · Contact',
      title: 'Stay in Touch',
    },
  },
  about: {
    hero: {
      kicker: 'ABOUT',
      title: ['Independent Thinking,', 'Long-term Research.'],
      lead: 'Xuanheng Technology is an independent technology company based in Suzhou, China.',
    },
    factsLabel: 'Company information',
    facts: [
      { label: 'Company', value: 'Suzhou Xuanheng Technology Co., Ltd.' },
      { label: 'Founded', value: '2026' },
      { label: 'Location', value: 'Suzhou, China' },
    ],
    company: {
      kicker: '01 · Company',
      title: 'Company',
      paragraphs: [
        'Xuanheng Technology is an independent technology company based in Suzhou, China.',
        'Our work focuses on artificial intelligence, quantitative research and computational systems.',
        'We use mathematical modelling, software engineering and AI to investigate computable structures within complex systems.',
      ],
    },
    philosophy: {
      kicker: '02 · Approach',
      title: 'Research Philosophy',
      statements: [
        'Complex systems often contain hidden structures.',
        'Our goal is not merely to predict outcomes, but to develop better ways of understanding the systems themselves.',
      ],
    },
    directions: {
      kicker: '03 · Capabilities',
      title: 'Technology Directions',
      lead: 'Mathematics, engineering and intelligent tools within a shared research framework.',
      items: [
        {
          index: '01',
          title: 'Quantitative Research',
          description: 'Using data, statistical methods and computational models to investigate structural patterns in financial markets.',
        },
        {
          index: '02',
          title: 'Artificial Intelligence',
          description: 'Researching AI agents, intelligent workflows and human-AI collaboration systems.',
        },
        {
          index: '03',
          title: 'Computational Systems',
          description: 'Building data infrastructure, experimental platforms and intelligent engineering systems.',
        },
      ],
    },
    next: {
      label: 'Continue exploring',
      linkLabel: 'Research & Projects',
    },
  },
  projectsPage: {
    hero: {
      kicker: 'PROJECTS',
      title: ['Built from questions,', 'designed for research.'],
      lead: 'These projects are research prototypes and internal systems developed around complex research tasks.',
    },
    listing: {
      kicker: 'SELECTED WORK · 2026',
      title: 'Project Index',
    },
    next: {
      label: 'Learn more',
      linkLabel: 'About Xuanheng',
    },
  },
  contact: {
    kicker: 'CONTACT',
    title: 'Contact Xuanheng',
    companyLines: ['Suzhou Xuanheng Technology Co., Ltd.'],
  },
} satisfies SiteContent;
