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
        'Building agent systems and workflow infrastructure for complex tasks.',
        'The workspace connects tasks, workspace context, execution events and final results in one traceable path, with distinct modes for investigation, direct implementation, planned work and explicitly privileged operations.',
        'Independent validation, deterministic Evidence and Artifacts preserve the relevant facts, while the interface presents verifiable state without exposing private model reasoning.',
      ],
      capabilities: [
        {
          name: 'Tasks & Context',
          description: 'Organising persistent tasks, workspaces and immutable context snapshots.',
        },
        {
          name: 'Controlled Agent Workflows',
          description: 'Separating direct, planned and privileged work while retaining human approval at critical boundaries.',
        },
        {
          name: 'Execution Observability',
          description: 'Reconstructing replayable traces, phase state and failure points from append-only events.',
        },
        {
          name: 'Evidence & Delivery',
          description: 'Preserving provenance and delivery scope through independent validation, focused Evidence and Artifacts.',
        },
      ],
      workflow: ['Confirm Task & Workspace', 'Build Context Snapshot', 'Run Controlled Agent Workflow', 'Validate & Deliver Result'],
      systemLayers: [
        'Interaction & Task Layer',
        'Workflow & Approval Layer',
        'Context, Evidence & Artifact Layer',
        'Agent Runtime & Tool Layer',
      ],
      currentState: {
        implemented: 'Local workspace and task management, multiple workflow profiles, event and context snapshots, independent validation, and Evidence / Artifact delivery are in place.',
        currentFocus: 'Refining how long-running work presents execution, results and reconciled runtime state.',
        nextDirection: 'Extending reusable knowledge workflows and collaborative organisational use cases.',
      },
      principles: [
        'Runs, events and Evidence are the facts; the interface is a presentation layer.',
        'Material changes remain under human control and receive independent validation.',
        'Context, results and external sources retain clear provenance.',
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
        'The system creates a traceable research path across bounded collection from official public sources, preservation of original evidence, deterministic document parsing and human review.',
        'Policy text, attachments, structured facts, policy series, matching decisions and monitored changes remain linked to specific Evidence. Unknowns stay explicit, and the system does not infer eligibility automatically.',
      ],
      capabilities: [
        {
          name: 'Official Source Collection',
          description: 'Collecting within registered public sources, validating provenance and classifying content changes.',
        },
        {
          name: 'Document Structuring',
          description: 'Parsing HTML, PDF, DOCX and XLSX deterministically into stable blocks with source locators.',
        },
        {
          name: 'Evidence-backed Analysis',
          description: 'Supporting research with reviewed facts, policy series and matching decisions without replacing eligibility determinations.',
        },
        {
          name: 'Research Workbench',
          description: 'Bringing together the policy catalogue, opportunities, review queue, monitoring state and original Evidence.',
        },
      ],
      workflow: ['Collect Official Sources', 'Preserve & Parse Evidence', 'Structure Facts & Review', 'Match, Monitor & Publish Research'],
      systemLayers: [
        'Source & Monitoring Layer',
        'Original Evidence & Document Catalogue',
        'Semantics, Policy Series & Matching',
        'Viewer & Review Workbench',
      ],
      currentState: {
        implemented: 'Public-source collection and validation, an immutable evidence catalogue, deterministic multi-format parsing, reviewed structuring and matching, change monitoring, and the research workbench are in place.',
        currentFocus: 'Improving official-source coverage, policy-series completeness and Evidence-led review workflows.',
        nextDirection: 'Expanding source coverage and policy research scenarios while retaining human review boundaries.',
      },
      principles: [
        'Original material from official sources remains the primary research evidence.',
        'Material judgments trace to exact content; unknown does not mean false.',
        'The system supports research and does not replace authoritative eligibility interpretation.',
      ],
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
        'Building reproducible research infrastructure across data engineering, factor research, experimental validation and explicit execution boundaries.',
        'The current system combines canonical data contracts, controlled ingestion and read-only access, an ETF universe, typed operators and formal factor research, with versioned baselines and validation reports preserving research evidence.',
        'Backtesting, portfolio construction and execution remain separate stages of development; research output is not treated as a tradable conclusion.',
      ],
      capabilities: [
        {
          name: 'Canonical Data Foundation',
          description: 'Organising research data through shared contracts, controlled ingestion, publication checks and read-only access.',
        },
        {
          name: 'Factor Research',
          description: 'Maintaining typed numerical operators, formal factor definitions, registries and causality checks.',
        },
        {
          name: 'Universe & Point-in-time',
          description: 'Managing ETF scope, eligibility and human review with explicit timing and visibility constraints.',
        },
        {
          name: 'Research Engineering',
          description: 'Recording reviewable research through immutable baselines, validation reports and layered contracts.',
        },
      ],
      workflow: ['Acquire & Validate Data', 'Canonical Access & Alignment', 'Universe & Factor Research', 'Freeze Evidence & Deliver'],
      systemLayers: [
        'Data Contract & Ingestion Layer',
        'Read-only Data Access Layer',
        'Universe, Operators & Factors',
        'Research Validation & Execution Boundary',
      ],
      currentState: {
        implemented: 'Canonical data contracts, multi-dataset ingestion and read-only access, the ETF universe, formal Operator / Factor registries, and baseline validation are in place.',
        currentFocus: 'Improving daily and minute data paths, point-in-time visibility semantics, and consistency across research contracts.',
        nextDirection: 'Building backtest, portfolio and controlled execution loops only after timing, cost and tradability constraints are explicit.',
      },
      principles: [
        'Verify provenance, time alignment and data visibility before evaluating performance.',
        'Research definitions, run evidence and baselines must be reproducible and reviewable.',
        'Exploration, simulation and execution remain explicit boundaries.',
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
