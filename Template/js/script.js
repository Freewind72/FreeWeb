// 模拟产品数据
const products = [
    {
        id: 1,
        title: "可爱兔子玩偶 毛绒玩具",
        category: "毛绒玩具",
        price: 89.00,
        originalPrice: 129.00,
        description: "超级柔软的兔子玩偶，采用优质棉绒制成，抱着睡觉非常舒适，尺寸约35cm，有多种颜色可选。",
        images: [
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600181517545-1c341ab3b8e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1634712285287-2f7c5a8b4e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "新品"
    },
    {
        id: 2,
        title: "动漫角色手办 高精度模型",
        category: "手办模型",
        price: 299.00,
        originalPrice: 399.00,
        description: "最新动漫角色高精度手办模型，1/8比例，全高约20cm，采用优质PVC材质，细节精细，附专属底座。",
        images: [
            "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1597212616940-80816e0a13ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1628191010218-a0d1e5b4da9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "畅销"
    },
    {
        id: 3,
        title: "迷你盲盒系列 惊喜玩具",
        category: "盲盒系列",
        price: 59.00,
        originalPrice: 69.00,
        description: "超萌迷你盲盒系列，每款内含1个随机小玩具，全套12款，隐藏款1款，非常适合收藏与交换。",
        images: [
            "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1631745942244-31e08ee8aa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1593990965215-075c5f9dd9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "特惠"
    },
    {
        id: 4,
        title: "熊猫系列抱枕 靠垫",
        category: "家居周边",
        price: 129.00,
        originalPrice: 159.00,
        description: "熊猫造型抱枕靠垫，尺寸约45cm×45cm，柔软舒适，支持机洗，是家居或办公室的理想伴侣。",
        images: [
            "https://images.unsplash.com/photo-1605000797499-95a51fd67dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "爆款"
    },
    {
        id: 5,
        title: "Q版动漫钥匙扣 挂件",
        category: "周边小物",
        price: 39.00,
        originalPrice: 49.00,
        description: "Q版动漫人物钥匙扣挂件系列，尺寸约5cm，合金材质，不易褪色，款式多样，精美可爱。",
        images: [
            "https://images.unsplash.com/photo-1589873360985-f8cb0c3adf2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594054525315-b28b049f15d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1579389083078-4e7018379f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "新品"
    },
    {
        id: 6,
        title: "复古胶片相机 玩具相机",
        category: "创意玩具",
        price: 159.00,
        originalPrice: 199.00,
        description: "复古胶片相机造型玩具，可爱的外观设计，可真实拍摄，使用普通胶片即可，适合文艺清新风格爱好者。",
        images: [
            "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        badge: "限量"
    },
    {
        id: 7,
        title: "大荧幕 高清显示器 27英寸",
        category: "电子产品",
        price: 1599.00,
        originalPrice: 1999.00,
        description: "27英寸高清大荧幕显示器，IPS面板，178°广视角，支持多种接口，适合办公与娱乐。",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
        ],
        badge: "新品"
    },
    {
        id: 8,
        title: "萌趣猫咪夜灯",
        category: "家居周边",
        price: 79.00,
        originalPrice: 99.00,
        description: "可爱的猫咪造型夜灯，柔和灯光，USB充电，适合卧室、书房使用，陪伴每一个温馨夜晚。",
        images: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
        ],
        badge: "热卖"
    },
    {
        id: 9,
        title: "积木拼装机器人套装",
        category: "创意玩具",
        price: 189.00,
        originalPrice: 229.00,
        description: "高品质积木拼装机器人，锻炼动手能力，适合6岁以上儿童，包含300+颗粒。",
        images: [
            "https://images.unsplash.com/photo-1511453673005-6b8cfc5f0b84?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
        ],
        badge: "新品"
    },
    {
        id: 10,
        title: "动漫主题马克杯",
        category: "周边小物",
        price: 49.00,
        originalPrice: 59.00,
        description: "动漫主题陶瓷马克杯，容量350ml，耐高温，图案精美，送礼自用皆宜。",
        images: [
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
        ],
        badge: "特惠"
    }
    // ...如需更多商品可继续添加...
];

// 购物车数据
let cart = [];

// DOM元素
const productsPage = document.getElementById('products-page');
const detailPage = document.getElementById('detail-page');
const cartPage = document.getElementById('cart-page');
const productList = document.querySelector('.product-list');
const productsLink = document.getElementById('products-link');
const detailLink = document.getElementById('detail-link');
const cartLink = document.getElementById('cart-link');
const cartIcon = document.querySelector('.cart-icon');
const userIcon = document.querySelector('.user-icon');
const userLogin = document.querySelector('.user-login');
const loginClose = document.querySelector('.login-close');
const backToTop = document.querySelector('.back-to-top');
const cartCount = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartShipping = document.getElementById('cart-shipping');
const cartDiscount = document.getElementById('cart-discount');
const cartTotal = document.getElementById('cart-total');
const loaderContainer = document.querySelector('.loader-container');
const continueShoppingBtn = document.querySelector('.continue-shopping');
const homePage = document.getElementById('home-page');
const homeLink = document.getElementById('home-link');
const aboutPage = document.getElementById('about-page');
const aboutLink = document.getElementById('about-link');
const userLoginMask = document.querySelector('.user-login-mask');

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 只显示首页，隐藏其它页面
    homePage.style.display = 'block';
    productsPage.style.display = 'none';
    detailPage.style.display = 'none';
    cartPage.style.display = 'none';
    aboutPage.style.display = 'none';

    // 加载产品列表
    renderProductList();

    // 3秒后隐藏加载动画
    setTimeout(() => {
        loaderContainer.style.opacity = '0';
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 500);
    }, 1500);

    // 动画效果
    animateElements();

    // 滚动事件监听
    window.addEventListener('scroll', function () {
        // 顶部导航栏滚动效果
        if (window.scrollY > 50) {
            document.querySelector('.header').classList.add('scrolled');
        } else {
            document.querySelector('.header').classList.remove('scrolled');
        }

        // 回到顶部按钮显示/隐藏
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
});

// 渲染产品列表
function renderProductList() {
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        if (index > 0) {
            productCard.classList.add(`delay-${index}`);
        }

        productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-img-container">
                    <img src="${product.images[0]}" alt="${product.title}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <span class="product-category">${product.category}</span>
                    <div class="product-price">
                        <div>
                            <span class="price">¥${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="original-price">¥${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> 加入
                        </button>
                    </div>
                </div>
            `;

        productList.appendChild(productCard);
    });

    // 为每个产品卡片添加点击事件
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.querySelector('.add-to-cart').getAttribute('data-id'));
        card.addEventListener('click', function (e) {
            // 如果点击的是加入购物车按钮，不触发查看详情
            if (!e.target.closest('.add-to-cart')) {
                viewProductDetail(productId);
            }
        });
    });

    // 为加入购物车按钮添加事件
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, 1);
        });
    });
}

// 页面切换动画辅助函数
function switchPage(showPage, hidePages) {
    // 先移除所有页面的动画类
    [showPage, ...hidePages].forEach(page => {
        page.classList.remove('page-fade-in', 'page-fade');
    });
    // 隐藏其它页面
    hidePages.forEach(page => {
        page.classList.add('page-fade');
        page.style.display = 'none';
    });
    // 显示目标页面并触发动画
    showPage.style.display = 'block';
    showPage.classList.add('page-fade');
    // 强制重绘以确保动画生效
    void showPage.offsetWidth;
    showPage.classList.add('page-fade-in');
    setTimeout(() => {
        showPage.classList.remove('page-fade');
    }, 500); // 动画时长与CSS一致
}

// 初始化所有页面为动画容器
[homePage, productsPage, detailPage, cartPage, aboutPage].forEach(page => {
    page.classList.add('page-fade');
    if (page !== homePage) page.style.display = 'none';
    else page.classList.add('page-fade-in');
});

// 修改页面切换函数
function showHomePage() {
    switchPage(homePage, [productsPage, detailPage, cartPage, aboutPage]);
    homeLink.classList.add('active');
    productsLink.classList.remove('active');
    cartLink.classList.remove('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

function showProductsPage() {
    switchPage(productsPage, [homePage, detailPage, cartPage, aboutPage]);
    homeLink.classList.remove('active');
    productsLink.classList.add('active');
    cartLink.classList.remove('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

function showCartPage() {
    updateCartDisplay();
    switchPage(cartPage, [homePage, productsPage, detailPage, aboutPage]);
    homeLink.classList.remove('active');
    productsLink.classList.remove('active');
    cartLink.classList.add('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

function showAboutPage() {
    switchPage(aboutPage, [homePage, productsPage, detailPage, cartPage]);
    homeLink.classList.remove('active');
    productsLink.classList.remove('active');
    cartLink.classList.remove('active');
    aboutLink.classList.add('active');
    window.scrollTo(0, 0);
}

// 商品详情页切换动画
function viewProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // 更新详情页面
    document.getElementById('detail-title').textContent = product.title;
    document.getElementById('detail-price').textContent = `¥${product.price.toFixed(2)}`;
    document.getElementById('detail-original-price').textContent = product.originalPrice ? `¥${product.originalPrice.toFixed(2)}` : '';
    document.getElementById('detail-discount').textContent = product.originalPrice ? `节省 ¥${(product.originalPrice - product.price).toFixed(2)}` : '';
    document.getElementById('detail-description').textContent = product.description;

    // 设置主图
    const mainImage = document.getElementById('main-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.title;

    // 更新缩略图
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${product.title}">`;
        thumbnail.addEventListener('click', function () {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = image;
        });
        thumbnailContainer.appendChild(thumbnail);
    });

    // 为详情页的加入购物车按钮设置产品ID
    const addToCartBtn = document.querySelector('.add-to-cart-large');
    addToCartBtn.setAttribute('data-id', product.id);

    // 显示详情页并隐藏其他页面
    switchPage(detailPage, [homePage, productsPage, cartPage, aboutPage]);
    homeLink.classList.remove('active');
    productsLink.classList.remove('active');
    cartLink.classList.remove('active');
    aboutLink.classList.remove('active');
    detailLink && detailLink.classList.add('active');

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 添加产品到购物车
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // 检查购物车中是否已有该商品
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }

    // 更新购物车显示
    updateCartDisplay();

    // 显示添加成功的提示
    alert(`${product.title} 已添加到购物车！`);
}

// 更新购物车显示
function updateCartDisplay() {
    // 更新购物车数量
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // 更新购物车页面
    if (cart.length > 0) {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-info">
                        <h3>${item.title}</h3>
                        <div class="cart-item-price">¥${item.price.toFixed(2)}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                                <button class="quantity-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                            </div>
                            <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `;
            cartItemsContainer.appendChild(cartItem);
        });

        // 为数量调整按钮添加事件
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                const isMinus = this.classList.contains('minus');
                const input = this.parentElement.querySelector('.quantity-input');
                let quantity = parseInt(input.value);

                if (isMinus) {
                    if (quantity > 1) {
                        quantity--;
                        input.value = quantity;
                        updateCartItemQuantity(productId, quantity);
                    }
                } else {
                    quantity++;
                    input.value = quantity;
                    updateCartItemQuantity(productId, quantity);
                }
            });
        });

        // 为输入框添加事件
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                let quantity = parseInt(this.value) || 1;
                if (quantity < 1) quantity = 1;
                this.value = quantity;
                updateCartItemQuantity(productId, quantity);
            });
        });

        // 为删除按钮添加事件
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    } else {
        cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>您的购物车是空的</p>
                    <button class="continue-shopping">继续购物</button>
                </div>
            `;
        document.querySelector('.continue-shopping').addEventListener('click', function () {
            showProductsPage();
        });
    }

    // 计算并更新订单摘要
    updateOrderSummary();
}

// 更新购物车中商品数量
function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateOrderSummary();
    }
}

// 从购物车中移除商品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// 更新订单摘要
function updateOrderSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 199 ? 0 : 15;
    const discount = subtotal > 500 ? subtotal * 0.1 : 0;
    const total = subtotal + shipping - discount;

    cartSubtotal.textContent = `¥${subtotal.toFixed(2)}`;
    cartShipping.textContent = shipping === 0 ? '包邮' : `¥${shipping.toFixed(2)}`;
    cartDiscount.textContent = discount > 0 ? `-¥${discount.toFixed(2)}` : '¥0.00';
    cartTotal.textContent = `¥${total.toFixed(2)}`;
}

// 显示首页
function showHomePage() {
    switchPage(homePage, [productsPage, detailPage, cartPage, aboutPage]);
    homeLink.classList.add('active');
    productsLink.classList.remove('active');
    cartLink.classList.remove('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

// 显示产品列表页面
function showProductsPage() {
    switchPage(productsPage, [homePage, detailPage, cartPage, aboutPage]);
    homeLink.classList.remove('active');
    productsLink.classList.add('active');
    cartLink.classList.remove('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

// 显示购物车页面
function showCartPage() {
    updateCartDisplay();
    switchPage(cartPage, [homePage, productsPage, detailPage, aboutPage]);
    homeLink.classList.remove('active');
    productsLink.classList.remove('active');
    cartLink.classList.add('active');
    aboutLink.classList.remove('active');
    window.scrollTo(0, 0);
}

// 显示关于我们页面
function showAboutPage() {
    switchPage(aboutPage, [homePage, productsPage, detailPage, cartPage]);
    homeLink.classList.remove('active');
    productsLink.classList.remove('active');
    cartLink.classList.remove('active');
    aboutLink.classList.add('active');
    window.scrollTo(0, 0);
}

// 动画效果
function animateElements() {
    // 为延迟加载的元素添加动画
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// 事件监听
homeLink.addEventListener('click', showHomePage);
productsLink.addEventListener('click', showProductsPage);
cartLink.addEventListener('click', showCartPage);
aboutLink.addEventListener('click', showAboutPage);
cartIcon.addEventListener('click', showCartPage);

// 用户登录/登出
userIcon.addEventListener('click', function () {
    userLogin.classList.toggle('active');
    userLoginMask.classList.toggle('active', userLogin.classList.contains('active'));
});

loginClose.addEventListener('click', function () {
    userLogin.classList.remove('active');
    userLoginMask.classList.remove('active');
});

// 点击遮罩关闭登录侧边栏
userLoginMask.addEventListener('click', function () {
    userLogin.classList.remove('active');
    userLoginMask.classList.remove('active');
});

// 详情页的加入购物车按钮
document.querySelector('.add-to-cart-large').addEventListener('click', function () {
    const productId = parseInt(this.getAttribute('data-id'));
    const quantity = parseInt(document.querySelector('.quantity-input').value) || 1;
    addToCart(productId, quantity);
});

// 详情页的收藏按钮
document.querySelector('.wishlist-btn').addEventListener('click', function () {
    this.classList.toggle('active');
    this.querySelector('i').classList.toggle('far');
    this.querySelector('i').classList.toggle('fas');
    alert(this.classList.contains('active') ? '已添加到收藏夹' : '已从收藏夹移除');
});

// 数量选择器
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function () {
        const isMinus = this.classList.contains('minus');
        const input = this.parentElement.querySelector('.quantity-input');
        let quantity = parseInt(input.value) || 1;

        if (isMinus) {
            if (quantity > 1) {
                quantity--;
                input.value = quantity;
            }
        } else {
            quantity++;
            input.value = quantity;
        }
    });
});

// 回到顶部按钮
backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 继续购物按钮
if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', function () {
        showProductsPage();
    });
}

// 结算按钮
document.querySelector('.checkout-btn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('您的购物车是空的，请先添加商品');
    } else {
        alert('正在跳转结算页面...');
        // 实际应用中这里会跳转到结算页面
    }
});

// 登录按钮
document.querySelector('.login-btn').addEventListener('click', function () {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('登录请求已发送...');
        userLogin.classList.remove('active');
    } else {
        alert('请输入邮箱和密码');
    }
});