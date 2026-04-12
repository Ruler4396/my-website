const CATEGORY_META = {
    articles: {
        label: { zh: "文章", ne: "Tesar" },
        summary: { zh: "长篇写作与思考。", ne: "Lena tesar ta sora." },
        order: 1
    },
    notes: {
        label: { zh: "笔记", ne: "Meral" },
        summary: { zh: "读书摘要与知识摘录。", ne: "Meral tora lena va." },
        order: 2
    },
    poetry: {
        label: { zh: "古典文本", ne: "Olen" },
        summary: { zh: "保留值得反复阅读的篇章。", ne: "Olen sava re neralena." },
        order: 3
    },
    memories: {
        label: { zh: "记忆", ne: "Vera" },
        summary: { zh: "私人而短促的纪念文本。", ne: "Vera sena, kira sena." },
        order: 4
    },
    misc: {
        label: { zh: "清单", ne: "Nakir" },
        summary: { zh: "工具、语法与杂项索引。", ne: "Dara, roma, va nar." },
        order: 5
    }
};

const UI_TEXT = {
    zh: {
        pageTitle: "Ruler — 写作、阅读与资料索引",
        pageDescription: "个人写作、阅读笔记与资料索引。",
        brandCode: "Ruler",
        brandName: "Journal",
        brandAria: "返回顶部",
        menuToggle: "打开导航",
        navAria: "主导航",
        navMethod: "方法",
        heroKicker: "Ruler / PERSONAL ARCHIVE",
        heroTitle: "写作、阅读、索引。",
        heroSummary: "一个持续更新的个人资料站：文章、笔记、古典文本与一些记忆。",
        heroActionPrimary: "进入选读",
        heroActionSecondary: "查看全部",
        metricTotal: "Entries",
        metricArticles: "Writing",
        metricYears: "Timeline",
        heroNote1: "少即是多，少用形容词。",
        heroNote2: "检验知识最好的方式，是尝试把它教给别人。",
        selectedKicker: "SELECTED WRITING",
        selectedTitle: "选读",
        spectrumKicker: "CONTENT SPECTRUM",
        spectrumTitle: "谱系",
        archiveKicker: "FULL INDEX",
        archiveTitle: "索引",
        searchLabel: "Search",
        searchPlaceholder: "搜索标题或关键词",
        methodKicker: "METHOD",
        methodTitle: "少即是多，慢就是快。",
        methodQuote: "“你必须知道各个重要学科的重要理论。”",
        methodLead: "这个站点不追求解释一切，只负责留下判断、索引与反复阅读的入口。",
        methodBullet1: "写作优先于包装",
        methodBullet2: "索引优先于堆叠",
        methodBullet3: "节奏优先于装饰",
        footerBrand: "Ruler",
        footerRecordsAria: "网站备案信息",
        footerGonganIconAlt: "公安备案图标",
        footerGongan: "粤公网安备44090402441277号",
        footerBeian: "粤ICP备2026022061号",
        footerClassroom: "班级管理系统",
        footerAdmin: "ZeroClaw 管理台",
        footerGithub: "GitHub 主页",
        footerTop: "Back to top",
        themeDark: "Dark",
        themeLight: "Light",
        latestTag: "Latest",
        selectedTag: "Selected",
        expandAction: "展开",
        readAction: "阅读",
        openAction: "Open",
        allFilter: "全部",
        noContent: "暂无内容。",
        noPrimary: "暂无可展示内容。",
        noSecondary: "还没有更多文章。",
        noMatches: "没有找到匹配结果。",
        closeReader: "Close",
        closeReaderAria: "关闭",
        archiveUnit: "entries",
        wordUnit: "字",
        undated: "未标日期",
        toggleTo: "Neral",
        readerFallbackTitle: "标题"
    },
    ne: {
        pageTitle: "Ruler — vesa, lena, daran",
        pageDescription: "Neral sava-daren va: tesar, meral, olen, vera.",
        brandCode: "Neral",
        brandName: "Darem",
        brandAria: "Ruler tora va",
        menuToggle: "Nava dara",
        navAria: "Sava nava",
        navMethod: "Loma",
        heroKicker: "Ruler / SAVA DAREN",
        heroTitle: "Vesa. Lena. Daran.",
        heroSummary: "Sava darem re neral mode: tesar, meral, olen, vera.",
        heroActionPrimary: "Sere va",
        heroActionSecondary: "Daran va",
        metricTotal: "Tava",
        metricArticles: "Tesar",
        metricYears: "Rima",
        heroNote1: "Mina tora; sora kira.",
        heroNote2: "Roma se tora, sena se tala.",
        selectedKicker: "SERE TESA",
        selectedTitle: "Sere",
        spectrumKicker: "SAVA VARA",
        spectrumTitle: "Vara",
        archiveKicker: "DARA INDEX",
        archiveTitle: "Daran",
        searchLabel: "Roma",
        searchPlaceholder: "Roma glos, form, dara",
        methodKicker: "LOMA",
        methodTitle: "Mina tora, loma tora.",
        methodQuote: "\"Roma talon sava-lena se.\"",
        methodLead: "Sa dara no tora ama sava; sa re index, re note, re reread va.",
        methodBullet1: "Vesa tora, skin kira",
        methodBullet2: "Index tora, pile kira",
        methodBullet3: "Loma tora, ornament kira",
        footerBrand: "Neral",
        footerRecordsAria: "Sava records",
        footerGonganIconAlt: "Record icon",
        footerGongan: "Gongan 44090402441277",
        footerBeian: "ICP 2026022061",
        footerClassroom: "Skola dara",
        footerAdmin: "ZeroClaw tora",
        footerGithub: "GitHub va",
        footerTop: "Top va",
        themeDark: "Luma",
        themeLight: "Sola",
        latestTag: "Nava",
        selectedTag: "Sere",
        expandAction: "Sora",
        readAction: "Lena",
        openAction: "Va",
        allFilter: "Tava",
        noContent: "Dara nera.",
        noPrimary: "Sere dara nera.",
        noSecondary: "Tesar mora nera.",
        noMatches: "Roma dara nera.",
        closeReader: "Sera",
        closeReaderAria: "Sera",
        archiveUnit: "dara",
        wordUnit: "len",
        undated: "nera-rima",
        toggleTo: "中文",
        readerFallbackTitle: "Sera"
    }
};

const state = {
    allItems: [],
    articleItems: [],
    activeFilter: "all",
    query: "",
    lang: localStorage.getItem("site-language") === "ne" ? "ne" : "zh",
    openReaderKey: null
};

const elements = {
    themeToggle: document.getElementById("theme-toggle"),
    langToggle: document.getElementById("lang-toggle"),
    menuToggle: document.getElementById("menu-toggle"),
    headerNav: document.getElementById("header-nav"),
    brandLink: document.getElementById("brand-link"),
    brandCode: document.getElementById("brand-code"),
    brandName: document.getElementById("brand-name"),
    navSelected: document.getElementById("nav-selected"),
    navSpectrum: document.getElementById("nav-spectrum"),
    navArchive: document.getElementById("nav-archive"),
    navMethod: document.getElementById("nav-method"),
    heroKicker: document.getElementById("hero-kicker"),
    heroTitle: document.getElementById("hero-title"),
    heroSummary: document.getElementById("hero-summary"),
    heroActionPrimary: document.getElementById("hero-action-primary"),
    heroActionSecondary: document.getElementById("hero-action-secondary"),
    metricLabelTotal: document.getElementById("metric-label-total"),
    metricLabelArticles: document.getElementById("metric-label-articles"),
    metricLabelYears: document.getElementById("metric-label-years"),
    heroFeature: document.getElementById("hero-feature"),
    heroNote1: document.getElementById("hero-note-1"),
    heroNote2: document.getElementById("hero-note-2"),
    metricTotal: document.getElementById("metric-total"),
    metricArticles: document.getElementById("metric-articles"),
    metricYears: document.getElementById("metric-years"),
    selectedKicker: document.getElementById("selected-kicker"),
    selectedTitle: document.getElementById("selected-title"),
    selectedPrimary: document.getElementById("selected-primary"),
    selectedList: document.getElementById("selected-list"),
    spectrumKicker: document.getElementById("spectrum-kicker"),
    spectrumTitle: document.getElementById("spectrum-title"),
    spectrumGrid: document.getElementById("spectrum-grid"),
    archiveKicker: document.getElementById("archive-kicker"),
    archiveTitle: document.getElementById("archive-title"),
    searchLabel: document.getElementById("search-label"),
    searchInput: document.getElementById("search-input"),
    filterTabs: document.getElementById("filter-tabs"),
    archiveList: document.getElementById("archive-list"),
    methodKicker: document.getElementById("method-kicker"),
    methodTitle: document.getElementById("method-title"),
    methodQuote: document.getElementById("method-quote"),
    methodCopyLead: document.getElementById("method-copy-lead"),
    methodBullet1: document.getElementById("method-bullet-1"),
    methodBullet2: document.getElementById("method-bullet-2"),
    methodBullet3: document.getElementById("method-bullet-3"),
    footerRecords: document.getElementById("footer-records"),
    footerBrand: document.getElementById("footer-brand"),
    footerGonganLink: document.getElementById("footer-gongan-link"),
    footerGonganIcon: document.getElementById("footer-gongan-icon"),
    footerGonganText: document.getElementById("footer-gongan-text"),
    footerBeianText: document.getElementById("footer-beian-text"),
    footerLinkClassroom: document.getElementById("footer-link-classroom"),
    footerLinkAdmin: document.getElementById("footer-link-admin"),
    footerLinkGithub: document.getElementById("footer-link-github"),
    footerLinkTop: document.getElementById("footer-link-top"),
    footerYear: document.getElementById("footer-year"),
    reader: document.getElementById("reader"),
    readerBackdrop: document.getElementById("reader-backdrop"),
    readerClose: document.getElementById("reader-close"),
    readerMeta: document.getElementById("reader-meta"),
    readerTitle: document.getElementById("reader-title"),
    readerBody: document.getElementById("reader-body"),
    readerProgressBar: document.getElementById("reader-progress-bar"),
    langModal: document.getElementById("lang-modal"),
    langModalCopyNe: document.getElementById("lang-modal-copy-ne"),
    langModalLink: document.getElementById("lang-modal-link"),
    langModalBackdrop: document.getElementById("lang-modal-backdrop"),
    langModalCancel: document.getElementById("lang-modal-cancel"),
    langModalConfirm: document.getElementById("lang-modal-confirm")
};

const SITE_LOCALIZATION = window.languageLabData?.site_localization || null;

function isDisplayNode(value) {
    return Boolean(value && typeof value === "object" && typeof value.romanized === "string");
}

function resolveSiteText(value) {
    if (typeof value === "string") {
        return value;
    }
    if (isDisplayNode(value)) {
        return value.romanized;
    }
    return "";
}

function getDisplayText(value) {
    return resolveSiteText(value);
}

function createDisplayNode(native, romanized) {
    return {
        native: String(native || ""),
        romanized: String(romanized || "")
    };
}

function appendDisplaySuffix(value, suffix) {
    const safeSuffix = String(suffix || "").trim();
    if (!safeSuffix) {
        return value;
    }
    if (isDisplayNode(value)) {
        return createDisplayNode(`${value.native} ${safeSuffix}`, `${value.romanized} ${safeSuffix}`);
    }
    return `${getDisplayText(value)} ${safeSuffix}`.trim();
}

function renderLanguageHTML(value, variant = "body", forceDual = state.lang === "ne") {
    if (forceDual && isDisplayNode(value)) {
        return `<span class="lang-dual lang-dual-${variant}"><span class="lang-native">${escapeHtml(value.native)}</span><span class="lang-romanized">${escapeHtml(value.romanized)}</span></span>`;
    }
    return escapeHtml(getDisplayText(value));
}

function applyElementText(element, value, variant = "body", forceDual = false) {
    if (!element) {
        return;
    }
    if ((forceDual || state.lang === "ne") && isDisplayNode(value)) {
        element.innerHTML = renderLanguageHTML(value, variant, true);
        return;
    }
    element.textContent = getDisplayText(value);
}

if (SITE_LOCALIZATION?.ui) {
    const ui = SITE_LOCALIZATION.ui;
    UI_TEXT.ne = {
        ...UI_TEXT.ne,
        pageTitle: resolveSiteText(ui.pageTitle) || UI_TEXT.ne.pageTitle,
        pageDescription: resolveSiteText(ui.pageDescription) || UI_TEXT.ne.pageDescription,
        brandCode: resolveSiteText(ui.brandCode) || UI_TEXT.ne.brandCode,
        brandName: resolveSiteText(ui.brandName) || UI_TEXT.ne.brandName,
        brandAria: resolveSiteText(ui.brandAria) || UI_TEXT.ne.brandAria,
        menuToggle: resolveSiteText(ui.menuToggle) || UI_TEXT.ne.menuToggle,
        navAria: resolveSiteText(ui.navAria) || UI_TEXT.ne.navAria,
        navMethod: resolveSiteText(ui.navMethod) || UI_TEXT.ne.navMethod,
        heroKicker: resolveSiteText(ui.heroKicker) || UI_TEXT.ne.heroKicker,
        heroTitle: resolveSiteText(ui.heroTitle) || UI_TEXT.ne.heroTitle,
        heroSummary: resolveSiteText(ui.heroSummary) || UI_TEXT.ne.heroSummary,
        heroActionPrimary: resolveSiteText(ui.heroActionPrimary) || UI_TEXT.ne.heroActionPrimary,
        heroActionSecondary: resolveSiteText(ui.heroActionSecondary) || UI_TEXT.ne.heroActionSecondary,
        metricTotal: resolveSiteText(ui.metricTotal) || UI_TEXT.ne.metricTotal,
        metricArticles: resolveSiteText(ui.metricArticles) || UI_TEXT.ne.metricArticles,
        metricYears: resolveSiteText(ui.metricYears) || UI_TEXT.ne.metricYears,
        heroNote1: resolveSiteText(ui.heroNote1) || UI_TEXT.ne.heroNote1,
        heroNote2: resolveSiteText(ui.heroNote2) || UI_TEXT.ne.heroNote2,
        selectedKicker: resolveSiteText(ui.selectedKicker) || UI_TEXT.ne.selectedKicker,
        selectedTitle: resolveSiteText(ui.selectedTitle) || UI_TEXT.ne.selectedTitle,
        spectrumKicker: resolveSiteText(ui.spectrumKicker) || UI_TEXT.ne.spectrumKicker,
        spectrumTitle: resolveSiteText(ui.spectrumTitle) || UI_TEXT.ne.spectrumTitle,
        archiveKicker: resolveSiteText(ui.archiveKicker) || UI_TEXT.ne.archiveKicker,
        archiveTitle: resolveSiteText(ui.archiveTitle) || UI_TEXT.ne.archiveTitle,
        searchLabel: resolveSiteText(ui.searchLabel) || UI_TEXT.ne.searchLabel,
        searchPlaceholder: resolveSiteText(ui.searchPlaceholder) || UI_TEXT.ne.searchPlaceholder,
        methodKicker: resolveSiteText(ui.methodKicker) || UI_TEXT.ne.methodKicker,
        methodTitle: resolveSiteText(ui.methodTitle) || UI_TEXT.ne.methodTitle,
        methodQuote: resolveSiteText(ui.methodQuote) || UI_TEXT.ne.methodQuote,
        methodLead: resolveSiteText(ui.methodLead) || UI_TEXT.ne.methodLead,
        methodBullet1: resolveSiteText(ui.methodBullet1) || UI_TEXT.ne.methodBullet1,
        methodBullet2: resolveSiteText(ui.methodBullet2) || UI_TEXT.ne.methodBullet2,
        methodBullet3: resolveSiteText(ui.methodBullet3) || UI_TEXT.ne.methodBullet3,
        footerBrand: resolveSiteText(ui.footerBrand) || UI_TEXT.ne.footerBrand,
        footerRecordsAria: resolveSiteText(ui.footerRecordsAria) || UI_TEXT.ne.footerRecordsAria,
        footerGonganIconAlt: resolveSiteText(ui.footerGonganIconAlt) || UI_TEXT.ne.footerGonganIconAlt,
        footerGongan: resolveSiteText(ui.footerGongan) || UI_TEXT.ne.footerGongan,
        footerBeian: resolveSiteText(ui.footerBeian) || UI_TEXT.ne.footerBeian,
        footerClassroom: resolveSiteText(ui.footerClassroom) || UI_TEXT.ne.footerClassroom,
        footerAdmin: resolveSiteText(ui.footerAdmin) || UI_TEXT.ne.footerAdmin,
        footerGithub: resolveSiteText(ui.footerGithub) || UI_TEXT.ne.footerGithub,
        footerTop: resolveSiteText(ui.footerTop) || UI_TEXT.ne.footerTop,
        themeDark: resolveSiteText(ui.themeDark) || UI_TEXT.ne.themeDark,
        themeLight: resolveSiteText(ui.themeLight) || UI_TEXT.ne.themeLight,
        latestTag: resolveSiteText(ui.latestTag) || UI_TEXT.ne.latestTag,
        selectedTag: resolveSiteText(ui.selectedTag) || UI_TEXT.ne.selectedTag,
        expandAction: resolveSiteText(ui.expandAction) || UI_TEXT.ne.expandAction,
        readAction: resolveSiteText(ui.readAction) || UI_TEXT.ne.readAction,
        openAction: resolveSiteText(ui.openAction) || UI_TEXT.ne.openAction,
        allFilter: resolveSiteText(ui.allFilter) || UI_TEXT.ne.allFilter,
        noContent: resolveSiteText(ui.noContent) || UI_TEXT.ne.noContent,
        noPrimary: resolveSiteText(ui.noPrimary) || UI_TEXT.ne.noPrimary,
        noSecondary: resolveSiteText(ui.noSecondary) || UI_TEXT.ne.noSecondary,
        noMatches: resolveSiteText(ui.noMatches) || UI_TEXT.ne.noMatches,
        closeReader: resolveSiteText(ui.closeReader) || UI_TEXT.ne.closeReader,
        closeReaderAria: resolveSiteText(ui.closeReaderAria) || UI_TEXT.ne.closeReaderAria,
        archiveUnit: resolveSiteText(ui.archiveUnit) || UI_TEXT.ne.archiveUnit,
        wordUnit: resolveSiteText(ui.wordUnit) || "",
        undated: resolveSiteText(ui.undated) || UI_TEXT.ne.undated,
        toggleTo: resolveSiteText(ui.toggleTo) || UI_TEXT.ne.toggleTo,
        readerFallbackTitle: resolveSiteText(ui.readerFallbackTitle) || UI_TEXT.ne.readerFallbackTitle,
        modalNeralCopy: resolveSiteText(ui.modalNeralCopy),
        modalLabLink: resolveSiteText(ui.modalLabLink)
    };
}

function getUiText(lang = state.lang) {
    return UI_TEXT[lang];
}

function getUiNode(key, lang = state.lang) {
    if (lang === "ne" && SITE_LOCALIZATION?.ui?.[key] !== undefined) {
        return SITE_LOCALIZATION.ui[key];
    }
    return getUiText(lang)[key];
}

function getCategoryLabel(category, lang = state.lang) {
    return getDisplayText(getCategoryNode(category, "label", lang));
}

function getCategorySummary(category, lang = state.lang) {
    return getDisplayText(getCategoryNode(category, "summary", lang));
}

function getCategoryNode(category, field = "label", lang = state.lang) {
    if (lang === "ne" && SITE_LOCALIZATION?.categories?.[category]?.[field] !== undefined) {
        return SITE_LOCALIZATION.categories[category][field];
    }
    return CATEGORY_META[category][field][lang];
}

function getContentNode(key, lang = state.lang) {
    if (lang === "ne" && SITE_LOCALIZATION?.content?.[key] !== undefined) {
        return SITE_LOCALIZATION.content[key];
    }
    return "";
}

function getLocalizedNode(item, field) {
    if (state.lang === "ne" && item.localized.ne?.[`${field}Node`]) {
        return item.localized.ne[`${field}Node`];
    }
    return item.localized[state.lang][field];
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

    const compactLines = [];
    let lastWasBlank = false;

    for (const rawLine of normalized.split("\n")) {
        let line = rawLine
            .replace(/^[\u200B\u3000\s]+/, "")
            .replace(/^>\s?/, "")
            .replace(/^#{1,6}\s+/, "")
            .replace(/^[\-*+]\s+/, "")
            .replace(/^\d+\.\s+/, "")
            .replace(/[ \t]+$/g, "");

        if (/^[_-]{3,}$/.test(line)) {
            line = "";
        }

        if (!line) {
            if (!lastWasBlank) {
                compactLines.push("");
            }
            lastWasBlank = true;
            continue;
        }

        compactLines.push(line);
        lastWasBlank = false;
    }

    return compactLines.join("\n").trim();
}

function sanitizeInline(text) {
    return String(text || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&(?:emsp|nbsp|ensp|thinsp|#12288|#x3000);/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/[*_>#~-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function escapeHtml(text) {
    return String(text)
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

function formatDate(date, lang = state.lang) {
    if (!date) {
        return getUiText(lang).undated;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
}

function formatWordCount(words, lang = state.lang) {
    const ui = getUiText(lang);
    if (!ui.wordUnit) {
        return String(words);
    }
    return `${words}${lang === "zh" ? "" : " "}${ui.wordUnit}`;
}

function formatItemMeta(item, lang = state.lang) {
    return `${formatDate(item.date, lang)} · ${formatWordCount(item.words, lang)}`;
}

function getYearSpan(items) {
    const dated = items.filter((item) => item.date);
    if (!dated.length) {
        return "--";
    }

    const years = dated.map((item) => item.date.getFullYear()).sort((a, b) => a - b);
    return years[0] === years[years.length - 1] ? String(years[0]) : `${years[0]}–${years[years.length - 1]}`;
}

function buildNeralVariant(item) {
    const categoryLabelNode = getCategoryNode(item.category, "label", "ne");
    const titleRef = item.date ? formatDate(item.date, "ne") : item.refCode;
    const titleNode = appendDisplaySuffix(categoryLabelNode, titleRef);
    const excerptNode = getContentNode("untranslatedSummary", "ne") || UI_TEXT.ne.noMatches;
    const bodyLeadNode = getContentNode("untranslatedBody", "ne") || excerptNode;
    const nameLabelNode = getContentNode("nameLabel", "ne") || "name";
    const kindLabelNode = getContentNode("kindLabel", "ne") || "kind";
    const dateLabelNode = getContentNode("dateLabel", "ne") || "date";

    const bodyHtml = `
        <div class="reader-neral">
            <div class="reader-neral-lead">${renderLanguageHTML(bodyLeadNode, "body", true)}</div>
            <dl class="reader-neral-meta">
                <div>
                    <dt>${renderLanguageHTML(nameLabelNode, "compact", true)}</dt>
                    <dd>${escapeHtml(item.refCode)}</dd>
                </div>
                <div>
                    <dt>${renderLanguageHTML(kindLabelNode, "compact", true)}</dt>
                    <dd>${renderLanguageHTML(categoryLabelNode, "compact", true)}</dd>
                </div>
                <div>
                    <dt>${renderLanguageHTML(dateLabelNode, "compact", true)}</dt>
                    <dd>${escapeHtml(formatDate(item.date, "ne"))}</dd>
                </div>
            </dl>
        </div>
    `.trim();

    return {
        title: getDisplayText(titleNode),
        titleNode,
        excerpt: getDisplayText(excerptNode),
        excerptNode,
        markdown: getDisplayText(bodyLeadNode),
        bodyHtml
    };
}

function getLocalizedItem(item) {
    return item.localized[state.lang];
}

function buildContentIndex() {
    const markdownContent = window.markdownContent || {};

    state.allItems = Object.entries(markdownContent)
        .map(([key, markdown], index) => {
            const [category] = key.split("/");
            if (!CATEGORY_META[category]) {
                return null;
            }

            const normalizedMarkdown = category === "articles" ? normalizeArticleMarkdown(markdown) : markdown;
            const title = extractTitle(normalizedMarkdown, key.split("/").pop() || key);
            const excerpt = extractExcerpt(normalizedMarkdown);
            const date = parseDateFromKey(key);
            const words = sanitizeInline(normalizedMarkdown).length;
            const baseItem = {
                key,
                category,
                title,
                excerpt,
                markdown: normalizedMarkdown,
                date,
                words,
                refCode: `R${String(index + 1).padStart(2, "0")}`
            };
            const localized = {
                zh: { title, excerpt, markdown: normalizedMarkdown },
                ne: buildNeralVariant(baseItem)
            };
            const searchText = `${title} ${excerpt} ${localized.ne.title} ${localized.ne.excerpt} ${getCategoryLabel(category, "zh")} ${getCategoryLabel(category, "ne")}`.toLowerCase();

            return {
                ...baseItem,
                localized,
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

function renderStaticText() {
    const ui = getUiText();
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "x-neral";
    document.body.classList.toggle("site-lang-ne", state.lang === "ne");
    document.title = ui.pageTitle;
    applyElementText(elements.brandCode, getUiNode("brandCode"), "compact");
    applyElementText(elements.brandName, getUiNode("brandName"), "compact");
    elements.brandLink.setAttribute("aria-label", ui.brandAria);
    elements.menuToggle.setAttribute("aria-label", ui.menuToggle);
    elements.headerNav.setAttribute("aria-label", ui.navAria);
    document.getElementById("page-description")?.setAttribute("content", ui.pageDescription);

    applyElementText(elements.navSelected, getUiNode("selectedTitle"), "compact");
    applyElementText(elements.navSpectrum, getUiNode("spectrumTitle"), "compact");
    applyElementText(elements.navArchive, getUiNode("archiveTitle"), "compact");
    applyElementText(elements.navMethod, getUiNode("navMethod"), "compact");
    applyElementText(elements.heroKicker, getUiNode("heroKicker"), "compact");
    applyElementText(elements.heroTitle, getUiNode("heroTitle"), "hero");
    applyElementText(elements.heroSummary, getUiNode("heroSummary"), "body");
    applyElementText(elements.heroActionPrimary, getUiNode("heroActionPrimary"), "compact");
    applyElementText(elements.heroActionSecondary, getUiNode("heroActionSecondary"), "compact");
    applyElementText(elements.metricLabelTotal, getUiNode("metricTotal"), "compact");
    applyElementText(elements.metricLabelArticles, getUiNode("metricArticles"), "compact");
    applyElementText(elements.metricLabelYears, getUiNode("metricYears"), "compact");
    applyElementText(elements.heroNote1, getUiNode("heroNote1"), "body");
    applyElementText(elements.heroNote2, getUiNode("heroNote2"), "body");
    applyElementText(elements.selectedKicker, getUiNode("selectedKicker"), "compact");
    applyElementText(elements.selectedTitle, getUiNode("selectedTitle"), "title");
    applyElementText(elements.spectrumKicker, getUiNode("spectrumKicker"), "compact");
    applyElementText(elements.spectrumTitle, getUiNode("spectrumTitle"), "title");
    applyElementText(elements.archiveKicker, getUiNode("archiveKicker"), "compact");
    applyElementText(elements.archiveTitle, getUiNode("archiveTitle"), "title");
    applyElementText(elements.searchLabel, getUiNode("searchLabel"), "compact");
    elements.searchInput.placeholder = ui.searchPlaceholder;
    applyElementText(elements.methodKicker, getUiNode("methodKicker"), "compact");
    applyElementText(elements.methodTitle, getUiNode("methodTitle"), "hero");
    applyElementText(elements.methodQuote, getUiNode("methodQuote"), "body");
    applyElementText(elements.methodCopyLead, getUiNode("methodLead"), "body");
    applyElementText(elements.methodBullet1, getUiNode("methodBullet1"), "compact");
    applyElementText(elements.methodBullet2, getUiNode("methodBullet2"), "compact");
    applyElementText(elements.methodBullet3, getUiNode("methodBullet3"), "compact");
    applyElementText(elements.footerBrand, getUiNode("footerBrand"), "compact");
    elements.footerRecords.setAttribute("aria-label", ui.footerRecordsAria);
    elements.footerGonganLink.setAttribute("aria-label", ui.footerGongan);
    elements.footerGonganIcon.setAttribute("alt", ui.footerGonganIconAlt);
    applyElementText(elements.footerGonganText, getUiNode("footerGongan"), "compact");
    applyElementText(elements.footerBeianText, getUiNode("footerBeian"), "compact");
    applyElementText(elements.footerLinkClassroom, getUiNode("footerClassroom"), "compact");
    applyElementText(elements.footerLinkAdmin, getUiNode("footerAdmin"), "compact");
    applyElementText(elements.footerLinkGithub, getUiNode("footerGithub"), "compact");
    applyElementText(elements.footerLinkTop, getUiNode("footerTop"), "compact");
    applyElementText(elements.readerClose, getUiNode("closeReader"), "compact");
    elements.readerClose.setAttribute("aria-label", ui.closeReaderAria);
    elements.langToggle.textContent = ui.toggleTo;
    if (elements.langModalCopyNe && getUiNode("modalNeralCopy", "ne")) {
        applyElementText(elements.langModalCopyNe, getUiNode("modalNeralCopy", "ne"), "body", true);
    }
    if (elements.langModalLink && getUiNode("modalLabLink", "ne")) {
        applyElementText(elements.langModalLink, getUiNode("modalLabLink", "ne"), "compact", true);
    }

    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    setTheme(currentTheme, { persist: false });
}

function renderHero() {
    const ui = getUiText();
    const latest = state.articleItems[0] || state.allItems[0];

    elements.metricTotal.textContent = String(state.allItems.length);
    elements.metricArticles.textContent = String(state.articleItems.length);
    elements.metricYears.textContent = getYearSpan(state.allItems);

    if (!latest) {
        elements.heroFeature.innerHTML = `<p class="feature-excerpt">${renderLanguageHTML(getUiNode("noContent"), "body")}</p>`;
        return;
    }

    const localized = getLocalizedItem(latest);
    elements.heroFeature.innerHTML = `
        <span class="feature-tag">${renderLanguageHTML(getUiNode("latestTag"), "compact")}</span>
        <h2 class="feature-title">${renderLanguageHTML(getLocalizedNode(latest, "title"), "title")}</h2>
        <p class="feature-excerpt">${renderLanguageHTML(getLocalizedNode(latest, "excerpt"), "body")}</p>
        <div class="feature-foot">
            <time>${formatItemMeta(latest)}</time>
            <button class="text-button" data-open="${latest.key}">${renderLanguageHTML(getUiNode("expandAction"), "compact")}</button>
        </div>
    `;
}

function renderSelected() {
    const ui = getUiText();
    const primary = state.articleItems[0] || state.allItems[0];
    const secondary = state.articleItems.slice(1, 6);

    if (primary) {
        elements.selectedPrimary.innerHTML = `
            <article class="feature-panel reveal">
                <span class="feature-tag">${renderLanguageHTML(getUiNode("selectedTag"), "compact")}</span>
                <h3 class="feature-title">${renderLanguageHTML(getLocalizedNode(primary, "title"), "title")}</h3>
                <p class="feature-excerpt">${renderLanguageHTML(getLocalizedNode(primary, "excerpt"), "body")}</p>
                <div class="feature-foot">
                    <time>${formatItemMeta(primary)}</time>
                    <button class="text-button" data-open="${primary.key}">${renderLanguageHTML(getUiNode("readAction"), "compact")}</button>
                </div>
            </article>
        `;
    } else {
        elements.selectedPrimary.innerHTML = `<p class="empty-state">${renderLanguageHTML(getUiNode("noPrimary"), "body")}</p>`;
    }

    if (!secondary.length) {
        elements.selectedList.innerHTML = `<div class="empty-state">${renderLanguageHTML(getUiNode("noSecondary"), "body")}</div>`;
        return;
    }

    elements.selectedList.innerHTML = secondary
        .map((item) => {
            return `
            <article class="headline-item reveal">
                <div class="headline-meta">${formatDate(item.date)}</div>
                <button class="headline-open" data-open="${item.key}">
                    <span class="headline-title">${renderLanguageHTML(getLocalizedNode(item, "title"), "title")}</span>
                    <span class="feature-excerpt">${renderLanguageHTML(getLocalizedNode(item, "excerpt"), "body")}</span>
                </button>
            </article>
        `;
        })
        .join("");
}

function renderSpectrum() {
    const ui = getUiText();
    const categories = Object.entries(CATEGORY_META).filter(([category]) => state.allItems.some((item) => item.category === category));

    elements.spectrumGrid.innerHTML = categories
        .map(
            ([category], index) => `
            <article class="band reveal" style="--delay:${index * 60}ms">
                <p class="band-index">0${index + 1}</p>
                <h3>${renderLanguageHTML(getCategoryNode(category, "label"), "title")}</h3>
                <p>${renderLanguageHTML(getCategoryNode(category, "summary"), "body")}</p>
                <span class="band-count">${state.allItems.filter((item) => item.category === category).length} ${renderLanguageHTML(getUiNode("archiveUnit"), "compact")}</span>
            </article>
        `
        )
        .join("");
}

function renderFilterTabs() {
    const ui = getUiText();
    const categories = ["all", ...Object.keys(CATEGORY_META).filter((category) => state.allItems.some((item) => item.category === category))];

    elements.filterTabs.innerHTML = categories
        .map((category) => {
            const label = category === "all" ? getUiNode("allFilter") : getCategoryNode(category, "label");
            const active = state.activeFilter === category ? "active" : "";
            return `<button class="filter-btn ${active}" data-filter="${category}">${renderLanguageHTML(label, "compact")}</button>`;
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
    const ui = getUiText();
    const visibleItems = getVisibleItems();

    if (!visibleItems.length) {
        elements.archiveList.innerHTML = `<div class="empty-state">${renderLanguageHTML(getUiNode("noMatches"), "body")}</div>`;
        return;
    }

    elements.archiveList.innerHTML = visibleItems
        .map(
            (item, index) => {
                return `
            <article class="archive-row reveal" style="--delay:${Math.min(index, 8) * 45}ms">
                <div class="archive-meta">${renderLanguageHTML(getCategoryNode(item.category, "label"), "compact")}</div>
                <div class="archive-main">
                    <h3>${renderLanguageHTML(getLocalizedNode(item, "title"), "title")}</h3>
                    <p>${renderLanguageHTML(getLocalizedNode(item, "excerpt"), "body")}</p>
                </div>
                <div class="archive-side">
                    <span>${formatDate(item.date)}</span>
                    <button class="archive-open" data-open="${item.key}">${renderLanguageHTML(getUiNode("openAction"), "compact")}</button>
                </div>
            </article>
        `;
            }
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

    state.openReaderKey = key;
    elements.reader.classList.toggle("reader-article", item.category === "articles");
    elements.readerMeta.innerHTML = `${renderLanguageHTML(getCategoryNode(item.category, "label"), "compact")} <span class="reader-meta-divider">·</span> ${escapeHtml(formatItemMeta(item))}`;
    applyElementText(elements.readerTitle, getLocalizedNode(item, "title"), "title");

    if (state.lang === "ne" && item.localized.ne?.bodyHtml) {
        elements.readerBody.innerHTML = item.localized.ne.bodyHtml;
    } else if (typeof marked !== "undefined") {
        marked.setOptions({ gfm: true, breaks: true });
        elements.readerBody.innerHTML = marked.parse(item.localized[state.lang].markdown);
    } else {
        elements.readerBody.innerHTML = `<pre>${escapeHtml(item.localized[state.lang].markdown)}</pre>`;
    }

    elements.reader.classList.add("active");
    elements.reader.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    elements.readerBody.scrollTop = 0;
    updateReaderProgress();
}

function closeReader() {
    state.openReaderKey = null;
    elements.reader.classList.remove("active");
    elements.reader.classList.remove("reader-article");
    elements.reader.setAttribute("aria-hidden", "true");
    if (!elements.langModal.classList.contains("active")) {
        document.body.style.overflow = "";
    }
}

function setTheme(theme, options = { persist: true }) {
    const ui = getUiText();
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        elements.themeToggle.setAttribute("aria-pressed", "true");
        applyElementText(elements.themeToggle, getUiNode("themeLight"), "compact");
        themeMeta?.setAttribute("content", "#0c0e12");
    } else {
        document.documentElement.removeAttribute("data-theme");
        elements.themeToggle.setAttribute("aria-pressed", "false");
        applyElementText(elements.themeToggle, getUiNode("themeDark"), "compact");
        themeMeta?.setAttribute("content", "#f1ece4");
    }

    if (options.persist) {
        localStorage.setItem("theme", theme);
    }
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

function openLangModal() {
    elements.langModal.classList.add("active");
    elements.langModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLangModal() {
    elements.langModal.classList.remove("active");
    elements.langModal.setAttribute("aria-hidden", "true");
    if (!elements.reader.classList.contains("active")) {
        document.body.style.overflow = "";
    }
}

function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("site-language", lang);
    renderStaticText();
    renderHero();
    renderSelected();
    renderSpectrum();
    renderFilterTabs();
    renderArchive();
    if (state.openReaderKey) {
        openReader(state.openReaderKey);
    }
    observeReveals();
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

    elements.langToggle.addEventListener("click", () => {
        if (state.lang === "zh") {
            openLangModal();
            return;
        }
        applyLanguage("zh");
    });

    elements.langModalBackdrop.addEventListener("click", closeLangModal);
    elements.langModalCancel.addEventListener("click", closeLangModal);
    elements.langModalConfirm.addEventListener("click", () => {
        closeLangModal();
        applyLanguage("ne");
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
        if (event.key === "Escape" && elements.langModal.classList.contains("active")) {
            closeLangModal();
            return;
        }
        if (event.key === "Escape" && elements.reader.classList.contains("active")) {
            closeReader();
        }
    });
}

function init() {
    elements.footerYear.textContent = String(new Date().getFullYear());
    buildContentIndex();
    renderStaticText();
    initTheme();
    renderHero();
    renderSelected();
    renderSpectrum();
    renderFilterTabs();
    renderArchive();
    bindEvents();
    bindSectionTracking();
    observeReveals();

    if (state.lang === "ne") {
        applyLanguage("ne");
    }
}

document.addEventListener("DOMContentLoaded", init);
