# PJT-0005 · MyWeb · PROJECT_RUNBOOK

最后更新：2026-03-10

## 1. 目标
作为资料站点逐步工程化，沉淀个人知识与项目资料。

## 2. 运行信息
- 路径：`/root/dev/MyWeb`
- 线上静态目录：`/var/www/myweb`
- 当前状态：资料站点已接入正式域名；2026-03-06 完成首页视觉重构
- 主域名：`https://aqsk.top`
- 备用网址：`https://www.aqsk.top`（301 跳转到裸域）
- Web 服务：`nginx.service`
- 监听：`80/443`
- 宿主机防火墙：已启用 UFW，默认拒绝入站，仅放行 `22/tcp`、`80/tcp`、`443/tcp`。

## 3. 运维要点
- 域名 `aqsk.top` / `www.aqsk.top` 已切到 Nginx，HTTP 自动跳转到 HTTPS。
- TLS 证书使用 Let's Encrypt，证书目录：`/etc/letsencrypt/live/aqsk.top/`。
- 站点安全头：已启用 `HSTS`、兼容型 `CSP`、`Permissions-Policy`，并保留既有 `X-Frame-Options` / `nosniff` / `Referrer-Policy`。
- 网站根目录仍为 `root /var/www/myweb`，Nginx 配置文件：`/etc/nginx/sites-available/myweb`。
- `/admin`、`/wecom/callback`、`/reports`、`/report-assets` 路径由 Nginx 反代到桥接服务。
- 管理台规范入口：`https://aqsk.top/admin`；IP/HTTP 形式的 `/admin` 已统一 301 到该域名入口。
- 部署目录内历史预览页样例数据已从旧 IP 更新到 `aqsk.top`，避免页面中继续展示 `8.138.1.39`。
- 页脚已接入工信部备案 + 公安备案双条目，公网安备展示图标资源位于项目根目录 `备案图标.png`，部署后对外路径为 `/备案图标.png`。

## 4. 文档入口
- 变更记录：`docs/PROJECT_CHANGELOG.md`
- 历史归档：`/root/dev/archive/DEVELOPMENT_LOGBOOK_FULL_2026-03-05.md`
