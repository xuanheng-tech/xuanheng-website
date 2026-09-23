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
      description: 'Research prototypes, open-source developer tools and internal systems spanning AI agents, deterministic Git evidence and quantitative research infrastructure.',
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
      slug: PROJECT_SLUGS.quantitativeResearchPlatform,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.quantitativeResearchPlatform),
      number: '01',
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
    {
      slug: PROJECT_SLUGS.agentWorkspace,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.agentWorkspace),
      number: '02',
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
      slug: PROJECT_SLUGS.snapshotRunner,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.snapshotRunner),
      number: '03',
      category: 'OPEN SOURCE · GIT EVIDENCE',
      name: 'Snapshot Runner',
      englishName: 'Snapshot Runner',
      summary: 'Deterministic, read-only Git evidence for coding agents and automation.',
      status: 'Status: Open Source',
      repositoryUrl: 'https://github.com/xuanheng-tech/snapshot-runner',
      focus: ['Git Evidence', 'Read-only Collection', 'Agent Tooling'],
      overview: [
        'Snapshot Runner collects repository state, changes, branch history and existing test logs into local artifacts. It never modifies the inspected repository, runs tests, calls a model, commits or pushes, and requires no API key.',
        'Four collection commands publish deterministic, hash-verified snapshots with bounded summaries, and a targeted evidence reader returns just the relevant part of an existing snapshot, so an agent reviews the evidence it needs instead of whole repositories.',
        'Captured content stays untrusted evidence rather than agent instructions; refusals and explicit evidence gaps keep safety boundaries visible in every artifact.',
      ],
      capabilities: [
        {
          name: 'Repository Evidence',
          description: 'Collecting branch state, diffs, untracked files, branch reviews and test logs through read-only Git operations.',
        },
        {
          name: 'Deterministic Artifacts',
          description: 'Atomically publishing hash-addressed snapshots with controlled file modes and re-verifiable size and SHA-256 metadata.',
        },
        {
          name: 'Targeted Reading',
          description: 'Reading a single file or field from an existing snapshot without re-running Git.',
        },
        {
          name: 'Fail-closed Boundaries',
          description: 'Rejecting traversal, symlinks, special files and unsupported capabilities instead of running repository-controlled programs.',
        },
      ],
      workflow: ['Collect Read-only Evidence', 'Publish Deterministic Snapshot', 'Review Bounded Summary', 'Read Targeted Evidence'],
      systemLayers: [
        'Command & Contract Layer',
        'Read-only Git Collection Layer',
        'Snapshot Artifact Layer',
        'Summary & Evidence Reader Layer',
      ],
      currentState: {
        implemented: 'Release 2.3.0 on PyPI provides the four collection commands and the targeted reader, snapshot and summary contracts, and a standard-library Python CLI verified on Ubuntu 24.04.',
        currentFocus: 'Keeping the public CLI contract and evidence schemas stable, recorded in tool_cli_contract.json.',
        nextDirection: 'Extending deterministic evidence coverage for further repository states while preserving read-only, fail-closed guarantees.',
      },
      principles: [
        'Captured repository content is untrusted evidence, not agent instructions.',
        'The tool never modifies the repository, runs tests, calls a model, commits or pushes.',
        'Refusals and evidence gaps stay explicit; automatic analysis is intentionally unavailable.',
      ],
    },
    {
      slug: PROJECT_SLUGS.contextLoader,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.contextLoader),
      number: '04',
      category: 'OPEN SOURCE · GIT CONTEXT',
      name: 'Context Loader',
      englishName: 'Context Loader',
      summary: 'Deterministic, bounded local Git context as Markdown or JSON.',
      status: 'Status: Open Source',
      repositoryUrl: 'https://github.com/xuanheng-tech/context-loader',
      focus: ['Repository Context', 'Deterministic Output', 'Agent Tooling'],
      overview: [
        'Context Loader renders deterministic, bounded context for one local Git working tree, reading repository state and a fixed set of root files without fetching, executing repository code, accessing the network or writing to the target.',
        'The default Markdown output covers Git state, development instructions, project overview, declared commands, entry files, recent commits and a directory tree; a stable JSON interface serves machine callers with content hashes and status codes.',
        'Byte-identical output for identical inputs keeps context reviewable and reproducible, while fixed file selection and size limits keep the transport bounded.',
      ],
      capabilities: [
        {
          name: 'Bounded Root Context',
          description: 'Reading only the fixed root candidates — AGENTS.md, README.md and declared entry files — under explicit size limits.',
        },
        {
          name: 'Markdown & JSON Contracts',
          description: 'Emitting stable Markdown sections or a versioned JSON document with content hashes and machine-readable statuses.',
        },
        {
          name: 'Deterministic Rendering',
          description: 'Producing byte-identical output for the same tool version, arguments and repository state.',
        },
        {
          name: 'Sanitized Git Access',
          description: 'Running Git from a fixed executable with a sanitized environment that ignores system, global and per-command configuration, attributes and hooks.',
        },
      ],
      workflow: ['Locate Git Root', 'Collect Bounded Root Files', 'Render Markdown or JSON', 'Review Statuses & Hashes'],
      systemLayers: [
        'CLI & Contract Layer',
        'Repository Collector Layer',
        'Render & Selection Layer',
        'Machine-readable Output Layer',
      ],
      currentState: {
        implemented: 'Release 1.1.0 on PyPI ships the context-loader distribution with the project-context command and Markdown and JSON output modes, using only the Python standard library.',
        currentFocus: 'Keeping the declared JSON schema and Markdown section contract stable for machine callers.',
        nextDirection: 'Remaining a bounded transport for repository-root context while instruction-hierarchy resolution stays with the calling agent harness.',
      },
      principles: [
        'Identical inputs produce byte-identical output; different checkouts or working trees can change it.',
        'Fixed selection is not redaction: inspect the output before sharing it.',
        'The tool collects and renders; it never fetches, executes repository code or accesses the network.',
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
    x: {
      label: 'X @xuanhengtech',
      href: 'https://x.com/xuanhengtech',
    },
  },
} satisfies SiteContent;
