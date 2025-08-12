
const products = [
    { name: "Silk Saree", price: 1500 },
    { name: "Cotton Saree", price: 1000 },
    { name: "Partywear Saree", price: 1800 },
    { name: "Soft Nightwear", price: 800 },
    { name: "Satin Nightwear", price: 950 },
    { name: "Comfort Nightwear", price: 700 },
];

const cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = \`
            <h3>\${product.name}</h3>
            <p>Price: ₹\${product.price}</p>
            <button onclick="addToCart(\${index})">Add to Cart</button>
        \`;
        productList.appendChild(card);
    });
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(p => \`<p>\${p.name} - ₹\${p.price}</p>\`).join("");
}

function checkout() {
    alert("Razorpay integration goes here.");
}

document.addEventListener("DOMContentLoaded", renderProducts);
