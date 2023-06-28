import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    // const prices = product.FinalPrice;

    return `<li class="product-card">
    <div class="look-button" data-id="${product.Id}">🔍</div>
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
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
    const products = await getProductsByCategory (category);
    let fourProducts = []

    for (let i = 0; i < 4; i++) {
    fourProducts.push(products[i])
    }

    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, el, fourProducts);
    // Show the category on the Title of the page with the first letter uppercased
    document.querySelector(".title").innerHTML = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    // renderListWithTemplate(showPreview(productPreview(prod)))
    showPreview(fourProducts);

}

function showPreview(products) {

  //Get the products
  const product = products;
  //Get the preview button
  const previewButtons = document.querySelectorAll(".look-button");
  const productView = document.querySelector("#productView");


  //Use for each to apply the same function to all the preview buttons
  previewButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      const product = products.find(p => p.Id === productId);

      const productContent = productPreview(product);


      productView.innerHTML = productContent;


      productView.style.display = "block";
      
    });
    // renderListWithTemplate(productPreview, ".products", product);
    

  });

  productView.addEventListener("click", function() {
    productView.style.display = "none";
  });
}

function productPreview(prod) {
  //Create the template for the modal preview
  return`<div class="previewContainer">
  <h3 id="productName">${prod.Brand.Name}</h3>
  <a href="/product_pages/index.html?product=${prod.Id}"><h2 class="divider" id="productNameWithoutBrand">${prod.NameWithoutBrand}</h2></a>
  <img id="productImage" class="divider" src="${prod.Images.PrimaryLarge}" alt="${prod.Name}"/>
  <p class="product-card__price" id="productFinalPrice">${prod.FinalPrice}</p>
  <p id="discountedPrice">$1.00</p>
  <p class="product__color" id="productColorName">${prod.Colors[0].ColorName}</p>
  <p class="product__description" id="productDescriptionHtmlSimple">${prod.DescriptionHtmlSimple}</p>
  </div>`
}