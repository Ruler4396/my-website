# AQSK / MyWeb

一个以静态内容为核心的个人站点，用于沉淀写作、阅读笔记、古典文本与资料索引。

## 当前前端方向

本轮改版重点不在“增加说明”，而在于**减少解释性文案、增强排版判断力与节奏感**。

- 视觉关键词：editorial / restrained / sharper grid / less card-like
- 结构策略：从“圆角卡片堆叠”改为“编辑式分栏 + 线性索引”
- 字体策略：显示字体、正文、等宽标签分层使用
- 动效策略：克制过渡、滚动显现、阅读进度，不做喧宾夺主的夸张动画

## 参考方向

本轮主要参考这些以视觉完成度著称的站点首页：

- Apple: https://www.apple.com/
- Linear: https://linear.app/
- Vercel: https://vercel.com/
- Stripe: https://stripe.com/

提炼出的可落地原则：

1. 大字号标题与短文案并存，避免大段“说明自己”。
2. 用分栏、线框、留白和对齐建立秩序，而不是只靠卡片和圆角。
3. 动效服务于阅读节奏，不抢内容本身。
4. 视觉层级优先通过字体、间距、色彩对比建立，而不是堆装饰。

## 内容来源

- Markdown 源目录：`content/`
- 生成脚本：`build-content.js`
- 预生成数据：`js/content-data.js`

如有新增或修改 Markdown，执行：

```bash
cd /root/dev/MyWeb
node build-content.js
```

## 本地开发

直接启动静态服务即可：

```bash
python3 -m http.server 8080 --directory /root/dev/MyWeb
```

## 线上同步

线上 Nginx 根目录为 `/var/www/myweb`。

更新静态文件时无需重启 Nginx，直接同步：

```bash
rsync -a --delete /root/dev/MyWeb/ /var/www/myweb/
```

## 关键文件

- 页面结构：`index.html`
- 样式系统：`css/style.css`
- 页面逻辑：`js/main.js`
- 项目运行文档：`docs/PROJECT_RUNBOOK.md`
- 项目变更文档：`docs/PROJECT_CHANGELOG.md`
