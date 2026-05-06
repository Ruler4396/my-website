#!/usr/bin/env bash
set -euo pipefail

SOURCE_ROOT="/root/dev/obsidian-vault/Obsidian/网站发布"
SOURCE_ARTICLES="${SOURCE_ROOT}/articles"
SITE_ROOT="/root/dev/MyWeb"
TARGET_ARTICLES="${SITE_ROOT}/content/articles"
STATE_DIR="${SITE_ROOT}/.publish-state"
STATE_FILE="${STATE_DIR}/obsidian-articles.sha256"
LOG_FILE="${SITE_ROOT}/obsidian-publish.log"
LOCK_FILE="/tmp/myweb-obsidian-publish.lock"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" | tee -a "$LOG_FILE"
}

checksum_articles() {
  cd "$SOURCE_ARTICLES"
  if ! find . -type f -name '*.md' -print -quit | grep -q .; then
    printf 'empty\n'
    return
  fi
  find . -type f -name '*.md' -print0 \
    | sort -z \
    | xargs -0 sha256sum \
    | sha256sum \
    | awk '{print $1}'
}

force=0
if [[ "${1:-}" == "--force" ]]; then
  force=1
fi

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  exit 0
fi

if [[ ! -d "$SOURCE_ARTICLES" ]]; then
  log "source directory does not exist: $SOURCE_ARTICLES"
  exit 0
fi

mkdir -p "$TARGET_ARTICLES" "$STATE_DIR"

new_checksum="$(checksum_articles)"
old_checksum=""
if [[ -f "$STATE_FILE" ]]; then
  old_checksum="$(cat "$STATE_FILE")"
fi

if [[ "$force" -ne 1 && "$new_checksum" == "$old_checksum" ]]; then
  exit 0
fi

log "publishing Obsidian articles to MyWeb"
rsync -a --delete \
  --include='*/' \
  --include='*.md' \
  --exclude='*' \
  "${SOURCE_ARTICLES}/" \
  "${TARGET_ARTICLES}/"

cd "$SITE_ROOT"
node build-content.js | tee -a "$LOG_FILE"
rsync -a --delete --exclude='.git/' "${SITE_ROOT}/" /var/www/myweb/

printf '%s\n' "$new_checksum" > "$STATE_FILE"
log "publish complete"
