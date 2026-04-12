function glyph({
    id,
    native_form,
    romanized,
    ipa,
    semantic_role,
    phonetic_role,
    fallback_symbol,
    family,
    stroke_count,
    contrast_with,
    notes,
    formal_paths,
    cursive_paths
}) {
    return {
        id,
        native_form,
        romanized,
        ipa,
        semantic_role,
        phonetic_role,
        fallback_symbol,
        family,
        stroke_count,
        contrast_with,
        notes,
        formal_paths,
        cursive_paths
    };
}

function determinative(id, native_form, romanized, semanticRole, fallback_symbol, notes, formal_paths, cursive_paths, contrast_with) {
    return glyph({
        id,
        native_form,
        romanized,
        ipa: "semantic",
        semantic_role: semanticRole,
        phonetic_role: "determinative",
        fallback_symbol,
        family: "classifier-prefix",
        stroke_count: 3,
        contrast_with,
        notes,
        formal_paths,
        cursive_paths
    });
}

function consonant(romanized, ipa, fallback_symbol, notes, formal_paths, cursive_paths, contrast_with) {
    return glyph({
        id: `c-${romanized}`,
        native_form: fallback_symbol,
        romanized,
        ipa,
        semantic_role: "phonetic",
        phonetic_role: "consonant",
        fallback_symbol,
        family: "spine-consonant",
        stroke_count: 2,
        contrast_with,
        notes,
        formal_paths,
        cursive_paths
    });
}

function vowel(romanized, ipa, fallback_symbol, notes, formal_paths, cursive_paths, contrast_with) {
    return glyph({
        id: `v-${romanized}`,
        native_form: fallback_symbol,
        romanized,
        ipa,
        semantic_role: "phonetic",
        phonetic_role: "vowel",
        fallback_symbol,
        family: "vowel-mark",
        stroke_count: 1,
        contrast_with,
        notes,
        formal_paths,
        cursive_paths
    });
}

module.exports = {
    determinatives: [
        determinative(
            "det-human",
            "◠",
            "human",
            "人与身体",
            "◠",
            "左高右低的人形拱脊，重心上提；手写体会把右侧短折连成一笔。",
            [
                "M30 88 C36 62 44 42 56 26",
                "M56 26 C72 34 80 46 86 64",
                "M46 62 C58 66 70 74 80 90"
            ],
            [
                "M36 88 C46 54 58 42 82 70",
                "M48 66 C60 74 72 82 84 90"
            ],
            ["det-bond", "c-l"]
        ),
        determinative(
            "det-water",
            "≈",
            "water",
            "水与流体",
            "≈",
            "双波线下压，中段留白最大；与言语标记区分在于不存在封闭口。",
            [
                "M24 44 C38 30 52 30 66 44 C78 56 88 56 98 42",
                "M24 76 C38 62 52 62 66 76 C78 88 88 88 98 74",
                "M30 30 L24 94"
            ],
            [
                "M26 52 C44 34 58 40 72 56 C80 64 88 68 98 60",
                "M30 80 C46 66 60 68 78 84"
            ],
            ["det-speech", "v-u"]
        ),
        determinative(
            "det-time",
            "◔",
            "time",
            "时间与光",
            "◔",
            "外轮廓近似残月，中心斜升线表示日行；手写时外圈常不闭合。",
            [
                "M34 88 C22 70 24 42 42 28 C58 16 80 18 92 36 C100 50 100 72 86 88",
                "M52 86 C40 74 38 48 52 32 C62 22 76 24 84 36",
                "M54 66 L80 40"
            ],
            [
                "M36 84 C24 66 28 38 50 28 C68 22 82 32 88 48",
                "M54 74 L80 42"
            ],
            ["det-mark", "v-o"]
        ),
        determinative(
            "det-speech",
            "◡",
            "speech",
            "言语与空气",
            "◡",
            "像开口的唇缘，左侧较厚；与水标记的区别是存在明确开口腔体。",
            [
                "M28 48 C42 30 62 28 80 38 C90 44 94 54 92 66",
                "M28 48 C30 66 42 80 64 84 C78 86 88 78 94 66",
                "M44 56 C56 48 68 48 80 54"
            ],
            [
                "M30 50 C46 30 78 34 88 54 C82 76 58 82 36 70",
                "M48 56 C58 52 68 54 78 58"
            ],
            ["det-water", "det-bond"]
        ),
        determinative(
            "det-motion",
            "⌁",
            "motion",
            "运动与路径",
            "⌁",
            "长斜脊向右前推进，尾端抬起；常用于路径、方向、迁移。",
            [
                "M24 82 C40 70 58 56 76 34",
                "M42 90 C54 76 66 64 92 58",
                "M74 34 L92 38 L82 52"
            ],
            [
                "M26 84 C48 70 68 50 88 38",
                "M46 88 C64 74 78 68 94 64"
            ],
            ["det-place", "c-y"]
        ),
        determinative(
            "det-place",
            "⌂",
            "place",
            "地点与容器",
            "⌂",
            "半开口围合体，底部稳定；真实手写中上缘常缩短但底托不消失。",
            [
                "M30 88 L30 40",
                "M30 40 C44 26 70 24 88 38",
                "M88 38 L88 88 L42 88"
            ],
            [
                "M34 88 L34 44 C48 30 70 30 86 42",
                "M86 42 L84 88 L46 88"
            ],
            ["det-motion", "c-h"]
        ),
        determinative(
            "det-craft",
            "⟟",
            "craft",
            "工具与制造",
            "⟟",
            "一条主脊被横向构件压住，像被固定在工架上的材料。",
            [
                "M34 88 L58 28",
                "M46 58 L88 44",
                "M60 28 L88 88"
            ],
            [
                "M36 88 L58 34 L86 86",
                "M44 60 L82 48"
            ],
            ["det-mark", "c-k"]
        ),
        determinative(
            "det-mind",
            "◇",
            "mind",
            "思维与抽象",
            "◇",
            "闭合菱心配一条内折线，表现抽象结构而非具象物件。",
            [
                "M58 22 L88 54 L60 92 L28 60 Z",
                "M44 56 C52 48 64 46 74 52",
                "M44 56 C54 64 62 70 70 74"
            ],
            [
                "M58 26 L84 54 L60 88 L32 60 Z",
                "M46 58 C58 50 68 54 72 66"
            ],
            ["det-mark", "v-o"]
        ),
        determinative(
            "det-bond",
            "∞",
            "bond",
            "关系与社会",
            "∞",
            "双环相扣但不完全对称，避免与圆形时间类或抽象类标记混淆。",
            [
                "M28 58 C28 40 40 32 54 40 C64 46 66 60 54 70 C40 82 28 74 28 58",
                "M54 40 C70 30 92 38 92 58 C92 76 74 82 62 72 C52 64 50 50 54 40",
                "M44 52 L74 64"
            ],
            [
                "M30 58 C30 38 52 34 60 48 C64 58 56 72 42 72 C34 72 28 66 30 58",
                "M58 48 C72 34 92 42 90 60 C88 78 66 78 58 62"
            ],
            ["det-human", "det-speech"]
        ),
        determinative(
            "det-mark",
            "⟐",
            "mark",
            "度量与记号",
            "⟐",
            "竖脊带双短刻，是最接近‘记号’原义的分类前缀。",
            [
                "M54 22 L54 92",
                "M40 40 L78 34",
                "M40 70 L74 76"
            ],
            [
                "M54 24 L54 90",
                "M42 42 L76 36",
                "M44 70 L72 74"
            ],
            ["det-time", "det-craft"]
        )
    ],
    consonants: [
        consonant(
            "m",
            "/m/",
            "ɯ",
            "双隆起尾段，手写时第二个隆起可压平，但尾部仍外张。",
            ["M28 92 C36 72 42 54 48 28", "M48 28 C56 42 62 56 68 72", "M68 72 C74 60 82 54 92 62"],
            ["M32 90 C42 58 52 42 74 70 C80 76 86 78 94 74"],
            ["c-n", "c-b"]
        ),
        consonant(
            "n",
            "/n/",
            "ɲ",
            "单隆起并在尾端内收，避免与 m 的双峰节奏混同。",
            ["M30 92 C38 72 44 54 50 28", "M50 28 C60 42 72 56 88 64"],
            ["M34 90 C44 58 56 42 86 64"],
            ["c-m", "c-l"]
        ),
        consonant(
            "p",
            "/p/",
            "þ",
            "低位横胁压在主脊右侧，形成闭塞感。",
            ["M34 92 C42 70 48 50 52 24", "M50 60 L86 58", "M48 68 C58 76 70 80 82 78"],
            ["M36 90 C44 58 50 40 54 24", "M50 62 L84 60"],
            ["c-b", "c-f"]
        ),
        consonant(
            "b",
            "/b/",
            "β",
            "与 p 同族，但高位多一短刻，保证小尺寸也能拉开。",
            ["M34 92 C42 70 48 50 52 24", "M46 42 L80 36", "M50 62 L86 58"],
            ["M36 90 C44 58 50 40 54 24", "M48 42 L76 38", "M50 62 L84 60"],
            ["c-p", "c-m"]
        ),
        consonant(
            "t",
            "/t/",
            "ŧ",
            "高顶横与下勾共存，主要识别点在停笔位置更高。",
            ["M44 92 C50 70 54 48 56 22", "M34 34 L80 28", "M56 60 C66 66 74 74 78 88"],
            ["M46 90 C52 62 56 42 58 22", "M36 34 L78 30", "M56 60 C66 68 72 76 76 86"],
            ["c-d", "c-r"]
        ),
        consonant(
            "d",
            "/d/",
            "đ",
            "在 t 的骨架上加入中位短记，不依赖孤点。",
            ["M44 92 C50 70 54 48 56 22", "M34 34 L80 28", "M44 58 L74 54"],
            ["M46 90 C52 62 56 42 58 22", "M36 34 L78 30", "M46 58 L72 54"],
            ["c-t", "c-z"]
        ),
        consonant(
            "k",
            "/k/",
            "ʞ",
            "主脊外开成尖角，右上角是主要识别特征。",
            ["M34 92 C42 70 48 52 54 24", "M54 54 L88 30", "M54 56 L84 86"],
            ["M36 90 C44 60 50 42 56 24", "M56 54 L86 34", "M56 56 L82 84"],
            ["c-g", "c-craft"]
        ),
        consonant(
            "g",
            "/g/",
            "ɠ",
            "与 k 共骨架，但下支更长并向内回收。",
            ["M34 92 C42 70 48 52 54 24", "M54 54 L88 30", "M54 56 C70 72 74 80 66 92"],
            ["M36 90 C44 60 50 42 56 24", "M56 54 L86 34", "M56 56 C70 70 72 80 66 90"],
            ["c-k", "c-y"]
        ),
        consonant(
            "f",
            "/f/",
            "ƒ",
            "前伸细钩配低横，是摩擦音家族的开口型代表。",
            ["M42 92 C48 72 52 52 56 22", "M42 50 L84 44", "M38 70 C48 64 58 64 66 68"],
            ["M44 90 C50 62 54 42 58 22", "M42 50 L82 46"],
            ["c-v", "c-p"]
        ),
        consonant(
            "v",
            "/v/",
            "ʋ",
            "与 f 同族，但下部出现回包曲线而非外伸钩。",
            ["M42 92 C48 72 52 52 56 22", "M42 50 L84 44", "M50 62 C62 68 72 76 74 88"],
            ["M44 90 C50 62 54 42 58 22", "M44 50 L82 46", "M54 62 C66 70 72 78 72 88"],
            ["c-f", "c-w"]
        ),
        consonant(
            "s",
            "/s/",
            "ʂ",
            "双向摆动的蛇形主笔，无上部附记。",
            ["M34 34 C48 22 72 28 78 42", "M78 42 C84 56 60 58 48 64", "M48 64 C34 72 38 84 76 88"],
            ["M36 36 C50 26 72 30 76 42", "M76 42 C80 54 58 58 48 64", "M48 64 C36 72 42 82 74 86"],
            ["c-z", "c-sh"]
        ),
        consonant(
            "z",
            "/z/",
            "ʐ",
            "保留 s 的主摆动，但中位加一短切，避免只靠语音对立。",
            ["M34 34 C48 22 72 28 78 42", "M78 42 C84 56 60 58 48 64", "M48 64 C34 72 38 84 76 88", "M42 54 L66 50"],
            ["M36 36 C50 26 72 30 76 42", "M76 42 C80 54 58 58 48 64", "M48 64 C36 72 42 82 74 86", "M44 54 L64 50"],
            ["c-s", "c-d"]
        ),
        consonant(
            "sh",
            "/ʃ/",
            "ʃ",
            "在 s 的骨架上加顶部盖笔，形成更封闭的摩擦感。",
            ["M34 34 C48 22 72 28 78 42", "M78 42 C84 56 60 58 48 64", "M48 64 C34 72 38 84 76 88", "M34 26 L74 24"],
            ["M36 36 C50 26 72 30 76 42", "M76 42 C80 54 58 58 48 64", "M48 64 C36 72 42 82 74 86", "M38 28 L72 26"],
            ["c-s", "c-h"]
        ),
        consonant(
            "h",
            "/h/",
            "ɦ",
            "开喉式长立笔加中腰横，不走蛇形。",
            ["M40 92 C46 70 50 48 52 22", "M48 56 L82 50", "M80 28 L84 90"],
            ["M42 90 C48 62 52 42 54 22", "M50 56 L80 52", "M80 30 L82 88"],
            ["c-sh", "c-place"]
        ),
        consonant(
            "l",
            "/l/",
            "ɭ",
            "长脊之后直接左回，像一次完整的回腕；与 r 的区别在回收长度。",
            ["M36 22 C48 40 54 56 58 86", "M58 86 C52 94 42 92 34 84"],
            ["M38 24 C50 42 56 58 60 86", "M60 86 C54 90 46 90 38 84"],
            ["c-r", "c-n"]
        ),
        consonant(
            "r",
            "/ɾ/",
            "ɾ",
            "短回转，收笔更早，不形成完整长尾。",
            ["M36 22 C48 40 54 56 58 82", "M58 82 C66 78 74 74 80 68"],
            ["M38 24 C50 42 56 58 60 80", "M60 80 C66 78 72 74 76 70"],
            ["c-l", "c-t"]
        ),
        consonant(
            "y",
            "/j/",
            "ʎ",
            "上部分叉、下部汇流，是典型半元音标记。",
            ["M34 28 L56 58", "M84 24 L56 58", "M56 58 C52 72 48 82 44 92"],
            ["M36 30 L56 58", "M80 26 L56 58", "M56 58 C52 72 48 82 46 90"],
            ["c-w", "c-g"]
        ),
        consonant(
            "w",
            "/w/",
            "ɰ",
            "双叉下沉，比 y 多一个低位波谷。",
            ["M30 36 L44 82", "M44 82 L60 38", "M60 38 L76 86", "M76 86 L92 42"],
            ["M32 38 L46 82", "M46 82 L60 42", "M60 42 L74 84", "M74 84 L88 46"],
            ["c-y", "c-v"]
        )
    ],
    vowels: [
        vowel(
            "a",
            "/a/",
            "˘",
            "开口杯形，默认写在音节链偏下位置，是最稳的元音标记。",
            ["M36 64 C46 78 70 78 82 62"],
            ["M40 64 C50 74 68 74 78 64"],
            ["v-u", "v-e"]
        ),
        vowel(
            "e",
            "/e/",
            "ˉ",
            "短平横，位置偏中高；真实手写里常略向右上挑。",
            ["M36 54 L82 48"],
            ["M40 54 L78 50"],
            ["v-a", "v-i"]
        ),
        vowel(
            "i",
            "/i/",
            "˙",
            "短竖点记，但不会只剩孤点，底部带微短尾。",
            ["M58 36 L58 62", "M54 30 L64 24"],
            ["M58 34 L58 56"],
            ["v-e", "v-o"]
        ),
        vowel(
            "o",
            "/o/",
            "°",
            "小闭环，适合在词内快速扫读中被一眼识别。",
            ["M44 50 C52 38 70 38 78 50 C84 60 78 74 64 76 C50 76 42 64 44 50"],
            ["M46 52 C54 42 68 42 74 52 C78 62 72 72 62 72 C52 72 44 62 46 52"],
            ["v-u", "v-i"]
        ),
        vowel(
            "u",
            "/u/",
            "ˍ",
            "下沉弯托，比 a 更低、更闭；与 a 的主要区别在开口宽度和重心。",
            ["M34 54 C44 72 72 72 86 54"],
            ["M38 56 C48 68 68 68 80 56"],
            ["v-a", "v-o"]
        )
    ]
};
