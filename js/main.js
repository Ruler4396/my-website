// 内容元数据覆盖：content/ 下的 md 由 Obsidian 发布流程管理，
// 标题、日期、显隐等展示层属性在这里覆盖，不改动源文件。
const CONTENT_OVERRIDES = {
    "articles/2025.12.17": { title: "见天明" },
    "articles/2024.5.25": { title: "无题" },
    "articles/2024.6.30": { title: "无题" },
    "articles/2025.7.22": { title: "无题" },
    "articles/2020.2.7": { hidden: true },
    "articles/自行车": { date: "2026/05/28" }
};

// 仅展示四类：记忆（memories）与清单（misc）的内容仍留在 content/ 与数据里，但不在站上展示
const CATEGORY_META = {
    articles: { label: "文章", order: 1 },
    notes: { label: "笔记", order: 2 },
    poetry: { label: "诗·词·赋", order: 3 },
    works: { label: "文学作品", order: 4 }
};

const state = {
    items: [],
    visibleItems: [],
    activeFilter: "all",
    query: "",
    openKey: null,
    revealSnippets: []
};

const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    revealField: document.getElementById("reveal-field"),
    revealPattern: document.getElementById("reveal-pattern"),
    flarePos: document.getElementById("flare-pos"),
    latestPanel: document.getElementById("latest-panel"),
    quoteStrip: document.getElementById("quote-strip"),
    totalCount: document.getElementById("total-count"),
    categoryGrid: document.getElementById("category-grid"),
    searchInput: document.getElementById("search-input"),
    filterTabs: document.getElementById("filter-tabs"),
    archiveList: document.getElementById("archive-list"),
    reader: document.getElementById("reader"),
    readerBackdrop: document.getElementById("reader-backdrop"),
    readerClose: document.getElementById("reader-close"),
    readerMeta: document.getElementById("reader-meta"),
    readerTitle: document.getElementById("reader-title"),
    readerBody: document.getElementById("reader-body"),
    readerProgressBar: document.getElementById("reader-progress-bar")
};

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitizeInline(value) {
    return String(value || "")
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[#>*_`~\-]+/g, " ")
        .replace(/&(?:emsp|nbsp|ensp|thinsp|#12288|#x3000);/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizeArticleMarkdown(markdown) {
    const normalized = String(markdown || "")
        .replace(/\r\n?/g, "\n")
        .replace(/\uFEFF/g, "")
        .replace(/&(?:emsp|nbsp|ensp|thinsp|#12288|#x3000);/gi, " ")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/p\s*>/gi, "\n\n")
        .replace(/<p[^>]*>/gi, "")
        .replace(/<\/div\s*>/gi, "\n")
        .replace(/<div[^>]*>/gi, "")
        .replace(/<\/?[^>\n]+>/g, "")
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\*([^*\n]+)\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\[\^[^\]]+\]/g, "")
        .replace(/\*/g, "");

    return normalized
        .split("\n")
        .map((line) => line
            .replace(/^[\u200B\u3000\s]+/, "")
            .replace(/^>\s?/, "")
            .replace(/^#{1,6}\s+/, "")
            .replace(/^[\-*+]\s+/, "")
            .replace(/^\d+\.\s+/, "")
            .replace(/[ \t]+$/g, ""))
        .filter((line) => line && !/^[_-]{3,}$/.test(line))
        .join("\n\n")
        .trim();
}

function titleFromPath(key) {
    const filename = key.split("/").pop() || key;
    return filename
        .replace(/\.md$/i, "")
        .replace(/[（(]\d{4}[.\-/]\d{1,2}[.\-/]\d{1,2}[）)]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function isDateOnlyTitle(title) {
    return /^\d{4}(?:[.\-/]\d{1,2}){0,2}$/.test(String(title || "").trim());
}

function extractTitle(markdown, key) {
    const heading = String(markdown || "").match(/^#\s+(.+)$/m);
    if (heading?.[1]) {
        return sanitizeInline(heading[1]);
    }

    const pathTitle = titleFromPath(key);
    if (pathTitle && !isDateOnlyTitle(pathTitle)) {
        return pathTitle;
    }

    const firstLine = String(markdown || "")
        .split(/\n+/)
        .map((line) => sanitizeInline(line))
        .find((line) => line.length > 0 && line.length <= 42);

    return firstLine || pathTitle || "未命名";
}

function extractExcerpt(markdown, title) {
    const cleaned = sanitizeInline(
        String(markdown || "")
            .replace(/^#\s+.+$/gm, " ")
            .replace(/\n/g, " ")
    );
    const withoutTitle = cleaned.startsWith(title) ? cleaned.slice(title.length).trim() : cleaned;
    return makeSnippet(withoutTitle, 64, 96) || "";
}

function makeSnippet(text, minLength = 56, maxLength = 92) {
    const cleaned = sanitizeInline(text);
    if (!cleaned) {
        return "";
    }

    const sentences = cleaned
        .split(/(?<=[。！？!?；;])\s*/)
        .map((part) => part.trim())
        .filter(Boolean);

    let snippet = "";
    for (const sentence of sentences) {
        const next = `${snippet}${sentence}`;
        if (next.length <= maxLength || snippet.length < minLength) {
            snippet = next;
        }
        if (snippet.length >= minLength) {
            break;
        }
    }

    if (!snippet) {
        snippet = cleaned;
    }

    if (snippet.length > maxLength) {
        return `${snippet.slice(0, maxLength).replace(/[，、；：,.!?。！？;:]+$/g, "")}…`;
    }

    if (snippet.length < minLength && cleaned.length > snippet.length) {
        const extended = cleaned.slice(0, maxLength);
        return extended.length < cleaned.length ? `${extended.replace(/[，、；：,.!?。！？;:]+$/g, "")}…` : extended;
    }

    return snippet;
}

function parseDateFromKey(key) {
    const match = key.match(/(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
    if (!match) {
        return null;
    }
    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(date) {
    if (!date) {
        return "未标日期";
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
}

function wordCount(markdown) {
    return sanitizeInline(markdown).length;
}

function formatCount(count) {
    return `${count} ${count === 1 ? "entry" : "entries"}`;
}

function buildItems() {
    const markdownContent = window.markdownContent || {};
    state.items = Object.entries(markdownContent)
        .map(([key, rawMarkdown], index) => {
            const [category] = key.split("/");
            const meta = CATEGORY_META[category];
            if (!meta) {
                return null;
            }

            const markdown = category === "articles" ? normalizeArticleMarkdown(rawMarkdown) : String(rawMarkdown || "");
            const override = CONTENT_OVERRIDES[key] || {};
            if (override.hidden) {
                return null;
            }
            const title = override.title || extractTitle(markdown, key);
            const excerpt = extractExcerpt(markdown, title);
            const date = override.date ? new Date(override.date) : parseDateFromKey(key);
            const words = wordCount(markdown);
            const searchText = `${title} ${excerpt} ${markdown} ${meta.label}`.toLowerCase();

            return {
                key,
                index,
                category,
                categoryLabel: meta.label,
                title,
                excerpt,
                markdown,
                date,
                words,
                searchText,
                sortTime: date ? date.getTime() : 0
            };
        })
        .filter(Boolean)
        .sort((a, b) => {
            if (b.sortTime !== a.sortTime) {
                return b.sortTime - a.sortTime;
            }
            if (CATEGORY_META[a.category].order !== CATEGORY_META[b.category].order) {
                return CATEGORY_META[a.category].order - CATEGORY_META[b.category].order;
            }
            return a.title.localeCompare(b.title, "zh-CN");
        });

    state.visibleItems = state.items;
}

function itemMeta(item) {
    const date = item.date ? ` / ${formatDate(item.date)}` : "";
    return `${item.categoryLabel}${date} / ${item.words}字`;
}

function openReader(key) {
    const item = state.items.find((entry) => entry.key === key);
    if (!item) {
        return;
    }

    state.openKey = key;
    elements.readerMeta.textContent = itemMeta(item);
    elements.readerTitle.textContent = item.title;

    if (typeof marked !== "undefined") {
        marked.setOptions({ gfm: true, breaks: item.category !== "articles" });
        elements.readerBody.innerHTML = marked.parse(item.markdown);
    } else {
        elements.readerBody.innerHTML = `<pre>${escapeHtml(item.markdown)}</pre>`;
    }

    elements.reader.classList.add("active");
    elements.reader.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    elements.readerBody.scrollTop = 0;
    updateReaderProgress();
}

function closeReader() {
    state.openKey = null;
    elements.reader.classList.remove("active");
    elements.reader.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function updateReaderProgress() {
    const { scrollTop, scrollHeight, clientHeight } = elements.readerBody;
    const progress = scrollHeight <= clientHeight ? 100 : (scrollTop / (scrollHeight - clientHeight)) * 100;
    elements.readerProgressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function renderLatest() {
    const latest = state.items.find((item) => item.category === "articles") || state.items[0];
    if (!latest) {
        elements.latestPanel.innerHTML = `<p class="empty-state">暂无内容。</p>`;
        return;
    }

    elements.latestPanel.innerHTML = `
        <p class="latest-meta">${escapeHtml(itemMeta(latest))}</p>
        <h2 class="latest-title">${escapeHtml(latest.title)}</h2>
        <p class="latest-excerpt">${escapeHtml(latest.excerpt)}</p>
        <button class="text-command" data-open="${escapeHtml(latest.key)}">Read</button>
    `;
}

// 未照亮区的兜底索引：内容不足时补齐，避免背景场出现空洞
const GHOST_FALLBACK = [
    "为失败赋魅", "再读《论持久战》", "拖延心理学", "辩证唯物主义的思维游戏",
    "最后的问题", "趁生命气息逗留", "福格行为模型", "页隙碎笔"
];

// 背景场只接受"像标题"的短句：过长会打乱节奏，含句读的多半是句子
function isGhostTitle(title) {
    if (!title || title.length < 2 || title.length > 14) {
        return false;
    }
    if (isDateOnlyTitle(title)) {
        return false;
    }
    if (/[。；：，、！？!?《》〈〉]/.test(title)) {
        return false;
    }
    if (/^\d/.test(title)) {
        return false;
    }
    return true;
}

// 未照亮区显示作者自己的文章标题，读作"灼进纸里的自建索引"
function buildBackgroundTitles() {
    const order = ["articles", "notes", "works"];
    const seen = new Set();
    const titles = [];

    for (const category of order) {
        for (const item of state.items) {
            if (item.category !== category) {
                continue;
            }
            const title = String(item.title || "").trim();
            if (!isGhostTitle(title) || seen.has(title)) {
                continue;
            }
            seen.add(title);
            titles.push(title);
            if (titles.length >= 12) {
                break;
            }
        }
        if (titles.length >= 12) {
            break;
        }
    }

    let cursor = 0;
    while (titles.length < 8) {
        titles.push(GHOST_FALLBACK[cursor % GHOST_FALLBACK.length]);
        cursor += 1;
    }

    return titles.slice(0, 12);
}

// 被火焰烧穿的正文：只取长度适中、以句号收尾的完整句，避免出现无意义的半句
function buildLitSentences() {
    const pool = [];

    const LIT_CATEGORIES = new Set(["articles", "notes", "works"]);
    for (const item of state.items) {
        if (!LIT_CATEGORIES.has(item.category) || !item.markdown) {
            continue;
        }
        const cleaned = sanitizeInline(item.markdown);
        for (const raw of cleaned.split(/(?<=[。！？!?；;])\s*/)) {
            const sentence = raw.trim();
            if (sentence.length < 12 || sentence.length > 34) {
                continue;
            }
            if (!/[。！？!?]$/.test(sentence)) {
                continue;
            }
            if (/^[\s，,、；;：:。！？!?）)】」』]/.test(sentence)) {
                continue;
            }
            pool.push(sentence);
        }
    }

    const unique = Array.from(new Set(pool));
    for (let i = unique.length - 1; i > 0; i -= 1) {
        const j = (i * 7 + 3) % (i + 1);
        [unique[i], unique[j]] = [unique[j], unique[i]];
    }

    state.revealSnippets = unique.length
        ? unique
        : ["把内容从装饰里剥离出来。", "索引不是答案，是入口。", "文字需要反复经过。"];

    return state.revealSnippets;
}

function renderRevealField() {
    if (!elements.revealPattern) {
        return;
    }

    const ghostTitles = buildBackgroundTitles();
    elements.revealPattern.innerHTML = ghostTitles
        .map((title, index) => `<span class="pattern-token pattern-token-${index + 1}">${escapeHtml(title)}</span>`)
        .join("");

    // 被火焰烧穿的正文交给 RevealFire 预渲染并按火焰密度显形
    if (window.RevealFire) {
        window.RevealFire.setSentences(buildLitSentences());
    }
}

function renderQuotes() {
    const quoteItems = state.items
        .filter((item) => item.excerpt.trim().length >= 56)
        .slice(0, 3);

    elements.quoteStrip.innerHTML = quoteItems
        .map((item) => `
            <article class="quote-card">
                <blockquote>${escapeHtml(makeSnippet(item.markdown, 42, 64))}</blockquote>
                <cite>${escapeHtml(item.title)}</cite>
            </article>
        `)
        .join("");
}

function renderCategories() {
    elements.totalCount.textContent = formatCount(state.items.length);
    elements.categoryGrid.innerHTML = Object.entries(CATEGORY_META)
        .filter(([category]) => state.items.some((item) => item.category === category))
        .map(([category, meta]) => {
            const count = state.items.filter((item) => item.category === category).length;
            const latest = state.items.find((item) => item.category === category);
            return `
                <button class="category-card" data-filter="${category}">
                    <strong>${count}</strong>
                    <span>${escapeHtml(meta.label)}</span>
                    <small>${escapeHtml(latest?.title || "")}</small>
                </button>
            `;
        })
        .join("");
}

function renderFilters() {
    const categories = ["all", ...Object.keys(CATEGORY_META).filter((category) => state.items.some((item) => item.category === category))];
    elements.filterTabs.innerHTML = categories
        .map((category) => {
            const label = category === "all" ? "全部" : CATEGORY_META[category].label;
            const count = category === "all" ? state.items.length : state.items.filter((item) => item.category === category).length;
            const active = state.activeFilter === category ? "active" : "";
            return `<button class="${active}" data-filter="${category}">${escapeHtml(label)} ${count}</button>`;
        })
        .join("");
}

function updateVisibleItems() {
    const query = state.query.trim().toLowerCase();
    state.visibleItems = state.items.filter((item) => {
        const matchFilter = state.activeFilter === "all" || item.category === state.activeFilter;
        const matchQuery = !query || item.searchText.includes(query);
        return matchFilter && matchQuery;
    });
}

function renderArchive() {
    updateVisibleItems();

    if (!state.visibleItems.length) {
        elements.archiveList.innerHTML = `<p class="empty-state">没有找到匹配内容。</p>`;
        return;
    }

    elements.archiveList.innerHTML = state.visibleItems
        .map((item) => `
            <article class="archive-row">
                <div class="item-meta">${escapeHtml(item.categoryLabel)}</div>
                <div>
                    <h3 class="archive-title" role="button" tabindex="0" data-open="${escapeHtml(item.key)}">${escapeHtml(item.title)}</h3>
                    ${item.excerpt ? `<p>${escapeHtml(item.excerpt)}</p>` : ""}
                </div>
                ${item.category === "articles" && item.date ? `
                <div>
                    <p class="item-meta">${escapeHtml(formatDate(item.date))}</p>
                </div>` : ""}
            </article>
        `)
        .join("");
}

function renderAll() {
    renderRevealField();
    renderLatest();
    renderQuotes();
    renderCategories();
    renderFilters();
    renderArchive();
}

function setTheme(theme, persist = true) {
    const dark = theme === "dark";
    const moonIcon = `
        <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.3A8.2 8.2 0 0 1 8.7 3.8a8.7 8.7 0 1 0 11.5 11.5Z"></path>
        </svg>
    `;
    const sunIcon = `
        <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.3"></circle>
            <path d="M12 2.8v2.1M12 19.1v2.1M4.4 4.4l1.5 1.5M18.1 18.1l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.4 19.6l1.5-1.5M18.1 5.9l1.5-1.5"></path>
        </svg>
    `;
    if (dark) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    elements.themeToggle.innerHTML = dark ? sunIcon : moonIcon;
    elements.themeToggle.setAttribute("aria-label", dark ? "切换到浅色主题" : "切换到深色主题");
    elements.themeToggle.setAttribute("aria-pressed", String(dark));
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute("content", dark ? "#151412" : "#f3efe7");
    if (persist) {
        localStorage.setItem("site-theme", theme);
    }
}

function initTheme() {
    const saved = localStorage.getItem("site-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"), false);
    elements.themeToggle.addEventListener("click", () => {
        const next = document.documentElement.hasAttribute("data-theme") ? "light" : "dark";
        setTheme(next);
    });
}

function initRevealField() {
    const field = elements.revealField;
    const flarePos = elements.flarePos;
    const masthead = document.querySelector(".masthead");

    if (!masthead) {
        return;
    }

    // 滚动只驱动 --hero-step（近作卡片的入场节奏）；火焰窗口与指针由 RevealFire 管理
    let scrollPending = false;

    const updateScrollStep = () => {
        scrollPending = false;
        const rect = masthead.getBoundingClientRect();
        const range = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / range));
        const easedProgress = Math.max(0, Math.min(1, (progress - 0.18) / 0.82));
        const step = Math.min(8, Math.floor(easedProgress * 9));
        masthead.style.setProperty("--hero-step", String(step));
        masthead.dataset.step = String(step);
    };

    const requestScrollStep = () => {
        if (!scrollPending) {
            scrollPending = true;
            requestAnimationFrame(updateScrollStep);
        }
    };

    updateScrollStep();
    window.addEventListener("scroll", requestScrollStep, { passive: true });

    if (window.RevealFire && field && flarePos) {
        window.RevealFire.mount({ field, flarePos });
    }
}

function initEvents() {
    document.addEventListener("click", (event) => {
        const openButton = event.target.closest("[data-open]");
        if (openButton) {
            openReader(openButton.dataset.open);
            return;
        }

        const filterButton = event.target.closest("[data-filter]");
        if (filterButton) {
            state.activeFilter = filterButton.dataset.filter;
            renderFilters();
            renderArchive();
            const archive = document.getElementById("archive");
            window.scrollTo({ top: archive.offsetTop - 72, behavior: "smooth" });
        }
    });

    elements.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value;
        renderArchive();
    });

    elements.readerBackdrop.addEventListener("click", closeReader);
    elements.readerClose.addEventListener("click", closeReader);
    elements.readerBody.addEventListener("scroll", updateReaderProgress);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && state.openKey) {
            closeReader();
            return;
        }
        if ((event.key === "Enter" || event.key === " ") && event.target instanceof Element) {
            const target = event.target.closest("[data-open]");
            if (target) {
                event.preventDefault();
                openReader(target.dataset.open);
            }
        }
    });
}

function init() {
    buildItems();
    initTheme();
    renderAll();
    initRevealField();
    initEvents();
}

init();
