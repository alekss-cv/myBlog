"use strict"

// список элементов
const bcgImg = document.querySelector(".container_opacity");
// показать скрытый текст по нажатию кнопки
function funShowText_1(){
    document.getElementById("hidden_text_1").style.display = "block";
}
function funShowText_2(){
    document.getElementById("hidden_text_2").style.display = "block";
}
function funShowText_3(){
    document.getElementById("hidden_text_3").style.display = "block";
}

//функция меняющая автоматически главнфй фон сайта
setInterval(function(){
    bcgImg.style.backgroundImage = "linear-gradient(rgba(0 , 0 , 0 ,0.4) , rgba(0 , 0 , 0 ,0.4)) ,  url(\"../img/img_bloks_bcg/block_2_bcg.png\")"
} , 30000);
setInterval(function(){
    bcgImg.style.backgroundImage = "linear-gradient(rgba(0 , 0 , 0 ,0.4) , rgba(0 , 0 , 0 ,0.4)) ,  url(\"../img/img_bloks_bcg/block_3_bcg.png\")"
} , 6


