// Get elements
let productContainer = document.querySelector(".products-container");


// init function
function init() {
    generateNavbar();
    render();
}

// render function
function render() {
    generateProducts();
}

// Function to generate content (products)
function generateProducts() {
    productContainer.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        productContainer.innerHTML += createProducts(product);
    }
}

// Function to create content (html)
function createProducts(product) {
    return /* html */`
    <div class="product">
        <img class="product-img" src="${product["img"]}">
    <div class="product-desc">
        <h3>${product["desc"]}</h3>
    </div>
    <div class="price-container">
        <p class="price">${product["price"]}$</p>
    </div>
    <div class="product-buttons">
        <div class="buy-btn-container">
            <button type="button" class="buy-btn">Buy</button>
            <span class="amount">0</span>
        </div>
        <div class="increase-decrease">
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-minus"></i>
        </div>
    </div>
</div>
    `;
}