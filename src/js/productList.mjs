import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
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

    // console.log(fourProducts);
    // for (let i = 0; i < 1; i++) {
    //     products.forEach(tent => {
    //         console.log(tent);
    //     });
    // }

    // products.forEach(tent => {
    //     for (i = 0; i < 5; i++)
    //     fourProducts.push(tent[i]);
    // });

    // console.log(products);

    // for (let i = 0; i < products.length; i++) {
    //     fourProducts.push(products[i])
    // }

    // console.log(fourProducts);

    // console.log(products);
    
    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, el, fourProducts);

    // const tentsData = await response.json();
    // productCardTemplate(tentsData);
    // render out the product list to the element
    // const htmlItems = tentsData.map((product) => productCardTemplate(product));
    // section.innerHTML = htmlItems.join("");
}