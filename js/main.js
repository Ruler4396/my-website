// ===== 暗黑模式检测和切换 =====
const themeToggle = document.getElementById('theme-toggle');
const modalThemeToggle = document.getElementById('modal-theme-toggle');

// 检测系统暗黑模式偏好
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// 获取保存的主题或使用系统偏好
function getSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
}

// 应用主题
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// 初始化主题
const initialTheme = getSavedTheme();
applyTheme(initialTheme);

// 监听系统主题变化
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// 绑定主题切换按钮
themeToggle?.addEventListener('click', toggleTheme);
modalThemeToggle?.addEventListener('click', toggleTheme);

// ===== 导航栏交互 =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== 滚动时导航栏高亮 =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
});

// ===== 内容数据配置 =====
const contentData = {
    articles: [
        { file: '2024.10.6.md', title: '技术与思考', date: '2024.10.6' },
        { file: '2024.4.11.md', title: '生活随笔', date: '2024.4.11' },
        { file: '趁生命气息逗留.md', title: '趁生命气息逗留', date: '2024.11.17' },
        { file: '最后的问题.md', title: '最后的问题', date: '2024.11.17' }
    ],
    notes: [
        { file: 'FoggBehaviorModel.md', title: '福格行为模型', image: '福格行为模型.png' },
        { file: '拖延心理学.md', title: '拖延心理学', image: '焦点地图.png' },
        { file: '学习之道.md', title: '学习之道', image: '如何鼓励.png' }
    ],
    poetry: [
        { title: '赋', content: '古诗词之美，在于意境深远...' }
    ],
    memories: [
        { file: '给鈤荷.md', title: '给鈤荷' },
        { file: '鈤荷.md', title: '鈤荷' },
        { file: '回Tz歪比巴卜.md', title: '回Tz歪比巴卜' },
        { file: '给晓美.md', title: '给晓美' }
    ]
};

// ===== GitHub 内容加载函数 =====
const GITHUB_OWNER = 'Ruler4396';
const GITHUB_REPO = 'my-website';
const GITHUB_BRANCH = 'main';

async function loadGithubContent(path) {
    try {
        const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('无法加载内容');
        }

        const data = await response.json();

        if (data.content) {
            const decodedContent = atob(data.content);
            return decodedContent;
        }
        return null;
    } catch (error) {
        console.error('加载内容失败:', error);
        return null;
    }
}

// ===== 简单的 Markdown 转 HTML =====
function markdownToHTML(markdown) {
    let html = markdown;

    // 转义 HTML 特殊字符
    html = html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    // 代码块
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

    // 行内代码
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // 标题
    html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // 粗体和斜体
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // 引用
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

    // 无序列表
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // 有序列表
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // 链接
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // 图片
    html = html.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1">');

    // 分隔线
    html = html.replace(/^---$/gm, '<hr>');

    // 段落
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';

    // 清理空段落
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/<p>(<h[1-6]>)/g, '$1');
    html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ul>)/g, '$1');
    html = html.replace(/(<\/ul>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ol>)/g, '$1');
    html = html.replace(/(<\/ol>)<\/p>/g, '$1');
    html = html.replace(/<p>(<pre>)/g, '$1');
    html = html.replace(/(<\/pre>)<\/p>/g, '$1');
    html = html.replace(/<p>(<blockquote>)/g, '$1');
    html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');
    html = html.replace(/<p>(<\/li>)/g, '$1');
    html = html.replace(/(<li>)<\/p>/g, '$1');

    return html;
}

// ===== Markdown 模态框 =====
const markdownModal = document.getElementById('markdown-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const markdownContent = document.getElementById('markdown-content');

// 打开模态框
async function openMarkdownModal(title, filePath) {
    modalTitle.textContent = title;
    markdownContent.innerHTML = '<p style="text-align: center; padding: 40px;">加载中...</p>';
    markdownModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 尝试从 GitHub 加载内容
    const content = await loadGithubContent(filePath);

    if (content) {
        const htmlContent = markdownToHTML(content);
        markdownContent.innerHTML = htmlContent;
    } else {
        // 如果 GitHub 加载失败，显示备用链接
        markdownContent.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <p>无法从 GitHub 加载内容</p>
                <p>您可以 <a href="${filePath}" target="_blank" style="color: var(--primary-color);">点击这里</a> 在新标签页中打开</p>
            </div>
        `;
    }
}

// 关闭模态框
function closeMarkdownModal() {
    markdownModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalOverlay?.addEventListener('click', closeMarkdownModal);
modalClose?.addEventListener('click', closeMarkdownModal);

// ESC 键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && markdownModal.classList.contains('active')) {
        closeMarkdownModal();
    }
});

// ===== 渲染文章卡片 =====
function renderArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    contentData.articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'content-card fade-in';
        card.innerHTML = `
            <div class="content-card-header">
                <div class="content-card-title">${article.title}</div>
                <div class="content-card-date">${article.date}</div>
            </div>
            <div class="content-card-body">
                <p>点击查看完整内容...</p>
            </div>
            <div class="content-card-footer">
                <span class="read-more" data-file="content/articles/${article.file}" data-title="${article.title}">
                    阅读全文 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(article.title, `content/articles/${article.file}`);
        });

        grid.appendChild(card);
    });
}

// ===== 渲染读书笔记 =====
function renderNotes() {
    const list = document.getElementById('notes-list');
    if (!list) return;

    contentData.notes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'note-card fade-in';
        card.innerHTML = `
            <img src="assets/images/${note.image}" alt="${note.title}" class="note-card-image">
            <div class="note-card-header">
                <div class="note-card-title">${note.title}</div>
            </div>
            <div class="note-card-body">
                <p>查看我的读书笔记，记录思考与收获...</p>
            </div>
            <div class="content-card-footer">
                <span class="read-more" data-file="content/notes/${note.file}" data-title="${note.title}">
                    查看笔记 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(note.title, `content/notes/${note.file}`);
        });

        list.appendChild(card);
    });
}

// ===== 渲染古诗词 =====
function renderPoetry() {
    const grid = document.getElementById('poetry-grid');
    if (!grid) return;

    contentData.poetry.forEach(poem => {
        const card = document.createElement('div');
        card.className = 'poetry-card fade-in';
        card.innerHTML = `
            <h3 class="poetry-title">${poem.title}</h3>
            <div class="poetry-content">${poem.content}</div>
        `;
        grid.appendChild(card);
    });
}

// ===== 渲染纪念品 =====
function renderMemories() {
    const list = document.getElementById('memories-list');
    if (!list) return;

    contentData.memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card fade-in';
        card.innerHTML = `
            <h3 class="memory-title">${memory.title}</h3>
            <div class="memory-preview">
                珍藏的美好回忆...
            </div>
            <div class="content-card-footer">
                <span class="read-more" data-file="content/memories/${memory.file}" data-title="${memory.title}">
                    查看回忆 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(memory.title, `content/memories/${memory.file}`);
        });

        list.appendChild(card);
    });
}

// ===== 滚动动画 =====
function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
}

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    renderNotes();
    renderPoetry();
    renderMemories();
    handleScrollAnimation();
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
