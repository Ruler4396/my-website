// ===== Project Neral language data =====
window.languageLabData = {
    "meta": {
        "codename": "Project Neral",
        "status": "V1 working draft",
        "counts": {
            "glyphs": 33,
            "lexicon": 728,
            "examples": 60,
            "texts": 3,
            "grammar_topics": 12
        },
        "notes": [
            "内部代号，不是最终语言名。",
            "网站当前仅提供静态展示、检索与评审。",
            "原生书写采用语义标记 + 音符链的双层表示。"
        ],
        "fonts": {
            "ttf": "assets/language/neral-glyphic-regular.ttf",
            "woff2": "assets/language/neral-glyphic-regular.woff2"
        }
    },
    "documents": [
        {
            "title": "Project Neral · 设计简报",
            "excerpt": "`Project Neral` 是这门语言的内部代号，不是最终语言名，也不是最终文字名。",
            "path": "language/source/00-design-brief.md"
        },
        {
            "title": "Project Neral · 音系与转写",
            "excerpt": "",
            "path": "language/source/10-phonology.md"
        },
        {
            "title": "Project Neral · 自然演化文字规范 v2",
            "excerpt": "`Project Neral` 的文字不再按“概念图标集合”设计，而按“长期被真实书写共同体使用过的文字”设计。",
            "path": "language/source/20-script.md"
        },
        {
            "title": "Project Neral · 语法骨架",
            "excerpt": "  - `-li`：关系形容词",
            "path": "language/source/30-grammar.md"
        }
    ],
    "phonology": {
        "syllable_shape": "(C)V(C)",
        "stress_rule": "默认重音在倒数第二音节。",
        "sound_changes": [
            "鼻音在塞音前发生近音同化，但标准转写保持不变。",
            "i、u 在元音前可弱化为滑音，但不改写。"
        ],
        "consonants": [
            {
                "romanized": "m",
                "ipa": "/m/"
            },
            {
                "romanized": "n",
                "ipa": "/n/"
            },
            {
                "romanized": "p",
                "ipa": "/p/"
            },
            {
                "romanized": "b",
                "ipa": "/b/"
            },
            {
                "romanized": "t",
                "ipa": "/t/"
            },
            {
                "romanized": "d",
                "ipa": "/d/"
            },
            {
                "romanized": "k",
                "ipa": "/k/"
            },
            {
                "romanized": "g",
                "ipa": "/g/"
            },
            {
                "romanized": "f",
                "ipa": "/f/"
            },
            {
                "romanized": "v",
                "ipa": "/v/"
            },
            {
                "romanized": "s",
                "ipa": "/s/"
            },
            {
                "romanized": "z",
                "ipa": "/z/"
            },
            {
                "romanized": "sh",
                "ipa": "/ʃ/"
            },
            {
                "romanized": "h",
                "ipa": "/h/"
            },
            {
                "romanized": "l",
                "ipa": "/l/"
            },
            {
                "romanized": "r",
                "ipa": "/ɾ/"
            },
            {
                "romanized": "y",
                "ipa": "/j/"
            },
            {
                "romanized": "w",
                "ipa": "/w/"
            }
        ],
        "vowels": [
            {
                "romanized": "a",
                "ipa": "/a/"
            },
            {
                "romanized": "e",
                "ipa": "/e/"
            },
            {
                "romanized": "i",
                "ipa": "/i/"
            },
            {
                "romanized": "o",
                "ipa": "/o/"
            },
            {
                "romanized": "u",
                "ipa": "/u/"
            }
        ]
    },
    "glyphs": [
        {
            "id": "det-human",
            "native_form": "◠",
            "romanized": "human",
            "ipa": "semantic",
            "semantic_role": "人与身体",
            "phonetic_role": "determinative",
            "fallback_symbol": "◠",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-bond",
                "c-l"
            ],
            "notes": "左高右低的人形拱脊，重心上提；手写体会把右侧短折连成一笔。",
            "formal_paths": [
                "M30 88 C36 62 44 42 56 26",
                "M56 26 C72 34 80 46 86 64",
                "M46 62 C58 66 70 74 80 90"
            ],
            "cursive_paths": [
                "M36 88 C46 54 58 42 82 70",
                "M48 66 C60 74 72 82 84 90"
            ],
            "svg_asset": "assets/language/det-human.svg"
        },
        {
            "id": "det-water",
            "native_form": "≈",
            "romanized": "water",
            "ipa": "semantic",
            "semantic_role": "水与流体",
            "phonetic_role": "determinative",
            "fallback_symbol": "≈",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-speech",
                "v-u"
            ],
            "notes": "双波线下压，中段留白最大；与言语标记区分在于不存在封闭口。",
            "formal_paths": [
                "M24 44 C38 30 52 30 66 44 C78 56 88 56 98 42",
                "M24 76 C38 62 52 62 66 76 C78 88 88 88 98 74",
                "M30 30 L24 94"
            ],
            "cursive_paths": [
                "M26 52 C44 34 58 40 72 56 C80 64 88 68 98 60",
                "M30 80 C46 66 60 68 78 84"
            ],
            "svg_asset": "assets/language/det-water.svg"
        },
        {
            "id": "det-time",
            "native_form": "◔",
            "romanized": "time",
            "ipa": "semantic",
            "semantic_role": "时间与光",
            "phonetic_role": "determinative",
            "fallback_symbol": "◔",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-mark",
                "v-o"
            ],
            "notes": "外轮廓近似残月，中心斜升线表示日行；手写时外圈常不闭合。",
            "formal_paths": [
                "M34 88 C22 70 24 42 42 28 C58 16 80 18 92 36 C100 50 100 72 86 88",
                "M52 86 C40 74 38 48 52 32 C62 22 76 24 84 36",
                "M54 66 L80 40"
            ],
            "cursive_paths": [
                "M36 84 C24 66 28 38 50 28 C68 22 82 32 88 48",
                "M54 74 L80 42"
            ],
            "svg_asset": "assets/language/det-time.svg"
        },
        {
            "id": "det-speech",
            "native_form": "◡",
            "romanized": "speech",
            "ipa": "semantic",
            "semantic_role": "言语与空气",
            "phonetic_role": "determinative",
            "fallback_symbol": "◡",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-water",
                "det-bond"
            ],
            "notes": "像开口的唇缘，左侧较厚；与水标记的区别是存在明确开口腔体。",
            "formal_paths": [
                "M28 48 C42 30 62 28 80 38 C90 44 94 54 92 66",
                "M28 48 C30 66 42 80 64 84 C78 86 88 78 94 66",
                "M44 56 C56 48 68 48 80 54"
            ],
            "cursive_paths": [
                "M30 50 C46 30 78 34 88 54 C82 76 58 82 36 70",
                "M48 56 C58 52 68 54 78 58"
            ],
            "svg_asset": "assets/language/det-speech.svg"
        },
        {
            "id": "det-motion",
            "native_form": "⌁",
            "romanized": "motion",
            "ipa": "semantic",
            "semantic_role": "运动与路径",
            "phonetic_role": "determinative",
            "fallback_symbol": "⌁",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-place",
                "c-y"
            ],
            "notes": "长斜脊向右前推进，尾端抬起；常用于路径、方向、迁移。",
            "formal_paths": [
                "M24 82 C40 70 58 56 76 34",
                "M42 90 C54 76 66 64 92 58",
                "M74 34 L92 38 L82 52"
            ],
            "cursive_paths": [
                "M26 84 C48 70 68 50 88 38",
                "M46 88 C64 74 78 68 94 64"
            ],
            "svg_asset": "assets/language/det-motion.svg"
        },
        {
            "id": "det-place",
            "native_form": "⌂",
            "romanized": "place",
            "ipa": "semantic",
            "semantic_role": "地点与容器",
            "phonetic_role": "determinative",
            "fallback_symbol": "⌂",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-motion",
                "c-h"
            ],
            "notes": "半开口围合体，底部稳定；真实手写中上缘常缩短但底托不消失。",
            "formal_paths": [
                "M30 88 L30 40",
                "M30 40 C44 26 70 24 88 38",
                "M88 38 L88 88 L42 88"
            ],
            "cursive_paths": [
                "M34 88 L34 44 C48 30 70 30 86 42",
                "M86 42 L84 88 L46 88"
            ],
            "svg_asset": "assets/language/det-place.svg"
        },
        {
            "id": "det-craft",
            "native_form": "⟟",
            "romanized": "craft",
            "ipa": "semantic",
            "semantic_role": "工具与制造",
            "phonetic_role": "determinative",
            "fallback_symbol": "⟟",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-mark",
                "c-k"
            ],
            "notes": "一条主脊被横向构件压住，像被固定在工架上的材料。",
            "formal_paths": [
                "M34 88 L58 28",
                "M46 58 L88 44",
                "M60 28 L88 88"
            ],
            "cursive_paths": [
                "M36 88 L58 34 L86 86",
                "M44 60 L82 48"
            ],
            "svg_asset": "assets/language/det-craft.svg"
        },
        {
            "id": "det-mind",
            "native_form": "◇",
            "romanized": "mind",
            "ipa": "semantic",
            "semantic_role": "思维与抽象",
            "phonetic_role": "determinative",
            "fallback_symbol": "◇",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-mark",
                "v-o"
            ],
            "notes": "闭合菱心配一条内折线，表现抽象结构而非具象物件。",
            "formal_paths": [
                "M58 22 L88 54 L60 92 L28 60 Z",
                "M44 56 C52 48 64 46 74 52",
                "M44 56 C54 64 62 70 70 74"
            ],
            "cursive_paths": [
                "M58 26 L84 54 L60 88 L32 60 Z",
                "M46 58 C58 50 68 54 72 66"
            ],
            "svg_asset": "assets/language/det-mind.svg"
        },
        {
            "id": "det-bond",
            "native_form": "∞",
            "romanized": "bond",
            "ipa": "semantic",
            "semantic_role": "关系与社会",
            "phonetic_role": "determinative",
            "fallback_symbol": "∞",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-human",
                "det-speech"
            ],
            "notes": "双环相扣但不完全对称，避免与圆形时间类或抽象类标记混淆。",
            "formal_paths": [
                "M28 58 C28 40 40 32 54 40 C64 46 66 60 54 70 C40 82 28 74 28 58",
                "M54 40 C70 30 92 38 92 58 C92 76 74 82 62 72 C52 64 50 50 54 40",
                "M44 52 L74 64"
            ],
            "cursive_paths": [
                "M30 58 C30 38 52 34 60 48 C64 58 56 72 42 72 C34 72 28 66 30 58",
                "M58 48 C72 34 92 42 90 60 C88 78 66 78 58 62"
            ],
            "svg_asset": "assets/language/det-bond.svg"
        },
        {
            "id": "det-mark",
            "native_form": "⟐",
            "romanized": "mark",
            "ipa": "semantic",
            "semantic_role": "度量与记号",
            "phonetic_role": "determinative",
            "fallback_symbol": "⟐",
            "family": "classifier-prefix",
            "stroke_count": 3,
            "contrast_with": [
                "det-time",
                "det-craft"
            ],
            "notes": "竖脊带双短刻，是最接近‘记号’原义的分类前缀。",
            "formal_paths": [
                "M54 22 L54 92",
                "M40 40 L78 34",
                "M40 70 L74 76"
            ],
            "cursive_paths": [
                "M54 24 L54 90",
                "M42 42 L76 36",
                "M44 70 L72 74"
            ],
            "svg_asset": "assets/language/det-mark.svg"
        },
        {
            "id": "c-m",
            "native_form": "ɯ",
            "romanized": "m",
            "ipa": "/m/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɯ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-n",
                "c-b"
            ],
            "notes": "双隆起尾段，手写时第二个隆起可压平，但尾部仍外张。",
            "formal_paths": [
                "M28 92 C36 72 42 54 48 28",
                "M48 28 C56 42 62 56 68 72",
                "M68 72 C74 60 82 54 92 62"
            ],
            "cursive_paths": [
                "M32 90 C42 58 52 42 74 70 C80 76 86 78 94 74"
            ],
            "svg_asset": "assets/language/c-m.svg"
        },
        {
            "id": "c-n",
            "native_form": "ɲ",
            "romanized": "n",
            "ipa": "/n/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɲ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-m",
                "c-l"
            ],
            "notes": "单隆起并在尾端内收，避免与 m 的双峰节奏混同。",
            "formal_paths": [
                "M30 92 C38 72 44 54 50 28",
                "M50 28 C60 42 72 56 88 64"
            ],
            "cursive_paths": [
                "M34 90 C44 58 56 42 86 64"
            ],
            "svg_asset": "assets/language/c-n.svg"
        },
        {
            "id": "c-p",
            "native_form": "þ",
            "romanized": "p",
            "ipa": "/p/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "þ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-b",
                "c-f"
            ],
            "notes": "低位横胁压在主脊右侧，形成闭塞感。",
            "formal_paths": [
                "M34 92 C42 70 48 50 52 24",
                "M50 60 L86 58",
                "M48 68 C58 76 70 80 82 78"
            ],
            "cursive_paths": [
                "M36 90 C44 58 50 40 54 24",
                "M50 62 L84 60"
            ],
            "svg_asset": "assets/language/c-p.svg"
        },
        {
            "id": "c-b",
            "native_form": "β",
            "romanized": "b",
            "ipa": "/b/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "β",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-p",
                "c-m"
            ],
            "notes": "与 p 同族，但高位多一短刻，保证小尺寸也能拉开。",
            "formal_paths": [
                "M34 92 C42 70 48 50 52 24",
                "M46 42 L80 36",
                "M50 62 L86 58"
            ],
            "cursive_paths": [
                "M36 90 C44 58 50 40 54 24",
                "M48 42 L76 38",
                "M50 62 L84 60"
            ],
            "svg_asset": "assets/language/c-b.svg"
        },
        {
            "id": "c-t",
            "native_form": "ŧ",
            "romanized": "t",
            "ipa": "/t/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ŧ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-d",
                "c-r"
            ],
            "notes": "高顶横与下勾共存，主要识别点在停笔位置更高。",
            "formal_paths": [
                "M44 92 C50 70 54 48 56 22",
                "M34 34 L80 28",
                "M56 60 C66 66 74 74 78 88"
            ],
            "cursive_paths": [
                "M46 90 C52 62 56 42 58 22",
                "M36 34 L78 30",
                "M56 60 C66 68 72 76 76 86"
            ],
            "svg_asset": "assets/language/c-t.svg"
        },
        {
            "id": "c-d",
            "native_form": "đ",
            "romanized": "d",
            "ipa": "/d/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "đ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-t",
                "c-z"
            ],
            "notes": "在 t 的骨架上加入中位短记，不依赖孤点。",
            "formal_paths": [
                "M44 92 C50 70 54 48 56 22",
                "M34 34 L80 28",
                "M44 58 L74 54"
            ],
            "cursive_paths": [
                "M46 90 C52 62 56 42 58 22",
                "M36 34 L78 30",
                "M46 58 L72 54"
            ],
            "svg_asset": "assets/language/c-d.svg"
        },
        {
            "id": "c-k",
            "native_form": "ʞ",
            "romanized": "k",
            "ipa": "/k/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʞ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-g",
                "c-craft"
            ],
            "notes": "主脊外开成尖角，右上角是主要识别特征。",
            "formal_paths": [
                "M34 92 C42 70 48 52 54 24",
                "M54 54 L88 30",
                "M54 56 L84 86"
            ],
            "cursive_paths": [
                "M36 90 C44 60 50 42 56 24",
                "M56 54 L86 34",
                "M56 56 L82 84"
            ],
            "svg_asset": "assets/language/c-k.svg"
        },
        {
            "id": "c-g",
            "native_form": "ɠ",
            "romanized": "g",
            "ipa": "/g/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɠ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-k",
                "c-y"
            ],
            "notes": "与 k 共骨架，但下支更长并向内回收。",
            "formal_paths": [
                "M34 92 C42 70 48 52 54 24",
                "M54 54 L88 30",
                "M54 56 C70 72 74 80 66 92"
            ],
            "cursive_paths": [
                "M36 90 C44 60 50 42 56 24",
                "M56 54 L86 34",
                "M56 56 C70 70 72 80 66 90"
            ],
            "svg_asset": "assets/language/c-g.svg"
        },
        {
            "id": "c-f",
            "native_form": "ƒ",
            "romanized": "f",
            "ipa": "/f/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ƒ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-v",
                "c-p"
            ],
            "notes": "前伸细钩配低横，是摩擦音家族的开口型代表。",
            "formal_paths": [
                "M42 92 C48 72 52 52 56 22",
                "M42 50 L84 44",
                "M38 70 C48 64 58 64 66 68"
            ],
            "cursive_paths": [
                "M44 90 C50 62 54 42 58 22",
                "M42 50 L82 46"
            ],
            "svg_asset": "assets/language/c-f.svg"
        },
        {
            "id": "c-v",
            "native_form": "ʋ",
            "romanized": "v",
            "ipa": "/v/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʋ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-f",
                "c-w"
            ],
            "notes": "与 f 同族，但下部出现回包曲线而非外伸钩。",
            "formal_paths": [
                "M42 92 C48 72 52 52 56 22",
                "M42 50 L84 44",
                "M50 62 C62 68 72 76 74 88"
            ],
            "cursive_paths": [
                "M44 90 C50 62 54 42 58 22",
                "M44 50 L82 46",
                "M54 62 C66 70 72 78 72 88"
            ],
            "svg_asset": "assets/language/c-v.svg"
        },
        {
            "id": "c-s",
            "native_form": "ʂ",
            "romanized": "s",
            "ipa": "/s/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʂ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-z",
                "c-sh"
            ],
            "notes": "双向摆动的蛇形主笔，无上部附记。",
            "formal_paths": [
                "M34 34 C48 22 72 28 78 42",
                "M78 42 C84 56 60 58 48 64",
                "M48 64 C34 72 38 84 76 88"
            ],
            "cursive_paths": [
                "M36 36 C50 26 72 30 76 42",
                "M76 42 C80 54 58 58 48 64",
                "M48 64 C36 72 42 82 74 86"
            ],
            "svg_asset": "assets/language/c-s.svg"
        },
        {
            "id": "c-z",
            "native_form": "ʐ",
            "romanized": "z",
            "ipa": "/z/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʐ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-s",
                "c-d"
            ],
            "notes": "保留 s 的主摆动，但中位加一短切，避免只靠语音对立。",
            "formal_paths": [
                "M34 34 C48 22 72 28 78 42",
                "M78 42 C84 56 60 58 48 64",
                "M48 64 C34 72 38 84 76 88",
                "M42 54 L66 50"
            ],
            "cursive_paths": [
                "M36 36 C50 26 72 30 76 42",
                "M76 42 C80 54 58 58 48 64",
                "M48 64 C36 72 42 82 74 86",
                "M44 54 L64 50"
            ],
            "svg_asset": "assets/language/c-z.svg"
        },
        {
            "id": "c-sh",
            "native_form": "ʃ",
            "romanized": "sh",
            "ipa": "/ʃ/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʃ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-s",
                "c-h"
            ],
            "notes": "在 s 的骨架上加顶部盖笔，形成更封闭的摩擦感。",
            "formal_paths": [
                "M34 34 C48 22 72 28 78 42",
                "M78 42 C84 56 60 58 48 64",
                "M48 64 C34 72 38 84 76 88",
                "M34 26 L74 24"
            ],
            "cursive_paths": [
                "M36 36 C50 26 72 30 76 42",
                "M76 42 C80 54 58 58 48 64",
                "M48 64 C36 72 42 82 74 86",
                "M38 28 L72 26"
            ],
            "svg_asset": "assets/language/c-sh.svg"
        },
        {
            "id": "c-h",
            "native_form": "ɦ",
            "romanized": "h",
            "ipa": "/h/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɦ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-sh",
                "c-place"
            ],
            "notes": "开喉式长立笔加中腰横，不走蛇形。",
            "formal_paths": [
                "M40 92 C46 70 50 48 52 22",
                "M48 56 L82 50",
                "M80 28 L84 90"
            ],
            "cursive_paths": [
                "M42 90 C48 62 52 42 54 22",
                "M50 56 L80 52",
                "M80 30 L82 88"
            ],
            "svg_asset": "assets/language/c-h.svg"
        },
        {
            "id": "c-l",
            "native_form": "ɭ",
            "romanized": "l",
            "ipa": "/l/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɭ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-r",
                "c-n"
            ],
            "notes": "长脊之后直接左回，像一次完整的回腕；与 r 的区别在回收长度。",
            "formal_paths": [
                "M36 22 C48 40 54 56 58 86",
                "M58 86 C52 94 42 92 34 84"
            ],
            "cursive_paths": [
                "M38 24 C50 42 56 58 60 86",
                "M60 86 C54 90 46 90 38 84"
            ],
            "svg_asset": "assets/language/c-l.svg"
        },
        {
            "id": "c-r",
            "native_form": "ɾ",
            "romanized": "r",
            "ipa": "/ɾ/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɾ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-l",
                "c-t"
            ],
            "notes": "短回转，收笔更早，不形成完整长尾。",
            "formal_paths": [
                "M36 22 C48 40 54 56 58 82",
                "M58 82 C66 78 74 74 80 68"
            ],
            "cursive_paths": [
                "M38 24 C50 42 56 58 60 80",
                "M60 80 C66 78 72 74 76 70"
            ],
            "svg_asset": "assets/language/c-r.svg"
        },
        {
            "id": "c-y",
            "native_form": "ʎ",
            "romanized": "y",
            "ipa": "/j/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ʎ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-w",
                "c-g"
            ],
            "notes": "上部分叉、下部汇流，是典型半元音标记。",
            "formal_paths": [
                "M34 28 L56 58",
                "M84 24 L56 58",
                "M56 58 C52 72 48 82 44 92"
            ],
            "cursive_paths": [
                "M36 30 L56 58",
                "M80 26 L56 58",
                "M56 58 C52 72 48 82 46 90"
            ],
            "svg_asset": "assets/language/c-y.svg"
        },
        {
            "id": "c-w",
            "native_form": "ɰ",
            "romanized": "w",
            "ipa": "/w/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "ɰ",
            "family": "spine-consonant",
            "stroke_count": 2,
            "contrast_with": [
                "c-y",
                "c-v"
            ],
            "notes": "双叉下沉，比 y 多一个低位波谷。",
            "formal_paths": [
                "M30 36 L44 82",
                "M44 82 L60 38",
                "M60 38 L76 86",
                "M76 86 L92 42"
            ],
            "cursive_paths": [
                "M32 38 L46 82",
                "M46 82 L60 42",
                "M60 42 L74 84",
                "M74 84 L88 46"
            ],
            "svg_asset": "assets/language/c-w.svg"
        },
        {
            "id": "v-a",
            "native_form": "˘",
            "romanized": "a",
            "ipa": "/a/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "˘",
            "family": "vowel-mark",
            "stroke_count": 1,
            "contrast_with": [
                "v-u",
                "v-e"
            ],
            "notes": "开口杯形，默认写在音节链偏下位置，是最稳的元音标记。",
            "formal_paths": [
                "M36 64 C46 78 70 78 82 62"
            ],
            "cursive_paths": [
                "M40 64 C50 74 68 74 78 64"
            ],
            "svg_asset": "assets/language/v-a.svg"
        },
        {
            "id": "v-e",
            "native_form": "ˉ",
            "romanized": "e",
            "ipa": "/e/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "ˉ",
            "family": "vowel-mark",
            "stroke_count": 1,
            "contrast_with": [
                "v-a",
                "v-i"
            ],
            "notes": "短平横，位置偏中高；真实手写里常略向右上挑。",
            "formal_paths": [
                "M36 54 L82 48"
            ],
            "cursive_paths": [
                "M40 54 L78 50"
            ],
            "svg_asset": "assets/language/v-e.svg"
        },
        {
            "id": "v-i",
            "native_form": "˙",
            "romanized": "i",
            "ipa": "/i/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "˙",
            "family": "vowel-mark",
            "stroke_count": 1,
            "contrast_with": [
                "v-e",
                "v-o"
            ],
            "notes": "短竖点记，但不会只剩孤点，底部带微短尾。",
            "formal_paths": [
                "M58 36 L58 62",
                "M54 30 L64 24"
            ],
            "cursive_paths": [
                "M58 34 L58 56"
            ],
            "svg_asset": "assets/language/v-i.svg"
        },
        {
            "id": "v-o",
            "native_form": "°",
            "romanized": "o",
            "ipa": "/o/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "°",
            "family": "vowel-mark",
            "stroke_count": 1,
            "contrast_with": [
                "v-u",
                "v-i"
            ],
            "notes": "小闭环，适合在词内快速扫读中被一眼识别。",
            "formal_paths": [
                "M44 50 C52 38 70 38 78 50 C84 60 78 74 64 76 C50 76 42 64 44 50"
            ],
            "cursive_paths": [
                "M46 52 C54 42 68 42 74 52 C78 62 72 72 62 72 C52 72 44 62 46 52"
            ],
            "svg_asset": "assets/language/v-o.svg"
        },
        {
            "id": "v-u",
            "native_form": "ˍ",
            "romanized": "u",
            "ipa": "/u/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "ˍ",
            "family": "vowel-mark",
            "stroke_count": 1,
            "contrast_with": [
                "v-a",
                "v-o"
            ],
            "notes": "下沉弯托，比 a 更低、更闭；与 a 的主要区别在开口宽度和重心。",
            "formal_paths": [
                "M34 54 C44 72 72 72 86 54"
            ],
            "cursive_paths": [
                "M38 56 C48 68 68 68 80 56"
            ],
            "svg_asset": "assets/language/v-u.svg"
        }
    ],
    "grammar_topics": [
        {
            "id": "word-order",
            "title": "基础语序与信息排列",
            "rule_summary": "Project Neral 默认采用 SOV 语序；定语和属格短语位于中心词前，后置词位于名词短语后。",
            "patterns": [
                "主语 + 宾语 + 动词",
                "定语 + 名词",
                "领有者 + ge + 名词",
                "名词 + lo/de/se/ko"
            ],
            "exceptions": [
                "主题化时可把话题提前，但动词仍在句尾。"
            ],
            "linked_examples": [
                "ex-01",
                "ex-02",
                "ex-09",
                "ex-22"
            ]
        },
        {
            "id": "copula-location",
            "title": "系词与处所句",
            "rule_summary": "`si` 同时承担系词和存在词角色；地点通过后置词 `lo` 标记。",
            "patterns": [
                "名词 + lo + si",
                "名词 + 名词 + si"
            ],
            "exceptions": [
                "动态移动不用 `si`，而使用实义动词。"
            ],
            "linked_examples": [
                "ex-03",
                "ex-04",
                "ex-18",
                "ex-44"
            ]
        },
        {
            "id": "negation",
            "title": "否定",
            "rule_summary": "否定词 `na` 位于动词短语之前；系词句同样在 `si` 前使用 `na`。",
            "patterns": [
                "主语 + 宾语 + na + 动词",
                "主语 + 名词 + na + si"
            ],
            "exceptions": [
                "强调否定时可在句首额外设置话题，但 `na` 的位置不变。"
            ],
            "linked_examples": [
                "ex-05",
                "ex-17",
                "ex-23",
                "ex-46"
            ]
        },
        {
            "id": "tense-aspect",
            "title": "时体标记",
            "rule_summary": "`pa` 表过去，`ri` 表进行，`vu` 表计划或意向，`nu` 表完成；这些体貌词位于动词之后。",
            "patterns": [
                "动词 + pa",
                "动词 + ri",
                "动词 + vu",
                "动词 + nu"
            ],
            "exceptions": [
                "叙事中若时间已明确，连续句可省略重复的过去标记。"
            ],
            "linked_examples": [
                "ex-06",
                "ex-07",
                "ex-08",
                "ex-24",
                "ex-35"
            ]
        },
        {
            "id": "questions",
            "title": "一般疑问与问句边界",
            "rule_summary": "一般疑问通过句尾词 `ke` 实现，不改变基本语序。",
            "patterns": [
                "完整句子 + ke"
            ],
            "exceptions": [
                "带疑问词的句子仍可保留 `ke`，但口语中允许省略。"
            ],
            "linked_examples": [
                "ex-10",
                "ex-11",
                "ex-36",
                "ex-52"
            ]
        },
        {
            "id": "possession",
            "title": "领属结构",
            "rule_summary": "领有者在前，后接 `ge`，被领属名词在后。",
            "patterns": [
                "名词 + ge + 名词",
                "代词 + ge + 名词"
            ],
            "exceptions": [
                "固定亲属称谓中，口语可省略显式领属，但词典基准形不省略。"
            ],
            "linked_examples": [
                "ex-12",
                "ex-13",
                "ex-29",
                "ex-45"
            ]
        },
        {
            "id": "comparison",
            "title": "比较",
            "rule_summary": "比较结构使用 `mo`，顺序为“比较基准 + mo + 形容词”。",
            "patterns": [
                "名词 + mo + 形容词",
                "名词 + mo + 形容词 + si"
            ],
            "exceptions": [
                "强调差异程度时可加副词，但 V1 不引入专门级别屈折。"
            ],
            "linked_examples": [
                "ex-14",
                "ex-15",
                "ex-38"
            ]
        },
        {
            "id": "derivation",
            "title": "派生词与词类扩展",
            "rule_summary": "高频词汇通过稳定派生扩展，而不是依靠大规模屈折；词类变化时语义标记也可切换。",
            "patterns": [
                "名词 + li",
                "名词 + to",
                "动词 + ren",
                "形容词 + ma",
                "ku + 形容词"
            ],
            "exceptions": [
                "个别高频功能词不参与派生。"
            ],
            "linked_examples": [
                "ex-16",
                "ex-27",
                "ex-39",
                "ex-53"
            ]
        },
        {
            "id": "subordination",
            "title": "简单从句",
            "rule_summary": "V1 从句通过连接词 `ya` 引入，整体仍保持主句 SOV 节奏。",
            "patterns": [
                "[从句] + ya + 主句",
                "名词 + ya + 动词"
            ],
            "exceptions": [
                "嵌套层级不超过一层；更复杂结构留到下一版。"
            ],
            "linked_examples": [
                "ex-19",
                "ex-20",
                "ex-41",
                "ex-54"
            ]
        },
        {
            "id": "movement",
            "title": "位置与移动",
            "rule_summary": "`lo` 标记静态处所，`de` 标记方向或受益，`ko` 标记来源。",
            "patterns": [
                "地点 + lo",
                "地点 + de",
                "地点 + ko"
            ],
            "exceptions": [
                "某些移动动词可省略显式处所，但词典示例仍优先保留。"
            ],
            "linked_examples": [
                "ex-21",
                "ex-25",
                "ex-31",
                "ex-47",
                "ex-55"
            ]
        },
        {
            "id": "coordination",
            "title": "并列与共格",
            "rule_summary": "`se` 既可表示“和”，也可表示“用”；具体由搭配决定。",
            "patterns": [
                "名词 + se + 名词",
                "工具 + se + 动词"
            ],
            "exceptions": [
                "若语义歧义较大，优先在译文或注释中解释。"
            ],
            "linked_examples": [
                "ex-26",
                "ex-30",
                "ex-42",
                "ex-56"
            ]
        },
        {
            "id": "narrative-flow",
            "title": "叙事节奏",
            "rule_summary": "叙事中倾向先给时间和地点，再给人物和动作；过去标记可在段内首句显式出现。",
            "patterns": [
                "时间 + 地点 + 主语 + 宾语 + 动词 + pa"
            ],
            "exceptions": [
                "在对话和问句中不强制先出时间短语。"
            ],
            "linked_examples": [
                "ex-32",
                "ex-33",
                "ex-34",
                "ex-57",
                "ex-58",
                "ex-60"
            ]
        }
    ],
    "lexicon": [
        {
            "id": "drink",
            "headword_native": "≈β˘ɯ˘",
            "native_tokens": [
                "det-water",
                "c-b",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bama",
            "ipa": "bama",
            "pos": "verb",
            "gloss_zh": "喝",
            "definition_zh": "摄取液体。",
            "derived_from": null,
            "tags": [
                "daily",
                "body",
                "root"
            ]
        },
        {
            "id": "drink__rel",
            "headword_native": "≈β˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-b",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "bamali",
            "ipa": "bamali",
            "pos": "adj",
            "gloss_zh": "可喝的",
            "definition_zh": "适合、能够或倾向于“喝”。",
            "derived_from": "drink",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "drink__act",
            "headword_native": "◇β˘ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-b",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bamama",
            "ipa": "bamama",
            "pos": "noun",
            "gloss_zh": "喝之事",
            "definition_zh": "与“喝”相关的动作、过程或事件。",
            "derived_from": "drink",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "drink__agent",
            "headword_native": "◠β˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "bamaren",
            "ipa": "bamaren",
            "pos": "noun",
            "gloss_zh": "喝者",
            "definition_zh": "执行“喝”的人。",
            "derived_from": "drink",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "drink__result",
            "headword_native": "⟟β˘ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "bamate",
            "ipa": "bamate",
            "pos": "noun",
            "gloss_zh": "喝之成物",
            "definition_zh": "由“喝”产生、留下或完成的结果。",
            "derived_from": "drink",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "sleep",
            "headword_native": "◠βˉɯ˘",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bema",
            "ipa": "bema",
            "pos": "verb",
            "gloss_zh": "睡",
            "definition_zh": "进入休息状态。",
            "derived_from": null,
            "tags": [
                "daily",
                "body",
                "root"
            ]
        },
        {
            "id": "sleep__rel",
            "headword_native": "◠βˉɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "bemali",
            "ipa": "bemali",
            "pos": "adj",
            "gloss_zh": "可睡的",
            "definition_zh": "适合、能够或倾向于“睡”。",
            "derived_from": "sleep",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "sleep__act",
            "headword_native": "◇βˉɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-b",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bemama",
            "ipa": "bemama",
            "pos": "noun",
            "gloss_zh": "睡之事",
            "definition_zh": "与“睡”相关的动作、过程或事件。",
            "derived_from": "sleep",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "sleep__agent",
            "headword_native": "◠βˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "bemaren",
            "ipa": "bemaren",
            "pos": "noun",
            "gloss_zh": "睡者",
            "definition_zh": "执行“睡”的人。",
            "derived_from": "sleep",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "sleep__result",
            "headword_native": "⟟βˉɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "bemate",
            "ipa": "bemate",
            "pos": "noun",
            "gloss_zh": "睡之成物",
            "definition_zh": "由“睡”产生、留下或完成的结果。",
            "derived_from": "sleep",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "work-v",
            "headword_native": "⟟β˙ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bima",
            "ipa": "bima",
            "pos": "verb",
            "gloss_zh": "劳动",
            "definition_zh": "持续投入精力做事。",
            "derived_from": null,
            "tags": [
                "daily",
                "task",
                "root"
            ]
        },
        {
            "id": "work-v__rel",
            "headword_native": "⟟β˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "bimali",
            "ipa": "bimali",
            "pos": "adj",
            "gloss_zh": "可劳动的",
            "definition_zh": "适合、能够或倾向于“劳动”。",
            "derived_from": "work-v",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "work-v__act",
            "headword_native": "◇β˙ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-b",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bimama",
            "ipa": "bimama",
            "pos": "noun",
            "gloss_zh": "劳动之事",
            "definition_zh": "与“劳动”相关的动作、过程或事件。",
            "derived_from": "work-v",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "work-v__agent",
            "headword_native": "◠β˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "bimaren",
            "ipa": "bimaren",
            "pos": "noun",
            "gloss_zh": "劳动者",
            "definition_zh": "执行“劳动”的人。",
            "derived_from": "work-v",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "work-v__result",
            "headword_native": "⟟β˙ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "bimate",
            "ipa": "bimate",
            "pos": "noun",
            "gloss_zh": "劳动之成物",
            "definition_zh": "由“劳动”产生、留下或完成的结果。",
            "derived_from": "work-v",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "make",
            "headword_native": "⟟β°ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "boma",
            "ipa": "boma",
            "pos": "verb",
            "gloss_zh": "制作",
            "definition_zh": "把材料变成产物。",
            "derived_from": null,
            "tags": [
                "daily",
                "craft",
                "root"
            ]
        },
        {
            "id": "make__rel",
            "headword_native": "⟟β°ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "bomali",
            "ipa": "bomali",
            "pos": "adj",
            "gloss_zh": "可制作的",
            "definition_zh": "适合、能够或倾向于“制作”。",
            "derived_from": "make",
            "tags": [
                "daily",
                "craft",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "make__act",
            "headword_native": "◇β°ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-b",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bomama",
            "ipa": "bomama",
            "pos": "noun",
            "gloss_zh": "制作之事",
            "definition_zh": "与“制作”相关的动作、过程或事件。",
            "derived_from": "make",
            "tags": [
                "daily",
                "craft",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "make__agent",
            "headword_native": "◠β°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "bomaren",
            "ipa": "bomaren",
            "pos": "noun",
            "gloss_zh": "制作者",
            "definition_zh": "执行“制作”的人。",
            "derived_from": "make",
            "tags": [
                "daily",
                "craft",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "make__result",
            "headword_native": "⟟β°ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "bomate",
            "ipa": "bomate",
            "pos": "noun",
            "gloss_zh": "制作之成物",
            "definition_zh": "由“制作”产生、留下或完成的结果。",
            "derived_from": "make",
            "tags": [
                "daily",
                "craft",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "build",
            "headword_native": "⟟βˍɯ˘",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "buma",
            "ipa": "buma",
            "pos": "verb",
            "gloss_zh": "建造",
            "definition_zh": "构筑较大或较稳定的结构。",
            "derived_from": null,
            "tags": [
                "craft",
                "place",
                "root"
            ]
        },
        {
            "id": "build__rel",
            "headword_native": "⟟βˍɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "bumali",
            "ipa": "bumali",
            "pos": "adj",
            "gloss_zh": "可建造的",
            "definition_zh": "适合、能够或倾向于“建造”。",
            "derived_from": "build",
            "tags": [
                "craft",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "build__act",
            "headword_native": "◇βˍɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-b",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bumama",
            "ipa": "bumama",
            "pos": "noun",
            "gloss_zh": "建造之事",
            "definition_zh": "与“建造”相关的动作、过程或事件。",
            "derived_from": "build",
            "tags": [
                "craft",
                "place",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "build__agent",
            "headword_native": "◠βˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "bumaren",
            "ipa": "bumaren",
            "pos": "noun",
            "gloss_zh": "建造者",
            "definition_zh": "执行“建造”的人。",
            "derived_from": "build",
            "tags": [
                "craft",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "build__result",
            "headword_native": "⟟βˍɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-b",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "bumate",
            "ipa": "bumate",
            "pos": "noun",
            "gloss_zh": "建造之成物",
            "definition_zh": "由“建造”产生、留下或完成的结果。",
            "derived_from": "build",
            "tags": [
                "craft",
                "place",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "know",
            "headword_native": "◇đ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dama",
            "ipa": "dama",
            "pos": "verb",
            "gloss_zh": "知道",
            "definition_zh": "拥有对事物的认识。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "know__rel",
            "headword_native": "◇đ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "damali",
            "ipa": "damali",
            "pos": "adj",
            "gloss_zh": "可知道的",
            "definition_zh": "适合、能够或倾向于“知道”。",
            "derived_from": "know",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "know__act",
            "headword_native": "◇đ˘ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "damama",
            "ipa": "damama",
            "pos": "noun",
            "gloss_zh": "知道之事",
            "definition_zh": "与“知道”相关的动作、过程或事件。",
            "derived_from": "know",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "know__agent",
            "headword_native": "◠đ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "damaren",
            "ipa": "damaren",
            "pos": "noun",
            "gloss_zh": "知道者",
            "definition_zh": "执行“知道”的人。",
            "derived_from": "know",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "know__result",
            "headword_native": "⟟đ˘ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "damate",
            "ipa": "damate",
            "pos": "noun",
            "gloss_zh": "知道之成物",
            "definition_zh": "由“知道”产生、留下或完成的结果。",
            "derived_from": "know",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "de",
            "headword_native": "đˉ",
            "native_tokens": [
                "c-d",
                "v-e"
            ],
            "headword_romanized": "de",
            "ipa": "de",
            "pos": "postp",
            "gloss_zh": "向 / 给",
            "definition_zh": "方向或受益后置词。",
            "derived_from": null,
            "tags": [
                "function",
                "dative"
            ]
        },
        {
            "id": "learn",
            "headword_native": "◇đˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dema",
            "ipa": "dema",
            "pos": "verb",
            "gloss_zh": "学习",
            "definition_zh": "逐步获得知识或技能。",
            "derived_from": null,
            "tags": [
                "education",
                "daily",
                "root"
            ]
        },
        {
            "id": "learn__rel",
            "headword_native": "◇đˉɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "demali",
            "ipa": "demali",
            "pos": "adj",
            "gloss_zh": "可学习的",
            "definition_zh": "适合、能够或倾向于“学习”。",
            "derived_from": "learn",
            "tags": [
                "education",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "learn__act",
            "headword_native": "◇đˉɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "demama",
            "ipa": "demama",
            "pos": "noun",
            "gloss_zh": "学习之事",
            "definition_zh": "与“学习”相关的动作、过程或事件。",
            "derived_from": "learn",
            "tags": [
                "education",
                "daily",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "learn__agent",
            "headword_native": "◠đˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "demaren",
            "ipa": "demaren",
            "pos": "noun",
            "gloss_zh": "学习者",
            "definition_zh": "执行“学习”的人。",
            "derived_from": "learn",
            "tags": [
                "education",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "learn__result",
            "headword_native": "⟟đˉɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "demate",
            "ipa": "demate",
            "pos": "noun",
            "gloss_zh": "学习之成物",
            "definition_zh": "由“学习”产生、留下或完成的结果。",
            "derived_from": "learn",
            "tags": [
                "education",
                "daily",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "teach",
            "headword_native": "◡đ˙ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dima",
            "ipa": "dima",
            "pos": "verb",
            "gloss_zh": "教授",
            "definition_zh": "使他人学会。",
            "derived_from": null,
            "tags": [
                "education",
                "social",
                "root"
            ]
        },
        {
            "id": "teach__rel",
            "headword_native": "◡đ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "dimali",
            "ipa": "dimali",
            "pos": "adj",
            "gloss_zh": "可教授的",
            "definition_zh": "适合、能够或倾向于“教授”。",
            "derived_from": "teach",
            "tags": [
                "education",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "teach__act",
            "headword_native": "◇đ˙ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dimama",
            "ipa": "dimama",
            "pos": "noun",
            "gloss_zh": "教授之事",
            "definition_zh": "与“教授”相关的动作、过程或事件。",
            "derived_from": "teach",
            "tags": [
                "education",
                "social",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "teach__agent",
            "headword_native": "◠đ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "dimaren",
            "ipa": "dimaren",
            "pos": "noun",
            "gloss_zh": "教授者",
            "definition_zh": "执行“教授”的人。",
            "derived_from": "teach",
            "tags": [
                "education",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "teach__result",
            "headword_native": "⟟đ˙ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "dimate",
            "ipa": "dimate",
            "pos": "noun",
            "gloss_zh": "教授之成物",
            "definition_zh": "由“教授”产生、留下或完成的结果。",
            "derived_from": "teach",
            "tags": [
                "education",
                "social",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "speak",
            "headword_native": "◡đ°ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "doma",
            "ipa": "doma",
            "pos": "verb",
            "gloss_zh": "说话",
            "definition_zh": "用语言表达。",
            "derived_from": null,
            "tags": [
                "daily",
                "speech",
                "root"
            ]
        },
        {
            "id": "speak__rel",
            "headword_native": "◡đ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "domali",
            "ipa": "domali",
            "pos": "adj",
            "gloss_zh": "可说话的",
            "definition_zh": "适合、能够或倾向于“说话”。",
            "derived_from": "speak",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "speak__act",
            "headword_native": "◇đ°ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "domama",
            "ipa": "domama",
            "pos": "noun",
            "gloss_zh": "说话之事",
            "definition_zh": "与“说话”相关的动作、过程或事件。",
            "derived_from": "speak",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "speak__agent",
            "headword_native": "◠đ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "domaren",
            "ipa": "domaren",
            "pos": "noun",
            "gloss_zh": "说话者",
            "definition_zh": "执行“说话”的人。",
            "derived_from": "speak",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "speak__result",
            "headword_native": "⟟đ°ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "domate",
            "ipa": "domate",
            "pos": "noun",
            "gloss_zh": "说话之成物",
            "definition_zh": "由“说话”产生、留下或完成的结果。",
            "derived_from": "speak",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "say",
            "headword_native": "◡đˍɯ˘",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "duma",
            "ipa": "duma",
            "pos": "verb",
            "gloss_zh": "说出",
            "definition_zh": "明确地表达某个内容。",
            "derived_from": null,
            "tags": [
                "daily",
                "speech",
                "root"
            ]
        },
        {
            "id": "say__rel",
            "headword_native": "◡đˍɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-d",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "dumali",
            "ipa": "dumali",
            "pos": "adj",
            "gloss_zh": "可说出的",
            "definition_zh": "适合、能够或倾向于“说出”。",
            "derived_from": "say",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "say__act",
            "headword_native": "◇đˍɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-d",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dumama",
            "ipa": "dumama",
            "pos": "noun",
            "gloss_zh": "说出之事",
            "definition_zh": "与“说出”相关的动作、过程或事件。",
            "derived_from": "say",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "say__agent",
            "headword_native": "◠đˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "dumaren",
            "ipa": "dumaren",
            "pos": "noun",
            "gloss_zh": "说出者",
            "definition_zh": "执行“说出”的人。",
            "derived_from": "say",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "say__result",
            "headword_native": "⟟đˍɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "dumate",
            "ipa": "dumate",
            "pos": "noun",
            "gloss_zh": "说出之成物",
            "definition_zh": "由“说出”产生、留下或完成的结果。",
            "derived_from": "say",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "buy",
            "headword_native": "∞ƒ˘ɯ˘",
            "native_tokens": [
                "det-bond",
                "c-f",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fama",
            "ipa": "fama",
            "pos": "verb",
            "gloss_zh": "购买",
            "definition_zh": "通过交换获得某物。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "buy__rel",
            "headword_native": "∞ƒ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-bond",
                "c-f",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "famali",
            "ipa": "famali",
            "pos": "adj",
            "gloss_zh": "可购买的",
            "definition_zh": "适合、能够或倾向于“购买”。",
            "derived_from": "buy",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "buy__act",
            "headword_native": "◇ƒ˘ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "famama",
            "ipa": "famama",
            "pos": "noun",
            "gloss_zh": "购买之事",
            "definition_zh": "与“购买”相关的动作、过程或事件。",
            "derived_from": "buy",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "buy__agent",
            "headword_native": "◠ƒ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-f",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "famaren",
            "ipa": "famaren",
            "pos": "noun",
            "gloss_zh": "购买者",
            "definition_zh": "执行“购买”的人。",
            "derived_from": "buy",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "buy__result",
            "headword_native": "⟟ƒ˘ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "famate",
            "ipa": "famate",
            "pos": "noun",
            "gloss_zh": "购买之成物",
            "definition_zh": "由“购买”产生、留下或完成的结果。",
            "derived_from": "buy",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "choose",
            "headword_native": "◇ƒˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fema",
            "ipa": "fema",
            "pos": "verb",
            "gloss_zh": "选择",
            "definition_zh": "从多个可能中作出决定。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "choose__rel",
            "headword_native": "◇ƒˉɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "femali",
            "ipa": "femali",
            "pos": "adj",
            "gloss_zh": "可选择的",
            "definition_zh": "适合、能够或倾向于“选择”。",
            "derived_from": "choose",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "choose__act",
            "headword_native": "◇ƒˉɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "femama",
            "ipa": "femama",
            "pos": "noun",
            "gloss_zh": "选择之事",
            "definition_zh": "与“选择”相关的动作、过程或事件。",
            "derived_from": "choose",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "choose__agent",
            "headword_native": "◠ƒˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-f",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "femaren",
            "ipa": "femaren",
            "pos": "noun",
            "gloss_zh": "选择者",
            "definition_zh": "执行“选择”的人。",
            "derived_from": "choose",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "choose__result",
            "headword_native": "⟟ƒˉɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "femate",
            "ipa": "femate",
            "pos": "noun",
            "gloss_zh": "选择之成物",
            "definition_zh": "由“选择”产生、留下或完成的结果。",
            "derived_from": "choose",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "clean",
            "headword_native": "⟟ƒ˙ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fima",
            "ipa": "fima",
            "pos": "verb",
            "gloss_zh": "清洁",
            "definition_zh": "去除污物，使之整洁。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "clean__rel",
            "headword_native": "⟟ƒ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "fimali",
            "ipa": "fimali",
            "pos": "adj",
            "gloss_zh": "可清洁的",
            "definition_zh": "适合、能够或倾向于“清洁”。",
            "derived_from": "clean",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "clean__act",
            "headword_native": "◇ƒ˙ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fimama",
            "ipa": "fimama",
            "pos": "noun",
            "gloss_zh": "清洁之事",
            "definition_zh": "与“清洁”相关的动作、过程或事件。",
            "derived_from": "clean",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "clean__agent",
            "headword_native": "◠ƒ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-f",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "fimaren",
            "ipa": "fimaren",
            "pos": "noun",
            "gloss_zh": "清洁者",
            "definition_zh": "执行“清洁”的人。",
            "derived_from": "clean",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "clean__result",
            "headword_native": "⟟ƒ˙ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "fimate",
            "ipa": "fimate",
            "pos": "noun",
            "gloss_zh": "清洁之成物",
            "definition_zh": "由“清洁”产生、留下或完成的结果。",
            "derived_from": "clean",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "open",
            "headword_native": "⌁ƒ°ɯ˘",
            "native_tokens": [
                "det-motion",
                "c-f",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "foma",
            "ipa": "foma",
            "pos": "verb",
            "gloss_zh": "打开",
            "definition_zh": "使关闭的东西变为可通行或可见。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "open__rel",
            "headword_native": "⌁ƒ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-motion",
                "c-f",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "fomali",
            "ipa": "fomali",
            "pos": "adj",
            "gloss_zh": "可打开的",
            "definition_zh": "适合、能够或倾向于“打开”。",
            "derived_from": "open",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "open__act",
            "headword_native": "◇ƒ°ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fomama",
            "ipa": "fomama",
            "pos": "noun",
            "gloss_zh": "打开之事",
            "definition_zh": "与“打开”相关的动作、过程或事件。",
            "derived_from": "open",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "open__agent",
            "headword_native": "◠ƒ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-f",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "fomaren",
            "ipa": "fomaren",
            "pos": "noun",
            "gloss_zh": "打开者",
            "definition_zh": "执行“打开”的人。",
            "derived_from": "open",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "open__result",
            "headword_native": "⟟ƒ°ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "fomate",
            "ipa": "fomate",
            "pos": "noun",
            "gloss_zh": "打开之成物",
            "definition_zh": "由“打开”产生、留下或完成的结果。",
            "derived_from": "open",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "close",
            "headword_native": "⌁ƒˍɯ˘",
            "native_tokens": [
                "det-motion",
                "c-f",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fuma",
            "ipa": "fuma",
            "pos": "verb",
            "gloss_zh": "关闭",
            "definition_zh": "使开着的东西变为封合。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "close__rel",
            "headword_native": "⌁ƒˍɯ˘ɭ˙",
            "native_tokens": [
                "det-motion",
                "c-f",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "fumali",
            "ipa": "fumali",
            "pos": "adj",
            "gloss_zh": "可关闭的",
            "definition_zh": "适合、能够或倾向于“关闭”。",
            "derived_from": "close",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "close__act",
            "headword_native": "◇ƒˍɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fumama",
            "ipa": "fumama",
            "pos": "noun",
            "gloss_zh": "关闭之事",
            "definition_zh": "与“关闭”相关的动作、过程或事件。",
            "derived_from": "close",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "close__agent",
            "headword_native": "◠ƒˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-f",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "fumaren",
            "ipa": "fumaren",
            "pos": "noun",
            "gloss_zh": "关闭者",
            "definition_zh": "执行“关闭”的人。",
            "derived_from": "close",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "close__result",
            "headword_native": "⟟ƒˍɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-f",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "fumate",
            "ipa": "fumate",
            "pos": "noun",
            "gloss_zh": "关闭之成物",
            "definition_zh": "由“关闭”产生、留下或完成的结果。",
            "derived_from": "close",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ask",
            "headword_native": "◡ɠ˘ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-g",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gama",
            "ipa": "gama",
            "pos": "verb",
            "gloss_zh": "提问",
            "definition_zh": "把问题向他人说出。",
            "derived_from": null,
            "tags": [
                "daily",
                "speech",
                "root"
            ]
        },
        {
            "id": "ask__rel",
            "headword_native": "◡ɠ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-g",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "gamali",
            "ipa": "gamali",
            "pos": "adj",
            "gloss_zh": "可提问的",
            "definition_zh": "适合、能够或倾向于“提问”。",
            "derived_from": "ask",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "ask__act",
            "headword_native": "◇ɠ˘ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gamama",
            "ipa": "gamama",
            "pos": "noun",
            "gloss_zh": "提问之事",
            "definition_zh": "与“提问”相关的动作、过程或事件。",
            "derived_from": "ask",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "ask__agent",
            "headword_native": "◠ɠ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-g",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "gamaren",
            "ipa": "gamaren",
            "pos": "noun",
            "gloss_zh": "提问者",
            "definition_zh": "执行“提问”的人。",
            "derived_from": "ask",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "ask__result",
            "headword_native": "⟟ɠ˘ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "gamate",
            "ipa": "gamate",
            "pos": "noun",
            "gloss_zh": "提问之成物",
            "definition_zh": "由“提问”产生、留下或完成的结果。",
            "derived_from": "ask",
            "tags": [
                "daily",
                "speech",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ge",
            "headword_native": "ɠˉ",
            "native_tokens": [
                "c-g",
                "v-e"
            ],
            "headword_romanized": "ge",
            "ipa": "ge",
            "pos": "postp",
            "gloss_zh": "的",
            "definition_zh": "属格后置词。",
            "derived_from": null,
            "tags": [
                "function",
                "genitive"
            ]
        },
        {
            "id": "translate",
            "headword_native": "◡ɠˉɯ˘",
            "native_tokens": [
                "det-speech",
                "c-g",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gema",
            "ipa": "gema",
            "pos": "verb",
            "gloss_zh": "翻译",
            "definition_zh": "把内容转成另一种语言表达。",
            "derived_from": null,
            "tags": [
                "text",
                "speech",
                "root"
            ]
        },
        {
            "id": "translate__rel",
            "headword_native": "◡ɠˉɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-g",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "gemali",
            "ipa": "gemali",
            "pos": "adj",
            "gloss_zh": "可翻译的",
            "definition_zh": "适合、能够或倾向于“翻译”。",
            "derived_from": "translate",
            "tags": [
                "text",
                "speech",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "translate__act",
            "headword_native": "◇ɠˉɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gemama",
            "ipa": "gemama",
            "pos": "noun",
            "gloss_zh": "翻译之事",
            "definition_zh": "与“翻译”相关的动作、过程或事件。",
            "derived_from": "translate",
            "tags": [
                "text",
                "speech",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "translate__agent",
            "headword_native": "◠ɠˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-g",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "gemaren",
            "ipa": "gemaren",
            "pos": "noun",
            "gloss_zh": "翻译者",
            "definition_zh": "执行“翻译”的人。",
            "derived_from": "translate",
            "tags": [
                "text",
                "speech",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "translate__result",
            "headword_native": "⟟ɠˉɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "gemate",
            "ipa": "gemate",
            "pos": "noun",
            "gloss_zh": "翻译之成物",
            "definition_zh": "由“翻译”产生、留下或完成的结果。",
            "derived_from": "translate",
            "tags": [
                "text",
                "speech",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "write",
            "headword_native": "⟟ɠ˙ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gima",
            "ipa": "gima",
            "pos": "verb",
            "gloss_zh": "写",
            "definition_zh": "留下文字记录。",
            "derived_from": null,
            "tags": [
                "daily",
                "text",
                "root"
            ]
        },
        {
            "id": "write__rel",
            "headword_native": "⟟ɠ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "gimali",
            "ipa": "gimali",
            "pos": "adj",
            "gloss_zh": "可写的",
            "definition_zh": "适合、能够或倾向于“写”。",
            "derived_from": "write",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "write__act",
            "headword_native": "◇ɠ˙ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gimama",
            "ipa": "gimama",
            "pos": "noun",
            "gloss_zh": "写之事",
            "definition_zh": "与“写”相关的动作、过程或事件。",
            "derived_from": "write",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "write__agent",
            "headword_native": "◠ɠ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-g",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "gimaren",
            "ipa": "gimaren",
            "pos": "noun",
            "gloss_zh": "写者",
            "definition_zh": "执行“写”的人。",
            "derived_from": "write",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "write__result",
            "headword_native": "⟟ɠ˙ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "gimate",
            "ipa": "gimate",
            "pos": "noun",
            "gloss_zh": "写之成物",
            "definition_zh": "由“写”产生、留下或完成的结果。",
            "derived_from": "write",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "read",
            "headword_native": "⟟ɠ°ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "goma",
            "ipa": "goma",
            "pos": "verb",
            "gloss_zh": "读",
            "definition_zh": "解读文字内容。",
            "derived_from": null,
            "tags": [
                "daily",
                "text",
                "root"
            ]
        },
        {
            "id": "read__rel",
            "headword_native": "⟟ɠ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "gomali",
            "ipa": "gomali",
            "pos": "adj",
            "gloss_zh": "可读的",
            "definition_zh": "适合、能够或倾向于“读”。",
            "derived_from": "read",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "read__act",
            "headword_native": "◇ɠ°ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gomama",
            "ipa": "gomama",
            "pos": "noun",
            "gloss_zh": "读之事",
            "definition_zh": "与“读”相关的动作、过程或事件。",
            "derived_from": "read",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "read__agent",
            "headword_native": "◠ɠ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-g",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "gomaren",
            "ipa": "gomaren",
            "pos": "noun",
            "gloss_zh": "读者",
            "definition_zh": "执行“读”的人。",
            "derived_from": "read",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "read__result",
            "headword_native": "⟟ɠ°ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "gomate",
            "ipa": "gomate",
            "pos": "noun",
            "gloss_zh": "读之成物",
            "definition_zh": "由“读”产生、留下或完成的结果。",
            "derived_from": "read",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "eat",
            "headword_native": "≈ɠˍɯ˘",
            "native_tokens": [
                "det-water",
                "c-g",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "guma",
            "ipa": "guma",
            "pos": "verb",
            "gloss_zh": "吃",
            "definition_zh": "摄取食物。",
            "derived_from": null,
            "tags": [
                "daily",
                "body",
                "root"
            ]
        },
        {
            "id": "eat__rel",
            "headword_native": "≈ɠˍɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-g",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "gumali",
            "ipa": "gumali",
            "pos": "adj",
            "gloss_zh": "可吃的",
            "definition_zh": "适合、能够或倾向于“吃”。",
            "derived_from": "eat",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "eat__act",
            "headword_native": "◇ɠˍɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gumama",
            "ipa": "gumama",
            "pos": "noun",
            "gloss_zh": "吃之事",
            "definition_zh": "与“吃”相关的动作、过程或事件。",
            "derived_from": "eat",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "eat__agent",
            "headword_native": "◠ɠˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-g",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "gumaren",
            "ipa": "gumaren",
            "pos": "noun",
            "gloss_zh": "吃者",
            "definition_zh": "执行“吃”的人。",
            "derived_from": "eat",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "eat__result",
            "headword_native": "⟟ɠˍɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "gumate",
            "ipa": "gumate",
            "pos": "noun",
            "gloss_zh": "吃之成物",
            "definition_zh": "由“吃”产生、留下或完成的结果。",
            "derived_from": "eat",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ha",
            "headword_native": "ɦ˘",
            "native_tokens": [
                "c-h",
                "v-a"
            ],
            "headword_romanized": "ha",
            "ipa": "ha",
            "pos": "part",
            "gloss_zh": "话题",
            "definition_zh": "话题或焦点标记。",
            "derived_from": null,
            "tags": [
                "function",
                "topic"
            ]
        },
        {
            "id": "fire",
            "headword_native": "◔ɦ˘ɯ˘",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "hama",
            "ipa": "hama",
            "pos": "noun",
            "gloss_zh": "火",
            "definition_zh": "发热发光的燃烧。",
            "derived_from": null,
            "tags": [
                "nature",
                "light",
                "root"
            ]
        },
        {
            "id": "fire__rel",
            "headword_native": "◔ɦ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "hamali",
            "ipa": "hamali",
            "pos": "adj",
            "gloss_zh": "火相关的",
            "definition_zh": "与“火”相关，或具有其属性。",
            "derived_from": "fire",
            "tags": [
                "nature",
                "light",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "fire__agent",
            "headword_native": "◠ɦ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "hamaren",
            "ipa": "hamaren",
            "pos": "noun",
            "gloss_zh": "火之人",
            "definition_zh": "管理、使用、守护或代表“火”的人。",
            "derived_from": "fire",
            "tags": [
                "nature",
                "light",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "fire__field",
            "headword_native": "◔ɦ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "hamasa",
            "ipa": "hamasa",
            "pos": "noun",
            "gloss_zh": "火群域",
            "definition_zh": "围绕“火”形成的一组事物、场域或集合。",
            "derived_from": "fire",
            "tags": [
                "nature",
                "light",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "fire__place",
            "headword_native": "⌂ɦ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "hamato",
            "ipa": "hamato",
            "pos": "noun",
            "gloss_zh": "火之地",
            "definition_zh": "与“火”关联的地点、场所或容器。",
            "derived_from": "fire",
            "tags": [
                "nature",
                "light",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "far",
            "headword_native": "⌁ɦ˘ɯˉ",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "hame",
            "ipa": "hame",
            "pos": "adj",
            "gloss_zh": "远",
            "definition_zh": "距离较大。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "far__abs",
            "headword_native": "◇ɦ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "hamema",
            "ipa": "hamema",
            "pos": "noun",
            "gloss_zh": "远之性",
            "definition_zh": "“远”这一性质本身。",
            "derived_from": "far",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "far__become",
            "headword_native": "⌁ɦ˘ɯˉɾ˙",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "hameri",
            "ipa": "hameri",
            "pos": "verb",
            "gloss_zh": "变得远",
            "definition_zh": "进入或呈现“远”的状态。",
            "derived_from": "far",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "far__adv",
            "headword_native": "⌁ɦ˘ɯˉʂˉ",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "hamese",
            "ipa": "hamese",
            "pos": "adv",
            "gloss_zh": "远地",
            "definition_zh": "以“远”的方式。",
            "derived_from": "far",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "stone",
            "headword_native": "⌂ɦˉɯ˘",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "hema",
            "ipa": "hema",
            "pos": "noun",
            "gloss_zh": "石",
            "definition_zh": "坚硬的天然固体。",
            "derived_from": null,
            "tags": [
                "nature",
                "material",
                "root"
            ]
        },
        {
            "id": "stone__rel",
            "headword_native": "⌂ɦˉɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "hemali",
            "ipa": "hemali",
            "pos": "adj",
            "gloss_zh": "石相关的",
            "definition_zh": "与“石”相关，或具有其属性。",
            "derived_from": "stone",
            "tags": [
                "nature",
                "material",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "stone__agent",
            "headword_native": "◠ɦˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "hemaren",
            "ipa": "hemaren",
            "pos": "noun",
            "gloss_zh": "石之人",
            "definition_zh": "管理、使用、守护或代表“石”的人。",
            "derived_from": "stone",
            "tags": [
                "nature",
                "material",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "stone__field",
            "headword_native": "⌂ɦˉɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "hemasa",
            "ipa": "hemasa",
            "pos": "noun",
            "gloss_zh": "石群域",
            "definition_zh": "围绕“石”形成的一组事物、场域或集合。",
            "derived_from": "stone",
            "tags": [
                "nature",
                "material",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "stone__place",
            "headword_native": "⌂ɦˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "hemato",
            "ipa": "hemato",
            "pos": "noun",
            "gloss_zh": "石之地",
            "definition_zh": "与“石”关联的地点、场所或容器。",
            "derived_from": "stone",
            "tags": [
                "nature",
                "material",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "fast",
            "headword_native": "⌁ɦˉɯˉ",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "heme",
            "ipa": "heme",
            "pos": "adj",
            "gloss_zh": "快",
            "definition_zh": "速度高。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "fast__abs",
            "headword_native": "◇ɦˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "hemema",
            "ipa": "hemema",
            "pos": "noun",
            "gloss_zh": "快之性",
            "definition_zh": "“快”这一性质本身。",
            "derived_from": "fast",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "fast__become",
            "headword_native": "⌁ɦˉɯˉɾ˙",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "hemeri",
            "ipa": "hemeri",
            "pos": "verb",
            "gloss_zh": "变得快",
            "definition_zh": "进入或呈现“快”的状态。",
            "derived_from": "fast",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "fast__adv",
            "headword_native": "⌁ɦˉɯˉʂˉ",
            "native_tokens": [
                "det-motion",
                "c-h",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "hemese",
            "ipa": "hemese",
            "pos": "adv",
            "gloss_zh": "快地",
            "definition_zh": "以“快”的方式。",
            "derived_from": "fast",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "tree",
            "headword_native": "⌂ɦ˙ɯ˘",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "hima",
            "ipa": "hima",
            "pos": "noun",
            "gloss_zh": "树",
            "definition_zh": "高大而有木质茎干的植物。",
            "derived_from": null,
            "tags": [
                "nature",
                "daily",
                "root"
            ]
        },
        {
            "id": "tree__rel",
            "headword_native": "⌂ɦ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "himali",
            "ipa": "himali",
            "pos": "adj",
            "gloss_zh": "树相关的",
            "definition_zh": "与“树”相关，或具有其属性。",
            "derived_from": "tree",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "tree__agent",
            "headword_native": "◠ɦ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "himaren",
            "ipa": "himaren",
            "pos": "noun",
            "gloss_zh": "树之人",
            "definition_zh": "管理、使用、守护或代表“树”的人。",
            "derived_from": "tree",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "tree__field",
            "headword_native": "⌂ɦ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "himasa",
            "ipa": "himasa",
            "pos": "noun",
            "gloss_zh": "树群域",
            "definition_zh": "围绕“树”形成的一组事物、场域或集合。",
            "derived_from": "tree",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "tree__place",
            "headword_native": "⌂ɦ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "himato",
            "ipa": "himato",
            "pos": "noun",
            "gloss_zh": "树之地",
            "definition_zh": "与“树”关联的地点、场所或容器。",
            "derived_from": "tree",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "slow",
            "headword_native": "◔ɦ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "hime",
            "ipa": "hime",
            "pos": "adj",
            "gloss_zh": "慢",
            "definition_zh": "速度低。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "slow__abs",
            "headword_native": "◇ɦ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "himema",
            "ipa": "himema",
            "pos": "noun",
            "gloss_zh": "慢之性",
            "definition_zh": "“慢”这一性质本身。",
            "derived_from": "slow",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "slow__become",
            "headword_native": "◔ɦ˙ɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "himeri",
            "ipa": "himeri",
            "pos": "verb",
            "gloss_zh": "变得慢",
            "definition_zh": "进入或呈现“慢”的状态。",
            "derived_from": "slow",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "slow__adv",
            "headword_native": "◔ɦ˙ɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-h",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "himese",
            "ipa": "himese",
            "pos": "adv",
            "gloss_zh": "慢地",
            "definition_zh": "以“慢”的方式。",
            "derived_from": "slow",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "grain",
            "headword_native": "≈ɦ°ɯ˘",
            "native_tokens": [
                "det-water",
                "c-h",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "homa",
            "ipa": "homa",
            "pos": "noun",
            "gloss_zh": "谷物",
            "definition_zh": "常见主食原料。",
            "derived_from": null,
            "tags": [
                "food",
                "daily",
                "root"
            ]
        },
        {
            "id": "grain__rel",
            "headword_native": "≈ɦ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-h",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "homali",
            "ipa": "homali",
            "pos": "adj",
            "gloss_zh": "谷物相关的",
            "definition_zh": "与“谷物”相关，或具有其属性。",
            "derived_from": "grain",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "grain__agent",
            "headword_native": "◠ɦ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "homaren",
            "ipa": "homaren",
            "pos": "noun",
            "gloss_zh": "谷物之人",
            "definition_zh": "管理、使用、守护或代表“谷物”的人。",
            "derived_from": "grain",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "grain__field",
            "headword_native": "≈ɦ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-water",
                "c-h",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "homasa",
            "ipa": "homasa",
            "pos": "noun",
            "gloss_zh": "谷物群域",
            "definition_zh": "围绕“谷物”形成的一组事物、场域或集合。",
            "derived_from": "grain",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "grain__place",
            "headword_native": "⌂ɦ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "homato",
            "ipa": "homato",
            "pos": "noun",
            "gloss_zh": "谷物之地",
            "definition_zh": "与“谷物”关联的地点、场所或容器。",
            "derived_from": "grain",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "good",
            "headword_native": "◇ɦ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "home",
            "ipa": "home",
            "pos": "adj",
            "gloss_zh": "好",
            "definition_zh": "质量、效果或道德上正面。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "good__abs",
            "headword_native": "◇ɦ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "homema",
            "ipa": "homema",
            "pos": "noun",
            "gloss_zh": "好之性",
            "definition_zh": "“好”这一性质本身。",
            "derived_from": "good",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "good__become",
            "headword_native": "◇ɦ°ɯˉɾ˙",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "homeri",
            "ipa": "homeri",
            "pos": "verb",
            "gloss_zh": "变得好",
            "definition_zh": "进入或呈现“好”的状态。",
            "derived_from": "good",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "good__adv",
            "headword_native": "◇ɦ°ɯˉʂˉ",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "homese",
            "ipa": "homese",
            "pos": "adv",
            "gloss_zh": "好地",
            "definition_zh": "以“好”的方式。",
            "derived_from": "good",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "bread",
            "headword_native": "⟟ɦˍɯ˘",
            "native_tokens": [
                "det-craft",
                "c-h",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "huma",
            "ipa": "huma",
            "pos": "noun",
            "gloss_zh": "面饼",
            "definition_zh": "烘烤或加热形成的基本食物。",
            "derived_from": null,
            "tags": [
                "food",
                "daily",
                "root"
            ]
        },
        {
            "id": "bread__rel",
            "headword_native": "⟟ɦˍɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-h",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "humali",
            "ipa": "humali",
            "pos": "adj",
            "gloss_zh": "面饼相关的",
            "definition_zh": "与“面饼”相关，或具有其属性。",
            "derived_from": "bread",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "bread__agent",
            "headword_native": "◠ɦˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "humaren",
            "ipa": "humaren",
            "pos": "noun",
            "gloss_zh": "面饼之人",
            "definition_zh": "管理、使用、守护或代表“面饼”的人。",
            "derived_from": "bread",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "bread__field",
            "headword_native": "⟟ɦˍɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-h",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "humasa",
            "ipa": "humasa",
            "pos": "noun",
            "gloss_zh": "面饼群域",
            "definition_zh": "围绕“面饼”形成的一组事物、场域或集合。",
            "derived_from": "bread",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "bread__place",
            "headword_native": "⌂ɦˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-h",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "humato",
            "ipa": "humato",
            "pos": "noun",
            "gloss_zh": "面饼之地",
            "definition_zh": "与“面饼”关联的地点、场所或容器。",
            "derived_from": "bread",
            "tags": [
                "food",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "bad",
            "headword_native": "◇ɦˍɯˉ",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "hume",
            "ipa": "hume",
            "pos": "adj",
            "gloss_zh": "坏",
            "definition_zh": "质量、效果或道德上负面。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "bad__abs",
            "headword_native": "◇ɦˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "humema",
            "ipa": "humema",
            "pos": "noun",
            "gloss_zh": "坏之性",
            "definition_zh": "“坏”这一性质本身。",
            "derived_from": "bad",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "bad__become",
            "headword_native": "◇ɦˍɯˉɾ˙",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "humeri",
            "ipa": "humeri",
            "pos": "verb",
            "gloss_zh": "变得坏",
            "definition_zh": "进入或呈现“坏”的状态。",
            "derived_from": "bad",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "bad__adv",
            "headword_native": "◇ɦˍɯˉʂˉ",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "humese",
            "ipa": "humese",
            "pos": "adv",
            "gloss_zh": "坏地",
            "definition_zh": "以“坏”的方式。",
            "derived_from": "bad",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "river",
            "headword_native": "≈ʞ˘ɯ˘",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kama",
            "ipa": "kama",
            "pos": "noun",
            "gloss_zh": "河",
            "definition_zh": "持续流动的天然水道。",
            "derived_from": null,
            "tags": [
                "nature",
                "daily",
                "root"
            ]
        },
        {
            "id": "river__rel",
            "headword_native": "≈ʞ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kamali",
            "ipa": "kamali",
            "pos": "adj",
            "gloss_zh": "河相关的",
            "definition_zh": "与“河”相关，或具有其属性。",
            "derived_from": "river",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "river__agent",
            "headword_native": "◠ʞ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kamaren",
            "ipa": "kamaren",
            "pos": "noun",
            "gloss_zh": "河之人",
            "definition_zh": "管理、使用、守护或代表“河”的人。",
            "derived_from": "river",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "river__field",
            "headword_native": "≈ʞ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "kamasa",
            "ipa": "kamasa",
            "pos": "noun",
            "gloss_zh": "河群域",
            "definition_zh": "围绕“河”形成的一组事物、场域或集合。",
            "derived_from": "river",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "river__place",
            "headword_native": "⌂ʞ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "kamato",
            "ipa": "kamato",
            "pos": "noun",
            "gloss_zh": "河之地",
            "definition_zh": "与“河”关联的地点、场所或容器。",
            "derived_from": "river",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "return",
            "headword_native": "⌁ʞ˘ɯˉ",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kame",
            "ipa": "kame",
            "pos": "verb",
            "gloss_zh": "返回",
            "definition_zh": "回到原先的位置。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "return__rel",
            "headword_native": "⌁ʞ˘ɯˉɭ˙",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kameli",
            "ipa": "kameli",
            "pos": "adj",
            "gloss_zh": "可返回的",
            "definition_zh": "适合、能够或倾向于“返回”。",
            "derived_from": "return",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "return__act",
            "headword_native": "◇ʞ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kamema",
            "ipa": "kamema",
            "pos": "noun",
            "gloss_zh": "返回之事",
            "definition_zh": "与“返回”相关的动作、过程或事件。",
            "derived_from": "return",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "return__agent",
            "headword_native": "◠ʞ˘ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kameren",
            "ipa": "kameren",
            "pos": "noun",
            "gloss_zh": "返回者",
            "definition_zh": "执行“返回”的人。",
            "derived_from": "return",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "return__result",
            "headword_native": "⟟ʞ˘ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "kamete",
            "ipa": "kamete",
            "pos": "noun",
            "gloss_zh": "返回之成物",
            "definition_zh": "由“返回”产生、留下或完成的结果。",
            "derived_from": "return",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ke",
            "headword_native": "ʞˉ",
            "native_tokens": [
                "c-k",
                "v-e"
            ],
            "headword_romanized": "ke",
            "ipa": "ke",
            "pos": "part",
            "gloss_zh": "吗",
            "definition_zh": "一般疑问句尾词。",
            "derived_from": null,
            "tags": [
                "function",
                "question"
            ]
        },
        {
            "id": "mountain",
            "headword_native": "⌂ʞˉɯ˘",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kema",
            "ipa": "kema",
            "pos": "noun",
            "gloss_zh": "山",
            "definition_zh": "高起的地形。",
            "derived_from": null,
            "tags": [
                "nature",
                "place",
                "root"
            ]
        },
        {
            "id": "mountain__rel",
            "headword_native": "⌂ʞˉɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kemali",
            "ipa": "kemali",
            "pos": "adj",
            "gloss_zh": "山相关的",
            "definition_zh": "与“山”相关，或具有其属性。",
            "derived_from": "mountain",
            "tags": [
                "nature",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "mountain__agent",
            "headword_native": "◠ʞˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kemaren",
            "ipa": "kemaren",
            "pos": "noun",
            "gloss_zh": "山之人",
            "definition_zh": "管理、使用、守护或代表“山”的人。",
            "derived_from": "mountain",
            "tags": [
                "nature",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "mountain__field",
            "headword_native": "⌂ʞˉɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "kemasa",
            "ipa": "kemasa",
            "pos": "noun",
            "gloss_zh": "山群域",
            "definition_zh": "围绕“山”形成的一组事物、场域或集合。",
            "derived_from": "mountain",
            "tags": [
                "nature",
                "place",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "mountain__place",
            "headword_native": "⌂ʞˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "kemato",
            "ipa": "kemato",
            "pos": "noun",
            "gloss_zh": "山之地",
            "definition_zh": "与“山”关联的地点、场所或容器。",
            "derived_from": "mountain",
            "tags": [
                "nature",
                "place",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "begin",
            "headword_native": "◔ʞˉɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "keme",
            "ipa": "keme",
            "pos": "verb",
            "gloss_zh": "开始",
            "definition_zh": "让一件事进入起始阶段。",
            "derived_from": null,
            "tags": [
                "daily",
                "time",
                "root"
            ]
        },
        {
            "id": "begin__rel",
            "headword_native": "◔ʞˉɯˉɭ˙",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kemeli",
            "ipa": "kemeli",
            "pos": "adj",
            "gloss_zh": "可开始的",
            "definition_zh": "适合、能够或倾向于“开始”。",
            "derived_from": "begin",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "begin__act",
            "headword_native": "◇ʞˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kemema",
            "ipa": "kemema",
            "pos": "noun",
            "gloss_zh": "开始之事",
            "definition_zh": "与“开始”相关的动作、过程或事件。",
            "derived_from": "begin",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "begin__agent",
            "headword_native": "◠ʞˉɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kemeren",
            "ipa": "kemeren",
            "pos": "noun",
            "gloss_zh": "开始者",
            "definition_zh": "执行“开始”的人。",
            "derived_from": "begin",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "begin__result",
            "headword_native": "⟟ʞˉɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "kemete",
            "ipa": "kemete",
            "pos": "noun",
            "gloss_zh": "开始之成物",
            "definition_zh": "由“开始”产生、留下或完成的结果。",
            "derived_from": "begin",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "sky",
            "headword_native": "◔ʞ˙ɯ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kima",
            "ipa": "kima",
            "pos": "noun",
            "gloss_zh": "天",
            "definition_zh": "上方广阔的空间。",
            "derived_from": null,
            "tags": [
                "nature",
                "cosmos",
                "root"
            ]
        },
        {
            "id": "sky__rel",
            "headword_native": "◔ʞ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kimali",
            "ipa": "kimali",
            "pos": "adj",
            "gloss_zh": "天相关的",
            "definition_zh": "与“天”相关，或具有其属性。",
            "derived_from": "sky",
            "tags": [
                "nature",
                "cosmos",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "sky__agent",
            "headword_native": "◠ʞ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kimaren",
            "ipa": "kimaren",
            "pos": "noun",
            "gloss_zh": "天之人",
            "definition_zh": "管理、使用、守护或代表“天”的人。",
            "derived_from": "sky",
            "tags": [
                "nature",
                "cosmos",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "sky__field",
            "headword_native": "◔ʞ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "kimasa",
            "ipa": "kimasa",
            "pos": "noun",
            "gloss_zh": "天群域",
            "definition_zh": "围绕“天”形成的一组事物、场域或集合。",
            "derived_from": "sky",
            "tags": [
                "nature",
                "cosmos",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "sky__place",
            "headword_native": "⌂ʞ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "kimato",
            "ipa": "kimato",
            "pos": "noun",
            "gloss_zh": "天之地",
            "definition_zh": "与“天”关联的地点、场所或容器。",
            "derived_from": "sky",
            "tags": [
                "nature",
                "cosmos",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "finish",
            "headword_native": "◔ʞ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kime",
            "ipa": "kime",
            "pos": "verb",
            "gloss_zh": "结束",
            "definition_zh": "让一件事到达完成状态。",
            "derived_from": null,
            "tags": [
                "daily",
                "time",
                "root"
            ]
        },
        {
            "id": "finish__rel",
            "headword_native": "◔ʞ˙ɯˉɭ˙",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kimeli",
            "ipa": "kimeli",
            "pos": "adj",
            "gloss_zh": "可结束的",
            "definition_zh": "适合、能够或倾向于“结束”。",
            "derived_from": "finish",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "finish__act",
            "headword_native": "◇ʞ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kimema",
            "ipa": "kimema",
            "pos": "noun",
            "gloss_zh": "结束之事",
            "definition_zh": "与“结束”相关的动作、过程或事件。",
            "derived_from": "finish",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "finish__agent",
            "headword_native": "◠ʞ˙ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kimeren",
            "ipa": "kimeren",
            "pos": "noun",
            "gloss_zh": "结束者",
            "definition_zh": "执行“结束”的人。",
            "derived_from": "finish",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "finish__result",
            "headword_native": "⟟ʞ˙ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "kimete",
            "ipa": "kimete",
            "pos": "noun",
            "gloss_zh": "结束之成物",
            "definition_zh": "由“结束”产生、留下或完成的结果。",
            "derived_from": "finish",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ko",
            "headword_native": "ʞ°",
            "native_tokens": [
                "c-k",
                "v-o"
            ],
            "headword_romanized": "ko",
            "ipa": "ko",
            "pos": "postp",
            "gloss_zh": "从",
            "definition_zh": "来源后置词。",
            "derived_from": null,
            "tags": [
                "function",
                "ablative"
            ]
        },
        {
            "id": "sun",
            "headword_native": "◔ʞ°ɯ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "koma",
            "ipa": "koma",
            "pos": "noun",
            "gloss_zh": "太阳",
            "definition_zh": "白昼的主要光源。",
            "derived_from": null,
            "tags": [
                "cosmos",
                "light",
                "root"
            ]
        },
        {
            "id": "sun__rel",
            "headword_native": "◔ʞ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "komali",
            "ipa": "komali",
            "pos": "adj",
            "gloss_zh": "太阳相关的",
            "definition_zh": "与“太阳”相关，或具有其属性。",
            "derived_from": "sun",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "sun__agent",
            "headword_native": "◠ʞ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "komaren",
            "ipa": "komaren",
            "pos": "noun",
            "gloss_zh": "太阳之人",
            "definition_zh": "管理、使用、守护或代表“太阳”的人。",
            "derived_from": "sun",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "sun__field",
            "headword_native": "◔ʞ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "komasa",
            "ipa": "komasa",
            "pos": "noun",
            "gloss_zh": "太阳群域",
            "definition_zh": "围绕“太阳”形成的一组事物、场域或集合。",
            "derived_from": "sun",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "sun__place",
            "headword_native": "⌂ʞ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "komato",
            "ipa": "komato",
            "pos": "noun",
            "gloss_zh": "太阳之地",
            "definition_zh": "与“太阳”关联的地点、场所或容器。",
            "derived_from": "sun",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "live",
            "headword_native": "⌂ʞ°ɯˉ",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kome",
            "ipa": "kome",
            "pos": "verb",
            "gloss_zh": "居住",
            "definition_zh": "在某地长期停留生活。",
            "derived_from": null,
            "tags": [
                "daily",
                "place",
                "root"
            ]
        },
        {
            "id": "live__rel",
            "headword_native": "⌂ʞ°ɯˉɭ˙",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "komeli",
            "ipa": "komeli",
            "pos": "adj",
            "gloss_zh": "可居住的",
            "definition_zh": "适合、能够或倾向于“居住”。",
            "derived_from": "live",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "live__act",
            "headword_native": "◇ʞ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "komema",
            "ipa": "komema",
            "pos": "noun",
            "gloss_zh": "居住之事",
            "definition_zh": "与“居住”相关的动作、过程或事件。",
            "derived_from": "live",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "live__agent",
            "headword_native": "◠ʞ°ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "komeren",
            "ipa": "komeren",
            "pos": "noun",
            "gloss_zh": "居住者",
            "definition_zh": "执行“居住”的人。",
            "derived_from": "live",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "live__result",
            "headword_native": "⟟ʞ°ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "komete",
            "ipa": "komete",
            "pos": "noun",
            "gloss_zh": "居住之成物",
            "definition_zh": "由“居住”产生、留下或完成的结果。",
            "derived_from": "live",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "far__neg",
            "headword_native": "⌁ʞˍɦ˘ɯˉ",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-u",
                "c-h",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuhame",
            "ipa": "kuhame",
            "pos": "adj",
            "gloss_zh": "不远",
            "definition_zh": "缺少、反转或偏离“远”。",
            "derived_from": "far",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "fast__neg",
            "headword_native": "⌁ʞˍɦˉɯˉ",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-u",
                "c-h",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuheme",
            "ipa": "kuheme",
            "pos": "adj",
            "gloss_zh": "不快",
            "definition_zh": "缺少、反转或偏离“快”。",
            "derived_from": "fast",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "slow__neg",
            "headword_native": "◔ʞˍɦ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-h",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuhime",
            "ipa": "kuhime",
            "pos": "adj",
            "gloss_zh": "不慢",
            "definition_zh": "缺少、反转或偏离“慢”。",
            "derived_from": "slow",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "good__neg",
            "headword_native": "◇ʞˍɦ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-u",
                "c-h",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuhome",
            "ipa": "kuhome",
            "pos": "adj",
            "gloss_zh": "不好",
            "definition_zh": "缺少、反转或偏离“好”。",
            "derived_from": "good",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "bad__neg",
            "headword_native": "◇ʞˍɦˍɯˉ",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-u",
                "c-h",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuhume",
            "ipa": "kuhume",
            "pos": "adj",
            "gloss_zh": "不坏",
            "definition_zh": "缺少、反转或偏离“坏”。",
            "derived_from": "bad",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "big__neg",
            "headword_native": "⟐ʞˍʞˍɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-k",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kukume",
            "ipa": "kukume",
            "pos": "adj",
            "gloss_zh": "不大",
            "definition_zh": "缺少、反转或偏离“大”。",
            "derived_from": "big",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "quiet__neg",
            "headword_native": "◡ʞˍɭ˘ɯˉ",
            "native_tokens": [
                "det-speech",
                "c-k",
                "v-u",
                "c-l",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kulame",
            "ipa": "kulame",
            "pos": "adj",
            "gloss_zh": "不安静",
            "definition_zh": "缺少、反转或偏离“安静”。",
            "derived_from": "quiet",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "loud__neg",
            "headword_native": "◡ʞˍɭˉɯˉ",
            "native_tokens": [
                "det-speech",
                "c-k",
                "v-u",
                "c-l",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuleme",
            "ipa": "kuleme",
            "pos": "adj",
            "gloss_zh": "不响亮",
            "definition_zh": "缺少、反转或偏离“响亮”。",
            "derived_from": "loud",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "clear__neg",
            "headword_native": "◇ʞˍɭ˙ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-u",
                "c-l",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kulime",
            "ipa": "kulime",
            "pos": "adj",
            "gloss_zh": "不清晰",
            "definition_zh": "缺少、反转或偏离“清晰”。",
            "derived_from": "clear",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "deep__neg",
            "headword_native": "≈ʞˍɭ°ɯˉ",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-u",
                "c-l",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kulome",
            "ipa": "kulome",
            "pos": "adj",
            "gloss_zh": "不深",
            "definition_zh": "缺少、反转或偏离“深”。",
            "derived_from": "deep",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "full__neg",
            "headword_native": "⌂ʞˍɭˍɯˉ",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-u",
                "c-l",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kulume",
            "ipa": "kulume",
            "pos": "adj",
            "gloss_zh": "不满",
            "definition_zh": "缺少、反转或偏离“满”。",
            "derived_from": "full",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "moon",
            "headword_native": "◔ʞˍɯ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kuma",
            "ipa": "kuma",
            "pos": "noun",
            "gloss_zh": "月",
            "definition_zh": "夜空中明亮的天体。",
            "derived_from": null,
            "tags": [
                "cosmos",
                "time",
                "root"
            ]
        },
        {
            "id": "moon__rel",
            "headword_native": "◔ʞˍɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "kumali",
            "ipa": "kumali",
            "pos": "adj",
            "gloss_zh": "月相关的",
            "definition_zh": "与“月”相关，或具有其属性。",
            "derived_from": "moon",
            "tags": [
                "cosmos",
                "time",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "moon__agent",
            "headword_native": "◠ʞˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "kumaren",
            "ipa": "kumaren",
            "pos": "noun",
            "gloss_zh": "月之人",
            "definition_zh": "管理、使用、守护或代表“月”的人。",
            "derived_from": "moon",
            "tags": [
                "cosmos",
                "time",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "moon__field",
            "headword_native": "◔ʞˍɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "kumasa",
            "ipa": "kumasa",
            "pos": "noun",
            "gloss_zh": "月群域",
            "definition_zh": "围绕“月”形成的一组事物、场域或集合。",
            "derived_from": "moon",
            "tags": [
                "cosmos",
                "time",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "moon__place",
            "headword_native": "⌂ʞˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "kumato",
            "ipa": "kumato",
            "pos": "noun",
            "gloss_zh": "月之地",
            "definition_zh": "与“月”关联的地点、场所或容器。",
            "derived_from": "moon",
            "tags": [
                "cosmos",
                "time",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "big",
            "headword_native": "⟐ʞˍɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kume",
            "ipa": "kume",
            "pos": "adj",
            "gloss_zh": "大",
            "definition_zh": "尺寸、范围或重要性较大。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "big__abs",
            "headword_native": "◇ʞˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "kumema",
            "ipa": "kumema",
            "pos": "noun",
            "gloss_zh": "大之性",
            "definition_zh": "“大”这一性质本身。",
            "derived_from": "big",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "big__become",
            "headword_native": "⟐ʞˍɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "kumeri",
            "ipa": "kumeri",
            "pos": "verb",
            "gloss_zh": "变得大",
            "definition_zh": "进入或呈现“大”的状态。",
            "derived_from": "big",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "big__adv",
            "headword_native": "⟐ʞˍɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "kumese",
            "ipa": "kumese",
            "pos": "adv",
            "gloss_zh": "大地",
            "definition_zh": "以“大”的方式。",
            "derived_from": "big",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "empty__neg",
            "headword_native": "⌂ʞˍɾ˘ɯˉ",
            "native_tokens": [
                "det-place",
                "c-k",
                "v-u",
                "c-r",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kurame",
            "ipa": "kurame",
            "pos": "adj",
            "gloss_zh": "不空",
            "definition_zh": "缺少、反转或偏离“空”。",
            "derived_from": "empty",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "many__neg",
            "headword_native": "⟐ʞˍɾˉɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-r",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kureme",
            "ipa": "kureme",
            "pos": "adj",
            "gloss_zh": "不多",
            "definition_zh": "缺少、反转或偏离“多”。",
            "derived_from": "many",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "all__neg",
            "headword_native": "⟐ʞˍɾ˙ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-r",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kurime",
            "ipa": "kurime",
            "pos": "adj",
            "gloss_zh": "不全部",
            "definition_zh": "缺少、反转或偏离“全部”。",
            "derived_from": "all",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "true__neg",
            "headword_native": "◇ʞˍɾ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-k",
                "v-u",
                "c-r",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kurome",
            "ipa": "kurome",
            "pos": "adj",
            "gloss_zh": "不真实",
            "definition_zh": "缺少、反转或偏离“真实”。",
            "derived_from": "true",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "gentle__neg",
            "headword_native": "∞ʞˍɾˍɯˉ",
            "native_tokens": [
                "det-bond",
                "c-k",
                "v-u",
                "c-r",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kurume",
            "ipa": "kurume",
            "pos": "adj",
            "gloss_zh": "不温和",
            "definition_zh": "缺少、反转或偏离“温和”。",
            "derived_from": "gentle",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "small__neg",
            "headword_native": "⟐ʞˍʂ˘ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-s",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kusame",
            "ipa": "kusame",
            "pos": "adj",
            "gloss_zh": "不小",
            "definition_zh": "缺少、反转或偏离“小”。",
            "derived_from": "small",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "long__neg",
            "headword_native": "⟐ʞˍʂˉɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-s",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuseme",
            "ipa": "kuseme",
            "pos": "adj",
            "gloss_zh": "不长",
            "definition_zh": "缺少、反转或偏离“长”。",
            "derived_from": "long",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "warm__neg",
            "headword_native": "◔ʞˍʃ˘ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-sh",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kushame",
            "ipa": "kushame",
            "pos": "adj",
            "gloss_zh": "不温暖",
            "definition_zh": "缺少、反转或偏离“温暖”。",
            "derived_from": "warm",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "cold__neg",
            "headword_native": "≈ʞˍʃˉɯˉ",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-u",
                "c-sh",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kusheme",
            "ipa": "kusheme",
            "pos": "adj",
            "gloss_zh": "不寒冷",
            "definition_zh": "缺少、反转或偏离“寒冷”。",
            "derived_from": "cold",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "new__neg",
            "headword_native": "◔ʞˍʃ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-sh",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kushime",
            "ipa": "kushime",
            "pos": "adj",
            "gloss_zh": "不新的",
            "definition_zh": "缺少、反转或偏离“新的”。",
            "derived_from": "new",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "old__neg",
            "headword_native": "◔ʞˍʃ°ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-sh",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kushome",
            "ipa": "kushome",
            "pos": "adj",
            "gloss_zh": "不旧的",
            "definition_zh": "缺少、反转或偏离“旧的”。",
            "derived_from": "old",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "near__neg",
            "headword_native": "⌁ʞˍʃˍɯˉ",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-u",
                "c-sh",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kushume",
            "ipa": "kushume",
            "pos": "adj",
            "gloss_zh": "不近",
            "definition_zh": "缺少、反转或偏离“近”。",
            "derived_from": "near",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "short__neg",
            "headword_native": "⟐ʞˍʂ˙ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-s",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kusime",
            "ipa": "kusime",
            "pos": "adj",
            "gloss_zh": "不短",
            "definition_zh": "缺少、反转或偏离“短”。",
            "derived_from": "short",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "bright__neg",
            "headword_native": "◔ʞˍʂ°ɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-s",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kusome",
            "ipa": "kusome",
            "pos": "adj",
            "gloss_zh": "不明亮",
            "definition_zh": "缺少、反转或偏离“明亮”。",
            "derived_from": "bright",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "dark__neg",
            "headword_native": "◔ʞˍʂˍɯˉ",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-s",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kusume",
            "ipa": "kusume",
            "pos": "adj",
            "gloss_zh": "不昏暗",
            "definition_zh": "缺少、反转或偏离“昏暗”。",
            "derived_from": "dark",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "strong__neg",
            "headword_native": "◠ʞˍʋ˘ɯˉ",
            "native_tokens": [
                "det-human",
                "c-k",
                "v-u",
                "c-v",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuvame",
            "ipa": "kuvame",
            "pos": "adj",
            "gloss_zh": "不强",
            "definition_zh": "缺少、反转或偏离“强”。",
            "derived_from": "strong",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "negative"
            ]
        },
        {
            "id": "cup",
            "headword_native": "⌂ɭ˘ɯ˘",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lama",
            "ipa": "lama",
            "pos": "noun",
            "gloss_zh": "杯",
            "definition_zh": "盛放饮料的小容器。",
            "derived_from": null,
            "tags": [
                "daily",
                "object",
                "root"
            ]
        },
        {
            "id": "cup__rel",
            "headword_native": "⌂ɭ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "lamali",
            "ipa": "lamali",
            "pos": "adj",
            "gloss_zh": "杯相关的",
            "definition_zh": "与“杯”相关，或具有其属性。",
            "derived_from": "cup",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "cup__agent",
            "headword_native": "◠ɭ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-l",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "lamaren",
            "ipa": "lamaren",
            "pos": "noun",
            "gloss_zh": "杯之人",
            "definition_zh": "管理、使用、守护或代表“杯”的人。",
            "derived_from": "cup",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "cup__field",
            "headword_native": "⌂ɭ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "lamasa",
            "ipa": "lamasa",
            "pos": "noun",
            "gloss_zh": "杯群域",
            "definition_zh": "围绕“杯”形成的一组事物、场域或集合。",
            "derived_from": "cup",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "cup__place",
            "headword_native": "⌂ɭ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "lamato",
            "ipa": "lamato",
            "pos": "noun",
            "gloss_zh": "杯之地",
            "definition_zh": "与“杯”关联的地点、场所或容器。",
            "derived_from": "cup",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "quiet",
            "headword_native": "◡ɭ˘ɯˉ",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "lame",
            "ipa": "lame",
            "pos": "adj",
            "gloss_zh": "安静",
            "definition_zh": "声音少、不喧闹。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "quiet__abs",
            "headword_native": "◇ɭ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lamema",
            "ipa": "lamema",
            "pos": "noun",
            "gloss_zh": "安静之性",
            "definition_zh": "“安静”这一性质本身。",
            "derived_from": "quiet",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "quiet__become",
            "headword_native": "◡ɭ˘ɯˉɾ˙",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "lameri",
            "ipa": "lameri",
            "pos": "verb",
            "gloss_zh": "变得安静",
            "definition_zh": "进入或呈现“安静”的状态。",
            "derived_from": "quiet",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "quiet__adv",
            "headword_native": "◡ɭ˘ɯˉʂˉ",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "lamese",
            "ipa": "lamese",
            "pos": "adv",
            "gloss_zh": "安静地",
            "definition_zh": "以“安静”的方式。",
            "derived_from": "quiet",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "book",
            "headword_native": "⟟ɭˉɯ˘",
            "native_tokens": [
                "det-craft",
                "c-l",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lema",
            "ipa": "lema",
            "pos": "noun",
            "gloss_zh": "书",
            "definition_zh": "记录语言内容的册页。",
            "derived_from": null,
            "tags": [
                "daily",
                "text",
                "root"
            ]
        },
        {
            "id": "book__rel",
            "headword_native": "⟟ɭˉɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-l",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "lemali",
            "ipa": "lemali",
            "pos": "adj",
            "gloss_zh": "书相关的",
            "definition_zh": "与“书”相关，或具有其属性。",
            "derived_from": "book",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "book__agent",
            "headword_native": "◠ɭˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-l",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "lemaren",
            "ipa": "lemaren",
            "pos": "noun",
            "gloss_zh": "书之人",
            "definition_zh": "管理、使用、守护或代表“书”的人。",
            "derived_from": "book",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "book__field",
            "headword_native": "⟟ɭˉɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-l",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "lemasa",
            "ipa": "lemasa",
            "pos": "noun",
            "gloss_zh": "书群域",
            "definition_zh": "围绕“书”形成的一组事物、场域或集合。",
            "derived_from": "book",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "book__place",
            "headword_native": "⌂ɭˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "lemato",
            "ipa": "lemato",
            "pos": "noun",
            "gloss_zh": "书之地",
            "definition_zh": "与“书”关联的地点、场所或容器。",
            "derived_from": "book",
            "tags": [
                "daily",
                "text",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "loud",
            "headword_native": "◡ɭˉɯˉ",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "leme",
            "ipa": "leme",
            "pos": "adj",
            "gloss_zh": "响亮",
            "definition_zh": "声音明显、强。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "loud__abs",
            "headword_native": "◇ɭˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lemema",
            "ipa": "lemema",
            "pos": "noun",
            "gloss_zh": "响亮之性",
            "definition_zh": "“响亮”这一性质本身。",
            "derived_from": "loud",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "loud__become",
            "headword_native": "◡ɭˉɯˉɾ˙",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "lemeri",
            "ipa": "lemeri",
            "pos": "verb",
            "gloss_zh": "变得响亮",
            "definition_zh": "进入或呈现“响亮”的状态。",
            "derived_from": "loud",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "loud__adv",
            "headword_native": "◡ɭˉɯˉʂˉ",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "lemese",
            "ipa": "lemese",
            "pos": "adv",
            "gloss_zh": "响亮地",
            "definition_zh": "以“响亮”的方式。",
            "derived_from": "loud",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "letter",
            "headword_native": "◡ɭ˙ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lima",
            "ipa": "lima",
            "pos": "noun",
            "gloss_zh": "书信",
            "definition_zh": "写给他人的文字。",
            "derived_from": null,
            "tags": [
                "text",
                "social",
                "root"
            ]
        },
        {
            "id": "letter__rel",
            "headword_native": "◡ɭ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "limali",
            "ipa": "limali",
            "pos": "adj",
            "gloss_zh": "书信相关的",
            "definition_zh": "与“书信”相关，或具有其属性。",
            "derived_from": "letter",
            "tags": [
                "text",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "letter__agent",
            "headword_native": "◠ɭ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-l",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "limaren",
            "ipa": "limaren",
            "pos": "noun",
            "gloss_zh": "书信之人",
            "definition_zh": "管理、使用、守护或代表“书信”的人。",
            "derived_from": "letter",
            "tags": [
                "text",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "letter__field",
            "headword_native": "◡ɭ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "limasa",
            "ipa": "limasa",
            "pos": "noun",
            "gloss_zh": "书信群域",
            "definition_zh": "围绕“书信”形成的一组事物、场域或集合。",
            "derived_from": "letter",
            "tags": [
                "text",
                "social",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "letter__place",
            "headword_native": "⌂ɭ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "limato",
            "ipa": "limato",
            "pos": "noun",
            "gloss_zh": "书信之地",
            "definition_zh": "与“书信”关联的地点、场所或容器。",
            "derived_from": "letter",
            "tags": [
                "text",
                "social",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "clear",
            "headword_native": "◇ɭ˙ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "lime",
            "ipa": "lime",
            "pos": "adj",
            "gloss_zh": "清晰",
            "definition_zh": "边界或意思容易辨认。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "clear__abs",
            "headword_native": "◇ɭ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "limema",
            "ipa": "limema",
            "pos": "noun",
            "gloss_zh": "清晰之性",
            "definition_zh": "“清晰”这一性质本身。",
            "derived_from": "clear",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "clear__become",
            "headword_native": "◇ɭ˙ɯˉɾ˙",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "limeri",
            "ipa": "limeri",
            "pos": "verb",
            "gloss_zh": "变得清晰",
            "definition_zh": "进入或呈现“清晰”的状态。",
            "derived_from": "clear",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "clear__adv",
            "headword_native": "◇ɭ˙ɯˉʂˉ",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "limese",
            "ipa": "limese",
            "pos": "adv",
            "gloss_zh": "清晰地",
            "definition_zh": "以“清晰”的方式。",
            "derived_from": "clear",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "lo",
            "headword_native": "ɭ°",
            "native_tokens": [
                "c-l",
                "v-o"
            ],
            "headword_romanized": "lo",
            "ipa": "lo",
            "pos": "postp",
            "gloss_zh": "在 / 于",
            "definition_zh": "处所后置词。",
            "derived_from": null,
            "tags": [
                "function",
                "locative"
            ]
        },
        {
            "id": "language",
            "headword_native": "◡ɭ°ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "loma",
            "ipa": "loma",
            "pos": "noun",
            "gloss_zh": "语言",
            "definition_zh": "一套用于表达和交流的系统。",
            "derived_from": null,
            "tags": [
                "text",
                "abstract",
                "root"
            ]
        },
        {
            "id": "language__rel",
            "headword_native": "◡ɭ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "lomali",
            "ipa": "lomali",
            "pos": "adj",
            "gloss_zh": "语言相关的",
            "definition_zh": "与“语言”相关，或具有其属性。",
            "derived_from": "language",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "language__agent",
            "headword_native": "◠ɭ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-l",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "lomaren",
            "ipa": "lomaren",
            "pos": "noun",
            "gloss_zh": "语言之人",
            "definition_zh": "管理、使用、守护或代表“语言”的人。",
            "derived_from": "language",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "language__field",
            "headword_native": "◡ɭ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "lomasa",
            "ipa": "lomasa",
            "pos": "noun",
            "gloss_zh": "语言群域",
            "definition_zh": "围绕“语言”形成的一组事物、场域或集合。",
            "derived_from": "language",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "language__place",
            "headword_native": "⌂ɭ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "lomato",
            "ipa": "lomato",
            "pos": "noun",
            "gloss_zh": "语言之地",
            "definition_zh": "与“语言”关联的地点、场所或容器。",
            "derived_from": "language",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "deep",
            "headword_native": "≈ɭ°ɯˉ",
            "native_tokens": [
                "det-water",
                "c-l",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "lome",
            "ipa": "lome",
            "pos": "adj",
            "gloss_zh": "深",
            "definition_zh": "向内或向下的距离大。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "deep__abs",
            "headword_native": "◇ɭ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lomema",
            "ipa": "lomema",
            "pos": "noun",
            "gloss_zh": "深之性",
            "definition_zh": "“深”这一性质本身。",
            "derived_from": "deep",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "deep__become",
            "headword_native": "≈ɭ°ɯˉɾ˙",
            "native_tokens": [
                "det-water",
                "c-l",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "lomeri",
            "ipa": "lomeri",
            "pos": "verb",
            "gloss_zh": "变得深",
            "definition_zh": "进入或呈现“深”的状态。",
            "derived_from": "deep",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "deep__adv",
            "headword_native": "≈ɭ°ɯˉʂˉ",
            "native_tokens": [
                "det-water",
                "c-l",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "lomese",
            "ipa": "lomese",
            "pos": "adv",
            "gloss_zh": "深地",
            "definition_zh": "以“深”的方式。",
            "derived_from": "deep",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "script",
            "headword_native": "⟐ɭˍɯ˘",
            "native_tokens": [
                "det-mark",
                "c-l",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "luma",
            "ipa": "luma",
            "pos": "noun",
            "gloss_zh": "文字系统",
            "definition_zh": "用于书写语言的成体系符号。",
            "derived_from": null,
            "tags": [
                "text",
                "writing",
                "root"
            ]
        },
        {
            "id": "script__rel",
            "headword_native": "⟐ɭˍɯ˘ɭ˙",
            "native_tokens": [
                "det-mark",
                "c-l",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "lumali",
            "ipa": "lumali",
            "pos": "adj",
            "gloss_zh": "文字系统相关的",
            "definition_zh": "与“文字系统”相关，或具有其属性。",
            "derived_from": "script",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "script__agent",
            "headword_native": "◠ɭˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-l",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "lumaren",
            "ipa": "lumaren",
            "pos": "noun",
            "gloss_zh": "文字系统之人",
            "definition_zh": "管理、使用、守护或代表“文字系统”的人。",
            "derived_from": "script",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "script__field",
            "headword_native": "⟐ɭˍɯ˘ʂ˘",
            "native_tokens": [
                "det-mark",
                "c-l",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "lumasa",
            "ipa": "lumasa",
            "pos": "noun",
            "gloss_zh": "文字系统群域",
            "definition_zh": "围绕“文字系统”形成的一组事物、场域或集合。",
            "derived_from": "script",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "script__place",
            "headword_native": "⌂ɭˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "lumato",
            "ipa": "lumato",
            "pos": "noun",
            "gloss_zh": "文字系统之地",
            "definition_zh": "与“文字系统”关联的地点、场所或容器。",
            "derived_from": "script",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "full",
            "headword_native": "⌂ɭˍɯˉ",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "lume",
            "ipa": "lume",
            "pos": "adj",
            "gloss_zh": "满",
            "definition_zh": "内部被占据得多。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "full__abs",
            "headword_native": "◇ɭˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-l",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "lumema",
            "ipa": "lumema",
            "pos": "noun",
            "gloss_zh": "满之性",
            "definition_zh": "“满”这一性质本身。",
            "derived_from": "full",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "full__become",
            "headword_native": "⌂ɭˍɯˉɾ˙",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "lumeri",
            "ipa": "lumeri",
            "pos": "verb",
            "gloss_zh": "变得满",
            "definition_zh": "进入或呈现“满”的状态。",
            "derived_from": "full",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "full__adv",
            "headword_native": "⌂ɭˍɯˉʂˉ",
            "native_tokens": [
                "det-place",
                "c-l",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "lumese",
            "ipa": "lumese",
            "pos": "adv",
            "gloss_zh": "满地",
            "definition_zh": "以“满”的方式。",
            "derived_from": "full",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "person",
            "headword_native": "◠ɯ˘ɯ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mama",
            "ipa": "mama",
            "pos": "noun",
            "gloss_zh": "人",
            "definition_zh": "一般的人。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "person__rel",
            "headword_native": "◠ɯ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mamali",
            "ipa": "mamali",
            "pos": "adj",
            "gloss_zh": "人相关的",
            "definition_zh": "与“人”相关，或具有其属性。",
            "derived_from": "person",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "person__agent",
            "headword_native": "◠ɯ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mamaren",
            "ipa": "mamaren",
            "pos": "noun",
            "gloss_zh": "人之人",
            "definition_zh": "管理、使用、守护或代表“人”的人。",
            "derived_from": "person",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "person__field",
            "headword_native": "◠ɯ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "mamasa",
            "ipa": "mamasa",
            "pos": "noun",
            "gloss_zh": "人群域",
            "definition_zh": "围绕“人”形成的一组事物、场域或集合。",
            "derived_from": "person",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "person__place",
            "headword_native": "⌂ɯ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-m",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "mamato",
            "ipa": "mamato",
            "pos": "noun",
            "gloss_zh": "人之地",
            "definition_zh": "与“人”关联的地点、场所或容器。",
            "derived_from": "person",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "give",
            "headword_native": "∞ɯ˘ɯˉ",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mame",
            "ipa": "mame",
            "pos": "verb",
            "gloss_zh": "给",
            "definition_zh": "把东西交给别人。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "give__rel",
            "headword_native": "∞ɯ˘ɯˉɭ˙",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-a",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mameli",
            "ipa": "mameli",
            "pos": "adj",
            "gloss_zh": "可给的",
            "definition_zh": "适合、能够或倾向于“给”。",
            "derived_from": "give",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "give__act",
            "headword_native": "◇ɯ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mamema",
            "ipa": "mamema",
            "pos": "noun",
            "gloss_zh": "给之事",
            "definition_zh": "与“给”相关的动作、过程或事件。",
            "derived_from": "give",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "give__agent",
            "headword_native": "◠ɯ˘ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mameren",
            "ipa": "mameren",
            "pos": "noun",
            "gloss_zh": "给者",
            "definition_zh": "执行“给”的人。",
            "derived_from": "give",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "give__result",
            "headword_native": "⟟ɯ˘ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-m",
                "v-a",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "mamete",
            "ipa": "mamete",
            "pos": "noun",
            "gloss_zh": "给之成物",
            "definition_zh": "由“给”产生、留下或完成的结果。",
            "derived_from": "give",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "friend",
            "headword_native": "∞ɯˉɯ˘",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mema",
            "ipa": "mema",
            "pos": "noun",
            "gloss_zh": "朋友",
            "definition_zh": "亲近并互相信任的人。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "friend__rel",
            "headword_native": "∞ɯˉɯ˘ɭ˙",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "memali",
            "ipa": "memali",
            "pos": "adj",
            "gloss_zh": "朋友相关的",
            "definition_zh": "与“朋友”相关，或具有其属性。",
            "derived_from": "friend",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "friend__agent",
            "headword_native": "◠ɯˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "memaren",
            "ipa": "memaren",
            "pos": "noun",
            "gloss_zh": "朋友之人",
            "definition_zh": "管理、使用、守护或代表“朋友”的人。",
            "derived_from": "friend",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "friend__field",
            "headword_native": "∞ɯˉɯ˘ʂ˘",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "memasa",
            "ipa": "memasa",
            "pos": "noun",
            "gloss_zh": "朋友群域",
            "definition_zh": "围绕“朋友”形成的一组事物、场域或集合。",
            "derived_from": "friend",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "friend__place",
            "headword_native": "⌂ɯˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-m",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "memato",
            "ipa": "memato",
            "pos": "noun",
            "gloss_zh": "朋友之地",
            "definition_zh": "与“朋友”关联的地点、场所或容器。",
            "derived_from": "friend",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "take",
            "headword_native": "◠ɯˉɯˉ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "meme",
            "ipa": "meme",
            "pos": "verb",
            "gloss_zh": "拿取",
            "definition_zh": "将事物带到自己一侧。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "take__rel",
            "headword_native": "◠ɯˉɯˉɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-e",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "memeli",
            "ipa": "memeli",
            "pos": "adj",
            "gloss_zh": "可拿取的",
            "definition_zh": "适合、能够或倾向于“拿取”。",
            "derived_from": "take",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "take__act",
            "headword_native": "◇ɯˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "memema",
            "ipa": "memema",
            "pos": "noun",
            "gloss_zh": "拿取之事",
            "definition_zh": "与“拿取”相关的动作、过程或事件。",
            "derived_from": "take",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "take__agent",
            "headword_native": "◠ɯˉɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "memeren",
            "ipa": "memeren",
            "pos": "noun",
            "gloss_zh": "拿取者",
            "definition_zh": "执行“拿取”的人。",
            "derived_from": "take",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "take__result",
            "headword_native": "⟟ɯˉɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-m",
                "v-e",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "memete",
            "ipa": "memete",
            "pos": "noun",
            "gloss_zh": "拿取之成物",
            "definition_zh": "由“拿取”产生、留下或完成的结果。",
            "derived_from": "take",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "mi",
            "headword_native": "ɯ˙",
            "native_tokens": [
                "c-m",
                "v-i"
            ],
            "headword_romanized": "mi",
            "ipa": "mi",
            "pos": "pron",
            "gloss_zh": "我",
            "definition_zh": "第一人称单数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "child",
            "headword_native": "◠ɯ˙ɯ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mima",
            "ipa": "mima",
            "pos": "noun",
            "gloss_zh": "孩子",
            "definition_zh": "年幼的人。",
            "derived_from": null,
            "tags": [
                "daily",
                "family",
                "root"
            ]
        },
        {
            "id": "child__rel",
            "headword_native": "◠ɯ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mimali",
            "ipa": "mimali",
            "pos": "adj",
            "gloss_zh": "孩子相关的",
            "definition_zh": "与“孩子”相关，或具有其属性。",
            "derived_from": "child",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "child__agent",
            "headword_native": "◠ɯ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mimaren",
            "ipa": "mimaren",
            "pos": "noun",
            "gloss_zh": "孩子之人",
            "definition_zh": "管理、使用、守护或代表“孩子”的人。",
            "derived_from": "child",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "child__field",
            "headword_native": "◠ɯ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "mimasa",
            "ipa": "mimasa",
            "pos": "noun",
            "gloss_zh": "孩子群域",
            "definition_zh": "围绕“孩子”形成的一组事物、场域或集合。",
            "derived_from": "child",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "child__place",
            "headword_native": "⌂ɯ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-m",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "mimato",
            "ipa": "mimato",
            "pos": "noun",
            "gloss_zh": "孩子之地",
            "definition_zh": "与“孩子”关联的地点、场所或容器。",
            "derived_from": "child",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "carry",
            "headword_native": "⌁ɯ˙ɯˉ",
            "native_tokens": [
                "det-motion",
                "c-m",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mime",
            "ipa": "mime",
            "pos": "verb",
            "gloss_zh": "携带",
            "definition_zh": "把东西随身带着或搬运。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "carry__rel",
            "headword_native": "⌁ɯ˙ɯˉɭ˙",
            "native_tokens": [
                "det-motion",
                "c-m",
                "v-i",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mimeli",
            "ipa": "mimeli",
            "pos": "adj",
            "gloss_zh": "可携带的",
            "definition_zh": "适合、能够或倾向于“携带”。",
            "derived_from": "carry",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "carry__act",
            "headword_native": "◇ɯ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mimema",
            "ipa": "mimema",
            "pos": "noun",
            "gloss_zh": "携带之事",
            "definition_zh": "与“携带”相关的动作、过程或事件。",
            "derived_from": "carry",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "carry__agent",
            "headword_native": "◠ɯ˙ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mimeren",
            "ipa": "mimeren",
            "pos": "noun",
            "gloss_zh": "携带者",
            "definition_zh": "执行“携带”的人。",
            "derived_from": "carry",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "carry__result",
            "headword_native": "⟟ɯ˙ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-m",
                "v-i",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "mimete",
            "ipa": "mimete",
            "pos": "noun",
            "gloss_zh": "携带之成物",
            "definition_zh": "由“携带”产生、留下或完成的结果。",
            "derived_from": "carry",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "mo",
            "headword_native": "ɯ°",
            "native_tokens": [
                "c-m",
                "v-o"
            ],
            "headword_romanized": "mo",
            "ipa": "mo",
            "pos": "part",
            "gloss_zh": "比",
            "definition_zh": "比较标记。",
            "derived_from": null,
            "tags": [
                "function",
                "comparison"
            ]
        },
        {
            "id": "parent",
            "headword_native": "∞ɯ°ɯ˘",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "moma",
            "ipa": "moma",
            "pos": "noun",
            "gloss_zh": "父母",
            "definition_zh": "父亲或母亲。",
            "derived_from": null,
            "tags": [
                "daily",
                "family",
                "root"
            ]
        },
        {
            "id": "parent__rel",
            "headword_native": "∞ɯ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "momali",
            "ipa": "momali",
            "pos": "adj",
            "gloss_zh": "父母相关的",
            "definition_zh": "与“父母”相关，或具有其属性。",
            "derived_from": "parent",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "parent__agent",
            "headword_native": "◠ɯ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "momaren",
            "ipa": "momaren",
            "pos": "noun",
            "gloss_zh": "父母之人",
            "definition_zh": "管理、使用、守护或代表“父母”的人。",
            "derived_from": "parent",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "parent__field",
            "headword_native": "∞ɯ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "momasa",
            "ipa": "momasa",
            "pos": "noun",
            "gloss_zh": "父母群域",
            "definition_zh": "围绕“父母”形成的一组事物、场域或集合。",
            "derived_from": "parent",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "parent__place",
            "headword_native": "⌂ɯ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-m",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "momato",
            "ipa": "momato",
            "pos": "noun",
            "gloss_zh": "父母之地",
            "definition_zh": "与“父母”关联的地点、场所或容器。",
            "derived_from": "parent",
            "tags": [
                "daily",
                "family",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "sit",
            "headword_native": "◠ɯ°ɯˉ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mome",
            "ipa": "mome",
            "pos": "verb",
            "gloss_zh": "坐",
            "definition_zh": "以坐姿停留。",
            "derived_from": null,
            "tags": [
                "daily",
                "body",
                "root"
            ]
        },
        {
            "id": "sit__rel",
            "headword_native": "◠ɯ°ɯˉɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-o",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "momeli",
            "ipa": "momeli",
            "pos": "adj",
            "gloss_zh": "可坐的",
            "definition_zh": "适合、能够或倾向于“坐”。",
            "derived_from": "sit",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "sit__act",
            "headword_native": "◇ɯ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "momema",
            "ipa": "momema",
            "pos": "noun",
            "gloss_zh": "坐之事",
            "definition_zh": "与“坐”相关的动作、过程或事件。",
            "derived_from": "sit",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "sit__agent",
            "headword_native": "◠ɯ°ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "momeren",
            "ipa": "momeren",
            "pos": "noun",
            "gloss_zh": "坐者",
            "definition_zh": "执行“坐”的人。",
            "derived_from": "sit",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "sit__result",
            "headword_native": "⟟ɯ°ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-m",
                "v-o",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "momete",
            "ipa": "momete",
            "pos": "noun",
            "gloss_zh": "坐之成物",
            "definition_zh": "由“坐”产生、留下或完成的结果。",
            "derived_from": "sit",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "elder",
            "headword_native": "◠ɯˍɯ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "muma",
            "ipa": "muma",
            "pos": "noun",
            "gloss_zh": "长者",
            "definition_zh": "年长或受尊敬的人。",
            "derived_from": null,
            "tags": [
                "social",
                "role",
                "root"
            ]
        },
        {
            "id": "elder__rel",
            "headword_native": "◠ɯˍɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mumali",
            "ipa": "mumali",
            "pos": "adj",
            "gloss_zh": "长者相关的",
            "definition_zh": "与“长者”相关，或具有其属性。",
            "derived_from": "elder",
            "tags": [
                "social",
                "role",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "elder__agent",
            "headword_native": "◠ɯˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mumaren",
            "ipa": "mumaren",
            "pos": "noun",
            "gloss_zh": "长者之人",
            "definition_zh": "管理、使用、守护或代表“长者”的人。",
            "derived_from": "elder",
            "tags": [
                "social",
                "role",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "elder__field",
            "headword_native": "◠ɯˍɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "mumasa",
            "ipa": "mumasa",
            "pos": "noun",
            "gloss_zh": "长者群域",
            "definition_zh": "围绕“长者”形成的一组事物、场域或集合。",
            "derived_from": "elder",
            "tags": [
                "social",
                "role",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "elder__place",
            "headword_native": "⌂ɯˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-m",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "mumato",
            "ipa": "mumato",
            "pos": "noun",
            "gloss_zh": "长者之地",
            "definition_zh": "与“长者”关联的地点、场所或容器。",
            "derived_from": "elder",
            "tags": [
                "social",
                "role",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "stand",
            "headword_native": "◠ɯˍɯˉ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mume",
            "ipa": "mume",
            "pos": "verb",
            "gloss_zh": "站",
            "definition_zh": "以站姿停留。",
            "derived_from": null,
            "tags": [
                "daily",
                "body",
                "root"
            ]
        },
        {
            "id": "stand__rel",
            "headword_native": "◠ɯˍɯˉɭ˙",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "mumeli",
            "ipa": "mumeli",
            "pos": "adj",
            "gloss_zh": "可站的",
            "definition_zh": "适合、能够或倾向于“站”。",
            "derived_from": "stand",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "stand__act",
            "headword_native": "◇ɯˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "mumema",
            "ipa": "mumema",
            "pos": "noun",
            "gloss_zh": "站之事",
            "definition_zh": "与“站”相关的动作、过程或事件。",
            "derived_from": "stand",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "stand__agent",
            "headword_native": "◠ɯˍɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-m",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "mumeren",
            "ipa": "mumeren",
            "pos": "noun",
            "gloss_zh": "站者",
            "definition_zh": "执行“站”的人。",
            "derived_from": "stand",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "stand__result",
            "headword_native": "⟟ɯˍɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-m",
                "v-u",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "mumete",
            "ipa": "mumete",
            "pos": "noun",
            "gloss_zh": "站之成物",
            "definition_zh": "由“站”产生、留下或完成的结果。",
            "derived_from": "stand",
            "tags": [
                "daily",
                "body",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "na",
            "headword_native": "ɲ˘",
            "native_tokens": [
                "c-n",
                "v-a"
            ],
            "headword_romanized": "na",
            "ipa": "na",
            "pos": "part",
            "gloss_zh": "不",
            "definition_zh": "否定词。",
            "derived_from": null,
            "tags": [
                "function",
                "negation"
            ]
        },
        {
            "id": "name",
            "headword_native": "⟐ɲ˘ɯ˘",
            "native_tokens": [
                "det-mark",
                "c-n",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nama",
            "ipa": "nama",
            "pos": "noun",
            "gloss_zh": "名字",
            "definition_zh": "个体或事物的名称。",
            "derived_from": null,
            "tags": [
                "daily",
                "identity",
                "root"
            ]
        },
        {
            "id": "name__rel",
            "headword_native": "⟐ɲ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-mark",
                "c-n",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "namali",
            "ipa": "namali",
            "pos": "adj",
            "gloss_zh": "名字相关的",
            "definition_zh": "与“名字”相关，或具有其属性。",
            "derived_from": "name",
            "tags": [
                "daily",
                "identity",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "name__agent",
            "headword_native": "◠ɲ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "namaren",
            "ipa": "namaren",
            "pos": "noun",
            "gloss_zh": "名字之人",
            "definition_zh": "管理、使用、守护或代表“名字”的人。",
            "derived_from": "name",
            "tags": [
                "daily",
                "identity",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "name__field",
            "headword_native": "⟐ɲ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-mark",
                "c-n",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "namasa",
            "ipa": "namasa",
            "pos": "noun",
            "gloss_zh": "名字群域",
            "definition_zh": "围绕“名字”形成的一组事物、场域或集合。",
            "derived_from": "name",
            "tags": [
                "daily",
                "identity",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "name__place",
            "headword_native": "⌂ɲ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-n",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "namato",
            "ipa": "namato",
            "pos": "noun",
            "gloss_zh": "名字之地",
            "definition_zh": "与“名字”关联的地点、场所或容器。",
            "derived_from": "name",
            "tags": [
                "daily",
                "identity",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "walk",
            "headword_native": "⌁ɲ˘ɯˉ",
            "native_tokens": [
                "det-motion",
                "c-n",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "name",
            "ipa": "name",
            "pos": "verb",
            "gloss_zh": "步行",
            "definition_zh": "以步行方式移动。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "walk__rel",
            "headword_native": "⌁ɲ˘ɯˉɭ˙",
            "native_tokens": [
                "det-motion",
                "c-n",
                "v-a",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nameli",
            "ipa": "nameli",
            "pos": "adj",
            "gloss_zh": "可步行的",
            "definition_zh": "适合、能够或倾向于“步行”。",
            "derived_from": "walk",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "walk__act",
            "headword_native": "◇ɲ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "namema",
            "ipa": "namema",
            "pos": "noun",
            "gloss_zh": "步行之事",
            "definition_zh": "与“步行”相关的动作、过程或事件。",
            "derived_from": "walk",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "walk__agent",
            "headword_native": "◠ɲ˘ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nameren",
            "ipa": "nameren",
            "pos": "noun",
            "gloss_zh": "步行者",
            "definition_zh": "执行“步行”的人。",
            "derived_from": "walk",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "walk__result",
            "headword_native": "⟟ɲ˘ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-n",
                "v-a",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "namete",
            "ipa": "namete",
            "pos": "noun",
            "gloss_zh": "步行之成物",
            "definition_zh": "由“步行”产生、留下或完成的结果。",
            "derived_from": "walk",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "nami",
            "headword_native": "ɲ˘ɯ˙",
            "native_tokens": [
                "c-n",
                "v-a",
                "c-m",
                "v-i"
            ],
            "headword_romanized": "nami",
            "ipa": "na.mi",
            "pos": "pron",
            "gloss_zh": "我们",
            "definition_zh": "第一人称复数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "ne",
            "headword_native": "ɲˉ",
            "native_tokens": [
                "c-n",
                "v-e"
            ],
            "headword_romanized": "ne",
            "ipa": "ne",
            "pos": "det",
            "gloss_zh": "这",
            "definition_zh": "近指。",
            "derived_from": null,
            "tags": [
                "function",
                "demonstrative"
            ]
        },
        {
            "id": "voice",
            "headword_native": "◡ɲˉɯ˘",
            "native_tokens": [
                "det-speech",
                "c-n",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nema",
            "ipa": "nema",
            "pos": "noun",
            "gloss_zh": "声音",
            "definition_zh": "人或事物发出的声响。",
            "derived_from": null,
            "tags": [
                "daily",
                "sound",
                "root"
            ]
        },
        {
            "id": "voice__rel",
            "headword_native": "◡ɲˉɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-n",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nemali",
            "ipa": "nemali",
            "pos": "adj",
            "gloss_zh": "声音相关的",
            "definition_zh": "与“声音”相关，或具有其属性。",
            "derived_from": "voice",
            "tags": [
                "daily",
                "sound",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "voice__agent",
            "headword_native": "◠ɲˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nemaren",
            "ipa": "nemaren",
            "pos": "noun",
            "gloss_zh": "声音之人",
            "definition_zh": "管理、使用、守护或代表“声音”的人。",
            "derived_from": "voice",
            "tags": [
                "daily",
                "sound",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "voice__field",
            "headword_native": "◡ɲˉɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-n",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "nemasa",
            "ipa": "nemasa",
            "pos": "noun",
            "gloss_zh": "声音群域",
            "definition_zh": "围绕“声音”形成的一组事物、场域或集合。",
            "derived_from": "voice",
            "tags": [
                "daily",
                "sound",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "voice__place",
            "headword_native": "⌂ɲˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-n",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "nemato",
            "ipa": "nemato",
            "pos": "noun",
            "gloss_zh": "声音之地",
            "definition_zh": "与“声音”关联的地点、场所或容器。",
            "derived_from": "voice",
            "tags": [
                "daily",
                "sound",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "run",
            "headword_native": "⌁ɲˉɯˉ",
            "native_tokens": [
                "det-motion",
                "c-n",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "neme",
            "ipa": "neme",
            "pos": "verb",
            "gloss_zh": "跑",
            "definition_zh": "快速移动。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "run__rel",
            "headword_native": "⌁ɲˉɯˉɭ˙",
            "native_tokens": [
                "det-motion",
                "c-n",
                "v-e",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nemeli",
            "ipa": "nemeli",
            "pos": "adj",
            "gloss_zh": "可跑的",
            "definition_zh": "适合、能够或倾向于“跑”。",
            "derived_from": "run",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "run__act",
            "headword_native": "◇ɲˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nemema",
            "ipa": "nemema",
            "pos": "noun",
            "gloss_zh": "跑之事",
            "definition_zh": "与“跑”相关的动作、过程或事件。",
            "derived_from": "run",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "run__agent",
            "headword_native": "◠ɲˉɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nemeren",
            "ipa": "nemeren",
            "pos": "noun",
            "gloss_zh": "跑者",
            "definition_zh": "执行“跑”的人。",
            "derived_from": "run",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "run__result",
            "headword_native": "⟟ɲˉɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-n",
                "v-e",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "nemete",
            "ipa": "nemete",
            "pos": "noun",
            "gloss_zh": "跑之成物",
            "definition_zh": "由“跑”产生、留下或完成的结果。",
            "derived_from": "run",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "hand",
            "headword_native": "◠ɲ˙ɯ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nima",
            "ipa": "nima",
            "pos": "noun",
            "gloss_zh": "手",
            "definition_zh": "用于拿取、制作和触碰的身体部分。",
            "derived_from": null,
            "tags": [
                "body",
                "daily",
                "root"
            ]
        },
        {
            "id": "hand__rel",
            "headword_native": "◠ɲ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nimali",
            "ipa": "nimali",
            "pos": "adj",
            "gloss_zh": "手相关的",
            "definition_zh": "与“手”相关，或具有其属性。",
            "derived_from": "hand",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "hand__agent",
            "headword_native": "◠ɲ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nimaren",
            "ipa": "nimaren",
            "pos": "noun",
            "gloss_zh": "手之人",
            "definition_zh": "管理、使用、守护或代表“手”的人。",
            "derived_from": "hand",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "hand__field",
            "headword_native": "◠ɲ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "nimasa",
            "ipa": "nimasa",
            "pos": "noun",
            "gloss_zh": "手群域",
            "definition_zh": "围绕“手”形成的一组事物、场域或集合。",
            "derived_from": "hand",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "hand__place",
            "headword_native": "⌂ɲ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-n",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "nimato",
            "ipa": "nimato",
            "pos": "noun",
            "gloss_zh": "手之地",
            "definition_zh": "与“手”关联的地点、场所或容器。",
            "derived_from": "hand",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "wait",
            "headword_native": "◔ɲ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-n",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "nime",
            "ipa": "nime",
            "pos": "verb",
            "gloss_zh": "等待",
            "definition_zh": "停留并期待某事到来。",
            "derived_from": null,
            "tags": [
                "daily",
                "time",
                "root"
            ]
        },
        {
            "id": "wait__rel",
            "headword_native": "◔ɲ˙ɯˉɭ˙",
            "native_tokens": [
                "det-time",
                "c-n",
                "v-i",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nimeli",
            "ipa": "nimeli",
            "pos": "adj",
            "gloss_zh": "可等待的",
            "definition_zh": "适合、能够或倾向于“等待”。",
            "derived_from": "wait",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "wait__act",
            "headword_native": "◇ɲ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nimema",
            "ipa": "nimema",
            "pos": "noun",
            "gloss_zh": "等待之事",
            "definition_zh": "与“等待”相关的动作、过程或事件。",
            "derived_from": "wait",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "wait__agent",
            "headword_native": "◠ɲ˙ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nimeren",
            "ipa": "nimeren",
            "pos": "noun",
            "gloss_zh": "等待者",
            "definition_zh": "执行“等待”的人。",
            "derived_from": "wait",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "wait__result",
            "headword_native": "⟟ɲ˙ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-n",
                "v-i",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "nimete",
            "ipa": "nimete",
            "pos": "noun",
            "gloss_zh": "等待之成物",
            "definition_zh": "由“等待”产生、留下或完成的结果。",
            "derived_from": "wait",
            "tags": [
                "daily",
                "time",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "eye",
            "headword_native": "◠ɲ°ɯ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "noma",
            "ipa": "noma",
            "pos": "noun",
            "gloss_zh": "眼",
            "definition_zh": "用于观看的身体部分。",
            "derived_from": null,
            "tags": [
                "body",
                "daily",
                "root"
            ]
        },
        {
            "id": "eye__rel",
            "headword_native": "◠ɲ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nomali",
            "ipa": "nomali",
            "pos": "adj",
            "gloss_zh": "眼相关的",
            "definition_zh": "与“眼”相关，或具有其属性。",
            "derived_from": "eye",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "eye__agent",
            "headword_native": "◠ɲ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nomaren",
            "ipa": "nomaren",
            "pos": "noun",
            "gloss_zh": "眼之人",
            "definition_zh": "管理、使用、守护或代表“眼”的人。",
            "derived_from": "eye",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "eye__field",
            "headword_native": "◠ɲ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "nomasa",
            "ipa": "nomasa",
            "pos": "noun",
            "gloss_zh": "眼群域",
            "definition_zh": "围绕“眼”形成的一组事物、场域或集合。",
            "derived_from": "eye",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "eye__place",
            "headword_native": "⌂ɲ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-n",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "nomato",
            "ipa": "nomato",
            "pos": "noun",
            "gloss_zh": "眼之地",
            "definition_zh": "与“眼”关联的地点、场所或容器。",
            "derived_from": "eye",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "think",
            "headword_native": "◇ɲ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "nome",
            "ipa": "nome",
            "pos": "verb",
            "gloss_zh": "思考",
            "definition_zh": "在头脑中处理概念。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "think__rel",
            "headword_native": "◇ɲ°ɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-o",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "nomeli",
            "ipa": "nomeli",
            "pos": "adj",
            "gloss_zh": "可思考的",
            "definition_zh": "适合、能够或倾向于“思考”。",
            "derived_from": "think",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "think__act",
            "headword_native": "◇ɲ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "nomema",
            "ipa": "nomema",
            "pos": "noun",
            "gloss_zh": "思考之事",
            "definition_zh": "与“思考”相关的动作、过程或事件。",
            "derived_from": "think",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "think__agent",
            "headword_native": "◠ɲ°ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "nomeren",
            "ipa": "nomeren",
            "pos": "noun",
            "gloss_zh": "思考者",
            "definition_zh": "执行“思考”的人。",
            "derived_from": "think",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "think__result",
            "headword_native": "⟟ɲ°ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-n",
                "v-o",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "nomete",
            "ipa": "nomete",
            "pos": "noun",
            "gloss_zh": "思考之成物",
            "definition_zh": "由“思考”产生、留下或完成的结果。",
            "derived_from": "think",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "nu",
            "headword_native": "ɲˍ",
            "native_tokens": [
                "c-n",
                "v-u"
            ],
            "headword_romanized": "nu",
            "ipa": "nu",
            "pos": "part",
            "gloss_zh": "已完成",
            "definition_zh": "完成体。",
            "derived_from": null,
            "tags": [
                "function",
                "perfect"
            ]
        },
        {
            "id": "ear",
            "headword_native": "◠ɲˍɯ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "numa",
            "ipa": "numa",
            "pos": "noun",
            "gloss_zh": "耳",
            "definition_zh": "用于听觉的身体部分。",
            "derived_from": null,
            "tags": [
                "body",
                "daily",
                "root"
            ]
        },
        {
            "id": "ear__rel",
            "headword_native": "◠ɲˍɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "numali",
            "ipa": "numali",
            "pos": "adj",
            "gloss_zh": "耳相关的",
            "definition_zh": "与“耳”相关，或具有其属性。",
            "derived_from": "ear",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "ear__agent",
            "headword_native": "◠ɲˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "numaren",
            "ipa": "numaren",
            "pos": "noun",
            "gloss_zh": "耳之人",
            "definition_zh": "管理、使用、守护或代表“耳”的人。",
            "derived_from": "ear",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "ear__field",
            "headword_native": "◠ɲˍɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "numasa",
            "ipa": "numasa",
            "pos": "noun",
            "gloss_zh": "耳群域",
            "definition_zh": "围绕“耳”形成的一组事物、场域或集合。",
            "derived_from": "ear",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "ear__place",
            "headword_native": "⌂ɲˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-n",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "numato",
            "ipa": "numato",
            "pos": "noun",
            "gloss_zh": "耳之地",
            "definition_zh": "与“耳”关联的地点、场所或容器。",
            "derived_from": "ear",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "grow",
            "headword_native": "◔ɲˍɯˉ",
            "native_tokens": [
                "det-time",
                "c-n",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "nume",
            "ipa": "nume",
            "pos": "verb",
            "gloss_zh": "增长",
            "definition_zh": "数量、体量或程度变多。",
            "derived_from": null,
            "tags": [
                "daily",
                "change",
                "root"
            ]
        },
        {
            "id": "grow__rel",
            "headword_native": "◔ɲˍɯˉɭ˙",
            "native_tokens": [
                "det-time",
                "c-n",
                "v-u",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "numeli",
            "ipa": "numeli",
            "pos": "adj",
            "gloss_zh": "可增长的",
            "definition_zh": "适合、能够或倾向于“增长”。",
            "derived_from": "grow",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "grow__act",
            "headword_native": "◇ɲˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "numema",
            "ipa": "numema",
            "pos": "noun",
            "gloss_zh": "增长之事",
            "definition_zh": "与“增长”相关的动作、过程或事件。",
            "derived_from": "grow",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "grow__agent",
            "headword_native": "◠ɲˍɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-n",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "numeren",
            "ipa": "numeren",
            "pos": "noun",
            "gloss_zh": "增长者",
            "definition_zh": "执行“增长”的人。",
            "derived_from": "grow",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "grow__result",
            "headword_native": "⟟ɲˍɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-n",
                "v-u",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "numete",
            "ipa": "numete",
            "pos": "noun",
            "gloss_zh": "增长之成物",
            "definition_zh": "由“增长”产生、留下或完成的结果。",
            "derived_from": "grow",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "pa",
            "headword_native": "þ˘",
            "native_tokens": [
                "c-p",
                "v-a"
            ],
            "headword_romanized": "pa",
            "ipa": "pa",
            "pos": "part",
            "gloss_zh": "过去",
            "definition_zh": "过去体貌词。",
            "derived_from": null,
            "tags": [
                "function",
                "tense"
            ]
        },
        {
            "id": "mouth",
            "headword_native": "◠þ˘ɯ˘",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pama",
            "ipa": "pama",
            "pos": "noun",
            "gloss_zh": "口",
            "definition_zh": "用于说话与进食的身体部分。",
            "derived_from": null,
            "tags": [
                "body",
                "daily",
                "root"
            ]
        },
        {
            "id": "mouth__rel",
            "headword_native": "◠þ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pamali",
            "ipa": "pamali",
            "pos": "adj",
            "gloss_zh": "口相关的",
            "definition_zh": "与“口”相关，或具有其属性。",
            "derived_from": "mouth",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "mouth__agent",
            "headword_native": "◠þ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pamaren",
            "ipa": "pamaren",
            "pos": "noun",
            "gloss_zh": "口之人",
            "definition_zh": "管理、使用、守护或代表“口”的人。",
            "derived_from": "mouth",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "mouth__field",
            "headword_native": "◠þ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "pamasa",
            "ipa": "pamasa",
            "pos": "noun",
            "gloss_zh": "口群域",
            "definition_zh": "围绕“口”形成的一组事物、场域或集合。",
            "derived_from": "mouth",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "mouth__place",
            "headword_native": "⌂þ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "pamato",
            "ipa": "pamato",
            "pos": "noun",
            "gloss_zh": "口之地",
            "definition_zh": "与“口”关联的地点、场所或容器。",
            "derived_from": "mouth",
            "tags": [
                "body",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "remain",
            "headword_native": "◔þ˘ɯˉ",
            "native_tokens": [
                "det-time",
                "c-p",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pame",
            "ipa": "pame",
            "pos": "verb",
            "gloss_zh": "留下",
            "definition_zh": "在变化之后仍然存在。",
            "derived_from": null,
            "tags": [
                "daily",
                "change",
                "root"
            ]
        },
        {
            "id": "remain__rel",
            "headword_native": "◔þ˘ɯˉɭ˙",
            "native_tokens": [
                "det-time",
                "c-p",
                "v-a",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pameli",
            "ipa": "pameli",
            "pos": "adj",
            "gloss_zh": "可留下的",
            "definition_zh": "适合、能够或倾向于“留下”。",
            "derived_from": "remain",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "remain__act",
            "headword_native": "◇þ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pamema",
            "ipa": "pamema",
            "pos": "noun",
            "gloss_zh": "留下之事",
            "definition_zh": "与“留下”相关的动作、过程或事件。",
            "derived_from": "remain",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "remain__agent",
            "headword_native": "◠þ˘ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pameren",
            "ipa": "pameren",
            "pos": "noun",
            "gloss_zh": "留下者",
            "definition_zh": "执行“留下”的人。",
            "derived_from": "remain",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "remain__result",
            "headword_native": "⟟þ˘ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-p",
                "v-a",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "pamete",
            "ipa": "pamete",
            "pos": "noun",
            "gloss_zh": "留下之成物",
            "definition_zh": "由“留下”产生、留下或完成的结果。",
            "derived_from": "remain",
            "tags": [
                "daily",
                "change",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "heart",
            "headword_native": "◇þˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pema",
            "ipa": "pema",
            "pos": "noun",
            "gloss_zh": "心",
            "definition_zh": "情感与意志的中心。",
            "derived_from": null,
            "tags": [
                "abstract",
                "body",
                "root"
            ]
        },
        {
            "id": "heart__rel",
            "headword_native": "◇þˉɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pemali",
            "ipa": "pemali",
            "pos": "adj",
            "gloss_zh": "心相关的",
            "definition_zh": "与“心”相关，或具有其属性。",
            "derived_from": "heart",
            "tags": [
                "abstract",
                "body",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "heart__agent",
            "headword_native": "◠þˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pemaren",
            "ipa": "pemaren",
            "pos": "noun",
            "gloss_zh": "心之人",
            "definition_zh": "管理、使用、守护或代表“心”的人。",
            "derived_from": "heart",
            "tags": [
                "abstract",
                "body",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "heart__field",
            "headword_native": "◇þˉɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "pemasa",
            "ipa": "pemasa",
            "pos": "noun",
            "gloss_zh": "心群域",
            "definition_zh": "围绕“心”形成的一组事物、场域或集合。",
            "derived_from": "heart",
            "tags": [
                "abstract",
                "body",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "heart__place",
            "headword_native": "⌂þˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "pemato",
            "ipa": "pemato",
            "pos": "noun",
            "gloss_zh": "心之地",
            "definition_zh": "与“心”关联的地点、场所或容器。",
            "derived_from": "heart",
            "tags": [
                "abstract",
                "body",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "remember",
            "headword_native": "◇þˉɯˉ",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "peme",
            "ipa": "peme",
            "pos": "verb",
            "gloss_zh": "记得",
            "definition_zh": "把内容保持在记忆中。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "remember__rel",
            "headword_native": "◇þˉɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pemeli",
            "ipa": "pemeli",
            "pos": "adj",
            "gloss_zh": "可记得的",
            "definition_zh": "适合、能够或倾向于“记得”。",
            "derived_from": "remember",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "remember__act",
            "headword_native": "◇þˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pemema",
            "ipa": "pemema",
            "pos": "noun",
            "gloss_zh": "记得之事",
            "definition_zh": "与“记得”相关的动作、过程或事件。",
            "derived_from": "remember",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "remember__agent",
            "headword_native": "◠þˉɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pemeren",
            "ipa": "pemeren",
            "pos": "noun",
            "gloss_zh": "记得者",
            "definition_zh": "执行“记得”的人。",
            "derived_from": "remember",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "remember__result",
            "headword_native": "⟟þˉɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-p",
                "v-e",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "pemete",
            "ipa": "pemete",
            "pos": "noun",
            "gloss_zh": "记得之成物",
            "definition_zh": "由“记得”产生、留下或完成的结果。",
            "derived_from": "remember",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "home",
            "headword_native": "⌂þ˙ɯ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pima",
            "ipa": "pima",
            "pos": "noun",
            "gloss_zh": "家",
            "definition_zh": "居住和归属的地方。",
            "derived_from": null,
            "tags": [
                "daily",
                "place",
                "root"
            ]
        },
        {
            "id": "home__rel",
            "headword_native": "⌂þ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pimali",
            "ipa": "pimali",
            "pos": "adj",
            "gloss_zh": "家相关的",
            "definition_zh": "与“家”相关，或具有其属性。",
            "derived_from": "home",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "home__agent",
            "headword_native": "◠þ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pimaren",
            "ipa": "pimaren",
            "pos": "noun",
            "gloss_zh": "家之人",
            "definition_zh": "管理、使用、守护或代表“家”的人。",
            "derived_from": "home",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "home__field",
            "headword_native": "⌂þ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "pimasa",
            "ipa": "pimasa",
            "pos": "noun",
            "gloss_zh": "家群域",
            "definition_zh": "围绕“家”形成的一组事物、场域或集合。",
            "derived_from": "home",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "home__place",
            "headword_native": "⌂þ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "pimato",
            "ipa": "pimato",
            "pos": "noun",
            "gloss_zh": "家之地",
            "definition_zh": "与“家”关联的地点、场所或容器。",
            "derived_from": "home",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "forget",
            "headword_native": "◇þ˙ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pime",
            "ipa": "pime",
            "pos": "verb",
            "gloss_zh": "忘记",
            "definition_zh": "失去对某内容的保持。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "forget__rel",
            "headword_native": "◇þ˙ɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-i",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pimeli",
            "ipa": "pimeli",
            "pos": "adj",
            "gloss_zh": "可忘记的",
            "definition_zh": "适合、能够或倾向于“忘记”。",
            "derived_from": "forget",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "forget__act",
            "headword_native": "◇þ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pimema",
            "ipa": "pimema",
            "pos": "noun",
            "gloss_zh": "忘记之事",
            "definition_zh": "与“忘记”相关的动作、过程或事件。",
            "derived_from": "forget",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "forget__agent",
            "headword_native": "◠þ˙ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pimeren",
            "ipa": "pimeren",
            "pos": "noun",
            "gloss_zh": "忘记者",
            "definition_zh": "执行“忘记”的人。",
            "derived_from": "forget",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "forget__result",
            "headword_native": "⟟þ˙ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-p",
                "v-i",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "pimete",
            "ipa": "pimete",
            "pos": "noun",
            "gloss_zh": "忘记之成物",
            "definition_zh": "由“忘记”产生、留下或完成的结果。",
            "derived_from": "forget",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "room",
            "headword_native": "⌂þ°ɯ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "poma",
            "ipa": "poma",
            "pos": "noun",
            "gloss_zh": "房间",
            "definition_zh": "建筑中的内部空间。",
            "derived_from": null,
            "tags": [
                "daily",
                "place",
                "root"
            ]
        },
        {
            "id": "room__rel",
            "headword_native": "⌂þ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pomali",
            "ipa": "pomali",
            "pos": "adj",
            "gloss_zh": "房间相关的",
            "definition_zh": "与“房间”相关，或具有其属性。",
            "derived_from": "room",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "room__agent",
            "headword_native": "◠þ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pomaren",
            "ipa": "pomaren",
            "pos": "noun",
            "gloss_zh": "房间之人",
            "definition_zh": "管理、使用、守护或代表“房间”的人。",
            "derived_from": "room",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "room__field",
            "headword_native": "⌂þ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "pomasa",
            "ipa": "pomasa",
            "pos": "noun",
            "gloss_zh": "房间群域",
            "definition_zh": "围绕“房间”形成的一组事物、场域或集合。",
            "derived_from": "room",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "room__place",
            "headword_native": "⌂þ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "pomato",
            "ipa": "pomato",
            "pos": "noun",
            "gloss_zh": "房间之地",
            "definition_zh": "与“房间”关联的地点、场所或容器。",
            "derived_from": "room",
            "tags": [
                "daily",
                "place",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "want",
            "headword_native": "◇þ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pome",
            "ipa": "pome",
            "pos": "verb",
            "gloss_zh": "想要",
            "definition_zh": "产生获取或实现某物的愿望。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "want__rel",
            "headword_native": "◇þ°ɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pomeli",
            "ipa": "pomeli",
            "pos": "adj",
            "gloss_zh": "可想要的",
            "definition_zh": "适合、能够或倾向于“想要”。",
            "derived_from": "want",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "want__act",
            "headword_native": "◇þ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pomema",
            "ipa": "pomema",
            "pos": "noun",
            "gloss_zh": "想要之事",
            "definition_zh": "与“想要”相关的动作、过程或事件。",
            "derived_from": "want",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "want__agent",
            "headword_native": "◠þ°ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pomeren",
            "ipa": "pomeren",
            "pos": "noun",
            "gloss_zh": "想要者",
            "definition_zh": "执行“想要”的人。",
            "derived_from": "want",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "want__result",
            "headword_native": "⟟þ°ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "pomete",
            "ipa": "pomete",
            "pos": "noun",
            "gloss_zh": "想要之成物",
            "definition_zh": "由“想要”产生、留下或完成的结果。",
            "derived_from": "want",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "door",
            "headword_native": "⌂þˍɯ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "puma",
            "ipa": "puma",
            "pos": "noun",
            "gloss_zh": "门",
            "definition_zh": "出入空间的边界部件。",
            "derived_from": null,
            "tags": [
                "daily",
                "object",
                "root"
            ]
        },
        {
            "id": "door__rel",
            "headword_native": "⌂þˍɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pumali",
            "ipa": "pumali",
            "pos": "adj",
            "gloss_zh": "门相关的",
            "definition_zh": "与“门”相关，或具有其属性。",
            "derived_from": "door",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "door__agent",
            "headword_native": "◠þˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pumaren",
            "ipa": "pumaren",
            "pos": "noun",
            "gloss_zh": "门之人",
            "definition_zh": "管理、使用、守护或代表“门”的人。",
            "derived_from": "door",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "door__field",
            "headword_native": "⌂þˍɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "pumasa",
            "ipa": "pumasa",
            "pos": "noun",
            "gloss_zh": "门群域",
            "definition_zh": "围绕“门”形成的一组事物、场域或集合。",
            "derived_from": "door",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "door__place",
            "headword_native": "⌂þˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "pumato",
            "ipa": "pumato",
            "pos": "noun",
            "gloss_zh": "门之地",
            "definition_zh": "与“门”关联的地点、场所或容器。",
            "derived_from": "door",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "need",
            "headword_native": "◇þˍɯˉ",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pume",
            "ipa": "pume",
            "pos": "verb",
            "gloss_zh": "需要",
            "definition_zh": "缺少而必须获得。",
            "derived_from": null,
            "tags": [
                "daily",
                "mind",
                "root"
            ]
        },
        {
            "id": "need__rel",
            "headword_native": "◇þˍɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "pumeli",
            "ipa": "pumeli",
            "pos": "adj",
            "gloss_zh": "可需要的",
            "definition_zh": "适合、能够或倾向于“需要”。",
            "derived_from": "need",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "need__act",
            "headword_native": "◇þˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "pumema",
            "ipa": "pumema",
            "pos": "noun",
            "gloss_zh": "需要之事",
            "definition_zh": "与“需要”相关的动作、过程或事件。",
            "derived_from": "need",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "need__agent",
            "headword_native": "◠þˍɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "pumeren",
            "ipa": "pumeren",
            "pos": "noun",
            "gloss_zh": "需要者",
            "definition_zh": "执行“需要”的人。",
            "derived_from": "need",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "need__result",
            "headword_native": "⟟þˍɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "pumete",
            "ipa": "pumete",
            "pos": "noun",
            "gloss_zh": "需要之成物",
            "definition_zh": "由“需要”产生、留下或完成的结果。",
            "derived_from": "need",
            "tags": [
                "daily",
                "mind",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "page",
            "headword_native": "⟟ɾ˘ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rama",
            "ipa": "rama",
            "pos": "noun",
            "gloss_zh": "页面",
            "definition_zh": "站点中的一个可阅读单元。",
            "derived_from": null,
            "tags": [
                "text",
                "interface",
                "root"
            ]
        },
        {
            "id": "page__rel",
            "headword_native": "⟟ɾ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "ramali",
            "ipa": "ramali",
            "pos": "adj",
            "gloss_zh": "页面相关的",
            "definition_zh": "与“页面”相关，或具有其属性。",
            "derived_from": "page",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "page__agent",
            "headword_native": "◠ɾ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-r",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "ramaren",
            "ipa": "ramaren",
            "pos": "noun",
            "gloss_zh": "页面之人",
            "definition_zh": "管理、使用、守护或代表“页面”的人。",
            "derived_from": "page",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "page__field",
            "headword_native": "⟟ɾ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "ramasa",
            "ipa": "ramasa",
            "pos": "noun",
            "gloss_zh": "页面群域",
            "definition_zh": "围绕“页面”形成的一组事物、场域或集合。",
            "derived_from": "page",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "page__place",
            "headword_native": "⌂ɾ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "ramato",
            "ipa": "ramato",
            "pos": "noun",
            "gloss_zh": "页面之地",
            "definition_zh": "与“页面”关联的地点、场所或容器。",
            "derived_from": "page",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "empty",
            "headword_native": "⌂ɾ˘ɯˉ",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "rame",
            "ipa": "rame",
            "pos": "adj",
            "gloss_zh": "空",
            "definition_zh": "内部缺少内容。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "empty__abs",
            "headword_native": "◇ɾ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "ramema",
            "ipa": "ramema",
            "pos": "noun",
            "gloss_zh": "空之性",
            "definition_zh": "“空”这一性质本身。",
            "derived_from": "empty",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "empty__become",
            "headword_native": "⌂ɾ˘ɯˉɾ˙",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "rameri",
            "ipa": "rameri",
            "pos": "verb",
            "gloss_zh": "变得空",
            "definition_zh": "进入或呈现“空”的状态。",
            "derived_from": "empty",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "empty__adv",
            "headword_native": "⌂ɾ˘ɯˉʂˉ",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "ramese",
            "ipa": "ramese",
            "pos": "adv",
            "gloss_zh": "空地",
            "definition_zh": "以“空”的方式。",
            "derived_from": "empty",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "site",
            "headword_native": "⌂ɾˉɯ˘",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rema",
            "ipa": "rema",
            "pos": "noun",
            "gloss_zh": "站点",
            "definition_zh": "由多个页面构成的网络空间。",
            "derived_from": null,
            "tags": [
                "text",
                "interface",
                "root"
            ]
        },
        {
            "id": "site__rel",
            "headword_native": "⌂ɾˉɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "remali",
            "ipa": "remali",
            "pos": "adj",
            "gloss_zh": "站点相关的",
            "definition_zh": "与“站点”相关，或具有其属性。",
            "derived_from": "site",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "site__agent",
            "headword_native": "◠ɾˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-r",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "remaren",
            "ipa": "remaren",
            "pos": "noun",
            "gloss_zh": "站点之人",
            "definition_zh": "管理、使用、守护或代表“站点”的人。",
            "derived_from": "site",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "site__field",
            "headword_native": "⌂ɾˉɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "remasa",
            "ipa": "remasa",
            "pos": "noun",
            "gloss_zh": "站点群域",
            "definition_zh": "围绕“站点”形成的一组事物、场域或集合。",
            "derived_from": "site",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "site__place",
            "headword_native": "⌂ɾˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "remato",
            "ipa": "remato",
            "pos": "noun",
            "gloss_zh": "站点之地",
            "definition_zh": "与“站点”关联的地点、场所或容器。",
            "derived_from": "site",
            "tags": [
                "text",
                "interface",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "many",
            "headword_native": "⟐ɾˉɯˉ",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "reme",
            "ipa": "reme",
            "pos": "adj",
            "gloss_zh": "多",
            "definition_zh": "数量较多。",
            "derived_from": null,
            "tags": [
                "daily",
                "quantity",
                "root"
            ]
        },
        {
            "id": "many__abs",
            "headword_native": "◇ɾˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "remema",
            "ipa": "remema",
            "pos": "noun",
            "gloss_zh": "多之性",
            "definition_zh": "“多”这一性质本身。",
            "derived_from": "many",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "many__become",
            "headword_native": "⟐ɾˉɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "remeri",
            "ipa": "remeri",
            "pos": "verb",
            "gloss_zh": "变得多",
            "definition_zh": "进入或呈现“多”的状态。",
            "derived_from": "many",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "many__adv",
            "headword_native": "⟐ɾˉɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "remese",
            "ipa": "remese",
            "pos": "adv",
            "gloss_zh": "多地",
            "definition_zh": "以“多”的方式。",
            "derived_from": "many",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "ri",
            "headword_native": "ɾ˙",
            "native_tokens": [
                "c-r",
                "v-i"
            ],
            "headword_romanized": "ri",
            "ipa": "ri",
            "pos": "part",
            "gloss_zh": "进行",
            "definition_zh": "进行体。",
            "derived_from": null,
            "tags": [
                "function",
                "aspect"
            ]
        },
        {
            "id": "entry",
            "headword_native": "⟟ɾ˙ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rima",
            "ipa": "rima",
            "pos": "noun",
            "gloss_zh": "条目",
            "definition_zh": "索引、列表或档案中的一个独立记录。",
            "derived_from": null,
            "tags": [
                "text",
                "index",
                "root"
            ]
        },
        {
            "id": "entry__rel",
            "headword_native": "⟟ɾ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "rimali",
            "ipa": "rimali",
            "pos": "adj",
            "gloss_zh": "条目相关的",
            "definition_zh": "与“条目”相关，或具有其属性。",
            "derived_from": "entry",
            "tags": [
                "text",
                "index",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "entry__agent",
            "headword_native": "◠ɾ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-r",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "rimaren",
            "ipa": "rimaren",
            "pos": "noun",
            "gloss_zh": "条目之人",
            "definition_zh": "管理、使用、守护或代表“条目”的人。",
            "derived_from": "entry",
            "tags": [
                "text",
                "index",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "entry__field",
            "headword_native": "⟟ɾ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "rimasa",
            "ipa": "rimasa",
            "pos": "noun",
            "gloss_zh": "条目群域",
            "definition_zh": "围绕“条目”形成的一组事物、场域或集合。",
            "derived_from": "entry",
            "tags": [
                "text",
                "index",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "entry__place",
            "headword_native": "⌂ɾ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "rimato",
            "ipa": "rimato",
            "pos": "noun",
            "gloss_zh": "条目之地",
            "definition_zh": "与“条目”关联的地点、场所或容器。",
            "derived_from": "entry",
            "tags": [
                "text",
                "index",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "all",
            "headword_native": "⟐ɾ˙ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "rime",
            "ipa": "rime",
            "pos": "adj",
            "gloss_zh": "全部",
            "definition_zh": "覆盖整体而不留缺漏。",
            "derived_from": null,
            "tags": [
                "daily",
                "quantity",
                "root"
            ]
        },
        {
            "id": "all__abs",
            "headword_native": "◇ɾ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rimema",
            "ipa": "rimema",
            "pos": "noun",
            "gloss_zh": "全部之性",
            "definition_zh": "“全部”这一性质本身。",
            "derived_from": "all",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "all__become",
            "headword_native": "⟐ɾ˙ɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "rimeri",
            "ipa": "rimeri",
            "pos": "verb",
            "gloss_zh": "变得全部",
            "definition_zh": "进入或呈现“全部”的状态。",
            "derived_from": "all",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "all__adv",
            "headword_native": "⟐ɾ˙ɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-r",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "rimese",
            "ipa": "rimese",
            "pos": "adv",
            "gloss_zh": "全部地",
            "definition_zh": "以“全部”的方式。",
            "derived_from": "all",
            "tags": [
                "daily",
                "quantity",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "article",
            "headword_native": "⟟ɾ°ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "roma",
            "ipa": "roma",
            "pos": "noun",
            "gloss_zh": "文章",
            "definition_zh": "较完整的书面论述或记录。",
            "derived_from": null,
            "tags": [
                "text",
                "writing",
                "root"
            ]
        },
        {
            "id": "article__rel",
            "headword_native": "⟟ɾ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "romali",
            "ipa": "romali",
            "pos": "adj",
            "gloss_zh": "文章相关的",
            "definition_zh": "与“文章”相关，或具有其属性。",
            "derived_from": "article",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "article__agent",
            "headword_native": "◠ɾ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-r",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "romaren",
            "ipa": "romaren",
            "pos": "noun",
            "gloss_zh": "文章之人",
            "definition_zh": "管理、使用、守护或代表“文章”的人。",
            "derived_from": "article",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "article__field",
            "headword_native": "⟟ɾ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "romasa",
            "ipa": "romasa",
            "pos": "noun",
            "gloss_zh": "文章群域",
            "definition_zh": "围绕“文章”形成的一组事物、场域或集合。",
            "derived_from": "article",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "article__place",
            "headword_native": "⌂ɾ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "romato",
            "ipa": "romato",
            "pos": "noun",
            "gloss_zh": "文章之地",
            "definition_zh": "与“文章”关联的地点、场所或容器。",
            "derived_from": "article",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "true",
            "headword_native": "◇ɾ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "rome",
            "ipa": "rome",
            "pos": "adj",
            "gloss_zh": "真实",
            "definition_zh": "与事实相符。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "true__abs",
            "headword_native": "◇ɾ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "romema",
            "ipa": "romema",
            "pos": "noun",
            "gloss_zh": "真实之性",
            "definition_zh": "“真实”这一性质本身。",
            "derived_from": "true",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "true__become",
            "headword_native": "◇ɾ°ɯˉɾ˙",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "romeri",
            "ipa": "romeri",
            "pos": "verb",
            "gloss_zh": "变得真实",
            "definition_zh": "进入或呈现“真实”的状态。",
            "derived_from": "true",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "true__adv",
            "headword_native": "◇ɾ°ɯˉʂˉ",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "romese",
            "ipa": "romese",
            "pos": "adv",
            "gloss_zh": "真实地",
            "definition_zh": "以“真实”的方式。",
            "derived_from": "true",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "note",
            "headword_native": "⟟ɾˍɯ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "ruma",
            "ipa": "ruma",
            "pos": "noun",
            "gloss_zh": "笔记",
            "definition_zh": "较短的记录、摘要或摘抄。",
            "derived_from": null,
            "tags": [
                "text",
                "writing",
                "root"
            ]
        },
        {
            "id": "note__rel",
            "headword_native": "⟟ɾˍɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "rumali",
            "ipa": "rumali",
            "pos": "adj",
            "gloss_zh": "笔记相关的",
            "definition_zh": "与“笔记”相关，或具有其属性。",
            "derived_from": "note",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "note__agent",
            "headword_native": "◠ɾˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-r",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "rumaren",
            "ipa": "rumaren",
            "pos": "noun",
            "gloss_zh": "笔记之人",
            "definition_zh": "管理、使用、守护或代表“笔记”的人。",
            "derived_from": "note",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "note__field",
            "headword_native": "⟟ɾˍɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-r",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "rumasa",
            "ipa": "rumasa",
            "pos": "noun",
            "gloss_zh": "笔记群域",
            "definition_zh": "围绕“笔记”形成的一组事物、场域或集合。",
            "derived_from": "note",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "note__place",
            "headword_native": "⌂ɾˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-r",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "rumato",
            "ipa": "rumato",
            "pos": "noun",
            "gloss_zh": "笔记之地",
            "definition_zh": "与“笔记”关联的地点、场所或容器。",
            "derived_from": "note",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "gentle",
            "headword_native": "∞ɾˍɯˉ",
            "native_tokens": [
                "det-bond",
                "c-r",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "rume",
            "ipa": "rume",
            "pos": "adj",
            "gloss_zh": "温和",
            "definition_zh": "动作或态度柔和不激烈。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "gentle__abs",
            "headword_native": "◇ɾˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rumema",
            "ipa": "rumema",
            "pos": "noun",
            "gloss_zh": "温和之性",
            "definition_zh": "“温和”这一性质本身。",
            "derived_from": "gentle",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "gentle__become",
            "headword_native": "∞ɾˍɯˉɾ˙",
            "native_tokens": [
                "det-bond",
                "c-r",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "rumeri",
            "ipa": "rumeri",
            "pos": "verb",
            "gloss_zh": "变得温和",
            "definition_zh": "进入或呈现“温和”的状态。",
            "derived_from": "gentle",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "gentle__adv",
            "headword_native": "∞ɾˍɯˉʂˉ",
            "native_tokens": [
                "det-bond",
                "c-r",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "rumese",
            "ipa": "rumese",
            "pos": "adv",
            "gloss_zh": "温和地",
            "definition_zh": "以“温和”的方式。",
            "derived_from": "gentle",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "sa",
            "headword_native": "ʂ˘",
            "native_tokens": [
                "c-s",
                "v-a"
            ],
            "headword_romanized": "sa",
            "ipa": "sa",
            "pos": "pron",
            "gloss_zh": "他 / 她 / 它",
            "definition_zh": "第三人称单数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "star",
            "headword_native": "◔ʂ˘ɯ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "sama",
            "ipa": "sama",
            "pos": "noun",
            "gloss_zh": "星",
            "definition_zh": "夜空中的远光。",
            "derived_from": null,
            "tags": [
                "cosmos",
                "light",
                "root"
            ]
        },
        {
            "id": "star__rel",
            "headword_native": "◔ʂ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "samali",
            "ipa": "samali",
            "pos": "adj",
            "gloss_zh": "星相关的",
            "definition_zh": "与“星”相关，或具有其属性。",
            "derived_from": "star",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "star__agent",
            "headword_native": "◠ʂ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-s",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "samaren",
            "ipa": "samaren",
            "pos": "noun",
            "gloss_zh": "星之人",
            "definition_zh": "管理、使用、守护或代表“星”的人。",
            "derived_from": "star",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "star__field",
            "headword_native": "◔ʂ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "samasa",
            "ipa": "samasa",
            "pos": "noun",
            "gloss_zh": "星群域",
            "definition_zh": "围绕“星”形成的一组事物、场域或集合。",
            "derived_from": "star",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "star__place",
            "headword_native": "⌂ʂ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-s",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "samato",
            "ipa": "samato",
            "pos": "noun",
            "gloss_zh": "星之地",
            "definition_zh": "与“星”关联的地点、场所或容器。",
            "derived_from": "star",
            "tags": [
                "cosmos",
                "light",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "small",
            "headword_native": "⟐ʂ˘ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "same",
            "ipa": "same",
            "pos": "adj",
            "gloss_zh": "小",
            "definition_zh": "尺寸、范围或重要性较小。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "small__abs",
            "headword_native": "◇ʂ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "samema",
            "ipa": "samema",
            "pos": "noun",
            "gloss_zh": "小之性",
            "definition_zh": "“小”这一性质本身。",
            "derived_from": "small",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "small__become",
            "headword_native": "⟐ʂ˘ɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "sameri",
            "ipa": "sameri",
            "pos": "verb",
            "gloss_zh": "变得小",
            "definition_zh": "进入或呈现“小”的状态。",
            "derived_from": "small",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "small__adv",
            "headword_native": "⟐ʂ˘ɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "samese",
            "ipa": "samese",
            "pos": "adv",
            "gloss_zh": "小地",
            "definition_zh": "以“小”的方式。",
            "derived_from": "small",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "sami",
            "headword_native": "ʂ˘ɯ˙",
            "native_tokens": [
                "c-s",
                "v-a",
                "c-m",
                "v-i"
            ],
            "headword_romanized": "sami",
            "ipa": "sa.mi",
            "pos": "pron",
            "gloss_zh": "他们 / 她们",
            "definition_zh": "第三人称复数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "se",
            "headword_native": "ʂˉ",
            "native_tokens": [
                "c-s",
                "v-e"
            ],
            "headword_romanized": "se",
            "ipa": "se",
            "pos": "postp",
            "gloss_zh": "和 / 用",
            "definition_zh": "共格或工具格后置词。",
            "derived_from": null,
            "tags": [
                "function",
                "comitative"
            ]
        },
        {
            "id": "day",
            "headword_native": "◔ʂˉɯ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "sema",
            "ipa": "sema",
            "pos": "noun",
            "gloss_zh": "白天",
            "definition_zh": "有光的时间段。",
            "derived_from": null,
            "tags": [
                "time",
                "daily",
                "root"
            ]
        },
        {
            "id": "day__rel",
            "headword_native": "◔ʂˉɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "semali",
            "ipa": "semali",
            "pos": "adj",
            "gloss_zh": "白天相关的",
            "definition_zh": "与“白天”相关，或具有其属性。",
            "derived_from": "day",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "day__agent",
            "headword_native": "◠ʂˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-s",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "semaren",
            "ipa": "semaren",
            "pos": "noun",
            "gloss_zh": "白天之人",
            "definition_zh": "管理、使用、守护或代表“白天”的人。",
            "derived_from": "day",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "day__field",
            "headword_native": "◔ʂˉɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "semasa",
            "ipa": "semasa",
            "pos": "noun",
            "gloss_zh": "白天群域",
            "definition_zh": "围绕“白天”形成的一组事物、场域或集合。",
            "derived_from": "day",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "day__place",
            "headword_native": "⌂ʂˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-s",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "semato",
            "ipa": "semato",
            "pos": "noun",
            "gloss_zh": "白天之地",
            "definition_zh": "与“白天”关联的地点、场所或容器。",
            "derived_from": "day",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "long",
            "headword_native": "⟐ʂˉɯˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "seme",
            "ipa": "seme",
            "pos": "adj",
            "gloss_zh": "长",
            "definition_zh": "长度或时间延续较长。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "long__abs",
            "headword_native": "◇ʂˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "semema",
            "ipa": "semema",
            "pos": "noun",
            "gloss_zh": "长之性",
            "definition_zh": "“长”这一性质本身。",
            "derived_from": "long",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "long__become",
            "headword_native": "⟐ʂˉɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "semeri",
            "ipa": "semeri",
            "pos": "verb",
            "gloss_zh": "变得长",
            "definition_zh": "进入或呈现“长”的状态。",
            "derived_from": "long",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "long__adv",
            "headword_native": "⟐ʂˉɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "semese",
            "ipa": "semese",
            "pos": "adv",
            "gloss_zh": "长地",
            "definition_zh": "以“长”的方式。",
            "derived_from": "long",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "year",
            "headword_native": "◔ʃ˘ɯ˘",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shama",
            "ipa": "shama",
            "pos": "noun",
            "gloss_zh": "年",
            "definition_zh": "较长的时间单位。",
            "derived_from": null,
            "tags": [
                "time",
                "measure",
                "root"
            ]
        },
        {
            "id": "year__rel",
            "headword_native": "◔ʃ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "shamali",
            "ipa": "shamali",
            "pos": "adj",
            "gloss_zh": "年相关的",
            "definition_zh": "与“年”相关，或具有其属性。",
            "derived_from": "year",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "year__agent",
            "headword_native": "◠ʃ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-sh",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "shamaren",
            "ipa": "shamaren",
            "pos": "noun",
            "gloss_zh": "年之人",
            "definition_zh": "管理、使用、守护或代表“年”的人。",
            "derived_from": "year",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "year__field",
            "headword_native": "◔ʃ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "shamasa",
            "ipa": "shamasa",
            "pos": "noun",
            "gloss_zh": "年群域",
            "definition_zh": "围绕“年”形成的一组事物、场域或集合。",
            "derived_from": "year",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "year__place",
            "headword_native": "⌂ʃ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "shamato",
            "ipa": "shamato",
            "pos": "noun",
            "gloss_zh": "年之地",
            "definition_zh": "与“年”关联的地点、场所或容器。",
            "derived_from": "year",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "warm",
            "headword_native": "◔ʃ˘ɯˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shame",
            "ipa": "shame",
            "pos": "adj",
            "gloss_zh": "温暖",
            "definition_zh": "带有舒适热度。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "warm__abs",
            "headword_native": "◇ʃ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shamema",
            "ipa": "shamema",
            "pos": "noun",
            "gloss_zh": "温暖之性",
            "definition_zh": "“温暖”这一性质本身。",
            "derived_from": "warm",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "warm__become",
            "headword_native": "◔ʃ˘ɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "shameri",
            "ipa": "shameri",
            "pos": "verb",
            "gloss_zh": "变得温暖",
            "definition_zh": "进入或呈现“温暖”的状态。",
            "derived_from": "warm",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "warm__adv",
            "headword_native": "◔ʃ˘ɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "shamese",
            "ipa": "shamese",
            "pos": "adv",
            "gloss_zh": "温暖地",
            "definition_zh": "以“温暖”的方式。",
            "derived_from": "warm",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "month",
            "headword_native": "◔ʃˉɯ˘",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shema",
            "ipa": "shema",
            "pos": "noun",
            "gloss_zh": "月度",
            "definition_zh": "以月亮周期或历法为基准的时间单位。",
            "derived_from": null,
            "tags": [
                "time",
                "measure",
                "root"
            ]
        },
        {
            "id": "month__rel",
            "headword_native": "◔ʃˉɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "shemali",
            "ipa": "shemali",
            "pos": "adj",
            "gloss_zh": "月度相关的",
            "definition_zh": "与“月度”相关，或具有其属性。",
            "derived_from": "month",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "month__agent",
            "headword_native": "◠ʃˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-sh",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "shemaren",
            "ipa": "shemaren",
            "pos": "noun",
            "gloss_zh": "月度之人",
            "definition_zh": "管理、使用、守护或代表“月度”的人。",
            "derived_from": "month",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "month__field",
            "headword_native": "◔ʃˉɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "shemasa",
            "ipa": "shemasa",
            "pos": "noun",
            "gloss_zh": "月度群域",
            "definition_zh": "围绕“月度”形成的一组事物、场域或集合。",
            "derived_from": "month",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "month__place",
            "headword_native": "⌂ʃˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "shemato",
            "ipa": "shemato",
            "pos": "noun",
            "gloss_zh": "月度之地",
            "definition_zh": "与“月度”关联的地点、场所或容器。",
            "derived_from": "month",
            "tags": [
                "time",
                "measure",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "cold",
            "headword_native": "≈ʃˉɯˉ",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sheme",
            "ipa": "sheme",
            "pos": "adj",
            "gloss_zh": "寒冷",
            "definition_zh": "热度偏低。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "cold__abs",
            "headword_native": "◇ʃˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shemema",
            "ipa": "shemema",
            "pos": "noun",
            "gloss_zh": "寒冷之性",
            "definition_zh": "“寒冷”这一性质本身。",
            "derived_from": "cold",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "cold__become",
            "headword_native": "≈ʃˉɯˉɾ˙",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "shemeri",
            "ipa": "shemeri",
            "pos": "verb",
            "gloss_zh": "变得寒冷",
            "definition_zh": "进入或呈现“寒冷”的状态。",
            "derived_from": "cold",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "cold__adv",
            "headword_native": "≈ʃˉɯˉʂˉ",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "shemese",
            "ipa": "shemese",
            "pos": "adv",
            "gloss_zh": "寒冷地",
            "definition_zh": "以“寒冷”的方式。",
            "derived_from": "cold",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "water",
            "headword_native": "≈ʃ˙ɯ˘",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shima",
            "ipa": "shima",
            "pos": "noun",
            "gloss_zh": "水",
            "definition_zh": "最基础的饮用液体。",
            "derived_from": null,
            "tags": [
                "daily",
                "nature",
                "root"
            ]
        },
        {
            "id": "water__rel",
            "headword_native": "≈ʃ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "shimali",
            "ipa": "shimali",
            "pos": "adj",
            "gloss_zh": "水相关的",
            "definition_zh": "与“水”相关，或具有其属性。",
            "derived_from": "water",
            "tags": [
                "daily",
                "nature",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "water__agent",
            "headword_native": "◠ʃ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-sh",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "shimaren",
            "ipa": "shimaren",
            "pos": "noun",
            "gloss_zh": "水之人",
            "definition_zh": "管理、使用、守护或代表“水”的人。",
            "derived_from": "water",
            "tags": [
                "daily",
                "nature",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "water__field",
            "headword_native": "≈ʃ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "shimasa",
            "ipa": "shimasa",
            "pos": "noun",
            "gloss_zh": "水群域",
            "definition_zh": "围绕“水”形成的一组事物、场域或集合。",
            "derived_from": "water",
            "tags": [
                "daily",
                "nature",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "water__place",
            "headword_native": "⌂ʃ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "shimato",
            "ipa": "shimato",
            "pos": "noun",
            "gloss_zh": "水之地",
            "definition_zh": "与“水”关联的地点、场所或容器。",
            "derived_from": "water",
            "tags": [
                "daily",
                "nature",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "new",
            "headword_native": "◔ʃ˙ɯˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shime",
            "ipa": "shime",
            "pos": "adj",
            "gloss_zh": "新的",
            "definition_zh": "刚出现或刚得到。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "new__abs",
            "headword_native": "◇ʃ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shimema",
            "ipa": "shimema",
            "pos": "noun",
            "gloss_zh": "新的之性",
            "definition_zh": "“新的”这一性质本身。",
            "derived_from": "new",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "new__become",
            "headword_native": "◔ʃ˙ɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "shimeri",
            "ipa": "shimeri",
            "pos": "verb",
            "gloss_zh": "变得新的",
            "definition_zh": "进入或呈现“新的”的状态。",
            "derived_from": "new",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "new__adv",
            "headword_native": "◔ʃ˙ɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "shimese",
            "ipa": "shimese",
            "pos": "adv",
            "gloss_zh": "新的地",
            "definition_zh": "以“新的”的方式。",
            "derived_from": "new",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "rain",
            "headword_native": "≈ʃ°ɯ˘",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shoma",
            "ipa": "shoma",
            "pos": "noun",
            "gloss_zh": "雨",
            "definition_zh": "从天空落下的水。",
            "derived_from": null,
            "tags": [
                "nature",
                "weather",
                "root"
            ]
        },
        {
            "id": "rain__rel",
            "headword_native": "≈ʃ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "shomali",
            "ipa": "shomali",
            "pos": "adj",
            "gloss_zh": "雨相关的",
            "definition_zh": "与“雨”相关，或具有其属性。",
            "derived_from": "rain",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "rain__agent",
            "headword_native": "◠ʃ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-sh",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "shomaren",
            "ipa": "shomaren",
            "pos": "noun",
            "gloss_zh": "雨之人",
            "definition_zh": "管理、使用、守护或代表“雨”的人。",
            "derived_from": "rain",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "rain__field",
            "headword_native": "≈ʃ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "shomasa",
            "ipa": "shomasa",
            "pos": "noun",
            "gloss_zh": "雨群域",
            "definition_zh": "围绕“雨”形成的一组事物、场域或集合。",
            "derived_from": "rain",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "rain__place",
            "headword_native": "⌂ʃ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "shomato",
            "ipa": "shomato",
            "pos": "noun",
            "gloss_zh": "雨之地",
            "definition_zh": "与“雨”关联的地点、场所或容器。",
            "derived_from": "rain",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "old",
            "headword_native": "◔ʃ°ɯˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shome",
            "ipa": "shome",
            "pos": "adj",
            "gloss_zh": "旧的",
            "definition_zh": "存在较久或使用较久。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "old__abs",
            "headword_native": "◇ʃ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shomema",
            "ipa": "shomema",
            "pos": "noun",
            "gloss_zh": "旧的之性",
            "definition_zh": "“旧的”这一性质本身。",
            "derived_from": "old",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "old__become",
            "headword_native": "◔ʃ°ɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "shomeri",
            "ipa": "shomeri",
            "pos": "verb",
            "gloss_zh": "变得旧的",
            "definition_zh": "进入或呈现“旧的”的状态。",
            "derived_from": "old",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "old__adv",
            "headword_native": "◔ʃ°ɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-sh",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "shomese",
            "ipa": "shomese",
            "pos": "adv",
            "gloss_zh": "旧的地",
            "definition_zh": "以“旧的”的方式。",
            "derived_from": "old",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "wind",
            "headword_native": "◡ʃˍɯ˘",
            "native_tokens": [
                "det-speech",
                "c-sh",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shuma",
            "ipa": "shuma",
            "pos": "noun",
            "gloss_zh": "风",
            "definition_zh": "流动的空气。",
            "derived_from": null,
            "tags": [
                "nature",
                "weather",
                "root"
            ]
        },
        {
            "id": "wind__rel",
            "headword_native": "◡ʃˍɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-sh",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "shumali",
            "ipa": "shumali",
            "pos": "adj",
            "gloss_zh": "风相关的",
            "definition_zh": "与“风”相关，或具有其属性。",
            "derived_from": "wind",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "wind__agent",
            "headword_native": "◠ʃˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-sh",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "shumaren",
            "ipa": "shumaren",
            "pos": "noun",
            "gloss_zh": "风之人",
            "definition_zh": "管理、使用、守护或代表“风”的人。",
            "derived_from": "wind",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "wind__field",
            "headword_native": "◡ʃˍɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-sh",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "shumasa",
            "ipa": "shumasa",
            "pos": "noun",
            "gloss_zh": "风群域",
            "definition_zh": "围绕“风”形成的一组事物、场域或集合。",
            "derived_from": "wind",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "wind__place",
            "headword_native": "⌂ʃˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "shumato",
            "ipa": "shumato",
            "pos": "noun",
            "gloss_zh": "风之地",
            "definition_zh": "与“风”关联的地点、场所或容器。",
            "derived_from": "wind",
            "tags": [
                "nature",
                "weather",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "near",
            "headword_native": "⌁ʃˍɯˉ",
            "native_tokens": [
                "det-motion",
                "c-sh",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shume",
            "ipa": "shume",
            "pos": "adj",
            "gloss_zh": "近",
            "definition_zh": "距离较小。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "near__abs",
            "headword_native": "◇ʃˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "shumema",
            "ipa": "shumema",
            "pos": "noun",
            "gloss_zh": "近之性",
            "definition_zh": "“近”这一性质本身。",
            "derived_from": "near",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "near__become",
            "headword_native": "⌁ʃˍɯˉɾ˙",
            "native_tokens": [
                "det-motion",
                "c-sh",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "shumeri",
            "ipa": "shumeri",
            "pos": "verb",
            "gloss_zh": "变得近",
            "definition_zh": "进入或呈现“近”的状态。",
            "derived_from": "near",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "near__adv",
            "headword_native": "⌁ʃˍɯˉʂˉ",
            "native_tokens": [
                "det-motion",
                "c-sh",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "shumese",
            "ipa": "shumese",
            "pos": "adv",
            "gloss_zh": "近地",
            "definition_zh": "以“近”的方式。",
            "derived_from": "near",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "si",
            "headword_native": "ʂ˙",
            "native_tokens": [
                "c-s",
                "v-i"
            ],
            "headword_romanized": "si",
            "ipa": "si",
            "pos": "cop",
            "gloss_zh": "是 / 在 / 存在",
            "definition_zh": "系词与存在词。",
            "derived_from": null,
            "tags": [
                "function",
                "copula"
            ]
        },
        {
            "id": "night",
            "headword_native": "◔ʂ˙ɯ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "sima",
            "ipa": "sima",
            "pos": "noun",
            "gloss_zh": "夜晚",
            "definition_zh": "黑暗的时间段。",
            "derived_from": null,
            "tags": [
                "time",
                "daily",
                "root"
            ]
        },
        {
            "id": "night__rel",
            "headword_native": "◔ʂ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "simali",
            "ipa": "simali",
            "pos": "adj",
            "gloss_zh": "夜晚相关的",
            "definition_zh": "与“夜晚”相关，或具有其属性。",
            "derived_from": "night",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "night__agent",
            "headword_native": "◠ʂ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-s",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "simaren",
            "ipa": "simaren",
            "pos": "noun",
            "gloss_zh": "夜晚之人",
            "definition_zh": "管理、使用、守护或代表“夜晚”的人。",
            "derived_from": "night",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "night__field",
            "headword_native": "◔ʂ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "simasa",
            "ipa": "simasa",
            "pos": "noun",
            "gloss_zh": "夜晚群域",
            "definition_zh": "围绕“夜晚”形成的一组事物、场域或集合。",
            "derived_from": "night",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "night__place",
            "headword_native": "⌂ʂ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-s",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "simato",
            "ipa": "simato",
            "pos": "noun",
            "gloss_zh": "夜晚之地",
            "definition_zh": "与“夜晚”关联的地点、场所或容器。",
            "derived_from": "night",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "short",
            "headword_native": "⟐ʂ˙ɯˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sime",
            "ipa": "sime",
            "pos": "adj",
            "gloss_zh": "短",
            "definition_zh": "长度或时间延续较短。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "short__abs",
            "headword_native": "◇ʂ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "simema",
            "ipa": "simema",
            "pos": "noun",
            "gloss_zh": "短之性",
            "definition_zh": "“短”这一性质本身。",
            "derived_from": "short",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "short__become",
            "headword_native": "⟐ʂ˙ɯˉɾ˙",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "simeri",
            "ipa": "simeri",
            "pos": "verb",
            "gloss_zh": "变得短",
            "definition_zh": "进入或呈现“短”的状态。",
            "derived_from": "short",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "short__adv",
            "headword_native": "⟐ʂ˙ɯˉʂˉ",
            "native_tokens": [
                "det-mark",
                "c-s",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "simese",
            "ipa": "simese",
            "pos": "adv",
            "gloss_zh": "短地",
            "definition_zh": "以“短”的方式。",
            "derived_from": "short",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "morning",
            "headword_native": "◔ʂ°ɯ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "soma",
            "ipa": "soma",
            "pos": "noun",
            "gloss_zh": "清晨",
            "definition_zh": "一天开始较早的时段。",
            "derived_from": null,
            "tags": [
                "time",
                "daily",
                "root"
            ]
        },
        {
            "id": "morning__rel",
            "headword_native": "◔ʂ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "somali",
            "ipa": "somali",
            "pos": "adj",
            "gloss_zh": "清晨相关的",
            "definition_zh": "与“清晨”相关，或具有其属性。",
            "derived_from": "morning",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "morning__agent",
            "headword_native": "◠ʂ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-s",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "somaren",
            "ipa": "somaren",
            "pos": "noun",
            "gloss_zh": "清晨之人",
            "definition_zh": "管理、使用、守护或代表“清晨”的人。",
            "derived_from": "morning",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "morning__field",
            "headword_native": "◔ʂ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "somasa",
            "ipa": "somasa",
            "pos": "noun",
            "gloss_zh": "清晨群域",
            "definition_zh": "围绕“清晨”形成的一组事物、场域或集合。",
            "derived_from": "morning",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "morning__place",
            "headword_native": "⌂ʂ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-s",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "somato",
            "ipa": "somato",
            "pos": "noun",
            "gloss_zh": "清晨之地",
            "definition_zh": "与“清晨”关联的地点、场所或容器。",
            "derived_from": "morning",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "bright",
            "headword_native": "◔ʂ°ɯˉ",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "some",
            "ipa": "some",
            "pos": "adj",
            "gloss_zh": "明亮",
            "definition_zh": "带有较多光。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "bright__abs",
            "headword_native": "◇ʂ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "somema",
            "ipa": "somema",
            "pos": "noun",
            "gloss_zh": "明亮之性",
            "definition_zh": "“明亮”这一性质本身。",
            "derived_from": "bright",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "bright__become",
            "headword_native": "◔ʂ°ɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "someri",
            "ipa": "someri",
            "pos": "verb",
            "gloss_zh": "变得明亮",
            "definition_zh": "进入或呈现“明亮”的状态。",
            "derived_from": "bright",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "bright__adv",
            "headword_native": "◔ʂ°ɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "somese",
            "ipa": "somese",
            "pos": "adv",
            "gloss_zh": "明亮地",
            "definition_zh": "以“明亮”的方式。",
            "derived_from": "bright",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "evening",
            "headword_native": "◔ʂˍɯ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "suma",
            "ipa": "suma",
            "pos": "noun",
            "gloss_zh": "傍晚",
            "definition_zh": "白昼结束前后的时段。",
            "derived_from": null,
            "tags": [
                "time",
                "daily",
                "root"
            ]
        },
        {
            "id": "evening__rel",
            "headword_native": "◔ʂˍɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "sumali",
            "ipa": "sumali",
            "pos": "adj",
            "gloss_zh": "傍晚相关的",
            "definition_zh": "与“傍晚”相关，或具有其属性。",
            "derived_from": "evening",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "evening__agent",
            "headword_native": "◠ʂˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-s",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "sumaren",
            "ipa": "sumaren",
            "pos": "noun",
            "gloss_zh": "傍晚之人",
            "definition_zh": "管理、使用、守护或代表“傍晚”的人。",
            "derived_from": "evening",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "evening__field",
            "headword_native": "◔ʂˍɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "sumasa",
            "ipa": "sumasa",
            "pos": "noun",
            "gloss_zh": "傍晚群域",
            "definition_zh": "围绕“傍晚”形成的一组事物、场域或集合。",
            "derived_from": "evening",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "evening__place",
            "headword_native": "⌂ʂˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-s",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "sumato",
            "ipa": "sumato",
            "pos": "noun",
            "gloss_zh": "傍晚之地",
            "definition_zh": "与“傍晚”关联的地点、场所或容器。",
            "derived_from": "evening",
            "tags": [
                "time",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "dark",
            "headword_native": "◔ʂˍɯˉ",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sume",
            "ipa": "sume",
            "pos": "adj",
            "gloss_zh": "昏暗",
            "definition_zh": "光线不足。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "dark__abs",
            "headword_native": "◇ʂˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "sumema",
            "ipa": "sumema",
            "pos": "noun",
            "gloss_zh": "昏暗之性",
            "definition_zh": "“昏暗”这一性质本身。",
            "derived_from": "dark",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "dark__become",
            "headword_native": "◔ʂˍɯˉɾ˙",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "sumeri",
            "ipa": "sumeri",
            "pos": "verb",
            "gloss_zh": "变得昏暗",
            "definition_zh": "进入或呈现“昏暗”的状态。",
            "derived_from": "dark",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "dark__adv",
            "headword_native": "◔ʂˍɯˉʂˉ",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "sumese",
            "ipa": "sumese",
            "pos": "adv",
            "gloss_zh": "昏暗地",
            "definition_zh": "以“昏暗”的方式。",
            "derived_from": "dark",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "road",
            "headword_native": "⌁ŧ˘ɯ˘",
            "native_tokens": [
                "det-motion",
                "c-t",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tama",
            "ipa": "tama",
            "pos": "noun",
            "gloss_zh": "道路",
            "definition_zh": "供人通行的路径。",
            "derived_from": null,
            "tags": [
                "daily",
                "path",
                "root"
            ]
        },
        {
            "id": "road__rel",
            "headword_native": "⌁ŧ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-motion",
                "c-t",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tamali",
            "ipa": "tamali",
            "pos": "adj",
            "gloss_zh": "道路相关的",
            "definition_zh": "与“道路”相关，或具有其属性。",
            "derived_from": "road",
            "tags": [
                "daily",
                "path",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "road__agent",
            "headword_native": "◠ŧ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tamaren",
            "ipa": "tamaren",
            "pos": "noun",
            "gloss_zh": "道路之人",
            "definition_zh": "管理、使用、守护或代表“道路”的人。",
            "derived_from": "road",
            "tags": [
                "daily",
                "path",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "road__field",
            "headword_native": "⌁ŧ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-motion",
                "c-t",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "tamasa",
            "ipa": "tamasa",
            "pos": "noun",
            "gloss_zh": "道路群域",
            "definition_zh": "围绕“道路”形成的一组事物、场域或集合。",
            "derived_from": "road",
            "tags": [
                "daily",
                "path",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "road__place",
            "headword_native": "⌂ŧ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "tamato",
            "ipa": "tamato",
            "pos": "noun",
            "gloss_zh": "道路之地",
            "definition_zh": "与“道路”关联的地点、场所或容器。",
            "derived_from": "road",
            "tags": [
                "daily",
                "path",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "like",
            "headword_native": "∞ŧ˘ɯˉ",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tame",
            "ipa": "tame",
            "pos": "verb",
            "gloss_zh": "喜欢",
            "definition_zh": "对某物有正面的偏好。",
            "derived_from": null,
            "tags": [
                "daily",
                "emotion",
                "root"
            ]
        },
        {
            "id": "like__rel",
            "headword_native": "∞ŧ˘ɯˉɭ˙",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tameli",
            "ipa": "tameli",
            "pos": "adj",
            "gloss_zh": "可喜欢的",
            "definition_zh": "适合、能够或倾向于“喜欢”。",
            "derived_from": "like",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "like__act",
            "headword_native": "◇ŧ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tamema",
            "ipa": "tamema",
            "pos": "noun",
            "gloss_zh": "喜欢之事",
            "definition_zh": "与“喜欢”相关的动作、过程或事件。",
            "derived_from": "like",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "like__agent",
            "headword_native": "◠ŧ˘ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tameren",
            "ipa": "tameren",
            "pos": "noun",
            "gloss_zh": "喜欢者",
            "definition_zh": "执行“喜欢”的人。",
            "derived_from": "like",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "like__result",
            "headword_native": "⟟ŧ˘ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "tamete",
            "ipa": "tamete",
            "pos": "noun",
            "gloss_zh": "喜欢之成物",
            "definition_zh": "由“喜欢”产生、留下或完成的结果。",
            "derived_from": "like",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "tami",
            "headword_native": "ŧ˘ɯ˙",
            "native_tokens": [
                "c-t",
                "v-a",
                "c-m",
                "v-i"
            ],
            "headword_romanized": "tami",
            "ipa": "ta.mi",
            "pos": "pron",
            "gloss_zh": "你们",
            "definition_zh": "第二人称复数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "town",
            "headword_native": "⌂ŧˉɯ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tema",
            "ipa": "tema",
            "pos": "noun",
            "gloss_zh": "城镇",
            "definition_zh": "较大的定居点。",
            "derived_from": null,
            "tags": [
                "daily",
                "settlement",
                "root"
            ]
        },
        {
            "id": "town__rel",
            "headword_native": "⌂ŧˉɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "temali",
            "ipa": "temali",
            "pos": "adj",
            "gloss_zh": "城镇相关的",
            "definition_zh": "与“城镇”相关，或具有其属性。",
            "derived_from": "town",
            "tags": [
                "daily",
                "settlement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "town__agent",
            "headword_native": "◠ŧˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "temaren",
            "ipa": "temaren",
            "pos": "noun",
            "gloss_zh": "城镇之人",
            "definition_zh": "管理、使用、守护或代表“城镇”的人。",
            "derived_from": "town",
            "tags": [
                "daily",
                "settlement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "town__field",
            "headword_native": "⌂ŧˉɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "temasa",
            "ipa": "temasa",
            "pos": "noun",
            "gloss_zh": "城镇群域",
            "definition_zh": "围绕“城镇”形成的一组事物、场域或集合。",
            "derived_from": "town",
            "tags": [
                "daily",
                "settlement",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "town__place",
            "headword_native": "⌂ŧˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "temato",
            "ipa": "temato",
            "pos": "noun",
            "gloss_zh": "城镇之地",
            "definition_zh": "与“城镇”关联的地点、场所或容器。",
            "derived_from": "town",
            "tags": [
                "daily",
                "settlement",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "love",
            "headword_native": "∞ŧˉɯˉ",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "teme",
            "ipa": "teme",
            "pos": "verb",
            "gloss_zh": "爱",
            "definition_zh": "对某人或某事有深厚情感。",
            "derived_from": null,
            "tags": [
                "daily",
                "emotion",
                "root"
            ]
        },
        {
            "id": "love__rel",
            "headword_native": "∞ŧˉɯˉɭ˙",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "temeli",
            "ipa": "temeli",
            "pos": "adj",
            "gloss_zh": "可爱的",
            "definition_zh": "适合、能够或倾向于“爱”。",
            "derived_from": "love",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "love__act",
            "headword_native": "◇ŧˉɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "temema",
            "ipa": "temema",
            "pos": "noun",
            "gloss_zh": "爱之事",
            "definition_zh": "与“爱”相关的动作、过程或事件。",
            "derived_from": "love",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "love__agent",
            "headword_native": "◠ŧˉɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "temeren",
            "ipa": "temeren",
            "pos": "noun",
            "gloss_zh": "爱者",
            "definition_zh": "执行“爱”的人。",
            "derived_from": "love",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "love__result",
            "headword_native": "⟟ŧˉɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "temete",
            "ipa": "temete",
            "pos": "noun",
            "gloss_zh": "爱之成物",
            "definition_zh": "由“爱”产生、留下或完成的结果。",
            "derived_from": "love",
            "tags": [
                "daily",
                "emotion",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ti",
            "headword_native": "ŧ˙",
            "native_tokens": [
                "c-t",
                "v-i"
            ],
            "headword_romanized": "ti",
            "ipa": "ti",
            "pos": "pron",
            "gloss_zh": "你",
            "definition_zh": "第二人称单数。",
            "derived_from": null,
            "tags": [
                "function",
                "pronoun"
            ]
        },
        {
            "id": "market",
            "headword_native": "∞ŧ˙ɯ˘",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tima",
            "ipa": "tima",
            "pos": "noun",
            "gloss_zh": "集市",
            "definition_zh": "交易与交换发生的地方。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "market__rel",
            "headword_native": "∞ŧ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "timali",
            "ipa": "timali",
            "pos": "adj",
            "gloss_zh": "集市相关的",
            "definition_zh": "与“集市”相关，或具有其属性。",
            "derived_from": "market",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "market__agent",
            "headword_native": "◠ŧ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "timaren",
            "ipa": "timaren",
            "pos": "noun",
            "gloss_zh": "集市之人",
            "definition_zh": "管理、使用、守护或代表“集市”的人。",
            "derived_from": "market",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "market__field",
            "headword_native": "∞ŧ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "timasa",
            "ipa": "timasa",
            "pos": "noun",
            "gloss_zh": "集市群域",
            "definition_zh": "围绕“集市”形成的一组事物、场域或集合。",
            "derived_from": "market",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "market__place",
            "headword_native": "⌂ŧ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "timato",
            "ipa": "timato",
            "pos": "noun",
            "gloss_zh": "集市之地",
            "definition_zh": "与“集市”关联的地点、场所或容器。",
            "derived_from": "market",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "help",
            "headword_native": "∞ŧ˙ɯˉ",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "time",
            "ipa": "time",
            "pos": "verb",
            "gloss_zh": "帮助",
            "definition_zh": "使他人更容易完成某事。",
            "derived_from": null,
            "tags": [
                "daily",
                "social",
                "root"
            ]
        },
        {
            "id": "help__rel",
            "headword_native": "∞ŧ˙ɯˉɭ˙",
            "native_tokens": [
                "det-bond",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "timeli",
            "ipa": "timeli",
            "pos": "adj",
            "gloss_zh": "可帮助的",
            "definition_zh": "适合、能够或倾向于“帮助”。",
            "derived_from": "help",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "help__act",
            "headword_native": "◇ŧ˙ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "timema",
            "ipa": "timema",
            "pos": "noun",
            "gloss_zh": "帮助之事",
            "definition_zh": "与“帮助”相关的动作、过程或事件。",
            "derived_from": "help",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "help__agent",
            "headword_native": "◠ŧ˙ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "timeren",
            "ipa": "timeren",
            "pos": "noun",
            "gloss_zh": "帮助者",
            "definition_zh": "执行“帮助”的人。",
            "derived_from": "help",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "help__result",
            "headword_native": "⟟ŧ˙ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "timete",
            "ipa": "timete",
            "pos": "noun",
            "gloss_zh": "帮助之成物",
            "definition_zh": "由“帮助”产生、留下或完成的结果。",
            "derived_from": "help",
            "tags": [
                "daily",
                "social",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "to",
            "headword_native": "ŧ°",
            "native_tokens": [
                "c-t",
                "v-o"
            ],
            "headword_romanized": "to",
            "ipa": "to",
            "pos": "det",
            "gloss_zh": "那",
            "definition_zh": "远指。",
            "derived_from": null,
            "tags": [
                "function",
                "demonstrative"
            ]
        },
        {
            "id": "school",
            "headword_native": "⌂ŧ°ɯ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "toma",
            "ipa": "toma",
            "pos": "noun",
            "gloss_zh": "学校",
            "definition_zh": "学习和教授的场所。",
            "derived_from": null,
            "tags": [
                "education",
                "place",
                "root"
            ]
        },
        {
            "id": "school__rel",
            "headword_native": "⌂ŧ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tomali",
            "ipa": "tomali",
            "pos": "adj",
            "gloss_zh": "学校相关的",
            "definition_zh": "与“学校”相关，或具有其属性。",
            "derived_from": "school",
            "tags": [
                "education",
                "place",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "school__agent",
            "headword_native": "◠ŧ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tomaren",
            "ipa": "tomaren",
            "pos": "noun",
            "gloss_zh": "学校之人",
            "definition_zh": "管理、使用、守护或代表“学校”的人。",
            "derived_from": "school",
            "tags": [
                "education",
                "place",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "school__field",
            "headword_native": "⌂ŧ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "tomasa",
            "ipa": "tomasa",
            "pos": "noun",
            "gloss_zh": "学校群域",
            "definition_zh": "围绕“学校”形成的一组事物、场域或集合。",
            "derived_from": "school",
            "tags": [
                "education",
                "place",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "school__place",
            "headword_native": "⌂ŧ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "tomato",
            "ipa": "tomato",
            "pos": "noun",
            "gloss_zh": "学校之地",
            "definition_zh": "与“学校”关联的地点、场所或容器。",
            "derived_from": "school",
            "tags": [
                "education",
                "place",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "find",
            "headword_native": "◇ŧ°ɯˉ",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tome",
            "ipa": "tome",
            "pos": "verb",
            "gloss_zh": "找到",
            "definition_zh": "经过寻找而得见。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "find__rel",
            "headword_native": "◇ŧ°ɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tomeli",
            "ipa": "tomeli",
            "pos": "adj",
            "gloss_zh": "可找到的",
            "definition_zh": "适合、能够或倾向于“找到”。",
            "derived_from": "find",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "find__act",
            "headword_native": "◇ŧ°ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tomema",
            "ipa": "tomema",
            "pos": "noun",
            "gloss_zh": "找到之事",
            "definition_zh": "与“找到”相关的动作、过程或事件。",
            "derived_from": "find",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "find__agent",
            "headword_native": "◠ŧ°ɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tomeren",
            "ipa": "tomeren",
            "pos": "noun",
            "gloss_zh": "找到者",
            "definition_zh": "执行“找到”的人。",
            "derived_from": "find",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "find__result",
            "headword_native": "⟟ŧ°ɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "tomete",
            "ipa": "tomete",
            "pos": "noun",
            "gloss_zh": "找到之成物",
            "definition_zh": "由“找到”产生、留下或完成的结果。",
            "derived_from": "find",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "field",
            "headword_native": "⌂ŧˍɯ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tuma",
            "ipa": "tuma",
            "pos": "noun",
            "gloss_zh": "田地",
            "definition_zh": "耕种或开阔的地面。",
            "derived_from": null,
            "tags": [
                "nature",
                "daily",
                "root"
            ]
        },
        {
            "id": "field__rel",
            "headword_native": "⌂ŧˍɯ˘ɭ˙",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tumali",
            "ipa": "tumali",
            "pos": "adj",
            "gloss_zh": "田地相关的",
            "definition_zh": "与“田地”相关，或具有其属性。",
            "derived_from": "field",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "field__agent",
            "headword_native": "◠ŧˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tumaren",
            "ipa": "tumaren",
            "pos": "noun",
            "gloss_zh": "田地之人",
            "definition_zh": "管理、使用、守护或代表“田地”的人。",
            "derived_from": "field",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "field__field",
            "headword_native": "⌂ŧˍɯ˘ʂ˘",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "tumasa",
            "ipa": "tumasa",
            "pos": "noun",
            "gloss_zh": "田地群域",
            "definition_zh": "围绕“田地”形成的一组事物、场域或集合。",
            "derived_from": "field",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "field__place",
            "headword_native": "⌂ŧˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-t",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "tumato",
            "ipa": "tumato",
            "pos": "noun",
            "gloss_zh": "田地之地",
            "definition_zh": "与“田地”关联的地点、场所或容器。",
            "derived_from": "field",
            "tags": [
                "nature",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "lose",
            "headword_native": "◇ŧˍɯˉ",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tume",
            "ipa": "tume",
            "pos": "verb",
            "gloss_zh": "失去",
            "definition_zh": "不再持有或不再知道去向。",
            "derived_from": null,
            "tags": [
                "daily",
                "action",
                "root"
            ]
        },
        {
            "id": "lose__rel",
            "headword_native": "◇ŧˍɯˉɭ˙",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "tumeli",
            "ipa": "tumeli",
            "pos": "adj",
            "gloss_zh": "可失去的",
            "definition_zh": "适合、能够或倾向于“失去”。",
            "derived_from": "lose",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "lose__act",
            "headword_native": "◇ŧˍɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "tumema",
            "ipa": "tumema",
            "pos": "noun",
            "gloss_zh": "失去之事",
            "definition_zh": "与“失去”相关的动作、过程或事件。",
            "derived_from": "lose",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "lose__agent",
            "headword_native": "◠ŧˍɯˉɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "tumeren",
            "ipa": "tumeren",
            "pos": "noun",
            "gloss_zh": "失去者",
            "definition_zh": "执行“失去”的人。",
            "derived_from": "lose",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "lose__result",
            "headword_native": "⟟ŧˍɯˉŧˉ",
            "native_tokens": [
                "det-craft",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "tumete",
            "ipa": "tumete",
            "pos": "noun",
            "gloss_zh": "失去之成物",
            "definition_zh": "由“失去”产生、留下或完成的结果。",
            "derived_from": "lose",
            "tags": [
                "daily",
                "action",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "poem",
            "headword_native": "◡ʋ˘ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vama",
            "ipa": "vama",
            "pos": "noun",
            "gloss_zh": "诗文",
            "definition_zh": "重视节奏、修辞或文体的篇章。",
            "derived_from": null,
            "tags": [
                "text",
                "writing",
                "root"
            ]
        },
        {
            "id": "poem__rel",
            "headword_native": "◡ʋ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "vamali",
            "ipa": "vamali",
            "pos": "adj",
            "gloss_zh": "诗文相关的",
            "definition_zh": "与“诗文”相关，或具有其属性。",
            "derived_from": "poem",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "poem__agent",
            "headword_native": "◠ʋ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "vamaren",
            "ipa": "vamaren",
            "pos": "noun",
            "gloss_zh": "诗文之人",
            "definition_zh": "管理、使用、守护或代表“诗文”的人。",
            "derived_from": "poem",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "poem__field",
            "headword_native": "◡ʋ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "vamasa",
            "ipa": "vamasa",
            "pos": "noun",
            "gloss_zh": "诗文群域",
            "definition_zh": "围绕“诗文”形成的一组事物、场域或集合。",
            "derived_from": "poem",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "poem__place",
            "headword_native": "⌂ʋ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-v",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "vamato",
            "ipa": "vamato",
            "pos": "noun",
            "gloss_zh": "诗文之地",
            "definition_zh": "与“诗文”关联的地点、场所或容器。",
            "derived_from": "poem",
            "tags": [
                "text",
                "writing",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "strong",
            "headword_native": "◠ʋ˘ɯˉ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "vame",
            "ipa": "vame",
            "pos": "adj",
            "gloss_zh": "强",
            "definition_zh": "力量、能力或作用大。",
            "derived_from": null,
            "tags": [
                "daily",
                "quality",
                "root"
            ]
        },
        {
            "id": "strong__abs",
            "headword_native": "◇ʋ˘ɯˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-v",
                "v-a",
                "c-m",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vamema",
            "ipa": "vamema",
            "pos": "noun",
            "gloss_zh": "强之性",
            "definition_zh": "“强”这一性质本身。",
            "derived_from": "strong",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "abstract"
            ]
        },
        {
            "id": "strong__become",
            "headword_native": "◠ʋ˘ɯˉɾ˙",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "vameri",
            "ipa": "vameri",
            "pos": "verb",
            "gloss_zh": "变得强",
            "definition_zh": "进入或呈现“强”的状态。",
            "derived_from": "strong",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "inchoative"
            ]
        },
        {
            "id": "strong__adv",
            "headword_native": "◠ʋ˘ɯˉʂˉ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "vamese",
            "ipa": "vamese",
            "pos": "adv",
            "gloss_zh": "强地",
            "definition_zh": "以“强”的方式。",
            "derived_from": "strong",
            "tags": [
                "daily",
                "quality",
                "root",
                "derived",
                "adverbial"
            ]
        },
        {
            "id": "method",
            "headword_native": "◇ʋˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-v",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vema",
            "ipa": "vema",
            "pos": "noun",
            "gloss_zh": "方法",
            "definition_zh": "完成任务或理解事物的方式。",
            "derived_from": null,
            "tags": [
                "abstract",
                "mind",
                "root"
            ]
        },
        {
            "id": "method__rel",
            "headword_native": "◇ʋˉɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-v",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "vemali",
            "ipa": "vemali",
            "pos": "adj",
            "gloss_zh": "方法相关的",
            "definition_zh": "与“方法”相关，或具有其属性。",
            "derived_from": "method",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "method__agent",
            "headword_native": "◠ʋˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "vemaren",
            "ipa": "vemaren",
            "pos": "noun",
            "gloss_zh": "方法之人",
            "definition_zh": "管理、使用、守护或代表“方法”的人。",
            "derived_from": "method",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "method__field",
            "headword_native": "◇ʋˉɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-v",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "vemasa",
            "ipa": "vemasa",
            "pos": "noun",
            "gloss_zh": "方法群域",
            "definition_zh": "围绕“方法”形成的一组事物、场域或集合。",
            "derived_from": "method",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "method__place",
            "headword_native": "⌂ʋˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-v",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "vemato",
            "ipa": "vemato",
            "pos": "noun",
            "gloss_zh": "方法之地",
            "definition_zh": "与“方法”关联的地点、场所或容器。",
            "derived_from": "method",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "kind",
            "headword_native": "⟐ʋ˙ɯ˘",
            "native_tokens": [
                "det-mark",
                "c-v",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vima",
            "ipa": "vima",
            "pos": "noun",
            "gloss_zh": "类目",
            "definition_zh": "区分事物的一种种类。",
            "derived_from": null,
            "tags": [
                "abstract",
                "index",
                "root"
            ]
        },
        {
            "id": "kind__rel",
            "headword_native": "⟐ʋ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-mark",
                "c-v",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "vimali",
            "ipa": "vimali",
            "pos": "adj",
            "gloss_zh": "类目相关的",
            "definition_zh": "与“类目”相关，或具有其属性。",
            "derived_from": "kind",
            "tags": [
                "abstract",
                "index",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "kind__agent",
            "headword_native": "◠ʋ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "vimaren",
            "ipa": "vimaren",
            "pos": "noun",
            "gloss_zh": "类目之人",
            "definition_zh": "管理、使用、守护或代表“类目”的人。",
            "derived_from": "kind",
            "tags": [
                "abstract",
                "index",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "kind__field",
            "headword_native": "⟐ʋ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-mark",
                "c-v",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "vimasa",
            "ipa": "vimasa",
            "pos": "noun",
            "gloss_zh": "类目群域",
            "definition_zh": "围绕“类目”形成的一组事物、场域或集合。",
            "derived_from": "kind",
            "tags": [
                "abstract",
                "index",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "kind__place",
            "headword_native": "⌂ʋ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-v",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "vimato",
            "ipa": "vimato",
            "pos": "noun",
            "gloss_zh": "类目之地",
            "definition_zh": "与“类目”关联的地点、场所或容器。",
            "derived_from": "kind",
            "tags": [
                "abstract",
                "index",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "date",
            "headword_native": "◔ʋ°ɯ˘",
            "native_tokens": [
                "det-time",
                "c-v",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "voma",
            "ipa": "voma",
            "pos": "noun",
            "gloss_zh": "日期",
            "definition_zh": "用于标记时间位置的记号。",
            "derived_from": null,
            "tags": [
                "time",
                "mark",
                "root"
            ]
        },
        {
            "id": "date__rel",
            "headword_native": "◔ʋ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-time",
                "c-v",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "vomali",
            "ipa": "vomali",
            "pos": "adj",
            "gloss_zh": "日期相关的",
            "definition_zh": "与“日期”相关，或具有其属性。",
            "derived_from": "date",
            "tags": [
                "time",
                "mark",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "date__agent",
            "headword_native": "◠ʋ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "vomaren",
            "ipa": "vomaren",
            "pos": "noun",
            "gloss_zh": "日期之人",
            "definition_zh": "管理、使用、守护或代表“日期”的人。",
            "derived_from": "date",
            "tags": [
                "time",
                "mark",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "date__field",
            "headword_native": "◔ʋ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-time",
                "c-v",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "vomasa",
            "ipa": "vomasa",
            "pos": "noun",
            "gloss_zh": "日期群域",
            "definition_zh": "围绕“日期”形成的一组事物、场域或集合。",
            "derived_from": "date",
            "tags": [
                "time",
                "mark",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "date__place",
            "headword_native": "⌂ʋ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-v",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "vomato",
            "ipa": "vomato",
            "pos": "noun",
            "gloss_zh": "日期之地",
            "definition_zh": "与“日期”关联的地点、场所或容器。",
            "derived_from": "date",
            "tags": [
                "time",
                "mark",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "vu",
            "headword_native": "ʋˍ",
            "native_tokens": [
                "c-v",
                "v-u"
            ],
            "headword_romanized": "vu",
            "ipa": "vu",
            "pos": "part",
            "gloss_zh": "将 / 打算",
            "definition_zh": "计划或未来标记。",
            "derived_from": null,
            "tags": [
                "function",
                "future"
            ]
        },
        {
            "id": "song",
            "headword_native": "◡ʋˍɯ˘",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vuma",
            "ipa": "vuma",
            "pos": "noun",
            "gloss_zh": "歌",
            "definition_zh": "带节奏或旋律的言语。",
            "derived_from": null,
            "tags": [
                "art",
                "sound",
                "root"
            ]
        },
        {
            "id": "song__rel",
            "headword_native": "◡ʋˍɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "vumali",
            "ipa": "vumali",
            "pos": "adj",
            "gloss_zh": "歌相关的",
            "definition_zh": "与“歌”相关，或具有其属性。",
            "derived_from": "song",
            "tags": [
                "art",
                "sound",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "song__agent",
            "headword_native": "◠ʋˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-v",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "vumaren",
            "ipa": "vumaren",
            "pos": "noun",
            "gloss_zh": "歌之人",
            "definition_zh": "管理、使用、守护或代表“歌”的人。",
            "derived_from": "song",
            "tags": [
                "art",
                "sound",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "song__field",
            "headword_native": "◡ʋˍɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "vumasa",
            "ipa": "vumasa",
            "pos": "noun",
            "gloss_zh": "歌群域",
            "definition_zh": "围绕“歌”形成的一组事物、场域或集合。",
            "derived_from": "song",
            "tags": [
                "art",
                "sound",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "song__place",
            "headword_native": "⌂ʋˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-v",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "vumato",
            "ipa": "vumato",
            "pos": "noun",
            "gloss_zh": "歌之地",
            "definition_zh": "与“歌”关联的地点、场所或容器。",
            "derived_from": "song",
            "tags": [
                "art",
                "sound",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "work-n",
            "headword_native": "⟟ɰ˘ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wama",
            "ipa": "wama",
            "pos": "noun",
            "gloss_zh": "工作",
            "definition_zh": "持续进行的劳动或任务。",
            "derived_from": null,
            "tags": [
                "daily",
                "task",
                "root"
            ]
        },
        {
            "id": "work-n__rel",
            "headword_native": "⟟ɰ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "wamali",
            "ipa": "wamali",
            "pos": "adj",
            "gloss_zh": "工作相关的",
            "definition_zh": "与“工作”相关，或具有其属性。",
            "derived_from": "work-n",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "work-n__agent",
            "headword_native": "◠ɰ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "wamaren",
            "ipa": "wamaren",
            "pos": "noun",
            "gloss_zh": "工作之人",
            "definition_zh": "管理、使用、守护或代表“工作”的人。",
            "derived_from": "work-n",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "work-n__field",
            "headword_native": "⟟ɰ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "wamasa",
            "ipa": "wamasa",
            "pos": "noun",
            "gloss_zh": "工作群域",
            "definition_zh": "围绕“工作”形成的一组事物、场域或集合。",
            "derived_from": "work-n",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "work-n__place",
            "headword_native": "⌂ɰ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "wamato",
            "ipa": "wamato",
            "pos": "noun",
            "gloss_zh": "工作之地",
            "definition_zh": "与“工作”关联的地点、场所或容器。",
            "derived_from": "work-n",
            "tags": [
                "daily",
                "task",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "go",
            "headword_native": "⌁ɰˉɯ˘",
            "native_tokens": [
                "det-motion",
                "c-w",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wema",
            "ipa": "wema",
            "pos": "verb",
            "gloss_zh": "去",
            "definition_zh": "朝某处移动。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "go__rel",
            "headword_native": "⌁ɰˉɯ˘ɭ˙",
            "native_tokens": [
                "det-motion",
                "c-w",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "wemali",
            "ipa": "wemali",
            "pos": "adj",
            "gloss_zh": "可去的",
            "definition_zh": "适合、能够或倾向于“去”。",
            "derived_from": "go",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "go__act",
            "headword_native": "◇ɰˉɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-w",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wemama",
            "ipa": "wemama",
            "pos": "noun",
            "gloss_zh": "去之事",
            "definition_zh": "与“去”相关的动作、过程或事件。",
            "derived_from": "go",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "go__agent",
            "headword_native": "◠ɰˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "wemaren",
            "ipa": "wemaren",
            "pos": "noun",
            "gloss_zh": "去者",
            "definition_zh": "执行“去”的人。",
            "derived_from": "go",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "go__result",
            "headword_native": "⟟ɰˉɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "wemate",
            "ipa": "wemate",
            "pos": "noun",
            "gloss_zh": "去之成物",
            "definition_zh": "由“去”产生、留下或完成的结果。",
            "derived_from": "go",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "come",
            "headword_native": "⌁ɰ˙ɯ˘",
            "native_tokens": [
                "det-motion",
                "c-w",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wima",
            "ipa": "wima",
            "pos": "verb",
            "gloss_zh": "来",
            "definition_zh": "向说话者或参照点移动。",
            "derived_from": null,
            "tags": [
                "daily",
                "movement",
                "root"
            ]
        },
        {
            "id": "come__rel",
            "headword_native": "⌁ɰ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-motion",
                "c-w",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "wimali",
            "ipa": "wimali",
            "pos": "adj",
            "gloss_zh": "可来的",
            "definition_zh": "适合、能够或倾向于“来”。",
            "derived_from": "come",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "come__act",
            "headword_native": "◇ɰ˙ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-w",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wimama",
            "ipa": "wimama",
            "pos": "noun",
            "gloss_zh": "来之事",
            "definition_zh": "与“来”相关的动作、过程或事件。",
            "derived_from": "come",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "come__agent",
            "headword_native": "◠ɰ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "wimaren",
            "ipa": "wimaren",
            "pos": "noun",
            "gloss_zh": "来者",
            "definition_zh": "执行“来”的人。",
            "derived_from": "come",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "come__result",
            "headword_native": "⟟ɰ˙ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "wimate",
            "ipa": "wimate",
            "pos": "noun",
            "gloss_zh": "来之成物",
            "definition_zh": "由“来”产生、留下或完成的结果。",
            "derived_from": "come",
            "tags": [
                "daily",
                "movement",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "see",
            "headword_native": "◠ɰ°ɯ˘",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "woma",
            "ipa": "woma",
            "pos": "verb",
            "gloss_zh": "看见",
            "definition_zh": "用眼接收并识别。",
            "derived_from": null,
            "tags": [
                "daily",
                "sense",
                "root"
            ]
        },
        {
            "id": "see__rel",
            "headword_native": "◠ɰ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "womali",
            "ipa": "womali",
            "pos": "adj",
            "gloss_zh": "可看见的",
            "definition_zh": "适合、能够或倾向于“看见”。",
            "derived_from": "see",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "see__act",
            "headword_native": "◇ɰ°ɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-w",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "womama",
            "ipa": "womama",
            "pos": "noun",
            "gloss_zh": "看见之事",
            "definition_zh": "与“看见”相关的动作、过程或事件。",
            "derived_from": "see",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "see__agent",
            "headword_native": "◠ɰ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "womaren",
            "ipa": "womaren",
            "pos": "noun",
            "gloss_zh": "看见者",
            "definition_zh": "执行“看见”的人。",
            "derived_from": "see",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "see__result",
            "headword_native": "⟟ɰ°ɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "womate",
            "ipa": "womate",
            "pos": "noun",
            "gloss_zh": "看见之成物",
            "definition_zh": "由“看见”产生、留下或完成的结果。",
            "derived_from": "see",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "hear",
            "headword_native": "◡ɰˍɯ˘",
            "native_tokens": [
                "det-speech",
                "c-w",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wuma",
            "ipa": "wuma",
            "pos": "verb",
            "gloss_zh": "听见",
            "definition_zh": "用耳接收声音。",
            "derived_from": null,
            "tags": [
                "daily",
                "sense",
                "root"
            ]
        },
        {
            "id": "hear__rel",
            "headword_native": "◡ɰˍɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-w",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "wumali",
            "ipa": "wumali",
            "pos": "adj",
            "gloss_zh": "可听见的",
            "definition_zh": "适合、能够或倾向于“听见”。",
            "derived_from": "hear",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "hear__act",
            "headword_native": "◇ɰˍɯ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-w",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wumama",
            "ipa": "wumama",
            "pos": "noun",
            "gloss_zh": "听见之事",
            "definition_zh": "与“听见”相关的动作、过程或事件。",
            "derived_from": "hear",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "action-noun"
            ]
        },
        {
            "id": "hear__agent",
            "headword_native": "◠ɰˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-w",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "wumaren",
            "ipa": "wumaren",
            "pos": "noun",
            "gloss_zh": "听见者",
            "definition_zh": "执行“听见”的人。",
            "derived_from": "hear",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "hear__result",
            "headword_native": "⟟ɰˍɯ˘ŧˉ",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "wumate",
            "ipa": "wumate",
            "pos": "noun",
            "gloss_zh": "听见之成物",
            "definition_zh": "由“听见”产生、留下或完成的结果。",
            "derived_from": "hear",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "result"
            ]
        },
        {
            "id": "ya",
            "headword_native": "ʎ˘",
            "native_tokens": [
                "c-y",
                "v-a"
            ],
            "headword_romanized": "ya",
            "ipa": "ja",
            "pos": "part",
            "gloss_zh": "使从句接入",
            "definition_zh": "简单从句连接词。",
            "derived_from": null,
            "tags": [
                "function",
                "subordinator"
            ]
        },
        {
            "id": "question",
            "headword_native": "◡ʎ˘ɯ˘",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yama",
            "ipa": "yama",
            "pos": "noun",
            "gloss_zh": "问题",
            "definition_zh": "需要回答的内容。",
            "derived_from": null,
            "tags": [
                "abstract",
                "daily",
                "root"
            ]
        },
        {
            "id": "question__rel",
            "headword_native": "◡ʎ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "yamali",
            "ipa": "yamali",
            "pos": "adj",
            "gloss_zh": "问题相关的",
            "definition_zh": "与“问题”相关，或具有其属性。",
            "derived_from": "question",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "question__agent",
            "headword_native": "◠ʎ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "yamaren",
            "ipa": "yamaren",
            "pos": "noun",
            "gloss_zh": "问题之人",
            "definition_zh": "管理、使用、守护或代表“问题”的人。",
            "derived_from": "question",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "question__field",
            "headword_native": "◡ʎ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "yamasa",
            "ipa": "yamasa",
            "pos": "noun",
            "gloss_zh": "问题群域",
            "definition_zh": "围绕“问题”形成的一组事物、场域或集合。",
            "derived_from": "question",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "question__place",
            "headword_native": "⌂ʎ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "yamato",
            "ipa": "yamato",
            "pos": "noun",
            "gloss_zh": "问题之地",
            "definition_zh": "与“问题”关联的地点、场所或容器。",
            "derived_from": "question",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "answer",
            "headword_native": "◡ʎˉɯ˘",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yema",
            "ipa": "yema",
            "pos": "noun",
            "gloss_zh": "回答",
            "definition_zh": "对问题的回应。",
            "derived_from": null,
            "tags": [
                "abstract",
                "daily",
                "root"
            ]
        },
        {
            "id": "answer__rel",
            "headword_native": "◡ʎˉɯ˘ɭ˙",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "yemali",
            "ipa": "yemali",
            "pos": "adj",
            "gloss_zh": "回答相关的",
            "definition_zh": "与“回答”相关，或具有其属性。",
            "derived_from": "answer",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "answer__agent",
            "headword_native": "◠ʎˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "yemaren",
            "ipa": "yemaren",
            "pos": "noun",
            "gloss_zh": "回答之人",
            "definition_zh": "管理、使用、守护或代表“回答”的人。",
            "derived_from": "answer",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "answer__field",
            "headword_native": "◡ʎˉɯ˘ʂ˘",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "yemasa",
            "ipa": "yemasa",
            "pos": "noun",
            "gloss_zh": "回答群域",
            "definition_zh": "围绕“回答”形成的一组事物、场域或集合。",
            "derived_from": "answer",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "answer__place",
            "headword_native": "⌂ʎˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "yemato",
            "ipa": "yemato",
            "pos": "noun",
            "gloss_zh": "回答之地",
            "definition_zh": "与“回答”关联的地点、场所或容器。",
            "derived_from": "answer",
            "tags": [
                "abstract",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "boat",
            "headword_native": "⟟ʎ˙ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yima",
            "ipa": "yima",
            "pos": "noun",
            "gloss_zh": "船",
            "definition_zh": "在水上移动的交通工具。",
            "derived_from": null,
            "tags": [
                "transport",
                "daily",
                "root"
            ]
        },
        {
            "id": "boat__rel",
            "headword_native": "⟟ʎ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "yimali",
            "ipa": "yimali",
            "pos": "adj",
            "gloss_zh": "船相关的",
            "definition_zh": "与“船”相关，或具有其属性。",
            "derived_from": "boat",
            "tags": [
                "transport",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "boat__agent",
            "headword_native": "◠ʎ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "yimaren",
            "ipa": "yimaren",
            "pos": "noun",
            "gloss_zh": "船之人",
            "definition_zh": "管理、使用、守护或代表“船”的人。",
            "derived_from": "boat",
            "tags": [
                "transport",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "boat__field",
            "headword_native": "⟟ʎ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "yimasa",
            "ipa": "yimasa",
            "pos": "noun",
            "gloss_zh": "船群域",
            "definition_zh": "围绕“船”形成的一组事物、场域或集合。",
            "derived_from": "boat",
            "tags": [
                "transport",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "boat__place",
            "headword_native": "⌂ʎ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "yimato",
            "ipa": "yimato",
            "pos": "noun",
            "gloss_zh": "船之地",
            "definition_zh": "与“船”关联的地点、场所或容器。",
            "derived_from": "boat",
            "tags": [
                "transport",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "cloth",
            "headword_native": "⟟ʎ°ɯ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yoma",
            "ipa": "yoma",
            "pos": "noun",
            "gloss_zh": "布",
            "definition_zh": "柔软可裁剪的织物。",
            "derived_from": null,
            "tags": [
                "material",
                "daily",
                "root"
            ]
        },
        {
            "id": "cloth__rel",
            "headword_native": "⟟ʎ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "yomali",
            "ipa": "yomali",
            "pos": "adj",
            "gloss_zh": "布相关的",
            "definition_zh": "与“布”相关，或具有其属性。",
            "derived_from": "cloth",
            "tags": [
                "material",
                "daily",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "cloth__agent",
            "headword_native": "◠ʎ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "yomaren",
            "ipa": "yomaren",
            "pos": "noun",
            "gloss_zh": "布之人",
            "definition_zh": "管理、使用、守护或代表“布”的人。",
            "derived_from": "cloth",
            "tags": [
                "material",
                "daily",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "cloth__field",
            "headword_native": "⟟ʎ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "yomasa",
            "ipa": "yomasa",
            "pos": "noun",
            "gloss_zh": "布群域",
            "definition_zh": "围绕“布”形成的一组事物、场域或集合。",
            "derived_from": "cloth",
            "tags": [
                "material",
                "daily",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "cloth__place",
            "headword_native": "⌂ʎ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "yomato",
            "ipa": "yomato",
            "pos": "noun",
            "gloss_zh": "布之地",
            "definition_zh": "与“布”关联的地点、场所或容器。",
            "derived_from": "cloth",
            "tags": [
                "material",
                "daily",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "tool",
            "headword_native": "⟟ʎˍɯ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yuma",
            "ipa": "yuma",
            "pos": "noun",
            "gloss_zh": "工具",
            "definition_zh": "帮助完成工作的器具。",
            "derived_from": null,
            "tags": [
                "daily",
                "object",
                "root"
            ]
        },
        {
            "id": "tool__rel",
            "headword_native": "⟟ʎˍɯ˘ɭ˙",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "yumali",
            "ipa": "yumali",
            "pos": "adj",
            "gloss_zh": "工具相关的",
            "definition_zh": "与“工具”相关，或具有其属性。",
            "derived_from": "tool",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "tool__agent",
            "headword_native": "◠ʎˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "yumaren",
            "ipa": "yumaren",
            "pos": "noun",
            "gloss_zh": "工具之人",
            "definition_zh": "管理、使用、守护或代表“工具”的人。",
            "derived_from": "tool",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "tool__field",
            "headword_native": "⟟ʎˍɯ˘ʂ˘",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "yumasa",
            "ipa": "yumasa",
            "pos": "noun",
            "gloss_zh": "工具群域",
            "definition_zh": "围绕“工具”形成的一组事物、场域或集合。",
            "derived_from": "tool",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "tool__place",
            "headword_native": "⌂ʎˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "yumato",
            "ipa": "yumato",
            "pos": "noun",
            "gloss_zh": "工具之地",
            "definition_zh": "与“工具”关联的地点、场所或容器。",
            "derived_from": "tool",
            "tags": [
                "daily",
                "object",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "story",
            "headword_native": "◇ʐ˘ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zama",
            "ipa": "zama",
            "pos": "noun",
            "gloss_zh": "故事",
            "definition_zh": "按顺序叙述的事件。",
            "derived_from": null,
            "tags": [
                "text",
                "abstract",
                "root"
            ]
        },
        {
            "id": "story__rel",
            "headword_native": "◇ʐ˘ɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-a",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "zamali",
            "ipa": "zamali",
            "pos": "adj",
            "gloss_zh": "故事相关的",
            "definition_zh": "与“故事”相关，或具有其属性。",
            "derived_from": "story",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "story__agent",
            "headword_native": "◠ʐ˘ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-a",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "zamaren",
            "ipa": "zamaren",
            "pos": "noun",
            "gloss_zh": "故事之人",
            "definition_zh": "管理、使用、守护或代表“故事”的人。",
            "derived_from": "story",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "story__field",
            "headword_native": "◇ʐ˘ɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-a",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "zamasa",
            "ipa": "zamasa",
            "pos": "noun",
            "gloss_zh": "故事群域",
            "definition_zh": "围绕“故事”形成的一组事物、场域或集合。",
            "derived_from": "story",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "story__place",
            "headword_native": "⌂ʐ˘ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-z",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "zamato",
            "ipa": "zamato",
            "pos": "noun",
            "gloss_zh": "故事之地",
            "definition_zh": "与“故事”关联的地点、场所或容器。",
            "derived_from": "story",
            "tags": [
                "text",
                "abstract",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "law",
            "headword_native": "◇ʐˉɯ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zema",
            "ipa": "zema",
            "pos": "noun",
            "gloss_zh": "法则",
            "definition_zh": "约束行为或描述规律的规则。",
            "derived_from": null,
            "tags": [
                "abstract",
                "order",
                "root"
            ]
        },
        {
            "id": "law__rel",
            "headword_native": "◇ʐˉɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "zemali",
            "ipa": "zemali",
            "pos": "adj",
            "gloss_zh": "法则相关的",
            "definition_zh": "与“法则”相关，或具有其属性。",
            "derived_from": "law",
            "tags": [
                "abstract",
                "order",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "law__agent",
            "headword_native": "◠ʐˉɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "zemaren",
            "ipa": "zemaren",
            "pos": "noun",
            "gloss_zh": "法则之人",
            "definition_zh": "管理、使用、守护或代表“法则”的人。",
            "derived_from": "law",
            "tags": [
                "abstract",
                "order",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "law__field",
            "headword_native": "◇ʐˉɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "zemasa",
            "ipa": "zemasa",
            "pos": "noun",
            "gloss_zh": "法则群域",
            "definition_zh": "围绕“法则”形成的一组事物、场域或集合。",
            "derived_from": "law",
            "tags": [
                "abstract",
                "order",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "law__place",
            "headword_native": "⌂ʐˉɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "zemato",
            "ipa": "zemato",
            "pos": "noun",
            "gloss_zh": "法则之地",
            "definition_zh": "与“法则”关联的地点、场所或容器。",
            "derived_from": "law",
            "tags": [
                "abstract",
                "order",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "memory",
            "headword_native": "◇ʐ˙ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zima",
            "ipa": "zima",
            "pos": "noun",
            "gloss_zh": "记忆",
            "definition_zh": "被保存下来的经历与印象。",
            "derived_from": null,
            "tags": [
                "abstract",
                "mind",
                "root"
            ]
        },
        {
            "id": "memory__rel",
            "headword_native": "◇ʐ˙ɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "zimali",
            "ipa": "zimali",
            "pos": "adj",
            "gloss_zh": "记忆相关的",
            "definition_zh": "与“记忆”相关，或具有其属性。",
            "derived_from": "memory",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "memory__agent",
            "headword_native": "◠ʐ˙ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "zimaren",
            "ipa": "zimaren",
            "pos": "noun",
            "gloss_zh": "记忆之人",
            "definition_zh": "管理、使用、守护或代表“记忆”的人。",
            "derived_from": "memory",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "memory__field",
            "headword_native": "◇ʐ˙ɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "zimasa",
            "ipa": "zimasa",
            "pos": "noun",
            "gloss_zh": "记忆群域",
            "definition_zh": "围绕“记忆”形成的一组事物、场域或集合。",
            "derived_from": "memory",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "memory__place",
            "headword_native": "⌂ʐ˙ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "zimato",
            "ipa": "zimato",
            "pos": "noun",
            "gloss_zh": "记忆之地",
            "definition_zh": "与“记忆”关联的地点、场所或容器。",
            "derived_from": "memory",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "idea",
            "headword_native": "◇ʐ°ɯ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zoma",
            "ipa": "zoma",
            "pos": "noun",
            "gloss_zh": "想法",
            "definition_zh": "头脑中的概念或计划。",
            "derived_from": null,
            "tags": [
                "abstract",
                "mind",
                "root"
            ]
        },
        {
            "id": "idea__rel",
            "headword_native": "◇ʐ°ɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "zomali",
            "ipa": "zomali",
            "pos": "adj",
            "gloss_zh": "想法相关的",
            "definition_zh": "与“想法”相关，或具有其属性。",
            "derived_from": "idea",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "idea__agent",
            "headword_native": "◠ʐ°ɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "zomaren",
            "ipa": "zomaren",
            "pos": "noun",
            "gloss_zh": "想法之人",
            "definition_zh": "管理、使用、守护或代表“想法”的人。",
            "derived_from": "idea",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "idea__field",
            "headword_native": "◇ʐ°ɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "zomasa",
            "ipa": "zomasa",
            "pos": "noun",
            "gloss_zh": "想法群域",
            "definition_zh": "围绕“想法”形成的一组事物、场域或集合。",
            "derived_from": "idea",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "idea__place",
            "headword_native": "⌂ʐ°ɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "zomato",
            "ipa": "zomato",
            "pos": "noun",
            "gloss_zh": "想法之地",
            "definition_zh": "与“想法”关联的地点、场所或容器。",
            "derived_from": "idea",
            "tags": [
                "abstract",
                "mind",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "joy",
            "headword_native": "◇ʐˍɯ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zuma",
            "ipa": "zuma",
            "pos": "noun",
            "gloss_zh": "喜悦",
            "definition_zh": "积极而明亮的情绪。",
            "derived_from": null,
            "tags": [
                "abstract",
                "emotion",
                "root"
            ]
        },
        {
            "id": "joy__rel",
            "headword_native": "◇ʐˍɯ˘ɭ˙",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-l",
                "v-i"
            ],
            "headword_romanized": "zumali",
            "ipa": "zumali",
            "pos": "adj",
            "gloss_zh": "喜悦相关的",
            "definition_zh": "与“喜悦”相关，或具有其属性。",
            "derived_from": "joy",
            "tags": [
                "abstract",
                "emotion",
                "root",
                "derived",
                "relational"
            ]
        },
        {
            "id": "joy__agent",
            "headword_native": "◠ʐˍɯ˘ɾˉɲ",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-r",
                "v-e",
                "c-n"
            ],
            "headword_romanized": "zumaren",
            "ipa": "zumaren",
            "pos": "noun",
            "gloss_zh": "喜悦之人",
            "definition_zh": "管理、使用、守护或代表“喜悦”的人。",
            "derived_from": "joy",
            "tags": [
                "abstract",
                "emotion",
                "root",
                "derived",
                "agent"
            ]
        },
        {
            "id": "joy__field",
            "headword_native": "◇ʐˍɯ˘ʂ˘",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-s",
                "v-a"
            ],
            "headword_romanized": "zumasa",
            "ipa": "zumasa",
            "pos": "noun",
            "gloss_zh": "喜悦群域",
            "definition_zh": "围绕“喜悦”形成的一组事物、场域或集合。",
            "derived_from": "joy",
            "tags": [
                "abstract",
                "emotion",
                "root",
                "derived",
                "collective"
            ]
        },
        {
            "id": "joy__place",
            "headword_native": "⌂ʐˍɯ˘ŧ°",
            "native_tokens": [
                "det-place",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-o"
            ],
            "headword_romanized": "zumato",
            "ipa": "zumato",
            "pos": "noun",
            "gloss_zh": "喜悦之地",
            "definition_zh": "与“喜悦”关联的地点、场所或容器。",
            "derived_from": "joy",
            "tags": [
                "abstract",
                "emotion",
                "root",
                "derived",
                "locative"
            ]
        }
    ],
    "examples": [
        {
            "id": "ex-01",
            "native": "ɯ˙ ≈ʃ˙ɯ˘ ≈β˘ɯ˘ ɾ˙.",
            "romanized": "mi shima bama ri.",
            "morpheme_break": "mi water drink ri",
            "gloss": "我 水 喝 进行",
            "translation_zh": "我正在喝水。",
            "notes": "基础 SOV 与进行体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shima",
                    "native_form": "≈ʃ˙ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-sh",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "水",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "bama",
                    "native_form": "≈β˘ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-b",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "喝",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-b.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-02",
            "native": "ŧ˙ ⟟ɭˉɯ˘ ⟟ɠ°ɯ˘ ʞˉ?",
            "romanized": "ti lema goma ke?",
            "morpheme_break": "ti book read ke",
            "gloss": "你 书 读 疑问",
            "translation_zh": "你读书吗？",
            "notes": "一般疑问。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lema",
                    "native_form": "⟟ɭˉɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "goma",
                    "native_form": "⟟ɠ°ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-03",
            "native": "ɯ˙ ⌂þ˙ɯ˘ ɭ° ʂ˙.",
            "romanized": "mi pima lo si.",
            "morpheme_break": "mi home lo si",
            "gloss": "我 家 在 系词",
            "translation_zh": "我在家。",
            "notes": "处所句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pima",
                    "native_form": "⌂þ˙ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "家",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-04",
            "native": "ɲˉ ⌂þ°ɯ˘ ⌂ɭˍɯˉ ʂ˙.",
            "romanized": "ne poma lume si.",
            "morpheme_break": "ne room full si",
            "gloss": "这 房间 满 是",
            "translation_zh": "这个房间是满的。",
            "notes": "系词 + 形容词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "ɲˉ",
                    "native_tokens": [
                        "c-n",
                        "v-e"
                    ],
                    "gloss_zh": "这",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "poma",
                    "native_form": "⌂þ°ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "房间",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lume",
                    "native_form": "⌂ɭˍɯˉ",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "满",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-05",
            "native": "ɯ˙ ⟟ɦˍɯ˘ ɲ˘ ≈ɠˍɯ˘.",
            "romanized": "mi huma na guma.",
            "morpheme_break": "mi bread na eat",
            "gloss": "我 面饼 不 吃",
            "translation_zh": "我不吃面饼。",
            "notes": "否定。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "huma",
                    "native_form": "⟟ɦˍɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-h",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "面饼",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "guma",
                    "native_form": "≈ɠˍɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-g",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "吃",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-06",
            "native": "ʂ˘ ⌂ŧˉɯ˘ đˉ ⌁ɰˉɯ˘ þ˘.",
            "romanized": "sa tema de wema pa.",
            "morpheme_break": "sa town de go pa",
            "gloss": "他 城镇 向 去 过去",
            "translation_zh": "他去了镇上。",
            "notes": "移动与过去。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "ʂ˘",
                    "native_tokens": [
                        "c-s",
                        "v-a"
                    ],
                    "gloss_zh": "他 / 她 / 它",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tema",
                    "native_form": "⌂ŧˉɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "城镇",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "de",
                    "native_form": "đˉ",
                    "native_tokens": [
                        "c-d",
                        "v-e"
                    ],
                    "gloss_zh": "向 / 给",
                    "glyph_preview": [
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wema",
                    "native_form": "⌁ɰˉɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-07",
            "native": "ɲ˘ɯ˙ ⌂ŧ°ɯ˘ ɭ° ◇đˉɯ˘ ɾ˙.",
            "romanized": "nami toma lo dema ri.",
            "morpheme_break": "nami school lo learn ri",
            "gloss": "我们 学校 在 学习 进行",
            "translation_zh": "我们正在学校学习。",
            "notes": "进行中的处所活动。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "nami",
                    "native_form": "ɲ˘ɯ˙",
                    "native_tokens": [
                        "c-n",
                        "v-a",
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我们",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "toma",
                    "native_form": "⌂ŧ°ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学校",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "dema",
                    "native_form": "◇đˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-d",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-08",
            "native": "ɯ˙ ◡ɭ˙ɯ˘ ⟟ɠ˙ɯ˘ ɲˍ.",
            "romanized": "mi lima gima nu.",
            "morpheme_break": "mi letter write nu",
            "gloss": "我 书信 写 完成",
            "translation_zh": "我已经写完信了。",
            "notes": "完成体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lima",
                    "native_form": "◡ɭ˙ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书信",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "gima",
                    "native_form": "⟟ɠ˙ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "写",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "ɲˍ",
                    "native_tokens": [
                        "c-n",
                        "v-u"
                    ],
                    "gloss_zh": "已完成",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-09",
            "native": "∞ɯˉɯ˘ ɠˉ ⟟ɭˉɯ˘ ɯ˙ đˉ ∞ɯ˘ɯˉ þ˘.",
            "romanized": "mema ge lema mi de mame pa.",
            "morpheme_break": "friend ge book mi de give pa",
            "gloss": "朋友 的 书 我 向 给 过去",
            "translation_zh": "我把朋友的书给了出去。",
            "notes": "属格与过去。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "∞ɯˉɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "朋友",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ge",
                    "native_form": "ɠˉ",
                    "native_tokens": [
                        "c-g",
                        "v-e"
                    ],
                    "gloss_zh": "的",
                    "glyph_preview": [
                        "assets/language/c-g.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lema",
                    "native_form": "⟟ɭˉɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "de",
                    "native_form": "đˉ",
                    "native_tokens": [
                        "c-d",
                        "v-e"
                    ],
                    "gloss_zh": "向 / 给",
                    "glyph_preview": [
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mame",
                    "native_form": "∞ɯ˘ɯˉ",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "给",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-10",
            "native": "ʂ˘ ◡ʎ˘ɯ˘ ◡đˍɯ˘ ʞˉ?",
            "romanized": "sa yama duma ke?",
            "morpheme_break": "sa question say ke",
            "gloss": "他 问题 说 疑问",
            "translation_zh": "他提出问题了吗？",
            "notes": "带宾语的问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "ʂ˘",
                    "native_tokens": [
                        "c-s",
                        "v-a"
                    ],
                    "gloss_zh": "他 / 她 / 它",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "yama",
                    "native_form": "◡ʎ˘ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "问题",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "duma",
                    "native_form": "◡đˍɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-d",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "说出",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-11",
            "native": "ŧ° ◇ʐ˘ɯ˘ ◇ɾ°ɯˉ ʂ˙ ʞˉ?",
            "romanized": "to zama rome si ke?",
            "morpheme_break": "to story true si ke",
            "gloss": "那 故事 真实 是 疑问",
            "translation_zh": "那个故事是真的吗？",
            "notes": "判断句问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "ŧ°",
                    "native_tokens": [
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "那",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zama",
                    "native_form": "◇ʐ˘ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "故事",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "rome",
                    "native_form": "◇ɾ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "真实",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-12",
            "native": "ɯ˙ ɠˉ ⟐ɲ˘ɯ˘ ◇ɭ˙ɯˉ ʂ˙.",
            "romanized": "mi ge nama lime si.",
            "morpheme_break": "mi ge name clear si",
            "gloss": "我 的 名字 清晰 是",
            "translation_zh": "我的名字很清晰。",
            "notes": "代词领属。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ge",
                    "native_form": "ɠˉ",
                    "native_tokens": [
                        "c-g",
                        "v-e"
                    ],
                    "gloss_zh": "的",
                    "glyph_preview": [
                        "assets/language/c-g.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nama",
                    "native_form": "⟐ɲ˘ɯ˘",
                    "native_tokens": [
                        "det-mark",
                        "c-n",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "名字",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lime",
                    "native_form": "◇ɭ˙ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-l",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "清晰",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-13",
            "native": "∞ɯ°ɯ˘ ɠˉ ⌂þ˙ɯ˘ ⌁ʃˍɯˉ ʂ˙.",
            "romanized": "moma ge pima shume si.",
            "morpheme_break": "parent ge home near si",
            "gloss": "父母 的 家 近 是",
            "translation_zh": "父母的家很近。",
            "notes": "名词领属。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "moma",
                    "native_form": "∞ɯ°ɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "父母",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ge",
                    "native_form": "ɠˉ",
                    "native_tokens": [
                        "c-g",
                        "v-e"
                    ],
                    "gloss_zh": "的",
                    "glyph_preview": [
                        "assets/language/c-g.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pima",
                    "native_form": "⌂þ˙ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "家",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shume",
                    "native_form": "⌁ʃˍɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-sh",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "近",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-14",
            "native": "≈ʞ˘ɯ˘ ɯ° ⌂ʞˉɯ˘ ⟐ʞˍɯˉ ʂ˙.",
            "romanized": "kama mo kema kume si.",
            "morpheme_break": "river mo mountain big si",
            "gloss": "河 比 山 大 是",
            "translation_zh": "河看起来比山更大。",
            "notes": "比较句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈ʞ˘ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "河",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mo",
                    "native_form": "ɯ°",
                    "native_tokens": [
                        "c-m",
                        "v-o"
                    ],
                    "gloss_zh": "比",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kema",
                    "native_form": "⌂ʞˉɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-k",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "山",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kume",
                    "native_form": "⟐ʞˍɯˉ",
                    "native_tokens": [
                        "det-mark",
                        "c-k",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "大",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-15",
            "native": "ŧ˙ ɯ° ɯ˙ ⌁ɦˉɯˉ ʂ˙.",
            "romanized": "ti mo mi heme si.",
            "morpheme_break": "ti mo mi fast si",
            "gloss": "你 比 我 快 是",
            "translation_zh": "你比我快。",
            "notes": "人称比较。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mo",
                    "native_form": "ɯ°",
                    "native_tokens": [
                        "c-m",
                        "v-o"
                    ],
                    "gloss_zh": "比",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "heme",
                    "native_form": "⌁ɦˉɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-h",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "快",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-16",
            "native": "◠đˉɯ˘ɾˉɲ ◇ɦ°ɯˉ ʂ˙.",
            "romanized": "demaren home si.",
            "morpheme_break": "learn__agent good si",
            "gloss": "学习者 好 是",
            "translation_zh": "这个学习者很好。",
            "notes": "派生人物名词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "demaren",
                    "native_form": "◠đˉɯ˘ɾˉɲ",
                    "native_tokens": [
                        "det-human",
                        "c-d",
                        "v-e",
                        "c-m",
                        "v-a",
                        "c-r",
                        "v-e",
                        "c-n"
                    ],
                    "gloss_zh": "学习者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-n.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "home",
                    "native_form": "◇ɦ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-h",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "好",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-17",
            "native": "ʂ˘ ɲ˘ ◇þˉɯˉ.",
            "romanized": "sa na peme.",
            "morpheme_break": "sa na remember",
            "gloss": "他 不 记得",
            "translation_zh": "他不记得。",
            "notes": "不及物否定。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "ʂ˘",
                    "native_tokens": [
                        "c-s",
                        "v-a"
                    ],
                    "gloss_zh": "他 / 她 / 它",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "peme",
                    "native_form": "◇þˉɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-p",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "记得",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-18",
            "native": "∞ŧ˙ɯ˘ ɭ° ⟐ɾˉɯˉ ʂ˙.",
            "romanized": "tima lo reme si.",
            "morpheme_break": "market lo many si",
            "gloss": "集市 在 众多 是",
            "translation_zh": "集市上人很多。",
            "notes": "用群体派生表达“很多”。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "tima",
                    "native_form": "∞ŧ˙ɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-t",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "集市",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "reme",
                    "native_form": "⟐ɾˉɯˉ",
                    "native_tokens": [
                        "det-mark",
                        "c-r",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "多",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-19",
            "native": "ŧ˙ ⌁ɰ˙ɯ˘ þ˘ ʎ˘ ɯ˙ ◇ʐˍɯ˘ ʂ˙.",
            "romanized": "ti wima pa ya mi zuma si.",
            "morpheme_break": "ti come pa ya mi joy si",
            "gloss": "你 来 过去 从句 我 喜悦 是",
            "translation_zh": "因为你来了，我很高兴。",
            "notes": "简单从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⌁ɰ˙ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zuma",
                    "native_form": "◇ʐˍɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "喜悦",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-20",
            "native": "ɯ˙ ⟟ɭˉɯ˘ ⟟ɠ°ɯ˘ ʎ˘ ◇ʐ°ɯ˘ ◔ɲˍɯˉ.",
            "romanized": "mi lema goma ya zoma nume.",
            "morpheme_break": "mi book read ya idea grow",
            "gloss": "我 书 读 从句 想法 生长",
            "translation_zh": "我一读书，想法就会增长。",
            "notes": "从句 + 结果。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lema",
                    "native_form": "⟟ɭˉɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "goma",
                    "native_form": "⟟ɠ°ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zoma",
                    "native_form": "◇ʐ°ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "想法",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nume",
                    "native_form": "◔ɲˍɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-n",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "增长",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-21",
            "native": "ɯ˙ ≈ʞ˘ɯ˘ ʞ° ⌁ɰ˙ɯ˘.",
            "romanized": "mi kama ko wima.",
            "morpheme_break": "mi river ko come",
            "gloss": "我 河 从 来",
            "translation_zh": "我从河边过来。",
            "notes": "来源格。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈ʞ˘ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "河",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ko",
                    "native_form": "ʞ°",
                    "native_tokens": [
                        "c-k",
                        "v-o"
                    ],
                    "gloss_zh": "从",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⌁ɰ˙ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-22",
            "native": "◠ɯ˙ɯ˘ ⌁ŧ˘ɯ˘ ɭ° ⌁ɲ˘ɯˉ ɾ˙.",
            "romanized": "mima tama lo name ri.",
            "morpheme_break": "child road lo walk ri",
            "gloss": "孩子 道路 在 步行 进行",
            "translation_zh": "孩子正在路上走。",
            "notes": "基础叙事句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mima",
                    "native_form": "◠ɯ˙ɯ˘",
                    "native_tokens": [
                        "det-human",
                        "c-m",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "孩子",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tama",
                    "native_form": "⌁ŧ˘ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-t",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "道路",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "name",
                    "native_form": "⌁ɲ˘ɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-n",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "步行",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-23",
            "native": "ŧ° ⌂ɭ˘ɯ˘ ɲ˘ ⌂ɭˍɯˉ ʂ˙.",
            "romanized": "to lama na lume si.",
            "morpheme_break": "to cup na full si",
            "gloss": "那 杯 不 满 是",
            "translation_zh": "那个杯子不是满的。",
            "notes": "名词 + 否定判断。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "ŧ°",
                    "native_tokens": [
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "那",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lama",
                    "native_form": "⌂ɭ˘ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "杯",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lume",
                    "native_form": "⌂ɭˍɯˉ",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "满",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-24",
            "native": "ɯ˙ ◔ʃ˙ɯˉ ⟟ɭˉɯ˘ ◇ŧ°ɯˉ ɲˍ.",
            "romanized": "mi shime lema tome nu.",
            "morpheme_break": "mi new book find nu",
            "gloss": "我 新 书 找到 完成",
            "translation_zh": "我已经找到那本新书了。",
            "notes": "完成体与修饰。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shime",
                    "native_form": "◔ʃ˙ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "新的",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lema",
                    "native_form": "⟟ɭˉɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tome",
                    "native_form": "◇ŧ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-t",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "找到",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "ɲˍ",
                    "native_tokens": [
                        "c-n",
                        "v-u"
                    ],
                    "gloss_zh": "已完成",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-25",
            "native": "ʂ˘ɯ˙ ⌂ŧˉɯ˘ đˉ ⌁ʞ˘ɯˉ ʋˍ.",
            "romanized": "sami tema de kame vu.",
            "morpheme_break": "sami town de return vu",
            "gloss": "他们 城镇 向 返回 将",
            "translation_zh": "他们将返回城镇。",
            "notes": "意向体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sami",
                    "native_form": "ʂ˘ɯ˙",
                    "native_tokens": [
                        "c-s",
                        "v-a",
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "他们 / 她们",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tema",
                    "native_form": "⌂ŧˉɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "城镇",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "de",
                    "native_form": "đˉ",
                    "native_tokens": [
                        "c-d",
                        "v-e"
                    ],
                    "gloss_zh": "向 / 给",
                    "glyph_preview": [
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kame",
                    "native_form": "⌁ʞ˘ɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "返回",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "ʋˍ",
                    "native_tokens": [
                        "c-v",
                        "v-u"
                    ],
                    "gloss_zh": "将 / 打算",
                    "glyph_preview": [
                        "assets/language/c-v.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-26",
            "native": "ɯ˙ ∞ɯˉɯ˘ ʂˉ ⌁ɲ˘ɯˉ ɾ˙.",
            "romanized": "mi mema se name ri.",
            "morpheme_break": "mi friend se walk ri",
            "gloss": "我 朋友 和 步行 进行",
            "translation_zh": "我正和朋友一起走。",
            "notes": "共格并列。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "∞ɯˉɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "朋友",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "ʂˉ",
                    "native_tokens": [
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "和 / 用",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "name",
                    "native_form": "⌁ɲ˘ɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-n",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "步行",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-27",
            "native": "⌂ɭˉɯ˘ŧ° ◡ɭ˘ɯˉ ʂ˙.",
            "romanized": "lemato lame si.",
            "morpheme_break": "book__place quiet si",
            "gloss": "书之处 安静 是",
            "translation_zh": "书房很安静。",
            "notes": "地点派生。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "lemato",
                    "native_form": "⌂ɭˉɯ˘ŧ°",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a",
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "书之地",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lame",
                    "native_form": "◡ɭ˘ɯˉ",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "安静",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-28",
            "native": "◠đ˙ɯ˘ɾˉɲ ◡ɭ˙ɯ˘ ⟟ɠ°ɯ˘ þ˘.",
            "romanized": "dimaren lima goma pa.",
            "morpheme_break": "teach__agent letter read pa",
            "gloss": "教授者 书信 读 过去",
            "translation_zh": "教师读了信。",
            "notes": "职业词条。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "dimaren",
                    "native_form": "◠đ˙ɯ˘ɾˉɲ",
                    "native_tokens": [
                        "det-human",
                        "c-d",
                        "v-i",
                        "c-m",
                        "v-a",
                        "c-r",
                        "v-e",
                        "c-n"
                    ],
                    "gloss_zh": "教授者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-n.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lima",
                    "native_form": "◡ɭ˙ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书信",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "goma",
                    "native_form": "⟟ɠ°ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-29",
            "native": "◠đ˙ɯ˘ɾˉɲ ɠˉ ◡ɲˉɯ˘ ∞ɾˍɯˉ ʂ˙.",
            "romanized": "dimaren ge nema rume si.",
            "morpheme_break": "teach__agent ge voice gentle si",
            "gloss": "教授者 的 声音 温和 是",
            "translation_zh": "老师的声音很温和。",
            "notes": "描述人物特征。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "dimaren",
                    "native_form": "◠đ˙ɯ˘ɾˉɲ",
                    "native_tokens": [
                        "det-human",
                        "c-d",
                        "v-i",
                        "c-m",
                        "v-a",
                        "c-r",
                        "v-e",
                        "c-n"
                    ],
                    "gloss_zh": "教授者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-n.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ge",
                    "native_form": "ɠˉ",
                    "native_tokens": [
                        "c-g",
                        "v-e"
                    ],
                    "gloss_zh": "的",
                    "glyph_preview": [
                        "assets/language/c-g.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nema",
                    "native_form": "◡ɲˉɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-n",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "声音",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "rume",
                    "native_form": "∞ɾˍɯˉ",
                    "native_tokens": [
                        "det-bond",
                        "c-r",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "温和",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-30",
            "native": "⟟ʎˍɯ˘ ʂˉ ⟟βˍɯ˘ ɾ˙.",
            "romanized": "yuma se buma ri.",
            "morpheme_break": "tool se build ri",
            "gloss": "工具 用 建造 进行",
            "translation_zh": "正在用工具建造。",
            "notes": "工具格。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yuma",
                    "native_form": "⟟ʎˍɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-y",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工具",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "ʂˉ",
                    "native_tokens": [
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "和 / 用",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "buma",
                    "native_form": "⟟βˍɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-b",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "建造",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-b.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-31",
            "native": "⟟ʎ˙ɯ˘ ≈ʞ˘ɯ˘ ɭ° ⌁ɰˉɯ˘ ɾ˙.",
            "romanized": "yima kama lo wema ri.",
            "morpheme_break": "boat river lo go ri",
            "gloss": "船 河 在 去 进行",
            "translation_zh": "船正在河上前行。",
            "notes": "移动场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yima",
                    "native_form": "⟟ʎ˙ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-y",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "船",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈ʞ˘ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "河",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wema",
                    "native_form": "⌁ɰˉɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-32",
            "native": "◔ʂ°ɯ˘ ɦ˘ ∞ŧ˙ɯ˘ ɭ° ⟟ɦˍɯ˘ ∞ƒ˘ɯ˘ þ˘.",
            "romanized": "soma ha tima lo huma fama pa.",
            "morpheme_break": "morning ha market lo bread buy pa",
            "gloss": "清晨 话题 集市 在 面饼 买 过去",
            "translation_zh": "清晨时，我在集市买了面饼。",
            "notes": "叙事句首时间话题。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "soma",
                    "native_form": "◔ʂ°ɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-s",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "清晨",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ha",
                    "native_form": "ɦ˘",
                    "native_tokens": [
                        "c-h",
                        "v-a"
                    ],
                    "gloss_zh": "话题",
                    "glyph_preview": [
                        "assets/language/c-h.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tima",
                    "native_form": "∞ŧ˙ɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-t",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "集市",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "huma",
                    "native_form": "⟟ɦˍɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-h",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "面饼",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "fama",
                    "native_form": "∞ƒ˘ɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-f",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "购买",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-f.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-33",
            "native": "◔ʂˍɯ˘ ⌂þ˙ɯ˘ ɭ° ◡ʋˍɯ˘ ◡ɰˍɯ˘ þ˘.",
            "romanized": "suma pima lo vuma wuma pa.",
            "morpheme_break": "evening home lo song hear pa",
            "gloss": "傍晚 家 在 歌 听见 过去",
            "translation_zh": "傍晚在家听见了歌声。",
            "notes": "时间 + 处所叙事。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "suma",
                    "native_form": "◔ʂˍɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-s",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "傍晚",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pima",
                    "native_form": "⌂þ˙ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "家",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vuma",
                    "native_form": "◡ʋˍɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-v",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "歌",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wuma",
                    "native_form": "◡ɰˍɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-w",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "听见",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-34",
            "native": "◔ʂ˙ɯ˘ ◔ʞ˙ɯ˘ ɭ° ◔ʂ˘ɯ˘ ◠ɰ°ɯ˘ þ˘.",
            "romanized": "sima kima lo sama woma pa.",
            "morpheme_break": "night sky lo star see pa",
            "gloss": "夜晚 天 在 星 看见 过去",
            "translation_zh": "夜里看见了星星。",
            "notes": "自然场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sima",
                    "native_form": "◔ʂ˙ɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-s",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "夜晚",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kima",
                    "native_form": "◔ʞ˙ɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "天",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "sama",
                    "native_form": "◔ʂ˘ɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-s",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "星",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "woma",
                    "native_form": "◠ɰ°ɯ˘",
                    "native_tokens": [
                        "det-human",
                        "c-w",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "看见",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-35",
            "native": "⟟ɰ˘ɯ˘ ◔ʞˉɯˉ ɲˍ.",
            "romanized": "wama keme nu.",
            "morpheme_break": "work-n begin nu",
            "gloss": "工作 开始 已成",
            "translation_zh": "工作已经开始了。",
            "notes": "开始与完成的并置。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "wama",
                    "native_form": "⟟ɰ˘ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工作",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "keme",
                    "native_form": "◔ʞˉɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "开始",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "ɲˍ",
                    "native_tokens": [
                        "c-n",
                        "v-u"
                    ],
                    "gloss_zh": "已完成",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-36",
            "native": "ŧ˙ ◇þˍɯˉ ≈ʃ˙ɯ˘ ʞˉ?",
            "romanized": "ti pume shima ke?",
            "morpheme_break": "ti need water ke",
            "gloss": "你 需要 水 疑问",
            "translation_zh": "你需要水吗？",
            "notes": "带情态语义的问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pume",
                    "native_form": "◇þˍɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-p",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "需要",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shima",
                    "native_form": "≈ʃ˙ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-sh",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "水",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-37",
            "native": "ɯ˙ ∞ɯˉɯ˘ ∞ŧ˙ɯˉ ʋˍ.",
            "romanized": "mi mema time vu.",
            "morpheme_break": "mi friend help vu",
            "gloss": "我 朋友 帮助 将",
            "translation_zh": "我会帮助朋友。",
            "notes": "未来意向。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "∞ɯˉɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "朋友",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "time",
                    "native_form": "∞ŧ˙ɯˉ",
                    "native_tokens": [
                        "det-bond",
                        "c-t",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "帮助",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "ʋˍ",
                    "native_tokens": [
                        "c-v",
                        "v-u"
                    ],
                    "gloss_zh": "将 / 打算",
                    "glyph_preview": [
                        "assets/language/c-v.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-38",
            "native": "ɲˉ ⌁ŧ˘ɯ˘ ŧ° ⌁ɦ˘ɯˉ ʂ˙.",
            "romanized": "ne tama to hame si.",
            "morpheme_break": "ne road to far si",
            "gloss": "这 道路 那 远 是",
            "translation_zh": "这条路到那边很远。",
            "notes": "指示与距离。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "ɲˉ",
                    "native_tokens": [
                        "c-n",
                        "v-e"
                    ],
                    "gloss_zh": "这",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tama",
                    "native_form": "⌁ŧ˘ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-t",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "道路",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "ŧ°",
                    "native_tokens": [
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "那",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "hame",
                    "native_form": "⌁ɦ˘ɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-h",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "远",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-39",
            "native": "◇ɦ°ɯˉɯ˘ ⟐ʂ˘ɯˉ ɲ˘ ʂ˙.",
            "romanized": "homema same na si.",
            "morpheme_break": "good__abs small na si",
            "gloss": "善之性质 小 不 是",
            "translation_zh": "善意并不小。",
            "notes": "形容词名词化。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "homema",
                    "native_form": "◇ɦ°ɯˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-h",
                        "v-o",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "好之性",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "same",
                    "native_form": "⟐ʂ˘ɯˉ",
                    "native_tokens": [
                        "det-mark",
                        "c-s",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "小",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-40",
            "native": "◇ʞˍɦ°ɯˉ ⌁ŧ˘ɯ˘ ɲ˘ ◇ƒˉɯ˘.",
            "romanized": "kuhome tama na fema.",
            "morpheme_break": "good__neg road na choose",
            "gloss": "不好之态 道路 不 选择",
            "translation_zh": "不要选择不好的路。",
            "notes": "反义派生。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "kuhome",
                    "native_form": "◇ʞˍɦ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-k",
                        "v-u",
                        "c-h",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "不好",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tama",
                    "native_form": "⌁ŧ˘ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-t",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "道路",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "fema",
                    "native_form": "◇ƒˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-f",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "选择",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-f.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-41",
            "native": "ɯ˙ ʂ˘ ⌁ɰ˙ɯ˘ ʎ˘ ◇đ˘ɯ˘.",
            "romanized": "mi sa wima ya dama.",
            "morpheme_break": "mi sa come ya know",
            "gloss": "我 他 来 从句 知道",
            "translation_zh": "我知道他来了。",
            "notes": "从句作宾语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "ʂ˘",
                    "native_tokens": [
                        "c-s",
                        "v-a"
                    ],
                    "gloss_zh": "他 / 她 / 它",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⌁ɰ˙ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "dama",
                    "native_form": "◇đ˘ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-d",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "知道",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-42",
            "native": "◠ɯ˙ɯ˘ ∞ɯ°ɯ˘ ʂˉ ⌂ŧˉɯ˘ đˉ ⌁ɰˉɯ˘ þ˘.",
            "romanized": "mima moma se tema de wema pa.",
            "morpheme_break": "child parent se town de go pa",
            "gloss": "孩子 父母 和 城镇 向 去 过去",
            "translation_zh": "孩子和父母去了城镇。",
            "notes": "并列主语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mima",
                    "native_form": "◠ɯ˙ɯ˘",
                    "native_tokens": [
                        "det-human",
                        "c-m",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "孩子",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "moma",
                    "native_form": "∞ɯ°ɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "父母",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "ʂˉ",
                    "native_tokens": [
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "和 / 用",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tema",
                    "native_form": "⌂ŧˉɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "城镇",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "de",
                    "native_form": "đˉ",
                    "native_tokens": [
                        "c-d",
                        "v-e"
                    ],
                    "gloss_zh": "向 / 给",
                    "glyph_preview": [
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wema",
                    "native_form": "⌁ɰˉɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-43",
            "native": "ɯ˙ ◇ʐ˙ɯ˘ ⟟ɠ˙ɯ˘ ɾ˙.",
            "romanized": "mi zima gima ri.",
            "morpheme_break": "mi memory write ri",
            "gloss": "我 记忆 写 进行",
            "translation_zh": "我正在写记忆。",
            "notes": "抽象宾语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zima",
                    "native_form": "◇ʐ˙ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "记忆",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "gima",
                    "native_form": "⟟ɠ˙ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "写",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-44",
            "native": "ŧ° ⌂þ˙ɯ˘ ◔ʃ°ɯˉ ʂ˙.",
            "romanized": "to pima shome si.",
            "morpheme_break": "to home old si",
            "gloss": "那 家 旧 是",
            "translation_zh": "那座房子很旧。",
            "notes": "判断句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "ŧ°",
                    "native_tokens": [
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "那",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pima",
                    "native_form": "⌂þ˙ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "家",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shome",
                    "native_form": "◔ʃ°ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "旧的",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-45",
            "native": "∞ɯˉɯ˘ ɠˉ ◠ɯ˙ɯ˘ ⌂ŧ°ɯ˘ ɭ° ◇đˉɯ˘ ɾ˙.",
            "romanized": "mema ge mima toma lo dema ri.",
            "morpheme_break": "friend ge child school lo learn ri",
            "gloss": "朋友 的 孩子 学校 在 学习 进行",
            "translation_zh": "朋友的孩子正在学校学习。",
            "notes": "双层名词短语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "∞ɯˉɯ˘",
                    "native_tokens": [
                        "det-bond",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "朋友",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ge",
                    "native_form": "ɠˉ",
                    "native_tokens": [
                        "c-g",
                        "v-e"
                    ],
                    "gloss_zh": "的",
                    "glyph_preview": [
                        "assets/language/c-g.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mima",
                    "native_form": "◠ɯ˙ɯ˘",
                    "native_tokens": [
                        "det-human",
                        "c-m",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "孩子",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "toma",
                    "native_form": "⌂ŧ°ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学校",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lo",
                    "native_form": "ɭ°",
                    "native_tokens": [
                        "c-l",
                        "v-o"
                    ],
                    "gloss_zh": "在 / 于",
                    "glyph_preview": [
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "dema",
                    "native_form": "◇đˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-d",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-46",
            "native": "ʂ˘ɯ˙ ⌂þˍɯ˘ ɲ˘ ⌁ƒˍɯ˘.",
            "romanized": "sami puma na fuma.",
            "morpheme_break": "sami door na close",
            "gloss": "他们 门 不 关闭",
            "translation_zh": "他们没有关门。",
            "notes": "否定及物句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sami",
                    "native_form": "ʂ˘ɯ˙",
                    "native_tokens": [
                        "c-s",
                        "v-a",
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "他们 / 她们",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "puma",
                    "native_form": "⌂þˍɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "门",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "ɲ˘",
                    "native_tokens": [
                        "c-n",
                        "v-a"
                    ],
                    "gloss_zh": "不",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "fuma",
                    "native_form": "⌁ƒˍɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-f",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "关闭",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-f.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-47",
            "native": "ɯ˙ ⌁ŧ˘ɯ˘ ʞ° ⌁ʞ˘ɯˉ þ˘.",
            "romanized": "mi tama ko kame pa.",
            "morpheme_break": "mi road ko return pa",
            "gloss": "我 道路 从 返回 过去",
            "translation_zh": "我从路上返回了。",
            "notes": "来源 + 返回。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tama",
                    "native_form": "⌁ŧ˘ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-t",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "道路",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ko",
                    "native_form": "ʞ°",
                    "native_tokens": [
                        "c-k",
                        "v-o"
                    ],
                    "gloss_zh": "从",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kame",
                    "native_form": "⌁ʞ˘ɯˉ",
                    "native_tokens": [
                        "det-motion",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "返回",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-48",
            "native": "ʂ˘ ◇ʐ°ɯ˘ ◡đˍɯ˘ þ˘.",
            "romanized": "sa zoma duma pa.",
            "morpheme_break": "sa idea say pa",
            "gloss": "他 想法 说出 过去",
            "translation_zh": "他说出了自己的想法。",
            "notes": "抽象内容表达。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "ʂ˘",
                    "native_tokens": [
                        "c-s",
                        "v-a"
                    ],
                    "gloss_zh": "他 / 她 / 它",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zoma",
                    "native_form": "◇ʐ°ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "想法",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "duma",
                    "native_form": "◡đˍɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-d",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "说出",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-49",
            "native": "◡ʎ˘ɯ˘ ◡ɠ˘ɯ˘ ʎ˘ ◡ʎˉɯ˘ ⌁ɰ˙ɯ˘.",
            "romanized": "yama gama ya yema wima.",
            "morpheme_break": "question ask ya answer come",
            "gloss": "问题 提出 从句 回答 到来",
            "translation_zh": "问题一提出，回答就来了。",
            "notes": "过程型从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yama",
                    "native_form": "◡ʎ˘ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "问题",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "gama",
                    "native_form": "◡ɠ˘ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-g",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "提问",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "yema",
                    "native_form": "◡ʎˉɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "回答",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⌁ɰ˙ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-50",
            "native": "ɯ˙ ◡ɭ°ɯ˘ ◇đˉɯ˘ ◇þ°ɯˉ.",
            "romanized": "mi loma dema pome.",
            "morpheme_break": "mi language learn want",
            "gloss": "我 语言 学习 想要",
            "translation_zh": "我想学习这门语言。",
            "notes": "意愿结构。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "loma",
                    "native_form": "◡ɭ°ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "语言",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "dema",
                    "native_form": "◇đˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-d",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pome",
                    "native_form": "◇þ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-p",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "想要",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-51",
            "native": "ŧ˙ ◠đ°ɯ˘ɾˉɲ ʂ˙ ʞˉ?",
            "romanized": "ti domaren si ke?",
            "morpheme_break": "ti speak__agent si ke",
            "gloss": "你 说话者 是 疑问",
            "translation_zh": "你是使用者之一吗？",
            "notes": "施事者派生与问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "domaren",
                    "native_form": "◠đ°ɯ˘ɾˉɲ",
                    "native_tokens": [
                        "det-human",
                        "c-d",
                        "v-o",
                        "c-m",
                        "v-a",
                        "c-r",
                        "v-e",
                        "c-n"
                    ],
                    "gloss_zh": "说话者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-n.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-52",
            "native": "ɲˉ ◡ʎˉɯ˘ ◇ɭ˙ɯˉ ʂ˙ ʞˉ?",
            "romanized": "ne yema lime si ke?",
            "morpheme_break": "ne answer clear si ke",
            "gloss": "这 回答 清晰 是 疑问",
            "translation_zh": "这个回答清楚吗？",
            "notes": "问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "ɲˉ",
                    "native_tokens": [
                        "c-n",
                        "v-e"
                    ],
                    "gloss_zh": "这",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "yema",
                    "native_form": "◡ʎˉɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "回答",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lime",
                    "native_form": "◇ɭ˙ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-l",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "清晰",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "ʂ˙",
                    "native_tokens": [
                        "c-s",
                        "v-i"
                    ],
                    "gloss_zh": "是 / 在 / 存在",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "ʞˉ",
                    "native_tokens": [
                        "c-k",
                        "v-e"
                    ],
                    "gloss_zh": "吗",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": "?",
                    "native_form": "?",
                    "native_tokens": [],
                    "gloss_zh": "?"
                }
            ]
        },
        {
            "id": "ex-53",
            "native": "◡ɭ˘ɯˉʂˉ ⟟ɠ°ɯ˘.",
            "romanized": "lamese goma.",
            "morpheme_break": "quiet__adv read",
            "gloss": "安静地 阅读",
            "translation_zh": "安静地读。",
            "notes": "方式副词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "lamese",
                    "native_form": "◡ɭ˘ɯˉʂˉ",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-a",
                        "c-m",
                        "v-e",
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "安静地",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "goma",
                    "native_form": "⟟ɠ°ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-54",
            "native": "ɯ˙ ŧ˙ ∞ŧ˙ɯˉ ʎ˘ ◇ɦ°ɯˉɯ˘ ◔ɲˍɯˉ.",
            "romanized": "mi ti time ya homema nume.",
            "morpheme_break": "mi ti help ya good__abs grow",
            "gloss": "我 你 帮助 从句 善 增长",
            "translation_zh": "当我帮助你时，善意也会增长。",
            "notes": "从句 + 抽象名词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "ŧ˙",
                    "native_tokens": [
                        "c-t",
                        "v-i"
                    ],
                    "gloss_zh": "你",
                    "glyph_preview": [
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "time",
                    "native_form": "∞ŧ˙ɯˉ",
                    "native_tokens": [
                        "det-bond",
                        "c-t",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "帮助",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "homema",
                    "native_form": "◇ɦ°ɯˉɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-h",
                        "v-o",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "好之性",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nume",
                    "native_form": "◔ɲˍɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-n",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "增长",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-55",
            "native": "⟟ʎ˙ɯ˘ ≈ʞ˘ɯ˘ ʞ° ⌂ŧˉɯ˘ đˉ ⌁ɰˉɯ˘.",
            "romanized": "yima kama ko tema de wema.",
            "morpheme_break": "boat river ko town de go",
            "gloss": "船 河 从 城镇 向 去",
            "translation_zh": "船从河道向城镇驶去。",
            "notes": "起点与终点。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yima",
                    "native_form": "⟟ʎ˙ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-y",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "船",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈ʞ˘ɯ˘",
                    "native_tokens": [
                        "det-water",
                        "c-k",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "河",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ko",
                    "native_form": "ʞ°",
                    "native_tokens": [
                        "c-k",
                        "v-o"
                    ],
                    "gloss_zh": "从",
                    "glyph_preview": [
                        "assets/language/c-k.svg",
                        "assets/language/v-o.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tema",
                    "native_form": "⌂ŧˉɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-t",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "城镇",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-t.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "de",
                    "native_form": "đˉ",
                    "native_tokens": [
                        "c-d",
                        "v-e"
                    ],
                    "gloss_zh": "向 / 给",
                    "glyph_preview": [
                        "assets/language/c-d.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wema",
                    "native_form": "⌁ɰˉɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-56",
            "native": "⟟ʎ°ɯ˘ ʂˉ ⌂ɭ˘ɯ˘ ⟟ƒ˙ɯ˘.",
            "romanized": "yoma se lama fima.",
            "morpheme_break": "cloth se cup clean",
            "gloss": "布 用 杯 清洁",
            "translation_zh": "用布擦拭杯子。",
            "notes": "工具动作。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yoma",
                    "native_form": "⟟ʎ°ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-y",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "布",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "ʂˉ",
                    "native_tokens": [
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "和 / 用",
                    "glyph_preview": [
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lama",
                    "native_form": "⌂ɭ˘ɯ˘",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "杯",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "fima",
                    "native_form": "⟟ƒ˙ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-f",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "清洁",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-f.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-57",
            "native": "◔ʃ˘ɯ˘ ◔ʞˉɯˉ þ˘ ʎ˘ ◔ʃ˙ɯˉ ⟟ɰ˘ɯ˘ ⌁ɰ˙ɯ˘.",
            "romanized": "shama keme pa ya shime wama wima.",
            "morpheme_break": "year begin pa ya new work-n come",
            "gloss": "年 开始 过去 从句 新 工作 到来",
            "translation_zh": "一年开始时，新工作也来了。",
            "notes": "叙事连接。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "shama",
                    "native_form": "◔ʃ˘ɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "年",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "keme",
                    "native_form": "◔ʞˉɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "开始",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "þ˘",
                    "native_tokens": [
                        "c-p",
                        "v-a"
                    ],
                    "gloss_zh": "过去",
                    "glyph_preview": [
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shime",
                    "native_form": "◔ʃ˙ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "新的",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wama",
                    "native_form": "⟟ɰ˘ɯ˘",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工作",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⌁ɰ˙ɯ˘",
                    "native_tokens": [
                        "det-motion",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-58",
            "native": "◔ʃˉɯ˘ ◔ʞ˙ɯˉ ɲˍ ʎ˘ ◇ʐ˙ɯ˘ ◔þ˘ɯˉ.",
            "romanized": "shema kime nu ya zima pame.",
            "morpheme_break": "month finish nu ya memory remain",
            "gloss": "月度 结束 完成 从句 记忆 留下",
            "translation_zh": "一个月结束后，记忆仍然留下。",
            "notes": "时间从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "shema",
                    "native_form": "◔ʃˉɯ˘",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "月度",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kime",
                    "native_form": "◔ʞ˙ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "结束",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "ɲˍ",
                    "native_tokens": [
                        "c-n",
                        "v-u"
                    ],
                    "gloss_zh": "已完成",
                    "glyph_preview": [
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "ʎ˘",
                    "native_tokens": [
                        "c-y",
                        "v-a"
                    ],
                    "gloss_zh": "使从句接入",
                    "glyph_preview": [
                        "assets/language/c-y.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zima",
                    "native_form": "◇ʐ˙ɯ˘",
                    "native_tokens": [
                        "det-mind",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "记忆",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pame",
                    "native_form": "◔þ˘ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-p",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "留下",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-59",
            "native": "ɯ˙ ◔ʃ°ɯˉ ◡ɭ˙ɯ˘ ◇þˉɯˉ ɾ˙.",
            "romanized": "mi shome lima peme ri.",
            "morpheme_break": "mi old letter remember ri",
            "gloss": "我 旧 书信 记得 进行",
            "translation_zh": "我正回想那封旧信。",
            "notes": "回忆场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "ɯ˙",
                    "native_tokens": [
                        "c-m",
                        "v-i"
                    ],
                    "gloss_zh": "我",
                    "glyph_preview": [
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shome",
                    "native_form": "◔ʃ°ɯˉ",
                    "native_tokens": [
                        "det-time",
                        "c-sh",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "旧的",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "lima",
                    "native_form": "◡ɭ˙ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "书信",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "peme",
                    "native_form": "◇þˉɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-p",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "记得",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "ɾ˙",
                    "native_tokens": [
                        "c-r",
                        "v-i"
                    ],
                    "gloss_zh": "进行",
                    "glyph_preview": [
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        },
        {
            "id": "ex-60",
            "native": "◡ɭ°ɯ˘ ◇ɾ°ɯˉ ⌂ʞ°ɯˉ ʋˍ.",
            "romanized": "loma rome kome vu.",
            "morpheme_break": "language true live vu",
            "gloss": "语言 真实 居住 将",
            "translation_zh": "这门语言将真实地活下去。",
            "notes": "愿景句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "loma",
                    "native_form": "◡ɭ°ɯ˘",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "语言",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "rome",
                    "native_form": "◇ɾ°ɯˉ",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "真实",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kome",
                    "native_form": "⌂ʞ°ɯˉ",
                    "native_tokens": [
                        "det-place",
                        "c-k",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "居住",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "ʋˍ",
                    "native_tokens": [
                        "c-v",
                        "v-u"
                    ],
                    "gloss_zh": "将 / 打算",
                    "glyph_preview": [
                        "assets/language/c-v.svg",
                        "assets/language/v-u.svg"
                    ]
                },
                {
                    "kind": "punct",
                    "romanized": ".",
                    "native_form": ".",
                    "native_tokens": [],
                    "gloss_zh": "."
                }
            ]
        }
    ],
    "texts": [
        {
            "id": "text-01",
            "title": "自我介绍",
            "summary": "最小可用自我介绍：住处、学习、写作与愿望。",
            "sentences": [
                {
                    "id": "ex-03",
                    "native": "ɯ˙ ⌂þ˙ɯ˘ ɭ° ʂ˙.",
                    "romanized": "mi pima lo si.",
                    "morpheme_break": "mi home lo si",
                    "gloss": "我 家 在 系词",
                    "translation_zh": "我在家。",
                    "notes": "处所句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pima",
                            "native_form": "⌂þ˙ɯ˘",
                            "native_tokens": [
                                "det-place",
                                "c-p",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "家",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-p.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lo",
                            "native_form": "ɭ°",
                            "native_tokens": [
                                "c-l",
                                "v-o"
                            ],
                            "gloss_zh": "在 / 于",
                            "glyph_preview": [
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "si",
                            "native_form": "ʂ˙",
                            "native_tokens": [
                                "c-s",
                                "v-i"
                            ],
                            "gloss_zh": "是 / 在 / 存在",
                            "glyph_preview": [
                                "assets/language/c-s.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-07",
                    "native": "ɲ˘ɯ˙ ⌂ŧ°ɯ˘ ɭ° ◇đˉɯ˘ ɾ˙.",
                    "romanized": "nami toma lo dema ri.",
                    "morpheme_break": "nami school lo learn ri",
                    "gloss": "我们 学校 在 学习 进行",
                    "translation_zh": "我们正在学校学习。",
                    "notes": "进行中的处所活动。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "nami",
                            "native_form": "ɲ˘ɯ˙",
                            "native_tokens": [
                                "c-n",
                                "v-a",
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我们",
                            "glyph_preview": [
                                "assets/language/c-n.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "toma",
                            "native_form": "⌂ŧ°ɯ˘",
                            "native_tokens": [
                                "det-place",
                                "c-t",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "学校",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-t.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lo",
                            "native_form": "ɭ°",
                            "native_tokens": [
                                "c-l",
                                "v-o"
                            ],
                            "gloss_zh": "在 / 于",
                            "glyph_preview": [
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "dema",
                            "native_form": "◇đˉɯ˘",
                            "native_tokens": [
                                "det-mind",
                                "c-d",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "学习",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-d.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "ɾ˙",
                            "native_tokens": [
                                "c-r",
                                "v-i"
                            ],
                            "gloss_zh": "进行",
                            "glyph_preview": [
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-08",
                    "native": "ɯ˙ ◡ɭ˙ɯ˘ ⟟ɠ˙ɯ˘ ɲˍ.",
                    "romanized": "mi lima gima nu.",
                    "morpheme_break": "mi letter write nu",
                    "gloss": "我 书信 写 完成",
                    "translation_zh": "我已经写完信了。",
                    "notes": "完成体。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lima",
                            "native_form": "◡ɭ˙ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-l",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "书信",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-l.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "gima",
                            "native_form": "⟟ɠ˙ɯ˘",
                            "native_tokens": [
                                "det-craft",
                                "c-g",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "写",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-g.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "nu",
                            "native_form": "ɲˍ",
                            "native_tokens": [
                                "c-n",
                                "v-u"
                            ],
                            "gloss_zh": "已完成",
                            "glyph_preview": [
                                "assets/language/c-n.svg",
                                "assets/language/v-u.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-50",
                    "native": "ɯ˙ ◡ɭ°ɯ˘ ◇đˉɯ˘ ◇þ°ɯˉ.",
                    "romanized": "mi loma dema pome.",
                    "morpheme_break": "mi language learn want",
                    "gloss": "我 语言 学习 想要",
                    "translation_zh": "我想学习这门语言。",
                    "notes": "意愿结构。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "loma",
                            "native_form": "◡ɭ°ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-l",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "语言",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "dema",
                            "native_form": "◇đˉɯ˘",
                            "native_tokens": [
                                "det-mind",
                                "c-d",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "学习",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-d.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pome",
                            "native_form": "◇þ°ɯˉ",
                            "native_tokens": [
                                "det-mind",
                                "c-p",
                                "v-o",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "想要",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-p.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-60",
                    "native": "◡ɭ°ɯ˘ ◇ɾ°ɯˉ ⌂ʞ°ɯˉ ʋˍ.",
                    "romanized": "loma rome kome vu.",
                    "morpheme_break": "language true live vu",
                    "gloss": "语言 真实 居住 将",
                    "translation_zh": "这门语言将真实地活下去。",
                    "notes": "愿景句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "loma",
                            "native_form": "◡ɭ°ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-l",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "语言",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "rome",
                            "native_form": "◇ɾ°ɯˉ",
                            "native_tokens": [
                                "det-mind",
                                "c-r",
                                "v-o",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "真实",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-r.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "kome",
                            "native_form": "⌂ʞ°ɯˉ",
                            "native_tokens": [
                                "det-place",
                                "c-k",
                                "v-o",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "居住",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-k.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "vu",
                            "native_form": "ʋˍ",
                            "native_tokens": [
                                "c-v",
                                "v-u"
                            ],
                            "gloss_zh": "将 / 打算",
                            "glyph_preview": [
                                "assets/language/c-v.svg",
                                "assets/language/v-u.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                }
            ]
        },
        {
            "id": "text-02",
            "title": "清晨集市",
            "summary": "带时间、地点、交换和移动的短叙事。",
            "sentences": [
                {
                    "id": "ex-26",
                    "native": "ɯ˙ ∞ɯˉɯ˘ ʂˉ ⌁ɲ˘ɯˉ ɾ˙.",
                    "romanized": "mi mema se name ri.",
                    "morpheme_break": "mi friend se walk ri",
                    "gloss": "我 朋友 和 步行 进行",
                    "translation_zh": "我正和朋友一起走。",
                    "notes": "共格并列。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "mema",
                            "native_form": "∞ɯˉɯ˘",
                            "native_tokens": [
                                "det-bond",
                                "c-m",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "朋友",
                            "glyph_preview": [
                                "assets/language/det-bond.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "se",
                            "native_form": "ʂˉ",
                            "native_tokens": [
                                "c-s",
                                "v-e"
                            ],
                            "gloss_zh": "和 / 用",
                            "glyph_preview": [
                                "assets/language/c-s.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "name",
                            "native_form": "⌁ɲ˘ɯˉ",
                            "native_tokens": [
                                "det-motion",
                                "c-n",
                                "v-a",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "步行",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-n.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "ɾ˙",
                            "native_tokens": [
                                "c-r",
                                "v-i"
                            ],
                            "gloss_zh": "进行",
                            "glyph_preview": [
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-31",
                    "native": "⟟ʎ˙ɯ˘ ≈ʞ˘ɯ˘ ɭ° ⌁ɰˉɯ˘ ɾ˙.",
                    "romanized": "yima kama lo wema ri.",
                    "morpheme_break": "boat river lo go ri",
                    "gloss": "船 河 在 去 进行",
                    "translation_zh": "船正在河上前行。",
                    "notes": "移动场景。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "yima",
                            "native_form": "⟟ʎ˙ɯ˘",
                            "native_tokens": [
                                "det-craft",
                                "c-y",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "船",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "kama",
                            "native_form": "≈ʞ˘ɯ˘",
                            "native_tokens": [
                                "det-water",
                                "c-k",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "河",
                            "glyph_preview": [
                                "assets/language/det-water.svg",
                                "assets/language/c-k.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lo",
                            "native_form": "ɭ°",
                            "native_tokens": [
                                "c-l",
                                "v-o"
                            ],
                            "gloss_zh": "在 / 于",
                            "glyph_preview": [
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wema",
                            "native_form": "⌁ɰˉɯ˘",
                            "native_tokens": [
                                "det-motion",
                                "c-w",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "去",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "ɾ˙",
                            "native_tokens": [
                                "c-r",
                                "v-i"
                            ],
                            "gloss_zh": "进行",
                            "glyph_preview": [
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-32",
                    "native": "◔ʂ°ɯ˘ ɦ˘ ∞ŧ˙ɯ˘ ɭ° ⟟ɦˍɯ˘ ∞ƒ˘ɯ˘ þ˘.",
                    "romanized": "soma ha tima lo huma fama pa.",
                    "morpheme_break": "morning ha market lo bread buy pa",
                    "gloss": "清晨 话题 集市 在 面饼 买 过去",
                    "translation_zh": "清晨时，我在集市买了面饼。",
                    "notes": "叙事句首时间话题。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "soma",
                            "native_form": "◔ʂ°ɯ˘",
                            "native_tokens": [
                                "det-time",
                                "c-s",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "清晨",
                            "glyph_preview": [
                                "assets/language/det-time.svg",
                                "assets/language/c-s.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ha",
                            "native_form": "ɦ˘",
                            "native_tokens": [
                                "c-h",
                                "v-a"
                            ],
                            "gloss_zh": "话题",
                            "glyph_preview": [
                                "assets/language/c-h.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "tima",
                            "native_form": "∞ŧ˙ɯ˘",
                            "native_tokens": [
                                "det-bond",
                                "c-t",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "集市",
                            "glyph_preview": [
                                "assets/language/det-bond.svg",
                                "assets/language/c-t.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lo",
                            "native_form": "ɭ°",
                            "native_tokens": [
                                "c-l",
                                "v-o"
                            ],
                            "gloss_zh": "在 / 于",
                            "glyph_preview": [
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "huma",
                            "native_form": "⟟ɦˍɯ˘",
                            "native_tokens": [
                                "det-craft",
                                "c-h",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "面饼",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-h.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "fama",
                            "native_form": "∞ƒ˘ɯ˘",
                            "native_tokens": [
                                "det-bond",
                                "c-f",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "购买",
                            "glyph_preview": [
                                "assets/language/det-bond.svg",
                                "assets/language/c-f.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "þ˘",
                            "native_tokens": [
                                "c-p",
                                "v-a"
                            ],
                            "gloss_zh": "过去",
                            "glyph_preview": [
                                "assets/language/c-p.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-33",
                    "native": "◔ʂˍɯ˘ ⌂þ˙ɯ˘ ɭ° ◡ʋˍɯ˘ ◡ɰˍɯ˘ þ˘.",
                    "romanized": "suma pima lo vuma wuma pa.",
                    "morpheme_break": "evening home lo song hear pa",
                    "gloss": "傍晚 家 在 歌 听见 过去",
                    "translation_zh": "傍晚在家听见了歌声。",
                    "notes": "时间 + 处所叙事。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "suma",
                            "native_form": "◔ʂˍɯ˘",
                            "native_tokens": [
                                "det-time",
                                "c-s",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "傍晚",
                            "glyph_preview": [
                                "assets/language/det-time.svg",
                                "assets/language/c-s.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pima",
                            "native_form": "⌂þ˙ɯ˘",
                            "native_tokens": [
                                "det-place",
                                "c-p",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "家",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-p.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lo",
                            "native_form": "ɭ°",
                            "native_tokens": [
                                "c-l",
                                "v-o"
                            ],
                            "gloss_zh": "在 / 于",
                            "glyph_preview": [
                                "assets/language/c-l.svg",
                                "assets/language/v-o.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "vuma",
                            "native_form": "◡ʋˍɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-v",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "歌",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-v.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wuma",
                            "native_form": "◡ɰˍɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-w",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "听见",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "þ˘",
                            "native_tokens": [
                                "c-p",
                                "v-a"
                            ],
                            "gloss_zh": "过去",
                            "glyph_preview": [
                                "assets/language/c-p.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-42",
                    "native": "◠ɯ˙ɯ˘ ∞ɯ°ɯ˘ ʂˉ ⌂ŧˉɯ˘ đˉ ⌁ɰˉɯ˘ þ˘.",
                    "romanized": "mima moma se tema de wema pa.",
                    "morpheme_break": "child parent se town de go pa",
                    "gloss": "孩子 父母 和 城镇 向 去 过去",
                    "translation_zh": "孩子和父母去了城镇。",
                    "notes": "并列主语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mima",
                            "native_form": "◠ɯ˙ɯ˘",
                            "native_tokens": [
                                "det-human",
                                "c-m",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "孩子",
                            "glyph_preview": [
                                "assets/language/det-human.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "moma",
                            "native_form": "∞ɯ°ɯ˘",
                            "native_tokens": [
                                "det-bond",
                                "c-m",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "父母",
                            "glyph_preview": [
                                "assets/language/det-bond.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "se",
                            "native_form": "ʂˉ",
                            "native_tokens": [
                                "c-s",
                                "v-e"
                            ],
                            "gloss_zh": "和 / 用",
                            "glyph_preview": [
                                "assets/language/c-s.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "tema",
                            "native_form": "⌂ŧˉɯ˘",
                            "native_tokens": [
                                "det-place",
                                "c-t",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "城镇",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-t.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "de",
                            "native_form": "đˉ",
                            "native_tokens": [
                                "c-d",
                                "v-e"
                            ],
                            "gloss_zh": "向 / 给",
                            "glyph_preview": [
                                "assets/language/c-d.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wema",
                            "native_form": "⌁ɰˉɯ˘",
                            "native_tokens": [
                                "det-motion",
                                "c-w",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "去",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "þ˘",
                            "native_tokens": [
                                "c-p",
                                "v-a"
                            ],
                            "gloss_zh": "过去",
                            "glyph_preview": [
                                "assets/language/c-p.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                }
            ]
        },
        {
            "id": "text-03",
            "title": "记忆与回答",
            "summary": "抽象语义场：问题、回答、记忆与故事。",
            "sentences": [
                {
                    "id": "ex-41",
                    "native": "ɯ˙ ʂ˘ ⌁ɰ˙ɯ˘ ʎ˘ ◇đ˘ɯ˘.",
                    "romanized": "mi sa wima ya dama.",
                    "morpheme_break": "mi sa come ya know",
                    "gloss": "我 他 来 从句 知道",
                    "translation_zh": "我知道他来了。",
                    "notes": "从句作宾语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "sa",
                            "native_form": "ʂ˘",
                            "native_tokens": [
                                "c-s",
                                "v-a"
                            ],
                            "gloss_zh": "他 / 她 / 它",
                            "glyph_preview": [
                                "assets/language/c-s.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wima",
                            "native_form": "⌁ɰ˙ɯ˘",
                            "native_tokens": [
                                "det-motion",
                                "c-w",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "来",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ya",
                            "native_form": "ʎ˘",
                            "native_tokens": [
                                "c-y",
                                "v-a"
                            ],
                            "gloss_zh": "使从句接入",
                            "glyph_preview": [
                                "assets/language/c-y.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "dama",
                            "native_form": "◇đ˘ɯ˘",
                            "native_tokens": [
                                "det-mind",
                                "c-d",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "知道",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-d.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-43",
                    "native": "ɯ˙ ◇ʐ˙ɯ˘ ⟟ɠ˙ɯ˘ ɾ˙.",
                    "romanized": "mi zima gima ri.",
                    "morpheme_break": "mi memory write ri",
                    "gloss": "我 记忆 写 进行",
                    "translation_zh": "我正在写记忆。",
                    "notes": "抽象宾语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "zima",
                            "native_form": "◇ʐ˙ɯ˘",
                            "native_tokens": [
                                "det-mind",
                                "c-z",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "记忆",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "gima",
                            "native_form": "⟟ɠ˙ɯ˘",
                            "native_tokens": [
                                "det-craft",
                                "c-g",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "写",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-g.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "ɾ˙",
                            "native_tokens": [
                                "c-r",
                                "v-i"
                            ],
                            "gloss_zh": "进行",
                            "glyph_preview": [
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-48",
                    "native": "ʂ˘ ◇ʐ°ɯ˘ ◡đˍɯ˘ þ˘.",
                    "romanized": "sa zoma duma pa.",
                    "morpheme_break": "sa idea say pa",
                    "gloss": "他 想法 说出 过去",
                    "translation_zh": "他说出了自己的想法。",
                    "notes": "抽象内容表达。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "sa",
                            "native_form": "ʂ˘",
                            "native_tokens": [
                                "c-s",
                                "v-a"
                            ],
                            "gloss_zh": "他 / 她 / 它",
                            "glyph_preview": [
                                "assets/language/c-s.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "zoma",
                            "native_form": "◇ʐ°ɯ˘",
                            "native_tokens": [
                                "det-mind",
                                "c-z",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "想法",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "duma",
                            "native_form": "◡đˍɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-d",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "说出",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-d.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "þ˘",
                            "native_tokens": [
                                "c-p",
                                "v-a"
                            ],
                            "gloss_zh": "过去",
                            "glyph_preview": [
                                "assets/language/c-p.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-49",
                    "native": "◡ʎ˘ɯ˘ ◡ɠ˘ɯ˘ ʎ˘ ◡ʎˉɯ˘ ⌁ɰ˙ɯ˘.",
                    "romanized": "yama gama ya yema wima.",
                    "morpheme_break": "question ask ya answer come",
                    "gloss": "问题 提出 从句 回答 到来",
                    "translation_zh": "问题一提出，回答就来了。",
                    "notes": "过程型从句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "yama",
                            "native_form": "◡ʎ˘ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-y",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "问题",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "gama",
                            "native_form": "◡ɠ˘ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-g",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "提问",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-g.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ya",
                            "native_form": "ʎ˘",
                            "native_tokens": [
                                "c-y",
                                "v-a"
                            ],
                            "gloss_zh": "使从句接入",
                            "glyph_preview": [
                                "assets/language/c-y.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "yema",
                            "native_form": "◡ʎˉɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-y",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "回答",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wima",
                            "native_form": "⌁ɰ˙ɯ˘",
                            "native_tokens": [
                                "det-motion",
                                "c-w",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "来",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                },
                {
                    "id": "ex-59",
                    "native": "ɯ˙ ◔ʃ°ɯˉ ◡ɭ˙ɯ˘ ◇þˉɯˉ ɾ˙.",
                    "romanized": "mi shome lima peme ri.",
                    "morpheme_break": "mi old letter remember ri",
                    "gloss": "我 旧 书信 记得 进行",
                    "translation_zh": "我正回想那封旧信。",
                    "notes": "回忆场景。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "ɯ˙",
                            "native_tokens": [
                                "c-m",
                                "v-i"
                            ],
                            "gloss_zh": "我",
                            "glyph_preview": [
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "shome",
                            "native_form": "◔ʃ°ɯˉ",
                            "native_tokens": [
                                "det-time",
                                "c-sh",
                                "v-o",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "旧的",
                            "glyph_preview": [
                                "assets/language/det-time.svg",
                                "assets/language/c-sh.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "lima",
                            "native_form": "◡ɭ˙ɯ˘",
                            "native_tokens": [
                                "det-speech",
                                "c-l",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "书信",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-l.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "peme",
                            "native_form": "◇þˉɯˉ",
                            "native_tokens": [
                                "det-mind",
                                "c-p",
                                "v-e",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "记得",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-p.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "ɾ˙",
                            "native_tokens": [
                                "c-r",
                                "v-i"
                            ],
                            "gloss_zh": "进行",
                            "glyph_preview": [
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg"
                            ]
                        },
                        {
                            "kind": "punct",
                            "romanized": ".",
                            "native_form": ".",
                            "native_tokens": [],
                            "gloss_zh": "."
                        }
                    ]
                }
            ]
        }
    ],
    "site_localization": {
        "ui": {
            "pageTitle": {
                "romanized": "NERAL: roma, ruma, rimasa",
                "native": "NERAL: ⟟ɾ°ɯ˘, ⟟ɾˍɯ˘, ⟟ɾ˙ɯ˘ʂ˘"
            },
            "pageDescription": {
                "romanized": "ne rema roma, ruma, vama, zima se si.",
                "native": "ɲˉ ⌂ɾˉɯ˘ ⟟ɾ°ɯ˘, ⟟ɾˍɯ˘, ◡ʋ˘ɯ˘, ◇ʐ˙ɯ˘ ʂˉ ʂ˙."
            },
            "brandCode": "NERAL",
            "brandName": {
                "romanized": "rema",
                "native": "⌂ɾˉɯ˘"
            },
            "brandAria": {
                "romanized": "rama de kame",
                "native": "⟟ɾ˘ɯ˘ đˉ ⌁ʞ˘ɯˉ"
            },
            "menuToggle": {
                "romanized": "vima foma",
                "native": "⟐ʋ˙ɯ˘ ⌁ƒ°ɯ˘"
            },
            "navAria": {
                "romanized": "rema vima",
                "native": "⌂ɾˉɯ˘ ⟐ʋ˙ɯ˘"
            },
            "navSelected": {
                "romanized": "femate",
                "native": "⟟ƒˉɯ˘ŧˉ"
            },
            "navSpectrum": {
                "romanized": "vima",
                "native": "⟐ʋ˙ɯ˘"
            },
            "navArchive": {
                "romanized": "rimasa",
                "native": "⟟ɾ˙ɯ˘ʂ˘"
            },
            "navMethod": {
                "romanized": "vema",
                "native": "◇ʋˉɯ˘"
            },
            "heroKicker": {
                "romanized": "NERAL/ rema",
                "native": "NERAL/ ⌂ɾˉɯ˘"
            },
            "heroTitle": {
                "romanized": "roma, ruma, rimasa.",
                "native": "⟟ɾ°ɯ˘, ⟟ɾˍɯ˘, ⟟ɾ˙ɯ˘ʂ˘."
            },
            "heroSummary": {
                "romanized": "ne rema roma, ruma, vama, zima se si.",
                "native": "ɲˉ ⌂ɾˉɯ˘ ⟟ɾ°ɯ˘, ⟟ɾˍɯ˘, ◡ʋ˘ɯ˘, ◇ʐ˙ɯ˘ ʂˉ ʂ˙."
            },
            "heroActionPrimary": {
                "romanized": "femate",
                "native": "⟟ƒˉɯ˘ŧˉ"
            },
            "heroActionSecondary": {
                "romanized": "rimasa",
                "native": "⟟ɾ˙ɯ˘ʂ˘"
            },
            "metricTotal": {
                "romanized": "rima",
                "native": "⟟ɾ˙ɯ˘"
            },
            "metricArticles": {
                "romanized": "roma",
                "native": "⟟ɾ°ɯ˘"
            },
            "metricYears": {
                "romanized": "shama",
                "native": "◔ʃ˘ɯ˘"
            },
            "heroNote1": {
                "romanized": "lamese goma.",
                "native": "◡ɭ˘ɯˉʂˉ ⟟ɠ°ɯ˘."
            },
            "heroNote2": {
                "romanized": "loma rome kome vu.",
                "native": "◡ɭ°ɯ˘ ◇ɾ°ɯˉ ⌂ʞ°ɯˉ ʋˍ."
            },
            "selectedKicker": {
                "romanized": "femate",
                "native": "⟟ƒˉɯ˘ŧˉ"
            },
            "selectedTitle": {
                "romanized": "femate",
                "native": "⟟ƒˉɯ˘ŧˉ"
            },
            "spectrumKicker": {
                "romanized": "vima",
                "native": "⟐ʋ˙ɯ˘"
            },
            "spectrumTitle": {
                "romanized": "vima",
                "native": "⟐ʋ˙ɯ˘"
            },
            "archiveKicker": {
                "romanized": "rimasa",
                "native": "⟟ɾ˙ɯ˘ʂ˘"
            },
            "archiveTitle": {
                "romanized": "rimasa",
                "native": "⟟ɾ˙ɯ˘ʂ˘"
            },
            "searchLabel": {
                "romanized": "tomema",
                "native": "◇ŧ°ɯˉɯ˘"
            },
            "searchPlaceholder": {
                "romanized": "rima, roma, voma, nama",
                "native": "⟟ɾ˙ɯ˘, ⟟ɾ°ɯ˘, ◔ʋ°ɯ˘, ⟐ɲ˘ɯ˘"
            },
            "methodKicker": {
                "romanized": "vema",
                "native": "◇ʋˉɯ˘"
            },
            "methodTitle": {
                "romanized": "hime, home si.",
                "native": "◔ɦ˙ɯˉ, ◇ɦ°ɯˉ ʂ˙."
            },
            "methodQuote": {
                "romanized": "lema goma ya zoma nume.",
                "native": "⟟ɭˉɯ˘ ⟟ɠ°ɯ˘ ʎ˘ ◇ʐ°ɯ˘ ◔ɲˍɯˉ."
            },
            "methodLead": {
                "romanized": "ne vema zima se zoma time.",
                "native": "ɲˉ ◇ʋˉɯ˘ ◇ʐ˙ɯ˘ ʂˉ ◇ʐ°ɯ˘ ∞ŧ˙ɯˉ."
            },
            "methodBullet1": {
                "romanized": "gimama, home",
                "native": "◇ɠ˙ɯ˘ɯ˘, ◇ɦ°ɯˉ"
            },
            "methodBullet2": {
                "romanized": "rimasa, lime",
                "native": "⟟ɾ˙ɯ˘ʂ˘, ◇ɭ˙ɯˉ"
            },
            "methodBullet3": {
                "romanized": "hime, home",
                "native": "◔ɦ˙ɯˉ, ◇ɦ°ɯˉ"
            },
            "footerBrand": "NERAL",
            "footerRecordsAria": "site records",
            "footerGonganIconAlt": "record icon",
            "footerGongan": "CN Gongan 44090402441277",
            "footerBeian": "ICP 2026022061",
            "footerClassroom": {
                "romanized": "toma rama",
                "native": "⌂ŧ°ɯ˘ ⟟ɾ˘ɯ˘"
            },
            "footerAdmin": {
                "romanized": "ZeroClaw rama",
                "native": "ZeroClaw ⟟ɾ˘ɯ˘"
            },
            "footerGithub": {
                "romanized": "GitHub rama",
                "native": "GitHub ⟟ɾ˘ɯ˘"
            },
            "footerTop": {
                "romanized": "kame",
                "native": "⌁ʞ˘ɯˉ"
            },
            "themeDark": {
                "romanized": "sume",
                "native": "◔ʂˍɯˉ"
            },
            "themeLight": {
                "romanized": "some",
                "native": "◔ʂ°ɯˉ"
            },
            "latestTag": {
                "romanized": "shime",
                "native": "◔ʃ˙ɯˉ"
            },
            "selectedTag": {
                "romanized": "femate",
                "native": "⟟ƒˉɯ˘ŧˉ"
            },
            "expandAction": {
                "romanized": "foma",
                "native": "⌁ƒ°ɯ˘"
            },
            "readAction": {
                "romanized": "goma",
                "native": "⟟ɠ°ɯ˘"
            },
            "openAction": {
                "romanized": "foma",
                "native": "⌁ƒ°ɯ˘"
            },
            "allFilter": {
                "romanized": "rime",
                "native": "⟐ɾ˙ɯˉ"
            },
            "noContent": {
                "romanized": "rima na si.",
                "native": "⟟ɾ˙ɯ˘ ɲ˘ ʂ˙."
            },
            "noPrimary": {
                "romanized": "femate na si.",
                "native": "⟟ƒˉɯ˘ŧˉ ɲ˘ ʂ˙."
            },
            "noSecondary": {
                "romanized": "roma na si.",
                "native": "⟟ɾ°ɯ˘ ɲ˘ ʂ˙."
            },
            "noMatches": {
                "romanized": "rima na si.",
                "native": "⟟ɾ˙ɯ˘ ɲ˘ ʂ˙."
            },
            "closeReader": {
                "romanized": "fuma",
                "native": "⌁ƒˍɯ˘"
            },
            "closeReaderAria": {
                "romanized": "fuma",
                "native": "⌁ƒˍɯ˘"
            },
            "archiveUnit": {
                "romanized": "rima",
                "native": "⟟ɾ˙ɯ˘"
            },
            "wordUnit": {
                "romanized": "",
                "native": ""
            },
            "undated": {
                "romanized": "voma na",
                "native": "◔ʋ°ɯ˘ ɲ˘"
            },
            "toggleTo": "中文",
            "readerFallbackTitle": {
                "romanized": "rima",
                "native": "⟟ɾ˙ɯ˘"
            },
            "modalNeralCopy": {
                "romanized": "ne loma shime si. ne loma luma se nema se si.",
                "native": "ɲˉ ◡ɭ°ɯ˘ ◔ʃ˙ɯˉ ʂ˙. ɲˉ ◡ɭ°ɯ˘ ⟐ɭˍɯ˘ ʂˉ ◡ɲˉɯ˘ ʂˉ ʂ˙."
            },
            "modalLabLink": {
                "romanized": "loma rama",
                "native": "◡ɭ°ɯ˘ ⟟ɾ˘ɯ˘"
            }
        },
        "categories": {
            "articles": {
                "label": {
                    "romanized": "roma",
                    "native": "⟟ɾ°ɯ˘"
                },
                "summary": {
                    "romanized": "seme gimama si.",
                    "native": "⟐ʂˉɯˉ ◇ɠ˙ɯ˘ɯ˘ ʂ˙."
                }
            },
            "notes": {
                "label": {
                    "romanized": "ruma",
                    "native": "⟟ɾˍɯ˘"
                },
                "summary": {
                    "romanized": "sime ruma si.",
                    "native": "⟐ʂ˙ɯˉ ⟟ɾˍɯ˘ ʂ˙."
                }
            },
            "poetry": {
                "label": {
                    "romanized": "vama",
                    "native": "◡ʋ˘ɯ˘"
                },
                "summary": {
                    "romanized": "shome vama si.",
                    "native": "◔ʃ°ɯˉ ◡ʋ˘ɯ˘ ʂ˙."
                }
            },
            "memories": {
                "label": {
                    "romanized": "zima",
                    "native": "◇ʐ˙ɯ˘"
                },
                "summary": {
                    "romanized": "zima pame si.",
                    "native": "◇ʐ˙ɯ˘ ◔þ˘ɯˉ ʂ˙."
                }
            },
            "misc": {
                "label": {
                    "romanized": "rima",
                    "native": "⟟ɾ˙ɯ˘"
                },
                "summary": {
                    "romanized": "yuma se rima se si.",
                    "native": "⟟ʎˍɯ˘ ʂˉ ⟟ɾ˙ɯ˘ ʂˉ ʂ˙."
                }
            }
        },
        "content": {
            "translatedSummary": {
                "romanized": "gemate nu si.",
                "native": "⟟ɠˉɯ˘ŧˉ ɲˍ ʂ˙."
            },
            "untranslatedSummary": {
                "romanized": "gemate na si.",
                "native": "⟟ɠˉɯ˘ŧˉ ɲ˘ ʂ˙."
            },
            "untranslatedBody": {
                "romanized": "ne rima Neral gemate na si.",
                "native": "ɲˉ ⟟ɾ˙ɯ˘ Neral ⟟ɠˉɯ˘ŧˉ ɲ˘ ʂ˙."
            },
            "nameLabel": {
                "romanized": "nama",
                "native": "⟐ɲ˘ɯ˘"
            },
            "kindLabel": {
                "romanized": "vima",
                "native": "⟐ʋ˙ɯ˘"
            },
            "dateLabel": {
                "romanized": "voma",
                "native": "◔ʋ°ɯ˘"
            }
        },
        "overrides": {}
    }
};
