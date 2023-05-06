function applyDiscount() {
    const productPriceElements = document.getElementsByClassName('product-card__price');
    const discountedPriceElements = document.getElementsByClassName('discounted-price');
  
    for (let i = 0; i < productPriceElements.length; i++) {
      // Extract the numeric value from the product price
      const priceText = productPriceElements[i].textContent;
      const priceNumber = parseFloat(priceText.replace(/[^\d.]/g, ''));
  
      if (!isNaN(priceNumber)) {
        // Apply the discount and format the result
        const discountedPrice = priceNumber * 0.8; // Apply 20% discount
        const formattedDiscountedPrice = priceText.replace(priceNumber.toFixed(2), discountedPrice.toFixed(2));
  
        // Update the discounted-price element
        discountedPriceElements[i].textContent = formattedDiscountedPrice;
      } else {
        console.error(`Invalid price format for element index ${i}: ${priceText}`);
      }
    }
  }
  applyDiscount();