import { projectRouteFor } from './routes';
import { PROJECT_SLUGS, type SiteContent } from './types';

export const zh = {
  locale: 'zh',
  htmlLang: 'zh-CN',
  ogLocale: 'zh_CN',
  navigation: {
    home: '首页',
    about: '关于玄衡',
    projects: '研究与项目',
    contact: '联系',
  },
  chrome: {
    brandHomeLabel: '玄衡科技首页',
    mainNavigationLabel: '主导航',
    mobileNavigationLabel: '移动端导航',
    mobileMenuLabel: '导航菜单',
    languageSwitcherLabel: '语言选择',
    skipToContent: '跳至主要内容',
    filingNavigationLabel: '备案信息',
    backToTop: '返回顶部',
  },
  seo: {
    home: {
      title: '玄衡科技 | Xuanheng Technology',
      description: '苏州玄衡科技有限公司，专注人工智能、量化研究与计算系统。',
    },
    about: {
      title: '关于玄衡 | 玄衡科技',
      description: '了解玄衡科技的公司介绍、研究理念与技术方向。',
    },
    projects: {
      title: '研究与项目 | 玄衡科技',
      description: '玄衡科技在 AI Agent、开源开发者工具与量化研究基础设施方向的研究项目。',
    },
    contact: {
      title: '联系 | 玄衡科技',
      description: '联系苏州玄衡科技有限公司。',
    },
  },
  projectLabels: {
    project: 'PROJECT',
    focus: 'FOCUS',
    focusAriaSuffix: '研究重点',
    viewProject: '查看详情',
    backToProjects: '返回全部项目',
    groups: {
      researchSystem: '自研系统',
      openSourceTool: '开源工具',
    },
  },
  projectDetailLabels: {
    overview: '项目概述',
    capabilities: '核心能力',
    workflow: '工作流程',
    systemView: '系统视图',
    currentState: '当前状态',
    principles: '设计原则',
    implemented: '已实现',
    currentFocus: '当前阶段',
    nextDirection: '后续方向',
    previousProject: '上一个项目',
    allProjects: '全部项目',
    nextProject: '下一个项目',
    projectNavigationLabel: '项目导航',
  },
  projects: [
    {
      slug: PROJECT_SLUGS.quantitativeResearchPlatform,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.quantitativeResearchPlatform),
      number: '01',
      group: 'researchSystem',
      category: 'QUANTITATIVE RESEARCH',
      name: '玄衡量化',
      englishName: 'Quantitative Research Platform',
      summary: '自主构建的机构级量化研究基础设施。',
      status: '状态：内部研究系统',
      focus: ['量化研究', '数据基础设施', '研究工程'],
      overview: [
        '围绕数据工程、因子研究、实验验证与执行边界，构建可复现的研究基础设施。',
        '当前系统已形成 canonical 数据合同、受控数据采集与只读访问、ETF Universe、数值算子和正式因子研究边界，并以版本化基线与验证报告保存研究证据。',
        '回测、组合与执行仍按独立阶段建设；研究输出不会被直接等同于可交易结论。',
      ],
      capabilities: [
        {
          name: 'Canonical 数据基础',
          description: '以共享合同、受控采集、发布校验与只读访问组织研究数据。',
        },
        {
          name: '因子研究',
          description: '维护类型化数值算子、正式因子定义、注册表与因果性验证边界。',
        },
        {
          name: 'Universe 与 PIT',
          description: '围绕 ETF 范围、资格判断与人工复核，显式保留时点和可见性约束。',
        },
        {
          name: '研究工程',
          description: '用不可变基线、验证报告与分层合同记录可复核的研究过程。',
        },
      ],
      workflow: ['数据采集与校验', 'Canonical 访问与对齐', 'Universe 与因子研究', '证据冻结与工程交付'],
      systemLayers: ['数据合同与采集层', '只读数据访问层', 'Universe、Operators 与 Factors 层', '研究验证与执行边界'],
      currentState: {
        implemented: '已实现 canonical 数据合同与多类数据采集 / 只读访问、ETF Universe、正式 Operator / Factor 注册表及冻结验证机制。',
        currentFocus: '完善日频与分钟数据链路、PIT / 可见性语义及研究合同的一致性验证。',
        nextDirection: '在 point-in-time、成本与可交易约束明确后，逐步建设回测、组合与受控执行闭环。',
      },
      principles: [
        '先验证数据来源、时间对齐与可见性，再讨论研究表现。',
        '研究定义、运行证据与基线应可复现、可审查。',
        '探索、模拟与执行保持明确边界。',
      ],
    },
    {
      slug: PROJECT_SLUGS.agentWorkspace,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.agentWorkspace),
      number: '02',
      group: 'researchSystem',
      category: 'AGENT SYSTEM',
      name: '玄衡智枢',
      englishName: 'Agent Workspace',
      summary: '探索人机协作的新型智能工作空间。',
      status: '状态：研究原型',
      focus: ['AI Agent', '人机协作', '知识管理'],
      overview: [
        '构建面向复杂任务的 Agent 系统与工作流基础设施。',
        '系统将任务、工作区上下文、执行事件与最终结果组织在同一条可追溯链路中，支持只读调查、直接实施、先规划后实施与显式高权限流程。',
        '独立验证、确定性 Evidence 与 Artifact 用于保留关键事实；界面只呈现可验证状态，不展示模型私有推理。',
      ],
      capabilities: [
        {
          name: '任务与上下文',
          description: '持久化组织任务、工作区与不可变上下文快照。',
        },
        {
          name: '可控 Agent 流程',
          description: '按任务风险区分直接、规划与高权限流程，在关键节点保留人工批准。',
        },
        {
          name: '执行可观察性',
          description: '从追加式事件重建可回放的执行轨迹、阶段状态与失败位置。',
        },
        {
          name: 'Evidence 与交付',
          description: '通过独立验证、范围化 Evidence 与 Artifact 保留结果来源和交付边界。',
        },
      ],
      workflow: ['确认任务与工作区', '构建上下文快照', '受控 Agent 执行', '独立验证与结果交付'],
      systemLayers: ['交互与任务层', 'Workflow 与批准层', 'Context、Evidence 与 Artifact 层', 'Agent Runtime 与工具层'],
      currentState: {
        implemented: '已实现本地工作区与任务管理、多类 Workflow、事件与上下文快照、独立验证以及 Evidence / Artifact 交付链路。',
        currentFocus: '持续收口长任务的执行表达、结果呈现与运行一致性。',
        nextDirection: '扩展可复用的知识工作流与组织协作场景。',
      },
      principles: [
        'Run、Event 与 Evidence 是事实源，界面只是表达层。',
        '重要修改始终接受人的控制，并经过独立验证。',
        '上下文、结果与外部来源保留清晰的 provenance。',
      ],
    },
    {
      slug: PROJECT_SLUGS.snapshotRunner,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.snapshotRunner),
      number: '03',
      group: 'openSourceTool',
      category: 'OPEN SOURCE · GIT EVIDENCE',
      name: 'Snapshot Runner',
      englishName: 'Snapshot Runner',
      summary: '为编码 Agent 与自动化提供确定性的只读 Git 证据。',
      cardSummary: '为编码 Agent 与自动化流程收集仓库证据。',
      status: '状态：开源',
      repositoryUrl: 'https://github.com/xuanheng-tech/snapshot-runner',
      focus: ['Git 证据', '只读采集', 'Agent 工具链'],
      overview: [
        'Snapshot Runner 将仓库状态、变更、分支历史与已有测试日志采集为本地证据产物，不修改被检查的仓库，也不运行测试、调用模型、提交或推送，无需任何 API Key。',
        '四个采集命令产出确定性、哈希可校验的快照与有界摘要，定向证据读取命令则只返回既有快照中的相关部分，让 Agent 只审阅所需证据，而不是整个仓库。',
        '采集到的内容始终是不可信的证据而非 Agent 指令；拒绝执行与显式证据缺口让安全边界保留在每一份产物中。',
      ],
      capabilities: [
        {
          name: '仓库证据采集',
          description: '通过只读 Git 操作收集分支状态、差异、未跟踪文件、分支评审与测试日志。',
        },
        {
          name: '确定性产物',
          description: '以受控的文件权限原子发布哈希寻址快照，尺寸与 SHA-256 元数据可重复校验。',
        },
        {
          name: '定向证据读取',
          description: '从既有快照中读取单个文件或字段，无需重新运行 Git。',
        },
        {
          name: '失败即关闭边界',
          description: '对路径穿越、符号链接、特殊文件与不支持的能力直接拒绝，而不是执行仓库控制的程序。',
        },
      ],
      workflow: ['只读采集证据', '原子发布快照', '审阅有界摘要', '定向读取证据'],
      systemLayers: ['命令与契约层', '只读 Git 采集层', '快照产物层', '摘要与证据读取层'],
      currentState: {
        implemented: '2.3.0 已发布至 PyPI：四个采集命令与定向读取命令、快照与摘要契约齐备，运行时仅依赖 Python 标准库，并在 Ubuntu 24.04 上完成验证。',
        currentFocus: '以 tool_cli_contract.json 记录稳定的公开 CLI 契约与证据 schema。',
        nextDirection: '在保持只读与失败即关闭边界的前提下，覆盖更多仓库状态的证据场景。',
      },
      principles: [
        '仓库内容是不可信证据，不是 Agent 指令。',
        '工具不修改仓库、不运行测试、不调用模型、不提交也不推送。',
        '拒绝与证据缺口显式呈现；不提供自动分析。',
      ],
    },
    {
      slug: PROJECT_SLUGS.contextLoader,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.contextLoader),
      number: '04',
      group: 'openSourceTool',
      category: 'OPEN SOURCE · GIT CONTEXT',
      name: 'Context Loader',
      englishName: 'Context Loader',
      summary: '将本地 Git 工作树上下文确定、有界地渲染为 Markdown 或 JSON。',
      cardSummary: '为编码 Agent 准备本地仓库上下文。',
      status: '状态：开源',
      repositoryUrl: 'https://github.com/xuanheng-tech/context-loader',
      focus: ['仓库上下文', '确定性输出', 'Agent 工具链'],
      overview: [
        'Context Loader 为一个本地 Git 工作树渲染确定性、有界的上下文：读取仓库状态与一组固定的根文件，不抓取、不执行仓库代码、不访问网络，也不写入目标仓库。',
        '默认 Markdown 输出覆盖 Git 状态、开发指令、项目概览、声明命令、入口文件、近期提交与目录树；稳定的 JSON 接口面向机器调用方，附带内容哈希与状态码。',
        '相同输入产生逐字节一致的输出，使上下文可复核、可复现；固定的文件选择与大小上限保持传输有界。',
      ],
      capabilities: [
        {
          name: '有界根上下文',
          description: '只读取固定的根候选文件——AGENTS.md、README.md 与声明的入口文件——并施加显式大小上限。',
        },
        {
          name: 'Markdown 与 JSON 契约',
          description: '输出稳定的 Markdown 分节或带内容哈希与机器可读状态码的版本化 JSON 文档。',
        },
        {
          name: '确定性渲染',
          description: '相同工具版本、参数与仓库状态产生逐字节一致的输出。',
        },
        {
          name: '净化 Git 访问',
          description: '以固定路径的 Git 可执行文件（不通过 PATH 解析）与净化环境运行，忽略系统级、全局与每条命令的配置、attributes 及钩子。',
        },
      ],
      workflow: ['定位 Git 根', '采集有界根文件', '渲染 Markdown / JSON', '复核状态与哈希'],
      systemLayers: ['CLI 与契约层', '仓库采集层', '渲染与选择层', '机器可读输出层'],
      currentState: {
        implemented: '1.1.0 已发布至 PyPI（context-loader 发行版，project-context 命令），支持 Markdown 与 JSON 输出模式，运行时零第三方依赖。',
        currentFocus: '保持声明的 JSON schema 与 Markdown 分节契约对机器调用方稳定。',
        nextDirection: '继续作为仓库根上下文的有界传输；指令层级的解析由调用方的 Agent 框架负责。',
      },
      principles: [
        '相同输入输出逐字节一致；不同检出或工作树可能改变结果。',
        '固定选择不是自动脱敏：分享前先检查输出。',
        '工具只采集与渲染，不抓取、不执行仓库代码、不访问网络。',
      ],
    },
  ],
  home: {
    hero: {
      kicker: 'Independent Research & Technology · Suzhou',
      title: '玄衡科技',
      statement: ['探索复杂系统中的', '结构、规律与智能。'],
      intro: ['玄衡科技是一家独立科技公司，', '专注于量化研究、人工智能与计算系统。'],
      primaryCta: '探索项目',
      secondaryCta: '了解玄衡',
      brandMarkLabel: '玄衡品牌标志',
    },
    philosophy: {
      lead: '以探索理解未知，以度量认识复杂。',
      concepts: [
        {
          symbol: '玄',
          description: '代表对未知结构的探索。',
        },
        {
          symbol: '衡',
          description: '代表对复杂系统的度量和平衡。',
        },
      ],
    },
    research: {
      kicker: '02 · Research',
      title: '研究方向',
      lead: ['围绕量化研究、人工智能和计算基础设施开展研发。'],
      areas: [
        {
          index: '01',
          title: '量化研究',
          description: '基于数据、统计方法与计算模型，探索金融市场中的结构性规律。',
        },
        {
          index: '02',
          title: '人工智能',
          description: '研究 AI Agent、智能工作流与人机协作系统。',
        },
        {
          index: '03',
          title: '计算系统',
          description: '构建数据基础设施、实验平台与智能化工程体系。',
        },
      ],
    },
    selectedProjects: {
      kicker: '01 · Selected Work',
      title: '精选项目',
      viewAll: '查看全部项目',
    },
    aboutPreview: {
      kicker: '03 · About',
      title: '关于玄衡',
      lead: '玄衡科技成立于 2026 年，位于江苏苏州。',
      paragraphs: [
        '公司关注人工智能、计算技术以及复杂系统研究。',
        '我们相信，未来的重要创新将来自数学、工程能力与智能工具的深度结合。',
      ],
      linkLabel: '了解我们的研究理念',
    },
    contact: {
      kicker: '04 · Contact',
      title: '联系我们',
    },
  },
  about: {
    hero: {
      kicker: 'ABOUT · 关于玄衡',
      title: ['独立思考，', '长期研究。'],
      lead: '玄衡科技是一家独立科技公司，专注于人工智能、量化研究和计算系统。',
    },
    factsLabel: '公司基本信息',
    facts: [
      { label: '公司', value: '苏州玄衡科技有限公司' },
      { label: '成立', value: '2026' },
      { label: '所在地', value: '江苏苏州' },
    ],
    company: {
      kicker: '01 · Company',
      title: '公司介绍',
      paragraphs: [
        '玄衡科技是一家独立科技公司，专注于人工智能、量化研究和计算系统。',
        '我们通过数学建模、软件工程和人工智能技术，探索复杂系统中的可计算规律。',
        '公司成立于 2026 年，位于江苏苏州。',
      ],
    },
    philosophy: {
      kicker: '02 · Approach',
      title: '研究理念',
      statements: [
        '复杂系统通常具有隐藏结构。',
        '我们的工作不是简单预测结果，而是建立理解系统的方法。',
      ],
    },
    directions: {
      kicker: '03 · Capabilities',
      title: '技术方向',
      lead: '数学、工程与智能工具，在同一研究框架中协同。',
      items: [
        {
          index: '01',
          title: '量化研究',
          description: '以数据、统计方法和计算模型研究金融市场中的结构性规律。',
        },
        {
          index: '02',
          title: '人工智能',
          description: '研究 AI Agent、智能工作流，以及人与智能系统之间新的协作方式。',
        },
        {
          index: '03',
          title: '计算系统',
          description: '建设支持数据处理、实验研究与智能化工程的计算基础设施。',
        },
      ],
    },
    next: {
      label: '继续了解',
      linkLabel: '研究与项目',
    },
  },
  projectsPage: {
    hero: {
      kicker: 'PROJECTS · 研究与项目',
      title: ['从问题出发，', '构建研究系统。'],
      lead: '以下项目包括自研系统与已公开的开源工具：前者支撑玄衡在量化与 Agent 方向的长期研究，后者供开发者和编码 Agent 直接使用。',
    },
    listing: {
      kicker: 'SELECTED WORK · 2026',
      title: '项目目录',
    },
    next: {
      label: '进一步了解',
      linkLabel: '关于玄衡',
    },
  },
  contact: {
    kicker: 'CONTACT · 联系',
    title: '联系玄衡',
    companyLines: ['苏州玄衡科技有限公司', 'Suzhou Xuanheng Technology Co., Ltd.'],
    emailLabel: '邮箱',
    wechat: {
      label: '微信公众号',
      caption: '微信扫码关注「玄衡科技」公众号。',
      image: '/contact/wechat-official-account-qr.jpg',
      imageAlt: '玄衡科技微信公众号二维码',
    },
  },
} satisfies SiteContent;
