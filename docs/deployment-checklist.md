# Static deployment checklist

本项目是通过 GitHub mirror 接入 Netlify 的 Astro 纯静态双语站。Netlify 是唯一的
Production target；ChatGPT Sites 与 Cloudflare 仅用于非正式备用或测试，不属于主发布链路。

## Current readiness

- Netlify Production 使用 GitHub `xuanheng-tech/xuanheng-website` 的 `main` 分支自动部署。
- 同一个 Netlify deployment 同时提供英文根路径与 `/zh-cn/` 简体中文路径；正式内容不复制页面实现。
- 发布前以当前 commit 重新执行下方 Build contract 与双语 smoke，Netlify URL 以实际部署结果为准。

## Build contract

- Node: `24.19.0`（同时由 `.node-version` 与 `package.json#engines.node` 声明）。
- Install: `npm ci`。
- Build: `npm run build`。
- Output: `dist/`。
- Runtime: 无 Node server、后端、数据库或运行时环境变量依赖。
- URL policy: 目录式输出，正式页面使用 trailing slash；静态资产保持根路径引用。

## Hosting configuration

- Netlify Production：GitHub `xuanheng-tech/xuanheng-website` `main` → `netlify.toml` → `npm ci` / `npm run build` → `dist/`；一个 deployment 提供英文与中文正式路由。
- ChatGPT Sites / Cloudflare Workers Static Assets：仅非正式备用或测试，不作为 Production source of truth；不应绕过 Netlify 发布正式版本。
- 一个源码仓库继续保留共享组件、`src/i18n/en.ts`、`src/i18n/zh.ts` 与 `src/pages/zh-cn/` 正式中文路由壳。
- `public/_redirects` 由 Netlify 读取，为旧 `/en/...` 路径提供无 JS 的 HTTP 301 到英文根路径；必须在在线环境验证。
- 确认平台会把未知路径映射到 `dist/404.html`，并返回真实 HTTP 404；若不会，按平台文档配置 custom 404。
- 正式英文页面使用根路径，中文页面使用 `/zh-cn/`；旧 `/en/...` 保留 no-JS 兼容页并由 Netlify `public/_redirects` 提供直达 HTTP 301 到新英文 URL，验证不得产生循环或多跳。另按下方定义配置 www → apex。
- 按平台能力分别配置缓存：带内容指纹的构建资产可长期缓存，HTML、`robots.txt` 与 `sitemap.xml` 应允许及时更新。
- 按平台文档评估并验证安全响应头；至少检查 CSP、HSTS、`X-Content-Type-Options`、`Referrer-Policy`。在确定 Preview/Production 平台前不提交猜测的语法或策略。

## Metadata and assets

- 验证每个英文与中文页面的 canonical 指向当前语言正式 URL，`hreflang="en"`、`hreflang="zh-CN"` 与 `x-default` 均指向对应页面；`x-default` 始终指向英文 URL。
- 验证 `sitemap.xml` 覆盖 14 个英文与中文正式 URL，不包含旧 `/en/...` 兼容路径；`robots.txt` 指向正式 sitemap。
- 验证 SVG favicon、品牌 SVG、Open Graph 基础 metadata 与 404 `noindex`。
- 检查产物不存在 localhost、工作站绝对路径、debug 信息或 secret。

## Netlify smoke check

- 通过 GitHub `main` 自动部署到 Netlify，不绑定或修改正式 DNS，记录实际 Netlify URL 与部署 commit。
- 在线打开 `/`、`/about/`、`/projects/`、`/contact/`、三个英文项目详情页及对应的 `/zh-cn/...` 页面；确认 `/en/...` 为 301，随机不存在路径返回真实 404。
- 验证 `EN | 中文` 在首页、列表页和项目详情页保持当前页面 counterpart，检查项目导航、CSS、SVG、favicon、HTTPS、trailing slash、压缩、缓存与安全响应头。
- 在 390px 与 1440px 视口检查英文/中文首页、列表页和详情页无横向溢出；同时确认产物无客户端 script。
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
2. 将同一 commit 推送到 GitHub `main`，由 Netlify Git integration 自动部署并记录实际 Netlify URL。
3. 在 Netlify 上核对 custom 404、`public/_redirects`、cache/security headers 与 HTTPS；正式域名绑定前不修改 DNS。
4. 在线 smoke 英文与中文首页、About、Projects、Contact、三个项目详情页、旧 `/en/...`、404、favicon 与静态资产；Cloudflare 与 ChatGPT Sites 不参与正式发布。

### Post-release and rollback

- 核对 ICP Footer 的真实编号与查询链接；公安备案完成后再补真实图标、编号和平台核发链接。
- 记录 production URL、部署 ID 与 source commit，确认 local / origin / deployed revision 一致且发布工作树 clean。
- 回滚入口是托管平台对上一个已验收部署的原子回退；域名或证书异常时先回退平台部署/绑定，再按切换前保存的 DNS 值恢复。平台选择后必须先验证实际回滚操作，不能只依赖本清单。
