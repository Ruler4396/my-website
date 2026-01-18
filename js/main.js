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
const GITHUB_OWNER = 'Ruler4396'; // GitHub用户名
const GITHUB_REPO = 'my-website'; // 仓库名
const GITHUB_BRANCH = 'main'; // 分支名

async function loadGithubContent(path) {
    try {
        const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('无法加载内容');
        }

        const data = await response.json();

        if (data.content) {
            // GitHub API 返回的是 base64 编码的内容
            const decodedContent = atob(data.content);
            return decodedContent;
        }
        return null;
    } catch (error) {
        console.error('加载内容失败:', error);
        return null;
    }
}

// ===== 解析 Markdown 内容 =====
function parseMarkdownPreview(markdown, maxLength = 150) {
    // 移除 markdown 语法标记
    let text = markdown
        .replace(/^#+\s+/gm, '') // 移除标题
        .replace(/\*\*/g, '') // 移除加粗
        .replace(/\*/g, '') // 移除斜体
        .replace(/!\[.*?\]\(.*?\)/g, '') // 移除图片
        .replace(/\[.*?\]\(.*?\)/g, '') // 移除链接
        .replace(/^>+\s*/gm, '') // 移除引用
        .replace(/^-+\s*/gm, '') // 移除列表
        .replace(/\n\s*\n/g, '\n') // 合并多余换行
        .trim();

    // 截取预览
    if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...';
    }

    return text;
}

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
                <a href="content/articles/${article.file}" class="read-more" target="_blank">
                    阅读全文 →
                </a>
            </div>
        `;
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
                <a href="content/notes/${note.file}" class="read-more" target="_blank">
                    查看笔记 →
                </a>
            </div>
        `;
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
                <a href="content/memories/${memory.file}" class="read-more" target="_blank">
                    查看回忆 →
                </a>
            </div>
        `;
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
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 返回顶部按钮（可选） =====
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    // 可以在这里添加返回顶部按钮的显示/隐藏逻辑
    if (scrollTop > 500) {
        // 显示返回顶部按钮
    } else {
        // 隐藏返回顶部按钮
    }
});
