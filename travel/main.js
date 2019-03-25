//здесть появляется форма обратой связи и скрывается
window.onload = function () {
    var form = document.querySelector('.form_container');
    var button = document.querySelector('.popul_container__button');
    var krest = document.querySelector('.forms_container_content__krest');
    function show() {
        form.style.display = "flex";
    }
    function displaynone() {
        form.style.display = "none";
    }
    button.onclick = show;
    krest.onclick = displaynone;
}


//здесь "разворачиваются/сворачиваются" вопросы

let fq = document.getElementsByClassName("faq-item-question");
let fa = document.getElementsByClassName("faq-item-answer");
let arrow = document.getElementsByClassName("arrow-little");

fq[0].onclick = function () {
    SHOW(0);
}
fq[1].onclick = function () {
    SHOW(1);
}
fq[2].onclick = function () {
    SHOW(2);
}
fq[3].onclick = function () {
    SHOW(3);
}

// здесь поворачивается стрелка

function SHOW(elementID) {
    if (fa[elementID].style.display == "none") {
        fa[elementID].style.display = "block";
        arrow[elementID].style.transform = "rotate(180deg)";

    }
    else {
        fa[elementID].style.display = "none";
        arrow[elementID].style.transform = "rotate(0deg)";

    }
}
//!!!!!!!!!Здесь меняется оранжевая линия!!!!!!!!

/*Первый вариант оранжевой линии c jquery/ 
 Увеличивает нужную линию, но мышкой необязательно кликать по самой линии,
 можно просто по DIVу в котором она "лежит". Это неправильно (хотя, в данном случае, можно прикинуться, что так и нужно)!
 Может на линию тоже отдельный DIV нужен? 
 Пыталась сделать обратное действие: по клику мыши, чтобы уменьшалась...не получилось. Только в виде анимации:
 увеличилась - уменьшилась (закомментировала ниже) */ 

// $(".blok_bord").click(function(){
//     $(this).find(".orange").animate({
//         width: "200px"}, "1000" );
//     })

// $(".blok_bord").click(function(){
//     $(this).find(".orange").animate({
//         width: "110px"},);
//     });


/*Второй вариант оранжевой линии jquery/ 
Увеличивается по клику мыши стразу все линии. Но зато нужно нажимать конкретно на линию!
Также не получилось сделать обратное действие*/

// $(".orange").click(function(){
//     $(".orange").animate({
//         width: "200px"}, "1000" );
//     })
   
// Здесь вообще мало что получилось...

// var bg = document.querySelector('.orange');

// bg.onclick = function (){
//     bg.style.width = "200px";
// }

// Scroll

$(".arrow_wrapper").click(function(){
    $("html,body").animate({
        scrollTop:0},);
})