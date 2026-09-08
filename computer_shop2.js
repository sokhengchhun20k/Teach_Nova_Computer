/* =========================================================
   TECHNOVA COMPUTER SHOP
   CUSTOMER + AUTHENTICATION + CART + CHECKOUT
   ========================================================= */


/* =========================================================
   STORAGE
   ========================================================= */

const PRODUCTS_KEY = "technova_products";
const USERS_KEY = "technova_users";
const CURRENT_USER_KEY = "technova_current_user";
const ORDERS_KEY = "technova_orders";

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

const checkoutModal =
    document.getElementById("checkoutModal");

const checkoutClose =
    document.getElementById("checkoutClose");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutName =
    document.getElementById("checkoutName");

const checkoutPhone =
    document.getElementById("checkoutPhone");

const checkoutProvince =
    document.getElementById("checkoutProvince");

const checkoutDistrict =
    document.getElementById("checkoutDistrict");

const checkoutAddress =
    document.getElementById("checkoutAddress");

const checkoutLandmark =
    document.getElementById("checkoutLandmark");

const checkoutSummary =
    document.getElementById("checkoutSummary");

const summaryCount =
    document.getElementById("summaryCount");

const checkoutSubtotal =
    document.getElementById("checkoutSubtotal");

const checkoutGrandTotal =
    document.getElementById("checkoutGrandTotal");

const paymentInfo =
    document.getElementById("paymentInfo");


/* =========================================================
   SUCCESS DOM
   ========================================================= */

const successModal =
    document.getElementById("successModal");

const successOrderId =
    document.getElementById("successOrderId");

const successCustomer =
    document.getElementById("successCustomer");

const successPayment =
    document.getElementById("successPayment");

const successAddress =
    document.getElementById("successAddress");

const successTotal =
    document.getElementById("successTotal");

const successContinue =
    document.getElementById("successContinue");


/* =========================================================
   PRODUCT MODAL DOM
   ========================================================= */

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalStatus =
    document.getElementById("modalStatus");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalRating =
    document.getElementById("modalRating");

const modalPrice =
    document.getElementById("modalPrice");

const modalOldPrice =
    document.getElementById("modalOldPrice");

const modalDiscount =
    document.getElementById("modalDiscount");

const modalDescription =
    document.getElementById("modalDescription");

const modalSpecs =
    document.getElementById("modalSpecs");

const modalBuyBtn =
    document.getElementById("modalBuyBtn");

const wishlistBtn =
    document.getElementById("wishlistBtn");


/* =========================================================
   OTHER DOM
   ========================================================= */

const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    document.getElementById("themeIcon");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const categoryNav =
    document.getElementById("categoryNav");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const backToTop =
    document.getElementById("backToTop");

const shopNowBtn =
    document.getElementById("shopNowBtn");

const dealBtn =
    document.getElementById("dealBtn");

const resetProducts =
    document.getElementById("resetProducts");


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function getUsers() {

    try {

        return JSON.parse(
            localStorage.getItem(USERS_KEY)
        ) || [];

    } catch {

        return [];

    }

}


function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


function getOrders() {

    try {

        return JSON.parse(
            localStorage.getItem(ORDERS_KEY)
        ) || [];

    } catch {

        return [];

    }

}


function saveOrders(orders) {

    localStorage.setItem(
        ORDERS_KEY,
        JSON.stringify(orders)
    );

}


/* =========================================================
   PRODUCTS
   ========================================================= */

function loadProducts() {

    try {

        const saved =
            localStorage.getItem(PRODUCTS_KEY);

        if (saved) {

            products = JSON.parse(saved);

        } else {

            products = [...defaultProducts];

            localStorage.setItem(
                PRODUCTS_KEY,
                JSON.stringify(products)
            );

        }

    } catch {

        products = [...defaultProducts];

    }

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

            createdAt:
                new Date().toISOString()

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
   CONTINUE AFTER LOGIN / REGISTER
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

        if (product && product.status !== "sold") {

            addToCart(product.id, true);

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

        const users =
            getUsers();

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


        const users =
            getUsers();

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


    if (product.status === "sold") {

        showNotification(
            "This product is sold out.",
            "error"
        );

        return;

    }


    const user =
        getCurrentUser();


    if (!user) {

        pendingBuyProductId =
            productId;

        pendingCheckout = false;

        openAuthModal("login");

        return;

    }


    addToCart(productId, true);

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
                product.category === currentCategory;

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
                a.name.localeCompare(b.name)
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


function createProductCard(product) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";


    const stars =
        "★".repeat(
            Math.round(product.rating)
        );


    card.innerHTML = `

        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <span
                class="product-status ${product.status}"
            >
                ${product.statusText}
            </span>

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
                ${product.categoryName}
            </span>

            <h3>
                ${product.name}
            </h3>


            <div class="product-rating">

                <span>
                    ${stars}
                </span>

                <small>
                    ${product.rating}
                </small>

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
                    product.status === "sold"
                        ? "disabled"
                        : ""
                }
            >

                <i class="fa-solid fa-cart-shopping"></i>

                ${
                    product.status === "sold"
                        ? "SOLD OUT"
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

                if (
                    !buyButton.disabled
                ) {

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
        product.statusText;

    modalStatus.className =
        `modal-status ${
            product.status === "sold"
                ? "sold"
                : ""
        }`;

    modalCategory.textContent =
        product.categoryName;

    modalName.textContent =
        product.name;

    modalRating.textContent =
        `${product.rating} / 5`;

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
                    document.createElement("div");

                spec.className =
                    "spec-item";

                spec.innerHTML = `
                    <strong>${key}</strong>
                    <span>${value}</span>
                `;

                modalSpecs.appendChild(spec);

            }
        );


    if (product.status === "sold") {

        modalBuyBtn.disabled = true;

        modalBuyBtn.innerHTML =
            `
                <i class="fa-solid fa-ban"></i>
                SOLD OUT
            `;

    } else {

        modalBuyBtn.disabled = false;

        modalBuyBtn.innerHTML =
            `
                <i class="fa-solid fa-cart-shopping"></i>
                GO TO BUY
            `;

    }


    productModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

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
            currentProduct.status !== "sold"
        ) {

            handleBuy(
                currentProduct.id
            );

            closeProductModal();

        }

    }
);


/* =========================================================
   CART
   ========================================================= */

function addToCart(
    productId,
    silent = false
) {

    const product =
        products.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );

    if (!product) {

        return;

    }


    if (product.status === "sold") {

        showNotification(
            "This product is sold out.",
            "error"
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                Number(item.product.id) ===
                Number(productId)
        );


    if (existing) {

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
                Number(item.product.id) !==
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
                Number(cartItem.product.id) ===
                Number(productId)
        );

    if (!item) {

        return;

    }


    item.quantity +=
        change;


    if (item.quantity <= 0) {

        removeFromCart(
            productId
        );

        return;

    }


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
            count + item.quantity,
        0
    );

}


function updateCart() {

    cartItems.innerHTML = "";


    cart.forEach(
        item => {

            const subtotal =
                item.product.price *
                item.quantity;


            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <img
                    src="${item.product.image}"
                    alt="${item.product.name}"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.product.name}
                    </h4>

                    <strong>
                        $${subtotal.toLocaleString()}
                    </strong>


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
                document.createElement("div");

            row.className =
                "summary-item";


            const subtotal =
                item.product.price *
                item.quantity;


            row.innerHTML = `

                <div>

                    <strong>
                        ${item.product.name}
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


        const orders =
            getOrders();


        orders.unshift(
            order
        );


        saveOrders(
            orders
        );


        cart = [];


        updateCart();


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

wishlistBtn.addEventListener(
    "click",
    () => {

        const icon =
            wishlistBtn.querySelector(
                "i"
            );


        const liked =
            wishlistBtn.classList.contains(
                "liked"
            );


        wishlistBtn.classList.toggle(
            "liked",
            !liked
        );


        icon.className =
            liked
                ? "fa-regular fa-heart"
                : "fa-solid fa-heart";


        showNotification(
            liked
                ? "Removed from wishlist."
                : "Added to wishlist."
        );

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
   PRODUCT SYNC
   ========================================================= */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key ===
            PRODUCTS_KEY
        ) {

            loadProducts();

            displayProducts();


            if (currentProduct) {

                const updated =
                    products.find(
                        product =>
                            Number(product.id) ===
                            Number(currentProduct.id)
                    );


                if (updated) {

                    currentProduct =
                        updated;

                }

            }

        }


        if (
            event.key ===
            CURRENT_USER_KEY
        ) {

            updateAccountUI();

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

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

initializeAdmin();

loadProducts();

updateAccountUI();

applyTheme();

displayProducts();

updateCart();