const fs = require('fs');
const path = require('path');

// 递归读取目录下的所有markdown文件
function getMarkdownFiles(dir, baseDir = '') {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...getMarkdownFiles(fullPath, path.join(baseDir, item)));
        } else if (path.extname(item) === '.md') {
            const relativePath = path.join(baseDir, item);
            const content = fs.readFileSync(fullPath, 'utf-8');
            files.push({
                path: relativePath.replace(/\\/g, '/'),
                content: content
            });
        }
    }

    return files;
}

// 转义JavaScript字符串
function escapeJS(str) {
    return str
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');
}

function normalizeArticleContent(content) {
    const normalized = content
        .replace(/\r\n?/g, '\n')
        .replace(/\uFEFF/g, '')
        .replace(/&emsp;|&#12288;|&#x3000;/gi, '')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p\s*>/gi, '\n\n')
        .replace(/<p[^>]*>/gi, '')
        .replace(/<\/div\s*>/gi, '\n')
        .replace(/<div[^>]*>/gi, '')
        .replace(/<\/?[^>\n]+>/g, '')
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*\n]+)\*/g, '$1')
        .replace(/\*/g, '')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[\^[^\]]+\]/g, '');

    const compactLines = [];
    let lastWasBlank = false;

    for (const rawLine of normalized.split('\n')) {
        const line = rawLine
            .replace(/^[\u200B\u3000\s]+/, '')
            .replace(/^>\s?/, '')
            .replace(/^#{1,6}\s+/, '')
            .replace(/[ \t]+$/g, '');

        if (!line) {
            if (!lastWasBlank) {
                compactLines.push('');
            }
            lastWasBlank = true;
            continue;
        }

        compactLines.push(line);
        lastWasBlank = false;
    }

    return compactLines.join('\n').trim();
}

// 生成content-data.js
const contentDir = path.join(__dirname, 'content');
const markdownFiles = getMarkdownFiles(contentDir);

let output = '// ===== Markdown 内容数据 =====\n';
output += '// 自动生成的文件，包含所有markdown内容\n';
output += 'window.markdownContent = {\n';

for (const file of markdownFiles) {
    const key = file.path.replace(/\.md$/, '');
    const content = key.startsWith('articles/') ? normalizeArticleContent(file.content) : file.content;
    output += `    '${key}': \`${escapeJS(content)}\`,\n`;
}

output += '};\n';

// 写入文件
const outputFile = path.join(__dirname, 'js', 'content-data.js');
fs.writeFileSync(outputFile, output, 'utf-8');

console.log(`✅ 已生成 ${markdownFiles.length} 个markdown文件的内容数据`);
console.log(`📄 输出文件: js/content-data.js`);
