/* =========================================================
   TECHNOVA COMPUTER SHOP
   CUSTOMER + AUTHENTICATION + CART + CHECKOUT
   + STOCK + WISHLIST + REVIEWS + FEEDBACK
   + NOTIFICATIONS + ORDER TRACKING
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const PRODUCTS_KEY = "technova_products";
const USERS_KEY = "technova_users";
const CURRENT_USER_KEY = "technova_current_user";
const ORDERS_KEY = "technova_orders";

const REVIEWS_KEY = "technova_reviews";
const FEEDBACK_KEY = "technova_feedback";
const NOTIFICATIONS_KEY = "technova_notifications";
const WISHLIST_KEY = "technova_wishlists";
const SETTINGS_KEY = "technova_settings";

const ADMIN_EMAIL = "admin@technova.com";
const ADMIN_PASSWORD = "TechNovaAdmin123";


/* =========================================================
   DEFAULT PRODUCTS
   ========================================================= */

const defaultProducts = [
    {
        id: 1,
        name: "ASUS ROG Strix G16",
        category: "laptop",
        categoryName: "Gaming Laptop",
        price: 1499,
        oldPrice: 1799,
        discount: 17,
        status: "new",
        statusText: "NEW",
        stock: 10,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "Powerful gaming laptop designed for gaming and content creation.",
        specs: {
            CPU: "Intel Core i9",
            GPU: "RTX 4070",
            RAM: "32GB DDR5",
            Storage: "1TB NVMe SSD",
            Display: "16-inch 240Hz",
            OS: "Windows 11"
        }
    },

    {
        id: 2,
        name: "MacBook Pro 14",
        category: "laptop",
        categoryName: "Professional Laptop",
        price: 1899,
        oldPrice: 2099,
        discount: 10,
        status: "new",
        statusText: "NEW",
        stock: 10,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Professional laptop with Apple's powerful M3 Pro chip.",
        specs: {
            CPU: "Apple M3 Pro",
            GPU: "Integrated GPU",
            RAM: "18GB",
            Storage: "512GB SSD",
            Display: "14.2-inch Retina",
            OS: "macOS"
        }
    },

    {
        id: 3,
        name: "Gaming PC RTX 4080",
        category: "desktop",
        categoryName: "Gaming PC",
        price: 2299,
        oldPrice: 2599,
        discount: 12,
        status: "new",
        statusText: "NEW",
        stock: 10,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "High-performance gaming desktop built for demanding games.",
        specs: {
            CPU: "Ryzen 9 7950X",
            GPU: "RTX 4080",
            RAM: "32GB DDR5",
            Storage: "2TB NVMe",
            Cooling: "Liquid Cooling",
            PSU: "850W Gold"
        }
    },

    {
        id: 4,
        name: "RTX 4070 SUPER",
        category: "component",
        categoryName: "Graphics Card",
        price: 699,
        oldPrice: 799,
        discount: 13,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Powerful graphics card for high-performance gaming.",
        specs: {
            Memory: "12GB GDDR6X",
            Interface: "PCIe 4.0",
            Clock: "2.48 GHz",
            HDMI: "HDMI 2.1",
            Ports: "3x DisplayPort",
            Cooling: "Triple Fan"
        }
    },

    {
        id: 5,
        name: "Samsung 990 PRO 2TB",
        category: "component",
        categoryName: "NVMe SSD",
        price: 169,
        oldPrice: 199,
        discount: 15,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "Ultra-fast PCIe 4.0 NVMe SSD for gaming and productivity.",
        specs: {
            Capacity: "2TB",
            Interface: "PCIe 4.0",
            Read: "7,450 MB/s",
            Write: "6,900 MB/s",
            Form: "M.2 2280",
            Warranty: "5 Years"
        }
    },

    {
        id: 6,
        name: "LG UltraGear 27GR",
        category: "monitor",
        categoryName: "Gaming Monitor",
        price: 349,
        oldPrice: 399,
        discount: 13,
        status: "new",
        statusText: "NEW",
        stock: 10,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Fast and immersive gaming monitor with high refresh rate.",
        specs: {
            Size: "27-inch",
            Resolution: "2560 x 1440",
            Refresh: "180Hz",
            Response: "1ms",
            Panel: "IPS",
            HDR: "HDR10"
        }
    },

    {
        id: 7,
        name: "Mechanical RGB Keyboard",
        category: "accessory",
        categoryName: "Gaming Keyboard",
        price: 89,
        oldPrice: 109,
        discount: 18,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
        rating: 4.6,
        description: "Mechanical gaming keyboard with customizable RGB lighting.",
        specs: {
            Type: "Mechanical",
            Keys: "87 Keys",
            Lighting: "RGB",
            Connection: "USB-C",
            Frame: "Aluminum",
            OS: "Windows"
        }
    },

    {
        id: 8,
        name: "Wireless Gaming Mouse",
        category: "accessory",
        categoryName: "Gaming Mouse",
        price: 59,
        oldPrice: 79,
        discount: 25,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
        rating: 4.5,
        description: "Lightweight wireless gaming mouse with precise tracking.",
        specs: {
            DPI: "26K DPI",
            Weight: "63g",
            Connection: "2.4GHz",
            Battery: "70 Hours",
            Buttons: "6",
            Lighting: "RGB"
        }
    },

    {
        id: 9,
        name: "AMD Ryzen 7 7800X3D",
        category: "component",
        categoryName: "Desktop CPU",
        price: 399,
        oldPrice: 449,
        discount: 11,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
        rating: 4.9,
        description: "High-performance gaming CPU with 3D V-Cache technology.",
        specs: {
            Cores: "8 Cores",
            Threads: "16 Threads",
            Speed: "5.0 GHz",
            Socket: "AM5",
            Cache: "96MB",
            TDP: "120W"
        }
    },

    {
        id: 10,
        name: "DDR5 32GB Gaming RAM",
        category: "component",
        categoryName: "Desktop Memory",
        price: 109,
        oldPrice: 139,
        discount: 22,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Fast DDR5 gaming memory for modern desktop systems.",
        specs: {
            Capacity: "32GB",
            Type: "DDR5",
            Speed: "6000MHz",
            Kit: "2 x 16GB",
            Voltage: "1.35V",
            RGB: "Yes"
        }
    },

    {
        id: 11,
        name: "Alienware Gaming Desktop",
        category: "desktop",
        categoryName: "Gaming Desktop",
        price: 2799,
        oldPrice: 3199,
        discount: 13,
        status: "sold",
        statusText: "SOLD OUT",
        stock: 0,
        image: "https://images.unsplash.com/photo-1587202372162-9c8c1b5e4f2e?auto=format&fit=crop&w=900&q=85",
        rating: 4.8,
        description: "Premium gaming desktop with extreme performance.",
        specs: {
            CPU: "Intel Core i9",
            GPU: "RTX 4090",
            RAM: "64GB DDR5",
            Storage: "2TB SSD",
            Cooling: "Liquid Cooling",
            PSU: "1000W"
        }
    },

    {
        id: 12,
        name: "UltraWide 34-inch Monitor",
        category: "monitor",
        categoryName: "Ultrawide Monitor",
        price: 499,
        oldPrice: 599,
        discount: 17,
        status: "available",
        statusText: "AVAILABLE",
        stock: 10,
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=900&q=85",
        rating: 4.7,
        description: "Immersive ultrawide monitor for gaming and productivity.",
        specs: {
            Size: "34-inch",
            Resolution: "3440 x 1440",
            Refresh: "165Hz",
            Panel: "VA",
            Response: "1ms",
            HDR: "HDR400"
        }
    }
];


/* =========================================================
   GLOBAL
   ========================================================= */

let products = [];
let cart = [];
let currentCategory = "all";
let currentSearch = "";
let currentProduct = null;
let heroSlide = 0;
let pendingBuyProductId = null;
let pendingCheckout = false;


/* =========================================================
   DOM
   ========================================================= */

const productsGrid = document.getElementById("productsGrid");
const productResultText = document.getElementById("productResultText");
const noProducts = document.getElementById("noProducts");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const sortProducts = document.getElementById("sortProducts");
const productsSection = document.getElementById("productsSection");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");


/* =========================================================
   AUTH DOM
   ========================================================= */

const accountBtn = document.getElementById("accountBtn");
const accountIcon = document.getElementById("accountIcon");
const accountText = document.getElementById("accountText");

const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");

const loginPanel = document.getElementById("loginPanel");
const registerPanel = document.getElementById("registerPanel");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const registerName = document.getElementById("registerName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerConfirmPassword =
    document.getElementById("registerConfirmPassword");


/* =========================================================
   CHECKOUT DOM
   ========================================================= */

const checkoutModal = document.getElementById("checkoutModal");
const checkoutClose = document.getElementById("checkoutClose");
const checkoutForm = document.getElementById("checkoutForm");

const checkoutName = document.getElementById("checkoutName");
const checkoutPhone = document.getElementById("checkoutPhone");
const checkoutProvince = document.getElementById("checkoutProvince");
const checkoutDistrict = document.getElementById("checkoutDistrict");
const checkoutAddress = document.getElementById("checkoutAddress");
const checkoutLandmark = document.getElementById("checkoutLandmark");

const checkoutSummary = document.getElementById("checkoutSummary");
const summaryCount = document.getElementById("summaryCount");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutGrandTotal = document.getElementById("checkoutGrandTotal");
const paymentInfo = document.getElementById("paymentInfo");


/* =========================================================
   SUCCESS DOM
   ========================================================= */

const successModal = document.getElementById("successModal");
const successOrderId = document.getElementById("successOrderId");
const successCustomer = document.getElementById("successCustomer");
const successPayment = document.getElementById("successPayment");
const successAddress = document.getElementById("successAddress");
const successTotal = document.getElementById("successTotal");
const successContinue = document.getElementById("successContinue");


/* =========================================================
   PRODUCT MODAL DOM
   ========================================================= */

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalStatus = document.getElementById("modalStatus");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalRating = document.getElementById("modalRating");
const modalPrice = document.getElementById("modalPrice");
const modalOldPrice = document.getElementById("modalOldPrice");
const modalDiscount = document.getElementById("modalDiscount");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const modalBuyBtn = document.getElementById("modalBuyBtn");
const wishlistBtn = document.getElementById("wishlistBtn");


/* =========================================================
   OTHER DOM
   ========================================================= */

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const categoryNav = document.getElementById("categoryNav");
const categoryButtons =
    document.querySelectorAll(".category-btn");

const backToTop = document.getElementById("backToTop");
const shopNowBtn = document.getElementById("shopNowBtn");
const dealBtn = document.getElementById("dealBtn");
const resetProducts = document.getElementById("resetProducts");


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function safeGet(key, fallback = []) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        const parsed = JSON.parse(value);

        return parsed ?? fallback;
    } catch {
        return fallback;
    }
}


function safeSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


function getUsers() {
    return safeGet(USERS_KEY, []);
}


function saveUsers(users) {
    safeSet(USERS_KEY, users);
}


function getOrders() {
    return safeGet(ORDERS_KEY, []);
}


function saveOrders(orders) {
    safeSet(ORDERS_KEY, orders);
}


function getReviews() {
    return safeGet(REVIEWS_KEY, []);
}


function saveReviews(reviews) {
    safeSet(REVIEWS_KEY, reviews);
}


function getFeedback() {
    return safeGet(FEEDBACK_KEY, []);
}


function saveFeedback(feedback) {
    safeSet(FEEDBACK_KEY, feedback);
}


function getNotifications() {
    return safeGet(NOTIFICATIONS_KEY, []);
}


function saveNotifications(notifications) {
    safeSet(NOTIFICATIONS_KEY, notifications);
}


function getWishlists() {
    return safeGet(WISHLIST_KEY, {});
}


function saveWishlists(wishlists) {
    safeSet(WISHLIST_KEY, wishlists);
}


function getSettings() {
    return safeGet(SETTINGS_KEY, {
        storeName: "TechNova",
        currency: "USD"
    });
}


/* =========================================================
   PRODUCTS
   ========================================================= */

function normalizeProduct(product) {
    const normalized = {
        ...product
    };

    if (typeof normalized.stock !== "number") {
        normalized.stock =
            normalized.status === "sold" ||
            String(normalized.statusText || "")
                .toLowerCase()
                .includes("sold")
                ? 0
                : 10;
    }

    normalized.stock = Math.max(
        0,
        Math.floor(Number(normalized.stock) || 0)
    );

    if (normalized.stock <= 0) {
        normalized.status = "sold";
        normalized.statusText = "OUT OF STOCK";
    } else if (normalized.status === "sold") {
        normalized.status = "available";
        normalized.statusText = "AVAILABLE";
    } else if (
        normalized.status === "new"
    ) {
        normalized.statusText = "NEW";
    } else {
        normalized.statusText = "AVAILABLE";
    }

    return normalized;
}


function normalizeProducts(list) {
    return list.map(normalizeProduct);
}


function loadProducts() {
    try {
        const saved = localStorage.getItem(PRODUCTS_KEY);

        if (saved) {
            products = normalizeProducts(
                JSON.parse(saved)
            );

            localStorage.setItem(
                PRODUCTS_KEY,
                JSON.stringify(products)
            );
        } else {
            products = normalizeProducts(
                [...defaultProducts]
            );

            localStorage.setItem(
                PRODUCTS_KEY,
                JSON.stringify(products)
            );
        }
    } catch {
        products = normalizeProducts(
            [...defaultProducts]
        );
    }
}


/* =========================================================
   PRODUCT STATUS / BADGES
   ========================================================= */

function getProductBadges(product) {
    const badges = [];

    if (Number(product.stock) <= 0) {
        badges.push({
            text: "OUT OF STOCK",
            className: "out-of-stock"
        });

        return badges;
    }

    if (
        product.status === "new" ||
        String(product.statusText || "")
            .toUpperCase() === "NEW"
    ) {
        badges.push({
            text: "NEW",
            className: "new"
        });
    }

    if (
        Number(product.discount) > 0 ||
        Number(product.oldPrice) > Number(product.price)
    ) {
        badges.push({
            text: "SALE",
            className: "sale"
        });
    }

    return badges;
}


/* =========================================================
   ADMIN
   ========================================================= */

function initializeAdmin() {
    const users = getUsers();

    const exists = users.some(
        user =>
            user.email &&
            user.email.toLowerCase() ===
                ADMIN_EMAIL.toLowerCase()
    );

    if (!exists) {
        users.push({
            id: "admin",
            name: "TechNova Admin",
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            role: "admin",
            createdAt: new Date().toISOString()
        });

        saveUsers(users);
    }
}


/* =========================================================
   CURRENT USER
   ========================================================= */

function getCurrentUser() {
    try {
        return JSON.parse(
            localStorage.getItem(
                CURRENT_USER_KEY
            )
        );
    } catch {
        return null;
    }
}


function saveCurrentUser(user) {
    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );
}


function logoutUser() {
    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    updateAccountUI();
    updateNotificationUI();

    showNotification(
        "You have been logged out."
    );
}


function updateAccountUI() {
    const user = getCurrentUser();

    if (!user) {
        accountText.textContent = "Account";
        accountIcon.className =
            "fa-solid fa-user";
        accountBtn.title =
            "Login / Register";
        return;
    }

    accountIcon.className =
        "fa-solid fa-user-check";

    if (user.role === "admin") {
        accountText.textContent = "Admin";
        accountBtn.title =
            "Open Admin Dashboard";
    } else {
        const firstName =
            user.name
                ? user.name.split(" ")[0]
                : "Account";

        accountText.textContent =
            firstName;

        accountBtn.title =
            "Account";
    }
}


/* =========================================================
   AUTH MODAL
   ========================================================= */

function openAuthModal(mode = "login") {
    authModal.classList.add("active");

    document.body.style.overflow = "hidden";

    if (mode === "register") {
        loginPanel.classList.add("hidden");
        registerPanel.classList.remove("hidden");
    } else {
        registerPanel.classList.add("hidden");
        loginPanel.classList.remove("hidden");
    }
}


function closeAuthModal() {
    authModal.classList.remove("active");

    if (
        !checkoutModal.classList.contains("active") &&
        !successModal.classList.contains("active")
    ) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   CONTINUE AFTER AUTH
   ========================================================= */

function continueAfterAuth() {
    if (pendingBuyProductId !== null) {
        const productId =
            pendingBuyProductId;

        pendingBuyProductId = null;

        const product =
            products.find(
                product =>
                    Number(product.id) ===
                    Number(productId)
            );

        if (
            product &&
            Number(product.stock) > 0
        ) {
            addToCart(
                product.id,
                true
            );

            openCheckout();
        }

        return;
    }

    if (pendingCheckout) {
        pendingCheckout = false;
        openCheckout();
    }
}


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

accountBtn.addEventListener(
    "click",
    () => {
        const user = getCurrentUser();

        if (!user) {
            openAuthModal("login");
            return;
        }

        if (user.role === "admin") {
            window.location.href =
                "admin.html";
            return;
        }

        const logout =
            confirm(
                `Logged in as ${user.name}.\n\nDo you want to logout?`
            );

        if (logout) {
            logoutUser();
        }
    }
);


/* =========================================================
   LOGIN
   ========================================================= */

loginForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const email =
            loginEmail.value
                .trim()
                .toLowerCase();

        const password =
            loginPassword.value;

        const users = getUsers();

        const user =
            users.find(
                item =>
                    item.email &&
                    item.email.toLowerCase() ===
                        email &&
                    item.password ===
                        password
            );

        if (!user) {
            showNotification(
                "Invalid email or password.",
                "error"
            );

            return;
        }

        saveCurrentUser(user);

        loginForm.reset();

        closeAuthModal();

        updateAccountUI();

        updateNotificationUI();

        if (user.role === "admin") {
            window.location.href =
                "admin.html";

            return;
        }

        showNotification(
            `Welcome back, ${user.name}!`
        );

        continueAfterAuth();
    }
);


/* =========================================================
   REGISTER
   ========================================================= */

registerForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const name =
            registerName.value.trim();

        const email =
            registerEmail.value
                .trim()
                .toLowerCase();

        const password =
            registerPassword.value;

        const confirmPassword =
            registerConfirmPassword.value;

        if (!name) {
            showNotification(
                "Please enter your full name.",
                "error"
            );

            return;
        }

        if (password.length < 6) {
            showNotification(
                "Password must be at least 6 characters.",
                "error"
            );

            return;
        }

        if (password !== confirmPassword) {
            showNotification(
                "Passwords do not match.",
                "error"
            );

            return;
        }

        const users = getUsers();

        const existing =
            users.find(
                user =>
                    user.email &&
                    user.email.toLowerCase() ===
                        email
            );

        if (existing) {
            showNotification(
                "An account with this email already exists.",
                "error"
            );

            return;
        }

        const newUser = {
            id:
                "user_" +
                Date.now(),

            name,
            email,
            password,

            role: "customer",

            createdAt:
                new Date().toISOString()
        };

        users.push(newUser);

        saveUsers(users);

        saveCurrentUser(newUser);

        registerForm.reset();

        closeAuthModal();

        updateAccountUI();

        updateNotificationUI();

        showNotification(
            `Welcome to TechNova, ${name}!`
        );

        continueAfterAuth();
    }
);


/* =========================================================
   AUTH SWITCH
   ========================================================= */

showRegister.addEventListener(
    "click",
    () => {
        loginPanel.classList.add("hidden");
        registerPanel.classList.remove("hidden");
    }
);


showLogin.addEventListener(
    "click",
    () => {
        registerPanel.classList.add("hidden");
        loginPanel.classList.remove("hidden");
    }
);


authClose.addEventListener(
    "click",
    closeAuthModal
);


authModal.addEventListener(
    "click",
    event => {
        if (event.target === authModal) {
            closeAuthModal();
        }
    }
);


/* =========================================================
   PASSWORD SHOW / HIDE
   ========================================================= */

function addPasswordToggle(input) {
    if (!input || input.dataset.passwordToggle) {
        return;
    }

    input.dataset.passwordToggle = "true";

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "technova-password-wrapper";

    input.parentNode.insertBefore(
        wrapper,
        input
    );

    wrapper.appendChild(input);

    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "technova-password-toggle";

    button.setAttribute(
        "aria-label",
        "Show password"
    );

    button.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    button.addEventListener(
        "click",
        () => {
            const isPassword =
                input.type === "password";

            input.type =
                isPassword
                    ? "text"
                    : "password";

            button.innerHTML =
                isPassword
                    ? '<i class="fa-solid fa-eye-slash"></i>'
                    : '<i class="fa-solid fa-eye"></i>';

            button.setAttribute(
                "aria-label",
                isPassword
                    ? "Hide password"
                    : "Show password"
            );
        }
    );

    wrapper.appendChild(button);
}


function initializePasswordToggles() {
    addPasswordToggle(loginPassword);
    addPasswordToggle(registerPassword);
    addPasswordToggle(registerConfirmPassword);

    injectPasswordStyles();
}


function injectPasswordStyles() {
    if (
        document.getElementById(
            "technova-password-styles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "technova-password-styles";

    style.textContent = `
        .technova-password-wrapper {
            position: relative;
            width: 100%;
        }

        .technova-password-wrapper input {
            width: 100%;
            padding-right: 48px !important;
        }

        .technova-password-toggle {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            border: 0;
            background: transparent;
            color: #6b7280;
            cursor: pointer;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
        }

        .technova-password-toggle:hover {
            color: #2563eb;
        }
    `;

    document.head.appendChild(style);
}


/* =========================================================
   BUY
   ========================================================= */

function handleBuy(productId) {
    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );

    if (!product) {
        return;
    }

    if (Number(product.stock) <= 0) {
        showNotification(
            "This product is out of stock.",
            "error"
        );

        return;
    }

    const user = getCurrentUser();

    if (!user) {
        pendingBuyProductId =
            productId;

        pendingCheckout = false;

        openAuthModal("login");

        return;
    }

    addToCart(
        productId,
        true
    );

    openCheckout();
}


/* =========================================================
   PRODUCTS DISPLAY
   ========================================================= */

function displayProducts() {
    let filtered =
        products.filter(product => {
            const categoryMatch =
                currentCategory === "all" ||
                product.category ===
                    currentCategory;

            const search =
                currentSearch
                    .trim()
                    .toLowerCase();

            const searchMatch =
                !search ||
                product.name
                    .toLowerCase()
                    .includes(search) ||
                product.categoryName
                    .toLowerCase()
                    .includes(search);

            return (
                categoryMatch &&
                searchMatch
            );
        });

    const sort =
        sortProducts.value;

    if (sort === "price-low") {
        filtered.sort(
            (a, b) =>
                a.price - b.price
        );
    }

    if (sort === "price-high") {
        filtered.sort(
            (a, b) =>
                b.price - a.price
        );
    }

    if (sort === "name") {
        filtered.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );
    }

    if (sort === "new") {
        filtered.sort(
            (a, b) =>
                b.id - a.id
        );
    }

    productsGrid.innerHTML = "";

    if (!filtered.length) {
        noProducts.style.display =
            "block";

        productResultText.textContent =
            "No products found";

        return;
    }

    noProducts.style.display =
        "none";

    productResultText.textContent =
        `Showing ${filtered.length} product${
            filtered.length === 1
                ? ""
                : "s"
        }`;

    filtered.forEach(
        product => {
            productsGrid.appendChild(
                createProductCard(product)
            );
        }
    );
}


/* =========================================================
   STAR DISPLAY
   ========================================================= */

function getStarHTML(rating) {
    const rounded =
        Math.round(
            Number(rating) || 0
        );

    return `
        <span class="technova-stars">
            ${"★".repeat(rounded)}
            <span class="technova-empty-stars">
                ${"★".repeat(
                    5 - rounded
                )}
            </span>
        </span>
    `;
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {
    const card =
        document.createElement("article");

    card.className =
        "product-card";

    const averageRating =
        getProductAverageRating(product.id);

    const badges =
        getProductBadges(product);

    const badgeHTML =
        badges
            .map(
                badge => `
                    <span class="technova-product-badge ${badge.className}">
                        ${badge.text}
                    </span>
                `
            )
            .join("");

    card.innerHTML = `
        <div class="product-image">
            <img
                src="${product.image}"
                alt="${escapeHTML(product.name)}"
            >

            <span
                class="product-status ${product.status}"
            >
                ${escapeHTML(
                    product.statusText
                )}
            </span>

            ${badgeHTML}

            ${
                product.discount
                    ? `
                        <span class="discount-badge">
                            -${product.discount}%
                        </span>
                    `
                    : ""
            }
        </div>

        <div class="product-info">
            <span class="product-category">
                ${escapeHTML(
                    product.categoryName
                )}
            </span>

            <h3>
                ${escapeHTML(product.name)}
            </h3>

            <div class="product-rating">
                ${getStarHTML(
                    averageRating
                )}

                <small>
                    ${Number(
                        averageRating
                    ).toFixed(1)}
                </small>
            </div>

            <div class="technova-stock-text">
                ${
                    Number(product.stock) > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"
                }
            </div>

            <div class="product-price">
                <strong>
                    $${product.price.toLocaleString()}
                </strong>

                ${
                    product.oldPrice
                        ? `
                            <del>
                                $${product.oldPrice.toLocaleString()}
                            </del>
                        `
                        : ""
                }
            </div>

            <button
                class="buy-btn"
                data-buy="${product.id}"
                ${
                    Number(product.stock) <= 0
                        ? "disabled"
                        : ""
                }
            >
                <i class="fa-solid fa-cart-shopping"></i>

                ${
                    Number(product.stock) <= 0
                        ? "OUT OF STOCK"
                        : "GO TO BUY"
                }
            </button>
        </div>
    `;

    card.addEventListener(
        "click",
        event => {
            const buyButton =
                event.target.closest(
                    "[data-buy]"
                );

            if (buyButton) {
                event.stopPropagation();

                if (!buyButton.disabled) {
                    handleBuy(
                        Number(
                            buyButton.dataset.buy
                        )
                    );
                }

                return;
            }

            openProductModal(
                product.id
            );
        }
    );

    return card;
}


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(productId) {
    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );

    if (!product) {
        return;
    }

    currentProduct =
        product;

    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalStatus.textContent =
        product.stock <= 0
            ? "OUT OF STOCK"
            : product.statusText;

    modalStatus.className =
        `modal-status ${
            product.stock <= 0
                ? "sold"
                : ""
        }`;

    modalCategory.textContent =
        product.categoryName;

    modalName.textContent =
        product.name;

    modalRating.textContent =
        `${getProductAverageRating(
            product.id
        ).toFixed(1)} / 5`;

    modalPrice.textContent =
        `$${product.price.toLocaleString()}`;

    if (product.oldPrice) {
        modalOldPrice.textContent =
            `$${product.oldPrice.toLocaleString()}`;

        modalOldPrice.style.display =
            "inline";
    } else {
        modalOldPrice.style.display =
            "none";
    }

    if (product.discount) {
        modalDiscount.textContent =
            `-${product.discount}%`;

        modalDiscount.style.display =
            "inline";
    } else {
        modalDiscount.style.display =
            "none";
    }

    modalDescription.textContent =
        product.description;

    modalSpecs.innerHTML = "";

    Object.entries(product.specs)
        .forEach(
            ([key, value]) => {
                const spec =
                    document.createElement(
                        "div"
                    );

                spec.className =
                    "spec-item";

                spec.innerHTML = `
                    <strong>
                        ${escapeHTML(key)}
                    </strong>

                    <span>
                        ${escapeHTML(
                            String(value)
                        )}
                    </span>
                `;

                modalSpecs.appendChild(
                    spec
                );
            }
        );

    updateModalBuyButton(product);

    updateWishlistButton(product.id);

    addProductModalExtras(product);

    productModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   MODAL BUY BUTTON
   ========================================================= */

function updateModalBuyButton(product) {
    if (Number(product.stock) <= 0) {
        modalBuyBtn.disabled = true;

        modalBuyBtn.innerHTML = `
            <i class="fa-solid fa-ban"></i>
            OUT OF STOCK
        `;

        return;
    }

    modalBuyBtn.disabled = false;

    modalBuyBtn.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        GO TO BUY
    `;
}


function closeProductModal() {
    productModal.classList.remove(
        "active"
    );

    if (
        !cartOverlay.classList.contains("active") &&
        !authModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active") &&
        !successModal.classList.contains("active")
    ) {
        document.body.style.overflow =
            "";
    }
}


modalClose.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            productModal
        ) {
            closeProductModal();
        }
    }
);


modalBuyBtn.addEventListener(
    "click",
    () => {
        if (
            currentProduct &&
            Number(currentProduct.stock) > 0
        ) {
            handleBuy(
                currentProduct.id
            );

            closeProductModal();
        }
    }
);


/* =========================================================
   STOCK-SAFE CART
   ========================================================= */

function getProductById(productId) {
    return products.find(
        product =>
            Number(product.id) ===
            Number(productId)
    );
}


function refreshCartProducts() {
    cart = cart
        .map(item => {
            const product =
                getProductById(
                    item.product.id
                );

            if (!product) {
                return null;
            }

            if (product.stock <= 0) {
                return null;
            }

            return {
                product,
                quantity: Math.min(
                    item.quantity,
                    product.stock
                )
            };
        })
        .filter(Boolean);
}


function addToCart(
    productId,
    silent = false
) {
    const product =
        getProductById(
            productId
        );

    if (!product) {
        return;
    }

    if (Number(product.stock) <= 0) {
        showNotification(
            "This product is out of stock.",
            "error"
        );

        return;
    }

    const existing =
        cart.find(
            item =>
                Number(
                    item.product.id
                ) ===
                Number(productId)
        );

    if (existing) {
        if (
            existing.quantity >=
            product.stock
        ) {
            showNotification(
                `Only ${product.stock} unit${
                    product.stock === 1
                        ? ""
                        : "s"
                } available.`,
                "error"
            );

            updateCart();

            return;
        }

        existing.quantity++;
    } else {
        cart.push({
            product,
            quantity: 1
        });
    }

    updateCart();

    if (!silent) {
        showNotification(
            `${product.name} added to cart.`
        );
    }
}


function removeFromCart(productId) {
    cart =
        cart.filter(
            item =>
                Number(
                    item.product.id
                ) !==
                Number(productId)
        );

    updateCart();
}


function changeQuantity(
    productId,
    change
) {
    const item =
        cart.find(
            cartItem =>
                Number(
                    cartItem.product.id
                ) ===
                Number(productId)
        );

    if (!item) {
        return;
    }

    const product =
        getProductById(
            productId
        );

    if (!product) {
        removeFromCart(productId);
        return;
    }

    const newQuantity =
        item.quantity + change;

    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    if (
        newQuantity >
        Number(product.stock)
    ) {
        showNotification(
            `Only ${product.stock} unit${
                product.stock === 1
                    ? ""
                    : "s"
            } available.`,
            "error"
        );

        item.quantity =
            Number(product.stock);

        updateCart();

        return;
    }

    item.quantity =
        newQuantity;

    updateCart();
}


function getCartTotal() {
    return cart.reduce(
        (total, item) =>
            total +
            item.product.price *
                item.quantity,
        0
    );
}


function getCartCount() {
    return cart.reduce(
        (count, item) =>
            count +
            item.quantity,
        0
    );
}


/* =========================================================
   CART UI
   ========================================================= */

function updateCart() {
    refreshCartProducts();

    cartItems.innerHTML = "";

    cart.forEach(
        item => {
            const subtotal =
                item.product.price *
                item.quantity;

            const cartItem =
                document.createElement(
                    "div"
                );

            cartItem.className =
                "cart-item";

            const maxReached =
                item.quantity >=
                Number(
                    item.product.stock
                );

            cartItem.innerHTML = `
                <img
                    src="${item.product.image}"
                    alt="${escapeHTML(
                        item.product.name
                    )}"
                >

                <div class="cart-item-info">
                    <h4>
                        ${escapeHTML(
                            item.product.name
                        )}
                    </h4>

                    <strong>
                        $${subtotal.toLocaleString()}
                    </strong>

                    <small class="technova-cart-stock">
                        ${item.product.stock} in stock
                    </small>

                    <div class="cart-quantity">
                        <button
                            data-minus="${item.product.id}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-plus="${item.product.id}"
                            ${
                                maxReached
                                    ? "disabled"
                                    : ""
                            }
                        >
                            +
                        </button>
                    </div>
                </div>

                <button
                    class="cart-remove"
                    data-remove="${item.product.id}"
                    title="Remove"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

            cartItems.appendChild(
                cartItem
            );
        }
    );

    const count =
        getCartCount();

    const total =
        getCartTotal();

    cartCount.textContent =
        count;

    cartTotal.textContent =
        `$${total.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;

    if (!cart.length) {
        cartEmpty.style.display =
            "flex";
    } else {
        cartEmpty.style.display =
            "none";
    }
}


cartItems.addEventListener(
    "click",
    event => {
        const minus =
            event.target.closest(
                "[data-minus]"
            );

        const plus =
            event.target.closest(
                "[data-plus]"
            );

        const remove =
            event.target.closest(
                "[data-remove]"
            );

        if (minus) {
            changeQuantity(
                Number(
                    minus.dataset.minus
                ),
                -1
            );
        }

        if (plus) {
            changeQuantity(
                Number(
                    plus.dataset.plus
                ),
                1
            );
        }

        if (remove) {
            removeFromCart(
                Number(
                    remove.dataset.remove
                )
            );
        }
    }
);


/* =========================================================
   CART OPEN / CLOSE
   ========================================================= */

function openCart() {
    updateCart();

    cartOverlay.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


function closeCartSidebar() {
    cartOverlay.classList.remove(
        "active"
    );

    if (
        !authModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active") &&
        !successModal.classList.contains("active")
    ) {
        document.body.style.overflow =
            "";
    }
}


cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


cartOverlay.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            cartOverlay
        ) {
            closeCartSidebar();
        }
    }
);


/* =========================================================
   CHECKOUT START
   ========================================================= */

function startCheckout() {
    if (!cart.length) {
        showNotification(
            "Your cart is empty.",
            "error"
        );

        return;
    }

    refreshCartProducts();

    const user =
        getCurrentUser();

    if (!user) {
        pendingCheckout = true;
        pendingBuyProductId = null;

        closeCartSidebar();

        openAuthModal("login");

        return;
    }

    openCheckout();
}


function openCheckout() {
    refreshCartProducts();

    if (!cart.length) {
        showNotification(
            "Your cart is empty.",
            "error"
        );

        return;
    }

    const user =
        getCurrentUser();

    if (!user) {
        pendingCheckout = true;

        openAuthModal("login");

        return;
    }

    checkoutName.value =
        user.name || "";

    renderCheckoutSummary();

    closeCartSidebar();

    closeProductModal();

    checkoutModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


function closeCheckout() {
    checkoutModal.classList.remove(
        "active"
    );

    if (
        !successModal.classList.contains(
            "active"
        )
    ) {
        document.body.style.overflow =
            "";
    }
}


checkoutBtn.addEventListener(
    "click",
    startCheckout
);


checkoutClose.addEventListener(
    "click",
    closeCheckout
);


checkoutModal.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            checkoutModal
        ) {
            closeCheckout();
        }
    }
);


/* =========================================================
   CHECKOUT SUMMARY
   ========================================================= */

function renderCheckoutSummary() {
    checkoutSummary.innerHTML = "";

    let itemCount = 0;

    cart.forEach(
        item => {
            itemCount +=
                item.quantity;

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "summary-item";

            const subtotal =
                item.product.price *
                item.quantity;

            row.innerHTML = `
                <div>
                    <strong>
                        ${escapeHTML(
                            item.product.name
                        )}
                    </strong>

                    <span>
                        Qty: ${item.quantity}
                    </span>
                </div>

                <strong>
                    $${subtotal.toLocaleString()}
                </strong>
            `;

            checkoutSummary.appendChild(
                row
            );
        }
    );

    const total =
        getCartTotal();

    summaryCount.textContent =
        `${itemCount} item${
            itemCount === 1
                ? ""
                : "s"
        }`;

    checkoutSubtotal.textContent =
        `$${total.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;

    checkoutGrandTotal.textContent =
        `$${total.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;
}


/* =========================================================
   PAYMENT METHOD
   ========================================================= */

document
    .querySelectorAll(
        'input[name="paymentMethod"]'
    )
    .forEach(
        radio => {
            radio.addEventListener(
                "change",
                () => {
                    if (
                        radio.checked &&
                        radio.value ===
                            "Cash on Delivery"
                    ) {
                        paymentInfo.innerHTML = `
                            <i class="fa-solid fa-circle-info"></i>

                            <span>
                                Pay when your order arrives.
                                No online payment details are required.
                            </span>
                        `;
                    } else if (
                        radio.checked
                    ) {
                        paymentInfo.innerHTML = `
                            <i class="fa-solid fa-qrcode"></i>

                            <span>
                                Demo payment selected.
                                Your order will be saved with
                                <b>Payment Pending</b>.
                            </span>
                        `;
                    }
                }
            );
        }
    );


/* =========================================================
   STOCK VALIDATION BEFORE ORDER
   ========================================================= */

function validateCartStock() {
    loadProducts();

    const problems = [];

    cart.forEach(
        item => {
            const product =
                getProductById(
                    item.product.id
                );

            if (!product) {
                problems.push(
                    `${item.product.name} is no longer available.`
                );

                return;
            }

            if (
                Number(product.stock) <= 0
            ) {
                problems.push(
                    `${product.name} is out of stock.`
                );

                return;
            }

            if (
                item.quantity >
                Number(product.stock)
            ) {
                problems.push(
                    `${product.name}: only ${product.stock} available.`
                );
            }
        }
    );

    return problems;
}


/* =========================================================
   DEDUCT STOCK
   ========================================================= */

function deductCartStock() {
    const updatedProducts =
        normalizeProducts(
            [...products]
        );

    for (const item of cart) {
        const product =
            updatedProducts.find(
                p =>
                    Number(p.id) ===
                    Number(
                        item.product.id
                    )
            );

        if (!product) {
            return false;
        }

        product.stock =
            Math.max(
                0,
                Number(product.stock) -
                    Number(item.quantity)
            );

        if (product.stock <= 0) {
            product.stock = 0;
            product.status = "sold";
            product.statusText =
                "OUT OF STOCK";
        } else if (
            product.status === "sold"
        ) {
            product.status = "available";
            product.statusText =
                "AVAILABLE";
        }
    }

    products =
        updatedProducts;

    localStorage.setItem(
        PRODUCTS_KEY,
        JSON.stringify(products)
    );

    return true;
}


/* =========================================================
   CONFIRM ORDER
   ========================================================= */

checkoutForm.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        if (!cart.length) {
            closeCheckout();

            showNotification(
                "Your cart is empty.",
                "error"
            );

            return;
        }

        const user =
            getCurrentUser();

        if (!user) {
            closeCheckout();

            pendingCheckout = true;

            openAuthModal("login");

            return;
        }

        const phone =
            checkoutPhone.value.trim();

        if (
            !/^[0-9+()\-\s]{8,20}$/.test(
                phone
            )
        ) {
            showNotification(
                "Please enter a valid phone number.",
                "error"
            );

            checkoutPhone.focus();

            return;
        }

        if (!checkoutProvince.value) {
            showNotification(
                "Please select your province.",
                "error"
            );

            checkoutProvince.focus();

            return;
        }

        const stockProblems =
            validateCartStock();

        if (stockProblems.length) {
            showNotification(
                stockProblems[0],
                "error"
            );

            refreshCartProducts();
            updateCart();
            renderCheckoutSummary();

            return;
        }

        const paymentMethod =
            document.querySelector(
                'input[name="paymentMethod"]:checked'
            )?.value ||
            "Cash on Delivery";

        const total =
            getCartTotal();

        const order = {
            id:
                "ORD-" +
                Date.now(),

            userId:
                user.id,

            customerName:
                checkoutName.value.trim(),

            customerEmail:
                user.email,

            phone,

            shipping: {
                province:
                    checkoutProvince.value,

                district:
                    checkoutDistrict.value.trim(),

                address:
                    checkoutAddress.value.trim(),

                landmark:
                    checkoutLandmark.value.trim()
            },

            paymentMethod,

            paymentStatus:
                "Pending",

            items:
                cart.map(
                    item => ({
                        productId:
                            item.product.id,

                        name:
                            item.product.name,

                        price:
                            item.product.price,

                        quantity:
                            item.quantity,

                        image:
                            item.product.image
                    })
                ),

            subtotal:
                total,

            deliveryFee:
                0,

            total,

            status:
                "Pending",

            createdAt:
                new Date().toISOString()
        };


        /* ---------------------------------------------
           DEDUCT STOCK BEFORE SAVING ORDER
           --------------------------------------------- */

        const stockDeducted =
            deductCartStock();

        if (!stockDeducted) {
            showNotification(
                "Unable to update product stock. Please try again.",
                "error"
            );

            loadProducts();

            return;
        }


        /* ---------------------------------------------
           SAVE ORDER
           --------------------------------------------- */

        const orders =
            getOrders();

        orders.unshift(
            order
        );

        saveOrders(
            orders
        );


        /* ---------------------------------------------
           CUSTOMER NOTIFICATION
           --------------------------------------------- */

        createNotification({
            userId:
                user.id,

            orderId:
                order.id,

            type:
                "order_status",

            title:
                "Order placed",

            message:
                `Your order #${order.id} has been placed successfully.`
        });


        /* ---------------------------------------------
           RESET CART
           --------------------------------------------- */

        cart = [];

        updateCart();

        displayProducts();

        checkoutForm.reset();

        checkoutName.value =
            user.name || "";


        const cod =
            document.querySelector(
                'input[name="paymentMethod"][value="Cash on Delivery"]'
            );

        if (cod) {
            cod.checked = true;
        }

        paymentInfo.innerHTML = `
            <i class="fa-solid fa-circle-info"></i>

            <span>
                Pay when your order arrives.
                No online payment details are required.
            </span>
        `;

        closeCheckout();

        showSuccess(
            order
        );
    }
);


/* =========================================================
   SUCCESS
   ========================================================= */

function showSuccess(order) {
    successOrderId.textContent =
        order.id;

    successCustomer.textContent =
        order.customerName;

    successPayment.textContent =
        order.paymentMethod;

    successTotal.textContent =
        `$${order.total.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;

    const addressParts = [
        order.shipping.address,
        order.shipping.district,
        order.shipping.province
    ].filter(Boolean);

    successAddress.textContent =
        addressParts.join(", ");

    successModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


successContinue.addEventListener(
    "click",
    () => {
        successModal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
);


successModal.addEventListener(
    "click",
    event => {
        if (
            event.target ===
            successModal
        ) {
            successModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "";
        }
    }
);


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    () => {
        currentSearch =
            searchInput.value;

        clearSearch.style.display =
            currentSearch.trim()
                ? "block"
                : "none";

        displayProducts();
    }
);


clearSearch.addEventListener(
    "click",
    () => {
        searchInput.value =
            "";

        currentSearch =
            "";

        clearSearch.style.display =
            "none";

        displayProducts();

        searchInput.focus();
    }
);


/* =========================================================
   CATEGORIES
   ========================================================= */

categoryButtons.forEach(
    button => {
        button.addEventListener(
            "click",
            () => {
                categoryButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );

                currentCategory =
                    button.dataset.category;

                displayProducts();

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

                categoryNav.classList.remove(
                    "mobile-open"
                );

                const icon =
                    mobileMenuBtn.querySelector(
                        "i"
                    );

                icon.className =
                    "fa-solid fa-bars";
            }
        );
    }
);


/* =========================================================
   SORT
   ========================================================= */

sortProducts.addEventListener(
    "change",
    displayProducts
);


/* =========================================================
   RESET
   ========================================================= */

resetProducts.addEventListener(
    "click",
    () => {
        currentCategory =
            "all";

        currentSearch =
            "";

        searchInput.value =
            "";

        clearSearch.style.display =
            "none";

        sortProducts.value =
            "default";

        categoryButtons.forEach(
            button => {
                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                        "all"
                );
            }
        );

        displayProducts();
    }
);


/* =========================================================
   HERO BUTTONS
   ========================================================= */

shopNowBtn.addEventListener(
    "click",
    () => {
        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
);


dealBtn.addEventListener(
    "click",
    () => {
        currentCategory =
            "all";

        currentSearch =
            "";

        searchInput.value =
            "";

        sortProducts.value =
            "price-low";

        categoryButtons.forEach(
            button => {
                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                        "all"
                );
            }
        );

        displayProducts();

        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
);


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {
    const dark =
        localStorage.getItem(
            "technova_theme"
        ) === "dark" ||
        localStorage.getItem(
            "theme"
        ) === "dark";

    document.body.classList.toggle(
        "dark",
        dark
    );

    themeIcon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
}


themeBtn.addEventListener(
    "click",
    () => {
        const dark =
            !document.body.classList.contains(
                "dark"
            );

        document.body.classList.toggle(
            "dark",
            dark
        );

        localStorage.setItem(
            "technova_theme",
            dark
                ? "dark"
                : "light"
        );

        localStorage.setItem(
            "theme",
            dark
                ? "dark"
                : "light"
        );

        themeIcon.className =
            dark
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";
    }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    () => {
        categoryNav.classList.toggle(
            "mobile-open"
        );

        const open =
            categoryNav.classList.contains(
                "mobile-open"
            );

        mobileMenuBtn.querySelector(
            "i"
        ).className =
            open
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
    }
);


/* =========================================================
   WISHLIST
   ========================================================= */

function getUserWishlist() {
    const user =
        getCurrentUser();

    if (!user) {
        return [];
    }

    const wishlists =
        getWishlists();

    return Array.isArray(
        wishlists[user.id]
    )
        ? wishlists[user.id]
        : [];
}


function isWishlisted(productId) {
    return getUserWishlist().some(
        id =>
            Number(id) ===
            Number(productId)
    );
}


function updateWishlistButton(productId) {
    if (!wishlistBtn) {
        return;
    }

    const icon =
        wishlistBtn.querySelector(
            "i"
        );

    const liked =
        isWishlisted(productId);

    wishlistBtn.classList.toggle(
        "liked",
        liked
    );

    if (icon) {
        icon.className =
            liked
                ? "fa-solid fa-heart"
                : "fa-regular fa-heart";
    }
}


wishlistBtn.addEventListener(
    "click",
    () => {
        if (!currentProduct) {
            return;
        }

        const user =
            getCurrentUser();

        if (!user) {
            showNotification(
                "Please login to use your wishlist.",
                "error"
            );

            openAuthModal("login");

            return;
        }

        const wishlists =
            getWishlists();

        if (!Array.isArray(
            wishlists[user.id]
        )) {
            wishlists[user.id] = [];
        }

        const productId =
            currentProduct.id;

        const index =
            wishlists[user.id].findIndex(
                id =>
                    Number(id) ===
                    Number(productId)
            );

        if (index >= 0) {
            wishlists[user.id].splice(
                index,
                1
            );

            showNotification(
                "Removed from wishlist."
            );
        } else {
            wishlists[user.id].push(
                productId
            );

            showNotification(
                "Added to wishlist."
            );
        }

        saveWishlists(
            wishlists
        );

        updateWishlistButton(
            productId
        );
    }
);


/* =========================================================
   REVIEWS
   ========================================================= */

function getProductReviews(productId) {
    return getReviews().filter(
        review =>
            Number(review.productId) ===
            Number(productId)
    );
}


function getApprovedReviews(productId) {
    return getProductReviews(
        productId
    ).filter(
        review =>
            review.approved === true ||
            review.status === "approved"
    );
}


function getProductAverageRating(productId) {
    const product =
        getProductById(
            productId
        );

    const reviews =
        getApprovedReviews(
            productId
        );

    if (!reviews.length) {
        return Number(
            product?.rating || 0
        );
    }

    const total =
        reviews.reduce(
            (sum, review) =>
                sum +
                Number(
                    review.rating
                ),
            0
        );

    return total / reviews.length;
}


function addProductModalExtras(product) {
    const existing =
        document.getElementById(
            "technovaProductExtras"
        );

    if (existing) {
        existing.remove();
    }

    const extras =
        document.createElement(
            "div"
        );

    extras.id =
        "technovaProductExtras";

    extras.innerHTML = `
        <div class="technova-stock-panel">
            <i class="fa-solid fa-box"></i>

            <strong>
                ${
                    product.stock > 0
                        ? `${product.stock} units available`
                        : "Out of stock"
                }
            </strong>
        </div>

        <div class="technova-review-section">
            <div class="technova-review-heading">
                <h3>
                    Customer Reviews
                </h3>

                <span>
                    ${getProductAverageRating(
                        product.id
                    ).toFixed(1)} / 5
                </span>
            </div>

            <div
                id="technovaReviewsList"
                class="technova-reviews-list"
            ></div>

            <div
                id="technovaReviewFormArea"
                class="technova-review-form-area"
            ></div>
        </div>
    `;

    const modalContent =
        productModal.querySelector(
            ".modal-content"
        ) ||
        productModal.querySelector(
            ".product-modal-content"
        );

    if (modalContent) {
        modalContent.appendChild(
            extras
        );
    } else {
        productModal.appendChild(
            extras
        );
    }

    renderProductReviews(
        product.id
    );

    injectFeatureStyles();
}


function renderProductReviews(productId) {
    const list =
        document.getElementById(
            "technovaReviewsList"
        );

    const formArea =
        document.getElementById(
            "technovaReviewFormArea"
        );

    if (!list || !formArea) {
        return;
    }

    const reviews =
        getApprovedReviews(
            productId
        );

    if (!reviews.length) {
        list.innerHTML = `
            <div class="technova-no-reviews">
                <i class="fa-regular fa-comment"></i>
                <span>
                    No approved reviews yet.
                </span>
            </div>
        `;
    } else {
        list.innerHTML =
            reviews
                .sort(
                    (a, b) =>
                        new Date(
                            b.createdAt
                        ) -
                        new Date(
                            a.createdAt
                        )
                )
                .map(
                    review => `
                        <div class="technova-review">
                            <div class="technova-review-top">
                                <strong>
                                    ${escapeHTML(
                                        review.userName
                                    )}
                                </strong>

                                <span>
                                    ${getStarHTML(
                                        review.rating
                                    )}
                                </span>
                            </div>

                            <p>
                                ${escapeHTML(
                                    review.text
                                )}
                            </p>

                            <small>
                                ${formatDate(
                                    review.createdAt
                                )}
                            </small>
                        </div>
                    `
                )
                .join("");
    }

    const user =
        getCurrentUser();

    if (!user) {
        formArea.innerHTML = `
            <button
                type="button"
                class="technova-review-login-btn"
                id="technovaReviewLoginBtn"
            >
                <i class="fa-solid fa-right-to-bracket"></i>
                Login to write a review
            </button>
        `;

        document
            .getElementById(
                "technovaReviewLoginBtn"
            )
            ?.addEventListener(
                "click",
                () => {
                    openAuthModal(
                        "login"
                    );
                }
            );

        return;
    }

    const reviewsAll =
        getProductReviews(
            productId
        );

    const existing =
        reviewsAll.find(
            review =>
                String(
                    review.userId
                ) ===
                String(user.id)
        );

    formArea.innerHTML = `
        <div class="technova-review-form">
            <h4>
                ${
                    existing
                        ? "Update your review"
                        : "Write a review"
                }
            </h4>

            <div
                class="technova-rating-input"
                id="technovaRatingInput"
            >
                ${[1, 2, 3, 4, 5]
                    .map(
                        number => `
                            <button
                                type="button"
                                data-rating="${number}"
                                class="${
                                    existing &&
                                    Number(
                                        existing.rating
                                    ) === number
                                        ? "active"
                                        : ""
                                }"
                            >
                                ★
                            </button>
                        `
                    )
                    .join("")}
            </div>

            <textarea
                id="technovaReviewText"
                rows="4"
                maxlength="500"
                placeholder="Write your review..."
            >${
                existing
                    ? escapeHTML(
                          existing.text
                      )
                    : ""
            }</textarea>

            <button
                type="button"
                id="technovaSubmitReview"
                class="technova-submit-review"
            >
                ${
                    existing
                        ? "Update Review"
                        : "Submit Review"
                }
            </button>

            <small class="technova-review-note">
                Your review will appear after admin approval.
            </small>
        </div>
    `;

    let selectedRating =
        existing
            ? Number(existing.rating)
            : 0;

    document
        .querySelectorAll(
            "#technovaRatingInput button"
        )
        .forEach(
            button => {
                button.addEventListener(
                    "click",
                    () => {
                        selectedRating =
                            Number(
                                button.dataset.rating
                            );

                        document
                            .querySelectorAll(
                                "#technovaRatingInput button"
                            )
                            .forEach(
                                btn =>
                                    btn.classList.toggle(
                                        "active",
                                        Number(
                                            btn.dataset.rating
                                        ) <=
                                            selectedRating
                                    )
                            );
                    }
                );
            }
        );

    document
        .getElementById(
            "technovaSubmitReview"
        )
        ?.addEventListener(
            "click",
            () => {
                submitReview(
                    productId,
                    selectedRating
                );
            }
        );
}


function submitReview(
    productId,
    rating
) {
    const user =
        getCurrentUser();

    if (!user) {
        openAuthModal("login");
        return;
    }

    if (
        !rating ||
        rating < 1 ||
        rating > 5
    ) {
        showNotification(
            "Please select a rating.",
            "error"
        );

        return;
    }

    const text =
        document
            .getElementById(
                "technovaReviewText"
            )
            ?.value.trim();

    if (!text) {
        showNotification(
            "Please write a review.",
            "error"
        );

        return;
    }

    const reviews =
        getReviews();

    const existingIndex =
        reviews.findIndex(
            review =>
                Number(
                    review.productId
                ) ===
                    Number(productId) &&
                String(
                    review.userId
                ) ===
                    String(user.id)
        );

    const review = {
        id:
            existingIndex >= 0
                ? reviews[
                      existingIndex
                  ].id
                : "REV-" + Date.now(),

        productId:
            Number(productId),

        userId:
            user.id,

        userName:
            user.name,

        rating:
            Number(rating),

        text,

        approved:
            false,

        status:
            "pending",

        createdAt:
            new Date().toISOString()
    };

    if (existingIndex >= 0) {
        reviews[
            existingIndex
        ] = review;
    } else {
        reviews.unshift(
            review
        );
    }

    saveReviews(
        reviews
    );

    showNotification(
        "Your review was submitted for approval."
    );

    renderProductReviews(
        productId
    );
}


/* =========================================================
   FEEDBACK
   ========================================================= */

function openFeedbackPanel() {
    const existing =
        document.getElementById(
            "technovaFeedbackModal"
        );

    if (existing) {
        existing.classList.add(
            "active"
        );

        return;
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "technovaFeedbackModal";

    modal.className =
        "technova-feature-modal";

    modal.innerHTML = `
        <div class="technova-feature-modal-box">
            <button
                type="button"
                class="technova-feature-close"
                id="technovaFeedbackClose"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

            <h2>
                Website Feedback
            </h2>

            <p>
                Tell us what you think about TechNova.
            </p>

            <div class="technova-feedback-rating">
                <label>
                    Rating
                </label>

                <select id="technovaFeedbackRating">
                    <option value="5">
                        5 - Excellent
                    </option>
                    <option value="4">
                        4 - Good
                    </option>
                    <option value="3">
                        3 - Average
                    </option>
                    <option value="2">
                        2 - Poor
                    </option>
                    <option value="1">
                        1 - Very Poor
                    </option>
                </select>
            </div>

            <textarea
                id="technovaFeedbackMessage"
                rows="6"
                maxlength="1000"
                placeholder="Write your feedback..."
            ></textarea>

            <button
                type="button"
                id="technovaSubmitFeedback"
                class="technova-feedback-submit"
            >
                Send Feedback
            </button>
        </div>
    `;

    document.body.appendChild(
        modal
    );

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

    document
        .getElementById(
            "technovaFeedbackClose"
        )
        .addEventListener(
            "click",
            closeFeedbackPanel
        );

    modal.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                modal
            ) {
                closeFeedbackPanel();
            }
        }
    );

    document
        .getElementById(
            "technovaSubmitFeedback"
        )
        .addEventListener(
            "click",
            submitFeedback
        );
}


function closeFeedbackPanel() {
    const modal =
        document.getElementById(
            "technovaFeedbackModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "active"
    );

    if (
        !productModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active") &&
        !successModal.classList.contains("active") &&
        !cartOverlay.classList.contains("active") &&
        !authModal.classList.contains("active")
    ) {
        document.body.style.overflow =
            "";
    }
}


function submitFeedback() {
    const user =
        getCurrentUser();

    if (!user) {
        showNotification(
            "Please login to send feedback.",
            "error"
        );

        closeFeedbackPanel();

        openAuthModal("login");

        return;
    }

    const rating =
        Number(
            document.getElementById(
                "technovaFeedbackRating"
            ).value
        );

    const message =
        document
            .getElementById(
                "technovaFeedbackMessage"
            )
            .value.trim();

    if (!message) {
        showNotification(
            "Please write your feedback.",
            "error"
        );

        return;
    }

    const feedback =
        getFeedback();

    feedback.unshift({
        id:
            "FDB-" +
            Date.now(),

        userId:
            user.id,

        name:
            user.name,

        email:
            user.email,

        rating,

        message,

        status:
            "new",

        createdAt:
            new Date().toISOString()
    });

    saveFeedback(
        feedback
    );

    closeFeedbackPanel();

    showNotification(
        "Thank you! Your feedback has been sent."
    );
}


/* =========================================================
   CUSTOMER NOTIFICATIONS
   ========================================================= */

function createNotification(data) {
    const notifications =
        getNotifications();

    notifications.unshift({
        id:
            "NOT-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(36)
                .slice(2, 8),

        userId:
            data.userId,

        orderId:
            data.orderId || null,

        type:
            data.type || "general",

        title:
            data.title,

        message:
            data.message,

        status:
            data.status || "Pending",

        read:
            false,

        createdAt:
            new Date().toISOString()
    });

    saveNotifications(
        notifications
    );

    updateNotificationUI();
}


function getUserNotifications() {
    const user =
        getCurrentUser();

    if (!user) {
        return [];
    }

    return getNotifications().filter(
        notification =>
            String(
                notification.userId
            ) ===
            String(user.id)
    );
}


function getUnreadNotificationCount() {
    return getUserNotifications()
        .filter(
            notification =>
                !notification.read
        ).length;
}


function markNotificationRead(
    notificationId
) {
    const notifications =
        getNotifications();

    const notification =
        notifications.find(
            item =>
                item.id ===
                notificationId
        );

    if (notification) {
        notification.read = true;
    }

    saveNotifications(
        notifications
    );

    updateNotificationUI();
}


function markAllNotificationsRead() {
    const user =
        getCurrentUser();

    if (!user) {
        return;
    }

    const notifications =
        getNotifications();

    notifications.forEach(
        notification => {
            if (
                String(
                    notification.userId
                ) ===
                String(user.id)
            ) {
                notification.read = true;
            }
        }
    );

    saveNotifications(
        notifications
    );

    updateNotificationUI();

    showNotification(
        "All notifications marked as read."
    );
}


/* =========================================================
   NOTIFICATION UI
   ========================================================= */

function createNotificationUI() {
    if (
        document.getElementById(
            "technovaNotificationButton"
        )
    ) {
        return;
    }

    const nav =
        document.querySelector(
            ".navbar-actions"
        ) ||
        document.querySelector(
            ".nav-actions"
        ) ||
        cartBtn?.parentElement;

    if (!nav) {
        return;
    }

    const wrapper =
        document.createElement(
            "div"
        );

    wrapper.className =
        "technova-notification-wrapper";

    wrapper.innerHTML = `
        <button
            type="button"
            id="technovaNotificationButton"
            class="technova-notification-button"
            title="Notifications"
        >
            <i class="fa-regular fa-bell"></i>

            <span
                id="technovaNotificationCount"
                class="technova-notification-count"
            >
                0
            </span>
        </button>

        <div
            id="technovaNotificationPanel"
            class="technova-notification-panel"
        >
            <div class="technova-notification-header">
                <div>
                    <h3>
                        Notifications
                    </h3>

                    <small>
                        Order updates and account activity
                    </small>
                </div>

                <button
                    type="button"
                    id="technovaMarkAllRead"
                >
                    Mark all read
                </button>
            </div>

            <div
                id="technovaNotificationList"
                class="technova-notification-list"
            ></div>
        </div>
    `;

    nav.insertBefore(
        wrapper,
        cartBtn
    );

    document
        .getElementById(
            "technovaNotificationButton"
        )
        .addEventListener(
            "click",
            toggleNotificationPanel
        );

    document
        .getElementById(
            "technovaMarkAllRead"
        )
        .addEventListener(
            "click",
            markAllNotificationsRead
        );

    document.addEventListener(
        "click",
        event => {
            const panel =
                document.getElementById(
                    "technovaNotificationPanel"
                );

            if (
                !panel ||
                !wrapper.contains(
                    event.target
                )
            ) {
                panel?.classList.remove(
                    "active"
                );
            }
        }
    );

    renderNotifications();
}


function toggleNotificationPanel(
    event
) {
    event.stopPropagation();

    const panel =
        document.getElementById(
            "technovaNotificationPanel"
        );

    if (!panel) {
        return;
    }

    panel.classList.toggle(
        "active"
    );

    renderNotifications();
}


function renderNotifications() {
    const list =
        document.getElementById(
            "technovaNotificationList"
        );

    if (!list) {
        return;
    }

    const notifications =
        getUserNotifications();

    if (!notifications.length) {
        list.innerHTML = `
            <div class="technova-empty-notifications">
                <i class="fa-regular fa-bell-slash"></i>

                <p>
                    No notifications yet.
                </p>
            </div>
        `;

        return;
    }

    list.innerHTML =
        notifications
            .slice(0, 30)
            .map(
                notification => `
                    <button
                        type="button"
                        class="technova-notification-item ${
                            notification.read
                                ? "read"
                                : "unread"
                        }"
                        data-notification-id="${
                            notification.id
                        }"
                    >
                        <span class="technova-notification-icon">
                            <i class="fa-solid fa-box"></i>
                        </span>

                        <span class="technova-notification-content">
                            <strong>
                                ${escapeHTML(
                                    notification.title
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    notification.message
                                )}
                            </span>

                            <small>
                                ${formatDate(
                                    notification.createdAt
                                )}
                            </small>
                        </span>

                        ${
                            notification.read
                                ? ""
                                : `
                                    <span class="technova-unread-dot"></span>
                                `
                        }
                    </button>
                `
            )
            .join("");

    list.querySelectorAll(
        "[data-notification-id]"
    ).forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    markNotificationRead(
                        button.dataset
                            .notificationId
                    );
                }
            );
        }
    );
}


function updateNotificationUI() {
    const count =
        document.getElementById(
            "technovaNotificationCount"
        );

    if (count) {
        const unread =
            getUnreadNotificationCount();

        count.textContent =
            unread > 99
                ? "99+"
                : unread;

        count.style.display =
            unread
                ? "flex"
                : "none";
    }

    renderNotifications();
}


/* =========================================================
   CUSTOMER ORDER TRACKING
   ========================================================= */

function getCustomerOrders() {
    const user =
        getCurrentUser();

    if (!user) {
        return [];
    }

    return getOrders().filter(
        order =>
            String(
                order.userId
            ) ===
            String(user.id)
    );
}


function getStatusSteps() {
    return [
        "Pending",
        "Confirmed",
        "Processing",
        "Out for Delivery",
        "Delivered"
    ];
}


function getOrderStatusIndex(status) {
    const steps =
        getStatusSteps();

    return steps.indexOf(
        status
    );
}


function openOrdersPanel() {
    const existing =
        document.getElementById(
            "technovaOrdersModal"
        );

    if (existing) {
        existing.classList.add(
            "active"
        );

        renderCustomerOrders();

        return;
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "technovaOrdersModal";

    modal.className =
        "technova-feature-modal";

    modal.innerHTML = `
        <div class="technova-feature-modal-box technova-orders-box">
            <button
                type="button"
                class="technova-feature-close"
                id="technovaOrdersClose"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

            <h2>
                My Orders
            </h2>

            <p>
                Track your TechNova orders.
            </p>

            <div
                id="technovaCustomerOrders"
                class="technova-customer-orders"
            ></div>
        </div>
    `;

    document.body.appendChild(
        modal
    );

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

    document
        .getElementById(
            "technovaOrdersClose"
        )
        .addEventListener(
            "click",
            () => {
                modal.classList.remove(
                    "active"
                );

                document.body.style.overflow =
                    "";
            }
        );

    renderCustomerOrders();
}


function renderCustomerOrders() {
    const container =
        document.getElementById(
            "technovaCustomerOrders"
        );

    if (!container) {
        return;
    }

    const orders =
        getCustomerOrders();

    if (!orders.length) {
        container.innerHTML = `
            <div class="technova-empty-orders">
                <i class="fa-solid fa-box-open"></i>

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your orders will appear here.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        orders
            .map(
                order => {
                    const status =
                        order.status ||
                        "Pending";

                    const statusIndex =
                        getOrderStatusIndex(
                            status
                        );

                    return `
                        <div class="technova-order-card">
                            <div class="technova-order-top">
                                <div>
                                    <strong>
                                        ${escapeHTML(
                                            order.id
                                        )}
                                    </strong>

                                    <small>
                                        ${formatDate(
                                            order.createdAt
                                        )}
                                    </small>
                                </div>

                                <span class="technova-order-status ${slugify(
                                    status
                                )}">
                                    ${escapeHTML(
                                        status
                                    )}
                                </span>
                            </div>

                            <div class="technova-order-products">
                                ${order.items
                                    .map(
                                        item => `
                                            <div>
                                                <span>
                                                    ${escapeHTML(
                                                        item.name
                                                    )}
                                                </span>

                                                <small>
                                                    × ${item.quantity}
                                                </small>
                                            </div>
                                        `
                                    )
                                    .join("")}
                            </div>

                            ${
                                status !==
                                "Cancelled"
                                    ? `
                                        <div class="technova-order-progress">
                                            ${getStatusSteps()
                                                .map(
                                                    (
                                                        step,
                                                        index
                                                    ) => `
                                                        <div class="technova-progress-step ${
                                                            index <=
                                                            statusIndex
                                                                ? "active"
                                                                : ""
                                                        }">
                                                            <span>
                                                                ${index + 1}
                                                            </span>

                                                            <small>
                                                                ${escapeHTML(
                                                                    step
                                                                )}
                                                            </small>
                                                        </div>
                                                    `
                                                )
                                                .join("")}
                                        </div>
                                    `
                                    : `
                                        <div class="technova-cancelled-order">
                                            <i class="fa-solid fa-circle-xmark"></i>
                                            This order has been cancelled.
                                        </div>
                                    `
                            }

                            <div class="technova-order-bottom">
                                <strong>
                                    Total:
                                    $${Number(
                                        order.total
                                    ).toLocaleString(
                                        undefined,
                                        {
                                            minimumFractionDigits: 2
                                        }
                                    )}
                                </strong>

                                <span>
                                    ${escapeHTML(
                                        order.paymentMethod
                                    )}
                                </span>
                            </div>
                        </div>
                    `;
                }
            )
            .join("");
}


/* =========================================================
   CUSTOMER MENU
   ========================================================= */

function createCustomerMenu() {
    if (
        document.getElementById(
            "technovaCustomerMenu"
        )
    ) {
        return;
    }

    const menu =
        document.createElement(
            "div"
        );

    menu.id =
        "technovaCustomerMenu";

    menu.className =
        "technova-customer-menu";

    menu.innerHTML = `
        <button
            type="button"
            id="technovaOrdersButton"
        >
            <i class="fa-solid fa-box"></i>
            My Orders
        </button>

        <button
            type="button"
            id="technovaWishlistButton"
        >
            <i class="fa-solid fa-heart"></i>
            Wishlist
        </button>

        <button
            type="button"
            id="technovaFeedbackButton"
        >
            <i class="fa-solid fa-comment"></i>
            Website Feedback
        </button>
    `;

    document.body.appendChild(
        menu
    );

    document
        .getElementById(
            "technovaOrdersButton"
        )
        .addEventListener(
            "click",
            () => {
                menu.classList.remove(
                    "active"
                );

                openOrdersPanel();
            }
        );

    document
        .getElementById(
            "technovaWishlistButton"
        )
        .addEventListener(
            "click",
            () => {
                menu.classList.remove(
                    "active"
                );

                openWishlistPanel();
            }
        );

    document
        .getElementById(
            "technovaFeedbackButton"
        )
        .addEventListener(
            "click",
            () => {
                menu.classList.remove(
                    "active"
                );

                openFeedbackPanel();
            }
        );
}


/* =========================================================
   WISHLIST PANEL
   ========================================================= */

function openWishlistPanel() {
    const user =
        getCurrentUser();

    if (!user) {
        openAuthModal("login");

        return;
    }

    const existing =
        document.getElementById(
            "technovaWishlistModal"
        );

    if (existing) {
        existing.classList.add(
            "active"
        );

        renderWishlistPanel();

        return;
    }

    const modal =
        document.createElement(
            "div"
        );

    modal.id =
        "technovaWishlistModal";

    modal.className =
        "technova-feature-modal";

    modal.innerHTML = `
        <div class="technova-feature-modal-box">
            <button
                type="button"
                class="technova-feature-close"
                id="technovaWishlistClose"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

            <h2>
                My Wishlist
            </h2>

            <p>
                Products you saved for later.
            </p>

            <div
                id="technovaWishlistList"
                class="technova-wishlist-list"
            ></div>
        </div>
    `;

    document.body.appendChild(
        modal
    );

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

    document
        .getElementById(
            "technovaWishlistClose"
        )
        .addEventListener(
            "click",
            () => {
                modal.classList.remove(
                    "active"
                );

                document.body.style.overflow =
                    "";
            }
        );

    renderWishlistPanel();
}


function renderWishlistPanel() {
    const list =
        document.getElementById(
            "technovaWishlistList"
        );

    if (!list) {
        return;
    }

    const wishlist =
        getUserWishlist();

    const savedProducts =
        wishlist
            .map(
                id =>
                    getProductById(id)
            )
            .filter(Boolean);

    if (!savedProducts.length) {
        list.innerHTML = `
            <div class="technova-empty-wishlist">
                <i class="fa-regular fa-heart"></i>

                <h3>
                    Your wishlist is empty
                </h3>

                <p>
                    Save products you want to buy later.
                </p>
            </div>
        `;

        return;
    }

    list.innerHTML =
        savedProducts
            .map(
                product => `
                    <div class="technova-wishlist-item">
                        <img
                            src="${product.image}"
                            alt="${escapeHTML(
                                product.name
                            )}"
                        >

                        <div>
                            <strong>
                                ${escapeHTML(
                                    product.name
                                )}
                            </strong>

                            <span>
                                $${product.price.toLocaleString()}
                            </span>

                            <button
                                type="button"
                                data-wishlist-buy="${product.id}"
                            >
                                ${
                                    product.stock > 0
                                        ? "Buy"
                                        : "Out of Stock"
                                }
                            </button>
                        </div>

                        <button
                            type="button"
                            data-wishlist-remove="${product.id}"
                            title="Remove"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                `
            )
            .join("");

    list.querySelectorAll(
        "[data-wishlist-buy]"
    ).forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    const product =
                        getProductById(
                            button.dataset
                                .wishlistBuy
                        );

                    if (
                        !product ||
                        product.stock <= 0
                    ) {
                        return;
                    }

                    closeWishlistPanel();

                    handleBuy(
                        product.id
                    );
                }
            );
        }
    );

    list.querySelectorAll(
        "[data-wishlist-remove]"
    ).forEach(
        button => {
            button.addEventListener(
                "click",
                () => {
                    removeFromWishlist(
                        button.dataset
                            .wishlistRemove
                    );
                }
            );
        }
    );
}


function removeFromWishlist(
    productId
) {
    const user =
        getCurrentUser();

    if (!user) {
        return;
    }

    const wishlists =
        getWishlists();

    if (!Array.isArray(
        wishlists[user.id]
    )) {
        return;
    }

    wishlists[user.id] =
        wishlists[user.id].filter(
            id =>
                Number(id) !==
                Number(productId)
        );

    saveWishlists(
        wishlists
    );

    updateWishlistButton(
        productId
    );

    renderWishlistPanel();

    showNotification(
        "Removed from wishlist."
    );
}


function closeWishlistPanel() {
    const modal =
        document.getElementById(
            "technovaWishlistModal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


/* =========================================================
   SHOW CUSTOMER MENU
   ========================================================= */

function toggleCustomerMenu() {
    const user =
        getCurrentUser();

    if (!user) {
        openAuthModal("login");

        return;
    }

    createCustomerMenu();

    const menu =
        document.getElementById(
            "technovaCustomerMenu"
        );

    menu.classList.toggle(
        "active"
    );
}


/* =========================================================
   ACCOUNT BUTTON ENHANCEMENT
   ========================================================= */

const originalAccountClick =
    accountBtn;

accountBtn.addEventListener(
    "contextmenu",
    event => {
        event.preventDefault();
    }
);


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(
    message,
    type = "success"
) {
    const notification =
        document.createElement(
            "div"
        );

    notification.className =
        "notification";

    notification.textContent =
        message;

    if (type === "error") {
        notification.style.borderLeftColor =
            "var(--danger)";
    }

    document.body.appendChild(
        notification
    );

    requestAnimationFrame(
        () => {
            notification.classList.add(
                "show"
            );
        }
    );

    setTimeout(
        () => {
            notification.classList.remove(
                "show"
            );

            setTimeout(
                () => {
                    notification.remove();
                },
                300
            );
        },
        2500
    );
}


/* =========================================================
   HERO SLIDER
   ========================================================= */

const heroImages = [
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85"
];


const heroImage =
    document.querySelector(
        ".hero-product img"
    );


const heroDots =
    document.querySelectorAll(
        ".hero-dot"
    );


function changeHeroSlide(index) {
    heroSlide =
        index;

    if (!heroImage) {
        return;
    }

    heroImage.style.opacity =
        "0";

    setTimeout(
        () => {
            heroImage.src =
                heroImages[index];

            heroImage.style.opacity =
                "1";
        },
        180
    );

    heroDots.forEach(
        (dot, i) => {
            dot.classList.toggle(
                "active",
                i === index
            );
        }
    );
}


heroDots.forEach(
    (dot, index) => {
        dot.addEventListener(
            "click",
            () => {
                changeHeroSlide(
                    index
                );
            }
        );
    }
);


setInterval(
    () => {
        heroSlide =
            (heroSlide + 1) %
            heroImages.length;

        changeHeroSlide(
            heroSlide
        );
    },
    5000
);


/* =========================================================
   BACK TO TOP
   ========================================================= */

window.addEventListener(
    "scroll",
    () => {
        backToTop.classList.toggle(
            "show",
            window.scrollY > 500
        );
    }
);


backToTop.addEventListener(
    "click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   STORAGE SYNC
   ========================================================= */

window.addEventListener(
    "storage",
    event => {
        if (
            event.key ===
            PRODUCTS_KEY
        ) {
            loadProducts();

            refreshCartProducts();

            updateCart();

            displayProducts();

            if (currentProduct) {
                const updated =
                    products.find(
                        product =>
                            Number(
                                product.id
                            ) ===
                            Number(
                                currentProduct.id
                            )
                    );

                if (updated) {
                    currentProduct =
                        updated;

                    if (
                        productModal.classList.contains(
                            "active"
                        )
                    ) {
                        openProductModal(
                            updated.id
                        );
                    }
                }
            }
        }

        if (
            event.key ===
            CURRENT_USER_KEY
        ) {
            updateAccountUI();

            updateNotificationUI();
        }

        if (
            event.key ===
            ORDERS_KEY
        ) {
            updateNotificationUI();

            renderCustomerOrders();
        }

        if (
            event.key ===
            NOTIFICATIONS_KEY
        ) {
            updateNotificationUI();
        }

        if (
            event.key ===
            REVIEWS_KEY
        ) {
            if (currentProduct) {
                renderProductReviews(
                    currentProduct.id
                );
            }

            displayProducts();
        }

        if (
            event.key ===
            WISHLIST_KEY
        ) {
            if (currentProduct) {
                updateWishlistButton(
                    currentProduct.id
                );
            }
        }
    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {
        if (
            event.key !==
            "Escape"
        ) {
            return;
        }

        if (
            successModal.classList.contains(
                "active"
            )
        ) {
            successModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "";

            return;
        }

        if (
            checkoutModal.classList.contains(
                "active"
            )
        ) {
            closeCheckout();

            return;
        }

        if (
            authModal.classList.contains(
                "active"
            )
        ) {
            closeAuthModal();

            return;
        }

        if (
            productModal.classList.contains(
                "active"
            )
        ) {
            closeProductModal();

            return;
        }

        if (
            cartOverlay.classList.contains(
                "active"
            )
        ) {
            closeCartSidebar();
        }

        document
            .querySelectorAll(
                ".technova-feature-modal.active"
            )
            .forEach(
                modal => {
                    modal.classList.remove(
                        "active"
                    );
                }
            );
    }
);


/* =========================================================
   UTILITIES
   ========================================================= */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


function formatDate(date) {
    if (!date) {
        return "";
    }

    const parsed =
        new Date(date);

    if (
        Number.isNaN(
            parsed.getTime()
        )
    ) {
        return "";
    }

    return parsed.toLocaleString(
        undefined,
        {
            dateStyle: "medium",
            timeStyle: "short"
        }
    );
}


function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .replace(
            /[^a-z0-9]+/g,
            "-"
        )
        .replace(
            /^-|-$/g,
            ""
        );
}


/* =========================================================
   FEATURE STYLES
   ========================================================= */

function injectFeatureStyles() {
    if (
        document.getElementById(
            "technova-feature-styles"
        )
    ) {
        return;
    }

    const style =
        document.createElement(
            "style"
        );

    style.id =
        "technova-feature-styles";

    style.textContent = `
        /* BADGES */

        .technova-product-badge {
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 4;
            padding: 5px 9px;
            border-radius: 6px;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: .5px;
            background: #2563eb;
            color: #fff;
        }

        .technova-product-badge.sale {
            top: 42px;
            background: #ef4444;
        }

        .technova-product-badge.out-of-stock {
            background: #111827;
        }

        .technova-stock-text {
            margin: 5px 0 8px;
            color: var(--text-light);
            font-size: 12px;
            font-weight: 600;
        }

        .technova-cart-stock {
            display: block;
            margin-top: 4px;
            color: var(--text-light);
            font-size: 11px;
        }

        /* STARS */

        .technova-stars {
            letter-spacing: 1px;
            font-size: 14px;
        }

        .technova-empty-stars {
            opacity: .22;
        }

        /* PASSWORD */

        .technova-password-wrapper {
            width: 100%;
        }

        /* NOTIFICATIONS */

        .technova-notification-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .technova-notification-button {
            position: relative;
            width: 42px;
            height: 42px;
            border: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            border-radius: 10px;
        }

        .technova-notification-button:hover {
            background: rgba(127,127,127,.1);
        }

        .technova-notification-count {
            position: absolute;
            top: 2px;
            right: 1px;
            min-width: 18px;
            height: 18px;
            padding: 0 4px;
            border-radius: 999px;
            background: #ef4444;
            color: #fff;
            font-size: 10px;
            font-weight: 800;
            align-items: center;
            justify-content: center;
        }

        .technova-notification-panel {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            width: 360px;
            max-width: calc(100vw - 24px);
            background: var(--card);
            color: var(--text);
            border: 1px solid var(--border);
            border-radius: 14px;
            box-shadow: 0 20px 50px rgba(0,0,0,.16);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: .2s ease;
            z-index: 9999;
            overflow: hidden;
        }

        .technova-notification-panel.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .technova-notification-header {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 16px;
            border-bottom: 1px solid var(--border);
        }

        .technova-notification-header h3 {
            margin: 0 0 4px;
        }

        .technova-notification-header small {
            color: var(--text-light);
        }

        .technova-notification-header button {
            border: 0;
            background: transparent;
            color: #2563eb;
            cursor: pointer;
            font-size: 11px;
            font-weight: 700;
        }

        .technova-notification-list {
            max-height: 420px;
            overflow-y: auto;
        }

        .technova-notification-item {
            width: 100%;
            display: flex;
            gap: 10px;
            align-items: flex-start;
            text-align: left;
            border: 0;
            border-bottom: 1px solid var(--border);
            background: transparent;
            color: inherit;
            padding: 13px;
            cursor: pointer;
        }

        .technova-notification-item:hover {
            background: rgba(127,127,127,.06);
        }

        .technova-notification-item.unread {
            background: rgba(37,99,235,.06);
        }

        .technova-notification-icon {
            width: 34px;
            height: 34px;
            min-width: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(37,99,235,.1);
            color: #2563eb;
        }

        .technova-notification-content {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .technova-notification-content strong {
            font-size: 13px;
        }

        .technova-notification-content span {
            font-size: 12px;
            line-height: 1.4;
        }

        .technova-notification-content small {
            color: var(--text-light);
            font-size: 10px;
        }

        .technova-unread-dot {
            width: 7px;
            height: 7px;
            min-width: 7px;
            border-radius: 50%;
            background: #2563eb;
            margin-left: auto;
            margin-top: 5px;
        }

        .technova-empty-notifications,
        .technova-empty-orders,
        .technova-empty-wishlist {
            padding: 35px 20px;
            text-align: center;
            color: var(--text-light);
        }

        .technova-empty-notifications i,
        .technova-empty-orders i,
        .technova-empty-wishlist i {
            font-size: 32px;
            margin-bottom: 10px;
        }

        /* FEATURE MODALS */

        .technova-feature-modal {
            position: fixed;
            inset: 0;
            z-index: 100000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(0,0,0,.55);
            opacity: 0;
            visibility: hidden;
            transition: .2s ease;
        }

        .technova-feature-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .technova-feature-modal-box {
            position: relative;
            width: min(650px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: var(--card);
            color: var(--text);
            border-radius: 18px;
            padding: 28px;
            box-shadow: 0 25px 70px rgba(0,0,0,.25);
        }

        .technova-feature-close {
            position: absolute;
            top: 14px;
            right: 14px;
            width: 36px;
            height: 36px;
            border: 0;
            border-radius: 50%;
            background: rgba(127,127,127,.1);
            color: inherit;
            cursor: pointer;
        }

        .technova-feature-modal-box h2 {
            margin: 0 0 6px;
        }

        .technova-feature-modal-box > p {
            color: var(--text-light);
            margin-bottom: 20px;
        }

        /* REVIEW */

        #technovaProductExtras {
            margin-top: 22px;
            border-top: 1px solid var(--border);
            padding-top: 20px;
        }

        .technova-stock-panel {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-bottom: 20px;
            padding: 12px;
            border-radius: 10px;
            background: rgba(16,185,129,.08);
            color: var(--success);
        }

        .technova-review-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .technova-review-heading h3 {
            margin: 0;
        }

        .technova-review-heading span {
            font-weight: 700;
        }

        .technova-review {
            padding: 13px 0;
            border-bottom: 1px solid var(--border);
        }

        .technova-review-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .technova-review p {
            margin: 8px 0;
            line-height: 1.5;
            font-size: 13px;
        }

        .technova-review small {
            color: var(--text-light);
            font-size: 10px;
        }

        .technova-no-reviews {
            padding: 20px;
            text-align: center;
            color: var(--text-light);
        }

        .technova-review-form {
            margin-top: 18px;
        }

        .technova-review-form h4 {
            margin: 0 0 10px;
        }

        .technova-rating-input {
            display: flex;
            gap: 3px;
            margin-bottom: 10px;
        }

        .technova-rating-input button {
            border: 0;
            background: transparent;
            color: #9ca3af;
            font-size: 24px;
            cursor: pointer;
        }

        .technova-rating-input button.active {
            color: #f59e0b;
        }

        .technova-review-form textarea,
        .technova-feature-modal-box textarea,
        .technova-feature-modal-box select {
            width: 100%;
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px;
            background: var(--bg);
            color: var(--text);
            font: inherit;
            resize: vertical;
            box-sizing: border-box;
        }

        .technova-submit-review,
        .technova-feedback-submit {
            margin-top: 10px;
            padding: 11px 16px;
            border: 0;
            border-radius: 9px;
            background: var(--primary);
            color: #fff;
            cursor: pointer;
            font-weight: 700;
        }

        .technova-review-note {
            display: block;
            margin-top: 8px;
            color: var(--text-light);
        }

        .technova-review-login-btn {
            width: 100%;
            padding: 11px;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text);
            border-radius: 9px;
            cursor: pointer;
        }

        /* ORDERS */

        .technova-order-card {
            padding: 17px;
            border: 1px solid var(--border);
            border-radius: 13px;
            margin-bottom: 12px;
        }

        .technova-order-top,
        .technova-order-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }

        .technova-order-top small {
            display: block;
            color: var(--text-light);
            margin-top: 4px;
        }

        .technova-order-status {
            padding: 5px 9px;
            border-radius: 999px;
            background: rgba(37,99,235,.1);
            color: #2563eb;
            font-size: 10px;
            font-weight: 800;
        }

        .technova-order-status.cancelled {
            color: #ef4444;
            background: rgba(239,68,68,.1);
        }

        .technova-order-products {
            margin: 14px 0;
        }

        .technova-order-products > div {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 7px 0;
            border-bottom: 1px solid var(--border);
            font-size: 12px;
        }

        .technova-order-products small {
            color: var(--text-light);
        }

        .technova-order-progress {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 4px;
            margin: 18px 0;
        }

        .technova-progress-step {
            text-align: center;
            color: var(--text-light);
            font-size: 10px;
        }

        .technova-progress-step span {
            display: flex;
            width: 26px;
            height: 26px;
            align-items: center;
            justify-content: center;
            margin: 0 auto 5px;
            border-radius: 50%;
            background: var(--border);
            font-weight: 800;
        }

        .technova-progress-step.active {
            color: var(--primary);
        }

        .technova-progress-step.active span {
            background: var(--primary);
            color: #fff;
        }

        .technova-order-bottom {
            border-top: 1px solid var(--border);
            padding-top: 12px;
            font-size: 12px;
        }

        .technova-order-bottom span {
            color: var(--text-light);
        }

        .technova-cancelled-order {
            padding: 12px;
            border-radius: 9px;
            background: rgba(239,68,68,.08);
            color: #ef4444;
            font-size: 12px;
        }

        /* WISHLIST */

        .technova-wishlist-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
        }

        .technova-wishlist-item img {
            width: 70px;
            height: 55px;
            object-fit: cover;
            border-radius: 8px;
        }

        .technova-wishlist-item > div {
            flex: 1;
            min-width: 0;
        }

        .technova-wishlist-item strong,
        .technova-wishlist-item span {
            display: block;
        }

        .technova-wishlist-item strong {
            font-size: 13px;
        }

        .technova-wishlist-item span {
            color: var(--primary);
            font-weight: 700;
            margin-top: 4px;
        }

        .technova-wishlist-item div button {
            margin-top: 6px;
            border: 0;
            border-radius: 6px;
            padding: 5px 9px;
            background: var(--primary);
            color: #fff;
            cursor: pointer;
            font-size: 11px;
        }

        .technova-wishlist-item > button {
            width: 34px;
            height: 34px;
            border: 0;
            background: transparent;
            color: #ef4444;
            cursor: pointer;
        }

        /* CUSTOMER MENU */

        .technova-customer-menu {
            position: fixed;
            top: 75px;
            right: 20px;
            z-index: 9998;
            width: 220px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--card);
            box-shadow: 0 20px 45px rgba(0,0,0,.15);
            display: none;
        }

        .technova-customer-menu.active {
            display: block;
        }

        .technova-customer-menu button {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 0;
            background: transparent;
            color: var(--text);
            padding: 11px;
            border-radius: 8px;
            cursor: pointer;
            text-align: left;
        }

        .technova-customer-menu button:hover {
            background: rgba(127,127,127,.08);
        }

        @media (max-width: 700px) {
            .technova-notification-panel {
                position: fixed;
                top: 70px;
                right: 12px;
            }

            .technova-order-progress {
                grid-template-columns: repeat(5, minmax(55px, 1fr));
                overflow-x: auto;
            }

            .technova-feature-modal {
                padding: 10px;
            }

            .technova-feature-modal-box {
                padding: 20px;
            }
        }
    `;

    document.head.appendChild(
        style
    );
}


/* =========================================================
   FOOTER FEEDBACK BUTTON
   ========================================================= */

function createFeedbackButton() {
    if (
        document.getElementById(
            "technovaFooterFeedback"
        )
    ) {
        return;
    }

    const footer =
        document.querySelector(
            "footer"
        );

    if (!footer) {
        return;
    }

    const button =
        document.createElement(
            "button"
        );

    button.id =
        "technovaFooterFeedback";

    button.type =
        "button";

    button.className =
        "technova-footer-feedback";

    button.innerHTML = `
        <i class="fa-solid fa-comment"></i>
        Website Feedback
    `;

    button.addEventListener(
        "click",
        openFeedbackPanel
    );

    footer.appendChild(
        button
    );
}


/* =========================================================
   INITIALIZE
   ========================================================= */

initializeAdmin();

loadProducts();

updateAccountUI();

applyTheme();

displayProducts();

updateCart();

initializePasswordToggles();

injectFeatureStyles();

createNotificationUI();

createFeedbackButton();

updateNotificationUI();


/* =========================================================
   OPTIONAL CUSTOMER MENU
   ========================================================= */

document.addEventListener(
    "dblclick",
    event => {
        if (
            event.target.closest(
                "#accountBtn"
            )
        ) {
            const user =
                getCurrentUser();

            if (
                user &&
                user.role !== "admin"
            ) {
                toggleCustomerMenu();
            }
        }
    }
);


/* =========================================================
   INITIAL PAYMENT INFO
   ========================================================= */

const initialCOD =
    document.querySelector(
        'input[name="paymentMethod"][value="Cash on Delivery"]'
    );

if (initialCOD) {
    initialCOD.checked = true;

    if (paymentInfo) {
        paymentInfo.innerHTML = `
            <i class="fa-solid fa-circle-info"></i>

            <span>
                Pay when your order arrives.
                No online payment details are required.
            </span>
        `;
    }
}