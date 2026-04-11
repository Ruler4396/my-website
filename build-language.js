const fs = require("fs");
const path = require("path");

const glyphBlueprint = require("./language/source/glyph-blueprint.js");
const grammarTopics = require("./language/source/grammar-topics.js");
const { functionWords, concepts } = require("./language/source/lexicon-blueprint.js");
const { examples: exampleBlueprints, texts: textBlueprints } = require("./language/source/corpus.js");

const ROOT = __dirname;
const OUTPUT_JS = path.join(ROOT, "js", "language-data.js");
const OUTPUT_ASSET_DIR = path.join(ROOT, "assets", "language");

const PHONETIC_ONSETS = ["m", "n", "p", "t", "k", "s", "sh", "h", "l", "r", "v", "z", "y", "w", "d", "g", "b", "f"];
const PHONETIC_VOWELS = ["a", "e", "i", "o", "u"];
const DOMAIN_TO_DET = {
    human: "det-human",
    water: "det-water",
    time: "det-time",
    speech: "det-speech",
    motion: "det-motion",
    place: "det-place",
    craft: "det-craft",
    mind: "det-mind",
    bond: "det-bond",
    mark: "det-mark"
};

const RESERVED_FORMS = new Set(functionWords.map((item) => item.romanized));
const MANY_ENTRY_ID = "many__abs";

function readDocSummary(filePath) {
    const raw = fs.readFileSync(filePath, "utf-8").replace(/\r\n?/g, "\n").trim();
    const lines = raw.split("\n");
    const title = lines.find((line) => line.startsWith("# "))?.replace(/^# /, "") || path.basename(filePath);
    const excerpt = lines.find((line) => line && !line.startsWith("#") && !line.startsWith("-") && !line.startsWith("|")) || "";

    return {
        title,
        excerpt,
        path: path.relative(ROOT, filePath).replace(/\\/g, "/")
    };
}

function createSyllableBank() {
    const bank = [];
    for (const onset of PHONETIC_ONSETS) {
        for (const vowel of PHONETIC_VOWELS) {
            bank.push(`${onset}${vowel}`);
        }
    }
    return bank;
}

function allocateStem(index, usedForms, syllableBank) {
    let cursor = index;
    while (cursor < syllableBank.length * syllableBank.length * 2) {
        const first = syllableBank[cursor % syllableBank.length];
        const second = syllableBank[Math.floor(cursor / syllableBank.length) % syllableBank.length];
        const candidate = `${first}${second}`;
        if (!usedForms.has(candidate) && !RESERVED_FORMS.has(candidate)) {
            usedForms.add(candidate);
            return candidate;
        }
        cursor += 1;
    }
    throw new Error("词根分配失败：候选音节耗尽。");
}

function tokenizeRomanized(form) {
    const tokens = [];
    let cursor = 0;
    while (cursor < form.length) {
        if (form.slice(cursor, cursor + 2) === "sh") {
            tokens.push("c-sh");
            cursor += 2;
            continue;
        }

        const char = form[cursor];
        if (PHONETIC_VOWELS.includes(char)) {
            tokens.push(`v-${char}`);
            cursor += 1;
            continue;
        }
        if (PHONETIC_ONSETS.includes(char)) {
            tokens.push(`c-${char}`);
            cursor += 1;
            continue;
        }
        throw new Error(`无法解析的转写片段：${form}`);
    }
    return tokens;
}

function joinSentenceParts(parts) {
    let output = "";
    parts.forEach((part, index) => {
        if (!part) {
            return;
        }
        if (/^[.?!,:;]$/.test(part)) {
            output = `${output}${part}`;
            return;
        }
        output = output ? `${output} ${part}` : part;
        if (index === parts.length - 1) {
            output = output.trim();
        }
    });
    return output;
}

function buildNativeForm(tokens, glyphMap) {
    return tokens
        .map((tokenId) => glyphMap.get(tokenId)?.fallback_symbol || tokenId)
        .join("");
}

function deriveEntry(baseEntry, type, derivedFromId) {
    const strategies = {
        noun: {
            rel: {
                suffix: "li",
                pos: "adj",
                domain: baseEntry.domain,
                glossZh: `${baseEntry.glossZh}相关的`,
                definitionZh: `与“${baseEntry.glossZh}”相关，或具有其属性。`,
                tags: ["derived", "relational"]
            },
            place: {
                suffix: "to",
                pos: "noun",
                domain: "place",
                glossZh: `${baseEntry.glossZh}之地`,
                definitionZh: `与“${baseEntry.glossZh}”关联的地点、场所或容器。`,
                tags: ["derived", "locative"]
            },
            agent: {
                suffix: "ren",
                pos: "noun",
                domain: "human",
                glossZh: `${baseEntry.glossZh}之人`,
                definitionZh: `管理、使用、守护或代表“${baseEntry.glossZh}”的人。`,
                tags: ["derived", "agent"]
            },
            field: {
                suffix: "sa",
                pos: "noun",
                domain: baseEntry.domain,
                glossZh: `${baseEntry.glossZh}群域`,
                definitionZh: `围绕“${baseEntry.glossZh}”形成的一组事物、场域或集合。`,
                tags: ["derived", "collective"]
            }
        },
        verb: {
            act: {
                suffix: "ma",
                pos: "noun",
                domain: "mind",
                glossZh: `${baseEntry.glossZh}之事`,
                definitionZh: `与“${baseEntry.glossZh}”相关的动作、过程或事件。`,
                tags: ["derived", "action-noun"]
            },
            agent: {
                suffix: "ren",
                pos: "noun",
                domain: "human",
                glossZh: `${baseEntry.glossZh}者`,
                definitionZh: `执行“${baseEntry.glossZh}”的人。`,
                tags: ["derived", "agent"]
            },
            result: {
                suffix: "te",
                pos: "noun",
                domain: "craft",
                glossZh: `${baseEntry.glossZh}之成物`,
                definitionZh: `由“${baseEntry.glossZh}”产生、留下或完成的结果。`,
                tags: ["derived", "result"]
            },
            rel: {
                suffix: "li",
                pos: "adj",
                domain: baseEntry.domain,
                glossZh: `可${baseEntry.glossZh}的`,
                definitionZh: `适合、能够或倾向于“${baseEntry.glossZh}”。`,
                tags: ["derived", "relational"]
            }
        },
        adj: {
            abs: {
                suffix: "ma",
                pos: "noun",
                domain: "mind",
                glossZh: `${baseEntry.glossZh}之性`,
                definitionZh: `“${baseEntry.glossZh}”这一性质本身。`,
                tags: ["derived", "abstract"]
            },
            become: {
                suffix: "ri",
                pos: "verb",
                domain: baseEntry.domain,
                glossZh: `变得${baseEntry.glossZh}`,
                definitionZh: `进入或呈现“${baseEntry.glossZh}”的状态。`,
                tags: ["derived", "inchoative"]
            },
            adv: {
                suffix: "se",
                pos: "adv",
                domain: baseEntry.domain,
                glossZh: `${baseEntry.glossZh}地`,
                definitionZh: `以“${baseEntry.glossZh}”的方式。`,
                tags: ["derived", "adverbial"]
            },
            neg: {
                prefix: "ku",
                pos: "adj",
                domain: baseEntry.domain,
                glossZh: `不${baseEntry.glossZh}`,
                definitionZh: `缺少、反转或偏离“${baseEntry.glossZh}”。`,
                tags: ["derived", "negative"]
            }
        }
    };

    const config = strategies[baseEntry.basePos][type];
    if (!config) {
        throw new Error(`未知派生策略：${baseEntry.basePos}.${type}`);
    }

    const romanized = config.prefix ? `${config.prefix}${baseEntry.headword_romanized}` : `${baseEntry.headword_romanized}${config.suffix}`;
    const id = `${derivedFromId}__${type}`;

    return {
        id,
        headword_romanized: romanized,
        ipa: romanized,
        pos: config.pos,
        gloss_zh: config.glossZh,
        definition_zh: config.definitionZh,
        domain: config.domain,
        derived_from: derivedFromId,
        tags: [...baseEntry.tags, ...config.tags]
    };
}

function deriveConceptEntries(baseEntry) {
    const patterns = {
        noun: ["rel", "place", "agent", "field"],
        verb: ["act", "agent", "result", "rel"],
        adj: ["abs", "become", "adv", "neg"]
    };

    return patterns[baseEntry.basePos].map((type) => deriveEntry(baseEntry, type, baseEntry.id));
}

function createBaseEntry(concept, form) {
    return {
        id: concept.id,
        basePos: concept.pos,
        headword_romanized: form,
        ipa: form,
        pos: concept.pos,
        gloss_zh: concept.glossZh,
        definition_zh: concept.definitionZh,
        domain: concept.domain,
        derived_from: null,
        tags: [...concept.tags, "root"]
    };
}

function buildLexicon(glyphMap) {
    const syllableBank = createSyllableBank();
    const usedForms = new Set();
    const lexicon = [];

    concepts.forEach((concept, index) => {
        const form = allocateStem(index, usedForms, syllableBank);
        const baseEntry = createBaseEntry(concept, form);
        lexicon.push(baseEntry, ...deriveConceptEntries(baseEntry));
    });

    const functionEntries = functionWords.map((item) => ({
        id: item.id,
        basePos: item.pos,
        headword_romanized: item.romanized,
        ipa: item.ipa.replace(/\//g, ""),
        pos: item.pos,
        gloss_zh: item.glossZh,
        definition_zh: item.definitionZh,
        domain: item.domain,
        derived_from: null,
        tags: item.tags
    }));

    const allEntries = [...functionEntries, ...lexicon].map((entry) => {
        const includeDeterminative = entry.tags.includes("function") ? false : true;
        const detId = includeDeterminative ? DOMAIN_TO_DET[entry.domain] || DOMAIN_TO_DET.mind : null;
        const nativeTokens = [...(detId ? [detId] : []), ...tokenizeRomanized(entry.headword_romanized)];
        return {
            id: entry.id,
            headword_native: buildNativeForm(nativeTokens, glyphMap),
            native_tokens: nativeTokens,
            headword_romanized: entry.headword_romanized,
            ipa: entry.ipa,
            pos: entry.pos,
            gloss_zh: entry.gloss_zh,
            definition_zh: entry.definition_zh,
            derived_from: entry.derived_from,
            tags: entry.tags
        };
    });

    const ids = new Set();
    const forms = new Set();
    allEntries.forEach((entry) => {
        if (ids.has(entry.id)) {
            throw new Error(`词条 ID 重复：${entry.id}`);
        }
        if (forms.has(entry.headword_romanized)) {
            throw new Error(`转写重复：${entry.headword_romanized}`);
        }
        ids.add(entry.id);
        forms.add(entry.headword_romanized);
    });

    return allEntries.sort((a, b) => a.headword_romanized.localeCompare(b.headword_romanized, "en"));
}

function flattenGlyphs() {
    return [
        ...glyphBlueprint.determinatives,
        ...glyphBlueprint.consonants,
        ...glyphBlueprint.vowels
    ].map((item) => ({
        ...item,
        svg_asset: `assets/language/${item.id}.svg`
    }));
}

function resolveToken(token, lexiconMap, glyphMap) {
    if (/^[.?!,:;]$/.test(token)) {
        return {
            kind: "punct",
            romanized: token,
            native_form: token,
            native_tokens: [],
            gloss_zh: token
        };
    }

    const entry = lexiconMap.get(token);
    if (!entry) {
        throw new Error(`例句引用了不存在的词条：${token}`);
    }

    return {
        kind: "word",
        romanized: entry.headword_romanized,
        native_form: entry.headword_native,
        native_tokens: entry.native_tokens,
        gloss_zh: entry.gloss_zh,
        glyph_preview: entry.native_tokens.map((tokenId) => glyphMap.get(tokenId)?.svg_asset).filter(Boolean)
    };
}

function buildExamples(lexicon, glyphMap) {
    const lexiconMap = new Map(lexicon.map((entry) => [entry.id, entry]));

    return exampleBlueprints.map((example) => {
        const resolvedTokens = example.tokens.map((token) => resolveToken(token, lexiconMap, glyphMap));
        return {
            id: example.id,
            native: joinSentenceParts(resolvedTokens.map((token) => token.native_form)),
            romanized: joinSentenceParts(resolvedTokens.map((token) => token.romanized)),
            morpheme_break: example.tokens.filter((token) => !/^[.?!,:;]$/.test(token)).join(" "),
            gloss: example.gloss,
            translation_zh: example.translation_zh,
            notes: example.notes,
            token_stream: resolvedTokens
        };
    });
}

function buildTexts(exampleMap) {
    return textBlueprints.map((text) => {
        const sentences = text.example_ids.map((id) => {
            const sentence = exampleMap.get(id);
            if (!sentence) {
                throw new Error(`文本引用了不存在的例句：${id}`);
            }
            return sentence;
        });

        return {
            id: text.id,
            title: text.title,
            summary: text.summary,
            sentences
        };
    });
}

function validateGrammarTopics(exampleMap) {
    grammarTopics.forEach((topic) => {
        topic.linked_examples.forEach((id) => {
            if (!exampleMap.has(id)) {
                throw new Error(`语法主题 ${topic.id} 引用了不存在的例句：${id}`);
            }
        });
    });
}

function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}

function renderSvg(item, index) {
    if (item.phonetic_role === "determinative") {
        const motifs = [
            `<path d="M26 30 L60 18 L94 30 L94 92 L26 92 Z" fill="#f4e8c8" stroke="#1f1b16" stroke-width="6"/>`,
            `<path d="M22 62 C30 30, 48 22, 62 22 C78 22, 94 34, 98 60 C90 88, 74 98, 56 98 C40 98, 26 88, 22 62 Z" fill="#f4e8c8" stroke="#1f1b16" stroke-width="6"/>`,
            `<path d="M60 16 L92 42 L80 96 L40 96 L28 42 Z" fill="#f4e8c8" stroke="#1f1b16" stroke-width="6"/>`,
            `<circle cx="60" cy="60" r="34" fill="#f4e8c8" stroke="#1f1b16" stroke-width="6"/>`,
            `<path d="M18 60 L38 22 L82 22 L102 60 L82 98 L38 98 Z" fill="#f4e8c8" stroke="#1f1b16" stroke-width="6"/>`
        ];
        const inner = [
            `<path d="M44 42 C48 58, 72 58, 76 42" stroke="#1f46ff" stroke-width="8" fill="none" stroke-linecap="round"/>`,
            `<path d="M40 46 L60 74 L80 46" stroke="#1f46ff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
            `<path d="M60 34 L60 86 M38 60 L82 60" stroke="#1f46ff" stroke-width="8" stroke-linecap="round"/>`,
            `<path d="M40 82 L80 38" stroke="#1f46ff" stroke-width="8" stroke-linecap="round"/><circle cx="46" cy="46" r="6" fill="#1f46ff"/><circle cx="74" cy="74" r="6" fill="#1f46ff"/>`,
            `<path d="M38 44 L82 44 L60 82 Z" fill="none" stroke="#1f46ff" stroke-width="8" stroke-linejoin="round"/>`
        ];
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="${item.romanized}">
    <rect width="120" height="120" rx="22" fill="#fbf5e8"/>
    ${motifs[index % motifs.length]}
    ${inner[index % inner.length]}
</svg>`.trim();
    }

    if (item.phonetic_role === "consonant") {
        const x = 30 + (index % 6) * 10;
        const y = 24 + (index % 4) * 8;
        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="${item.romanized}">
    <rect width="120" height="120" rx="22" fill="#f8f2e6"/>
    <path d="M28 98 L28 24" stroke="#1f1b16" stroke-width="8" stroke-linecap="round"/>
    <path d="M28 ${y} L${x + 36} ${y}" stroke="#1f46ff" stroke-width="8" stroke-linecap="round"/>
    <path d="M28 60 L${x + 26} 60" stroke="#1f1b16" stroke-width="8" stroke-linecap="round"/>
    <path d="M${x} 24 L${x + 12} 98" stroke="#8b5a2b" stroke-width="8" stroke-linecap="round"/>
    <circle cx="${x + 28}" cy="${84 - (index % 5) * 8}" r="6" fill="#1f46ff"/>
</svg>`.trim();
    }

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="${item.romanized}">
    <rect width="120" height="120" rx="22" fill="#f8f2e6"/>
    <circle cx="60" cy="60" r="${24 + (index % 5) * 4}" fill="none" stroke="#1f46ff" stroke-width="8"/>
    <path d="M60 18 L60 102" stroke="#1f1b16" stroke-width="8" stroke-linecap="round"/>
    <path d="M30 ${38 + (index % 4) * 10} L90 ${82 - (index % 4) * 10}" stroke="#8b5a2b" stroke-width="8" stroke-linecap="round"/>
</svg>`.trim();
}

function writeGlyphAssets(glyphs) {
    ensureDir(OUTPUT_ASSET_DIR);
    glyphs.forEach((glyph, index) => {
        const filePath = path.join(ROOT, glyph.svg_asset);
        fs.writeFileSync(filePath, `${renderSvg(glyph, index)}\n`, "utf-8");
    });
}

function buildPhonologyData() {
    return {
        syllable_shape: "(C)V(C)",
        stress_rule: "默认重音在倒数第二音节。",
        sound_changes: [
            "鼻音在塞音前发生近音同化，但标准转写保持不变。",
            "i、u 在元音前可弱化为滑音，但不改写。"
        ],
        consonants: glyphBlueprint.consonants.map(({ romanized, ipa }) => ({ romanized, ipa })),
        vowels: glyphBlueprint.vowels.map(({ romanized, ipa }) => ({ romanized, ipa }))
    };
}

function buildDocumentList() {
    const sourceDir = path.join(ROOT, "language", "source");
    return [
        "00-design-brief.md",
        "10-phonology.md",
        "20-script.md",
        "30-grammar.md"
    ].map((file) => readDocSummary(path.join(sourceDir, file)));
}

function main() {
    const glyphs = flattenGlyphs();
    const glyphMap = new Map(glyphs.map((glyph) => [glyph.id, glyph]));

    const lexicon = buildLexicon(glyphMap);
    const lexiconMap = new Map(lexicon.map((entry) => [entry.id, entry]));
    const examples = buildExamples(lexicon, glyphMap);
    const exampleMap = new Map(examples.map((entry) => [entry.id, entry]));
    validateGrammarTopics(exampleMap);
    const texts = buildTexts(exampleMap);

    if (lexicon.length < 500 || lexicon.length > 800) {
        throw new Error(`词库规模不满足目标：${lexicon.length}`);
    }
    if (examples.length < 50 || examples.length > 100) {
        throw new Error(`例句规模不满足目标：${examples.length}`);
    }
    if (!lexiconMap.has(MANY_ENTRY_ID)) {
        throw new Error(`缺少数量抽象词：${MANY_ENTRY_ID}`);
    }

    writeGlyphAssets(glyphs);

    const data = {
        meta: {
            codename: "Project Neral",
            status: "V1 working draft",
            counts: {
                glyphs: glyphs.length,
                lexicon: lexicon.length,
                examples: examples.length,
                texts: texts.length,
                grammar_topics: grammarTopics.length
            },
            notes: [
                "内部代号，不是最终语言名。",
                "网站当前仅提供静态展示、检索与评审。",
                "原生书写采用语义标记 + 音符链的双层表示。"
            ]
        },
        documents: buildDocumentList(),
        phonology: buildPhonologyData(),
        glyphs,
        grammar_topics: grammarTopics,
        lexicon,
        examples,
        texts
    };

    const output = `// ===== Project Neral language data =====\nwindow.languageLabData = ${JSON.stringify(data, null, 4)};\n`;
    fs.writeFileSync(OUTPUT_JS, output, "utf-8");

    console.log(`✅ Language build completed`);
    console.log(`📚 Lexicon entries: ${lexicon.length}`);
    console.log(`📝 Example sentences: ${examples.length}`);
    console.log(`🔤 Glyph assets: ${glyphs.length}`);
    console.log(`📄 Output: ${path.relative(ROOT, OUTPUT_JS)}`);
}

main();
