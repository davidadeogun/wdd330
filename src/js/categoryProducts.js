function categoryTemplate() {
    // const prices = product.FinalPrice;

    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
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