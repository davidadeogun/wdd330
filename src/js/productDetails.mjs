import { findProductById } from "./productData.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";


let productData = {};

export default async function productDetails(productId) {
  productData = await findProductById(productId);

  renderProductDetails();

  document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
  let info = productData;
  
  if (!productData) {
    // Product not found, display error message
    document.querySelector("#errorMessage").innerHTML = "Product not found";
    document.querySelector("#errorPage").style.display = "block";
    return; // Stop execution
  }
  
  let infoHistory = getLocalStorage("so-cart") || [];
  infoHistory.push(info);
  setLocalStorage("so-cart", infoHistory);
}

function renderProductDetails() {
  if (!productData) {
    // Product not found, display error message
    document.querySelector("#errorMessage").innerHTML = "Product not found";
    document.querySelector("#errorPage").style.display = "block";
    return; // Stop execution
  }

  document.querySelector("#productName").innerHTML = productData.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerHTML = productData.NameWithoutBrand;
  document.querySelector("#productImage").src = productData.Image;
  document.querySelector("#productImage").alt = productData.Name;  
  document.querySelector("#productFinalPrice").innerHTML = productData.FinalPrice; 
  document.querySelector("#productColorName").innerHTML = productData.Colors[0].ColorName; 
  document.querySelector("#productDescriptionHtmlSimple").innerHTML = productData.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = productData.Id;
}
