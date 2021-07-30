// const menuBar = document.querySelector(".header-top > i")
// const closebtn = document.querySelector(".header-top ul i")
// menuBar.addEventListener("click", function() {
//     document.querySelector(".header-top ul").style.transform = "translateX(0%)";
//     document.querySelector(".header-top ul").style.opacity = "1";
// })

// closebtn.addEventListener("click", function() {
//     document.querySelector(".header-top ul").style.transform = "translateX(100%)";
//     document.querySelector(".header-top ul").style.opacity = "0";
// })

const btn = document.querySelector(".header-text button")
btn.addEventListener("click", function(){
    window.location = "course.html"
})

function jsClick() {
    window.location = "dkpage.html"
}

function menuBarClick() {
    document.querySelector(".header-top ul").style.transform = "translateX(0%)";
    document.querySelector(".header-top ul").style.opacity = "1";
}

function closeClick() {
    document.querySelector(".header-top ul").style.transform = "translateX(100%)";
    document.querySelector(".header-top ul").style.opacity = "0";
}

