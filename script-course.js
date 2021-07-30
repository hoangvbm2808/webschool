const toP = document.querySelector(".top-course")
const maincolor = "#F0A07C" ;
const textcolor = "#1e3d59"

window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    if (x > 0)  
            {
                document.querySelector(".top-course").style.backgroundColor = maincolor; 
                document.querySelector(".a1").style.color = textcolor ;
                document.querySelector(".a2").style.color = textcolor ;
                document.querySelector(".a3").style.color = textcolor ;
                document.querySelector(".a4").style.color = textcolor ;
                document.querySelector(".a5").style.color = textcolor ;
                document.querySelector(".header-top p").style.color = textcolor ;
            }
    else {  
            document.querySelector(".top-course").style.backgroundColor = "";
            document.querySelector(".a1").style.color = "" ; 
            document.querySelector(".a2").style.color = "" ; 
            document.querySelector(".a3").style.color = "" ; 
            document.querySelector(".a4").style.color = "" ; 
            document.querySelector(".a5").style.color = "" ; 
            document.querySelector(".header-top p").style.color = "" ;
        }
})

