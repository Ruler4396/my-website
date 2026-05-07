const CATEGORY_META = {
    articles: { label: "文章", order: 1 },
    notes: { label: "笔记", order: 2 },
    poetry: { label: "古典文本", order: 3 },
    memories: { label: "记忆", order: 4 },
    misc: { label: "清单", order: 5 }
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
    mastheadTitle: document.getElementById("masthead-title"),
    revealField: document.getElementById("reveal-field"),
    revealPattern: document.getElementById("reveal-pattern"),
    revealWords: document.getElementById("reveal-words"),
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
            const title = extractTitle(markdown, key);
            const excerpt = extractExcerpt(markdown, title);
            const date = parseDateFromKey(key);
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
    return `${item.categoryLabel} / ${formatDate(item.date)} / ${item.words}字`;
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

function renderRevealField() {
    if (!elements.revealPattern || !elements.revealWords) {
        return;
    }

    const patternTokens = ["RULER", "CONTENT", "ARCHIVE", "INDEX", "NOTES", "ESSAY", "MEMORY", "LANGUAGE", "文章", "笔记", "记忆", "文本"];
    elements.revealPattern.innerHTML = patternTokens
        .map((token, index) => `<span class="pattern-token pattern-token-${index + 1}">${escapeHtml(token)}</span>`)
        .join("");

    const sourceSnippets = state.items
        .filter((item) => item.markdown && item.markdown.trim().length > 0)
        .flatMap((item) => {
            const cleaned = sanitizeInline(item.markdown);
            const sentences = cleaned
                .split(/(?<=[。！？!?；;])\s*/)
                .flatMap((sentence) => {
                    const trimmed = sentence.trim();
                    return trimmed.length > 30 ? trimmed.split(/(?<=[，,、：:])\s*/) : [trimmed];
                })
                .map((part) => part.trim())
                .filter((part) => part.length >= 8 && part.length <= 30);
            return sentences.length ? sentences : [item.excerpt || item.title];
        })
        .filter(Boolean)
        .slice(0, 96);

    state.revealSnippets = sourceSnippets.length
        ? sourceSnippets
        : ["把内容从装饰里剥离出来", "索引不是答案，是入口", "文字需要反复经过"];

    const rowMeta = Array.from({ length: 18 }, (_, index) => {
        const x = 50 + [0, -10, 8, -16, 13, -5, 17, -12, 5][index % 9];
        const y = 6.5 + index * 5.2;
        const width = [118, 106, 112, 124, 102, 116][index % 6];
        const scale = ["small", "medium", "large", "small", "wide", "medium"][index % 6];
        return [x, y, width, scale];
    });

    elements.revealWords.innerHTML = rowMeta.map(([x, y, width, scale], index) => {
        const text = Array.from({ length: 8 }, (_, slot) => {
            const snippetIndex = (index * 5 + slot * 3) % state.revealSnippets.length;
            return state.revealSnippets[snippetIndex];
        }).join("     ");
        return `<span class="reveal-line ${scale}" style="--x:${x}%;--y:${y}%;--w:${width}vw;--i:${index}">${escapeHtml(text)}</span>`;
    }).join("");
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
                    <h3>${escapeHtml(item.title)}</h3>
                    ${item.excerpt ? `<p>${escapeHtml(item.excerpt)}</p>` : ""}
                </div>
                <div>
                    <p class="item-meta">${escapeHtml(formatDate(item.date))}</p>
                    <button class="archive-open" data-open="${escapeHtml(item.key)}">Open</button>
                </div>
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
    if (dark) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    elements.themeToggle.textContent = dark ? "Light" : "Dark";
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
    if (!field) {
        return;
    }
    const masthead = document.querySelector(".masthead");
    let scrollTicking = false;

    const updateMetrics = () => {
        const radiusPx = Math.round((2.5 / 2.54) * 96);
        field.style.setProperty("--mask-size", "2.5cm");
        field.style.setProperty("--line-max", `${Math.round(radiusPx * 2.35)}px`);
    };

    const setPoint = (clientX, clientY) => {
        const rect = field.getBoundingClientRect();
        const localX = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const localY = Math.max(0, Math.min(rect.height, clientY - rect.top));
        field.style.setProperty("--mx", `${localX}px`);
        field.style.setProperty("--my", `${localY}px`);
    };

    const updateScrollStep = () => {
        scrollTicking = false;
        if (!masthead) {
            return;
        }
        const rect = masthead.getBoundingClientRect();
        const range = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / range));
        const easedProgress = Math.max(0, Math.min(1, (progress - 0.12) / 0.88));
        const step = Math.min(8, Math.floor(easedProgress * 9));
        const progressValue = progress.toFixed(3);
        masthead.style.setProperty("--hero-progress", progressValue);
        masthead.style.setProperty("--hero-step", step);
        document.documentElement.style.setProperty("--hero-progress", progressValue);
        masthead.dataset.step = String(step);
    };

    const requestScrollStep = () => {
        if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(updateScrollStep);
        }
    };

    updateMetrics();
    updateScrollStep();
    window.addEventListener("resize", updateMetrics);
    window.addEventListener("resize", requestScrollStep);
    window.addEventListener("scroll", requestScrollStep, { passive: true });
    field.addEventListener("pointermove", (event) => setPoint(event.clientX, event.clientY));
    field.addEventListener("pointerenter", (event) => setPoint(event.clientX, event.clientY));
    field.addEventListener("pointerleave", () => {
        field.style.setProperty("--mx", "50%");
        field.style.setProperty("--my", "43%");
    });
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
