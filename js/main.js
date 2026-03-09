const CATEGORY_META = {
    articles: { label: "文章", summary: "长篇写作与思考。", order: 1 },
    notes: { label: "笔记", summary: "读书摘要与知识摘录。", order: 2 },
    poetry: { label: "古典文本", summary: "保留值得反复阅读的篇章。", order: 3 },
    memories: { label: "记忆", summary: "私人而短促的纪念文本。", order: 4 },
    misc: { label: "清单", summary: "工具、语法与杂项索引。", order: 5 }
};

const state = {
    allItems: [],
    articleItems: [],
    activeFilter: "all",
    query: "",
    readerProgressBound: false
};

const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    menuToggle: document.getElementById("menu-toggle"),
    headerNav: document.getElementById("header-nav"),
    heroFeature: document.getElementById("hero-feature"),
    metricTotal: document.getElementById("metric-total"),
    metricArticles: document.getElementById("metric-articles"),
    metricYears: document.getElementById("metric-years"),
    selectedPrimary: document.getElementById("selected-primary"),
    selectedList: document.getElementById("selected-list"),
    spectrumGrid: document.getElementById("spectrum-grid"),
    filterTabs: document.getElementById("filter-tabs"),
    searchInput: document.getElementById("search-input"),
    archiveList: document.getElementById("archive-list"),
    footerYear: document.getElementById("footer-year"),
    reader: document.getElementById("reader"),
    readerBackdrop: document.getElementById("reader-backdrop"),
    readerClose: document.getElementById("reader-close"),
    readerMeta: document.getElementById("reader-meta"),
    readerTitle: document.getElementById("reader-title"),
    readerBody: document.getElementById("reader-body"),
    readerProgressBar: document.getElementById("reader-progress-bar")
};

function sanitizeInline(text) {
    return text
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/[*_>#~-]/g, "")
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

function extractTitle(markdown, fallback) {
    const match = markdown.match(/^#\s+(.+)$/m);
    if (match?.[1]) {
        return sanitizeInline(match[1]);
    }

    const firstLine = markdown
        .split(/\r?\n/)
        .map((line) => sanitizeInline(line))
        .find((line) => line.length > 4);

    return firstLine || fallback;
}

function extractExcerpt(markdown) {
    const cleaned = sanitizeInline(
        markdown
            .replace(/^#\s+.+$/gm, "")
            .replace(/^>\s?/gm, "")
            .replace(/^[-*+]\s+/gm, "")
            .replace(/\r?\n/g, " ")
    );

    if (!cleaned) {
        return "暂无摘要。";
    }

    return cleaned.length > 110 ? `${cleaned.slice(0, 110)}…` : cleaned;
}

function parseDateFromKey(key) {
    const match = key.match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/);
    if (!match) {
        return null;
    }

    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(date) {
    if (!date) {
        return "Undated";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
}

function getYearSpan(items) {
    const dated = items.filter((item) => item.date);
    if (!dated.length) {
        return "--";
    }

    const years = dated.map((item) => item.date.getFullYear()).sort((a, b) => a - b);
    return years[0] === years[years.length - 1] ? String(years[0]) : `${years[0]}–${years[years.length - 1]}`;
}

function buildContentIndex() {
    const markdownContent = window.markdownContent || {};

    state.allItems = Object.entries(markdownContent)
        .map(([key, markdown]) => {
            const [category] = key.split("/");
            if (!CATEGORY_META[category]) {
                return null;
            }

            const title = extractTitle(markdown, key.split("/").pop() || key);
            const excerpt = extractExcerpt(markdown);
            const date = parseDateFromKey(key);
            const words = sanitizeInline(markdown).length;
            const searchText = `${title} ${excerpt} ${CATEGORY_META[category].label}`.toLowerCase();

            return {
                key,
                category,
                title,
                excerpt,
                markdown,
                date,
                words,
                searchText,
                sortTime: date ? date.getTime() : -1
            };
        })
        .filter(Boolean)
        .sort((a, b) => {
            if (a.sortTime !== b.sortTime) {
                return b.sortTime - a.sortTime;
            }
            if (CATEGORY_META[a.category].order !== CATEGORY_META[b.category].order) {
                return CATEGORY_META[a.category].order - CATEGORY_META[b.category].order;
            }
            return a.title.localeCompare(b.title, "zh-CN");
        });

    state.articleItems = state.allItems.filter((item) => item.category === "articles");
}

function renderHero() {
    const latest = state.articleItems[0] || state.allItems[0];

    elements.metricTotal.textContent = String(state.allItems.length);
    elements.metricArticles.textContent = String(state.articleItems.length);
    elements.metricYears.textContent = getYearSpan(state.allItems);

    if (!latest) {
        elements.heroFeature.innerHTML = '<p class="feature-excerpt">暂无内容。</p>';
        return;
    }

    elements.heroFeature.innerHTML = `
        <span class="feature-tag">Latest</span>
        <h2 class="feature-title">${escapeHtml(latest.title)}</h2>
        <p class="feature-excerpt">${escapeHtml(latest.excerpt)}</p>
        <div class="feature-foot">
            <time>${formatDate(latest.date)} · ${latest.words}字</time>
            <button class="text-button" data-open="${latest.key}">展开</button>
        </div>
    `;
}

function renderSelected() {
    const primary = state.articleItems[0] || state.allItems[0];
    const secondary = state.articleItems.slice(1, 6);

    if (primary) {
        elements.selectedPrimary.innerHTML = `
            <article class="feature-panel reveal">
                <span class="feature-tag">Selected</span>
                <h3 class="feature-title">${escapeHtml(primary.title)}</h3>
                <p class="feature-excerpt">${escapeHtml(primary.excerpt)}</p>
                <div class="feature-foot">
                    <time>${formatDate(primary.date)} · ${primary.words}字</time>
                    <button class="text-button" data-open="${primary.key}">阅读</button>
                </div>
            </article>
        `;
    } else {
        elements.selectedPrimary.innerHTML = '<p class="empty-state">暂无可展示内容。</p>';
    }

    if (!secondary.length) {
        elements.selectedList.innerHTML = '<div class="empty-state">还没有更多文章。</div>';
        return;
    }

    elements.selectedList.innerHTML = secondary
        .map(
            (item) => `
            <article class="headline-item reveal">
                <div class="headline-meta">${formatDate(item.date)}</div>
                <button class="headline-open" data-open="${item.key}">
                    <span class="headline-title">${escapeHtml(item.title)}</span>
                    <span class="feature-excerpt">${escapeHtml(item.excerpt)}</span>
                </button>
            </article>
        `
        )
        .join("");
}

function renderSpectrum() {
    const categories = Object.entries(CATEGORY_META).filter(([category]) => state.allItems.some((item) => item.category === category));

    elements.spectrumGrid.innerHTML = categories
        .map(
            ([category, meta], index) => `
            <article class="band reveal" style="--delay:${index * 60}ms">
                <p class="band-index">0${index + 1}</p>
                <h3>${meta.label}</h3>
                <p>${meta.summary}</p>
                <span class="band-count">${state.allItems.filter((item) => item.category === category).length} entries</span>
            </article>
        `
        )
        .join("");
}

function renderFilterTabs() {
    const categories = ["all", ...Object.keys(CATEGORY_META).filter((category) => state.allItems.some((item) => item.category === category))];

    elements.filterTabs.innerHTML = categories
        .map((category) => {
            const label = category === "all" ? "全部" : CATEGORY_META[category].label;
            const active = state.activeFilter === category ? "active" : "";
            return `<button class="filter-btn ${active}" data-filter="${category}">${label}</button>`;
        })
        .join("");
}

function getVisibleItems() {
    const query = state.query.trim().toLowerCase();

    return state.allItems.filter((item) => {
        const matchCategory = state.activeFilter === "all" || item.category === state.activeFilter;
        const matchQuery = !query || item.searchText.includes(query);
        return matchCategory && matchQuery;
    });
}

function renderArchive() {
    const visibleItems = getVisibleItems();

    if (!visibleItems.length) {
        elements.archiveList.innerHTML = '<div class="empty-state">没有找到匹配结果。</div>';
        return;
    }

    elements.archiveList.innerHTML = visibleItems
        .map(
            (item, index) => `
            <article class="archive-row reveal" style="--delay:${Math.min(index, 8) * 45}ms">
                <div class="archive-meta">${CATEGORY_META[item.category].label}</div>
                <div class="archive-main">
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.excerpt)}</p>
                </div>
                <div class="archive-side">
                    <span>${formatDate(item.date)}</span>
                    <button class="archive-open" data-open="${item.key}">Open</button>
                </div>
            </article>
        `
        )
        .join("");
}

function updateReaderProgress() {
    const { scrollTop, scrollHeight, clientHeight } = elements.readerBody;
    const progress = scrollHeight <= clientHeight ? 100 : (scrollTop / (scrollHeight - clientHeight)) * 100;
    elements.readerProgressBar.style.width = `${Math.max(0, Math.min(progress, 100))}%`;
}

function openReader(key) {
    const item = state.allItems.find((entry) => entry.key === key);
    if (!item) {
        return;
    }

    elements.readerMeta.textContent = `${CATEGORY_META[item.category].label} · ${formatDate(item.date)} · ${item.words}字`;
    elements.readerTitle.textContent = item.title;

    if (typeof marked !== "undefined") {
        marked.setOptions({ gfm: true, breaks: true });
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
    elements.reader.classList.remove("active");
    elements.reader.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function setTheme(theme) {
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        elements.themeToggle.setAttribute("aria-pressed", "true");
        elements.themeToggle.textContent = "Light";
        themeMeta?.setAttribute("content", "#0c0e12");
    } else {
        document.documentElement.removeAttribute("data-theme");
        elements.themeToggle.setAttribute("aria-pressed", "false");
        elements.themeToggle.textContent = "Dark";
        themeMeta?.setAttribute("content", "#f1ece4");
    }
    localStorage.setItem("theme", theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));

    elements.themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        setTheme(current === "dark" ? "light" : "dark");
    });
}

function observeReveals() {
    const targets = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!targets.length) {
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

    targets.forEach((target) => observer.observe(target));
}

function bindSectionTracking() {
    const sections = ["selected", "spectrum", "archive", "method"];
    const navLinks = [...document.querySelectorAll(".nav-link")];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => link.classList.remove("active"));
                const active = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
                active?.classList.add("active");
            });
        },
        { threshold: 0.35 }
    );

    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }
    });
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
        renderArchive();
        observeReveals();
    });

    elements.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value;
        renderArchive();
        observeReveals();
    });

    document.addEventListener("click", (event) => {
        const openButton = event.target.closest("[data-open]");
        if (openButton) {
            openReader(openButton.dataset.open);
        }
    });

    elements.readerBackdrop.addEventListener("click", closeReader);
    elements.readerClose.addEventListener("click", closeReader);
    elements.readerBody.addEventListener("scroll", updateReaderProgress);

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
    renderHero();
    renderSelected();
    renderSpectrum();
    renderFilterTabs();
    renderArchive();
    bindEvents();
    bindSectionTracking();
    observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
