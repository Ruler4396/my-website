# AGENTS.md

Static personal content site (AQSK / MyWeb), live at https://aqsk.top. Vanilla HTML/CSS/JS — no framework, no package.json, no bundler. Content is Chinese; code comments and docs mix Chinese and English.

## Commands

- Rebuild content data: `node build-content.js` (reads `content/**/*.md`, regenerates `js/content-data.js`)
- Rebuild language data: `node build-language.js` (regenerates `js/language-data.js` + `assets/language/*.svg`; font step calls `scripts/build-language-font.py`, so Python + fonttools must be available)
- Local preview: `python -m http.server 8080`, then open http://localhost:8080
- No lint, typecheck, or test infrastructure exists.

## Generated files — never edit by hand

- `js/content-data.js` — edit `content/**/*.md` instead, then run `node build-content.js`.
- `js/language-data.js` and `assets/language/*` — edit `language/source/*` instead, then run `node build-language.js`.

## Architecture

Two fully independent static pipelines:

1. **Content site**: `content/<category>/*.md` → `build-content.js` → `js/content-data.js` → rendered by `js/main.js` into `index.html` (archive list, search/filter, modal reader). Categories are `articles`, `notes`, `poetry`, `memories`, `misc`; labels and ordering live in `CATEGORY_META` at the top of `js/main.js`.
2. **Conlang lab (Project Neral)**: `language/source/*` (design docs + JS blueprints/corpus) → `build-language.js` → `js/language-data.js`, consumed by `language-lab.html` + `js/language-lab.js`. This pipeline never touches `content/`.

Gotchas:

- Markdown is rendered client-side with `marked` from CDN. Special case for `articles/`: every non-empty source line is normalized into its own paragraph (`normalizeArticleContent` in `build-content.js`, `breaks: false` in `js/main.js`). Other categories keep normal Markdown semantics — don't "fix" this asymmetry, poetry/lists depend on it.
- Styling: `css/style.css` is the entire design system, driven by `:root` CSS custom properties (paper/ink palette, dark theme override). Design direction is editorial/restrained: zero border-radius cards, minimal shadows, subtle scroll-reveal — see README for the keywords. Do not reintroduce rounded card UI or heavy animation.
- Script tags in `index.html`/`language-lab.html` use `?v=YYYYMMDDn` cache busters — bump the version string when you change a JS file.
- `CATEGORY_META` and the server publish flow both assume exactly the five category dirs above; new categories need code changes, not just a new folder.
- Footer ICP filing uses `备案图标.png` from the repo root by its exact Chinese filename (deployed as `/备案图标.png`) — do not rename it.
- Do not commit `.workbuddy/` (local tool metadata, untracked).

## Docs to read before touching an area

- `docs/PROJECT_RUNBOOK.md` — server/deployment facts (Nginx root `/var/www/myweb`, domain, security headers). Those paths live on the remote server; this workspace is the local dev copy.
- `docs/PROJECT_CHANGELOG.md` — append a dated entry (newest first) for significant changes.
- `docs/OBSIDIAN_PUBLISH.md` — a server cron runs `scripts/publish-obsidian-content.sh` every minute, syncing an Obsidian vault into `content/` and rebuilding; server-side content is overwritten from that vault.
- `docs/LANGUAGE_LAB.md` — conlang pipeline scope, counts, and naming conventions (internal codename "Project Neral" until the language name is frozen).

Commit messages: short imperative English one-liners (e.g. "Refine reader and archive light").
