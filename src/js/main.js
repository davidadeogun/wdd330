import productList from "./productList.mjs";

productList(".product-list", "tents");


import Alert from "./Alert.js";

fetch('../json/alerts.json')
  .then(response => response.json())
  .then(alerts => {
    const alert = new Alert(alerts);
    
    const mainElement = document.querySelector('main');
    
    if(mainElement) {
      const alertElement = alert.createAlertElement();
      mainElement.prepend(alertElement);
    }
  })
  .catch((error) => console.error('Error:', error));

