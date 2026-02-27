const CATEGORY_META = {
    articles: { label: "文章", summary: "长文写作", priority: 1 },
    notes: { label: "读书笔记", summary: "知识摘录", priority: 2 },
    poetry: { label: "古诗词", summary: "文学收藏", priority: 3 },
    memories: { label: "纪念品", summary: "生活片段", priority: 4 },
    misc: { label: "杂项", summary: "工具与清单", priority: 5 }
};

const state = {
    allItems: [],
    articleItems: [],
    activeFilter: "all",
    query: ""
};

const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    menuToggle: document.getElementById("menu-toggle"),
    headerNav: document.getElementById("header-nav"),
    featuredGrid: document.getElementById("featured-grid"),
    libraryGrid: document.getElementById("library-grid"),
    filterTabs: document.getElementById("filter-tabs"),
    searchInput: document.getElementById("search-input"),
    statTotal: document.getElementById("stat-total"),
    statArticles: document.getElementById("stat-articles"),
    statNotes: document.getElementById("stat-notes"),
    reader: document.getElementById("reader"),
    readerBackdrop: document.getElementById("reader-backdrop"),
    readerClose: document.getElementById("reader-close"),
    readerTitle: document.getElementById("reader-title"),
    readerMeta: document.getElementById("reader-meta"),
    readerBody: document.getElementById("reader-body"),
    footerYear: document.getElementById("footer-year")
};

function sanitizeInline(text) {
    return text
        .replace(/[`*_>#-]/g, "")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function normalizeSlug(slug) {
    const tail = slug.split("/").pop() || slug;
    return sanitizeInline(tail.replace(/\.md$/i, "").replace(/[._-]/g, " ")) || "未命名";
}

function extractTitle(markdown, fallbackSlug) {
    const headingMatch = markdown.match(/^#\s+(.+)$/m);
    if (headingMatch && headingMatch[1]) {
        return sanitizeInline(headingMatch[1]);
    }

    const candidate = markdown
        .split(/\r?\n/)
        .map((line) => sanitizeInline(line))
        .find((line) => line.length > 6);

    return candidate || normalizeSlug(fallbackSlug);
}

function extractExcerpt(markdown) {
    const cleaned = markdown
        .replace(/```[\s\S]*?```/g, "")
        .replace(/^#\s+.+$/gm, "")
        .replace(/^>\s?/gm, "")
        .replace(/[\-*+]\s+/g, "")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/\r?\n/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (!cleaned) {
        return "暂无摘要，点击进入阅读全文。";
    }

    return cleaned.length > 108 ? `${cleaned.slice(0, 108)}...` : cleaned;
}

function parseDateFromSlug(slug) {
    const match = slug.match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/);
    if (!match) {
        return null;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const date = new Date(year, month - 1, day);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return date;
}

function formatDate(date) {
    if (!date) {
        return "未标注日期";
    }
    return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(date);
}

function buildContentIndex() {
    const markdownContent = window.markdownContent || {};
    const entries = Object.entries(markdownContent)
        .map(([key, markdown]) => {
            const [category, ...rest] = key.split("/");
            if (!CATEGORY_META[category]) {
                return null;
            }

            const slug = rest.join("/");
            const title = extractTitle(markdown, slug);
            const excerpt = extractExcerpt(markdown);
            const date = parseDateFromSlug(slug);
            const words = sanitizeInline(markdown).length;

            return {
                key,
                category,
                title,
                excerpt,
                markdown,
                date,
                words,
                sortTime: date ? date.getTime() : 0,
                searchText: `${title} ${excerpt} ${CATEGORY_META[category].label}`.toLowerCase()
            };
        })
        .filter(Boolean)
        .sort((a, b) => {
            if (a.category !== b.category) {
                return CATEGORY_META[a.category].priority - CATEGORY_META[b.category].priority;
            }
            if (a.category === "articles") {
                return b.sortTime - a.sortTime;
            }
            return a.title.localeCompare(b.title, "zh-CN");
        });

    state.allItems = entries;
    state.articleItems = entries
        .filter((item) => item.category === "articles")
        .sort((a, b) => b.sortTime - a.sortTime || a.title.localeCompare(b.title, "zh-CN"));
}

function createCard(item, compact = false) {
    const safeTitle = escapeHtml(item.title);
    const safeExcerpt = escapeHtml(item.excerpt);
    const safeMeta = `${formatDate(item.date)} · ${item.words}字`;

    const card = document.createElement("article");
    card.className = "card reveal";
    card.innerHTML = `
        <span class="card-tag">${CATEGORY_META[item.category].label}</span>
        <h3>${safeTitle}</h3>
        <p>${safeExcerpt}</p>
        <div class="card-meta">
            <span>${safeMeta}</span>
            <button class="card-open" data-open="${item.key}">阅读</button>
        </div>
    `;

    if (compact) {
        card.style.minHeight = "216px";
    }

    return card;
}

function renderStats() {
    elements.statTotal.textContent = String(state.allItems.length);
    elements.statArticles.textContent = String(state.allItems.filter((item) => item.category === "articles").length);
    elements.statNotes.textContent = String(state.allItems.filter((item) => item.category === "notes").length);
}

function renderFeatured() {
    elements.featuredGrid.innerHTML = "";

    const picks = state.articleItems.slice(0, 3);
    if (!picks.length) {
        elements.featuredGrid.innerHTML = '<div class="empty-state">还没有可展示的文章。</div>';
        return;
    }

    picks.forEach((item, index) => {
        const card = createCard(item, true);
        card.style.setProperty("--delay", `${index * 80}ms`);
        elements.featuredGrid.appendChild(card);
    });

    observeReveals();
}

function renderFilterTabs() {
    elements.filterTabs.innerHTML = "";

    const categories = ["all", ...Object.keys(CATEGORY_META).filter((category) => state.allItems.some((item) => item.category === category))];

    categories.forEach((category) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `filter-btn ${category === state.activeFilter ? "active" : ""}`;
        btn.dataset.filter = category;
        btn.textContent = category === "all" ? "全部" : CATEGORY_META[category].label;
        elements.filterTabs.appendChild(btn);
    });
}

function getFilteredItems() {
    const normalizedQuery = state.query.trim().toLowerCase();

    return state.allItems.filter((item) => {
        const byCategory = state.activeFilter === "all" || item.category === state.activeFilter;
        const byQuery = !normalizedQuery || item.searchText.includes(normalizedQuery);
        return byCategory && byQuery;
    });
}

function renderLibrary() {
    elements.libraryGrid.innerHTML = "";

    const visible = getFilteredItems();
    if (!visible.length) {
        elements.libraryGrid.innerHTML = '<div class="empty-state">没有匹配结果，换个关键词试试。</div>';
        return;
    }

    visible.forEach((item, index) => {
        const card = createCard(item);
        card.style.setProperty("--delay", `${Math.min(index, 8) * 60}ms`);
        elements.libraryGrid.appendChild(card);
    });

    observeReveals();
}

function openReader(itemKey) {
    const item = state.allItems.find((entry) => entry.key === itemKey);
    if (!item) {
        return;
    }

    elements.readerTitle.textContent = item.title;
    elements.readerMeta.textContent = `${CATEGORY_META[item.category].label} · ${formatDate(item.date)}`;

    if (typeof marked !== "undefined") {
        marked.setOptions({ gfm: true, breaks: true });
        elements.readerBody.innerHTML = marked.parse(item.markdown);
    } else {
        elements.readerBody.innerHTML = `<pre>${item.markdown}</pre>`;
    }

    elements.reader.classList.add("active");
    elements.reader.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeReader() {
    elements.reader.classList.remove("active");
    elements.reader.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        elements.themeToggle.setAttribute("aria-pressed", "true");
    } else {
        document.documentElement.removeAttribute("data-theme");
        elements.themeToggle.setAttribute("aria-pressed", "false");
    }
    localStorage.setItem("theme", theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (systemDark ? "dark" : "light"));

    elements.themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        setTheme(isDark ? "light" : "dark");
    });
}

function observeReveals() {
    const reveals = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!reveals.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));
}

function bindEvents() {
    elements.menuToggle.addEventListener("click", () => {
        const expanded = elements.menuToggle.getAttribute("aria-expanded") === "true";
        elements.menuToggle.setAttribute("aria-expanded", String(!expanded));
        elements.headerNav.classList.toggle("open", !expanded);
    });

    elements.headerNav.addEventListener("click", (event) => {
        if (event.target.matches(".nav-link")) {
            elements.menuToggle.setAttribute("aria-expanded", "false");
            elements.headerNav.classList.remove("open");
        }
    });

    elements.filterTabs.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) {
            return;
        }

        state.activeFilter = button.dataset.filter;
        renderFilterTabs();
        renderLibrary();
    });

    elements.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value;
        renderLibrary();
    });

    document.addEventListener("click", (event) => {
        const openButton = event.target.closest("[data-open]");
        if (openButton) {
            openReader(openButton.dataset.open);
        }
    });

    elements.readerBackdrop.addEventListener("click", closeReader);
    elements.readerClose.addEventListener("click", closeReader);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && elements.reader.classList.contains("active")) {
            closeReader();
        }
    });
}

function init() {
    elements.footerYear.textContent = String(new Date().getFullYear());
    initTheme();
    buildContentIndex();
    renderStats();
    renderFeatured();
    renderFilterTabs();
    renderLibrary();
    bindEvents();
    observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
