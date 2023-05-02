import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
 
  let info = product;
  let infoHistory = getLocalStorage("so-cart") || [];
  infoHistory.push(info);
  setLocalStorage("so-cart", infoHistory); //this functions is what actually sets the ID
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);  //this will set the local storage to the ID found ^^^
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
