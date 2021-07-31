const menuBar = document.querySelector(".header-top > i")
const closebtn = document.querySelector(".header-top ul i")
menuBar.addEventListener("click", function() {
    document.querySelector(".header-top ul").style.transform = "translateX(0%)";
    document.querySelector(".header-top ul").style.opacity = "1";
})

closebtn.addEventListener("click", function() {
    document.querySelector(".header-top ul").style.transform = "translateX(100%)";
    document.querySelector(".header-top ul").style.opacity = "0";
})


// function plus (varObj) {  
//     varObj.a += 1;
// }
// let varObj = {a:0};
// const btn = document.querySelector(".header-text button")
// btn.addEventListener("click", function(){
//     plus(varObj);
//     console.log(varObj.a);
//     if (varObj.a == 3 )
//         {varObj.a = 0;}
//     if (varObj.a % 3 == 0)
//         {document.getElementById("header").style.backgroundImage ="url('./Img/bg.jpg')";}
//     if (varObj.a % 3 == 1)
//         {document.getElementById("header").style.backgroundImage ="url('./Img/bg2.jpg')";}
//     if (varObj.a % 3 == 2)
//         {document.getElementById("header").style.backgroundImage ="url('./Img/bg3.jpg')"}
// })

function courseClick () {
    window.location = "course.html"
}


function jsClick() {
    window.location = "dkpage.html"
}

// function menuBarClick() {
//     document.querySelector(".header-top ul").style.transform = "translateX(0%)";
//     document.querySelector(".header-top ul").style.opacity = "1";
//     document.querySelector(".header-top ul").style.display = "block";
// }

// function closeClick() {
//     document.querySelector(".header-top ul").style.transform = "translateX(100%)";
//     document.querySelector(".header-top ul").style.opacity = "0";
//     document.querySelector(".header-top ul").style.display = "none";

// }

// $(document).ready(function(){
//   $(".header-top > i").click(function(){
//     $(".header-top ul").animate({transform = "translateX(0%)"}, "slow");
//     $(".header-top ul").animate({opacity = "1"}, "slow");
//     $(".header-top ul").animate({display = "block"}, "slow");
//   })});

// $(document).ready(function(){
//    $(".header-top ul i").click(function(){
//      $(".header-top ul").animate({transform = "translateX(100%)", "slow"});
//      $(".header-top ul").animate({opacity = "0", "slow"});
//      $(".header-top ul").animate({display = ""}, "slow");
// })});




jQuery(document).ready(function ($) {
        $('.run1').counterUp({
            delay: 20,
            time: 5000
        })
})

jQuery(document).ready(function ($,) {
   $('.run2').counterUp({
       delay: 10,
       time: 4000
   })
})






window.addEventListener("scroll", function () {
    var x = this.pageYOffset;
    if (x > 200) {document.querySelector(".button-top").style.display = "inline"}
    else {document.querySelector(".button-top").style.display = ""}
})



// function onTop() {
//     $("body,html").animate({scrollTop: 0}, "slow");
// }
