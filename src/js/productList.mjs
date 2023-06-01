import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    // const prices = product.FinalPrice;

    return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
    </a>
    <div class="discount">
      <span class="discounted-price">$${(product.FinalPrice * 0.8).toFixed(2)}</span>
    </div>
  </li>`
}

export default async function productList(selector, category) {
    
    // get the element we will insert the list into from the selector
    let el = document.querySelector(selector);
    // get the list of products
    const products = await getData(category);
    let fourProducts = []

    for (let i = 0; i < 4; i++) {
    fourProducts.push(products[i])
    }

    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, el, fourProducts);
    document.querySelector(".title").innerHTML = category;
}