import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";


let productData = {};

export default async function productDetails(productId) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    productData = await findProductById(productId);
    
    // once we have the product details we can render out the HTML
    // renderProductDetails();
    
    // add listener to Add to Cart button
    document.getElementById("addToCart").addEventListener("click", addToCart);
}
// if(productData.length < 0) {
//     console.log("here's the data")
// } else {console.log("no data")};

function addToCart(product) {
  let info = product;
  let infoHistory = getLocalStorage("so-cart") || [];
  infoHistory.push(info);
  setLocalStorage("so-cart", infoHistory); //this functions is what actually sets the ID
}

function renderProductDetails() {
    document.querySelector("#productName").innerHTML = productData.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerHTML = productData.NameWithoutBrand;
    document.querySelector("#productImage").src = productData.Image;
    document.querySelector("#productImage").alt = productData.Name;  
    document.querySelector("#productFinalPrice").innerHTML = productData.Finalprice; 
    document.querySelector("#productColorName").innerHTML = productData.Colors.ColorName; 
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = productData.DescriptionHtmlSimple;
    document.querySelector("#addToCart").innerHTML = productData.Id;
}

