// ===== Project Neral language data =====
window.languageLabData = {
    "meta": {
        "codename": "Project Neral",
        "status": "V1 working draft",
        "counts": {
            "glyphs": 33,
            "lexicon": 668,
            "examples": 60,
            "texts": 3,
            "grammar_topics": 12
        },
        "notes": [
            "内部代号，不是最终语言名。",
            "网站当前仅提供静态展示、检索与评审。",
            "原生书写采用语义标记 + 音符链的双层表示。"
        ]
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
            "title": "Project Neral · 文字规范",
            "excerpt": "这套文字不是纯字母，也不是纯表意字。每个词通常由两部分构成：",
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
            "native_form": "◫",
            "romanized": "human",
            "ipa": "semantic",
            "semantic_role": "人与身体",
            "phonetic_role": "determinative",
            "fallback_symbol": "◫",
            "notes": "用于人、身体、身份、亲属和施事者。",
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
            "notes": "用于水、雨、河、饮食与流动液体。",
            "svg_asset": "assets/language/det-water.svg"
        },
        {
            "id": "det-time",
            "native_form": "✶",
            "romanized": "time",
            "ipa": "semantic",
            "semantic_role": "时间与光",
            "phonetic_role": "determinative",
            "fallback_symbol": "✶",
            "notes": "用于太阳、昼夜、时间和发光事物。",
            "svg_asset": "assets/language/det-time.svg"
        },
        {
            "id": "det-speech",
            "native_form": "◍",
            "romanized": "speech",
            "ipa": "semantic",
            "semantic_role": "言语与空气",
            "phonetic_role": "determinative",
            "fallback_symbol": "◍",
            "notes": "用于语言、声音、听觉、风和歌唱。",
            "svg_asset": "assets/language/det-speech.svg"
        },
        {
            "id": "det-motion",
            "native_form": "⟠",
            "romanized": "motion",
            "ipa": "semantic",
            "semantic_role": "运动与路径",
            "phonetic_role": "determinative",
            "fallback_symbol": "⟠",
            "notes": "用于移动、道路、方向、出入和姿态变化。",
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
            "notes": "用于地点、建筑、容器、场所与边界。",
            "svg_asset": "assets/language/det-place.svg"
        },
        {
            "id": "det-craft",
            "native_form": "⛭",
            "romanized": "craft",
            "ipa": "semantic",
            "semantic_role": "工具与制造",
            "phonetic_role": "determinative",
            "fallback_symbol": "⛭",
            "notes": "用于工具、制造、书写和人工产物。",
            "svg_asset": "assets/language/det-craft.svg"
        },
        {
            "id": "det-mind",
            "native_form": "◈",
            "romanized": "mind",
            "ipa": "semantic",
            "semantic_role": "思维与抽象",
            "phonetic_role": "determinative",
            "fallback_symbol": "◈",
            "notes": "用于认知、判断、记忆、法则与抽象概念。",
            "svg_asset": "assets/language/det-mind.svg"
        },
        {
            "id": "det-bond",
            "native_form": "⋈",
            "romanized": "bond",
            "ipa": "semantic",
            "semantic_role": "关系与社会",
            "phonetic_role": "determinative",
            "fallback_symbol": "⋈",
            "notes": "用于关系、交换、群体、家庭与社会结构。",
            "svg_asset": "assets/language/det-bond.svg"
        },
        {
            "id": "det-mark",
            "native_form": "⌇",
            "romanized": "mark",
            "ipa": "semantic",
            "semantic_role": "度量与记号",
            "phonetic_role": "determinative",
            "fallback_symbol": "⌇",
            "notes": "用于数字、名称、尺度、边界与记录性符号。",
            "svg_asset": "assets/language/det-mark.svg"
        },
        {
            "id": "c-m",
            "native_form": "⟂",
            "romanized": "m",
            "ipa": "/m/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟂",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-m.svg"
        },
        {
            "id": "c-n",
            "native_form": "⟃",
            "romanized": "n",
            "ipa": "/n/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟃",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-n.svg"
        },
        {
            "id": "c-p",
            "native_form": "⟄",
            "romanized": "p",
            "ipa": "/p/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟄",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-p.svg"
        },
        {
            "id": "c-b",
            "native_form": "⟅",
            "romanized": "b",
            "ipa": "/b/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟅",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-b.svg"
        },
        {
            "id": "c-t",
            "native_form": "⟆",
            "romanized": "t",
            "ipa": "/t/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟆",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-t.svg"
        },
        {
            "id": "c-d",
            "native_form": "⟇",
            "romanized": "d",
            "ipa": "/d/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟇",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-d.svg"
        },
        {
            "id": "c-k",
            "native_form": "⟈",
            "romanized": "k",
            "ipa": "/k/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟈",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-k.svg"
        },
        {
            "id": "c-g",
            "native_form": "⟉",
            "romanized": "g",
            "ipa": "/g/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟉",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-g.svg"
        },
        {
            "id": "c-f",
            "native_form": "⟊",
            "romanized": "f",
            "ipa": "/f/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟊",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-f.svg"
        },
        {
            "id": "c-v",
            "native_form": "⟋",
            "romanized": "v",
            "ipa": "/v/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟋",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-v.svg"
        },
        {
            "id": "c-s",
            "native_form": "⟌",
            "romanized": "s",
            "ipa": "/s/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟌",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-s.svg"
        },
        {
            "id": "c-z",
            "native_form": "⟍",
            "romanized": "z",
            "ipa": "/z/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟍",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-z.svg"
        },
        {
            "id": "c-sh",
            "native_form": "⟎",
            "romanized": "sh",
            "ipa": "/ʃ/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟎",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-sh.svg"
        },
        {
            "id": "c-h",
            "native_form": "⟏",
            "romanized": "h",
            "ipa": "/h/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟏",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-h.svg"
        },
        {
            "id": "c-l",
            "native_form": "⟐",
            "romanized": "l",
            "ipa": "/l/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟐",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-l.svg"
        },
        {
            "id": "c-r",
            "native_form": "⟑",
            "romanized": "r",
            "ipa": "/ɾ/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟑",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-r.svg"
        },
        {
            "id": "c-y",
            "native_form": "⟒",
            "romanized": "y",
            "ipa": "/j/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟒",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-y.svg"
        },
        {
            "id": "c-w",
            "native_form": "⟓",
            "romanized": "w",
            "ipa": "/w/",
            "semantic_role": "phonetic",
            "phonetic_role": "consonant",
            "fallback_symbol": "⟓",
            "notes": "音符链中的辅音记号。",
            "svg_asset": "assets/language/c-w.svg"
        },
        {
            "id": "v-a",
            "native_form": "⟔",
            "romanized": "a",
            "ipa": "/a/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "⟔",
            "notes": "音符链中的元音记号。",
            "svg_asset": "assets/language/v-a.svg"
        },
        {
            "id": "v-e",
            "native_form": "⟕",
            "romanized": "e",
            "ipa": "/e/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "⟕",
            "notes": "音符链中的元音记号。",
            "svg_asset": "assets/language/v-e.svg"
        },
        {
            "id": "v-i",
            "native_form": "⟖",
            "romanized": "i",
            "ipa": "/i/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "⟖",
            "notes": "音符链中的元音记号。",
            "svg_asset": "assets/language/v-i.svg"
        },
        {
            "id": "v-o",
            "native_form": "⟗",
            "romanized": "o",
            "ipa": "/o/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "⟗",
            "notes": "音符链中的元音记号。",
            "svg_asset": "assets/language/v-o.svg"
        },
        {
            "id": "v-u",
            "native_form": "⟘",
            "romanized": "u",
            "ipa": "/u/",
            "semantic_role": "phonetic",
            "phonetic_role": "vowel",
            "fallback_symbol": "⟘",
            "notes": "音符链中的元音记号。",
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
            "id": "take",
            "headword_native": "◫⟅⟔⟂⟔",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bama",
            "ipa": "bama",
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
            "headword_native": "◫⟅⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟅⟔⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟅⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟅⟔⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "carry",
            "headword_native": "⟠⟅⟕⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-b",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bema",
            "ipa": "bema",
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
            "headword_native": "⟠⟅⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟅⟕⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟅⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟅⟕⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "sit",
            "headword_native": "◫⟅⟖⟂⟔",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "bima",
            "ipa": "bima",
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
            "headword_native": "◫⟅⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟅⟖⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟅⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟅⟖⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "stand",
            "headword_native": "◫⟅⟗⟂⟔",
            "native_tokens": [
                "det-human",
                "c-b",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "boma",
            "ipa": "boma",
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
            "headword_native": "◫⟅⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟅⟗⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟅⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟅⟗⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "walk",
            "headword_native": "⟠⟅⟘⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-b",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "buma",
            "ipa": "buma",
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
            "headword_native": "⟠⟅⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟅⟘⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟅⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟅⟘⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "sleep",
            "headword_native": "◫⟇⟔⟂⟔",
            "native_tokens": [
                "det-human",
                "c-d",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dama",
            "ipa": "dama",
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
            "headword_native": "◫⟇⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟇⟔⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟇⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟇⟔⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "de",
            "headword_native": "⟇⟕",
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
            "id": "work-v",
            "headword_native": "⛭⟇⟕⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dema",
            "ipa": "dema",
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
            "headword_native": "⛭⟇⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟇⟕⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟇⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟇⟕⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⛭⟇⟖⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "dima",
            "ipa": "dima",
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
            "headword_native": "⛭⟇⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟇⟖⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟇⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟇⟖⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⛭⟇⟗⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-d",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "doma",
            "ipa": "doma",
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
            "headword_native": "⛭⟇⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟇⟗⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟇⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟇⟗⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "buy",
            "headword_native": "⋈⟇⟘⟂⟔",
            "native_tokens": [
                "det-bond",
                "c-d",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "duma",
            "ipa": "duma",
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
            "headword_native": "⋈⟇⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟇⟘⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟇⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟇⟘⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "run",
            "headword_native": "⟠⟊⟔⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-f",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fama",
            "ipa": "fama",
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
            "headword_native": "⟠⟊⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟊⟔⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟊⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟊⟔⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "wait",
            "headword_native": "✶⟊⟕⟂⟔",
            "native_tokens": [
                "det-time",
                "c-f",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fema",
            "ipa": "fema",
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
            "headword_native": "✶⟊⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟊⟕⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟊⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟊⟕⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "think",
            "headword_native": "◈⟊⟖⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-f",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fima",
            "ipa": "fima",
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
            "headword_native": "◈⟊⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟊⟖⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟊⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟊⟖⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "grow",
            "headword_native": "✶⟊⟗⟂⟔",
            "native_tokens": [
                "det-time",
                "c-f",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "foma",
            "ipa": "foma",
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
            "headword_native": "✶⟊⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟊⟗⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟊⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟊⟗⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "remain",
            "headword_native": "✶⟊⟘⟂⟔",
            "native_tokens": [
                "det-time",
                "c-f",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "fuma",
            "ipa": "fuma",
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
            "headword_native": "✶⟊⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟊⟘⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟊⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟊⟘⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "choose",
            "headword_native": "◈⟉⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-g",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gama",
            "ipa": "gama",
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
            "headword_native": "◈⟉⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟉⟔⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟉⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟉⟔⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "ge",
            "headword_native": "⟉⟕",
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
            "id": "clean",
            "headword_native": "⛭⟉⟕⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-g",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gema",
            "ipa": "gema",
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
            "headword_native": "⛭⟉⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟉⟕⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟉⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟉⟕⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⟠⟉⟖⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-g",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "gima",
            "ipa": "gima",
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
            "headword_native": "⟠⟉⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟉⟖⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟉⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟉⟖⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⟠⟉⟗⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-g",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "goma",
            "ipa": "goma",
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
            "headword_native": "⟠⟉⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟉⟗⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟉⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟉⟗⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "give",
            "headword_native": "⋈⟉⟘⟂⟔",
            "native_tokens": [
                "det-bond",
                "c-g",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "guma",
            "ipa": "guma",
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
            "headword_native": "⋈⟉⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟉⟘⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟉⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟉⟘⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "ha",
            "headword_native": "⟏⟔",
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
            "headword_native": "✶⟏⟔⟂⟔",
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
            "headword_native": "✶⟏⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟏⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟏⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟏⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "many",
            "headword_native": "⌇⟏⟔⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-h",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "hame",
            "ipa": "hame",
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
            "headword_native": "◈⟏⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌇⟏⟔⟂⟕⟑⟖",
            "native_tokens": [
                "det-mark",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌇⟏⟔⟂⟕⟌⟕",
            "native_tokens": [
                "det-mark",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "stone",
            "headword_native": "⌂⟏⟕⟂⟔",
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
            "headword_native": "⌂⟏⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟏⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟏⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟏⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "true",
            "headword_native": "◈⟏⟕⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-h",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "heme",
            "ipa": "heme",
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
            "headword_native": "◈⟏⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◈⟏⟕⟂⟕⟑⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◈⟏⟕⟂⟕⟌⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "tree",
            "headword_native": "⌂⟏⟖⟂⟔",
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
            "headword_native": "⌂⟏⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟏⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟏⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟏⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "gentle",
            "headword_native": "⋈⟏⟖⟂⟕",
            "native_tokens": [
                "det-bond",
                "c-h",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "hime",
            "ipa": "hime",
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
            "headword_native": "◈⟏⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⋈⟏⟖⟂⟕⟑⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⋈⟏⟖⟂⟕⟌⟕",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "grain",
            "headword_native": "≈⟏⟗⟂⟔",
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
            "headword_native": "≈⟏⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟏⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "≈⟏⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟏⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "strong",
            "headword_native": "◫⟏⟗⟂⟕",
            "native_tokens": [
                "det-human",
                "c-h",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "home",
            "ipa": "home",
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
            "headword_native": "◈⟏⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◫⟏⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◫⟏⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "bread",
            "headword_native": "⛭⟏⟘⟂⟔",
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
            "headword_native": "⛭⟏⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟏⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟏⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟏⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "river",
            "headword_native": "≈⟈⟔⟂⟔",
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
            "headword_native": "≈⟈⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟈⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "≈⟈⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟈⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "cold",
            "headword_native": "≈⟈⟔⟂⟕",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kame",
            "ipa": "kame",
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
            "headword_native": "◈⟈⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "≈⟈⟔⟂⟕⟑⟖",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "kameri",
            "ipa": "kameri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "≈⟈⟔⟂⟕⟌⟕",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "kamese",
            "ipa": "kamese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "ke",
            "headword_native": "⟈⟕",
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
            "headword_native": "⌂⟈⟕⟂⟔",
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
            "headword_native": "⌂⟈⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟈⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟈⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟈⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "new",
            "headword_native": "✶⟈⟕⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "keme",
            "ipa": "keme",
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
            "headword_native": "◈⟈⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟈⟕⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "kemeri",
            "ipa": "kemeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟈⟕⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "kemese",
            "ipa": "kemese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "sky",
            "headword_native": "✶⟈⟖⟂⟔",
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
            "headword_native": "✶⟈⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟈⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟈⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟈⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "old",
            "headword_native": "✶⟈⟖⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kime",
            "ipa": "kime",
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
            "headword_native": "◈⟈⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟈⟖⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "kimeri",
            "ipa": "kimeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟈⟖⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "kimese",
            "ipa": "kimese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "ko",
            "headword_native": "⟈⟗",
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
            "headword_native": "✶⟈⟗⟂⟔",
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
            "headword_native": "✶⟈⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟈⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟈⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟈⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "near",
            "headword_native": "⟠⟈⟗⟂⟕",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kome",
            "ipa": "kome",
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
            "headword_native": "◈⟈⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⟠⟈⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "komeri",
            "ipa": "komeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⟠⟈⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "komese",
            "ipa": "komese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "many__neg",
            "headword_native": "⌇⟈⟘⟏⟔⟂⟕",
            "native_tokens": [
                "det-mark",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "true__neg",
            "headword_native": "◈⟈⟘⟏⟕⟂⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "⋈⟈⟘⟏⟖⟂⟕",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "strong__neg",
            "headword_native": "◫⟈⟘⟏⟗⟂⟕",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "cold__neg",
            "headword_native": "≈⟈⟘⟈⟔⟂⟕",
            "native_tokens": [
                "det-water",
                "c-k",
                "v-u",
                "c-k",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kukame",
            "ipa": "kukame",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "✶⟈⟘⟈⟕⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-k",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kukeme",
            "ipa": "kukeme",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "✶⟈⟘⟈⟖⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-k",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kukime",
            "ipa": "kukime",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "⟠⟈⟘⟈⟗⟂⟕",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-u",
                "c-k",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kukome",
            "ipa": "kukome",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "far__neg",
            "headword_native": "⟠⟈⟘⟈⟘⟂⟕",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "moon",
            "headword_native": "✶⟈⟘⟂⟔",
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
            "headword_native": "✶⟈⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟈⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟈⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟈⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "far",
            "headword_native": "⟠⟈⟘⟂⟕",
            "native_tokens": [
                "det-motion",
                "c-k",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kume",
            "ipa": "kume",
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
            "headword_native": "◈⟈⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⟠⟈⟘⟂⟕⟑⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⟠⟈⟘⟂⟕⟌⟕",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "big__neg",
            "headword_native": "⌇⟈⟘⟄⟗⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-p",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kupome",
            "ipa": "kupome",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "small__neg",
            "headword_native": "⌇⟈⟘⟄⟘⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-p",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kupume",
            "ipa": "kupume",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "fast__neg",
            "headword_native": "⟠⟈⟘⟌⟔⟂⟕",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "✶⟈⟘⟌⟕⟂⟕",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "loud__neg",
            "headword_native": "◍⟈⟘⟎⟔⟂⟕",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "◈⟈⟘⟎⟕⟂⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "≈⟈⟘⟎⟖⟂⟕",
            "native_tokens": [
                "det-water",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "⌂⟈⟘⟎⟗⟂⟕",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "empty__neg",
            "headword_native": "⌂⟈⟘⟎⟘⟂⟕",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "good__neg",
            "headword_native": "◈⟈⟘⟌⟖⟂⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "◈⟈⟘⟌⟗⟂⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "quiet__neg",
            "headword_native": "◍⟈⟘⟌⟘⟂⟕",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "long__neg",
            "headword_native": "⌇⟈⟘⟆⟔⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-t",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kutame",
            "ipa": "kutame",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "short__neg",
            "headword_native": "⌇⟈⟘⟆⟕⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-k",
                "v-u",
                "c-t",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kuteme",
            "ipa": "kuteme",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "✶⟈⟘⟆⟖⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-t",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kutime",
            "ipa": "kutime",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "headword_native": "✶⟈⟘⟆⟗⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-t",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kutome",
            "ipa": "kutome",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "warm__neg",
            "headword_native": "✶⟈⟘⟆⟘⟂⟕",
            "native_tokens": [
                "det-time",
                "c-k",
                "v-u",
                "c-t",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "kutume",
            "ipa": "kutume",
            "pos": "adj",
            "gloss_zh": "不undefined",
            "definition_zh": "缺少、反转或偏离“undefined”。",
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
            "id": "cup",
            "headword_native": "⌂⟐⟔⟂⟔",
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
            "headword_native": "⌂⟐⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟐⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟐⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟐⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "book",
            "headword_native": "⛭⟐⟕⟂⟔",
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
            "headword_native": "⛭⟐⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟐⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟐⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟐⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "letter",
            "headword_native": "◍⟐⟖⟂⟔",
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
            "headword_native": "◍⟐⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟐⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟐⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟐⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "lo",
            "headword_native": "⟐⟗",
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
            "headword_native": "◍⟐⟗⟂⟔",
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
            "headword_native": "◍⟐⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟐⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟐⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟐⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "song",
            "headword_native": "◍⟐⟘⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-l",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "luma",
            "ipa": "luma",
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
            "headword_native": "◍⟐⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟐⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟐⟘⟂⟔⟌⟔",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟐⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "person",
            "headword_native": "◫⟂⟔⟂⟔",
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
            "headword_native": "◫⟂⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟂⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟂⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟂⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "remember",
            "headword_native": "◈⟂⟔⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mame",
            "ipa": "mame",
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
            "headword_native": "◈⟂⟔⟂⟕⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟂⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟂⟔⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟂⟔⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "friend",
            "headword_native": "⋈⟂⟕⟂⟔",
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
            "headword_native": "⋈⟂⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟂⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⋈⟂⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟂⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "forget",
            "headword_native": "◈⟂⟕⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "meme",
            "ipa": "meme",
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
            "headword_native": "◈⟂⟕⟂⟕⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟂⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟂⟕⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟂⟕⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "mi",
            "headword_native": "⟂⟖",
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
            "headword_native": "◫⟂⟖⟂⟔",
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
            "headword_native": "◫⟂⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟂⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟂⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟂⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "want",
            "headword_native": "◈⟂⟖⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mime",
            "ipa": "mime",
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
            "headword_native": "◈⟂⟖⟂⟕⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟂⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟂⟖⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟂⟖⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "mo",
            "headword_native": "⟂⟗",
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
            "headword_native": "⋈⟂⟗⟂⟔",
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
            "headword_native": "⋈⟂⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟂⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⋈⟂⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟂⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "need",
            "headword_native": "◈⟂⟗⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-m",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mome",
            "ipa": "mome",
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
            "headword_native": "◈⟂⟗⟂⟕⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟂⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟂⟗⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟂⟗⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "elder",
            "headword_native": "◫⟂⟘⟂⟔",
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
            "headword_native": "◫⟂⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟂⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟂⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟂⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "like",
            "headword_native": "⋈⟂⟘⟂⟕",
            "native_tokens": [
                "det-bond",
                "c-m",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "mume",
            "ipa": "mume",
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
            "headword_native": "⋈⟂⟘⟂⟕⟐⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟂⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟂⟘⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟂⟘⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "na",
            "headword_native": "⟃⟔",
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
            "headword_native": "⌇⟃⟔⟂⟔",
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
            "headword_native": "⌇⟃⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟃⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌇⟃⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟃⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "love",
            "headword_native": "⋈⟃⟔⟂⟕",
            "native_tokens": [
                "det-bond",
                "c-n",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "name",
            "ipa": "name",
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
            "headword_native": "⋈⟃⟔⟂⟕⟐⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟃⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟃⟔⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟃⟔⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "nami",
            "headword_native": "⟃⟔⟂⟖",
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
            "headword_native": "⟃⟕",
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
            "headword_native": "◍⟃⟕⟂⟔",
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
            "headword_native": "◍⟃⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟃⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟃⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟃⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "help",
            "headword_native": "⋈⟃⟕⟂⟕",
            "native_tokens": [
                "det-bond",
                "c-n",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "neme",
            "ipa": "neme",
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
            "headword_native": "⋈⟃⟕⟂⟕⟐⟖",
            "native_tokens": [
                "det-bond",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟃⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟃⟕⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟃⟕⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "hand",
            "headword_native": "◫⟃⟖⟂⟔",
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
            "headword_native": "◫⟃⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟃⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟃⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟃⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "find",
            "headword_native": "◈⟃⟖⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-n",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "nime",
            "ipa": "nime",
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
            "headword_native": "◈⟃⟖⟂⟕⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟃⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟃⟖⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟃⟖⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "eye",
            "headword_native": "◫⟃⟗⟂⟔",
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
            "headword_native": "◫⟃⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟃⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟃⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟃⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "lose",
            "headword_native": "◈⟃⟗⟂⟕",
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
            "headword_native": "◈⟃⟗⟂⟕⟐⟖",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟃⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟃⟗⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟃⟗⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "nu",
            "headword_native": "⟃⟘",
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
            "headword_native": "◫⟃⟘⟂⟔",
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
            "headword_native": "◫⟃⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟃⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟃⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟃⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "return",
            "headword_native": "⟠⟃⟘⟂⟕",
            "native_tokens": [
                "det-motion",
                "c-n",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "nume",
            "ipa": "nume",
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
            "headword_native": "⟠⟃⟘⟂⟕⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟃⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟃⟘⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟃⟘⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "pa",
            "headword_native": "⟄⟔",
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
            "headword_native": "◫⟄⟔⟂⟔",
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
            "headword_native": "◫⟄⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟄⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◫⟄⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟄⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "begin",
            "headword_native": "✶⟄⟔⟂⟕",
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
            "headword_native": "✶⟄⟔⟂⟕⟐⟖",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟄⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟄⟔⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟄⟔⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "heart",
            "headword_native": "◈⟄⟕⟂⟔",
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
            "headword_native": "◈⟄⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟄⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟄⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟄⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "finish",
            "headword_native": "✶⟄⟕⟂⟕",
            "native_tokens": [
                "det-time",
                "c-p",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "peme",
            "ipa": "peme",
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
            "headword_native": "✶⟄⟕⟂⟕⟐⟖",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟄⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟄⟕⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟄⟕⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "home",
            "headword_native": "⌂⟄⟖⟂⟔",
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
            "headword_native": "⌂⟄⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟄⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟄⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟄⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "live",
            "headword_native": "⌂⟄⟖⟂⟕",
            "native_tokens": [
                "det-place",
                "c-p",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pime",
            "ipa": "pime",
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
            "headword_native": "⌂⟄⟖⟂⟕⟐⟖",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟄⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟄⟖⟂⟕⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟄⟖⟂⟕⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "room",
            "headword_native": "⌂⟄⟗⟂⟔",
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
            "headword_native": "⌂⟄⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟄⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟄⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟄⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "big",
            "headword_native": "⌇⟄⟗⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pome",
            "ipa": "pome",
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
            "headword_native": "◈⟄⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌇⟄⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "pomeri",
            "ipa": "pomeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌇⟄⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "pomese",
            "ipa": "pomese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "door",
            "headword_native": "⌂⟄⟘⟂⟔",
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
            "headword_native": "⌂⟄⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟄⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟄⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟄⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "small",
            "headword_native": "⌇⟄⟘⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "pume",
            "ipa": "pume",
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
            "headword_native": "◈⟄⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌇⟄⟘⟂⟕⟑⟖",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "pumeri",
            "ipa": "pumeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌇⟄⟘⟂⟕⟌⟕",
            "native_tokens": [
                "det-mark",
                "c-p",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "pumese",
            "ipa": "pumese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "story",
            "headword_native": "◈⟑⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rama",
            "ipa": "rama",
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
            "headword_native": "◈⟑⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟑⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟑⟔⟂⟔⟌⟔",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟑⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "◈⟑⟕⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rema",
            "ipa": "rema",
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
            "headword_native": "◈⟑⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟑⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟑⟕⟂⟔⟌⟔",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟑⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "ri",
            "headword_native": "⟑⟖",
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
            "id": "memory",
            "headword_native": "◈⟑⟖⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "rima",
            "ipa": "rima",
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
            "headword_native": "◈⟑⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟑⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟑⟖⟂⟔⟌⟔",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟑⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "◈⟑⟗⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "roma",
            "ipa": "roma",
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
            "headword_native": "◈⟑⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟑⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟑⟗⟂⟔⟌⟔",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟑⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "◈⟑⟘⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-r",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "ruma",
            "ipa": "ruma",
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
            "headword_native": "◈⟑⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟑⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◈⟑⟘⟂⟔⟌⟔",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟑⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
            "derived_from": "joy",
            "tags": [
                "abstract",
                "emotion",
                "root",
                "derived",
                "locative"
            ]
        },
        {
            "id": "sa",
            "headword_native": "⟌⟔",
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
            "headword_native": "✶⟌⟔⟂⟔",
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
            "headword_native": "✶⟌⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟌⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟌⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟌⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "fast",
            "headword_native": "⟠⟌⟔⟂⟕",
            "native_tokens": [
                "det-motion",
                "c-s",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "same",
            "ipa": "same",
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
            "headword_native": "◈⟌⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⟠⟌⟔⟂⟕⟑⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⟠⟌⟔⟂⟕⟌⟕",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "sami",
            "headword_native": "⟌⟔⟂⟖",
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
            "headword_native": "⟌⟕",
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
            "headword_native": "✶⟌⟕⟂⟔",
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
            "headword_native": "✶⟌⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟌⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟌⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟌⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "slow",
            "headword_native": "✶⟌⟕⟂⟕",
            "native_tokens": [
                "det-time",
                "c-s",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "seme",
            "ipa": "seme",
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
            "headword_native": "◈⟌⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟌⟕⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟌⟕⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "year",
            "headword_native": "✶⟎⟔⟂⟔",
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
            "headword_native": "✶⟎⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟎⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟎⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟎⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "loud",
            "headword_native": "◍⟎⟔⟂⟕",
            "native_tokens": [
                "det-speech",
                "c-sh",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shame",
            "ipa": "shame",
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
            "headword_native": "◈⟎⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◍⟎⟔⟂⟕⟑⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◍⟎⟔⟂⟕⟌⟕",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "month",
            "headword_native": "✶⟎⟕⟂⟔",
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
            "headword_native": "✶⟎⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟎⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟎⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟎⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "clear",
            "headword_native": "◈⟎⟕⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-sh",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sheme",
            "ipa": "sheme",
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
            "headword_native": "◈⟎⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◈⟎⟕⟂⟕⟑⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◈⟎⟕⟂⟕⟌⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "water",
            "headword_native": "≈⟎⟖⟂⟔",
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
            "headword_native": "≈⟎⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟎⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "≈⟎⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟎⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "deep",
            "headword_native": "≈⟎⟖⟂⟕",
            "native_tokens": [
                "det-water",
                "c-sh",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shime",
            "ipa": "shime",
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
            "headword_native": "◈⟎⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "≈⟎⟖⟂⟕⟑⟖",
            "native_tokens": [
                "det-water",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "≈⟎⟖⟂⟕⟌⟕",
            "native_tokens": [
                "det-water",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "rain",
            "headword_native": "≈⟎⟗⟂⟔",
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
            "headword_native": "≈⟎⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟎⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "≈⟎⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟎⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "full",
            "headword_native": "⌂⟎⟗⟂⟕",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shome",
            "ipa": "shome",
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
            "headword_native": "◈⟎⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌂⟎⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌂⟎⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "wind",
            "headword_native": "◍⟎⟘⟂⟔",
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
            "headword_native": "◍⟎⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟎⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟎⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟎⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "empty",
            "headword_native": "⌂⟎⟘⟂⟕",
            "native_tokens": [
                "det-place",
                "c-sh",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "shume",
            "ipa": "shume",
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
            "headword_native": "◈⟎⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌂⟎⟘⟂⟕⟑⟖",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌂⟎⟘⟂⟕⟌⟕",
            "native_tokens": [
                "det-place",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "si",
            "headword_native": "⟌⟖",
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
            "headword_native": "✶⟌⟖⟂⟔",
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
            "headword_native": "✶⟌⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟌⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟌⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟌⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "good",
            "headword_native": "◈⟌⟖⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sime",
            "ipa": "sime",
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
            "headword_native": "◈⟌⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◈⟌⟖⟂⟕⟑⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◈⟌⟖⟂⟕⟌⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "morning",
            "headword_native": "✶⟌⟗⟂⟔",
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
            "headword_native": "✶⟌⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟌⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟌⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟌⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "bad",
            "headword_native": "◈⟌⟗⟂⟕",
            "native_tokens": [
                "det-mind",
                "c-s",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "some",
            "ipa": "some",
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
            "headword_native": "◈⟌⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◈⟌⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◈⟌⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "evening",
            "headword_native": "✶⟌⟘⟂⟔",
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
            "headword_native": "✶⟌⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟌⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "✶⟌⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟌⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "quiet",
            "headword_native": "◍⟌⟘⟂⟕",
            "native_tokens": [
                "det-speech",
                "c-s",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "sume",
            "ipa": "sume",
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
            "headword_native": "◈⟌⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "◍⟌⟘⟂⟕⟑⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "◍⟌⟘⟂⟕⟌⟕",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "road",
            "headword_native": "⟠⟆⟔⟂⟔",
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
            "headword_native": "⟠⟆⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟆⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⟠⟆⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟆⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "long",
            "headword_native": "⌇⟆⟔⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-a",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tame",
            "ipa": "tame",
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
            "headword_native": "◈⟆⟔⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌇⟆⟔⟂⟕⟑⟖",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "tameri",
            "ipa": "tameri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌇⟆⟔⟂⟕⟌⟕",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-a",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "tamese",
            "ipa": "tamese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "tami",
            "headword_native": "⟆⟔⟂⟖",
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
            "headword_native": "⌂⟆⟕⟂⟔",
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
            "headword_native": "⌂⟆⟕⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟆⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟆⟕⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟆⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "short",
            "headword_native": "⌇⟆⟕⟂⟕",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-e",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "teme",
            "ipa": "teme",
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
            "headword_native": "◈⟆⟕⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "⌇⟆⟕⟂⟕⟑⟖",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "temeri",
            "ipa": "temeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "⌇⟆⟕⟂⟕⟌⟕",
            "native_tokens": [
                "det-mark",
                "c-t",
                "v-e",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "temese",
            "ipa": "temese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "ti",
            "headword_native": "⟆⟖",
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
            "headword_native": "⋈⟆⟖⟂⟔",
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
            "headword_native": "⋈⟆⟖⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟆⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⋈⟆⟖⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟆⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "bright",
            "headword_native": "✶⟆⟖⟂⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-i",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "time",
            "ipa": "time",
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
            "headword_native": "◈⟆⟖⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟆⟖⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "timeri",
            "ipa": "timeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟆⟖⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-i",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "timese",
            "ipa": "timese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "to",
            "headword_native": "⟆⟗",
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
            "headword_native": "⌂⟆⟗⟂⟔",
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
            "headword_native": "⌂⟆⟗⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟆⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟆⟗⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟆⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "dark",
            "headword_native": "✶⟆⟗⟂⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-o",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tome",
            "ipa": "tome",
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
            "headword_native": "◈⟆⟗⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟆⟗⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "tomeri",
            "ipa": "tomeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟆⟗⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-o",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "tomese",
            "ipa": "tomese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "field",
            "headword_native": "⌂⟆⟘⟂⟔",
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
            "headword_native": "⌂⟆⟘⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟆⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⌂⟆⟘⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟆⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "warm",
            "headword_native": "✶⟆⟘⟂⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-u",
                "c-m",
                "v-e"
            ],
            "headword_romanized": "tume",
            "ipa": "tume",
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
            "headword_native": "◈⟆⟘⟂⟕⟂⟔",
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
            "gloss_zh": "undefined之性",
            "definition_zh": "“undefined”这一性质本身。",
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
            "headword_native": "✶⟆⟘⟂⟕⟑⟖",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-r",
                "v-i"
            ],
            "headword_romanized": "tumeri",
            "ipa": "tumeri",
            "pos": "verb",
            "gloss_zh": "变得undefined",
            "definition_zh": "进入或呈现“undefined”的状态。",
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
            "headword_native": "✶⟆⟘⟂⟕⟌⟕",
            "native_tokens": [
                "det-time",
                "c-t",
                "v-u",
                "c-m",
                "v-e",
                "c-s",
                "v-e"
            ],
            "headword_romanized": "tumese",
            "ipa": "tumese",
            "pos": "adv",
            "gloss_zh": "undefined地",
            "definition_zh": "以“undefined”的方式。",
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
            "id": "question",
            "headword_native": "◍⟋⟔⟂⟔",
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
            "headword_native": "◍⟋⟔⟂⟔⟐⟖",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟋⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟋⟔⟂⟔⟌⟔",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟋⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "◍⟋⟕⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-v",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vema",
            "ipa": "vema",
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
            "headword_native": "◍⟋⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟋⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "◍⟋⟕⟂⟔⟌⟔",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟋⟕⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "⛭⟋⟖⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-v",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vima",
            "ipa": "vima",
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
            "headword_native": "⛭⟋⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟋⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟋⟖⟂⟔⟌⟔",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟋⟖⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "⛭⟋⟗⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-v",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "voma",
            "ipa": "voma",
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
            "headword_native": "⛭⟋⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟋⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟋⟗⟂⟔⟌⟔",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟋⟗⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "vu",
            "headword_native": "⟋⟘",
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
            "id": "tool",
            "headword_native": "⛭⟋⟘⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-v",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "vuma",
            "ipa": "vuma",
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
            "headword_native": "⛭⟋⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟋⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟋⟘⟂⟔⟌⟔",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟋⟘⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "id": "ask",
            "headword_native": "◍⟓⟔⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-w",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wama",
            "ipa": "wama",
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
            "headword_native": "◍⟓⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟓⟔⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wamama",
            "ipa": "wamama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟓⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟓⟔⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "wamate",
            "ipa": "wamate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "write",
            "headword_native": "⛭⟓⟕⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wema",
            "ipa": "wema",
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
            "headword_native": "⛭⟓⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟓⟕⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟓⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟓⟕⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⛭⟓⟖⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-w",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wima",
            "ipa": "wima",
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
            "headword_native": "⛭⟓⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟓⟖⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟓⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟓⟖⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "≈⟓⟗⟂⟔",
            "native_tokens": [
                "det-water",
                "c-w",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "woma",
            "ipa": "woma",
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
            "headword_native": "≈⟓⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-water",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟓⟗⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟓⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟓⟗⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "drink",
            "headword_native": "≈⟓⟘⟂⟔",
            "native_tokens": [
                "det-water",
                "c-w",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "wuma",
            "ipa": "wuma",
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
            "headword_native": "≈⟓⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-water",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟓⟘⟂⟔⟂⟔",
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
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟓⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟓⟘⟂⟔⟆⟕",
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
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "ya",
            "headword_native": "⟒⟔",
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
            "id": "know",
            "headword_native": "◈⟒⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yama",
            "ipa": "yama",
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
            "headword_native": "◈⟒⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟒⟔⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yamama",
            "ipa": "yamama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟒⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟒⟔⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-a",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "yamate",
            "ipa": "yamate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "learn",
            "headword_native": "◈⟒⟕⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yema",
            "ipa": "yema",
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
            "headword_native": "◈⟒⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-mind",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟒⟕⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yemama",
            "ipa": "yemama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟒⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟒⟕⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "yemate",
            "ipa": "yemate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "◍⟒⟖⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yima",
            "ipa": "yima",
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
            "headword_native": "◍⟒⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟒⟖⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yimama",
            "ipa": "yimama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟒⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟒⟖⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "yimate",
            "ipa": "yimate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "◍⟒⟗⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yoma",
            "ipa": "yoma",
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
            "headword_native": "◍⟒⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟒⟗⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yomama",
            "ipa": "yomama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟒⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟒⟗⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "yomate",
            "ipa": "yomate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "◍⟒⟘⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-y",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yuma",
            "ipa": "yuma",
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
            "headword_native": "◍⟒⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟒⟘⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "yumama",
            "ipa": "yumama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟒⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟒⟘⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-y",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "yumate",
            "ipa": "yumate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "id": "work-n",
            "headword_native": "⛭⟍⟔⟂⟔",
            "native_tokens": [
                "det-craft",
                "c-z",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zama",
            "ipa": "zama",
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
            "headword_native": "⛭⟍⟔⟂⟔⟐⟖",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined相关的",
            "definition_zh": "与“undefined”相关，或具有其属性。",
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
            "headword_native": "◫⟍⟔⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined之人",
            "definition_zh": "管理、使用、守护或代表“undefined”的人。",
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
            "headword_native": "⛭⟍⟔⟂⟔⟌⟔",
            "native_tokens": [
                "det-craft",
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
            "gloss_zh": "undefined群域",
            "definition_zh": "围绕“undefined”形成的一组事物、场域或集合。",
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
            "headword_native": "⌂⟍⟔⟂⟔⟆⟗",
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
            "gloss_zh": "undefined之地",
            "definition_zh": "与“undefined”关联的地点、场所或容器。",
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
            "headword_native": "⟠⟍⟕⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-z",
                "v-e",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zema",
            "ipa": "zema",
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
            "headword_native": "⟠⟍⟕⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟍⟕⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zemama",
            "ipa": "zemama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟍⟕⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟍⟕⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-z",
                "v-e",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "zemate",
            "ipa": "zemate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "⟠⟍⟖⟂⟔",
            "native_tokens": [
                "det-motion",
                "c-z",
                "v-i",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zima",
            "ipa": "zima",
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
            "headword_native": "⟠⟍⟖⟂⟔⟐⟖",
            "native_tokens": [
                "det-motion",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟍⟖⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zimama",
            "ipa": "zimama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟍⟖⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟍⟖⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-z",
                "v-i",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "zimate",
            "ipa": "zimate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "◫⟍⟗⟂⟔",
            "native_tokens": [
                "det-human",
                "c-z",
                "v-o",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zoma",
            "ipa": "zoma",
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
            "headword_native": "◫⟍⟗⟂⟔⟐⟖",
            "native_tokens": [
                "det-human",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟍⟗⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zomama",
            "ipa": "zomama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟍⟗⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟍⟗⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-z",
                "v-o",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "zomate",
            "ipa": "zomate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
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
            "headword_native": "◍⟍⟘⟂⟔",
            "native_tokens": [
                "det-speech",
                "c-z",
                "v-u",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zuma",
            "ipa": "zuma",
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
            "headword_native": "◍⟍⟘⟂⟔⟐⟖",
            "native_tokens": [
                "det-speech",
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
            "gloss_zh": "可undefined的",
            "definition_zh": "适合、能够或倾向于“undefined”。",
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
            "headword_native": "◈⟍⟘⟂⟔⟂⟔",
            "native_tokens": [
                "det-mind",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-m",
                "v-a"
            ],
            "headword_romanized": "zumama",
            "ipa": "zumama",
            "pos": "noun",
            "gloss_zh": "undefined之事",
            "definition_zh": "与“undefined”相关的动作、过程或事件。",
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
            "headword_native": "◫⟍⟘⟂⟔⟑⟕⟃",
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
            "gloss_zh": "undefined者",
            "definition_zh": "执行“undefined”的人。",
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
            "headword_native": "⛭⟍⟘⟂⟔⟆⟕",
            "native_tokens": [
                "det-craft",
                "c-z",
                "v-u",
                "c-m",
                "v-a",
                "c-t",
                "v-e"
            ],
            "headword_romanized": "zumate",
            "ipa": "zumate",
            "pos": "noun",
            "gloss_zh": "undefined之成物",
            "definition_zh": "由“undefined”产生、留下或完成的结果。",
            "derived_from": "hear",
            "tags": [
                "daily",
                "sense",
                "root",
                "derived",
                "result"
            ]
        }
    ],
    "examples": [
        {
            "id": "ex-01",
            "native": "⟂⟖ ≈⟎⟖⟂⟔ ≈⟓⟘⟂⟔ ⟑⟖.",
            "romanized": "mi shima wuma ri.",
            "morpheme_break": "mi water drink ri",
            "gloss": "我 水 喝 进行",
            "translation_zh": "我正在喝水。",
            "notes": "基础 SOV 与进行体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "≈⟎⟖⟂⟔",
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
                    "romanized": "wuma",
                    "native_form": "≈⟓⟘⟂⟔",
                    "native_tokens": [
                        "det-water",
                        "c-w",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "喝",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⟆⟖ ⛭⟐⟕⟂⟔ ⛭⟓⟖⟂⟔ ⟈⟕?",
            "romanized": "ti lema wima ke?",
            "morpheme_break": "ti book read ke",
            "gloss": "你 书 读 疑问",
            "translation_zh": "你读书吗？",
            "notes": "一般疑问。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "⟆⟖",
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
                    "native_form": "⛭⟐⟕⟂⟔",
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
                    "romanized": "wima",
                    "native_form": "⛭⟓⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "⟈⟕",
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
            "native": "⟂⟖ ⌂⟄⟖⟂⟔ ⟐⟗ ⟌⟖.",
            "romanized": "mi pima lo si.",
            "morpheme_break": "mi home lo si",
            "gloss": "我 家 在 系词",
            "translation_zh": "我在家。",
            "notes": "处所句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⌂⟄⟖⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "native_form": "⟌⟖",
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
            "native": "⟃⟕ ⌂⟄⟗⟂⟔ ⌂⟎⟗⟂⟕ ⟌⟖.",
            "romanized": "ne poma shome si.",
            "morpheme_break": "ne room full si",
            "gloss": "这 房间 满 是",
            "translation_zh": "这个房间是满的。",
            "notes": "系词 + 形容词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "⟃⟕",
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
                    "native_form": "⌂⟄⟗⟂⟔",
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
                    "romanized": "shome",
                    "native_form": "⌂⟎⟗⟂⟕",
                    "native_tokens": [
                        "det-place",
                        "c-sh",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "满",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟂⟖ ⛭⟏⟘⟂⟔ ⟃⟔ ≈⟓⟗⟂⟔.",
            "romanized": "mi huma na woma.",
            "morpheme_break": "mi bread na eat",
            "gloss": "我 面饼 不 吃",
            "translation_zh": "我不吃面饼。",
            "notes": "否定。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⛭⟏⟘⟂⟔",
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
                    "native_form": "⟃⟔",
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
                    "romanized": "woma",
                    "native_form": "≈⟓⟗⟂⟔",
                    "native_tokens": [
                        "det-water",
                        "c-w",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "吃",
                    "glyph_preview": [
                        "assets/language/det-water.svg",
                        "assets/language/c-w.svg",
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
            "id": "ex-06",
            "native": "⟌⟔ ⌂⟆⟕⟂⟔ ⟇⟕ ⟠⟍⟕⟂⟔ ⟄⟔.",
            "romanized": "sa tema de zema pa.",
            "morpheme_break": "sa town de go pa",
            "gloss": "他 城镇 向 去 过去",
            "translation_zh": "他去了镇上。",
            "notes": "移动与过去。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "⟌⟔",
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
                    "native_form": "⌂⟆⟕⟂⟔",
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
                    "native_form": "⟇⟕",
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
                    "romanized": "zema",
                    "native_form": "⟠⟍⟕⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "⟃⟔⟂⟖ ⌂⟆⟗⟂⟔ ⟐⟗ ◈⟒⟕⟂⟔ ⟑⟖.",
            "romanized": "nami toma lo yema ri.",
            "morpheme_break": "nami school lo learn ri",
            "gloss": "我们 学校 在 学习 进行",
            "translation_zh": "我们正在学校学习。",
            "notes": "进行中的处所活动。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "nami",
                    "native_form": "⟃⟔⟂⟖",
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
                    "native_form": "⌂⟆⟗⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "yema",
                    "native_form": "◈⟒⟕⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-y",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⟂⟖ ◍⟐⟖⟂⟔ ⛭⟓⟕⟂⟔ ⟃⟘.",
            "romanized": "mi lima wema nu.",
            "morpheme_break": "mi letter write nu",
            "gloss": "我 书信 写 完成",
            "translation_zh": "我已经写完信了。",
            "notes": "完成体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "◍⟐⟖⟂⟔",
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
                    "romanized": "wema",
                    "native_form": "⛭⟓⟕⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "写",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "⟃⟘",
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
            "native": "⋈⟂⟕⟂⟔ ⟉⟕ ⛭⟐⟕⟂⟔ ⟂⟖ ⟇⟕ ⋈⟉⟘⟂⟔ ⟄⟔.",
            "romanized": "mema ge lema mi de guma pa.",
            "morpheme_break": "friend ge book mi de give pa",
            "gloss": "朋友 的 书 我 向 给 过去",
            "translation_zh": "我把朋友的书给了出去。",
            "notes": "属格与过去。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "⋈⟂⟕⟂⟔",
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
                    "native_form": "⟉⟕",
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
                    "native_form": "⛭⟐⟕⟂⟔",
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
                    "native_form": "⟂⟖",
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
                    "native_form": "⟇⟕",
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
                    "romanized": "guma",
                    "native_form": "⋈⟉⟘⟂⟔",
                    "native_tokens": [
                        "det-bond",
                        "c-g",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "给",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-g.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "⟌⟔ ◍⟋⟔⟂⟔ ◍⟒⟘⟂⟔ ⟈⟕?",
            "romanized": "sa vama yuma ke?",
            "morpheme_break": "sa question say ke",
            "gloss": "他 问题 说 疑问",
            "translation_zh": "他提出问题了吗？",
            "notes": "带宾语的问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "⟌⟔",
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
                    "romanized": "vama",
                    "native_form": "◍⟋⟔⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-v",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "问题",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "yuma",
                    "native_form": "◍⟒⟘⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "说出",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ke",
                    "native_form": "⟈⟕",
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
            "native": "⟆⟗ ◈⟑⟔⟂⟔ ◈⟏⟕⟂⟕ ⟌⟖ ⟈⟕?",
            "romanized": "to rama heme si ke?",
            "morpheme_break": "to story true si ke",
            "gloss": "那 故事 真实 是 疑问",
            "translation_zh": "那个故事是真的吗？",
            "notes": "判断句问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "⟆⟗",
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
                    "romanized": "rama",
                    "native_form": "◈⟑⟔⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "故事",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "heme",
                    "native_form": "◈⟏⟕⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-h",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "真实",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
                    "native_form": "⟈⟕",
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
            "native": "⟂⟖ ⟉⟕ ⌇⟃⟔⟂⟔ ◈⟎⟕⟂⟕ ⟌⟖.",
            "romanized": "mi ge nama sheme si.",
            "morpheme_break": "mi ge name clear si",
            "gloss": "我 的 名字 清晰 是",
            "translation_zh": "我的名字很清晰。",
            "notes": "代词领属。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⟉⟕",
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
                    "native_form": "⌇⟃⟔⟂⟔",
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
                    "romanized": "sheme",
                    "native_form": "◈⟎⟕⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-sh",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "清晰",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⋈⟂⟗⟂⟔ ⟉⟕ ⌂⟄⟖⟂⟔ ⟠⟈⟗⟂⟕ ⟌⟖.",
            "romanized": "moma ge pima kome si.",
            "morpheme_break": "parent ge home near si",
            "gloss": "父母 的 家 近 是",
            "translation_zh": "父母的家很近。",
            "notes": "名词领属。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "moma",
                    "native_form": "⋈⟂⟗⟂⟔",
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
                    "native_form": "⟉⟕",
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
                    "native_form": "⌂⟄⟖⟂⟔",
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
                    "romanized": "kome",
                    "native_form": "⟠⟈⟗⟂⟕",
                    "native_tokens": [
                        "det-motion",
                        "c-k",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "近",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "≈⟈⟔⟂⟔ ⟂⟗ ⌂⟈⟕⟂⟔ ⌇⟄⟗⟂⟕ ⟌⟖.",
            "romanized": "kama mo kema pome si.",
            "morpheme_break": "river mo mountain big si",
            "gloss": "河 比 山 大 是",
            "translation_zh": "河看起来比山更大。",
            "notes": "比较句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈⟈⟔⟂⟔",
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
                    "native_form": "⟂⟗",
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
                    "native_form": "⌂⟈⟕⟂⟔",
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
                    "romanized": "pome",
                    "native_form": "⌇⟄⟗⟂⟕",
                    "native_tokens": [
                        "det-mark",
                        "c-p",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "大",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟆⟖ ⟂⟗ ⟂⟖ ⟠⟌⟔⟂⟕ ⟌⟖.",
            "romanized": "ti mo mi same si.",
            "morpheme_break": "ti mo mi fast si",
            "gloss": "你 比 我 快 是",
            "translation_zh": "你比我快。",
            "notes": "人称比较。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "⟆⟖",
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
                    "native_form": "⟂⟗",
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
                    "native_form": "⟂⟖",
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
                    "romanized": "same",
                    "native_form": "⟠⟌⟔⟂⟕",
                    "native_tokens": [
                        "det-motion",
                        "c-s",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "快",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "◫⟒⟕⟂⟔⟑⟕⟃ ◈⟌⟖⟂⟕ ⟌⟖.",
            "romanized": "yemaren sime si.",
            "morpheme_break": "learn__agent good si",
            "gloss": "学习者 好 是",
            "translation_zh": "这个学习者很好。",
            "notes": "派生人物名词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yemaren",
                    "native_form": "◫⟒⟕⟂⟔⟑⟕⟃",
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
                    "gloss_zh": "undefined者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-y.svg",
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
                    "romanized": "sime",
                    "native_form": "◈⟌⟖⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-s",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "好",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟌⟔ ⟃⟔ ◈⟂⟔⟂⟕.",
            "romanized": "sa na mame.",
            "morpheme_break": "sa na remember",
            "gloss": "他 不 记得",
            "translation_zh": "他不记得。",
            "notes": "不及物否定。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "⟌⟔",
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
                    "native_form": "⟃⟔",
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
                    "romanized": "mame",
                    "native_form": "◈⟂⟔⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-m",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "记得",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-m.svg",
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
            "id": "ex-18",
            "native": "⋈⟆⟖⟂⟔ ⟐⟗ ⌇⟏⟔⟂⟕ ⟌⟖.",
            "romanized": "tima lo hame si.",
            "morpheme_break": "market lo many si",
            "gloss": "集市 在 众多 是",
            "translation_zh": "集市上人很多。",
            "notes": "用群体派生表达“很多”。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "tima",
                    "native_form": "⋈⟆⟖⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "hame",
                    "native_form": "⌇⟏⟔⟂⟕",
                    "native_tokens": [
                        "det-mark",
                        "c-h",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "多",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟆⟖ ⟠⟍⟖⟂⟔ ⟄⟔ ⟒⟔ ⟂⟖ ◈⟑⟘⟂⟔ ⟌⟖.",
            "romanized": "ti zima pa ya mi ruma si.",
            "morpheme_break": "ti come pa ya mi joy si",
            "gloss": "你 来 过去 从句 我 喜悦 是",
            "translation_zh": "因为你来了，我很高兴。",
            "notes": "简单从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "⟆⟖",
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
                    "romanized": "zima",
                    "native_form": "⟠⟍⟖⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
                    "native_form": "⟒⟔",
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
                    "native_form": "⟂⟖",
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
                    "romanized": "ruma",
                    "native_form": "◈⟑⟘⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "喜悦",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟂⟖ ⛭⟐⟕⟂⟔ ⛭⟓⟖⟂⟔ ⟒⟔ ◈⟑⟗⟂⟔ ✶⟊⟗⟂⟔.",
            "romanized": "mi lema wima ya roma foma.",
            "morpheme_break": "mi book read ya idea grow",
            "gloss": "我 书 读 从句 想法 生长",
            "translation_zh": "我一读书，想法就会增长。",
            "notes": "从句 + 结果。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⛭⟐⟕⟂⟔",
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
                    "romanized": "wima",
                    "native_form": "⛭⟓⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "⟒⟔",
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
                    "romanized": "roma",
                    "native_form": "◈⟑⟗⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "想法",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "foma",
                    "native_form": "✶⟊⟗⟂⟔",
                    "native_tokens": [
                        "det-time",
                        "c-f",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "增长",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-f.svg",
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
            "id": "ex-21",
            "native": "⟂⟖ ≈⟈⟔⟂⟔ ⟈⟗ ⟠⟍⟖⟂⟔.",
            "romanized": "mi kama ko zima.",
            "morpheme_break": "mi river ko come",
            "gloss": "我 河 从 来",
            "translation_zh": "我从河边过来。",
            "notes": "来源格。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "≈⟈⟔⟂⟔",
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
                    "native_form": "⟈⟗",
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
                    "romanized": "zima",
                    "native_form": "⟠⟍⟖⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
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
            "native": "◫⟂⟖⟂⟔ ⟠⟆⟔⟂⟔ ⟐⟗ ⟠⟅⟘⟂⟔ ⟑⟖.",
            "romanized": "mima tama lo buma ri.",
            "morpheme_break": "child road lo walk ri",
            "gloss": "孩子 道路 在 步行 进行",
            "translation_zh": "孩子正在路上走。",
            "notes": "基础叙事句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mima",
                    "native_form": "◫⟂⟖⟂⟔",
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
                    "native_form": "⟠⟆⟔⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "buma",
                    "native_form": "⟠⟅⟘⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-b",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "步行",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-b.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⟆⟗ ⌂⟐⟔⟂⟔ ⟃⟔ ⌂⟎⟗⟂⟕ ⟌⟖.",
            "romanized": "to lama na shome si.",
            "morpheme_break": "to cup na full si",
            "gloss": "那 杯 不 满 是",
            "translation_zh": "那个杯子不是满的。",
            "notes": "名词 + 否定判断。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "⟆⟗",
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
                    "native_form": "⌂⟐⟔⟂⟔",
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
                    "native_form": "⟃⟔",
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
                    "romanized": "shome",
                    "native_form": "⌂⟎⟗⟂⟕",
                    "native_tokens": [
                        "det-place",
                        "c-sh",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "满",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⟂⟖ ✶⟈⟕⟂⟕ ⛭⟐⟕⟂⟔ ◈⟃⟖⟂⟕ ⟃⟘.",
            "romanized": "mi keme lema nime nu.",
            "morpheme_break": "mi new book find nu",
            "gloss": "我 新 书 找到 完成",
            "translation_zh": "我已经找到那本新书了。",
            "notes": "完成体与修饰。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "romanized": "keme",
                    "native_form": "✶⟈⟕⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "新的",
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
                    "romanized": "lema",
                    "native_form": "⛭⟐⟕⟂⟔",
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
                    "romanized": "nime",
                    "native_form": "◈⟃⟖⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-n",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "找到",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "⟃⟘",
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
            "native": "⟌⟔⟂⟖ ⌂⟆⟕⟂⟔ ⟇⟕ ⟠⟃⟘⟂⟕ ⟋⟘.",
            "romanized": "sami tema de nume vu.",
            "morpheme_break": "sami town de return vu",
            "gloss": "他们 城镇 向 返回 将",
            "translation_zh": "他们将返回城镇。",
            "notes": "意向体。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sami",
                    "native_form": "⟌⟔⟂⟖",
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
                    "native_form": "⌂⟆⟕⟂⟔",
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
                    "native_form": "⟇⟕",
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
                    "romanized": "nume",
                    "native_form": "⟠⟃⟘⟂⟕",
                    "native_tokens": [
                        "det-motion",
                        "c-n",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "返回",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "⟋⟘",
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
            "native": "⟂⟖ ⋈⟂⟕⟂⟔ ⟌⟕ ⟠⟅⟘⟂⟔ ⟑⟖.",
            "romanized": "mi mema se buma ri.",
            "morpheme_break": "mi friend se walk ri",
            "gloss": "我 朋友 和 步行 进行",
            "translation_zh": "我正和朋友一起走。",
            "notes": "共格并列。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⋈⟂⟕⟂⟔",
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
                    "native_form": "⟌⟕",
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
                    "native_form": "⟠⟅⟘⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-b",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "步行",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-b.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⌂⟐⟕⟂⟔⟆⟗ ◍⟌⟘⟂⟕ ⟌⟖.",
            "romanized": "lemato sume si.",
            "morpheme_break": "book__place quiet si",
            "gloss": "书之处 安静 是",
            "translation_zh": "书房很安静。",
            "notes": "地点派生。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "lemato",
                    "native_form": "⌂⟐⟕⟂⟔⟆⟗",
                    "native_tokens": [
                        "det-place",
                        "c-l",
                        "v-e",
                        "c-m",
                        "v-a",
                        "c-t",
                        "v-o"
                    ],
                    "gloss_zh": "undefined之地",
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
                    "romanized": "sume",
                    "native_form": "◍⟌⟘⟂⟕",
                    "native_tokens": [
                        "det-speech",
                        "c-s",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "安静",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "◫⟒⟖⟂⟔⟑⟕⟃ ◍⟐⟖⟂⟔ ⛭⟓⟖⟂⟔ ⟄⟔.",
            "romanized": "yimaren lima wima pa.",
            "morpheme_break": "teach__agent letter read pa",
            "gloss": "教授者 书信 读 过去",
            "translation_zh": "教师读了信。",
            "notes": "职业词条。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yimaren",
                    "native_form": "◫⟒⟖⟂⟔⟑⟕⟃",
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
                    "gloss_zh": "undefined者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-y.svg",
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
                    "native_form": "◍⟐⟖⟂⟔",
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
                    "romanized": "wima",
                    "native_form": "⛭⟓⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "◫⟒⟖⟂⟔⟑⟕⟃ ⟉⟕ ◍⟃⟕⟂⟔ ⋈⟏⟖⟂⟕ ⟌⟖.",
            "romanized": "yimaren ge nema hime si.",
            "morpheme_break": "teach__agent ge voice gentle si",
            "gloss": "教授者 的 声音 温和 是",
            "translation_zh": "老师的声音很温和。",
            "notes": "描述人物特征。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "yimaren",
                    "native_form": "◫⟒⟖⟂⟔⟑⟕⟃",
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
                    "gloss_zh": "undefined者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-y.svg",
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
                    "native_form": "⟉⟕",
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
                    "native_form": "◍⟃⟕⟂⟔",
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
                    "romanized": "hime",
                    "native_form": "⋈⟏⟖⟂⟕",
                    "native_tokens": [
                        "det-bond",
                        "c-h",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "温和",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⛭⟋⟘⟂⟔ ⟌⟕ ⛭⟇⟗⟂⟔ ⟑⟖.",
            "romanized": "vuma se doma ri.",
            "morpheme_break": "tool se build ri",
            "gloss": "工具 用 建造 进行",
            "translation_zh": "正在用工具建造。",
            "notes": "工具格。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "vuma",
                    "native_form": "⛭⟋⟘⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-v",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工具",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "⟌⟕",
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
                    "romanized": "doma",
                    "native_form": "⛭⟇⟗⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-d",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "建造",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⛭⟋⟖⟂⟔ ≈⟈⟔⟂⟔ ⟐⟗ ⟠⟍⟕⟂⟔ ⟑⟖.",
            "romanized": "vima kama lo zema ri.",
            "morpheme_break": "boat river lo go ri",
            "gloss": "船 河 在 去 进行",
            "translation_zh": "船正在河上前行。",
            "notes": "移动场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "vima",
                    "native_form": "⛭⟋⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-v",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "船",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈⟈⟔⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "zema",
                    "native_form": "⟠⟍⟕⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "✶⟌⟗⟂⟔ ⟏⟔ ⋈⟆⟖⟂⟔ ⟐⟗ ⛭⟏⟘⟂⟔ ⋈⟇⟘⟂⟔ ⟄⟔.",
            "romanized": "soma ha tima lo huma duma pa.",
            "morpheme_break": "morning ha market lo bread buy pa",
            "gloss": "清晨 话题 集市 在 面饼 买 过去",
            "translation_zh": "清晨时，我在集市买了面饼。",
            "notes": "叙事句首时间话题。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "soma",
                    "native_form": "✶⟌⟗⟂⟔",
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
                    "native_form": "⟏⟔",
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
                    "native_form": "⋈⟆⟖⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "native_form": "⛭⟏⟘⟂⟔",
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
                    "romanized": "duma",
                    "native_form": "⋈⟇⟘⟂⟔",
                    "native_tokens": [
                        "det-bond",
                        "c-d",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "购买",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-d.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "✶⟌⟘⟂⟔ ⌂⟄⟖⟂⟔ ⟐⟗ ◍⟐⟘⟂⟔ ◍⟍⟘⟂⟔ ⟄⟔.",
            "romanized": "suma pima lo luma zuma pa.",
            "morpheme_break": "evening home lo song hear pa",
            "gloss": "傍晚 家 在 歌 听见 过去",
            "translation_zh": "傍晚在家听见了歌声。",
            "notes": "时间 + 处所叙事。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "suma",
                    "native_form": "✶⟌⟘⟂⟔",
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
                    "native_form": "⌂⟄⟖⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "luma",
                    "native_form": "◍⟐⟘⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-l",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "歌",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-l.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zuma",
                    "native_form": "◍⟍⟘⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-z",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "听见",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "✶⟌⟖⟂⟔ ✶⟈⟖⟂⟔ ⟐⟗ ✶⟌⟔⟂⟔ ◫⟍⟗⟂⟔ ⟄⟔.",
            "romanized": "sima kima lo sama zoma pa.",
            "morpheme_break": "night sky lo star see pa",
            "gloss": "夜晚 天 在 星 看见 过去",
            "translation_zh": "夜里看见了星星。",
            "notes": "自然场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sima",
                    "native_form": "✶⟌⟖⟂⟔",
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
                    "native_form": "✶⟈⟖⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "native_form": "✶⟌⟔⟂⟔",
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
                    "romanized": "zoma",
                    "native_form": "◫⟍⟗⟂⟔",
                    "native_tokens": [
                        "det-human",
                        "c-z",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "看见",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "⛭⟍⟔⟂⟔ ✶⟄⟔⟂⟕ ⟃⟘.",
            "romanized": "zama pame nu.",
            "morpheme_break": "work-n begin nu",
            "gloss": "工作 开始 已成",
            "translation_zh": "工作已经开始了。",
            "notes": "开始与完成的并置。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "zama",
                    "native_form": "⛭⟍⟔⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-z",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工作",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pame",
                    "native_form": "✶⟄⟔⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-p",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "开始",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "⟃⟘",
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
            "native": "⟆⟖ ◈⟂⟗⟂⟕ ≈⟎⟖⟂⟔ ⟈⟕?",
            "romanized": "ti mome shima ke?",
            "morpheme_break": "ti need water ke",
            "gloss": "你 需要 水 疑问",
            "translation_zh": "你需要水吗？",
            "notes": "带情态语义的问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "⟆⟖",
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
                    "romanized": "mome",
                    "native_form": "◈⟂⟗⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-m",
                        "v-o",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "需要",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "shima",
                    "native_form": "≈⟎⟖⟂⟔",
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
                    "native_form": "⟈⟕",
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
            "native": "⟂⟖ ⋈⟂⟕⟂⟔ ⋈⟃⟕⟂⟕ ⟋⟘.",
            "romanized": "mi mema neme vu.",
            "morpheme_break": "mi friend help vu",
            "gloss": "我 朋友 帮助 将",
            "translation_zh": "我会帮助朋友。",
            "notes": "未来意向。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⋈⟂⟕⟂⟔",
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
                    "romanized": "neme",
                    "native_form": "⋈⟃⟕⟂⟕",
                    "native_tokens": [
                        "det-bond",
                        "c-n",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "帮助",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "⟋⟘",
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
            "native": "⟃⟕ ⟠⟆⟔⟂⟔ ⟆⟗ ⟠⟈⟘⟂⟕ ⟌⟖.",
            "romanized": "ne tama to kume si.",
            "morpheme_break": "ne road to far si",
            "gloss": "这 道路 那 远 是",
            "translation_zh": "这条路到那边很远。",
            "notes": "指示与距离。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "⟃⟕",
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
                    "native_form": "⟠⟆⟔⟂⟔",
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
                    "native_form": "⟆⟗",
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
                    "romanized": "kume",
                    "native_form": "⟠⟈⟘⟂⟕",
                    "native_tokens": [
                        "det-motion",
                        "c-k",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "远",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "◈⟌⟖⟂⟕⟂⟔ ⌇⟄⟘⟂⟕ ⟃⟔ ⟌⟖.",
            "romanized": "simema pume na si.",
            "morpheme_break": "good__abs small na si",
            "gloss": "善之性质 小 不 是",
            "translation_zh": "善意并不小。",
            "notes": "形容词名词化。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "simema",
                    "native_form": "◈⟌⟖⟂⟕⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-s",
                        "v-i",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "undefined之性",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pume",
                    "native_form": "⌇⟄⟘⟂⟕",
                    "native_tokens": [
                        "det-mark",
                        "c-p",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "小",
                    "glyph_preview": [
                        "assets/language/det-mark.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "na",
                    "native_form": "⟃⟔",
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
                    "native_form": "⟌⟖",
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
            "native": "◈⟈⟘⟌⟖⟂⟕ ⟠⟆⟔⟂⟔ ⟃⟔ ◈⟉⟔⟂⟔.",
            "romanized": "kusime tama na gama.",
            "morpheme_break": "good__neg road na choose",
            "gloss": "不好之态 道路 不 选择",
            "translation_zh": "不要选择不好的路。",
            "notes": "反义派生。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "kusime",
                    "native_form": "◈⟈⟘⟌⟖⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-k",
                        "v-u",
                        "c-s",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "不undefined",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-k.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "tama",
                    "native_form": "⟠⟆⟔⟂⟔",
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
                    "native_form": "⟃⟔",
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
                    "romanized": "gama",
                    "native_form": "◈⟉⟔⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-g",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "选择",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-g.svg",
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
            "id": "ex-41",
            "native": "⟂⟖ ⟌⟔ ⟠⟍⟖⟂⟔ ⟒⟔ ◈⟒⟔⟂⟔.",
            "romanized": "mi sa zima ya yama.",
            "morpheme_break": "mi sa come ya know",
            "gloss": "我 他 来 从句 知道",
            "translation_zh": "我知道他来了。",
            "notes": "从句作宾语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⟌⟔",
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
                    "romanized": "zima",
                    "native_form": "⟠⟍⟖⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "⟒⟔",
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
                    "romanized": "yama",
                    "native_form": "◈⟒⟔⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-y",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "知道",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-y.svg",
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
            "native": "◫⟂⟖⟂⟔ ⋈⟂⟗⟂⟔ ⟌⟕ ⌂⟆⟕⟂⟔ ⟇⟕ ⟠⟍⟕⟂⟔ ⟄⟔.",
            "romanized": "mima moma se tema de zema pa.",
            "morpheme_break": "child parent se town de go pa",
            "gloss": "孩子 父母 和 城镇 向 去 过去",
            "translation_zh": "孩子和父母去了城镇。",
            "notes": "并列主语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mima",
                    "native_form": "◫⟂⟖⟂⟔",
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
                    "native_form": "⋈⟂⟗⟂⟔",
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
                    "native_form": "⟌⟕",
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
                    "native_form": "⌂⟆⟕⟂⟔",
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
                    "native_form": "⟇⟕",
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
                    "romanized": "zema",
                    "native_form": "⟠⟍⟕⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "⟂⟖ ◈⟑⟖⟂⟔ ⛭⟓⟕⟂⟔ ⟑⟖.",
            "romanized": "mi rima wema ri.",
            "morpheme_break": "mi memory write ri",
            "gloss": "我 记忆 写 进行",
            "translation_zh": "我正在写记忆。",
            "notes": "抽象宾语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "romanized": "rima",
                    "native_form": "◈⟑⟖⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "记忆",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wema",
                    "native_form": "⛭⟓⟕⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "写",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⟆⟗ ⌂⟄⟖⟂⟔ ✶⟈⟖⟂⟕ ⟌⟖.",
            "romanized": "to pima kime si.",
            "morpheme_break": "to home old si",
            "gloss": "那 家 旧 是",
            "translation_zh": "那座房子很旧。",
            "notes": "判断句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "to",
                    "native_form": "⟆⟗",
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
                    "native_form": "⌂⟄⟖⟂⟔",
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
                    "romanized": "kime",
                    "native_form": "✶⟈⟖⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "旧的",
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
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
            "native": "⋈⟂⟕⟂⟔ ⟉⟕ ◫⟂⟖⟂⟔ ⌂⟆⟗⟂⟔ ⟐⟗ ◈⟒⟕⟂⟔ ⟑⟖.",
            "romanized": "mema ge mima toma lo yema ri.",
            "morpheme_break": "friend ge child school lo learn ri",
            "gloss": "朋友 的 孩子 学校 在 学习 进行",
            "translation_zh": "朋友的孩子正在学校学习。",
            "notes": "双层名词短语。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mema",
                    "native_form": "⋈⟂⟕⟂⟔",
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
                    "native_form": "⟉⟕",
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
                    "native_form": "◫⟂⟖⟂⟔",
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
                    "native_form": "⌂⟆⟗⟂⟔",
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
                    "native_form": "⟐⟗",
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
                    "romanized": "yema",
                    "native_form": "◈⟒⟕⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-y",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "⟌⟔⟂⟖ ⌂⟄⟘⟂⟔ ⟃⟔ ⟠⟉⟗⟂⟔.",
            "romanized": "sami puma na goma.",
            "morpheme_break": "sami door na close",
            "gloss": "他们 门 不 关闭",
            "translation_zh": "他们没有关门。",
            "notes": "否定及物句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sami",
                    "native_form": "⟌⟔⟂⟖",
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
                    "native_form": "⌂⟄⟘⟂⟔",
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
                    "native_form": "⟃⟔",
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
                    "romanized": "goma",
                    "native_form": "⟠⟉⟗⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-g",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "关闭",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
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
            "id": "ex-47",
            "native": "⟂⟖ ⟠⟆⟔⟂⟔ ⟈⟗ ⟠⟃⟘⟂⟕ ⟄⟔.",
            "romanized": "mi tama ko nume pa.",
            "morpheme_break": "mi road ko return pa",
            "gloss": "我 道路 从 返回 过去",
            "translation_zh": "我从路上返回了。",
            "notes": "来源 + 返回。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⟠⟆⟔⟂⟔",
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
                    "native_form": "⟈⟗",
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
                    "romanized": "nume",
                    "native_form": "⟠⟃⟘⟂⟕",
                    "native_tokens": [
                        "det-motion",
                        "c-n",
                        "v-u",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "返回",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "⟌⟔ ◈⟑⟗⟂⟔ ◍⟒⟘⟂⟔ ⟄⟔.",
            "romanized": "sa roma yuma pa.",
            "morpheme_break": "sa idea say pa",
            "gloss": "他 想法 说出 过去",
            "translation_zh": "他说出了自己的想法。",
            "notes": "抽象内容表达。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sa",
                    "native_form": "⟌⟔",
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
                    "romanized": "roma",
                    "native_form": "◈⟑⟗⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "想法",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "yuma",
                    "native_form": "◍⟒⟘⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-y",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "说出",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
            "native": "◍⟋⟔⟂⟔ ◍⟓⟔⟂⟔ ⟒⟔ ◍⟋⟕⟂⟔ ⟠⟍⟖⟂⟔.",
            "romanized": "vama wama ya vema zima.",
            "morpheme_break": "question ask ya answer come",
            "gloss": "问题 提出 从句 回答 到来",
            "translation_zh": "问题一提出，回答就来了。",
            "notes": "过程型从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "vama",
                    "native_form": "◍⟋⟔⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-v",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "问题",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wama",
                    "native_form": "◍⟓⟔⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-w",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "提问",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-w.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "⟒⟔",
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
                    "romanized": "vema",
                    "native_form": "◍⟋⟕⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-v",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "回答",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zima",
                    "native_form": "⟠⟍⟖⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
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
            "native": "⟂⟖ ◍⟐⟗⟂⟔ ◈⟒⟕⟂⟔ ◈⟂⟖⟂⟕.",
            "romanized": "mi loma yema mime.",
            "morpheme_break": "mi language learn want",
            "gloss": "我 语言 学习 想要",
            "translation_zh": "我想学习这门语言。",
            "notes": "意愿结构。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "◍⟐⟗⟂⟔",
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
                    "romanized": "yema",
                    "native_form": "◈⟒⟕⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-y",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "学习",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-y.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "mime",
                    "native_form": "◈⟂⟖⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-m",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "想要",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-i.svg",
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
            "native": "⟆⟖ ◫⟒⟗⟂⟔⟑⟕⟃ ⟌⟖ ⟈⟕?",
            "romanized": "ti yomaren si ke?",
            "morpheme_break": "ti speak__agent si ke",
            "gloss": "你 说话者 是 疑问",
            "translation_zh": "你是使用者之一吗？",
            "notes": "施事者派生与问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ti",
                    "native_form": "⟆⟖",
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
                    "romanized": "yomaren",
                    "native_form": "◫⟒⟗⟂⟔⟑⟕⟃",
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
                    "gloss_zh": "undefined者",
                    "glyph_preview": [
                        "assets/language/det-human.svg",
                        "assets/language/c-y.svg",
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
                    "native_form": "⟌⟖",
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
                    "native_form": "⟈⟕",
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
            "native": "⟃⟕ ◍⟋⟕⟂⟔ ◈⟎⟕⟂⟕ ⟌⟖ ⟈⟕?",
            "romanized": "ne vema sheme si ke?",
            "morpheme_break": "ne answer clear si ke",
            "gloss": "这 回答 清晰 是 疑问",
            "translation_zh": "这个回答清楚吗？",
            "notes": "问句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "ne",
                    "native_form": "⟃⟕",
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
                    "romanized": "vema",
                    "native_form": "◍⟋⟕⟂⟔",
                    "native_tokens": [
                        "det-speech",
                        "c-v",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "回答",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "sheme",
                    "native_form": "◈⟎⟕⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-sh",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "清晰",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-sh.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "si",
                    "native_form": "⟌⟖",
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
                    "native_form": "⟈⟕",
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
            "native": "◍⟌⟘⟂⟕⟌⟕ ⛭⟓⟖⟂⟔.",
            "romanized": "sumese wima.",
            "morpheme_break": "quiet__adv read",
            "gloss": "安静地 阅读",
            "translation_zh": "安静地读。",
            "notes": "方式副词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "sumese",
                    "native_form": "◍⟌⟘⟂⟕⟌⟕",
                    "native_tokens": [
                        "det-speech",
                        "c-s",
                        "v-u",
                        "c-m",
                        "v-e",
                        "c-s",
                        "v-e"
                    ],
                    "gloss_zh": "undefined地",
                    "glyph_preview": [
                        "assets/language/det-speech.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-u.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "wima",
                    "native_form": "⛭⟓⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-w",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "读",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
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
            "id": "ex-54",
            "native": "⟂⟖ ⟆⟖ ⋈⟃⟕⟂⟕ ⟒⟔ ◈⟌⟖⟂⟕⟂⟔ ✶⟊⟗⟂⟔.",
            "romanized": "mi ti neme ya simema foma.",
            "morpheme_break": "mi ti help ya good__abs grow",
            "gloss": "我 你 帮助 从句 善 增长",
            "translation_zh": "当我帮助你时，善意也会增长。",
            "notes": "从句 + 抽象名词。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "native_form": "⟆⟖",
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
                    "romanized": "neme",
                    "native_form": "⋈⟃⟕⟂⟕",
                    "native_tokens": [
                        "det-bond",
                        "c-n",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "帮助",
                    "glyph_preview": [
                        "assets/language/det-bond.svg",
                        "assets/language/c-n.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ya",
                    "native_form": "⟒⟔",
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
                    "romanized": "simema",
                    "native_form": "◈⟌⟖⟂⟕⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-s",
                        "v-i",
                        "c-m",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "undefined之性",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-s.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "foma",
                    "native_form": "✶⟊⟗⟂⟔",
                    "native_tokens": [
                        "det-time",
                        "c-f",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "增长",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-f.svg",
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
            "id": "ex-55",
            "native": "⛭⟋⟖⟂⟔ ≈⟈⟔⟂⟔ ⟈⟗ ⌂⟆⟕⟂⟔ ⟇⟕ ⟠⟍⟕⟂⟔.",
            "romanized": "vima kama ko tema de zema.",
            "morpheme_break": "boat river ko town de go",
            "gloss": "船 河 从 城镇 向 去",
            "translation_zh": "船从河道向城镇驶去。",
            "notes": "起点与终点。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "vima",
                    "native_form": "⛭⟋⟖⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-v",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "船",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "kama",
                    "native_form": "≈⟈⟔⟂⟔",
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
                    "native_form": "⟈⟗",
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
                    "native_form": "⌂⟆⟕⟂⟔",
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
                    "native_form": "⟇⟕",
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
                    "romanized": "zema",
                    "native_form": "⟠⟍⟕⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "去",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
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
            "native": "⛭⟋⟗⟂⟔ ⟌⟕ ⌂⟐⟔⟂⟔ ⛭⟉⟕⟂⟔.",
            "romanized": "voma se lama gema.",
            "morpheme_break": "cloth se cup clean",
            "gloss": "布 用 杯 清洁",
            "translation_zh": "用布擦拭杯子。",
            "notes": "工具动作。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "voma",
                    "native_form": "⛭⟋⟗⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-v",
                        "v-o",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "布",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-v.svg",
                        "assets/language/v-o.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "se",
                    "native_form": "⟌⟕",
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
                    "native_form": "⌂⟐⟔⟂⟔",
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
                    "romanized": "gema",
                    "native_form": "⛭⟉⟕⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-g",
                        "v-e",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "清洁",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-g.svg",
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
            "id": "ex-57",
            "native": "✶⟎⟔⟂⟔ ✶⟄⟔⟂⟕ ⟄⟔ ⟒⟔ ✶⟈⟕⟂⟕ ⛭⟍⟔⟂⟔ ⟠⟍⟖⟂⟔.",
            "romanized": "shama pame pa ya keme zama zima.",
            "morpheme_break": "year begin pa ya new work-n come",
            "gloss": "年 开始 过去 从句 新 工作 到来",
            "translation_zh": "一年开始时，新工作也来了。",
            "notes": "叙事连接。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "shama",
                    "native_form": "✶⟎⟔⟂⟔",
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
                    "romanized": "pame",
                    "native_form": "✶⟄⟔⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-p",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "开始",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pa",
                    "native_form": "⟄⟔",
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
                    "native_form": "⟒⟔",
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
                    "romanized": "keme",
                    "native_form": "✶⟈⟕⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "新的",
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
                    "romanized": "zama",
                    "native_form": "⛭⟍⟔⟂⟔",
                    "native_tokens": [
                        "det-craft",
                        "c-z",
                        "v-a",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "工作",
                    "glyph_preview": [
                        "assets/language/det-craft.svg",
                        "assets/language/c-z.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "zima",
                    "native_form": "⟠⟍⟖⟂⟔",
                    "native_tokens": [
                        "det-motion",
                        "c-z",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "来",
                    "glyph_preview": [
                        "assets/language/det-motion.svg",
                        "assets/language/c-z.svg",
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
            "native": "✶⟎⟕⟂⟔ ✶⟄⟕⟂⟕ ⟃⟘ ⟒⟔ ◈⟑⟖⟂⟔ ✶⟊⟘⟂⟔.",
            "romanized": "shema peme nu ya rima fuma.",
            "morpheme_break": "month finish nu ya memory remain",
            "gloss": "月度 结束 完成 从句 记忆 留下",
            "translation_zh": "一个月结束后，记忆仍然留下。",
            "notes": "时间从句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "shema",
                    "native_form": "✶⟎⟕⟂⟔",
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
                    "romanized": "peme",
                    "native_form": "✶⟄⟕⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-p",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "结束",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "nu",
                    "native_form": "⟃⟘",
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
                    "native_form": "⟒⟔",
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
                    "romanized": "rima",
                    "native_form": "◈⟑⟖⟂⟔",
                    "native_tokens": [
                        "det-mind",
                        "c-r",
                        "v-i",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "记忆",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-r.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "fuma",
                    "native_form": "✶⟊⟘⟂⟔",
                    "native_tokens": [
                        "det-time",
                        "c-f",
                        "v-u",
                        "c-m",
                        "v-a"
                    ],
                    "gloss_zh": "留下",
                    "glyph_preview": [
                        "assets/language/det-time.svg",
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
            "id": "ex-59",
            "native": "⟂⟖ ✶⟈⟖⟂⟕ ◍⟐⟖⟂⟔ ◈⟂⟔⟂⟕ ⟑⟖.",
            "romanized": "mi kime lima mame ri.",
            "morpheme_break": "mi old letter remember ri",
            "gloss": "我 旧 书信 记得 进行",
            "translation_zh": "我正回想那封旧信。",
            "notes": "回忆场景。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "mi",
                    "native_form": "⟂⟖",
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
                    "romanized": "kime",
                    "native_form": "✶⟈⟖⟂⟕",
                    "native_tokens": [
                        "det-time",
                        "c-k",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "旧的",
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
                    "romanized": "lima",
                    "native_form": "◍⟐⟖⟂⟔",
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
                    "romanized": "mame",
                    "native_form": "◈⟂⟔⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-m",
                        "v-a",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "记得",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-a.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "ri",
                    "native_form": "⟑⟖",
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
            "native": "◍⟐⟗⟂⟔ ◈⟏⟕⟂⟕ ⌂⟄⟖⟂⟕ ⟋⟘.",
            "romanized": "loma heme pime vu.",
            "morpheme_break": "language true live vu",
            "gloss": "语言 真实 居住 将",
            "translation_zh": "这门语言将真实地活下去。",
            "notes": "愿景句。",
            "token_stream": [
                {
                    "kind": "word",
                    "romanized": "loma",
                    "native_form": "◍⟐⟗⟂⟔",
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
                    "romanized": "heme",
                    "native_form": "◈⟏⟕⟂⟕",
                    "native_tokens": [
                        "det-mind",
                        "c-h",
                        "v-e",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "真实",
                    "glyph_preview": [
                        "assets/language/det-mind.svg",
                        "assets/language/c-h.svg",
                        "assets/language/v-e.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "pime",
                    "native_form": "⌂⟄⟖⟂⟕",
                    "native_tokens": [
                        "det-place",
                        "c-p",
                        "v-i",
                        "c-m",
                        "v-e"
                    ],
                    "gloss_zh": "居住",
                    "glyph_preview": [
                        "assets/language/det-place.svg",
                        "assets/language/c-p.svg",
                        "assets/language/v-i.svg",
                        "assets/language/c-m.svg",
                        "assets/language/v-e.svg"
                    ]
                },
                {
                    "kind": "word",
                    "romanized": "vu",
                    "native_form": "⟋⟘",
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
                    "native": "⟂⟖ ⌂⟄⟖⟂⟔ ⟐⟗ ⟌⟖.",
                    "romanized": "mi pima lo si.",
                    "morpheme_break": "mi home lo si",
                    "gloss": "我 家 在 系词",
                    "translation_zh": "我在家。",
                    "notes": "处所句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "native_form": "⌂⟄⟖⟂⟔",
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
                            "native_form": "⟐⟗",
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
                            "native_form": "⟌⟖",
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
                    "native": "⟃⟔⟂⟖ ⌂⟆⟗⟂⟔ ⟐⟗ ◈⟒⟕⟂⟔ ⟑⟖.",
                    "romanized": "nami toma lo yema ri.",
                    "morpheme_break": "nami school lo learn ri",
                    "gloss": "我们 学校 在 学习 进行",
                    "translation_zh": "我们正在学校学习。",
                    "notes": "进行中的处所活动。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "nami",
                            "native_form": "⟃⟔⟂⟖",
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
                            "native_form": "⌂⟆⟗⟂⟔",
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
                            "native_form": "⟐⟗",
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
                            "romanized": "yema",
                            "native_form": "◈⟒⟕⟂⟔",
                            "native_tokens": [
                                "det-mind",
                                "c-y",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "学习",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "⟑⟖",
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
                    "native": "⟂⟖ ◍⟐⟖⟂⟔ ⛭⟓⟕⟂⟔ ⟃⟘.",
                    "romanized": "mi lima wema nu.",
                    "morpheme_break": "mi letter write nu",
                    "gloss": "我 书信 写 完成",
                    "translation_zh": "我已经写完信了。",
                    "notes": "完成体。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "native_form": "◍⟐⟖⟂⟔",
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
                            "romanized": "wema",
                            "native_form": "⛭⟓⟕⟂⟔",
                            "native_tokens": [
                                "det-craft",
                                "c-w",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "写",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "nu",
                            "native_form": "⟃⟘",
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
                    "native": "⟂⟖ ◍⟐⟗⟂⟔ ◈⟒⟕⟂⟔ ◈⟂⟖⟂⟕.",
                    "romanized": "mi loma yema mime.",
                    "morpheme_break": "mi language learn want",
                    "gloss": "我 语言 学习 想要",
                    "translation_zh": "我想学习这门语言。",
                    "notes": "意愿结构。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "native_form": "◍⟐⟗⟂⟔",
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
                            "romanized": "yema",
                            "native_form": "◈⟒⟕⟂⟔",
                            "native_tokens": [
                                "det-mind",
                                "c-y",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "学习",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "mime",
                            "native_form": "◈⟂⟖⟂⟕",
                            "native_tokens": [
                                "det-mind",
                                "c-m",
                                "v-i",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "想要",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-i.svg",
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
                    "native": "◍⟐⟗⟂⟔ ◈⟏⟕⟂⟕ ⌂⟄⟖⟂⟕ ⟋⟘.",
                    "romanized": "loma heme pime vu.",
                    "morpheme_break": "language true live vu",
                    "gloss": "语言 真实 居住 将",
                    "translation_zh": "这门语言将真实地活下去。",
                    "notes": "愿景句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "loma",
                            "native_form": "◍⟐⟗⟂⟔",
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
                            "romanized": "heme",
                            "native_form": "◈⟏⟕⟂⟕",
                            "native_tokens": [
                                "det-mind",
                                "c-h",
                                "v-e",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "真实",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-h.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pime",
                            "native_form": "⌂⟄⟖⟂⟕",
                            "native_tokens": [
                                "det-place",
                                "c-p",
                                "v-i",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "居住",
                            "glyph_preview": [
                                "assets/language/det-place.svg",
                                "assets/language/c-p.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "vu",
                            "native_form": "⟋⟘",
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
                    "native": "⟂⟖ ⋈⟂⟕⟂⟔ ⟌⟕ ⟠⟅⟘⟂⟔ ⟑⟖.",
                    "romanized": "mi mema se buma ri.",
                    "morpheme_break": "mi friend se walk ri",
                    "gloss": "我 朋友 和 步行 进行",
                    "translation_zh": "我正和朋友一起走。",
                    "notes": "共格并列。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "native_form": "⋈⟂⟕⟂⟔",
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
                            "native_form": "⟌⟕",
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
                            "native_form": "⟠⟅⟘⟂⟔",
                            "native_tokens": [
                                "det-motion",
                                "c-b",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "步行",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-b.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "⟑⟖",
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
                    "native": "⛭⟋⟖⟂⟔ ≈⟈⟔⟂⟔ ⟐⟗ ⟠⟍⟕⟂⟔ ⟑⟖.",
                    "romanized": "vima kama lo zema ri.",
                    "morpheme_break": "boat river lo go ri",
                    "gloss": "船 河 在 去 进行",
                    "translation_zh": "船正在河上前行。",
                    "notes": "移动场景。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "vima",
                            "native_form": "⛭⟋⟖⟂⟔",
                            "native_tokens": [
                                "det-craft",
                                "c-v",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "船",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-v.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "kama",
                            "native_form": "≈⟈⟔⟂⟔",
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
                            "native_form": "⟐⟗",
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
                            "romanized": "zema",
                            "native_form": "⟠⟍⟕⟂⟔",
                            "native_tokens": [
                                "det-motion",
                                "c-z",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "去",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "⟑⟖",
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
                    "native": "✶⟌⟗⟂⟔ ⟏⟔ ⋈⟆⟖⟂⟔ ⟐⟗ ⛭⟏⟘⟂⟔ ⋈⟇⟘⟂⟔ ⟄⟔.",
                    "romanized": "soma ha tima lo huma duma pa.",
                    "morpheme_break": "morning ha market lo bread buy pa",
                    "gloss": "清晨 话题 集市 在 面饼 买 过去",
                    "translation_zh": "清晨时，我在集市买了面饼。",
                    "notes": "叙事句首时间话题。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "soma",
                            "native_form": "✶⟌⟗⟂⟔",
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
                            "native_form": "⟏⟔",
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
                            "native_form": "⋈⟆⟖⟂⟔",
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
                            "native_form": "⟐⟗",
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
                            "native_form": "⛭⟏⟘⟂⟔",
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
                            "romanized": "duma",
                            "native_form": "⋈⟇⟘⟂⟔",
                            "native_tokens": [
                                "det-bond",
                                "c-d",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "购买",
                            "glyph_preview": [
                                "assets/language/det-bond.svg",
                                "assets/language/c-d.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "⟄⟔",
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
                    "native": "✶⟌⟘⟂⟔ ⌂⟄⟖⟂⟔ ⟐⟗ ◍⟐⟘⟂⟔ ◍⟍⟘⟂⟔ ⟄⟔.",
                    "romanized": "suma pima lo luma zuma pa.",
                    "morpheme_break": "evening home lo song hear pa",
                    "gloss": "傍晚 家 在 歌 听见 过去",
                    "translation_zh": "傍晚在家听见了歌声。",
                    "notes": "时间 + 处所叙事。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "suma",
                            "native_form": "✶⟌⟘⟂⟔",
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
                            "native_form": "⌂⟄⟖⟂⟔",
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
                            "native_form": "⟐⟗",
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
                            "romanized": "luma",
                            "native_form": "◍⟐⟘⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-l",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "歌",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-l.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "zuma",
                            "native_form": "◍⟍⟘⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-z",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "听见",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "⟄⟔",
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
                    "native": "◫⟂⟖⟂⟔ ⋈⟂⟗⟂⟔ ⟌⟕ ⌂⟆⟕⟂⟔ ⟇⟕ ⟠⟍⟕⟂⟔ ⟄⟔.",
                    "romanized": "mima moma se tema de zema pa.",
                    "morpheme_break": "child parent se town de go pa",
                    "gloss": "孩子 父母 和 城镇 向 去 过去",
                    "translation_zh": "孩子和父母去了城镇。",
                    "notes": "并列主语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mima",
                            "native_form": "◫⟂⟖⟂⟔",
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
                            "native_form": "⋈⟂⟗⟂⟔",
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
                            "native_form": "⟌⟕",
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
                            "native_form": "⌂⟆⟕⟂⟔",
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
                            "native_form": "⟇⟕",
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
                            "romanized": "zema",
                            "native_form": "⟠⟍⟕⟂⟔",
                            "native_tokens": [
                                "det-motion",
                                "c-z",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "去",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "⟄⟔",
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
                    "native": "⟂⟖ ⟌⟔ ⟠⟍⟖⟂⟔ ⟒⟔ ◈⟒⟔⟂⟔.",
                    "romanized": "mi sa zima ya yama.",
                    "morpheme_break": "mi sa come ya know",
                    "gloss": "我 他 来 从句 知道",
                    "translation_zh": "我知道他来了。",
                    "notes": "从句作宾语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "native_form": "⟌⟔",
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
                            "romanized": "zima",
                            "native_form": "⟠⟍⟖⟂⟔",
                            "native_tokens": [
                                "det-motion",
                                "c-z",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "来",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-z.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ya",
                            "native_form": "⟒⟔",
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
                            "romanized": "yama",
                            "native_form": "◈⟒⟔⟂⟔",
                            "native_tokens": [
                                "det-mind",
                                "c-y",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "知道",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-y.svg",
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
                    "native": "⟂⟖ ◈⟑⟖⟂⟔ ⛭⟓⟕⟂⟔ ⟑⟖.",
                    "romanized": "mi rima wema ri.",
                    "morpheme_break": "mi memory write ri",
                    "gloss": "我 记忆 写 进行",
                    "translation_zh": "我正在写记忆。",
                    "notes": "抽象宾语。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "romanized": "rima",
                            "native_form": "◈⟑⟖⟂⟔",
                            "native_tokens": [
                                "det-mind",
                                "c-r",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "记忆",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-r.svg",
                                "assets/language/v-i.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wema",
                            "native_form": "⛭⟓⟕⟂⟔",
                            "native_tokens": [
                                "det-craft",
                                "c-w",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "写",
                            "glyph_preview": [
                                "assets/language/det-craft.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "⟑⟖",
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
                    "native": "⟌⟔ ◈⟑⟗⟂⟔ ◍⟒⟘⟂⟔ ⟄⟔.",
                    "romanized": "sa roma yuma pa.",
                    "morpheme_break": "sa idea say pa",
                    "gloss": "他 想法 说出 过去",
                    "translation_zh": "他说出了自己的想法。",
                    "notes": "抽象内容表达。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "sa",
                            "native_form": "⟌⟔",
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
                            "romanized": "roma",
                            "native_form": "◈⟑⟗⟂⟔",
                            "native_tokens": [
                                "det-mind",
                                "c-r",
                                "v-o",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "想法",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-r.svg",
                                "assets/language/v-o.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "yuma",
                            "native_form": "◍⟒⟘⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-y",
                                "v-u",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "说出",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-y.svg",
                                "assets/language/v-u.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "pa",
                            "native_form": "⟄⟔",
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
                    "native": "◍⟋⟔⟂⟔ ◍⟓⟔⟂⟔ ⟒⟔ ◍⟋⟕⟂⟔ ⟠⟍⟖⟂⟔.",
                    "romanized": "vama wama ya vema zima.",
                    "morpheme_break": "question ask ya answer come",
                    "gloss": "问题 提出 从句 回答 到来",
                    "translation_zh": "问题一提出，回答就来了。",
                    "notes": "过程型从句。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "vama",
                            "native_form": "◍⟋⟔⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-v",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "问题",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-v.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "wama",
                            "native_form": "◍⟓⟔⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-w",
                                "v-a",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "提问",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-w.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ya",
                            "native_form": "⟒⟔",
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
                            "romanized": "vema",
                            "native_form": "◍⟋⟕⟂⟔",
                            "native_tokens": [
                                "det-speech",
                                "c-v",
                                "v-e",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "回答",
                            "glyph_preview": [
                                "assets/language/det-speech.svg",
                                "assets/language/c-v.svg",
                                "assets/language/v-e.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "zima",
                            "native_form": "⟠⟍⟖⟂⟔",
                            "native_tokens": [
                                "det-motion",
                                "c-z",
                                "v-i",
                                "c-m",
                                "v-a"
                            ],
                            "gloss_zh": "来",
                            "glyph_preview": [
                                "assets/language/det-motion.svg",
                                "assets/language/c-z.svg",
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
                    "native": "⟂⟖ ✶⟈⟖⟂⟕ ◍⟐⟖⟂⟔ ◈⟂⟔⟂⟕ ⟑⟖.",
                    "romanized": "mi kime lima mame ri.",
                    "morpheme_break": "mi old letter remember ri",
                    "gloss": "我 旧 书信 记得 进行",
                    "translation_zh": "我正回想那封旧信。",
                    "notes": "回忆场景。",
                    "token_stream": [
                        {
                            "kind": "word",
                            "romanized": "mi",
                            "native_form": "⟂⟖",
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
                            "romanized": "kime",
                            "native_form": "✶⟈⟖⟂⟕",
                            "native_tokens": [
                                "det-time",
                                "c-k",
                                "v-i",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "旧的",
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
                            "romanized": "lima",
                            "native_form": "◍⟐⟖⟂⟔",
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
                            "romanized": "mame",
                            "native_form": "◈⟂⟔⟂⟕",
                            "native_tokens": [
                                "det-mind",
                                "c-m",
                                "v-a",
                                "c-m",
                                "v-e"
                            ],
                            "gloss_zh": "记得",
                            "glyph_preview": [
                                "assets/language/det-mind.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-a.svg",
                                "assets/language/c-m.svg",
                                "assets/language/v-e.svg"
                            ]
                        },
                        {
                            "kind": "word",
                            "romanized": "ri",
                            "native_form": "⟑⟖",
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
    ]
};
