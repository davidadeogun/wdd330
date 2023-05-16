import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";


let productData = {};

export default async function productDetails(productId) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    productData = await findProductById(productId);
    
    // once we have the product details we can render out the HTML
    renderProductDetails();
    
    // add listener to Add to Cart button
    document.getElementById("addToCart").addEventListener("click", addToCart);

    //Updating the cart count. Called the updateCartCount function for the Superscript number
    updateCartCount();
}
// if(productData.length < 0) {
//     console.log("here's the data")
// } else {console.log("no data")};

function addToCart() {
  let info = productData;
  let infoHistory = getLocalStorage("so-cart") || [];
  infoHistory.push(info);
  setLocalStorage("so-cart", infoHistory); //this functions is what actually sets the ID
     //Updating the cart count. Called the updateCartCount function for the Superscript number
     updateCartCount();
}
//Function to updateCartCount.Superscript numbers
function updateCartCount() {
    let cart = getLocalStorage("so-cart") || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  }

function renderProductDetails() {
    document.querySelector("#productName").innerHTML = productData.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerHTML = productData.NameWithoutBrand;
    document.querySelector("#productImage").src = productData.Image;
    document.querySelector("#productImage").alt = productData.Name;  
    document.querySelector("#productFinalPrice").innerHTML = productData.FinalPrice; 
    document.querySelector("#productColorName").innerHTML = productData.Colors[0].ColorName; 
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = productData.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = productData.Id;


    // This calculates and renders the discounted price
    const productFinalPriceElement = document.querySelector("#productFinalPrice");
    const priceText = productFinalPriceElement.textContent;
    const priceNumber = parseFloat(priceText.replace(/[^\d.]/g, ''));

    if (!isNaN(priceNumber)) {
        const discountedPrice = priceNumber * 0.8; // Apply 20% discount
        const formattedDiscountedPrice = priceText.replace(priceNumber.toFixed(2), discountedPrice.toFixed(2));
 
        //Created an element to add the discounted price to the product page
        const discountedPriceElement = document.createElement("p");
        discountedPriceElement.id = "discountedPrice";
        discountedPriceElement.textContent = `$${formattedDiscountedPrice}`;
        productFinalPriceElement.insertAdjacentElement("afterend", discountedPriceElement);
    } else {
        console.error(`Invalid price format: ${priceText}`);
    }
}

