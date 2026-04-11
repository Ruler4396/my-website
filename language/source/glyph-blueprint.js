module.exports = {
    determinatives: [
        {
            id: "det-human",
            native_form: "◫",
            romanized: "human",
            ipa: "semantic",
            semantic_role: "人与身体",
            phonetic_role: "determinative",
            fallback_symbol: "◫",
            notes: "用于人、身体、身份、亲属和施事者。"
        },
        {
            id: "det-water",
            native_form: "≈",
            romanized: "water",
            ipa: "semantic",
            semantic_role: "水与流体",
            phonetic_role: "determinative",
            fallback_symbol: "≈",
            notes: "用于水、雨、河、饮食与流动液体。"
        },
        {
            id: "det-time",
            native_form: "✶",
            romanized: "time",
            ipa: "semantic",
            semantic_role: "时间与光",
            phonetic_role: "determinative",
            fallback_symbol: "✶",
            notes: "用于太阳、昼夜、时间和发光事物。"
        },
        {
            id: "det-speech",
            native_form: "◍",
            romanized: "speech",
            ipa: "semantic",
            semantic_role: "言语与空气",
            phonetic_role: "determinative",
            fallback_symbol: "◍",
            notes: "用于语言、声音、听觉、风和歌唱。"
        },
        {
            id: "det-motion",
            native_form: "⟠",
            romanized: "motion",
            ipa: "semantic",
            semantic_role: "运动与路径",
            phonetic_role: "determinative",
            fallback_symbol: "⟠",
            notes: "用于移动、道路、方向、出入和姿态变化。"
        },
        {
            id: "det-place",
            native_form: "⌂",
            romanized: "place",
            ipa: "semantic",
            semantic_role: "地点与容器",
            phonetic_role: "determinative",
            fallback_symbol: "⌂",
            notes: "用于地点、建筑、容器、场所与边界。"
        },
        {
            id: "det-craft",
            native_form: "⛭",
            romanized: "craft",
            ipa: "semantic",
            semantic_role: "工具与制造",
            phonetic_role: "determinative",
            fallback_symbol: "⛭",
            notes: "用于工具、制造、书写和人工产物。"
        },
        {
            id: "det-mind",
            native_form: "◈",
            romanized: "mind",
            ipa: "semantic",
            semantic_role: "思维与抽象",
            phonetic_role: "determinative",
            fallback_symbol: "◈",
            notes: "用于认知、判断、记忆、法则与抽象概念。"
        },
        {
            id: "det-bond",
            native_form: "⋈",
            romanized: "bond",
            ipa: "semantic",
            semantic_role: "关系与社会",
            phonetic_role: "determinative",
            fallback_symbol: "⋈",
            notes: "用于关系、交换、群体、家庭与社会结构。"
        },
        {
            id: "det-mark",
            native_form: "⌇",
            romanized: "mark",
            ipa: "semantic",
            semantic_role: "度量与记号",
            phonetic_role: "determinative",
            fallback_symbol: "⌇",
            notes: "用于数字、名称、尺度、边界与记录性符号。"
        }
    ],
    consonants: [
        ["m", "/m/", "⟂"],
        ["n", "/n/", "⟃"],
        ["p", "/p/", "⟄"],
        ["b", "/b/", "⟅"],
        ["t", "/t/", "⟆"],
        ["d", "/d/", "⟇"],
        ["k", "/k/", "⟈"],
        ["g", "/g/", "⟉"],
        ["f", "/f/", "⟊"],
        ["v", "/v/", "⟋"],
        ["s", "/s/", "⟌"],
        ["z", "/z/", "⟍"],
        ["sh", "/ʃ/", "⟎"],
        ["h", "/h/", "⟏"],
        ["l", "/l/", "⟐"],
        ["r", "/ɾ/", "⟑"],
        ["y", "/j/", "⟒"],
        ["w", "/w/", "⟓"]
    ].map(([romanized, ipa, fallback_symbol]) => ({
        id: `c-${romanized}`,
        native_form: fallback_symbol,
        romanized,
        ipa,
        semantic_role: "phonetic",
        phonetic_role: "consonant",
        fallback_symbol,
        notes: "音符链中的辅音记号。"
    })),
    vowels: [
        ["a", "/a/", "⟔"],
        ["e", "/e/", "⟕"],
        ["i", "/i/", "⟖"],
        ["o", "/o/", "⟗"],
        ["u", "/u/", "⟘"]
    ].map(([romanized, ipa, fallback_symbol]) => ({
        id: `v-${romanized}`,
        native_form: fallback_symbol,
        romanized,
        ipa,
        semantic_role: "phonetic",
        phonetic_role: "vowel",
        fallback_symbol,
        notes: "音符链中的元音记号。"
    }))
};
