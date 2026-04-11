module.exports = [
    {
        id: "word-order",
        title: "基础语序与信息排列",
        rule_summary: "Project Neral 默认采用 SOV 语序；定语和属格短语位于中心词前，后置词位于名词短语后。",
        patterns: ["主语 + 宾语 + 动词", "定语 + 名词", "领有者 + ge + 名词", "名词 + lo/de/se/ko"],
        exceptions: ["主题化时可把话题提前，但动词仍在句尾。"],
        linked_examples: ["ex-01", "ex-02", "ex-09", "ex-22"]
    },
    {
        id: "copula-location",
        title: "系词与处所句",
        rule_summary: "`si` 同时承担系词和存在词角色；地点通过后置词 `lo` 标记。",
        patterns: ["名词 + lo + si", "名词 + 名词 + si"],
        exceptions: ["动态移动不用 `si`，而使用实义动词。"],
        linked_examples: ["ex-03", "ex-04", "ex-18", "ex-44"]
    },
    {
        id: "negation",
        title: "否定",
        rule_summary: "否定词 `na` 位于动词短语之前；系词句同样在 `si` 前使用 `na`。",
        patterns: ["主语 + 宾语 + na + 动词", "主语 + 名词 + na + si"],
        exceptions: ["强调否定时可在句首额外设置话题，但 `na` 的位置不变。"],
        linked_examples: ["ex-05", "ex-17", "ex-23", "ex-46"]
    },
    {
        id: "tense-aspect",
        title: "时体标记",
        rule_summary: "`pa` 表过去，`ri` 表进行，`vu` 表计划或意向，`nu` 表完成；这些体貌词位于动词之后。",
        patterns: ["动词 + pa", "动词 + ri", "动词 + vu", "动词 + nu"],
        exceptions: ["叙事中若时间已明确，连续句可省略重复的过去标记。"],
        linked_examples: ["ex-06", "ex-07", "ex-08", "ex-24", "ex-35"]
    },
    {
        id: "questions",
        title: "一般疑问与问句边界",
        rule_summary: "一般疑问通过句尾词 `ke` 实现，不改变基本语序。",
        patterns: ["完整句子 + ke"],
        exceptions: ["带疑问词的句子仍可保留 `ke`，但口语中允许省略。"],
        linked_examples: ["ex-10", "ex-11", "ex-36", "ex-52"]
    },
    {
        id: "possession",
        title: "领属结构",
        rule_summary: "领有者在前，后接 `ge`，被领属名词在后。",
        patterns: ["名词 + ge + 名词", "代词 + ge + 名词"],
        exceptions: ["固定亲属称谓中，口语可省略显式领属，但词典基准形不省略。"],
        linked_examples: ["ex-12", "ex-13", "ex-29", "ex-45"]
    },
    {
        id: "comparison",
        title: "比较",
        rule_summary: "比较结构使用 `mo`，顺序为“比较基准 + mo + 形容词”。",
        patterns: ["名词 + mo + 形容词", "名词 + mo + 形容词 + si"],
        exceptions: ["强调差异程度时可加副词，但 V1 不引入专门级别屈折。"],
        linked_examples: ["ex-14", "ex-15", "ex-38"]
    },
    {
        id: "derivation",
        title: "派生词与词类扩展",
        rule_summary: "高频词汇通过稳定派生扩展，而不是依靠大规模屈折；词类变化时语义标记也可切换。",
        patterns: ["名词 + li", "名词 + to", "动词 + ren", "形容词 + ma", "ku + 形容词"],
        exceptions: ["个别高频功能词不参与派生。"],
        linked_examples: ["ex-16", "ex-27", "ex-39", "ex-53"]
    },
    {
        id: "subordination",
        title: "简单从句",
        rule_summary: "V1 从句通过连接词 `ya` 引入，整体仍保持主句 SOV 节奏。",
        patterns: ["[从句] + ya + 主句", "名词 + ya + 动词"],
        exceptions: ["嵌套层级不超过一层；更复杂结构留到下一版。"],
        linked_examples: ["ex-19", "ex-20", "ex-41", "ex-54"]
    },
    {
        id: "movement",
        title: "位置与移动",
        rule_summary: "`lo` 标记静态处所，`de` 标记方向或受益，`ko` 标记来源。",
        patterns: ["地点 + lo", "地点 + de", "地点 + ko"],
        exceptions: ["某些移动动词可省略显式处所，但词典示例仍优先保留。"],
        linked_examples: ["ex-21", "ex-25", "ex-31", "ex-47", "ex-55"]
    },
    {
        id: "coordination",
        title: "并列与共格",
        rule_summary: "`se` 既可表示“和”，也可表示“用”；具体由搭配决定。",
        patterns: ["名词 + se + 名词", "工具 + se + 动词"],
        exceptions: ["若语义歧义较大，优先在译文或注释中解释。"],
        linked_examples: ["ex-26", "ex-30", "ex-42", "ex-56"]
    },
    {
        id: "narrative-flow",
        title: "叙事节奏",
        rule_summary: "叙事中倾向先给时间和地点，再给人物和动作；过去标记可在段内首句显式出现。",
        patterns: ["时间 + 地点 + 主语 + 宾语 + 动词 + pa"],
        exceptions: ["在对话和问句中不强制先出时间短语。"],
        linked_examples: ["ex-32", "ex-33", "ex-34", "ex-57", "ex-58", "ex-60"]
    }
];
