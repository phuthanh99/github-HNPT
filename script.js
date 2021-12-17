
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}
const menuBar = document.querySelector(".header-top>i")
const closeBar = document.querySelector(".header-top ul i")
console.log(closeBar)
menuBar.addEventListener("click", function(){
    console.log('test');
    document.querySelector(".header-top ul").style.transform = "translateX(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})
closeBar.addEventListener("click", function(){
    document.querySelector(".header-top ul").style.transform = "translateX(100%)"
    document.querySelector(".header-top ul").style.opacity = "0"
}) 
            