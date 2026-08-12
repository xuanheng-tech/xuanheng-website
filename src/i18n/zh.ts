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
      description: '玄衡科技在 AI Agent、政策智能与量化研究基础设施方向的研究项目。',
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
      slug: PROJECT_SLUGS.agentWorkspace,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.agentWorkspace),
      number: '01',
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
      slug: PROJECT_SLUGS.policyIntelligence,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.policyIntelligence),
      number: '02',
      category: 'POLICY INTELLIGENCE',
      name: '玄衡策知',
      englishName: 'Policy Intelligence',
      summary: '面向政策研究的数据智能系统。',
      status: '状态：研究原型',
      focus: ['政策研究', '结构化知识', 'AI 分析'],
      overview: [
        '通过知识结构化、智能检索与分析能力，提升复杂政策信息处理效率。',
        '系统围绕官方公开政策材料，连接有界采集、原始证据保存、确定性文档解析与人工审核，形成可回溯的研究链路。',
        '政策正文、附件、结构化事实、政策系列、匹配判断与监控变化均关联到具体 Evidence；未知项保持未知，不自动推断申报资格。',
      ],
      capabilities: [
        {
          name: '官方来源采集',
          description: '从已登记的公开渠道有界采集材料，验证来源并识别内容变化。',
        },
        {
          name: '文档结构化',
          description: '将 HTML、PDF、DOCX 与 XLSX 确定性解析为带定位信息的稳定内容块。',
        },
        {
          name: '证据化分析',
          description: '通过人工审核的结构化事实、政策系列与匹配判断支持研究，不替代资格认定。',
        },
        {
          name: '研究工作台',
          description: '集中呈现政策目录、研究机会、复核队列、监控状态与原始 Evidence。',
        },
      ],
      workflow: ['官方来源采集', '证据固化与文档解析', '结构化事实与人工审核', '匹配、监控与研究输出'],
      systemLayers: ['来源与监控层', '原始证据与文档目录层', '语义、政策系列与匹配层', 'Viewer 与 Review Workbench'],
      currentState: {
        implemented: '已实现公开材料采集与验证、不可变证据目录、多格式确定性解析、结构化审核与匹配、变化监控及研究工作台。',
        currentFocus: '完善官方渠道覆盖、政策系列完整性与 Evidence 驱动的复核流程。',
        nextDirection: '在保留人工审核边界的前提下，扩展来源覆盖与政策研究场景。',
      },
      principles: [
        '官方原始材料是最高层级的研究证据。',
        '重要判断应回溯到具体内容；未知不等于否定。',
        '系统辅助研究，不替代主管部门的资格解释与最终认定。',
      ],
    },
    {
      slug: PROJECT_SLUGS.quantitativeResearchPlatform,
      detailPath: projectRouteFor('zh', PROJECT_SLUGS.quantitativeResearchPlatform),
      number: '03',
      category: 'QUANTITATIVE RESEARCH',
      name: '玄衡量研',
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
      kicker: '01 · Philosophy',
      title: '玄衡之道',
      lead: '以探索理解未知，以度量认识复杂。',
      concepts: [
        {
          symbol: '玄',
          description: '玄，代表对未知结构的探索。',
        },
        {
          symbol: '衡',
          description: '衡，代表对复杂系统的度量和平衡。',
        },
      ],
      summary: '玄衡科技致力于利用数学、计算与人工智能方法，研究复杂系统中的规律，并构建面向未来的技术工具。',
    },
    research: {
      kicker: '02 · Research',
      title: '研究方向',
      lead: ['跨越数据、人工智能与计算基础设施的研究。'],
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
      kicker: '03 · Selected Work',
      title: '精选项目',
      viewAll: '查看全部项目',
    },
    aboutPreview: {
      kicker: '04 · About',
      title: '关于玄衡',
      lead: '玄衡科技成立于 2026 年，位于江苏苏州。',
      paragraphs: [
        '公司关注人工智能、计算技术以及复杂系统研究。',
        '我们相信，未来的重要创新将来自数学、工程能力与智能工具的深度结合。',
      ],
      linkLabel: '了解我们的研究理念',
    },
    contact: {
      kicker: '05 · Contact',
      title: '保持联系',
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
      lead: '以下项目是玄衡科技围绕复杂研究任务持续建设的研究原型与内部系统。',
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
  },
} satisfies SiteContent;
