const examples = [
    { id: "ex-01", tokens: ["mi", "water", "drink", "ri", "."], gloss: "我 水 喝 进行", translation_zh: "我正在喝水。", notes: "基础 SOV 与进行体。" },
    { id: "ex-02", tokens: ["ti", "book", "read", "ke", "?"], gloss: "你 书 读 疑问", translation_zh: "你读书吗？", notes: "一般疑问。" },
    { id: "ex-03", tokens: ["mi", "home", "lo", "si", "."], gloss: "我 家 在 系词", translation_zh: "我在家。", notes: "处所句。" },
    { id: "ex-04", tokens: ["ne", "room", "full", "si", "."], gloss: "这 房间 满 是", translation_zh: "这个房间是满的。", notes: "系词 + 形容词。" },
    { id: "ex-05", tokens: ["mi", "bread", "na", "eat", "."], gloss: "我 面饼 不 吃", translation_zh: "我不吃面饼。", notes: "否定。" },
    { id: "ex-06", tokens: ["sa", "town", "de", "go", "pa", "."], gloss: "他 城镇 向 去 过去", translation_zh: "他去了镇上。", notes: "移动与过去。" },
    { id: "ex-07", tokens: ["nami", "school", "lo", "learn", "ri", "."], gloss: "我们 学校 在 学习 进行", translation_zh: "我们正在学校学习。", notes: "进行中的处所活动。" },
    { id: "ex-08", tokens: ["mi", "letter", "write", "nu", "."], gloss: "我 书信 写 完成", translation_zh: "我已经写完信了。", notes: "完成体。" },
    { id: "ex-09", tokens: ["friend", "ge", "book", "mi", "de", "give", "pa", "."], gloss: "朋友 的 书 我 向 给 过去", translation_zh: "我把朋友的书给了出去。", notes: "属格与过去。" },
    { id: "ex-10", tokens: ["sa", "question", "say", "ke", "?"], gloss: "他 问题 说 疑问", translation_zh: "他提出问题了吗？", notes: "带宾语的问句。" },
    { id: "ex-11", tokens: ["to", "story", "true", "si", "ke", "?"], gloss: "那 故事 真实 是 疑问", translation_zh: "那个故事是真的吗？", notes: "判断句问句。" },
    { id: "ex-12", tokens: ["mi", "ge", "name", "clear", "si", "."], gloss: "我 的 名字 清晰 是", translation_zh: "我的名字很清晰。", notes: "代词领属。" },
    { id: "ex-13", tokens: ["parent", "ge", "home", "near", "si", "."], gloss: "父母 的 家 近 是", translation_zh: "父母的家很近。", notes: "名词领属。" },
    { id: "ex-14", tokens: ["river", "mo", "mountain", "big", "si", "."], gloss: "河 比 山 大 是", translation_zh: "河看起来比山更大。", notes: "比较句。" },
    { id: "ex-15", tokens: ["ti", "mo", "mi", "fast", "si", "."], gloss: "你 比 我 快 是", translation_zh: "你比我快。", notes: "人称比较。" },
    { id: "ex-16", tokens: ["learn__agent", "good", "si", "."], gloss: "学习者 好 是", translation_zh: "这个学习者很好。", notes: "派生人物名词。" },
    { id: "ex-17", tokens: ["sa", "na", "remember", "."], gloss: "他 不 记得", translation_zh: "他不记得。", notes: "不及物否定。" },
    { id: "ex-18", tokens: ["market", "lo", "many", "si", "."], gloss: "集市 在 众多 是", translation_zh: "集市上人很多。", notes: "用群体派生表达“很多”。" },
    { id: "ex-19", tokens: ["ti", "come", "pa", "ya", "mi", "joy", "si", "."], gloss: "你 来 过去 从句 我 喜悦 是", translation_zh: "因为你来了，我很高兴。", notes: "简单从句。" },
    { id: "ex-20", tokens: ["mi", "book", "read", "ya", "idea", "grow", "."], gloss: "我 书 读 从句 想法 生长", translation_zh: "我一读书，想法就会增长。", notes: "从句 + 结果。" },
    { id: "ex-21", tokens: ["mi", "river", "ko", "come", "."], gloss: "我 河 从 来", translation_zh: "我从河边过来。", notes: "来源格。" },
    { id: "ex-22", tokens: ["child", "road", "lo", "walk", "ri", "."], gloss: "孩子 道路 在 步行 进行", translation_zh: "孩子正在路上走。", notes: "基础叙事句。" },
    { id: "ex-23", tokens: ["to", "cup", "na", "full", "si", "."], gloss: "那 杯 不 满 是", translation_zh: "那个杯子不是满的。", notes: "名词 + 否定判断。" },
    { id: "ex-24", tokens: ["mi", "new", "book", "find", "nu", "."], gloss: "我 新 书 找到 完成", translation_zh: "我已经找到那本新书了。", notes: "完成体与修饰。" },
    { id: "ex-25", tokens: ["sami", "town", "de", "return", "vu", "."], gloss: "他们 城镇 向 返回 将", translation_zh: "他们将返回城镇。", notes: "意向体。" },
    { id: "ex-26", tokens: ["mi", "friend", "se", "walk", "ri", "."], gloss: "我 朋友 和 步行 进行", translation_zh: "我正和朋友一起走。", notes: "共格并列。" },
    { id: "ex-27", tokens: ["book__place", "quiet", "si", "."], gloss: "书之处 安静 是", translation_zh: "书房很安静。", notes: "地点派生。" },
    { id: "ex-28", tokens: ["teach__agent", "letter", "read", "pa", "."], gloss: "教授者 书信 读 过去", translation_zh: "教师读了信。", notes: "职业词条。" },
    { id: "ex-29", tokens: ["teach__agent", "ge", "voice", "gentle", "si", "."], gloss: "教授者 的 声音 温和 是", translation_zh: "老师的声音很温和。", notes: "描述人物特征。" },
    { id: "ex-30", tokens: ["tool", "se", "build", "ri", "."], gloss: "工具 用 建造 进行", translation_zh: "正在用工具建造。", notes: "工具格。" },
    { id: "ex-31", tokens: ["boat", "river", "lo", "go", "ri", "."], gloss: "船 河 在 去 进行", translation_zh: "船正在河上前行。", notes: "移动场景。" },
    { id: "ex-32", tokens: ["morning", "ha", "market", "lo", "bread", "buy", "pa", "."], gloss: "清晨 话题 集市 在 面饼 买 过去", translation_zh: "清晨时，我在集市买了面饼。", notes: "叙事句首时间话题。" },
    { id: "ex-33", tokens: ["evening", "home", "lo", "song", "hear", "pa", "."], gloss: "傍晚 家 在 歌 听见 过去", translation_zh: "傍晚在家听见了歌声。", notes: "时间 + 处所叙事。" },
    { id: "ex-34", tokens: ["night", "sky", "lo", "star", "see", "pa", "."], gloss: "夜晚 天 在 星 看见 过去", translation_zh: "夜里看见了星星。", notes: "自然场景。" },
    { id: "ex-35", tokens: ["work-n", "begin", "nu", "."], gloss: "工作 开始 已成", translation_zh: "工作已经开始了。", notes: "开始与完成的并置。" },
    { id: "ex-36", tokens: ["ti", "need", "water", "ke", "?"], gloss: "你 需要 水 疑问", translation_zh: "你需要水吗？", notes: "带情态语义的问句。" },
    { id: "ex-37", tokens: ["mi", "friend", "help", "vu", "."], gloss: "我 朋友 帮助 将", translation_zh: "我会帮助朋友。", notes: "未来意向。" },
    { id: "ex-38", tokens: ["ne", "road", "to", "far", "si", "."], gloss: "这 道路 那 远 是", translation_zh: "这条路到那边很远。", notes: "指示与距离。" },
    { id: "ex-39", tokens: ["good__abs", "small", "na", "si", "."], gloss: "善之性质 小 不 是", translation_zh: "善意并不小。", notes: "形容词名词化。" },
    { id: "ex-40", tokens: ["good__neg", "road", "na", "choose", "."], gloss: "不好之态 道路 不 选择", translation_zh: "不要选择不好的路。", notes: "反义派生。" },
    { id: "ex-41", tokens: ["mi", "sa", "come", "ya", "know", "."], gloss: "我 他 来 从句 知道", translation_zh: "我知道他来了。", notes: "从句作宾语。" },
    { id: "ex-42", tokens: ["child", "parent", "se", "town", "de", "go", "pa", "."], gloss: "孩子 父母 和 城镇 向 去 过去", translation_zh: "孩子和父母去了城镇。", notes: "并列主语。" },
    { id: "ex-43", tokens: ["mi", "memory", "write", "ri", "."], gloss: "我 记忆 写 进行", translation_zh: "我正在写记忆。", notes: "抽象宾语。" },
    { id: "ex-44", tokens: ["to", "home", "old", "si", "."], gloss: "那 家 旧 是", translation_zh: "那座房子很旧。", notes: "判断句。" },
    { id: "ex-45", tokens: ["friend", "ge", "child", "school", "lo", "learn", "ri", "."], gloss: "朋友 的 孩子 学校 在 学习 进行", translation_zh: "朋友的孩子正在学校学习。", notes: "双层名词短语。" },
    { id: "ex-46", tokens: ["sami", "door", "na", "close", "."], gloss: "他们 门 不 关闭", translation_zh: "他们没有关门。", notes: "否定及物句。" },
    { id: "ex-47", tokens: ["mi", "road", "ko", "return", "pa", "."], gloss: "我 道路 从 返回 过去", translation_zh: "我从路上返回了。", notes: "来源 + 返回。" },
    { id: "ex-48", tokens: ["sa", "idea", "say", "pa", "."], gloss: "他 想法 说出 过去", translation_zh: "他说出了自己的想法。", notes: "抽象内容表达。" },
    { id: "ex-49", tokens: ["question", "ask", "ya", "answer", "come", "."], gloss: "问题 提出 从句 回答 到来", translation_zh: "问题一提出，回答就来了。", notes: "过程型从句。" },
    { id: "ex-50", tokens: ["mi", "language", "learn", "want", "."], gloss: "我 语言 学习 想要", translation_zh: "我想学习这门语言。", notes: "意愿结构。" },
    { id: "ex-51", tokens: ["ti", "speak__agent", "si", "ke", "?"], gloss: "你 说话者 是 疑问", translation_zh: "你是使用者之一吗？", notes: "施事者派生与问句。" },
    { id: "ex-52", tokens: ["ne", "answer", "clear", "si", "ke", "?"], gloss: "这 回答 清晰 是 疑问", translation_zh: "这个回答清楚吗？", notes: "问句。" },
    { id: "ex-53", tokens: ["quiet__adv", "read", "."], gloss: "安静地 阅读", translation_zh: "安静地读。", notes: "方式副词。" },
    { id: "ex-54", tokens: ["mi", "ti", "help", "ya", "good__abs", "grow", "."], gloss: "我 你 帮助 从句 善 增长", translation_zh: "当我帮助你时，善意也会增长。", notes: "从句 + 抽象名词。" },
    { id: "ex-55", tokens: ["boat", "river", "ko", "town", "de", "go", "."], gloss: "船 河 从 城镇 向 去", translation_zh: "船从河道向城镇驶去。", notes: "起点与终点。" },
    { id: "ex-56", tokens: ["cloth", "se", "cup", "clean", "."], gloss: "布 用 杯 清洁", translation_zh: "用布擦拭杯子。", notes: "工具动作。" },
    { id: "ex-57", tokens: ["year", "begin", "pa", "ya", "new", "work-n", "come", "."], gloss: "年 开始 过去 从句 新 工作 到来", translation_zh: "一年开始时，新工作也来了。", notes: "叙事连接。" },
    { id: "ex-58", tokens: ["month", "finish", "nu", "ya", "memory", "remain", "."], gloss: "月度 结束 完成 从句 记忆 留下", translation_zh: "一个月结束后，记忆仍然留下。", notes: "时间从句。" },
    { id: "ex-59", tokens: ["mi", "old", "letter", "remember", "ri", "."], gloss: "我 旧 书信 记得 进行", translation_zh: "我正回想那封旧信。", notes: "回忆场景。" },
    { id: "ex-60", tokens: ["language", "true", "live", "vu", "."], gloss: "语言 真实 居住 将", translation_zh: "这门语言将真实地活下去。", notes: "愿景句。" }
];

const texts = [
    {
        id: "text-01",
        title: "自我介绍",
        summary: "最小可用自我介绍：住处、学习、写作与愿望。",
        example_ids: ["ex-03", "ex-07", "ex-08", "ex-50", "ex-60"]
    },
    {
        id: "text-02",
        title: "清晨集市",
        summary: "带时间、地点、交换和移动的短叙事。",
        example_ids: ["ex-26", "ex-31", "ex-32", "ex-33", "ex-42"]
    },
    {
        id: "text-03",
        title: "记忆与回答",
        summary: "抽象语义场：问题、回答、记忆与故事。",
        example_ids: ["ex-41", "ex-43", "ex-48", "ex-49", "ex-59"]
    }
];

module.exports = {
    examples,
    texts
};
