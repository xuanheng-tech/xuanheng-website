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
        '面向个人与组织的复杂知识工作，连接任务、知识上下文与可验证的执行过程。',
      ],
      capabilities: [
        {
          name: 'Agent 工作流',
          description: '组织复杂任务中的智能执行步骤与状态。',
        },
        {
          name: '人机协作',
          description: '在关键节点保留清晰的人工判断与控制。',
        },
        {
          name: '知识管理',
          description: '连接任务所需的资料、上下文与成果。',
        },
      ],
      workflow: ['任务输入', '上下文构建', 'Agent 执行', '结果验证'],
      systemLayers: ['交互层', 'Agent 与工作流层', '知识与证据层', '执行层'],
      currentState: {
        implemented: '已形成任务、Agent 与执行记录的基础工作环境。',
        currentFocus: '提升复杂任务中的可观察性与人机协作体验。',
        nextDirection: '扩展知识工作流与组织级使用场景。',
      },
      principles: [
        '复杂任务需要可观察的执行过程。',
        '智能执行应始终服务于人的判断。',
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
        '围绕政策资料的组织、检索与研究分析，建立清晰、可追溯的信息处理路径。',
      ],
      capabilities: [
        {
          name: '知识结构化',
          description: '将分散的政策信息组织为可检索的知识结构。',
        },
        {
          name: '智能检索',
          description: '围绕研究问题快速定位相关资料与关联信息。',
        },
        {
          name: '辅助分析',
          description: '支持政策材料的比较、归纳与研究判断。',
        },
      ],
      workflow: ['信息汇集', '结构化处理', '检索分析', '研究输出'],
      systemLayers: ['数据层', '知识层', '检索层', '分析层'],
      currentState: {
        implemented: '已形成政策资料组织与智能分析的研究原型。',
        currentFocus: '完善结构化知识与检索分析之间的协同。',
        nextDirection: '扩展复杂政策议题的研究工作流。',
      },
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
        '覆盖数据工程、因子研究、实验管理与交易执行系统。',
        '以一致的数据与实验链路支撑研究验证，并连接后续的工程化执行。',
      ],
      capabilities: [
        {
          name: '数据工程',
          description: '组织研究所需的数据获取、处理与质量控制。',
        },
        {
          name: '因子研究',
          description: '支持研究假设、特征构建与统计检验。',
        },
        {
          name: '实验管理',
          description: '记录研究配置、结果与可复现的实验过程。',
        },
        {
          name: '交易执行',
          description: '连接研究输出与受控的执行系统。',
        },
      ],
      workflow: ['数据准备', '研究建模', '实验验证', '执行衔接'],
      systemLayers: ['数据基础设施', '研究引擎', '实验管理', '执行系统'],
      currentState: {
        implemented: '已形成覆盖数据、研究与实验管理的内部系统。',
        currentFocus: '提高研究过程的一致性、可复现性与工程效率。',
        nextDirection: '持续完善研究到执行之间的系统衔接。',
      },
      principles: [
        '研究过程必须可复现。',
        '数据、实验与执行应保持一致。',
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
