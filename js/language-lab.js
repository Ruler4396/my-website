const data = window.languageLabData || null;

const state = {
    query: "",
    pos: "all",
    entryType: "root"
};

const elements = {
    heroMetrics: document.getElementById("hero-metrics"),
    docGrid: document.getElementById("doc-grid"),
    phonologySummary: document.getElementById("phonology-summary"),
    consonantGrid: document.getElementById("consonant-grid"),
    vowelGrid: document.getElementById("vowel-grid"),
    topicList: document.getElementById("topic-list"),
    glyphGrid: document.getElementById("glyph-grid"),
    lexiconSearch: document.getElementById("lexicon-search"),
    posFilter: document.getElementById("pos-filter"),
    entryFilter: document.getElementById("entry-filter"),
    lexiconMeta: document.getElementById("lexicon-meta"),
    lexiconTable: document.getElementById("lexicon-table"),
    exampleList: document.getElementById("example-list"),
    textList: document.getElementById("text-list")
};

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderNativeTokens(nativeTokens, fallback) {
    if (!nativeTokens.length) {
        return `<span class="word-fallback">${escapeHtml(fallback)}</span>`;
    }

    const images = nativeTokens
        .map((tokenId) => {
            const glyph = data.glyphs.find((item) => item.id === tokenId);
            if (!glyph) {
                return "";
            }
            return `<img src="${glyph.svg_asset}" alt="${escapeHtml(glyph.romanized)}" loading="lazy">`;
        })
        .join("");

    return `
        <span class="word-native" aria-label="${escapeHtml(fallback)}">${images}</span>
        <span class="word-fallback">${escapeHtml(fallback)}</span>
    `;
}

function renderHeroMetrics() {
    const entries = [
        ["Glyphs", data.meta.counts.glyphs],
        ["Lexicon", data.meta.counts.lexicon],
        ["Examples", data.meta.counts.examples],
        ["Topics", data.meta.counts.grammar_topics]
    ];

    elements.heroMetrics.innerHTML = entries
        .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
        .join("");
}

function renderDocs() {
    elements.docGrid.innerHTML = data.documents
        .map(
            (doc) => `
            <article class="doc-card">
                <p class="panel-tag">SOURCE NOTE</p>
                <h3>${escapeHtml(doc.title)}</h3>
                <p>${escapeHtml(doc.excerpt)}</p>
                <a class="doc-link" href="${escapeHtml(doc.path)}" target="_blank" rel="noreferrer">打开源文件</a>
            </article>
        `
        )
        .join("");
}

function renderPhonology() {
    elements.phonologySummary.textContent = `${data.phonology.syllable_shape}，${data.phonology.stress_rule}`;
    elements.consonantGrid.innerHTML = data.phonology.consonants
        .map((item) => `<span class="sound-chip"><code>${escapeHtml(item.romanized)}</code><span>${escapeHtml(item.ipa)}</span></span>`)
        .join("");
    elements.vowelGrid.innerHTML = data.phonology.vowels
        .map((item) => `<span class="sound-chip"><code>${escapeHtml(item.romanized)}</code><span>${escapeHtml(item.ipa)}</span></span>`)
        .join("");
}

function renderTopics() {
    elements.topicList.innerHTML = data.grammar_topics
        .map(
            (topic) => `
            <article class="topic-card">
                <h3>${escapeHtml(topic.title)}</h3>
                <p>${escapeHtml(topic.rule_summary)}</p>
                <div class="topic-linked">
                    ${topic.linked_examples.map((id) => `<span>${escapeHtml(id)}</span>`).join("")}
                </div>
            </article>
        `
        )
        .join("");
}

function renderGlyphs() {
    elements.glyphGrid.innerHTML = data.glyphs
        .map(
            (glyph) => `
            <article class="glyph-card">
                <img src="${glyph.svg_asset}" alt="${escapeHtml(glyph.romanized)}" loading="lazy">
                <div>
                    <h3>${escapeHtml(glyph.romanized)}</h3>
                    <div class="glyph-meta">
                        <span>${escapeHtml(glyph.semantic_role)}</span>
                        <span>${escapeHtml(glyph.phonetic_role)}</span>
                        <span>${escapeHtml(glyph.ipa)}</span>
                    </div>
                    <p>${escapeHtml(glyph.notes)}</p>
                </div>
            </article>
        `
        )
        .join("");
}

function buildPosFilter() {
    const posValues = [...new Set(data.lexicon.map((entry) => entry.pos))];
    elements.posFilter.innerHTML = ['<option value="all">全部</option>']
        .concat(posValues.map((pos) => `<option value="${escapeHtml(pos)}">${escapeHtml(pos)}</option>`))
        .join("");
}

function getVisibleLexicon() {
    const query = state.query.trim().toLowerCase();

    return data.lexicon.filter((entry) => {
        const matchPos = state.pos === "all" || entry.pos === state.pos;
        const isDerived = Boolean(entry.derived_from);
        const matchEntryType =
            state.entryType === "all" ||
            (state.entryType === "root" && !isDerived) ||
            (state.entryType === "derived" && isDerived);
        const searchText = `${entry.headword_native} ${entry.headword_romanized} ${entry.gloss_zh} ${entry.definition_zh} ${entry.tags.join(" ")}`.toLowerCase();
        const matchQuery = !query || searchText.includes(query);
        return matchPos && matchEntryType && matchQuery;
    });
}

function renderLexicon() {
    const visible = getVisibleLexicon();
    const rootCount = data.lexicon.filter((entry) => !entry.derived_from).length;
    const derivedCount = data.lexicon.length - rootCount;
    const modeLabel =
        state.entryType === "root"
            ? `当前显示根词；派生词已折叠。根词 ${rootCount} 条，派生词 ${derivedCount} 条。`
            : state.entryType === "derived"
              ? `当前仅显示派生词。根词 ${rootCount} 条，派生词 ${derivedCount} 条。`
              : `当前显示全部词条。根词 ${rootCount} 条，派生词 ${derivedCount} 条。`;
    elements.lexiconMeta.textContent = `显示 ${visible.length} / ${data.lexicon.length} 条词条。${modeLabel}`;

    elements.lexiconTable.innerHTML = visible
        .map(
            (entry) => `
            <article class="lexicon-row">
                <div>
                    <h3 class="lexicon-heading">${escapeHtml(entry.gloss_zh)}</h3>
                    <div class="lexicon-native">${renderNativeTokens(entry.native_tokens, entry.headword_native)}</div>
                    <p class="lexicon-romanized">${escapeHtml(entry.headword_romanized)} · /${escapeHtml(entry.ipa)}/</p>
                </div>
                <div>
                    <div class="lexicon-chip-row">
                        <span class="chip">${escapeHtml(entry.pos)}</span>
                        ${entry.derived_from ? `<span class="chip">from ${escapeHtml(entry.derived_from)}</span>` : '<span class="chip">root</span>'}
                    </div>
                    <div class="lexicon-chip-row">
                        ${entry.tags.slice(0, 4).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
                    </div>
                </div>
                <div>
                    <p class="lexicon-definition">${escapeHtml(entry.definition_zh)}</p>
                </div>
            </article>
        `
        )
        .join("");
}

function renderExamples() {
    elements.exampleList.innerHTML = data.examples
        .map(
            (entry) => `
            <article class="example-card">
                <h4>${escapeHtml(entry.translation_zh)}</h4>
                <div class="example-native">${entry.token_stream.map((token) => renderNativeTokens(token.native_tokens, token.native_form)).join("")}</div>
                <p class="sentence-line"><span class="sentence-label">Romanized</span>${escapeHtml(entry.romanized)}</p>
                <p class="sentence-line"><span class="sentence-label">Gloss</span>${escapeHtml(entry.gloss)}</p>
                <p class="sentence-line"><span class="sentence-label">Notes</span><span class="example-meta">${escapeHtml(entry.notes)}</span></p>
            </article>
        `
        )
        .join("");
}

function renderTexts() {
    elements.textList.innerHTML = data.texts
        .map(
            (text) => `
            <section class="text-card">
                <h4>${escapeHtml(text.title)}</h4>
                <p class="text-summary">${escapeHtml(text.summary)}</p>
                ${text.sentences
                    .map(
                        (sentence) => `
                        <article>
                            <div class="sentence-native">${sentence.token_stream.map((token) => renderNativeTokens(token.native_tokens, token.native_form)).join("")}</div>
                            <p class="sentence-line"><span class="sentence-label">Romanized</span>${escapeHtml(sentence.romanized)}</p>
                            <p class="sentence-line"><span class="sentence-label">中文</span>${escapeHtml(sentence.translation_zh)}</p>
                        </article>
                    `
                    )
                    .join("")}
            </section>
        `
        )
        .join("");
}

function bindEvents() {
    elements.lexiconSearch.addEventListener("input", (event) => {
        state.query = event.target.value;
        renderLexicon();
    });

    elements.posFilter.addEventListener("change", (event) => {
        state.pos = event.target.value;
        renderLexicon();
    });

    elements.entryFilter.addEventListener("change", (event) => {
        state.entryType = event.target.value;
        renderLexicon();
    });
}

function init() {
    if (!data) {
        document.body.innerHTML = "<p>language-data.js 缺失，无法渲染页面。</p>";
        return;
    }

    renderHeroMetrics();
    renderDocs();
    renderPhonology();
    renderTopics();
    renderGlyphs();
    buildPosFilter();
    renderLexicon();
    renderExamples();
    renderTexts();
    bindEvents();
}

document.addEventListener("DOMContentLoaded", init);
