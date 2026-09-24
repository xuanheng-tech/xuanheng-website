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
    groups: {
      researchSystem: 'Research Systems',
      openSourceTool: 'Open-source Tools',
    },
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
      group: 'researchSystem',
      category: 'QUANTITATIVE RESEARCH',
      name: 'Quantitative Research Platform',
      englishName: 'Quantitative Research Platform',
      summary: 'An institutional-grade, in-house quantitative research and trading platform spanning data, research, trading, operations and platform.',
      cardSummary: 'Institutional-grade quant research and trading infrastructure, from data to execution.',
      status: 'Status: Internal Research System',
      focus: ['Quantitative Research', 'Data Infrastructure', 'Research Engineering'],
      overview: [
        'Quantitative Research Platform is Xuanheng’s in-house quantitative research and trading platform built to institutional standards. It covers the full stack of data governance, factor research, portfolio construction, backtesting and simulation, trade execution and risk control, with investment operations and platform engineering supporting daily research.',
        'Research proceeds on point-in-time (PIT) data: from a research question through the investable universe and factor definitions, into factor research and mining and factor testing and screening, then to portfolio construction and backtest validation, and finally to paper and live execution under risk controls. Data quality, research reproducibility and human oversight come first throughout — a research conclusion is never automatically a trading decision.',
        'The platform separates system responsibility from delivered progress: data governance, the investable universe, operators and formal factors, backtesting and the execution system are in place; the formula representation has completed its first phase, while factor mining, the risk model and strategy assembly are being advanced along the established architecture, and live trading is admitted stage by stage.',
      ],
      capabilities: [
        {
          name: 'Data Governance',
          description: 'Data contracts, multi-source ingestion and publication checks, and read-only access with point-in-time (PIT) data assembly.',
        },
        {
          name: 'Investable Universe',
          description: 'The reviewed ETF universe with point-in-time membership and eligibility, with human review kept in the loop.',
        },
        {
          name: 'Factor Research & Mining',
          description: 'Typed operators, a formal factor registry with immutable baselines, formula representation and search-based mining.',
        },
        {
          name: 'Factor Testing & Portfolio',
          description: 'Factor evaluation and screening, weight optimization and portfolio construction, backtesting, simulation and performance analysis.',
        },
        {
          name: 'Execution & Operations',
          description: 'Paper and live execution runtime covering orders, fills and reconciliation, with live trading under staged admission; investment operations track holdings, benchmarks and performance.',
        },
      ],
      workflow: ['Research question', 'Data & investable universe', 'Factor research & mining', 'Factor testing & screening', 'Portfolio construction & backtesting', 'Paper/live execution & risk control'],
      workflowLabel: 'Research Lifecycle',
      workflowEyebrow: 'Research Lifecycle',
      systemLayers: [
        'Data Platform Layer',
        'Research & Modeling Layer',
        'Portfolio & Trading Layer',
        'Platform & Engineering Layer',
      ],
      currentState: {
        implemented: 'Data governance (contracts, ingestion, publication, PIT access), the investable universe, operators and the formal factor registry, the backtesting framework, the execution runtime with investment operations, and orchestration with the business console are in place. The first phase of the formula representation — text parsing, an intermediate representation and registry linkage — is merged as formal code.',
        currentFocus: 'Building out formula compilation and execution, and factor search mining along the Factor Miner research protocol, completing the staged admission of live trading, and extending PIT data coverage and backtest consistency.',
        nextDirection: 'The risk model, strategy assembly and automated optimization workflows will be delivered as research validates them; the platform does not claim a capability before it is proven.',
      },
      principles: [
        'Data first: provenance, time alignment and visibility are verified before any factor performance.',
        'Research must be reproducible: definitions, runs and baselines stay registered and traceable.',
        'Research, simulation and live trading advance in stages; trading decisions remain human.',
        'Platform responsibility is distinct from delivery status: nothing is presented as complete before it is proven.',
      ],
      media: [
        {
          src: '/projects/quantitative-research-platform/hero-infrastructure-layers.svg',
          width: 1200,
          height: 420,
          mobileSrc: '/projects/quantitative-research-platform/hero-infrastructure-layers-mobile.svg',
          mobileWidth: 600,
          mobileHeight: 690,
          alt: 'One ink axis with four stations — a governed dot grid, a branching tree, weights hung on a post and a gated boundary — marked by vermilion nodes and continuing as a dashed line: data flowing through research and portfolio into gated execution.',
          placement: 'hero',
          kind: 'diagram',
          caption: 'From data to trading: four stages on one axis.',
        },
        {
          src: '/projects/quantitative-research-platform/research-lifecycle-system-en.svg',
          width: 760,
          height: 988,
          mobileSrc: '/projects/quantitative-research-platform/research-lifecycle-system-en-mobile.svg',
          mobileWidth: 460,
          mobileHeight: 880,
          alt: 'The research lifecycle runs as six sequential steps from research question to execution and risk control, each item marked in place, under construction or target architecture, above a band of five supporting domains.',
          placement: 'system',
          kind: 'diagram',
          caption: 'The research lifecycle and system responsibilities; status marks as of September 2026.',
        },
      ],
    },
    {
      slug: PROJECT_SLUGS.agentWorkspace,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.agentWorkspace),
      number: '02',
      group: 'researchSystem',
      category: 'AGENT SYSTEM',
      name: 'Agent Workspace',
      englishName: 'Agent Workspace',
      summary: 'A local, single-user native agent workspace where coding agents run under a local-terminal execution contract.',
      cardSummary: 'A local agent workspace built around native terminal sessions with multiple providers.',
      status: 'Status: Research Prototype',
      focus: ['AI Agent', 'Human-AI Collaboration', 'Knowledge Management'],
      overview: [
        'Agent Workspace is a local, single-user native agent workspace. Codex, Claude Code and Antigravity appear in its main area exactly as their own native interfaces; StepFun is the workspace’s own provider, calling its model API directly through a built-in session. The app takes care of workspaces, sessions and process management.',
        'CLI sessions follow the local-terminal contract: they inherit your environment and configuration without extra wrapping or restrictions, and StepFun tool calls run under the same permission and evidence rules. A session survives view switches and refreshes, and the app ends it only when you confirm; unexpected exits are recorded as they are observed.',
        'For long-running work, an optional task handoff records the goal, authorizations, verified state and acceptance criteria as an immutable document; after review, a fresh session continues under the same contract — an advanced feature, never a burden on daily use.',
      ],
      capabilities: [
        {
          name: 'Native Agent Sessions',
          description: 'Codex, Claude Code and Antigravity in their own TUIs, plus a first-party StepFun session on a direct API.',
        },
        {
          name: 'Local Terminal Contract',
          description: 'CLI sessions inherit your environment and configuration; when a capability is missing, launch is refused rather than quietly degraded.',
        },
        {
          name: 'A Full Session Lifecycle',
          description: 'Create, rename, switch, reconnect, take over across tabs and end explicitly, with process state always visible.',
        },
        {
          name: 'Task Handoff & Continuation',
          description: 'Goals, authorizations and acceptance criteria recorded as immutable documents, reviewed before a new session picks them up.',
        },
        {
          name: 'External Integrations',
          description: 'Controlled task execution and read-only project access for automation and tooling, under the same permission boundaries.',
        },
      ],
      workflow: ['Pick a workspace', 'Choose a provider and open a session', 'Work the way you would in a terminal', 'Switch, reconnect or end', 'Optional: hand off a task to continue'],
      workflowLabel: 'How It Works',
      workflowEyebrow: 'How It Works',
      systemLayers: [
        'Interaction',
        'Provider',
        'Execution',
        'Governance',
      ],
      currentState: {
        implemented: 'All four providers are available today: native sessions, the full session lifecycle with tab takeover, read-only historical chats, task handoff and continuation, external integrations, and resource coordination for concurrent work.',
        currentFocus: 'Making long-running sessions more dependable — reconnection, crash recovery and resource coordination.',
        nextDirection: 'Keep native sessions at the center while refining task continuity and status observability.',
      },
      principles: [
        'Native sessions are the product; the app presents and manages them.',
        'Consistent with the local terminal: when something cannot run, it says so instead of quietly degrading.',
        'Session and task state is based on real process facts, never guesses at screen text.',
        'Handoff and integrations follow the same permissions and records — no second system.',
      ],
      media: [
        {
          src: '/projects/agent-workspace/hero-native-session-en.png',
          width: 2880,
          height: 1560,
          mobileSrc: '/projects/agent-workspace/hero-native-session-en-mobile.png',
          mobileWidth: 780,
          mobileHeight: 1688,
          alt: 'A live native session in a local demo workspace: the agent reads the repository, reports uncommitted changes and summarizes its structure inside the terminal.',
          placement: 'hero',
          kind: 'screenshot',
          caption: 'A live native session (Claude Code) captured from a local demo workspace; the in-app brand reads Xuan.',
        },
        {
          src: '/projects/agent-workspace/how-it-works-system-en.svg',
          width: 760,
          height: 880,
          mobileSrc: '/projects/agent-workspace/how-it-works-system-en-mobile.svg',
          mobileWidth: 460,
          mobileHeight: 810,
          alt: 'How it works: five daily steps from picking a workspace to ending a session, with task handoff drawn as an optional branch, above the four interaction, provider, execution and governance layers.',
          placement: 'system',
          kind: 'diagram',
          caption: 'The daily path, the optional handoff branch and the four layers; as of September 2026.',
        },
      ],
    },
    {
      slug: PROJECT_SLUGS.snapshotRunner,
      detailPath: projectRouteFor('en', PROJECT_SLUGS.snapshotRunner),
      number: '03',
      group: 'openSourceTool',
      category: 'OPEN SOURCE · GIT EVIDENCE',
      name: 'Snapshot Runner',
      englishName: 'Snapshot Runner',
      summary: 'Deterministic, read-only Git evidence for coding agents and automation.',
      cardSummary: 'Collect repository evidence for coding agents and automation.',
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
          description: 'Collecting branch state, diffs, untracked files and branch reviews through read-only Git operations, and existing test logs within explicit size limits.',
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
      group: 'openSourceTool',
      category: 'OPEN SOURCE · GIT CONTEXT',
      name: 'Context Loader',
      englishName: 'Context Loader',
      summary: 'Deterministic, bounded local Git context as Markdown or JSON.',
      cardSummary: 'Prepare local repository context for coding agents.',
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
        implemented: 'Release 1.3.0 on PyPI ships the context-loader distribution with the project-context command and three output formats — Markdown, JSON and compact JSON — using only the Python standard library.',
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
      signature: ['XUANHENG TECHNOLOGY', 'Structure · Intelligence · Complexity'],
    },
    philosophy: {
      lead: 'Exploring the unknown. Measuring complexity.',
      concepts: [
        {
          symbol: 'Xuan',
          description: 'Represents the exploration of structures that remain unknown.',
        },
        {
          symbol: 'Heng',
          description: 'Represents measurement and balance within complex systems.',
        },
      ],
    },
    research: {
      kicker: '02 · Research',
      title: 'Research Areas',
      lead: [
        'Quantitative research, artificial intelligence',
        'and computational systems.',
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
      kicker: '01 · Selected Work',
      title: 'Selected Projects',
      viewAll: 'View All Projects',
    },
    aboutPreview: {
      kicker: '03 · About',
      title: 'About Xuanheng',
      lead: 'Xuanheng Technology is based in Suzhou, China.',
      paragraphs: [
        'Our work focuses on artificial intelligence, quantitative research and computational systems.',
        'We combine mathematical thinking, engineering practice and intelligent tools for long-term research.',
      ],
      linkLabel: 'Our Research Philosophy',
    },
    contact: {
      kicker: '04 · Contact',
      title: 'Contact',
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
      lead: 'Two kinds of work live here: proprietary research systems built for our own long-term questions, and open-source developer tools published for coding agents.',
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
    emailLabel: 'Email',
    x: {
      label: 'X',
      value: '@xuanhengtech',
      href: 'https://x.com/xuanhengtech',
    },
  },
} satisfies SiteContent;
