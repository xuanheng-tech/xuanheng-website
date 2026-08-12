# Static deployment checklist

本项目是平台无关的 Astro 纯静态站。选择托管平台后再把下列要求映射到该平台的实际配置，
不要预先提交未经验证的平台专用文件。

## Current readiness

- Launch preparation 基于 Website V1 RC `5fcac56588cae6c3f02af7e01d3f410662b783e0`。
- 2026-08-13 本机只读检查未发现可直接使用的静态托管 CLI、认证环境或仓库平台配置；本轮未创建项目、未部署，也未接触正式域名。
- 完成 Preview 的最小人工动作：用户在选定托管平台创建并授权一个静态 Preview 项目，按下方 Build contract 完成首次部署，再提供实际 Preview URL。

## Build contract

- Node: `24.19.0`（同时由 `.node-version` 与 `package.json#engines.node` 声明）。
- Install: `npm ci`。
- Build: `npm run build`。
- Output: `dist/`。
- Runtime: 无 Node server、后端、数据库或运行时环境变量依赖。
- URL policy: 目录式输出，正式页面使用 trailing slash；静态资产保持根路径引用。

## Hosting configuration

- 将 `dist/` 作为唯一发布目录。
- 确认平台会把未知路径映射到 `dist/404.html`，并返回真实 HTTP 404；若不会，按平台文档配置 custom 404。
- Preview 当前不需要业务重定向；Production 仅需下方定义的 www → apex。若平台自动改写 trailing slash，确认不会产生循环或多跳。
- 按平台能力分别配置缓存：带内容指纹的构建资产可长期缓存，HTML、`robots.txt` 与 `sitemap.xml` 应允许及时更新。
- 按平台文档评估并验证安全响应头；至少检查 CSP、HSTS、`X-Content-Type-Options`、`Referrer-Policy`。在确定 Preview/Production 平台前不提交猜测的语法或策略。

## Metadata and assets

- 验证 canonical、`hreflang="zh-CN"`、`hreflang="en"` 与 `x-default` 使用正式站点 URL。
- 验证 `sitemap.xml` 覆盖 14 个正式 URL，`robots.txt` 指向正式 sitemap。
- 验证 SVG favicon、品牌 SVG、Open Graph 基础 metadata 与 404 `noindex`。
- 检查产物不存在 localhost、工作站绝对路径、debug 信息或 secret。

## Preview smoke check

- 使用非正式域名创建 Preview 项目，不绑定 `xuanhengtech.cn` 或 `www.xuanhengtech.cn`。
- 在线打开中文首页、English Home、Projects、三个项目详情页和一个不存在的路径。
- 验证语言切换、项目导航、静态资产、真实 404 状态、移动端 Header 与无横向溢出。
- 核对 HTTPS、trailing slash、压缩和实际缓存响应；记录 Preview URL，供最后人工视觉验收使用。

## Production domain gate

- 正式 canonical 为 `https://xuanhengtech.cn`；`https://www.xuanhengtech.cn` 预期做单向 301/308 重定向到 apex，并保留 path 与 query。精确语法由最终托管平台决定。
- 绑定域名前确认两个 hostname 都能获得有效 HTTPS 证书，且不存在 HTTP/HTTPS 或 apex/www 重定向循环。
- DNS 切换前保存当前 zone 记录，确认托管平台目标、证书要求和回滚值；切换后从公共解析器核对 A/AAAA/CNAME、HTTPS、redirect、canonical、sitemap 与核心页面。
- 网站记录调整不得删除或覆盖 MX，以及 SPF、DKIM、DMARC 等邮件相关 TXT。若更换 nameserver，必须先完整迁移并复核这些记录，避免影响 `contact@xuanhengtech.cn`。

## ICP preparation

选择中国大陆接入服务时，先通过实际接入服务商核对江苏省当期要求，再提交真实信息。本清单只用于准备，不预填备案数据：

- 主办单位：确认营业执照上的完整名称、主体类型、统一社会信用代码、注册地址与有效证件。
- 域名：确认 `xuanhengtech.cn` 的实名主体、域名证书和有效期与主办单位要求一致。
- 网站名称：由用户确认拟备案名称及接入服务商可接受性，不把工作名称当作已获批名称。
- 网站负责人：准备并确认真实姓名、证件、手机号、邮箱及接入服务商要求的真实性核验；不要写入仓库。
- 服务内容：按当前企业展示型静态站的实际范围申报，并由接入服务商确认分类；本项目没有账号、表单、交易、CMS 或用户生成内容。
- 接入信息：确定正式托管平台、中国大陆接入节点、接入服务商及其要求的服务器/IP/接入信息后再填写。
- 前置审批：仅在主管部门或接入服务商根据实际服务内容明确要求时提供；不得自行假定或伪造。
- Footer 接入点：`src/components/Footer.astro` 的 `filingLinks` 当前为空且不渲染。获得真实 ICP 备案号后，加入真实 label，并链接 `https://beian.miit.gov.cn/`；上线前检查首页底部显示与可访问性。

官方依据与实际办理入口：

- 工业和信息化部《非经营性互联网信息服务备案管理办法》：<https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html>
- 江苏省通信管理局：<https://jsca.miit.gov.cn/>
- ICP/IP 地址/域名信息备案管理系统：<https://beian.miit.gov.cn/>

## Public-security filing preparation

- 在 ICP 完成且网站正式联通后，按所在地公安机关和全国互联网安全管理服务平台的当期指南办理；法规规定的时限为正式联通之日起 30 日内。
- 届时按实际平台要求准备主办单位、网站及域名信息，负责人/安全负责人/应急联络人资料，以及接入服务商、服务器/IP 和已取得的 ICP 信息；具体字段与材料以平台当期页面为准。
- 审核通过后，从平台取得真实备案编号、图标与官方 HTML，再加入 `Footer.astro` 的 `filingLinks`。不要提前生成编号或图标；链接使用平台核发代码所指定的查询地址。

官方依据与办理入口：

- 公安部“互联网+政务服务”事项说明：<https://ywtb.mps.gov.cn/newhome/portal/fw/ssqd/000709114001?Pattern=normalPattern>
- 全国互联网安全管理服务平台：<https://beian.mps.gov.cn/>

## Production release runbook

### Preconditions

- Media Complete，Preview 在线验收和最终人工视觉验收均已通过。
- ICP、托管区域、正式域名和公安联网备案时间点已由用户与实际服务商确认。
- 记录准备发布的精确 RC commit；确认批准范围内没有未提交文件。

### Release

1. 在 Node `24.19.0` 环境执行 `npm ci`、`npm run build`，并完成最终 link / SEO / privacy 检查。
2. 将同一 commit 的 `dist/` 发布到已验收的平台，先核对平台 URL，再绑定 apex 与 www。
3. 按平台已验证配置完成 www → apex、custom 404、cache/security headers；随后执行 DNS 与 HTTPS 验证。
4. 在线 smoke 中文/English 首页、Projects、三个项目详情页、语言切换、404、favicon 与静态资产。

### Post-release and rollback

- 核对 ICP Footer 的真实编号与查询链接；公安备案完成后再补真实图标、编号和平台核发链接。
- 记录 production URL、部署 ID 与 source commit，确认 local / origin / deployed revision 一致且发布工作树 clean。
- 回滚入口是托管平台对上一个已验收部署的原子回退；域名或证书异常时先回退平台部署/绑定，再按切换前保存的 DNS 值恢复。平台选择后必须先验证实际回滚操作，不能只依赖本清单。
