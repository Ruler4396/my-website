# Obsidian Publish Design

## Purpose

The user edits public article content in local Obsidian, and the personal website automatically reflects those public article edits without exposing the whole Obsidian vault.

## Architecture

Keep Obsidian and MyWeb as separate systems. Obsidian remains the writing and sync vault. MyWeb remains the static website project. A single publish boundary connects them: `Obsidian/网站发布/articles/` is copied one-way into `MyWeb/content/articles/`.

## Data Flow

1. The user edits Markdown under `D:\Documents\学术\Obsidian\网站发布\articles\`.
2. The existing Obsidian sync setup brings those files to `/root/dev/obsidian-vault/Obsidian/网站发布/articles/`.
3. A server-side cron job runs `/root/dev/MyWeb/scripts/publish-obsidian-content.sh` every minute.
4. The script detects Markdown changes, syncs them into `/root/dev/MyWeb/content/articles/`, runs `node build-content.js`, and publishes `/root/dev/MyWeb/` to `/var/www/myweb/`.

## Safety

The script only reads one public source directory and only overwrites `MyWeb/content/articles/`. Other Obsidian folders are ignored. Other MyWeb content categories are not touched.

The script uses a lock file to prevent overlapping cron runs and a checksum file to avoid unnecessary builds.
