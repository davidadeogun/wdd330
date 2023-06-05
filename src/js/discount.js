/*************************************/
//This function is for the discounted price on the product
//listing, cart and checkout pages.
// function applyDiscount() {
//     const productPriceElements = document.getElementsByClassName('product-card__price');
//     // const discountedPriceElements = document.getElementsByClassName('discounted-price');

//     // console.log(productPriceElements);
//     // for (let i = 0; i < productPriceElements.length; i++) {
//     //   // Extract the numeric value from the product price
//     //   const priceText = productPriceElements[i].textContent;
//     //   const priceNumber = parseFloat(priceText.replace(/[^\d.]/g, ''));
  
//     //   if (!isNaN(priceNumber)) {
//     //     // Apply the discount and format the result
//     //     const discountedPrice = priceNumber * 0.8; // Apply 20% discount
//     //     const formattedDiscountedPrice = priceText.replace(priceNumber.toFixed(2), discountedPrice.toFixed(2));
  
//     //     // Update the discounted-price element
//     //     discountedPriceElements[i].textContent = formattedDiscountedPrice;
//     //   } else {
//     //     console.error(`Invalid price format for element index ${i}: ${priceText}`);
//     //   }
//     // }
//   }
//   applyDiscount();

  
/***************************************************/
//This function is for the superscript number of items on the main index
//page. Works for the main index page and other index pages under the product_pages

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

 export default function updateCartCount() {
    let cart = getLocalStorage("so-cart") || [];
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
  }

  // call the function when the DOM is fully loaded
  window.onload = function() {
    updateCartCount();
  };

