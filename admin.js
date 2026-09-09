/* =========================================================
   TECHNOVA ADMIN DASHBOARD
   ========================================================= */

/* =========================================================
   STORAGE KEYS
   ========================================================= */

const PRODUCTS_KEY = "technova_products";
const USERS_KEY = "technova_users";
const CURRENT_USER_KEY = "technova_current_user";
const ORDERS_KEY = "technova_orders";

const REVIEWS_KEY = "technova_reviews";
const FEEDBACK_KEY = "technova_feedback";
const NOTIFICATIONS_KEY = "technova_notifications";
const SETTINGS_KEY = "technova_settings";

const STOCK_PROCESSED_ORDERS_KEY =
    "technova_stock_processed_orders";

const STOCK_RESTORED_ORDERS_KEY =
    "technova_stock_restored_orders";


/* =========================================================
   ORDER STATUSES
   ========================================================= */

const ORDER_STATUSES = [
    "Pending",
    "Confirmed",
    "Processing",
    "Out for Delivery",
    "Delivered",
    "Cancelled"
];


/* =========================================================
   DEFAULT SETTINGS
   ========================================================= */

const DEFAULT_SETTINGS = {
    storeName: "TechNova",
    storeStatus: "Online",
    storeDescription:
        "Your trusted computer and technology store.",
    contactPhone: "",
    contactEmail: "",
    storeAddress: "",

    lowStockThreshold: 5,
    deliveryFee: 0,
    currency: "USD",

    automaticStockDeduction: true,
    allowOutOfStockOrders: false,
    defaultOrderStatus: "Pending",

    notifyNewOrders: true,
    notifyOrderStatus: true,
    notifyReviews: true,
    notifyFeedback: true,
    notifyLowStock: true
};


/* =========================================================
   SECURITY
   ========================================================= */

function getCurrentUser() {
    try {
        return JSON.parse(
            localStorage.getItem(
                CURRENT_USER_KEY
            )
        );
    } catch (error) {
        return null;
    }
}

let currentUser = getCurrentUser();

if (
    !currentUser ||
    currentUser.role !== "admin"
) {
    window.location.href =
        "computer_shop1.html";
}


/* =========================================================
   DOM
   ========================================================= */

const adminNavButtons =
    document.querySelectorAll(
        ".admin-nav-btn"
    );

const adminPages =
    document.querySelectorAll(
        ".admin-page"
    );

const pageTitle =
    document.getElementById(
        "pageTitle"
    );

const pageSubtitle =
    document.getElementById(
        "pageSubtitle"
    );

const adminName =
    document.getElementById(
        "adminName"
    );

const mobileSidebarBtn =
    document.getElementById(
        "mobileSidebarBtn"
    );

const adminSidebar =
    document.querySelector(
        ".admin-sidebar"
    );

const viewStoreBtn =
    document.getElementById(
        "viewStoreBtn"
    );

const adminLogoutBtn =
    document.getElementById(
        "adminLogoutBtn"
    );


/* =========================================================
   RENDER STATE
   ========================================================= */

const renderedPages = {
    dashboard: false,
    products: false,
    orders: false,
    customers: false,
    reviews: false,
    feedback: false,
    settings: false
};

const adminSearchState = {
    products: "",
    orders: "",
    customers: "",
    reviews: "",
    feedback: ""
};


/* =========================================================
   DATA HELPERS
   ========================================================= */

function getProducts() {
    try {
        const products =
            JSON.parse(
                localStorage.getItem(
                    PRODUCTS_KEY
                )
            );

        return Array.isArray(products)
            ? products
            : [];
    } catch (error) {
        return [];
    }
}

function saveProducts(products) {
    localStorage.setItem(
        PRODUCTS_KEY,
        JSON.stringify(products)
    );
}

function getUsers() {
    try {
        const users =
            JSON.parse(
                localStorage.getItem(
                    USERS_KEY
                )
            );

        return Array.isArray(users)
            ? users
            : [];
    } catch (error) {
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
        const orders =
            JSON.parse(
                localStorage.getItem(
                    ORDERS_KEY
                )
            );

        return Array.isArray(orders)
            ? orders
            : [];
    } catch (error) {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem(
        ORDERS_KEY,
        JSON.stringify(orders)
    );
}

function safeGetArray(key) {
    try {
        const value =
            JSON.parse(
                localStorage.getItem(key)
            );

        return Array.isArray(value)
            ? value
            : [];
    } catch (error) {
        return [];
    }
}

function safeSave(key, value) {
    localStorage.setItem(
        key,
        JSON.stringify(value)
    );
}


/* =========================================================
   REVIEWS
   ========================================================= */

function getReviews() {
    return safeGetArray(
        REVIEWS_KEY
    );
}

function saveReviews(reviews) {
    safeSave(
        REVIEWS_KEY,
        reviews
    );
}


/* =========================================================
   FEEDBACK
   ========================================================= */

function getFeedback() {
    return safeGetArray(
        FEEDBACK_KEY
    );
}

function saveFeedback(feedback) {
    safeSave(
        FEEDBACK_KEY,
        feedback
    );
}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function getNotifications() {
    return safeGetArray(
        NOTIFICATIONS_KEY
    );
}

function saveNotifications(
    notifications
) {
    safeSave(
        NOTIFICATIONS_KEY,
        notifications
    );
}


/* =========================================================
   SETTINGS
   ========================================================= */

function getSettings() {
    try {
        const saved =
            JSON.parse(
                localStorage.getItem(
                    SETTINGS_KEY
                )
            );

        return {
            ...DEFAULT_SETTINGS,
            ...(saved &&
            typeof saved === "object"
                ? saved
                : {})
        };
    } catch (error) {
        return {
            ...DEFAULT_SETTINGS
        };
    }
}

function saveSettings(settings) {
    safeSave(
        SETTINGS_KEY,
        {
            ...DEFAULT_SETTINGS,
            ...settings
        }
    );
}


/* =========================================================
   PAGE INFORMATION
   ========================================================= */

const pageInfo = {
    dashboard: {
        title: "Dashboard",
        subtitle:
            "Overview of your TechNova store"
    },

    products: {
        title: "Products",
        subtitle:
            "Manage products, prices and stock"
    },

    orders: {
        title: "Orders",
        subtitle:
            "Manage customer orders and delivery status"
    },

    customers: {
        title: "Customers",
        subtitle:
            "View registered customers"
    },

    reviews: {
        title: "Reviews",
        subtitle:
            "Manage customer product reviews"
    },

    feedback: {
        title: "Feedback",
        subtitle:
            "Manage customer website feedback"
    },

    settings: {
        title: "Settings",
        subtitle:
            "Manage your TechNova store settings"
    }
};


/* =========================================================
   NAVIGATION
   ========================================================= */

function openPage(pageName) {
    if (
        !pageInfo[pageName]
    ) {
        pageName = "dashboard";
    }

    document
        .querySelectorAll(
            ".admin-nav-btn"
        )
        .forEach((button) => {
            button.classList.toggle(
                "active",
                button.dataset.page ===
                    pageName
            );
        });

    document
        .querySelectorAll(
            ".admin-page"
        )
        .forEach((page) => {
            page.classList.toggle(
                "active",
                page.id ===
                    `${pageName}Page`
            );
        });

    const info =
        pageInfo[pageName];

    if (pageTitle) {
        pageTitle.textContent =
            info.title;
    }

    if (pageSubtitle) {
        pageSubtitle.textContent =
            info.subtitle;
    }

    switch (pageName) {
        case "dashboard":
            renderDashboard();
            renderedPages.dashboard =
                true;
            break;

        case "products":
            renderProducts();
            renderedPages.products =
                true;
            break;

        case "orders":
            renderOrders();
            renderedPages.orders =
                true;
            break;

        case "customers":
            renderCustomers();
            renderedPages.customers =
                true;
            break;

        case "reviews":
            renderReviews();
            renderedPages.reviews =
                true;
            break;

        case "feedback":
            renderFeedback();
            renderedPages.feedback =
                true;
            break;

        case "settings":
            renderSettings();
            renderedPages.settings =
                true;
            break;
    }

    closeMobileSidebar();
}


/* =========================================================
   NAV BUTTON EVENTS
   ========================================================= */

function bindAllNavButtons() {
    document
        .querySelectorAll(
            ".admin-nav-btn"
        )
        .forEach((button) => {
            if (
                button.dataset.bound ===
                "true"
            ) {
                return;
            }

            button.dataset.bound =
                "true";

            button.addEventListener(
                "click",
                () => {
                    openPage(
                        button.dataset.page
                    );
                }
            );
        });
}

bindAllNavButtons();

document
    .querySelectorAll(
        "[data-page-target]"
    )
    .forEach((button) => {
        button.addEventListener(
            "click",
            () => {
                openPage(
                    button.dataset
                        .pageTarget
                );
            }
        );
    });


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {
    const products =
        getProducts();

    const orders =
        getOrders();

    const users =
        getUsers();

    const customers =
        users.filter(
            (user) =>
                user.role !== "admin"
        );

    const totalProductsElement =
        document.getElementById(
            "totalProducts"
        );

    const totalOrdersElement =
        document.getElementById(
            "totalOrders"
        );

    const totalCustomersElement =
        document.getElementById(
            "totalCustomers"
        );

    if (totalProductsElement) {
        totalProductsElement.textContent =
            products.length;
    }

    if (totalOrdersElement) {
        totalOrdersElement.textContent =
            orders.length;
    }

    if (totalCustomersElement) {
        totalCustomersElement.textContent =
            customers.length;
    }

    syncRevenueIds();

    renderRecentOrders();
    renderStoreOverview();
    renderSalesChart();
}


/* =========================================================
   REVENUE / SALES
   ========================================================= */

function getOrderTotal(order) {
    const value =
        Number(
            order?.total ??
                order?.amount ??
                order?.price ??
                0
        );

    return Number.isFinite(value)
        ? Math.max(0, value)
        : 0;
}

function syncRevenueIds() {
    const orders =
        getOrders();

    const revenue =
        orders.reduce(
            (sum, order) =>
                sum +
                getOrderTotal(order),
            0
        );

    const salesElement =
        document.getElementById(
            "totalSales"
        );

    const revenueElement =
        document.getElementById(
            "totalRevenue"
        );

    const formatted =
        `$${revenue.toFixed(2)}`;

    if (salesElement) {
        salesElement.textContent =
            formatted;
    }

    if (revenueElement) {
        revenueElement.textContent =
            formatted;
    }
}


/* =========================================================
   RECENT ORDERS
   ========================================================= */

function renderRecentOrders() {
    const container =
        document.getElementById(
            "recentOrders"
        );

    if (!container) {
        return;
    }

    const orders =
        getOrders();

    const sortedOrders =
        [...orders]
            .sort(
                (a, b) =>
                    getOrderTimestamp(
                        b
                    ) -
                    getOrderTimestamp(
                        a
                    )
            )
            .slice(0, 5);

    if (!sortedOrders.length) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-box-open"></i>
                <p>No orders yet.</p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        sortedOrders
            .map((order) => {
                const customer =
                    order.customerName ||
                    order.name ||
                    order.customer ||
                    "Customer";

                const total =
                    getOrderTotal(
                        order
                    );

                const status =
                    normalizeOrderStatus(
                        order.status
                    );

                return `
                    <div class="recent-order">

                        <div>
                            <strong>
                                ${escapeHtml(
                                    order.id ||
                                        order.orderId ||
                                        "Order"
                                )}
                            </strong>

                            <small>
                                ${escapeHtml(
                                    customer
                                )}
                            </small>
                        </div>

                        <div>
                            <div class="recent-order-total">
                                $${total.toFixed(
                                    2
                                )}
                            </div>

                            <span class="status-badge ${getAdminStatusClass(
                                status
                            )}">
                                ${escapeHtml(
                                    status
                                )}
                            </span>
                        </div>

                    </div>
                `;
            })
            .join("");
}


/* =========================================================
   STORE OVERVIEW
   ========================================================= */

function renderStoreOverview() {
    const container =
        document.getElementById(
            "storeOverview"
        );

    if (!container) {
        return;
    }

    const products =
        getProducts();

    const settings =
        getSettings();

    const threshold =
        Math.max(
            0,
            Number(
                settings.lowStockThreshold
            ) || 0
        );

    const totalStock =
        products.reduce(
            (sum, product) =>
                sum +
                getProductStock(
                    product
                ),
            0
        );

    const lowStockCount =
        products.filter(
            (product) => {
                const stock =
                    getProductStock(
                        product
                    );

                return (
                    stock > 0 &&
                    stock <= threshold
                );
            }
        ).length;

    const outOfStockCount =
        products.filter(
            (product) =>
                getProductStock(
                    product
                ) <= 0
        ).length;

    container.innerHTML = `
        <div class="overview-list">

            <div class="overview-item">
                <span>Products</span>
                <strong>
                    ${products.length}
                </strong>
            </div>

            <div class="overview-item">
                <span>Total Stock</span>
                <strong>
                    ${totalStock}
                </strong>
            </div>

            <div class="overview-item">
                <span>Low Stock</span>
                <strong>
                    ${lowStockCount}
                </strong>
            </div>

            <div class="overview-item">
                <span>Out of Stock</span>
                <strong>
                    ${outOfStockCount}
                </strong>
            </div>

            <div class="overview-item">
                <span>Store Status</span>
                <strong>
                    ${escapeHtml(
                        settings.storeStatus
                    )}
                </strong>
            </div>

        </div>
    `;
}


/* =========================================================
   SALES CHART
   ========================================================= */

function renderSalesChart() {
    const card =
        document.querySelector(
            ".sales-chart-card"
        );

    const existingCanvas =
        document.getElementById(
            "salesChart"
        );

    if (
        !card &&
        !existingCanvas
    ) {
        return;
    }

    let chartCard = card;

    if (!chartCard) {
        chartCard =
            existingCanvas.closest(
                ".admin-card"
            );
    }

    if (!chartCard) {
        return;
    }

    let canvas =
        document.getElementById(
            "salesChart"
        );

    if (!canvas) {
        const wrapper =
            chartCard.querySelector(
                ".sales-chart-wrap"
            );

        if (!wrapper) {
            return;
        }

        canvas =
            document.createElement(
                "canvas"
            );

        canvas.id =
            "salesChart";

        wrapper.innerHTML = "";

        wrapper.appendChild(
            canvas
        );
    }

    const ctx =
        canvas.getContext("2d");

    if (!ctx) {
        return;
    }

    const orders =
        getOrders();

    const now =
        new Date();

    const months = [];

    for (
        let i = 6;
        i >= 0;
        i--
    ) {
        const date =
            new Date(
                now.getFullYear(),
                now.getMonth() - i,
                1
            );

        months.push({
            year:
                date.getFullYear(),

            month:
                date.getMonth(),

            label:
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short"
                    }
                ),

            value: 0
        });
    }

    orders.forEach(
        (order) => {
            const date =
                getOrderDate(
                    order
                );

            if (!date) {
                return;
            }

            const month =
                months.find(
                    (item) =>
                        item.year ===
                            date.getFullYear() &&
                        item.month ===
                            date.getMonth()
                );

            if (!month) {
                return;
            }

            month.value +=
                getOrderTotal(
                    order
                );
        }
    );

    const width =
        canvas.clientWidth || 600;

    const height =
        canvas.clientHeight || 280;

    const ratio =
        window.devicePixelRatio || 1;

    canvas.width =
        width * ratio;

    canvas.height =
        height * ratio;

    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    const padding = {
        top: 25,
        right: 25,
        bottom: 40,
        left: 55
    };

    const chartWidth =
        width -
        padding.left -
        padding.right;

    const chartHeight =
        height -
        padding.top -
        padding.bottom;

    const maxValue =
        Math.max(
            ...months.map(
                (month) =>
                    month.value
            ),
            10
        );

    const niceMax =
        getNiceChartMax(
            maxValue
        );

    const steps = 5;

    ctx.font =
        "11px Inter, sans-serif";

    ctx.textAlign =
        "right";

    ctx.textBaseline =
        "middle";

    for (
        let i = 0;
        i <= steps;
        i++
    ) {
        const value =
            (niceMax / steps) *
            i;

        const y =
            padding.top +
            chartHeight -
            (value / niceMax) *
                chartHeight;

        ctx.strokeStyle =
            "#e5e7eb";

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(
            padding.left,
            y
        );

        ctx.lineTo(
            width -
                padding.right,
            y
        );

        ctx.stroke();

        ctx.fillStyle =
            "#6b7280";

        ctx.fillText(
            formatChartNumber(
                value
            ),
            padding.left - 10,
            y
        );
    }

    const points =
        months.map(
            (
                month,
                index
            ) => ({
                x:
                    padding.left +
                    getChartX(
                        index,
                        months.length,
                        chartWidth
                    ),

                y:
                    padding.top +
                    chartHeight -
                    (month.value /
                        niceMax) *
                        chartHeight
            })
        );

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "top";

    months.forEach(
        (
            month,
            index
        ) => {
            const point =
                points[index];

            ctx.fillStyle =
                "#6b7280";

            ctx.fillText(
                month.label,
                point.x,
                height -
                    padding.bottom +
                    12
            );
        }
    );

    if (points.length) {
        ctx.beginPath();

        points.forEach(
            (
                point,
                index
            ) => {
                if (index === 0) {
                    ctx.moveTo(
                        point.x,
                        point.y
                    );
                } else {
                    ctx.lineTo(
                        point.x,
                        point.y
                    );
                }
            }
        );

        ctx.strokeStyle =
            "#2563eb";

        ctx.lineWidth = 3;

        ctx.lineJoin =
            "round";

        ctx.lineCap =
            "round";

        ctx.stroke();

        points.forEach(
            (point) => {
                ctx.beginPath();

                ctx.arc(
                    point.x,
                    point.y,
                    4,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    "#ffffff";

                ctx.fill();

                ctx.strokeStyle =
                    "#2563eb";

                ctx.lineWidth = 2;

                ctx.stroke();
            }
        );
    }
}

function getChartX(
    index,
    count,
    chartWidth
) {
    if (count <= 1) {
        return chartWidth / 2;
    }

    return (
        index /
        (count - 1)
    ) * chartWidth;
}

function getNiceChartMax(
    value
) {
    if (value <= 10) {
        return 10;
    }

    const magnitude =
        Math.pow(
            10,
            Math.floor(
                Math.log10(value)
            )
        );

    const normalized =
        value / magnitude;

    let nice;

    if (normalized <= 1) {
        nice = 1;
    } else if (
        normalized <= 2
    ) {
        nice = 2;
    } else if (
        normalized <= 5
    ) {
        nice = 5;
    } else {
        nice = 10;
    }

    return (
        nice * magnitude
    );
}

function formatChartNumber(
    value
) {
    if (value >= 1000000) {
        return (
            (
                value / 1000000
            )
                .toFixed(1)
                .replace(".0", "") +
            "M"
        );
    }

    if (value >= 1000) {
        return (
            (
                value / 1000
            )
                .toFixed(1)
                .replace(".0", "") +
            "K"
        );
    }

    return Math.round(
        value
    ).toString();
}


/* =========================================================
   SEARCH BARS
   ========================================================= */

function createAdminSearchBars() {
    createSearchBar(
        "productsPage",
        "products",
        "Search products..."
    );

    createSearchBar(
        "ordersPage",
        "orders",
        "Search orders..."
    );

    createSearchBar(
        "customersPage",
        "customers",
        "Search customers..."
    );

    createSearchBar(
        "reviewsPage",
        "reviews",
        "Search reviews..."
    );

    createSearchBar(
        "feedbackPage",
        "feedback",
        "Search feedback..."
    );
}

function createSearchBar(
    pageId,
    stateKey,
    placeholder
) {
    const page =
        document.getElementById(
            pageId
        );

    if (!page) {
        return;
    }

    const toolbar =
        page.querySelector(
            ".page-toolbar"
        );

    if (!toolbar) {
        return;
    }

    if (
        toolbar.querySelector(
            `.admin-search-box[data-search="${stateKey}"]`
        )
    ) {
        return;
    }

    const searchBox =
        document.createElement(
            "div"
        );

    searchBox.className =
        "admin-search-box";

    searchBox.dataset.search =
        stateKey;

    searchBox.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>

        <input
            type="search"
            class="admin-search-input"
            placeholder="${escapeHtml(
                placeholder
            )}"
            autocomplete="off"
        >

        <button
            type="button"
            class="admin-search-clear"
            aria-label="Clear search"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    toolbar.appendChild(
        searchBox
    );

    const input =
        searchBox.querySelector(
            ".admin-search-input"
        );

    const clear =
        searchBox.querySelector(
            ".admin-search-clear"
        );

    if (!input) {
        return;
    }

    input.addEventListener(
        "input",
        () => {
            adminSearchState[
                stateKey
            ] =
                input.value
                    .trim()
                    .toLowerCase();

            searchBox.classList.toggle(
                "has-value",
                Boolean(
                    input.value
                )
            );

            renderSearchPage(
                stateKey
            );
        }
    );

    if (clear) {
        clear.addEventListener(
            "click",
            () => {
                input.value = "";

                adminSearchState[
                    stateKey
                ] = "";

                searchBox.classList.remove(
                    "has-value"
                );

                input.focus();

                renderSearchPage(
                    stateKey
                );
            }
        );
    }
}

function renderSearchPage(
    stateKey
) {
    switch (stateKey) {
        case "products":
            renderProducts();
            break;

        case "orders":
            renderOrders();
            break;

        case "customers":
            renderCustomers();
            break;

        case "reviews":
            renderReviews();
            break;

        case "feedback":
            renderFeedback();
            break;
    }
}


/* =========================================================
   PRODUCTS
   ========================================================= */

function renderProducts() {
    renderEnhancedProducts();
}

function renderEnhancedProducts() {
    const table =
        document.getElementById(
            "productsTable"
        );

    if (!table) {
        return;
    }

    const products =
        normalizeProductsForStock(
            getProducts()
        );

    const search =
        adminSearchState.products;

    const settings =
        getSettings();

    const threshold =
        Math.max(
            0,
            Number(
                settings.lowStockThreshold
            ) || 0
        );

    const filtered =
        products.filter(
            (product) => {
                if (!search) {
                    return true;
                }

                const searchable =
                    [
                        product.id,
                        product.name,
                        product.category,
                        product.categoryName,
                        product.price,
                        product.oldPrice,
                        product.stock,
                        product.status,
                        product.description
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    search
                );
            }
        );

    const tableElement =
        table.closest("table");

    if (tableElement) {
        const thead =
            tableElement.querySelector(
                "thead"
            );

        if (thead) {
            thead.innerHTML = `
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            `;
        }
    }

    if (!filtered.length) {
        table.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    class="empty-table"
                >
                    <i class="fa-solid fa-box-open"></i>
                    <p>
                        ${
                            search
                                ? "No products match your search."
                                : "No products found."
                        }
                    </p>
                </td>
            </tr>
        `;

        return;
    }

    table.innerHTML =
        filtered
            .map(
                (product) => {
                    const stock =
                        getProductStock(
                            product
                        );

                    const isOut =
                        stock <= 0;

                    const isLow =
                        !isOut &&
                        stock <=
                            threshold;

                    const isNew =
                        productIsNew(
                            product
                        );

                    const isSale =
                        productHasSale(
                            product
                        );

                    let status =
                        product.status ||
                        "Available";

                    if (isOut) {
                        status =
                            "Out of Stock";
                    }

                    const statusClass =
                        getAdminStatusClass(
                            status
                        );

                    return `
                        <tr
                            data-product-id="${escapeHtml(
                                String(
                                    product.id ??
                                        ""
                                )
                            )}"
                        >

                            <td>
                                <div class="product-table-info">

                                    ${
                                        product.image
                                            ? `
                                                <img
                                                    src="${escapeHtml(
                                                        product.image
                                                    )}"
                                                    alt="${escapeHtml(
                                                        product.name ||
                                                            "Product"
                                                    )}"
                                                    loading="lazy"
                                                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                                                >

                                                <div
                                                    class="product-placeholder"
                                                    style="display:none;"
                                                >
                                                    <i class="fa-solid fa-image"></i>
                                                </div>
                                            `
                                            : `
                                                <div class="product-placeholder">
                                                    <i class="fa-solid fa-image"></i>
                                                </div>
                                            `
                                    }

                                    <div>
                                        <strong>
                                            ${escapeHtml(
                                                product.name ||
                                                    "Unnamed Product"
                                            )}
                                        </strong>

                                        <small>
                                            ${escapeHtml(
                                                truncateText(
                                                    product.description ||
                                                        "",
                                                    80
                                                )
                                            )}
                                        </small>

                                        <div class="product-badges">

                                            ${
                                                isNew
                                                    ? `
                                                        <span class="product-badge new">
                                                            NEW
                                                        </span>
                                                    `
                                                    : ""
                                            }

                                            ${
                                                isSale
                                                    ? `
                                                        <span class="product-badge sale">
                                                            SALE
                                                        </span>
                                                    `
                                                    : ""
                                            }

                                            ${
                                                isOut
                                                    ? `
                                                        <span class="product-badge out-of-stock">
                                                            OUT OF STOCK
                                                        </span>
                                                    `
                                                    : ""
                                            }

                                        </div>
                                    </div>

                                </div>
                            </td>

                            <td>
                                ${escapeHtml(
                                    product.categoryName ||
                                        product.category ||
                                        "Uncategorized"
                                )}
                            </td>

                            <td>
                                <strong>
                                    $${(
                                        Number(
                                            product.price
                                        ) || 0
                                    ).toFixed(2)}
                                </strong>

                                ${
                                    Number(
                                        product.oldPrice
                                    ) >
                                    Number(
                                        product.price
                                    )
                                        ? `
                                            <small
                                                style="
                                                    display:block;
                                                    color:#9ca3af;
                                                    text-decoration:line-through;
                                                    margin-top:3px;
                                                "
                                            >
                                                $${(
                                                    Number(
                                                        product.oldPrice
                                                    ) || 0
                                                ).toFixed(2)}
                                            </small>
                                        `
                                        : ""
                                }
                            </td>

                            <td>
                                <div class="stock-info">

                                    <span class="stock-value">
                                        ${stock}
                                    </span>

                                    ${
                                        isOut
                                            ? `
                                                <span class="stock-out">
                                                    Out of stock
                                                </span>
                                            `
                                            : isLow
                                                ? `
                                                    <span class="stock-low">
                                                        Low stock
                                                    </span>
                                                `
                                                : `
                                                    <span class="stock-good">
                                                        In stock
                                                    </span>
                                                `
                                    }

                                </div>
                            </td>

                            <td>
                                <span class="status-badge ${statusClass}">
                                    ${escapeHtml(
                                        status
                                    )}
                                </span>
                            </td>

                            <td>
                                <div class="table-actions">

                                    <button
                                        type="button"
                                        class="table-action edit-product"
                                        data-id="${escapeHtml(
                                            String(
                                                product.id ??
                                                    ""
                                            )
                                        )}"
                                        title="Edit product"
                                    >
                                        <i class="fa-solid fa-pen"></i>
                                    </button>

                                    <button
                                        type="button"
                                        class="table-action delete delete-product"
                                        data-id="${escapeHtml(
                                            String(
                                                product.id ??
                                                    ""
                                            )
                                        )}"
                                        title="Delete product"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>

                                </div>
                            </td>

                        </tr>
                    `;
                }
            )
            .join("");
}


/* =========================================================
   PRODUCT EVENTS
   ========================================================= */

const productsTable =
    document.getElementById(
        "productsTable"
    );

if (productsTable) {
    productsTable.addEventListener(
        "click",
        (event) => {
            const editButton =
                event.target.closest(
                    ".edit-product"
                );

            const deleteButton =
                event.target.closest(
                    ".delete-product"
                );

            if (editButton) {
                openProductForm(
                    editButton.dataset.id
                );
                return;
            }

            if (deleteButton) {
                deleteProduct(
                    deleteButton.dataset.id
                );
            }
        }
    );
}


/* =========================================================
   PRODUCT FORM
   ========================================================= */

function openProductForm(
    productId = null
) {
    const modal =
        document.getElementById(
            "productFormModal"
        );

    const form =
        document.getElementById(
            "productForm"
        );

    if (!modal || !form) {
        return;
    }

    form.reset();

    const idInput =
        document.getElementById(
            "productId"
        );

    const title =
        document.getElementById(
            "productFormTitle"
        );

    if (productId !== null) {
        const product =
            getProducts().find(
                (item) =>
                    String(item.id) ===
                    String(productId)
            );

        if (!product) {
            showNotification(
                "Product not found.",
                "error"
            );

            return;
        }

        setInputValue(
            "productId",
            product.id
        );

        setInputValue(
            "productName",
            product.name
        );

        setInputValue(
            "productCategory",
            product.category
        );

        setInputValue(
            "productCategoryName",
            product.categoryName
        );

        setInputValue(
            "productPrice",
            product.price
        );

        setInputValue(
            "productOldPrice",
            product.oldPrice
        );

        setInputValue(
            "productDiscount",
            product.discount
        );

        setInputValue(
            "productStatus",
            product.status
        );

        setInputValue(
            "productStock",
            getProductStock(
                product
            )
        );

        setInputValue(
            "productImage",
            product.image
        );

        setInputValue(
            "productDescription",
            product.description
        );

        setInputValue(
            "productSpecs",
            formatSpecifications(
                product.specs
            )
        );

        if (title) {
            title.textContent =
                "Edit Product";
        }
    } else {
        if (idInput) {
            idInput.value = "";
        }

        setInputValue(
            "productStatus",
            "available"
        );

        setInputValue(
            "productStock",
            0
        );

        if (title) {
            title.textContent =
                "Add Product";
        }
    }

    modal.classList.add(
        "active"
    );

    document.body.classList.add(
        "modal-open"
    );
}

function closeProductForm() {
    const modal =
        document.getElementById(
            "productFormModal"
        );

    if (modal) {
        modal.classList.remove(
            "active"
        );
    }

    document.body.classList.remove(
        "modal-open"
    );
}

function setInputValue(
    id,
    value
) {
    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    element.value =
        value === undefined ||
        value === null
            ? ""
            : value;
}


/* =========================================================
   ADD PRODUCT BUTTON
   ========================================================= */

const addProductBtn =
    document.getElementById(
        "addProductBtn"
    );

if (addProductBtn) {
    addProductBtn.addEventListener(
        "click",
        () => {
            openProductForm();
        }
    );
}


/* =========================================================
   PRODUCT FORM SUBMIT
   ========================================================= */

const productForm =
    document.getElementById(
        "productForm"
    );

if (productForm) {
    productForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const products =
                getProducts();

            const id =
                document.getElementById(
                    "productId"
                )?.value.trim();

            const name =
                document.getElementById(
                    "productName"
                )?.value.trim();

            const category =
                document.getElementById(
                    "productCategory"
                )?.value.trim();

            const categoryName =
                document.getElementById(
                    "productCategoryName"
                )?.value.trim();

            const price =
                Number(
                    document.getElementById(
                        "productPrice"
                    )?.value
                );

            const oldPrice =
                Number(
                    document.getElementById(
                        "productOldPrice"
                    )?.value
                ) || 0;

            const discount =
                document.getElementById(
                    "productDiscount"
                )?.value.trim();

            const status =
                document.getElementById(
                    "productStatus"
                )?.value ||
                "available";

            const stock =
                Math.max(
                    0,
                    Number(
                        document.getElementById(
                            "productStock"
                        )?.value
                    ) || 0
                );

            const image =
                document.getElementById(
                    "productImage"
                )?.value.trim();

            const description =
                document.getElementById(
                    "productDescription"
                )?.value.trim();

            const specsText =
                document.getElementById(
                    "productSpecs"
                )?.value.trim();

            if (!name) {
                showNotification(
                    "Please enter a product name.",
                    "error"
                );

                return;
            }

            if (
                !Number.isFinite(
                    price
                ) ||
                price < 0
            ) {
                showNotification(
                    "Please enter a valid price.",
                    "error"
                );

                return;
            }

            const specifications =
                parseSpecifications(
                    specsText
                );

            const productData = {
                name,
                category,
                categoryName,
                price,
                oldPrice,
                discount,
                status,
                stock,
                quantity: stock,
                image,
                description,
                specs: specifications
            };

            if (id) {
                const index =
                    products.findIndex(
                        (product) =>
                            String(
                                product.id
                            ) ===
                            String(id)
                    );

                if (index === -1) {
                    showNotification(
                        "Product not found.",
                        "error"
                    );

                    return;
                }

                products[index] = {
                    ...products[index],
                    ...productData,
                    id:
                        products[index].id
                };

                saveProducts(
                    products
                );

                showNotification(
                    "Product updated successfully."
                );
            } else {
                const newProduct = {
                    ...productData,
                    id: Date.now(),
                    createdAt:
                        new Date().toISOString()
                };

                products.push(
                    newProduct
                );

                saveProducts(
                    products
                );

                showNotification(
                    "Product added successfully."
                );
            }

            closeProductForm();

            renderProducts();
            renderDashboard();
        }
    );
}


/* =========================================================
   PRODUCT DELETE
   ========================================================= */

function deleteProduct(
    productId
) {
    const products =
        getProducts();

    const product =
        products.find(
            (item) =>
                String(item.id) ===
                String(productId)
        );

    if (!product) {
        return;
    }

    const confirmed =
        window.confirm(
            `Delete "${product.name}"?`
        );

    if (!confirmed) {
        return;
    }

    const updated =
        products.filter(
            (item) =>
                String(item.id) !==
                String(productId)
        );

    saveProducts(
        updated
    );

    showNotification(
        "Product deleted successfully."
    );

    renderProducts();
    renderDashboard();
}


/* =========================================================
   ORDERS
   ========================================================= */

function renderOrders() {
    renderEnhancedOrders();
}

function renderEnhancedOrders() {
    const table =
        document.getElementById(
            "ordersTable"
        );

    if (!table) {
        return;
    }

    const orders =
        getOrders();

    const search =
        adminSearchState.orders;

    const filtered =
        orders.filter(
            (order) => {
                if (!search) {
                    return true;
                }

                const searchable =
                    [
                        order.id,
                        order.orderId,
                        order.customer,
                        order.customerName,
                        order.name,
                        order.email,
                        order.total,
                        order.amount,
                        order.status,
                        order.paymentStatus,
                        order.paymentMethod,
                        order.date,
                        order.createdAt
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    search
                );
            }
        );

    const sorted =
        [...filtered].sort(
            (a, b) =>
                getOrderTimestamp(
                    b
                ) -
                getOrderTimestamp(
                    a
                )
        );

    const tableElement =
        table.closest("table");

    if (tableElement) {
        const thead =
            tableElement.querySelector(
                "thead"
            );

        if (thead) {
            thead.innerHTML = `
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            `;
        }
    }

    if (!sorted.length) {
        table.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    class="empty-table"
                >
                    <i class="fa-solid fa-receipt"></i>

                    <p>
                        ${
                            search
                                ? "No orders match your search."
                                : "No orders found."
                        }
                    </p>
                </td>
            </tr>
        `;

        return;
    }

    table.innerHTML =
        sorted
            .map(
                (order) => {
                    const orderId =
                        order.id ||
                        order.orderId ||
                        "N/A";

                    const customer =
                        order.customerName ||
                        order.name ||
                        order.customer ||
                        "Customer";

                    const email =
                        order.email ||
                        order.customerEmail ||
                        "";

                    const total =
                        getOrderTotal(
                            order
                        );

                    const status =
                        normalizeOrderStatus(
                            order.status
                        );

                    const items =
                        getOrderItems(
                            order
                        );

                    const date =
                        formatAdminDate(
                            getOrderDate(
                                order
                            )
                        );

                    return `
                        <tr
                            data-order-id="${escapeHtml(
                                String(
                                    orderId
                                )
                            )}"
                        >

                            <td>
                                <strong>
                                    ${escapeHtml(
                                        String(
                                            orderId
                                        )
                                    )}
                                </strong>
                            </td>

                            <td>
                                <div class="order-customer">

                                    <strong>
                                        ${escapeHtml(
                                            customer
                                        )}
                                    </strong>

                                    ${
                                        email
                                            ? `
                                                <small>
                                                    ${escapeHtml(
                                                        email
                                                    )}
                                                </small>
                                            `
                                            : ""
                                    }

                                </div>
                            </td>

                            <td>
                                <div class="order-items-list">

                                    ${
                                        items.length
                                            ? items
                                                  .slice(
                                                      0,
                                                      3
                                                  )
                                                  .map(
                                                      (
                                                          item
                                                      ) => `
                                                        <div class="order-item-line">

                                                            ${escapeHtml(
                                                                item.name
                                                            )}

                                                            <small>
                                                                ×${item.quantity}
                                                            </small>

                                                        </div>
                                                    `
                                                  )
                                                  .join(
                                                      ""
                                                  )
                                            : `
                                                <span>
                                                    No item details
                                                </span>
                                            `
                                    }

                                    ${
                                        items.length >
                                        3
                                            ? `
                                                <small>
                                                    +${
                                                        items.length -
                                                        3
                                                    } more
                                                </small>
                                            `
                                            : ""
                                    }

                                </div>
                            </td>

                            <td>
                                <strong>
                                    $${total.toFixed(
                                        2
                                    )}
                                </strong>
                            </td>

                            <td>
                                <select
                                    class="admin-status-select order-status-select"
                                    data-order-id="${escapeHtml(
                                        String(
                                            orderId
                                        )
                                    )}"
                                >

                                    ${ORDER_STATUSES.map(
                                        (
                                            option
                                        ) =>
                                            `
                                                <option
                                                    value="${escapeHtml(
                                                        option
                                                    )}"
                                                    ${
                                                        option ===
                                                        status
                                                            ? "selected"
                                                            : ""
                                                    }
                                                >
                                                    ${escapeHtml(
                                                        option
                                                    )}
                                                </option>
                                            `
                                    ).join(
                                        ""
                                    )}

                                </select>
                            </td>

                            <td>
                                ${escapeHtml(
                                    date
                                )}
                            </td>

                        </tr>
                    `;
                }
            )
            .join("");
}


/* =========================================================
   ORDER STATUS EVENTS
   ========================================================= */

const ordersTable =
    document.getElementById(
        "ordersTable"
    );

if (ordersTable) {
    ordersTable.addEventListener(
        "change",
        (event) => {
            const select =
                event.target.closest(
                    ".order-status-select"
                );

            if (!select) {
                return;
            }

            updateOrderStatus(
                select.dataset.orderId,
                select.value
            );
        }
    );
}


/* =========================================================
   UPDATE ORDER STATUS
   ========================================================= */

function updateOrderStatus(
    orderId,
    newStatus
) {
    const orders =
        getOrders();

    const index =
        orders.findIndex(
            (order) =>
                String(
                    order.id ||
                        order.orderId
                ) ===
                String(orderId)
        );

    if (index === -1) {
        showNotification(
            "Order not found.",
            "error"
        );

        return;
    }

    const oldStatus =
        normalizeOrderStatus(
            orders[index].status
        );

    const normalized =
        normalizeOrderStatus(
            newStatus
        );

    orders[index] = {
        ...orders[index],
        status: normalized,
        updatedAt:
            new Date().toISOString()
    };

    saveOrders(
        orders
    );

    if (
        oldStatus !== normalized
    ) {
        createOrderStatusNotification(
            orders[index],
            normalized
        );
    }

    processNewOrderStock();

    renderOrders();
    renderDashboard();

    showNotification(
        `Order ${orderId} updated to ${normalized}.`
    );
}


/* =========================================================
   STOCK MANAGEMENT
   ========================================================= */

function getProductStock(
    product
) {
    const stock =
        Number(
            product?.stock ??
                product?.quantity ??
                0
        );

    return Number.isFinite(stock)
        ? Math.max(0, stock)
        : 0;
}

function normalizeProductsForStock(
    products
) {
    return products.map(
        (product) => {
            const stock =
                getProductStock(
                    product
                );

            return {
                ...product,
                stock,
                quantity:
                    Number.isFinite(
                        Number(
                            product.quantity
                        )
                    )
                        ? Math.max(
                              0,
                              Number(
                                  product.quantity
                              )
                          )
                        : stock
            };
        }
    );
}


/* =========================================================
   PROCESSED STOCK ORDERS
   ========================================================= */

function getProcessedStockOrders() {
    return safeGetArray(
        STOCK_PROCESSED_ORDERS_KEY
    );
}

function saveProcessedStockOrders(
    orders
) {
    safeSave(
        STOCK_PROCESSED_ORDERS_KEY,
        orders
    );
}

function markStockOrderProcessed(
    orderId
) {
    const processed =
        getProcessedStockOrders();

    if (
        processed.some(
            (id) =>
                String(id) ===
                String(orderId)
        )
    ) {
        return;
    }

    processed.push(
        String(orderId)
    );

    saveProcessedStockOrders(
        processed
    );
}


/* =========================================================
   RESTORED STOCK ORDERS
   ========================================================= */

function getRestoredStockOrders() {
    return safeGetArray(
        STOCK_RESTORED_ORDERS_KEY
    );
}

function saveRestoredStockOrders(
    orders
) {
    safeSave(
        STOCK_RESTORED_ORDERS_KEY,
        orders
    );
}

function markStockOrderRestored(
    orderId
) {
    const restored =
        getRestoredStockOrders();

    if (
        restored.some(
            (id) =>
                String(id) ===
                String(orderId)
        )
    ) {
        return;
    }

    restored.push(
        String(orderId)
    );

    saveRestoredStockOrders(
        restored
    );
}

function wasStockOrderRestored(
    orderId
) {
    return getRestoredStockOrders().some(
        (id) =>
            String(id) ===
            String(orderId)
    );
}


/* =========================================================
   PROCESS NEW ORDER STOCK
   ========================================================= */

function processNewOrderStock() {
    const settings =
        getSettings();

    if (
        settings.automaticStockDeduction !==
        true
    ) {
        return;
    }

    const orders =
        getOrders();

    const processed =
        getProcessedStockOrders();

    const products =
        getProducts();

    let changed = false;

    orders.forEach(
        (order) => {
            const orderId =
                order.id ||
                order.orderId;

            if (!orderId) {
                return;
            }

            const status =
                normalizeOrderStatus(
                    order.status
                );

            const alreadyProcessed =
                processed.some(
                    (id) =>
                        String(id) ===
                        String(orderId)
                );

            /*
             * Only confirmed/processing/
             * delivery/delivered orders
             * consume stock.
             */
            const shouldDeduct =
                [
                    "Confirmed",
                    "Processing",
                    "Out for Delivery",
                    "Delivered"
                ].includes(
                    status
                );

            if (
                !shouldDeduct
            ) {
                return;
            }

            if (
                alreadyProcessed
            ) {
                return;
            }

            const items =
                getOrderItems(
                    order
                );

            if (!items.length) {
                markStockOrderProcessed(
                    orderId
                );

                return;
            }

            items.forEach(
                (item) => {
                    const productId =
                        item.productId ??
                        item.id ??
                        item.productID;

                    if (
                        productId ===
                            undefined ||
                        productId ===
                            null
                    ) {
                        return;
                    }

                    const product =
                        products.find(
                            (p) =>
                                String(
                                    p.id
                                ) ===
                                String(
                                    productId
                                )
                        );

                    if (!product) {
                        return;
                    }

                    const quantity =
                        Math.max(
                            1,
                            Number(
                                item.quantity ??
                                    item.qty ??
                                    1
                            ) || 1
                        );

                    const currentStock =
                        getProductStock(
                            product
                        );

                    product.stock =
                        Math.max(
                            0,
                            currentStock -
                                quantity
                        );

                    product.quantity =
                        product.stock;

                    changed = true;
                }
            );

            markStockOrderProcessed(
                orderId
            );
        }
    );

    if (changed) {
        saveProducts(
            products
        );

        notifyLowStockProducts(
            products
        );
    }
}


/* =========================================================
   RESTORE STOCK AFTER CANCELLATION
   ========================================================= */

function restoreStockForCancelledOrder(
    order
) {
    const settings =
        getSettings();

    if (
        settings.automaticStockDeduction !==
        true
    ) {
        return;
    }

    const orderId =
        order?.id ||
        order?.orderId;

    if (!orderId) {
        return;
    }

    if (
        wasStockOrderRestored(
            orderId
        )
    ) {
        return;
    }

    const processed =
        getProcessedStockOrders();

    const wasProcessed =
        processed.some(
            (id) =>
                String(id) ===
                String(orderId)
        );

    if (!wasProcessed) {
        return;
    }

    const items =
        getOrderItems(
            order
        );

    if (!items.length) {
        markStockOrderRestored(
            orderId
        );

        return;
    }

    const products =
        getProducts();

    let changed = false;

    items.forEach(
        (item) => {
            const productId =
                item.productId ??
                item.id ??
                item.productID;

            if (
                productId ===
                    undefined ||
                productId === null
            ) {
                return;
            }

            const product =
                products.find(
                    (p) =>
                        String(
                            p.id
                        ) ===
                        String(
                            productId
                        )
                );

            if (!product) {
                return;
            }

            const quantity =
                Math.max(
                    1,
                    Number(
                        item.quantity ??
                            item.qty ??
                            1
                    ) || 1
                );

            product.stock =
                getProductStock(
                    product
                ) + quantity;

            product.quantity =
                product.stock;

            changed = true;
        }
    );

    if (changed) {
        saveProducts(
            products
        );
    }

    markStockOrderRestored(
        orderId
    );
}


/* =========================================================
   LOW STOCK NOTIFICATION
   ========================================================= */

function notifyLowStockProducts(
    products = getProducts()
) {
    const settings =
        getSettings();

    if (
        settings.notifyLowStock !==
        true
    ) {
        return;
    }

    const threshold =
        Math.max(
            0,
            Number(
                settings.lowStockThreshold
            ) || 0
        );

    const lowProducts =
        products.filter(
            (product) => {
                const stock =
                    getProductStock(
                        product
                    );

                return (
                    stock > 0 &&
                    stock <= threshold
                );
            }
        );

    if (!lowProducts.length) {
        return;
    }

    /*
     * Keep admin notification lightweight.
     * Do not create the same warning repeatedly
     * during every render.
     */
    const notifications =
        getNotifications();

    const today =
        new Date()
            .toISOString()
            .slice(0, 10);

    lowProducts.forEach(
        (product) => {
            const productId =
                String(
                    product.id
                );

            const exists =
                notifications.some(
                    (notification) =>
                        notification.type ===
                            "low_stock" &&
                        String(
                            notification.productId
                        ) ===
                            productId &&
                        String(
                            notification.createdAt ||
                                ""
                        ).startsWith(
                            today
                        )
                );

            if (exists) {
                return;
            }

            notifications.push({
                id:
                    Date.now() +
                    Math.floor(
                        Math.random() *
                            10000
                    ),

                type: "low_stock",

                productId:
                    product.id,

                message:
                    `${getProductName(product.id)} is low in stock (${getProductStock(product)} left).`,

                read: false,

                createdAt:
                    new Date().toISOString()
            });
        }
    );

    saveNotifications(
        notifications
    );
}


/* =========================================================
   ORDER ITEM NORMALIZATION
   ========================================================= */

function getOrderItems(order) {
    let items =
        order?.items ??
        order?.products ??
        order?.cart ??
        [];

    if (!Array.isArray(items)) {
        return [];
    }

    return items.map(
        (item) => {
            if (
                typeof item ===
                "string"
            ) {
                return {
                    name: item,
                    quantity: 1
                };
            }

            return {
                ...item,

                name:
                    item.name ||
                    item.productName ||
                    item.title ||
                    "Product",

                quantity:
                    Math.max(
                        1,
                        Number(
                            item.quantity ??
                                item.qty ??
                                1
                        ) || 1
                    )
            };
        }
    );
}


/* =========================================================
   ORDER CUSTOMER
   ========================================================= */

function getOrderCustomerUserId(
    order
) {
    return (
        order.userId ||
        order.customerId ||
        order.userID ||
        order.customerUserId ||
        null
    );
}


/* =========================================================
   CUSTOMER NOTIFICATION
   ========================================================= */

function createOrderStatusNotification(
    order,
    status
) {
    const settings =
        getSettings();

    if (
        settings.notifyOrderStatus !==
        true
    ) {
        return;
    }

    const notifications =
        getNotifications();

    const customerId =
        getOrderCustomerUserId(
            order
        );

    const orderId =
        order.id ||
        order.orderId ||
        "Order";

    notifications.push({
        id:
            Date.now() +
            Math.floor(
                Math.random() * 1000
            ),

        userId: customerId,

        email:
            order.email ||
            order.customerEmail ||
            null,

        orderId,

        type:
            "order_status",

        status,

        message:
            `Your order ${orderId} is now ${status}.`,

        read: false,

        createdAt:
            new Date().toISOString()
    });

    saveNotifications(
        notifications
    );
}


/* =========================================================
   CUSTOMERS
   ========================================================= */

function renderCustomers() {
    const table =
        document.getElementById(
            "customersTable"
        );

    if (!table) {
        return;
    }

    const users =
        getUsers();

    const customers =
        users.filter(
            (user) =>
                user.role !== "admin"
        );

    const search =
        adminSearchState.customers;

    const filtered =
        customers.filter(
            (customer) => {
                if (!search) {
                    return true;
                }

                const searchable =
                    [
                        customer.id,
                        customer.name,
                        customer.username,
                        customer.email,
                        customer.role,
                        customer.createdAt,
                        customer.registeredAt
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    search
                );
            }
        );

    if (!filtered.length) {
        table.innerHTML = `
            <tr>
                <td
                    colspan="4"
                    class="empty-table"
                >
                    <i class="fa-solid fa-users"></i>

                    <p>
                        ${
                            search
                                ? "No customers match your search."
                                : "No customers found."
                        }
                    </p>
                </td>
            </tr>
        `;

        return;
    }

    table.innerHTML =
        filtered
            .map(
                (customer) => {
                    const name =
                        customer.name ||
                        customer.username ||
                        "Customer";

                    const registered =
                        customer.createdAt ||
                        customer.registeredAt;

                    return `
                        <tr>

                            <td>
                                <strong>
                                    ${escapeHtml(
                                        name
                                    )}
                                </strong>
                            </td>

                            <td>
                                ${escapeHtml(
                                    customer.email ||
                                        "-"
                                )}
                            </td>

                            <td>
                                <span class="status-badge available">
                                    Customer
                                </span>
                            </td>

                            <td>
                                ${escapeHtml(
                                    formatAdminDate(
                                        registered
                                            ? new Date(
                                                  registered
                                              )
                                            : null
                                    )
                                )}
                            </td>

                        </tr>
                    `;
                }
            )
            .join("");
}


/* =========================================================
   REVIEWS PAGE
   ========================================================= */

function renderReviews() {
    const page =
        document.getElementById(
            "reviewsPage"
        );

    if (!page) {
        return;
    }

    const reviews =
        getReviews();

    const search =
        adminSearchState.reviews;

    const filtered =
        reviews.filter(
            (review) => {
                if (!search) {
                    return true;
                }

                const searchable =
                    [
                        review.id,
                        review.productName,
                        review.productId,
                        review.customerName,
                        review.name,
                        review.email,
                        review.rating,
                        review.review,
                        review.comment,
                        review.text,
                        review.status
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    search
                );
            }
        );

    const container =
        page.querySelector(
            ".management-page-content"
        );

    if (!container) {
        return;
    }

    /*
     * No extra H2 here.
     * The page toolbar already contains
     * the Reviews title.
     */
    container.innerHTML = `
        <div class="management-card">

            <div class="management-card-header">
                <div>
                    <p>
                        Approve, reject or delete product reviews.
                    </p>
                </div>
            </div>

            <div class="table-wrapper">

                <table>

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        ${
                            filtered.length
                                ? filtered
                                      .map(
                                          (
                                              review
                                          ) =>
                                              renderReviewRow(
                                                  review
                                              )
                                      )
                                      .join(
                                          ""
                                      )
                                : `
                                    <tr>
                                        <td
                                            colspan="7"
                                            class="empty-table"
                                        >
                                            <i class="fa-solid fa-star"></i>

                                            <p>
                                                ${
                                                    search
                                                        ? "No reviews match your search."
                                                        : "No reviews found."
                                                }
                                            </p>
                                        </td>
                                    </tr>
                                `
                        }

                    </tbody>

                </table>

            </div>

        </div>
    `;
}

function renderReviewRow(
    review
) {
    const status =
        String(
            review.status ||
                "pending"
        ).toLowerCase();

    const rating =
        Math.min(
            5,
            Math.max(
                0,
                Number(
                    review.rating
                ) || 0
            )
        );

    const stars =
        Array.from(
            {
                length: 5
            },
            (_, index) =>
                `
                    <i class="fa-${
                        index < rating
                            ? "solid"
                            : "regular"
                    } fa-star"></i>
                `
        ).join("");

    return `
        <tr>

            <td>
                <div class="review-product">

                    <strong>
                        ${escapeHtml(
                            review.productName ||
                                getProductName(
                                    review.productId
                                )
                        )}
                    </strong>

                    <small>
                        ${escapeHtml(
                            String(
                                review.productId ||
                                    ""
                            )
                        )}
                    </small>

                </div>
            </td>

            <td>
                <div class="review-customer">

                    <strong>
                        ${escapeHtml(
                            review.customerName ||
                                review.name ||
                                "Customer"
                        )}
                    </strong>

                    <small>
                        ${escapeHtml(
                            review.email ||
                                ""
                        )}
                    </small>

                </div>
            </td>

            <td>
                <div class="review-rating">

                    ${stars}

                    <span>
                        ${rating}/5
                    </span>

                </div>
            </td>

            <td>
                <div class="review-text">
                    ${escapeHtml(
                        review.review ||
                            review.comment ||
                            review.text ||
                            ""
                    )}
                </div>
            </td>

            <td>
                <span class="status-badge ${getAdminStatusClass(
                    status
                )}">
                    ${escapeHtml(
                        formatReviewStatus(
                            status
                        )
                    )}
                </span>
            </td>

            <td>
                <span class="review-date">
                    ${escapeHtml(
                        formatAdminDate(
                            getReviewDate(
                                review
                            )
                        )
                    )}
                </span>
            </td>

            <td>
                <div class="table-actions">

                    ${
                        status !==
                        "approved"
                            ? `
                                <button
                                    type="button"
                                    class="table-action approve review-approve"
                                    data-id="${escapeHtml(
                                        String(
                                            review.id
                                        )
                                    )}"
                                    title="Approve"
                                >
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            `
                            : ""
                    }

                    ${
                        status !==
                        "rejected"
                            ? `
                                <button
                                    type="button"
                                    class="table-action reject review-reject"
                                    data-id="${escapeHtml(
                                        String(
                                            review.id
                                        )
                                    )}"
                                    title="Reject"
                                >
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            `
                            : ""
                    }

                    <button
                        type="button"
                        class="table-action delete review-delete"
                        data-id="${escapeHtml(
                            String(
                                review.id
                            )
                        )}"
                        title="Delete"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </td>

        </tr>
    `;
}


/* =========================================================
   REVIEW EVENTS
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {
        const approve =
            event.target.closest(
                ".review-approve"
            );

        const reject =
            event.target.closest(
                ".review-reject"
            );

        const deleteButton =
            event.target.closest(
                ".review-delete"
            );

        if (approve) {
            updateReviewStatus(
                approve.dataset.id,
                "approved"
            );

            return;
        }

        if (reject) {
            updateReviewStatus(
                reject.dataset.id,
                "rejected"
            );

            return;
        }

        if (deleteButton) {
            deleteReview(
                deleteButton.dataset.id
            );
        }
    }
);


/* =========================================================
   REVIEW STATUS
   ========================================================= */

function updateReviewStatus(
    reviewId,
    status
) {
    const reviews =
        getReviews();

    const index =
        reviews.findIndex(
            (review) =>
                String(
                    review.id
                ) ===
                String(reviewId)
        );

    if (index === -1) {
        return;
    }

    reviews[index] = {
        ...reviews[index],
        status,
        updatedAt:
            new Date().toISOString()
    };

    saveReviews(
        reviews
    );

    renderReviews();

    showNotification(
        `Review ${status}.`
    );
}

function deleteReview(
    reviewId
) {
    const confirmed =
        window.confirm(
            "Delete this review?"
        );

    if (!confirmed) {
        return;
    }

    const reviews =
        getReviews();

    const updated =
        reviews.filter(
            (review) =>
                String(
                    review.id
                ) !==
                String(reviewId)
        );

    saveReviews(
        updated
    );

    renderReviews();

    showNotification(
        "Review deleted."
    );
}


/* =========================================================
   FEEDBACK PAGE
   ========================================================= */

function renderFeedback() {
    const page =
        document.getElementById(
            "feedbackPage"
        );

    if (!page) {
        return;
    }

    const feedback =
        getFeedback();

    const search =
        adminSearchState.feedback;

    const filtered =
        feedback.filter(
            (item) => {
                if (!search) {
                    return true;
                }

                const searchable =
                    [
                        item.id,
                        item.customerName,
                        item.name,
                        item.email,
                        item.rating,
                        item.message,
                        item.feedback,
                        item.comment,
                        item.status
                    ]
                        .join(" ")
                        .toLowerCase();

                return searchable.includes(
                    search
                );
            }
        );

    const container =
        page.querySelector(
            ".management-page-content"
        );

    if (!container) {
        return;
    }

    /*
     * No duplicate Website Feedback H2.
     */
    container.innerHTML = `
        <div class="management-card">

            <div class="management-card-header">
                <div>
                    <p>
                        Review customer feedback about your store.
                    </p>
                </div>
            </div>

            <div class="table-wrapper">

                <table>

                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Rating</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        ${
                            filtered.length
                                ? filtered
                                      .map(
                                          (
                                              item
                                          ) =>
                                              renderFeedbackRow(
                                                  item
                                              )
                                      )
                                      .join(
                                          ""
                                      )
                                : `
                                    <tr>
                                        <td
                                            colspan="6"
                                            class="empty-table"
                                        >
                                            <i class="fa-solid fa-comments"></i>

                                            <p>
                                                ${
                                                    search
                                                        ? "No feedback matches your search."
                                                        : "No feedback found."
                                                }
                                            </p>
                                        </td>
                                    </tr>
                                `
                        }

                    </tbody>

                </table>

            </div>

        </div>
    `;
}

function renderFeedbackRow(
    item
) {
    const rating =
        Math.min(
            5,
            Math.max(
                0,
                Number(
                    item.rating
                ) || 0
            )
        );

    const status =
        String(
            item.status ||
                "new"
        ).toLowerCase();

    return `
        <tr>

            <td>
                <div class="feedback-customer">

                    <strong>
                        ${escapeHtml(
                            item.customerName ||
                                item.name ||
                                "Customer"
                        )}
                    </strong>

                    <small>
                        ${escapeHtml(
                            item.email ||
                                ""
                        )}
                    </small>

                </div>
            </td>

            <td>
                <div class="feedback-rating">

                    ${Array.from(
                        {
                            length: 5
                        },
                        (_, index) =>
                            `
                                <i class="fa-${
                                    index < rating
                                        ? "solid"
                                        : "regular"
                                } fa-star"></i>
                            `
                    ).join("")}

                </div>
            </td>

            <td>
                <div class="feedback-message">
                    ${escapeHtml(
                        item.message ||
                            item.feedback ||
                            item.comment ||
                            ""
                    )}
                </div>
            </td>

            <td>
                <span class="status-badge ${getAdminStatusClass(
                    status
                )}">
                    ${escapeHtml(
                        formatFeedbackStatus(
                            status
                        )
                    )}
                </span>
            </td>

            <td>
                ${escapeHtml(
                    formatAdminDate(
                        getFeedbackDate(
                            item
                        )
                    )
                )}
            </td>

            <td>
                <div class="table-actions">

                    <button
                        type="button"
                        class="table-action delete feedback-delete"
                        data-id="${escapeHtml(
                            String(
                                item.id
                            )
                        )}"
                        title="Delete"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            </td>

        </tr>
    `;
}


/* =========================================================
   FEEDBACK DELETE
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {
        const deleteButton =
            event.target.closest(
                ".feedback-delete"
            );

        if (!deleteButton) {
            return;
        }

        const confirmed =
            window.confirm(
                "Delete this feedback?"
            );

        if (!confirmed) {
            return;
        }

        const feedback =
            getFeedback();

        const updated =
            feedback.filter(
                (item) =>
                    String(
                        item.id
                    ) !==
                    String(
                        deleteButton.dataset
                            .id
                    )
            );

        saveFeedback(
            updated
        );

        renderFeedback();

        showNotification(
            "Feedback deleted."
        );
    }
);


/* =========================================================
   MANAGEMENT PAGES
   ========================================================= */

function ensureManagementPages() {
    const sidebar =
        document.querySelector(
            ".admin-nav"
        );

    if (!sidebar) {
        return;
    }

    createManagementNavButton(
        sidebar,
        "reviews",
        "fa-star",
        "Reviews"
    );

    createManagementNavButton(
        sidebar,
        "feedback",
        "fa-comments",
        "Feedback"
    );

    createManagementNavButton(
        sidebar,
        "settings",
        "fa-gear",
        "Settings"
    );

    createManagementPage(
        "reviews"
    );

    createManagementPage(
        "feedback"
    );

    createManagementPage(
        "settings"
    );

    bindAllNavButtons();
}

function createManagementNavButton(
    sidebar,
    pageName,
    icon,
    label
) {
    if (
        sidebar.querySelector(
            `[data-page="${pageName}"]`
        )
    ) {
        return;
    }

    const button =
        document.createElement(
            "button"
        );

    button.type =
        "button";

    button.className =
        "admin-nav-btn";

    button.dataset.page =
        pageName;

    button.innerHTML = `
        <i class="fa-solid ${escapeHtml(
            icon
        )}"></i>

        <span>
            ${escapeHtml(
                label
            )}
        </span>
    `;

    sidebar.appendChild(
        button
    );
}

function createManagementPage(
    pageName
) {
    if (
        document.getElementById(
            `${pageName}Page`
        )
    ) {
        return;
    }

    const main =
        document.querySelector(
            ".admin-main"
        );

    if (!main) {
        return;
    }

    const info =
        pageInfo[pageName];

    if (!info) {
        return;
    }

    const page =
        document.createElement(
            "section"
        );

    page.id =
        `${pageName}Page`;

    page.className =
        "admin-page";

    page.innerHTML = `
        <div class="page-toolbar">

            <div>
                <h2>
                    ${escapeHtml(
                        info.title
                    )}
                </h2>

                <p>
                    ${escapeHtml(
                        info.subtitle
                    )}
                </p>
            </div>

        </div>

        <div class="management-page-content"></div>
    `;

    main.appendChild(
        page
    );
}


/* =========================================================
   SETTINGS PAGE
   ========================================================= */

function renderSettings() {
    const page =
        document.getElementById(
            "settingsPage"
        );

    if (!page) {
        return;
    }

    const settings =
        getSettings();

    const users =
        getUsers();

    currentUser =
        getCurrentUser() ||
        currentUser;

    const admin =
        users.find(
            (user) =>
                user.role === "admin" &&
                (
                    (
                        currentUser?.id !==
                            undefined &&
                        String(
                            user.id
                        ) ===
                            String(
                                currentUser.id
                            )
                    ) ||
                    (
                        currentUser?.email &&
                        user.email ===
                            currentUser.email
                    )
                )
        ) ||
        currentUser ||
        {};

    const container =
        page.querySelector(
            ".management-page-content"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="settings-layout">

            <!-- STORE INFORMATION -->
            <div class="settings-card">

                <div class="settings-section">

                    <div class="settings-section-header">
                        <h3>Store Information</h3>

                        <p>
                            Manage the basic information displayed by TechNova.
                        </p>
                    </div>

                    <div class="settings-toggle-grid">

                        <div class="settings-toggle">
                            <div>
                                <strong>Store Name</strong>
                                <small>
                                    Name displayed throughout the store.
                                </small>
                            </div>

                            <input
                                id="settingStoreName"
                                class="setting-input"
                                type="text"
                                value="${escapeHtml(
                                    settings.storeName
                                )}"
                            >
                        </div>

                        <div class="settings-toggle">
                            <div>
                                <strong>Store Status</strong>
                                <small>
                                    Choose whether your store is online.
                                </small>
                            </div>

                            <select
                                id="settingStoreStatus"
                                class="setting-input"
                            >
                                <option
                                    value="Online"
                                    ${
                                        settings.storeStatus ===
                                        "Online"
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    Online
                                </option>

                                <option
                                    value="Offline"
                                    ${
                                        settings.storeStatus ===
                                        "Offline"
                                            ? "selected"
                                            : ""
                                    }
                                >
                                    Offline
                                </option>
                            </select>
                        </div>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Store Description
                            </strong>

                            <small>
                                Short description for your store.
                            </small>
                        </div>

                        <textarea
                            id="settingStoreDescription"
                            class="setting-input"
                            rows="3"
                        >${escapeHtml(
                            settings.storeDescription
                        )}</textarea>

                    </div>

                    <div class="settings-toggle-grid">

                        <div class="settings-toggle">
                            <div>
                                <strong>Contact Phone</strong>
                                <small>
                                    Store contact number.
                                </small>
                            </div>

                            <input
                                id="settingContactPhone"
                                class="setting-input"
                                type="text"
                                value="${escapeHtml(
                                    settings.contactPhone
                                )}"
                            >
                        </div>

                        <div class="settings-toggle">
                            <div>
                                <strong>Contact Email</strong>
                                <small>
                                    Store contact email.
                                </small>
                            </div>

                            <input
                                id="settingContactEmail"
                                class="setting-input"
                                type="email"
                                value="${escapeHtml(
                                    settings.contactEmail
                                )}"
                            >
                        </div>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Store Address
                            </strong>

                            <small>
                                Physical store address.
                            </small>
                        </div>

                        <input
                            id="settingStoreAddress"
                            class="setting-input"
                            type="text"
                            value="${escapeHtml(
                                settings.storeAddress
                            )}"
                        >

                    </div>

                </div>

            </div>


            <!-- ORDERS & STOCK -->
            <div class="settings-card">

                <div class="settings-section">

                    <div class="settings-section-header">
                        <h3>Orders & Stock</h3>

                        <p>
                            Control stock and order behavior.
                        </p>
                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Low Stock Alert
                            </strong>

                            <small>
                                Products at or below this number are considered low stock.
                            </small>
                        </div>

                        <input
                            id="settingLowStock"
                            class="setting-input"
                            type="number"
                            min="0"
                            step="1"
                            value="${Math.max(
                                0,
                                Number(
                                    settings.lowStockThreshold
                                ) || 0
                            )}"
                        >

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Default Delivery Fee
                            </strong>

                            <small>
                                Default delivery fee for new orders.
                            </small>
                        </div>

                        <input
                            id="settingDeliveryFee"
                            class="setting-input"
                            type="number"
                            min="0"
                            step="0.01"
                            value="${Math.max(
                                0,
                                Number(
                                    settings.deliveryFee
                                ) || 0
                            )}"
                        >

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Currency
                            </strong>

                            <small>
                                Currency used by the store.
                            </small>
                        </div>

                        <select
                            id="settingCurrency"
                            class="setting-input"
                        >
                            <option
                                value="USD"
                                ${
                                    settings.currency ===
                                    "USD"
                                        ? "selected"
                                        : ""
                                }
                            >
                                USD
                            </option>

                            <option
                                value="KHR"
                                ${
                                    settings.currency ===
                                    "KHR"
                                        ? "selected"
                                        : ""
                                }
                            >
                                KHR
                            </option>
                        </select>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Default Order Status
                            </strong>

                            <small>
                                Status assigned to newly created orders.
                            </small>
                        </div>

                        <select
                            id="settingDefaultOrderStatus"
                            class="setting-input"
                        >
                            ${ORDER_STATUSES.map(
                                (status) =>
                                    `
                                        <option
                                            value="${escapeHtml(
                                                status
                                            )}"
                                            ${
                                                settings.defaultOrderStatus ===
                                                status
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            ${escapeHtml(
                                                status
                                            )}
                                        </option>
                                    `
                            ).join("")}
                        </select>

                    </div>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Automatic stock deduction
                            </strong>

                            <small>
                                Deduct product stock when an order is confirmed or moves forward.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingAutoStock"
                            ${
                                settings.automaticStockDeduction
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Allow out-of-stock orders
                            </strong>

                            <small>
                                Allow customers to order products with zero stock.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingAllowOutOfStock"
                            ${
                                settings.allowOutOfStockOrders
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                </div>

            </div>


            <!-- NOTIFICATIONS -->
            <div class="settings-card">

                <div class="settings-section">

                    <div class="settings-section-header">
                        <h3>Notifications</h3>

                        <p>
                            Choose which store events should create notifications.
                        </p>
                    </div>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                New order notifications
                            </strong>

                            <small>
                                Notify when a new order is created.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingNotifyOrders"
                            ${
                                settings.notifyNewOrders
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Order status notifications
                            </strong>

                            <small>
                                Notify customers when their order status changes.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingNotifyStatus"
                            ${
                                settings.notifyOrderStatus
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Review notifications
                            </strong>

                            <small>
                                Enable notifications related to customer reviews.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingNotifyReviews"
                            ${
                                settings.notifyReviews
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Feedback notifications
                            </strong>

                            <small>
                                Enable notifications related to website feedback.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingNotifyFeedback"
                            ${
                                settings.notifyFeedback
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                    <label class="settings-toggle">

                        <div>
                            <strong>
                                Low-stock notifications
                            </strong>

                            <small>
                                Warn when products reach the low-stock threshold.
                            </small>
                        </div>

                        <input
                            type="checkbox"
                            id="settingNotifyLowStock"
                            ${
                                settings.notifyLowStock
                                    ? "checked"
                                    : ""
                            }
                        >

                    </label>

                </div>

            </div>


            <!-- ADMIN ACCOUNT -->
            <div class="settings-card">

                <div class="settings-section">

                    <div class="settings-section-header">
                        <h3>Admin Account</h3>

                        <p>
                            Manage your administrator account.
                        </p>
                    </div>

                    <div class="settings-toggle-grid">

                        <div class="settings-toggle">
                            <div>
                                <strong>Admin Name</strong>
                            </div>

                            <input
                                id="settingAdminName"
                                class="setting-input"
                                type="text"
                                value="${escapeHtml(
                                    admin.name ||
                                        admin.username ||
                                        ""
                                )}"
                            >
                        </div>

                        <div class="settings-toggle">
                            <div>
                                <strong>Admin Email</strong>
                            </div>

                            <input
                                id="settingAdminEmail"
                                class="setting-input"
                                type="email"
                                value="${escapeHtml(
                                    admin.email ||
                                        ""
                                )}"
                            >
                        </div>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Current Password
                            </strong>
                        </div>

                        <div class="password-field">

                            <input
                                id="settingCurrentPassword"
                                class="setting-input"
                                type="password"
                                autocomplete="current-password"
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-password-target="settingCurrentPassword"
                                aria-label="Show password"
                            >
                                <i class="fa-solid fa-eye"></i>
                            </button>

                        </div>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                New Password
                            </strong>
                        </div>

                        <div class="password-field">

                            <input
                                id="settingNewPassword"
                                class="setting-input"
                                type="password"
                                autocomplete="new-password"
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-password-target="settingNewPassword"
                                aria-label="Show password"
                            >
                                <i class="fa-solid fa-eye"></i>
                            </button>

                        </div>

                    </div>

                    <div class="setting-row">

                        <div class="setting-label">
                            <strong>
                                Confirm New Password
                            </strong>
                        </div>

                        <div class="password-field">

                            <input
                                id="settingConfirmPassword"
                                class="setting-input"
                                type="password"
                                autocomplete="new-password"
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-password-target="settingConfirmPassword"
                                aria-label="Show password"
                            >
                                <i class="fa-solid fa-eye"></i>
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            <!-- SESSION -->
            <div class="settings-card settings-danger-card">

                <div class="settings-section">

                    <div class="settings-section-header">
                        <h3>Session</h3>

                        <p>
                            End your current administrator session.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="secondary-btn"
                        id="settingsLogoutBtn"
                    >
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Logout
                    </button>

                </div>

            </div>


            <!-- ACTIONS -->
            <div class="settings-actions">

                <button
                    type="button"
                    class="secondary-btn"
                    id="resetSettingsBtn"
                >
                    Reset Settings
                </button>

                <button
                    type="button"
                    class="primary-btn"
                    id="saveSettingsBtn"
                >
                    Save Settings
                </button>

            </div>

        </div>
    `;

    bindSettingsEvents();
}


/* =========================================================
   SETTINGS EVENTS
   ========================================================= */

function bindSettingsEvents() {
    const saveButton =
        document.getElementById(
            "saveSettingsBtn"
        );

    const resetButton =
        document.getElementById(
            "resetSettingsBtn"
        );

    const logoutButton =
        document.getElementById(
            "settingsLogoutBtn"
        );

    if (saveButton) {
        saveButton.addEventListener(
            "click",
            saveAdminSettings
        );
    }

    if (resetButton) {
        resetButton.addEventListener(
            "click",
            resetAdminSettings
        );
    }

    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            logoutAdmin
        );
    }

    document
        .querySelectorAll(
            ".password-toggle[data-password-target]"
        )
        .forEach((button) => {
            button.addEventListener(
                "click",
                () => {
                    togglePasswordVisibility(
                        button.dataset
                            .passwordTarget,
                        button
                    );
                }
            );
        });
}


/* =========================================================
   SAVE ADMIN SETTINGS
   ========================================================= */

function saveAdminSettings() {
    const settings =
        getSettings();

    const updated = {
        ...settings,

        storeName:
            document.getElementById(
                "settingStoreName"
            )?.value.trim() ||
            DEFAULT_SETTINGS.storeName,

        storeStatus:
            document.getElementById(
                "settingStoreStatus"
            )?.value ||
            DEFAULT_SETTINGS.storeStatus,

        storeDescription:
            document.getElementById(
                "settingStoreDescription"
            )?.value.trim() ||
            DEFAULT_SETTINGS.storeDescription,

        contactPhone:
            document.getElementById(
                "settingContactPhone"
            )?.value.trim() ||
            "",

        contactEmail:
            document.getElementById(
                "settingContactEmail"
            )?.value.trim() ||
            "",

        storeAddress:
            document.getElementById(
                "settingStoreAddress"
            )?.value.trim() ||
            "",

        lowStockThreshold:
            Math.max(
                0,
                Number(
                    document.getElementById(
                        "settingLowStock"
                    )?.value
                ) || 0
            ),

        deliveryFee:
            Math.max(
                0,
                Number(
                    document.getElementById(
                        "settingDeliveryFee"
                    )?.value
                ) || 0
            ),

        currency:
            document.getElementById(
                "settingCurrency"
            )?.value ||
            DEFAULT_SETTINGS.currency,

        defaultOrderStatus:
            normalizeOrderStatus(
                document.getElementById(
                    "settingDefaultOrderStatus"
                )?.value
            ),

        automaticStockDeduction:
            Boolean(
                document.getElementById(
                    "settingAutoStock"
                )?.checked
            ),

        allowOutOfStockOrders:
            Boolean(
                document.getElementById(
                    "settingAllowOutOfStock"
                )?.checked
            ),

        notifyNewOrders:
            Boolean(
                document.getElementById(
                    "settingNotifyOrders"
                )?.checked
            ),

        notifyOrderStatus:
            Boolean(
                document.getElementById(
                    "settingNotifyStatus"
                )?.checked
            ),

        notifyReviews:
            Boolean(
                document.getElementById(
                    "settingNotifyReviews"
                )?.checked
            ),

        notifyFeedback:
            Boolean(
                document.getElementById(
                    "settingNotifyFeedback"
                )?.checked
            ),

        notifyLowStock:
            Boolean(
                document.getElementById(
                    "settingNotifyLowStock"
                )?.checked
            )
    };

    saveSettings(
        updated
    );

    saveAdminAccount();

    renderSettings();
    renderProducts();
    renderDashboard();

    showNotification(
        "Settings saved successfully."
    );
}


/* =========================================================
   SAVE ADMIN ACCOUNT
   ========================================================= */

function saveAdminAccount() {
    const users =
        getUsers();

    const current =
        getCurrentUser();

    if (!current) {
        return;
    }

    const adminIndex =
        users.findIndex(
            (user) =>
                user.role === "admin" &&
                (
                    (
                        current.id !==
                            undefined &&
                        String(
                            user.id
                        ) ===
                            String(
                                current.id
                            )
                    ) ||
                    (
                        current.email &&
                        user.email ===
                            current.email
                    )
                )
        );

    if (adminIndex === -1) {
        return;
    }

    const name =
        document.getElementById(
            "settingAdminName"
        )?.value.trim();

    const email =
        document.getElementById(
            "settingAdminEmail"
        )?.value.trim();

    const currentPassword =
        document.getElementById(
            "settingCurrentPassword"
        )?.value || "";

    const newPassword =
        document.getElementById(
            "settingNewPassword"
        )?.value || "";

    const confirmPassword =
        document.getElementById(
            "settingConfirmPassword"
        )?.value || "";

    const admin =
        users[adminIndex];

    if (name) {
        admin.name = name;
    }

    if (email) {
        admin.email = email;
    }

    /*
     * Password is only changed when
     * the user enters a new password.
     */
    if (newPassword) {
        const storedPassword =
            String(
                admin.password ??
                    ""
            );

        if (
            String(
                currentPassword
            ) !==
            storedPassword
        ) {
            showNotification(
                "Current password is incorrect.",
                "error"
            );

            return;
        }

        if (
            newPassword !==
            confirmPassword
        ) {
            showNotification(
                "New passwords do not match.",
                "error"
            );

            return;
        }

        if (
            newPassword.length <
            6
        ) {
            showNotification(
                "New password must be at least 6 characters.",
                "error"
            );

            return;
        }

        admin.password =
            newPassword;
    }

    saveUsers(
        users
    );

    const updatedCurrentUser = {
        ...current,
        name:
            admin.name ||
            admin.username ||
            current.name,

        username:
            admin.username ||
            current.username,

        email:
            admin.email ||
            current.email,

        role: "admin"
    };

    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(
            updatedCurrentUser
        )
    );

    currentUser =
        updatedCurrentUser;

    if (adminName) {
        adminName.textContent =
            currentUser.name ||
            currentUser.username ||
            "Administrator";
    }
}


/* =========================================================
   RESET SETTINGS
   ========================================================= */

function resetAdminSettings() {
    const confirmed =
        window.confirm(
            "Reset all TechNova settings to default?"
        );

    if (!confirmed) {
        return;
    }

    saveSettings(
        DEFAULT_SETTINGS
    );

    renderSettings();
    renderProducts();
    renderDashboard();

    showNotification(
        "Settings reset successfully."
    );
}


/* =========================================================
   PASSWORD VISIBILITY
   ========================================================= */

function togglePasswordVisibility(
    inputId,
    button
) {
    const input =
        document.getElementById(
            inputId
        );

    if (!input) {
        return;
    }

    const visible =
        input.type === "text";

    input.type =
        visible
            ? "password"
            : "text";

    const icon =
        button?.querySelector(
            "i"
        );

    if (icon) {
        icon.className =
            visible
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash";
    }

    if (button) {
        button.setAttribute(
            "aria-label",
            visible
                ? "Show password"
                : "Hide password"
        );
    }
}


/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

function closeMobileSidebar() {
    if (adminSidebar) {
        adminSidebar.classList.remove(
            "mobile-open"
        );

        adminSidebar.classList.remove(
            "open"
        );
    }

    const overlay =
        document.querySelector(
            ".admin-sidebar-overlay"
        );

    if (overlay) {
        overlay.classList.remove(
            "active"
        );
    }

    document.body.classList.remove(
        "sidebar-open"
    );
}

function toggleMobileSidebar() {
    if (!adminSidebar) {
        return;
    }

    const isOpen =
        adminSidebar.classList.contains(
            "mobile-open"
        ) ||
        adminSidebar.classList.contains(
            "open"
        );

    if (isOpen) {
        closeMobileSidebar();

        return;
    }

    adminSidebar.classList.add(
        "mobile-open"
    );

    document.body.classList.add(
        "sidebar-open"
    );

    let overlay =
        document.querySelector(
            ".admin-sidebar-overlay"
        );

    if (!overlay) {
        overlay =
            document.createElement(
                "div"
            );

        overlay.className =
            "admin-sidebar-overlay";

        document.body.appendChild(
            overlay
        );

        overlay.addEventListener(
            "click",
            closeMobileSidebar
        );
    }

    overlay.classList.add(
        "active"
    );
}

if (mobileSidebarBtn) {
    mobileSidebarBtn.addEventListener(
        "click",
        toggleMobileSidebar
    );
}

document.addEventListener(
    "click",
    (event) => {
        if (
            window.innerWidth > 800
        ) {
            return;
        }

        if (
            !adminSidebar ||
            !(
                adminSidebar.classList.contains(
                    "mobile-open"
                ) ||
                adminSidebar.classList.contains(
                    "open"
                )
            )
        ) {
            return;
        }

        const clickedInsideSidebar =
            adminSidebar.contains(
                event.target
            );

        const clickedMenuButton =
            mobileSidebarBtn &&
            mobileSidebarBtn.contains(
                event.target
            );

        if (
            !clickedInsideSidebar &&
            !clickedMenuButton
        ) {
            closeMobileSidebar();
        }
    }
);


/* =========================================================
   VIEW STORE
   ========================================================= */

if (viewStoreBtn) {
    viewStoreBtn.addEventListener(
        "click",
        () => {
            window.location.href =
                "index.html";
        }
    );
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutAdmin() {
    const confirmed =
        window.confirm(
            "Are you sure you want to logout?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    window.location.href =
        "index.html";
}

if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener(
        "click",
        logoutAdmin
    );
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(
    message,
    type = "success"
) {
    let notification =
        document.getElementById(
            "adminNotification"
        );

    if (!notification) {
        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "adminNotification";

        notification.className =
            "admin-notification";

        document.body.appendChild(
            notification
        );
    }

    notification.textContent =
        message;

    notification.className =
        `admin-notification ${type}`;

    requestAnimationFrame(
        () => {
            notification.classList.add(
                "show"
            );
        }
    );

    clearTimeout(
        notification._timer
    );

    notification._timer =
        setTimeout(
            () => {
                notification.classList.remove(
                    "show"
                );
            },
            3000
        );
}


/* =========================================================
   STATUS HELPERS
   ========================================================= */

function normalizeOrderStatus(
    status
) {
    if (!status) {
        return "Pending";
    }

    const value =
        String(status)
            .trim()
            .toLowerCase();

    const match =
        ORDER_STATUSES.find(
            (item) =>
                item.toLowerCase() ===
                value
        );

    if (match) {
        return match;
    }

    if (
        value === "new" ||
        value === "waiting"
    ) {
        return "Pending";
    }

    if (
        value === "active"
    ) {
        return "Processing";
    }

    if (
        value === "completed" ||
        value === "complete"
    ) {
        return "Delivered";
    }

    if (
        value === "cancelled" ||
        value === "canceled"
    ) {
        return "Cancelled";
    }

    return "Pending";
}

function getAdminStatusClass(
    status
) {
    const value =
        String(
            status || ""
        )
            .trim()
            .toLowerCase();

    if (
        value === "available" ||
        value === "active" ||
        value === "customer" ||
        value === "approved" ||
        value === "delivered" ||
        value === "completed" ||
        value === "resolved"
    ) {
        return "available";
    }

    if (
        value === "new" ||
        value === "pending" ||
        value === "read"
    ) {
        return "pending";
    }

    if (
        value === "confirmed"
    ) {
        return "confirmed";
    }

    if (
        value === "processing"
    ) {
        return "processing";
    }

    if (
        value ===
        "out for delivery"
    ) {
        return "out-for-delivery";
    }

    if (
        value === "rejected" ||
        value === "cancelled" ||
        value === "canceled" ||
        value === "sold" ||
        value === "sold out" ||
        value === "out of stock"
    ) {
        return "cancelled";
    }

    return "pending";
}

function getStatusClass(
    status
) {
    return getAdminStatusClass(
        status
    );
}


/* =========================================================
   PRODUCT BADGE HELPERS
   ========================================================= */

function productHasSale(
    product
) {
    const price =
        Number(
            product?.price
        );

    const oldPrice =
        Number(
            product?.oldPrice
        );

    if (
        Number.isFinite(
            oldPrice
        ) &&
        Number.isFinite(
            price
        ) &&
        oldPrice > price
    ) {
        return true;
    }

    if (
        product?.discount !==
            undefined &&
        product?.discount !==
            null &&
        String(
            product.discount
        ).trim() !== ""
    ) {
        return true;
    }

    return (
        String(
            product?.status ||
                ""
        ).toLowerCase() ===
        "sale"
    );
}

function productIsNew(
    product
) {
    if (
        product?.isNew === true
    ) {
        return true;
    }

    if (
        String(
            product?.status ||
                ""
        ).toLowerCase() ===
        "new"
    ) {
        return true;
    }

    const date =
        product?.createdAt ||
        product?.created_at;

    if (!date) {
        return false;
    }

    const created =
        new Date(date);

    if (
        Number.isNaN(
            created.getTime()
        )
    ) {
        return false;
    }

    const days =
        (
            Date.now() -
            created.getTime()
        ) /
        86400000;

    return (
        days >= 0 &&
        days <= 14
    );
}


/* =========================================================
   SPECIFICATIONS
   ========================================================= */

function parseSpecifications(
    text
) {
    if (!text) {
        return {};
    }

    const lines =
        String(text)
            .split(/\r?\n/)
            .map(
                (line) =>
                    line.trim()
            )
            .filter(Boolean);

    const specs = {};

    lines.forEach(
        (line) => {
            const separator =
                line.indexOf(":");

            if (
                separator === -1
            ) {
                return;
            }

            const key =
                line
                    .slice(
                        0,
                        separator
                    )
                    .trim();

            const value =
                line
                    .slice(
                        separator + 1
                    )
                    .trim();

            if (
                key &&
                value
            ) {
                specs[key] =
                    value;
            }
        }
    );

    return specs;
}

function formatSpecifications(
    specs
) {
    if (!specs) {
        return "";
    }

    if (
        typeof specs ===
        "string"
    ) {
        return specs;
    }

    if (
        Array.isArray(specs)
    ) {
        return specs
            .map(
                (item) => {
                    if (
                        typeof item ===
                        "string"
                    ) {
                        return item;
                    }

                    return `${item.name || item.key || ""}: ${
                        item.value || ""
                    }`;
                }
            )
            .join("\n");
    }

    if (
        typeof specs ===
        "object"
    ) {
        return Object.entries(
            specs
        )
            .map(
                ([key, value]) =>
                    `${key}: ${value}`
            )
            .join("\n");
    }

    return "";
}


/* =========================================================
   DATE HELPERS
   ========================================================= */

function getOrderDate(
    order
) {
    const raw =
        order?.createdAt ||
        order?.date ||
        order?.orderDate ||
        order?.created_at ||
        null;

    if (!raw) {
        return null;
    }

    const date =
        raw instanceof Date
            ? raw
            : new Date(raw);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return null;
    }

    return date;
}

function getOrderTimestamp(
    order
) {
    const date =
        getOrderDate(
            order
        );

    return date
        ? date.getTime()
        : 0;
}

function formatAdminDate(
    date
) {
    if (!date) {
        return "-";
    }

    const value =
        date instanceof Date
            ? date
            : new Date(date);

    if (
        Number.isNaN(
            value.getTime()
        )
    ) {
        return "-";
    }

    return value.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );
}

function getReviewDate(
    review
) {
    return (
        review?.createdAt ||
        review?.date ||
        review?.updatedAt ||
        null
    );
}

function getFeedbackDate(
    feedback
) {
    return (
        feedback?.createdAt ||
        feedback?.date ||
        feedback?.updatedAt ||
        null
    );
}


/* =========================================================
   TEXT HELPERS
   ========================================================= */

function truncateText(
    text,
    maxLength
) {
    const value =
        String(
            text || ""
        );

    if (
        value.length <=
        maxLength
    ) {
        return value;
    }

    return (
        value.slice(
            0,
            maxLength - 3
        ) + "..."
    );
}

function escapeHtml(
    value
) {
    return String(
        value ?? ""
    )
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

function getProductName(
    productId
) {
    if (
        productId ===
            undefined ||
        productId === null
    ) {
        return "Unknown Product";
    }

    const product =
        getProducts().find(
            (item) =>
                String(
                    item.id
                ) ===
                String(
                    productId
                )
        );

    return (
        product?.name ||
        "Unknown Product"
    );
}

function formatReviewStatus(
    status
) {
    const value =
        String(
            status || ""
        ).toLowerCase();

    if (
        value === "approved"
    ) {
        return "Approved";
    }

    if (
        value === "rejected"
    ) {
        return "Rejected";
    }

    return "Pending";
}

function formatFeedbackStatus(
    status
) {
    const value =
        String(
            status || ""
        ).toLowerCase();

    if (
        value === "resolved"
    ) {
        return "Resolved";
    }

    if (
        value === "read"
    ) {
        return "Read";
    }

    return "New";
}


/* =========================================================
   STORAGE SYNCHRONIZATION
   ========================================================= */

let storageSyncTimer =
    null;

window.addEventListener(
    "storage",
    (event) => {
        if (
            ![
                PRODUCTS_KEY,
                ORDERS_KEY,
                USERS_KEY,
                REVIEWS_KEY,
                FEEDBACK_KEY,
                SETTINGS_KEY,
                NOTIFICATIONS_KEY
            ].includes(
                event.key
            )
        ) {
            return;
        }

        clearTimeout(
            storageSyncTimer
        );

        storageSyncTimer =
            setTimeout(
                () => {
                    const activeButton =
                        document.querySelector(
                            ".admin-nav-btn.active"
                        );

                    const activePage =
                        activeButton?.dataset
                            .page ||
                        "dashboard";

                    openPage(
                        activePage
                    );
                },
                50
            );
    }
);


/* =========================================================
   WINDOW RESIZE
   ========================================================= */

let chartResizeTimer =
    null;

window.addEventListener(
    "resize",
    () => {
        clearTimeout(
            chartResizeTimer
        );

        chartResizeTimer =
            setTimeout(
                () => {
                    if (
                        document
                            .getElementById(
                                "dashboardPage"
                            )
                            ?.classList.contains(
                                "active"
                            )
                    ) {
                        renderSalesChart();
                    }
                },
                120
            );

        if (
            window.innerWidth > 800
        ) {
            closeMobileSidebar();
        }
    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key !==
            "Escape"
        ) {
            return;
        }

        closeProductForm();
        closeMobileSidebar();
    }
);


/* =========================================================
   PRODUCT MODAL CLOSE
   ========================================================= */

const closeProductFormBtn =
    document.getElementById(
        "closeProductForm"
    );

const cancelProductFormBtn =
    document.getElementById(
        "cancelProductForm"
    );

if (closeProductFormBtn) {
    closeProductFormBtn.addEventListener(
        "click",
        closeProductForm
    );
}

if (cancelProductFormBtn) {
    cancelProductFormBtn.addEventListener(
        "click",
        closeProductForm
    );
}

const productModal =
    document.getElementById(
        "productFormModal"
    );

if (productModal) {
    productModal.addEventListener(
        "click",
        (event) => {
            if (
                event.target ===
                productModal
            ) {
                closeProductForm();
            }
        }
    );
}


/* =========================================================
   ORDER NORMALIZATION ON LOAD
   ========================================================= */

function normalizeExistingOrders() {
    const orders =
        getOrders();

    if (!orders.length) {
        return;
    }

    let changed = false;

    const normalized =
        orders.map(
            (order) => {
                const status =
                    normalizeOrderStatus(
                        order.status
                    );

                if (
                    order.status !==
                    status
                ) {
                    changed = true;

                    return {
                        ...order,
                        status
                    };
                }

                return order;
            }
        );

    if (changed) {
        saveOrders(
            normalized
        );
    }
}


/* =========================================================
   ADMIN INITIALIZATION
   ========================================================= */

ensureManagementPages();

createAdminSearchBars();

normalizeExistingOrders();

/*
 * Synchronize stock when the admin opens.
 * Stock is only deducted once an order reaches
 * Confirmed or a later fulfillment status.
 */
processNewOrderStock();

notifyLowStockProducts();

currentUser =
    getCurrentUser();

if (adminName) {
    adminName.textContent =
        currentUser?.name ||
        currentUser?.username ||
        "Administrator";
}

renderDashboard();

renderedPages.dashboard =
    true;