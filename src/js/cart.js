import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  updateCartCount();
  
  applyDiscount();
}

function cartItemTemplate(item) {

  //Extract the numeric value from the product price in order 
  //to calculate the discounted price.
  const priceNumber = parseFloat(item.FinalPrice);
  const discountedPrice = priceNumber * 0.8; //This applies 20% discount

  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <p class="discounted-price">$${discountedPrice.toFixed(2)}</p>
</li>`;

  return newItem;
}

function updateCartCount() {
  let cart = getLocalStorage("so-cart") || [];
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

renderCartContents();



