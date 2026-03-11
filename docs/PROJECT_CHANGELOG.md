# PJT-0005 · PROJECT_CHANGELOG

## 2026-03-10
- 首页友情链接新增 `ZeroClaw 管理台`，统一指向 `https://aqsk.top/admin`，便于从主站直接进入管理后台。
- 管理台入口规范化：`http://8.138.1.39/admin`、`https://8.138.1.39/admin` 与 `http://aqsk.top/admin` 现统一 301 到 `https://aqsk.top/admin`，减少继续使用 IP 入口。
- 关闭遗留 `18990` 预览 http.server，避免临时预览页继续暴露在公网。
- 宿主机已启用 UFW：默认拒绝入站，仅放行 `22/tcp`、`80/tcp`、`443/tcp`。
- 主站 Nginx 安全头补强：新增 `Strict-Transport-Security`、兼容型 `Content-Security-Policy` 与 `Permissions-Policy`，并通过 reload 低冲击生效。

## 2026-03-09
- 微调备案区样式：压缩公网安备与工信部备案行距，优化图标尺寸与底部对齐，移动端允许更自然换行。
- 网站底部新增公安备案条目：`粤公网安备44090402441277号`，位于工信部备案号上方，并接入公安备案跳转链接。
- 项目根目录新增备案图标资源 `备案图标.png`，已同步部署到站点根路径 `/备案图标.png`。

## 2026-03-06
- 已关闭班级管理系统 `5173` 对外监听，主站仅保留 `https://aqsk.top/classroom/` 入口。
- 页脚中的班级管理系统友情链接已切换为同域名 HTTPS 入口：`https://aqsk.top/classroom/`。
- 主站 Nginx 新增 `/classroom/` 与 `/api/` 反代，班级管理系统可通过主域名子路径访问。
- 页脚新增备案号 `粤ICP备2026022061号`，并链接至工信部备案系统。
- 页脚新增友情链接：班级管理系统（后续已统一切换到 `https://aqsk.top/classroom/`）。
- 前端首页完成新一轮视觉重构：减少解释性文案，强化字体层级、版式节奏与留白控制。
- 页面结构从大面积圆角卡片改为更偏编辑式的分栏、线性索引与裁切型重点区块。
- 重写 `index.html` / `css/style.css` / `js/main.js`，保留 Markdown 内容索引与阅读器能力。
- 新增更克制的滚动显现、阅读进度与主题切换交互，弱化“模板感”和“AI 味”。
- README 已同步更新：补充设计方向、参考站点、开发方式与线上同步方式。
- 部署目录历史预览页（`zc-preview-20260304`）中的旧 IP 样例已替换为 `aqsk.top`，避免域名切换后页面仍展示旧入口。
- 域名 `aqsk.top` / `www.aqsk.top` 正式接入站点。
- Nginx 接管 `80/443`，实现 `http -> https` 与 `www -> aqsk.top` 跳转。
- Let's Encrypt 证书签发完成，主站入口切换为 `https://aqsk.top`。

## 2026-03-04
- 作为资料站点纳入总索引，等待后续工程化改造。
