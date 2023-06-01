const addcartButton = document.getElementById("addToCart");
const cartIcon = document.querySelector(".cart svg");

// cartIcon.addEventListener("mouseover", function() {
//   cartIcon.style.backgroundColor = "blue";
// });

// cartIcon.addEventListener("mouseout", function() {
//   image.style.backgroundColor = "red";
// });
addcartButton.addEventListener("click", function() {
  console.log("Hey");
  cartIcon.classList.add("shake-animation");

  setTimeout(function() {
    cartIcon.classList.remove("shake-animation");
  }, 500);
});