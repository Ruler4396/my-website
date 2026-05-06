# Obsidian Publish Flow

## Goal

Edit public articles in Obsidian, then let the server publish those articles into the static MyWeb site.

## Source Of Truth

- Public writing source: `/root/dev/obsidian-vault/Obsidian/网站发布/articles/`
- Website content target: `/root/dev/MyWeb/content/articles/`
- Generated data file: `/root/dev/MyWeb/js/content-data.js`
- Live Nginx root: `/var/www/myweb/`

Only the `网站发布/articles/` directory is treated as public article input. Other Obsidian folders are not published.

## Automatic Job

Cron runs this script every minute:

```bash
/root/dev/MyWeb/scripts/publish-obsidian-content.sh
```

The script computes a checksum for Markdown files under `网站发布/articles/`. If nothing changed, it exits without building or deploying. If content changed, it syncs Markdown into `MyWeb/content/articles/`, runs `node build-content.js`, and rsyncs the site to `/var/www/myweb/`.

## Manual Publish

```bash
ssh aliyun-ecs-gz
/root/dev/MyWeb/scripts/publish-obsidian-content.sh --force
```

## Logs

- Script log: `/root/dev/MyWeb/obsidian-publish.log`
- Cron output log: `/root/dev/MyWeb/obsidian-publish-cron.log`
