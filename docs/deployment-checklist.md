# Static deployment checklist

本项目是平台无关的 Astro 纯静态站。选择托管平台后再把下列要求映射到该平台的实际配置，
不要预先提交未经验证的平台专用文件。

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
- 当前不需要业务重定向。若平台自动改写 trailing slash，确认不会产生循环或多跳。
- 按平台能力分别配置缓存：带内容指纹的构建资产可长期缓存，HTML、`robots.txt` 与 `sitemap.xml` 应允许及时更新。
- 按平台文档评估并验证安全响应头；至少检查 CSP、HSTS、`X-Content-Type-Options`、`Referrer-Policy`。在确定 Preview/Production 平台前不提交猜测的语法或策略。

## Metadata and assets

- 验证 canonical、`hreflang="zh-CN"`、`hreflang="en"` 与 `x-default` 使用正式站点 URL。
- 验证 `sitemap.xml` 覆盖 14 个正式 URL，`robots.txt` 指向正式 sitemap。
- 验证 SVG favicon、品牌 SVG、Open Graph 基础 metadata 与 404 `noindex`。
- 检查产物不存在 localhost、工作站绝对路径、debug 信息或 secret。

## Preview smoke check

- 使用非正式域名创建 Preview 项目，不绑定 `xuanhengtech.cn` 或 `www.xuanhengtech.cn`。
- 在线打开中文首页、English Home、Projects、至少一个项目详情页和一个不存在的路径。
- 验证语言切换、项目导航、静态资产、真实 404 状态、移动端 Header 与无横向溢出。
- 记录 Preview URL，供最后人工视觉验收使用。

当前完成 Preview 的最小人工动作：在选定托管平台创建并授权一个静态 Preview 项目，设置
`npm run build` / `dist/`，完成首次部署后提供实际 Preview URL。正式域名和 DNS 保持不变。
