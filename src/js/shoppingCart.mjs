import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
//   updateCartCount();
  showTotalPrice();
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

// function updateCartCount() {
//     let cart = getLocalStorage("so-cart") || [];
//     const cartCount = document.getElementById("cart-count");
//     cartCount.textContent = cart.length;
//   }
  
  function showTotalPrice() {
    let checkItems = getLocalStorage("so-cart");
    const total = document.querySelector(".cart-total")
    const showTotal = document.querySelector(".hide")
    
    let prices = [] // An array to store all the discounted prices.
    let totalPrice = 0;
  
    //Get all the discounted prices in the DOM
    const discountedPrices = document.getElementsByClassName("discounted-price");
    
    // Use a for loop to convert the prices to float numbers
    for (let i = 0; i < discountedPrices.length; i++) {
      let priceText = discountedPrices[i].textContent; // Get the text E.G ($100.00)
      let priceNumber = parseFloat(priceText.replace("$", "")); // Convert the text to float
      prices.push(priceNumber); // Store the discounted prices in an array.
  
    }
  
    //Check if there is anything in the cart
    if (checkItems && checkItems.length > 0) {
      
      // Use forEach method to calculate the Total Price
      prices.forEach(price => {
        totalPrice += price;
      })
  
      showTotal.style.display = "";
      total.textContent = `Total: $${totalPrice}`;
      
      } else {
        showTotal.style.display = "none"; // If there is no items in the cart, then we don't
                                          // need to show the Total. 
      }
  }