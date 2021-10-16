var btn1 = document.getElementById('btn1');
var card1 = document.getElementById('card1');
btn1.addEventListener('click', function(){
    card1.classList.toggle('active');
})

var btn2 = document.getElementById('btn2');
var card2 = document.getElementById('card2');
btn2.addEventListener('click', function(){
    card2.classList.toggle('active');
})

var btn3 = document.getElementById('btn3');
var card3 = document.getElementById('card3');
btn3.addEventListener('click', function(){
    card3.classList.toggle('active');
})

var btn4 = document.getElementById('btn4');
var card4 = document.getElementById('card4');
btn4.addEventListener('click', function(){
    card4.classList.toggle('active');
})

var btn5 = document.getElementById('btn5');
var card5 = document.getElementById('card5');
btn5.addEventListener('click', function(){
    card5.classList.toggle('active');
})


var push = document.getElementById('push');
var pushCmt = document.getElementById('pushcmt');
push.addEventListener('click',function(){
    push.classList.add('none');
    pushCmt.classList.add('active');
    document.getElementById('pushname').value= "";
    document.getElementById('pushnd').value= "";
})

$(document).ready(function(){
    $("#pushadd").click(function(){
        var pushName = $("#pushname").val();
        var pushNd = $("#pushnd").val();
        $(".cmts").prepend(`
            <div class="cmt">
                <img src="./Img/4.png" alt="">
                <h1>${pushName}</h1>
                <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>
                <p>${pushNd}</p>
            </div>
        `)
    })
})

var pushAdd = document.getElementById('pushadd');
pushAdd.addEventListener('click',function(){
    push.classList.remove('none');
    pushCmt.classList.remove('active');
    
})
