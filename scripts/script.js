let div = document.createElement('div');

//let textNode = document.createTextNode('Here I am');
//set its class to "alert"
div.className = 'alert';

//fill it with the content
div.innerHTML = "<strong>hi there!</strong> You've read an important message";

//to insert the message into a specific place in the HTML document
document.body.append(div);

//Node removal. I can make the message disappear after a certain time I set
//This feature is so cool!!
setTimeout(() => div.remove(), 5000);


//inserting 
//example ; elem.insertAdjacentText(where,text)
//another example: elem.insertinsertAdjacentElement(where, elem)
div.insertAdjacentHTML('afterend', '<p>How are you?</p>');

//STRINGS ONLY. We can use JSON to store objects though
localStorage.user = JSON.stringify({name:  "David"});

//sometime later
let user = JSON.parse(localStorage.user);
alert(user.name);

//SESSION STORAGE
/*The session storage exists only withih the current browser tab. Another tab with the same page will have a different storage
The data survicves page refresh, but not closing or opening the tab*/
//Exampe of Session storage
sessionStorage.setItem('test2', 2);
alert(sessionStorage.getItem('test2'));

ol.before('before');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);


//Documentn Fragment. Using the "ul" element in the document
function getListContent() {
    
    let fragment = new DocumentFragment();

    for (let i = 1; i < 3; i++) {
        let li = document.createElement('li');
        li.append(i);
        fragment.append(li);
    }
    return fragment;
}
ul.append(getListContent()); //call the getListcontent function and append it to the ul element in the document


/*Createa  textarea field that autosaves its value on every change
So, if the user accidentally closes the page, and opens it again, he will find
his unfinished input at place*/
const area = document.getElementById("area");

// Load any saved text from local storage on page load
area.value = localStorage.getItem("autosave");

//Save the text to local storage on every change to the textarea
area.addEventListener("input", () => {
    localStorage.setItem("autosave", area.value);
});


/******************************************************************/
  //Function to calculate the discouted price on the product page
/******************************************************************/

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}

function displayDiscountedPrice() {
    const originalPriceElement = document.getElementById('product-card__price');
    const discountedPriceElement = document.getElementById('discount-price');

    // Extract the original price from the text and convert it to a number
    const originalPrice = parseFloat(originalPriceElement.textContent.replace(/[^0-9.]/g, ''));

    // Set the discount percentage (e.g. 20%)
    const discountPercentage = 20;

    // Calculate the discounted price
    const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

    // Display the discounted price
    discountedPriceElement.textContent = `$${discountedPrice.toFixed(2)}`;
}

// Run the function to display the discounted price
displayDiscountedPrice();
