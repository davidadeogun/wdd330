import { getLocalStorage, setLocalStorage, renderListWithTemplate } from "./utils.mjs";

//This is for store the prices (discount prices).
// Later we'll use this to calculate the total on the
// Checkout page 
let pricesLocalStorage = [];

export default function ShoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  const outputEl = document.querySelector(".product-list-cart");
  // console.log(cartItems)
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  showTotalPrice();
  removeProduct()
//   updateCartCount();
    // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    // document.querySelector(".product-list").innerHTML = htmlItems.join("");
    // updateCartCount();
    // showTotalPrice();
    
    // applyDiscount();
  }
  
  function cartItemTemplate(item) {
  
    //Extract the numeric value from the product price in order 
    //to calculate the discounted price.
    const priceNumber = parseFloat(item.FinalPrice);
    const discountedPrice = priceNumber * 0.8; //This applies 20% discount
    
    //Store the prices in the local storage.
    pricesLocalStorage.push(discountedPrice.toFixed(2));
    // setLocalStorage("so-cart-prices", pricesLocalStorage);
  
    const newItem = `<li class="cart-card divider">
    <div class="remove_button" data-id="${item.Id}">X</div>
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimarySmall}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <p class="cart-card__discounted-price">$${discountedPrice.toFixed(2)}</p>
  </li>`;
  
    return newItem;
  }
  
//   function updateCartCount() {
//     let cart = getLocalStorage("so-cart") || [];
//     const cartCount = document.getElementById("cart-count");
//     cartCount.textContent = cart.length;
//   }

//   // call the function when the DOM is fully loaded
//   window.onload = function() {
//     updateCartCount();
//   };
  
function showTotalPrice() {
  let checkItems = getLocalStorage("so-cart");
  const total = document.querySelector(".cart-total")
  const showTotal = document.querySelector(".hide")
  
  let prices = [] // An array to store all the discounted prices.
  let totalPrice = 0;

  //Get all the discounted prices in the DOM
  const discountedPrices = document.getElementsByClassName("cart-card__discounted-price");
  
  // Use a for loop to convert the prices to float numbers
  for (let i = 0; i < discountedPrices.length; i++) {
    let priceText = discountedPrices[i].textContent; // Get the text E.G ($100.00)
    let priceNumber = parseFloat(priceText.replace("$", "")); // Convert the text to float
    prices.push(priceNumber); // Store the discounted prices in an array.
    setLocalStorage("so-cart-prices", prices);

  }

  //Check if there is anything in the cart
  if (checkItems && checkItems.length > 0) {
    
    // Use forEach method to calculate the Total Price
    prices.forEach(price => {
      totalPrice += price;
    })

    showTotal.style.display = "";
    total.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
    } else {
      showTotal.style.display = "none"; // If there is no items in the cart, then we don't
                                        // need to show the Total. 
    }
}

function removeProduct() {
  const removeButtons = document.querySelectorAll(".remove_button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dataId = button.dataset.id;
      console.log(dataId);
      
      // Get elements form localStorage
      const cartItems = getLocalStorage("so-cart");

      // Find the index of the element we want to remove
      const index = cartItems.findIndex((item) => item.Id === dataId);

      if (index !== -1) {
        // remove the element selected
        cartItems.splice(index, 1);

        // Store the uptdated list of items
        setLocalStorage("so-cart", cartItems);

        //Call shoppingCart to render again the function
        ShoppingCart()
      }
    });
  });
}