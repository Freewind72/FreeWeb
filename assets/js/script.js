// 全局变量
let allData = [];
let currentCategory = 'all';

// DOM元素
const container = document.getElementById('container');
const loadingSpinner = document.querySelector('.loading-spinner');
const categoryFilter = document.querySelector('.category-filter');
const searchInput = document.getElementById('searchInput');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initThemeToggle();
    initSearch();

    // 监听窗口大小变化，调整分类按钮
    window.addEventListener('resize', () => {
        setTimeout(() => {
            adjustCategoryButtonsForMobile();
        }, 100);
    });

    // 监听分类筛选器的滚动事件，滚动时隐藏指示器
    const categoryFilter = document.querySelector('.category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('scroll', () => {
            const indicator = document.querySelector('.scroll-indicator');
            if (indicator) {
                indicator.style.opacity = '0';

                // 滚动停止后重新显示指示器
                clearTimeout(window.scrollTimeout);
                window.scrollTimeout = setTimeout(() => {
                    indicator.style.opacity = '0.7';
                }, 1000);
            }
        });
    }

    // 确保滚动指示器存在
    setTimeout(ensureScrollIndicator, 500);
});

// 加载数据
async function loadData() {
    try {
        const response = await fetch('https://moongazer.top/FreeWeb/api/get_data.php');
        const result = await response.json();

        if (result.code === 0) {
            allData = result.data;
            renderCategories(allData);
            renderWebsites(allData);

            // 显示内容，隐藏加载动画
            loadingSpinner.style.display = 'none';
            container.style.display = 'block';
        } else {
            showError(result.message);
        }
    } catch (error) {
        showError('加载数据失败，请检查网络连接');
    }
}

// 渲染分类筛选按钮
function renderCategories(data) {
    // 清空所有按钮
    categoryFilter.innerHTML = '';

    // 创建"全部"按钮
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn';
    allBtn.dataset.category = 'all';
    allBtn.innerHTML = `
                <i class="iconfont">&#xe6e0;</i>
                <span>全部</span>
            `;
    allBtn.addEventListener('click', () => filterCategory('all'));
    categoryFilter.appendChild(allBtn);

    // 添加其他分类按钮
    data.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.category = category.id;
        btn.innerHTML = `
                    <i class="iconfont">${category.icon || '&#xe6e0;'}</i>
                    <span>${category.name}</span>
                `;
        btn.addEventListener('click', () => filterCategory(category.id));
        categoryFilter.appendChild(btn);
    });

    // 设置当前激活的按钮
    updateActiveButton();

    // 检查是否有过多的分类，移动端优化
    setTimeout(() => {
        checkCategoryOverflow();
        adjustCategoryButtonsForMobile();
    }, 100);

    // 确保滚动指示器存在
    ensureScrollIndicator();
}

// 更新激活的按钮状态
function updateActiveButton() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category == currentCategory) {
            btn.classList.add('active');
        }
    });
}

// 渲染网站卡片
function renderWebsites(data, filterCategory = 'all', searchTerm = '') {
    container.innerHTML = '';

    let filteredData = data;

    // 按分类筛选
    if (filterCategory !== 'all') {
        filteredData = data.filter(cat => cat.id == filterCategory);
    }

    // 搜索过滤
    if (searchTerm) {
        filteredData = filteredData.map(category => ({
            ...category,
            websites: category.websites.filter(website =>
                website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                website.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(category => category.websites.length > 0);
    }

    if (filteredData.length === 0) {
        container.innerHTML = `
                    <div class="no-results" style="text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 20px;">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <p style="font-size: 18px;">没有找到相关网站</p>
                    </div>
                `;
        return;
    }

    filteredData.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.dataset.categoryId = category.id;

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.innerHTML = `<i class="iconfont">${category.icon || '&#xe6e0;'}</i>${category.name}`;

        const grid = document.createElement('div');
        grid.className = 'websites-grid';

        category.websites.forEach((website, index) => {
            const card = createWebsiteCard(website, index);
            grid.appendChild(card);
        });

        section.appendChild(title);
        section.appendChild(grid);
        container.appendChild(section);
    });
}

// 创建网站卡片
function createWebsiteCard(website, index) {
    const card = document.createElement('a');
    card.className = 'website-card glass-card';
    card.href = website.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    // 动画延迟
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
                <div class="website-icon">
                    <span>${website.icon || '🌐'}</span>
                </div>
                <div class="website-name">${website.name}</div>
                <div class="website-desc">${website.description || '暂无描述'}</div>
            `;

    return card;
}

// 筛选分类
function filterCategory(categoryId) {
    currentCategory = categoryId;
    updateActiveButton();

    // 重新渲染
    renderWebsites(allData, categoryId, searchInput.value);

    // 移动端优化：滚动到选中的分类按钮
    setTimeout(() => {
        const activeBtn = document.querySelector(`.filter-btn[data-category="${categoryId}"]`);
        if (activeBtn && window.innerWidth <= 768) {
            activeBtn.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, 100);
}

// 初始化搜索功能
function initSearch() {
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderWebsites(allData, currentCategory, searchTerm);
        }, 300);
    });
}

// 初始化主题切换
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // 应用保存的主题
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    // 切换主题
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// 确保滚动指示器存在
function ensureScrollIndicator() {
    let indicator = document.querySelector('.scroll-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.textContent = '← 滑动 →';
        document.querySelector('.category-filter-wrapper')?.appendChild(indicator);
    }
}

// 根据屏幕宽度和分类数量调整按钮显示
function adjustCategoryButtonsForMobile() {
    const buttons = document.querySelectorAll('.filter-btn');
    const container = document.querySelector('.category-filter');

    if (!container || buttons.length === 0) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // 在移动设备上，确保按钮不会换行
        container.style.flexWrap = 'nowrap';
        container.style.justifyContent = 'flex-start';

        // 为所有按钮设置 flex-shrink 以防止压缩
        buttons.forEach(btn => {
            btn.style.flexShrink = '0';
        });
    }

    // 如果分类过多，在移动端使用更紧凑的样式
    if (isMobile && buttons.length > 5) {
        buttons.forEach(btn => {
            // 减少按钮内边距以节省空间
            if (window.innerWidth <= 480) {
                btn.style.padding = '8px 12px';
                btn.style.fontSize = '12px';
            } else {
                btn.style.padding = '9px 14px';
                btn.style.fontSize = '12px';
            }
        });
    }
}

// 检查分类按钮是否溢出
function checkCategoryOverflow() {
    const container = document.querySelector('.category-filter');
    const indicator = document.querySelector('.scroll-indicator');

    if (!container) return;

    // 检查容器是否溢出
    const isOverflowing = container.scrollWidth > container.clientWidth;

    if (indicator) {
        // 只在移动端且内容溢出时显示滚动指示器
        if (window.innerWidth <= 768 && isOverflowing) {
            indicator.style.display = 'block';
        } else {
            indicator.style.display = 'none';
        }
    }

    if (window.innerWidth <= 768) {
        // 在移动端上，无论是否溢出都设置为nowrap以允许滚动
        container.style.flexWrap = 'nowrap';
        container.style.justifyContent = 'flex-start';

        if (isOverflowing) {
            // 如果内容溢出，启用水平滚动
            container.style.overflowX = 'auto';
            container.style.scrollBehavior = 'smooth';
        }
    } else {
        // 在PC端，使用换行布局
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'center';
        container.style.overflowX = 'visible';
    }
}

// 显示错误信息
function showError(message) {
    loadingSpinner.style.display = 'none';
    container.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 60px 20px;">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color: #ef4444; margin-bottom: 20px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p style="font-size: 18px; color: var(--text-secondary);">${message}</p>
                </div>
            `;

}
