import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  
  let htmlItems = [];
  
  if (cartItems === null || cartItems.length === 0) {
    // Handle the scenario when the cart is empty or null
    htmlItems.push('<h2>No Items in cart</h2>');
    console.log("No items in cart");
  } else {
    htmlItems = cartItems.map((item) => cartItemTemplate(item));
  }
  
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;
    
  return newItem;
}

renderCartContents();





