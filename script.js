const coffeeMenu = [
    { name: "Espresso", price: 100, img: "images/espresso.jpg" },
    { name: "Americano", price: 150, img: "images/americano.jpg" },
    { name: "Latte", price: 150, img: "images/latte.jpg" },
    { name: "Cappuccino", price: 150, img: "images/cappuccino.jpg" },
    { name: "Macchiato", price: 150, img: "images/cappuccino.jpg" },
    { name: "Mocha", price: 150, img: "images/mocha.jpg" },
    { name: "Flat White", price: 200, img: "images/espresso.jpg" },
    { name: "Affogato", price: 200, img: "images/latte.jpg" },
    { name: "Cortado", price: 200, img: "images/mocha.jpg" },
    { name: "Irish Coffee", price: 200, img: "images/latte.jpg" },
    { name: "Cold Brew", price: 200, img: "images/mocha.jpg" },
    { name: "Frappuccino", price: 200, img: "images/americano.jpg" }
];

const cakeMenu = [
    { name: "Chocolate Cake", price: 250, img: "images/chocolate_cake.jpg" },
    { name: "Cheesecake", price: 275, img: "images/cheesecake.jpg" },
    { name: "Banana Bread", price: 200, img: "images/banana_bread.jpg" },
    { name: "Croissant", price: 150, img: "images/croissant.jpg" },
    { name: "Muffin", price: 160, img: "images/muffin.jpg" }
];

const cart = [];

function displayMenu(menu, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous items

    menu.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `<img src="${item.img}" alt="${item.name}">
                         <p>${item.name}</p>
                         <button onclick="addToCart('${item.name}', ${item.price})">₱${item.price.toFixed(2)} - Add to Cart</button>`;
        container.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("total-price");
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ₱${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">❌</button>`;
        cartContainer.appendChild(li);
    });

    totalContainer.textContent = `₱${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Show notification
    alert("Your order has been placed successfully!");

    // Clear the cart
    cart.length = 0;
    updateCart();
}

// Show and hide sections
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// Display menu items on load
displayMenu(coffeeMenu, "coffee-menu");
displayMenu(cakeMenu, "cake-menu");
