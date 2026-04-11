# LANGUAGE_LAB

`Project Neral` 是目前这门语言的内部代号。当前实现已经在 `MyWeb` 中落成一条独立静态流水线，用于维护语言本体而不影响原有文章索引。

## 入口

- 临时评审页：`/language-lab.html`
- 数据输出：`js/language-data.js`
- 字形资源：`assets/language/`

## 源文件

- 设计简报：`language/source/00-design-brief.md`
- 音系与转写：`language/source/10-phonology.md`
- 文字规范：`language/source/20-script.md`
- 语法骨架：`language/source/30-grammar.md`
- 字形蓝图：`language/source/glyph-blueprint.js`
- 词库蓝图：`language/source/lexicon-blueprint.js`
- 语法主题：`language/source/grammar-topics.js`
- 例句与短文本：`language/source/corpus.js`

## 构建

在 `MyWeb` 根目录执行：

```bash
node build-language.js
```

构建结果会：

1. 重新生成 `js/language-data.js`
2. 重新生成 `assets/language/*.svg`
3. 在构建阶段校验词条数、例句数、例句引用和语法主题引用

## 当前范围

- 已有 `668` 条词条
- 已有 `60` 条例句
- 已有 `3` 篇短文本
- 已有 `33` 个基础字形 SVG

## 注意事项

- 这条流水线与 `build-content.js` 完全分离，不会写入 `content/` 文章数据。
- 当前字形是 SVG 主稿，不是正式字体；原生文字的长期方向仍是后续再收敛到 `WOFF2`。
- 语言名和文字名仍未最终冻结，因此页面和文档中一律使用内部代号 `Project Neral`。
