#!/usr/bin/env bash
set -euo pipefail

SOURCE_ROOT="/root/dev/obsidian-vault/Obsidian/网站发布"
SITE_ROOT="/root/dev/MyWeb"
TARGET_ROOT="${SITE_ROOT}/content"
STATE_DIR="${SITE_ROOT}/.publish-state"
STATE_FILE="${STATE_DIR}/obsidian-content.sha256"
LOG_FILE="${SITE_ROOT}/obsidian-publish.log"
LOCK_FILE="/tmp/myweb-obsidian-publish.lock"
PUBLISH_CATEGORIES=(articles notes memories misc poetry works)

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" | tee -a "$LOG_FILE"
}

checksum_content() {
  cd "$SOURCE_ROOT"
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

if [[ ! -d "$SOURCE_ROOT" ]]; then
  log "source directory does not exist: $SOURCE_ROOT"
  exit 0
fi

mkdir -p "$TARGET_ROOT" "$STATE_DIR"

new_checksum="$(checksum_content)"
old_checksum=""
if [[ -f "$STATE_FILE" ]]; then
  old_checksum="$(cat "$STATE_FILE")"
fi

if [[ "$force" -ne 1 && "$new_checksum" == "$old_checksum" ]]; then
  exit 0
fi

log "publishing Obsidian content to MyWeb"
for category in "${PUBLISH_CATEGORIES[@]}"; do
  source_dir="${SOURCE_ROOT}/${category}"
  target_dir="${TARGET_ROOT}/${category}"
  if [[ ! -d "$source_dir" ]]; then
    log "skip missing category: ${category}"
    continue
  fi

  mkdir -p "$target_dir"
  rsync -a --delete \
    --include='*/' \
    --include='*.md' \
    --exclude='*' \
    "${source_dir}/" \
    "${target_dir}/"
done

cd "$SITE_ROOT"
node build-content.js | tee -a "$LOG_FILE"
rsync -a --delete --exclude='.git/' "${SITE_ROOT}/" /var/www/myweb/

printf '%s\n' "$new_checksum" > "$STATE_FILE"
log "publish complete"
