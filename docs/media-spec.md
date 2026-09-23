# Project media specification

本规范用于项目详情页后续接入正式媒体（当前公开项目为玄衡量化、玄衡智枢、Snapshot Runner
与 Context Loader，两个开源项目暂无媒体计划）。现有 `ProjectMediaAsset` 已支持
`hero`、`system`、`gallery` 三种位置，以及必填 `alt` 和可选 `caption`；没有媒体数据时，
页面不渲染媒体区域，也不使用占位内容。

## Hero visual

- 用途：在项目 Hero 中建立项目识别和第一视觉焦点，不承载必须通过图片才能理解的信息。
- 比例：推荐 `16:10`；同一批素材保持一致。
- 最小尺寸：桌面位图至少 `1920 × 1200 px`；矢量素材不受像素尺寸限制。
- 裁切：桌面保留主体四周至少 10% 安全区；移动端优先使用同一素材的居中裁切，关键内容需落在中央约 60% 宽度内。若无法安全裁切，应提供独立移动版本，而不是依赖 CSS 强裁。
- 替代文本：描述画面表达的项目能力或界面，不重复项目标题；纯装饰图使用空 `alt`。
- 图注：仅在来源、状态或画面语境有助于理解时使用，保持一句话以内。

## System diagram

- 用途：解释系统边界、主要层级或数据/工作流关系，不展示内部地址、凭据、真实账户数据或专有参数。
- 比例：推荐 `3:2`，复杂横向流程可使用不超过 `16:9` 的宽幅比例。
- 展示宽度：桌面最大使用全站内容容器宽度（约 `1200 px`），不放大超过素材的有效尺寸。
- 背景适配：图内颜色需同时在暖白 `#F6F1E8` 与墨黑 `#171717` 的目标区块中保持足够对比；若只适配一种背景，应在资产元数据中明确版本用途。
- 格式：优先使用语义清晰、文字可缩放的 SVG；仅在 SVG 不适合或需要保留复杂栅格内容时使用 PNG，PNG 至少为最终最大展示尺寸的 2 倍。
- 替代文本与图注：`alt` 概括图示结论，图注说明图的范围或版本；不要把图内全部文字复制进 `alt`。

## Gallery / product screenshots

- 数量：每个项目推荐 `2–5` 张，只保留能说明不同能力或工作阶段的画面。
- 比例：产品截图优先使用 `16:10`；同一组尽量统一，不为一致性裁掉关键界面。
- 单图：按内容宽度展示，可使用完整图注。
- 多图：桌面使用两列或顺序单列；移动端统一单列，不使用依赖拖拽或客户端 JavaScript 的轮播。
- 移动端：图片按容器宽度缩放，保持原始比例；不将宽屏界面强裁为不可理解的局部。
- 图注：说明画面、状态和必要的范围边界，避免营销口号；界面含示例数据时需明确为演示数据。
- 替代文本：描述用户可从截图中获得的关键信息；同组图片避免重复相同描述。

## Asset acceptance

- 仅接入已确认可公开、来源明确的正式素材。
- 不含 secret、内部路径、真实账户/资产数据、客户或合作方敏感信息。
- 文件名使用稳定英文 slug；压缩不改变 Logo、图表或界面的可读性。
- 接入后复查中文和英文详情页、390px 与 1440px、无横向溢出，以及无媒体项目不出现空区。

## Production plan by project

本计划只确定下一轮的选材范围，不代表素材已经完成或获准公开。候选基于 2026-08-13
对三个源项目的已提交文档与现有界面的只读检查。开始截图前必须由用户指定一个可公开、
干净且可复现的 revision，并使用专门准备的演示数据；不得直接采集含未发布改动的工作树。

### 玄衡智枢 / Agent Workspace

| 素材 | 目的 | 来源 | 制作方式 | 敏感信息清理 | Slot |
| --- | --- | --- | --- | --- | --- |
| 任务执行主视图 | 让访客一眼看到任务、可验证执行轨迹与最终结果如何分层呈现 | `AgentResultPresentation.tsx`、`ExecutionTrace.tsx` 与受控 Direct 任务 | 可直接截图；先运行一条短小、可公开的演示任务 | 替换任务正文、工作区名与绝对路径；隐藏 Run/Thread/Turn ID、hash、完整 tool 输出和终端内容 | `hero` |
| 运行事实到结果表达的系统图 | 解释 Workflow、Run/Event、Validation、Evidence/Artifact 与 Final Result 的关系 | `docs/architecture.md`、`docs/adr/0018-run-graph-observation.md` | 后续绘制；不应截取内部架构文档 | 只保留公开能力边界，不出现内部协议细节、存储标识或环境地址 | `system` |
| Execution Trace + Final Result | 展示执行中状态收敛为一个主要结果，而不是连续聊天气泡 | `ExecutionTrace.tsx`、`AgentResultPresentation.tsx` | 可直接截图 | 使用虚构任务和短结果；移除路径、ID、stdout 与错误堆栈 | `gallery` |
| Run Inspector 的验证与证据 | 展示 Validation、Evidence 与 Artifact 的可追溯入口 | `RunInspector.tsx` | 可直接截图 | 只使用演示 Evidence/Artifact；移除真实仓库名、文件路径、外部引用与内容 hash | `gallery` |
| Workspace / Workflow 上下文 | 展示任务与工作区、审批工作流之间的边界 | 现有 Workspace、Workflow 与 Task UI | 可直接截图，作为第三张可选图 | 不显示真实目录、历史任务、账号信息或终端会话 | `gallery` |

推荐首批保留 Hero、System Diagram，以及前两张 Gallery；第三张仅在版面确实需要说明工作区边界时加入。

### 玄衡策知 / Policy Intelligence（已下线：不再公开展示，以下计划不再执行）

| 素材 | 目的 | 来源 | 制作方式 | 敏感信息清理 | Slot |
| --- | --- | --- | --- | --- | --- |
| 政策监测总览 | 展示从官方来源覆盖、变化检测到待复核事项的整体工作台 | `OverviewPage.tsx`、`docs/viewer_demo.md` | 可直接截图；使用公开政策与策展后的演示数据 | 移除内部机构画像、匹配属性、提醒收件人、运行 ID 与本地路径；保留“以主管部门解释为准”的边界提示 | `hero` |
| 证据链系统图 | 解释官方来源、不可变原始证据、解析、结构化事实、人工复核与监测的关系 | 项目 README、`docs/viewer_demo.md` | 后续绘制 | 不展示私有来源、采集端点、内部数据覆盖率、审核账号或通知配置 | `system` |
| 政策详情与原文证据 | 展示结构化事实如何回到原始依据和确定性内容块 | `DocumentDetailPage.tsx` | 可直接截图 | 仅使用可公开的官方材料；清理本地文件标识、内部备注和非公开匹配信息 | `gallery` |
| 人工复核工作台 | 展示 approve / reject / needs review 的受控复核流程 | `WorkbenchPage.tsx` | 可直接截图 | 使用虚构审核人和中性备注，不显示内部权限、账号或审计标识 | `gallery` |
| 政策系列覆盖视图 | 展示政策周期覆盖、缺口和证据出现位置 | `PolicySeriesWorkspace.tsx` | 可直接截图，作为第三张可选图 | 只使用公开政策系列；不暴露内部优先级、客户语境或未公开判断 | `gallery` |

推荐首批保留 Hero、System Diagram、政策详情与人工复核两张 Gallery；覆盖视图仅在需要强调时间序列研究时加入。

### 玄衡量化 / Quantitative Research Platform

| 素材 | 目的 | 来源 | 制作方式 | 敏感信息清理 | Slot |
| --- | --- | --- | --- | --- | --- |
| 研究基础设施概览 | 将数据契约、时点一致性研究域、因子/算子注册与验证基线组织成一个克制的研究画面 | 官网已确认内容、`docs/architecture/current_architecture_baseline.md`、因子/算子 operations 文档 | 后续设计与绘制；当前没有适合作为正式 Hero 的稳定产品 UI | 不展示收益、策略参数、alpha 公式、真实账户/资产、数据供应商端点或内部覆盖规模；不得暗示研究结论可直接交易 | `hero` |
| 研究系统边界图 | 解释数据接入与 canonical contract、只读访问、point-in-time universe、研究算子/因子、验证基线，以及回测/组合/执行的边界 | `docs/architecture/target_data_architecture.md`、`docs/architecture/current_architecture_baseline.md` | 后续绘制 | 抽象数据库、服务器、券商与供应商实现；不出现策略逻辑、交易参数、账户或连接信息 | `system` |
| 因子与算子注册 / baseline | 展示定义、类型、语义与基线如何被显式管理 | `docs/factors/operations/`、`docs/operators/operations/` | 可从后续生成的公开版报告截图；不直接截开发工作树 | 使用合成名称与聚合统计；移除专有因子、参数、性能结果、内部路径和 commit 细节 | `gallery` |
| 数据质量与 PIT 审查 | 展示数据覆盖、时点一致性和验证结果，而非展示策略收益 | 数据访问审查文档与可公开的 validation report | 可从脱敏公开版报告截图 | 使用合成或公开数据；隐藏供应商、表名、主机、资产清单、失败样本和内部覆盖范围 | `gallery` |
| 研究编排视图 | 展示数据检查与研究任务的可重复执行关系 | `apps/quant_orchestration/` | 仅在后续选定稳定、干净 revision 且 UI 足够成熟时直接截图 | 隐藏 job/run ID、资源配置、环境名、日志、路径与执行端点 | `gallery` |

推荐首批保留经设计的 Hero、System Diagram，以及前两张报告型 Gallery。研究编排视图是可选项，
不应为了凑数量使用当前开发环境截图。
