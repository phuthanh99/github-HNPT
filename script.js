const menuBar = document.querySelector(".header-top>i")
const closeBar = document.querySelector(".header-top ul i")
console.log(closeBar)
menuBar.addEventListener("click", function(){
    document.querySelector(".header-top ul").style.transform = "translateX(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})
closeBar.addEventListener("click", function(){
    document.querySelector(".header-top ul").style.transform = "translateX(100%)"
    document.querySelector(".header-top ul").style.opacity = "0"
}) 
                        