// ===== 暗黑模式检测和切换 =====
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
function initTheme() {
    const initialTheme = getSavedTheme();
    applyTheme(initialTheme);

    // 绑定主题切换按钮
    const themeToggle = document.getElementById('theme-toggle');
    const modalThemeToggle = document.getElementById('modal-theme-toggle');
    themeToggle?.addEventListener('click', toggleTheme);
    modalThemeToggle?.addEventListener('click', toggleTheme);
}

// 立即初始化主题（不等待DOM）
initTheme();

// 监听系统主题变化
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

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

// ===== Markdown 模态框 =====
const markdownModal = document.getElementById('markdown-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const markdownContentDiv = document.getElementById('markdown-content');

// 打开模态框 - 使用本地预加载的内容
function openMarkdownModal(title, contentKey) {
    modalTitle.textContent = title;
    markdownContentDiv.innerHTML = '<p style="text-align: center; padding: 40px;">加载中...</p>';
    markdownModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 从预加载的数据中读取内容
    const markdownText = window.markdownContent[contentKey];

    if (markdownText) {
        // 使用 marked.js 解析 markdown
        try {
            const htmlContent = marked.parse(markdownText);
            markdownContentDiv.innerHTML = htmlContent;
        } catch (error) {
            console.error('Markdown解析失败:', error);
            markdownContentDiv.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <p>内容解析失败</p>
                </div>
            `;
        }
    } else {
        markdownContentDiv.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <p>未找到内容</p>
                <p>内容键: ${contentKey}</p>
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
                <span class="read-more" data-content="articles/${article.file.replace('.md', '')}" data-title="${article.title}">
                    阅读全文 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(article.title, `articles/${article.file.replace('.md', '')}`);
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
                <span class="read-more" data-content="notes/${note.file.replace('.md', '')}" data-title="${note.title}">
                    查看笔记 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(note.title, `notes/${note.file.replace('.md', '')}`);
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
                <span class="read-more" data-content="memories/${memory.file.replace('.md', '')}" data-title="${memory.title}">
                    查看回忆 →
                </span>
            </div>
        `;

        // 绑定点击事件
        const readMore = card.querySelector('.read-more');
        readMore.addEventListener('click', () => {
            openMarkdownModal(memory.title, `memories/${memory.file.replace('.md', '')}`);
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
    // 重新绑定主题切换按钮（防止第一次绑定失败）
    const themeToggle = document.getElementById('theme-toggle');
    const modalThemeToggle = document.getElementById('modal-theme-toggle');
    themeToggle?.addEventListener('click', toggleTheme);
    modalThemeToggle?.addEventListener('click', toggleTheme);

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
