
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

// renderList(list, el) {
//     const htmlStrings =  list.map(productCardTemplate);
//     el.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
// }

export default async function productList(selector, category) {
    
    // get the element we will insert the list into from the selector
    let section = document.querySelector(".product-list");
    // get the list of products
    const response = await fetch("/json/tents.json");
    const tentsData = await response.json();
    // productCardTemplate(tentsData);
    // render out the product list to the element
    const htmlItems = tentsData.map((product) => productCardTemplate(product));
    section.innerHTML = htmlItems.join("");
}