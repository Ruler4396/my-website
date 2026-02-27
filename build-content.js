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

// 生成content-data.js
const contentDir = path.join(__dirname, 'content');
const markdownFiles = getMarkdownFiles(contentDir);

let output = '// ===== Markdown 内容数据 =====\n';
output += '// 自动生成的文件，包含所有markdown内容\n';
output += 'window.markdownContent = {\n';

for (const file of markdownFiles) {
    const key = file.path.replace(/\.md$/, '');
    output += `    '${key}': \`${escapeJS(file.content)}\`,\n`;
}

output += '};\n';

// 写入文件
const outputFile = path.join(__dirname, 'js', 'content-data.js');
fs.writeFileSync(outputFile, output, 'utf-8');

console.log(`✅ 已生成 ${markdownFiles.length} 个markdown文件的内容数据`);
console.log(`📄 输出文件: js/content-data.js`);
