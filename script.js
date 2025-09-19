// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(product, price) {
  cart.push({product, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product + " added to cart!");
}

function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.innerText = cart.length;
  });
}

// For cart.html
if (window.location.pathname.includes("cart.html")) {
  let cartItemsDiv = document.getElementById("cart-items");
  let total = 0;
  cartItemsDiv.innerHTML = "";
  cart.forEach(item => {
    let div = document.createElement("div");
    div.textContent = `${item.product} - $${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  document.getElementById("cart-total").textContent = "Total: $" + total;
}
// Hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
