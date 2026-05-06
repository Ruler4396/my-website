# Obsidian Publish Flow

## Goal

Edit public articles in Obsidian, then let the server publish those articles into the static MyWeb site.

## Source Of Truth

- Public writing source: `/root/dev/obsidian-vault/Obsidian/网站发布/`
- Website content target: `/root/dev/MyWeb/content/`
- Generated data file: `/root/dev/MyWeb/js/content-data.js`
- Live Nginx root: `/var/www/myweb/`

Only the supported category directories under `网站发布/` are treated as public input:

- `articles/`
- `notes/`
- `memories/`
- `misc/`
- `poetry/`

Other Obsidian folders are not published.

## Automatic Job

Cron runs this script every minute:

```bash
/root/dev/MyWeb/scripts/publish-obsidian-content.sh
```

The script computes a checksum for Markdown files under `网站发布/`. If nothing changed, it exits without building or deploying. If content changed, it syncs Markdown from the supported category directories into `MyWeb/content/`, runs `node build-content.js`, and rsyncs the site to `/var/www/myweb/`.

Article rendering is normalized for prose: in `articles/`, each non-empty source line is treated as a paragraph. Other categories keep normal Markdown semantics so poetry, lists, and notes remain closer to their source formatting.

## Manual Publish

```bash
ssh aliyun-ecs-gz
/root/dev/MyWeb/scripts/publish-obsidian-content.sh --force
```

## Logs

- Script log: `/root/dev/MyWeb/obsidian-publish.log`
- Cron output log: `/root/dev/MyWeb/obsidian-publish-cron.log`
