//Анимация header'а (Скролл и перезагрузка)
//выезд направо
let but_right = document.querySelector(".header-wrapper__button");
let h1_right = document.querySelector(".header__h1");

let screen = window.innerHeight;
function right() {
  but_right.classList.add("animRight") || h1_right.classList.add("animRight");
}
function right1(){

      let but = but_right.getBoundingClientRect().bottom;
      let h1 = h1_right.getBoundingClientRect().bottom;
      if(but < screen || h1 < screen){
        but_right.classList.add("animRight") || h1_right.classList.add("animRight");
      }
  }
document.addEventListener("DOMContentLoaded", right);
document.addEventListener("scroll", right1);
  
//выезд Лого вниз
let logoDown = document.querySelector(".header__logo");

let screen1 = window.innerHeight;
function down() {
  logoDown.classList.add("animLogoDown");
}
function down(){

      let logo = logoDown.getBoundingClientRect().top;
      if(logo < screen1){
        logoDown.classList.add("animLogoDown");
      }
  }
document.addEventListener("DOMContentLoaded", down);
document.addEventListener("scroll", down);

//выезд текста вверх
let textUp = document.querySelector(".header__p");
let formUp = document.querySelector(".header_form-container");

function up() {
  textUp.classList.add("animUp") || formUp.classList.add("animUp");
}
function up(){

      let p = logoDown.getBoundingClientRect().top;
      if(p < screen1){
        textUp.classList.add("animUp") || formUp.classList.add("animUp");
      }
  }
document.addEventListener("DOMContentLoaded", up);
document.addEventListener("scroll", up);
//выезд левой картинки направо и текста налево
let imgLeft = document.querySelector(".section-1_img-left");

    window.addEventListener('scroll', function(){

  let img = imgLeft.getBoundingClientRect().top;
  if(img < screen){
     imgLeft.classList.add("animRight");
  }
})
let textRight = document.querySelector(".section-1_text-right");

    window.addEventListener('scroll', function(){

  let text = textRight.getBoundingClientRect().top;
  if(text < screen){
    textRight.classList.add("animleft");
  }
})
//выезд еще одной левой картинки направо и иконок вверх
let imgLeftTwo = document.querySelector(".section-2_block-wrapper__img");

    window.addEventListener('scroll', function(){

  let img2 = imgLeftTwo.getBoundingClientRect().top;
  if(img2 < screen){
    imgLeftTwo.classList.add("animRight");
  }
})

let icon1 = document.querySelector(".section-2_block-wrapper__img1");
let icon2 = document.querySelector(".section-2_block-wrapper__img2");
let icon3 = document.querySelector(".section-2_block-wrapper__img3");
let icon4 = document.querySelector(".section-2_block-wrapper__img4");

  window.addEventListener('scroll', function(){
  let i = icon1.getBoundingClientRect().top;
 if(i < screen){
    icon1.classList.add("animUp");
  }
})
  window.addEventListener('scroll', function(){
  let i2 = icon2.getBoundingClientRect().top;
 if(i2 < screen){
    icon2.classList.add("animUp2");
 }
})
    window.addEventListener('scroll', function(){
  let i3 = icon3.getBoundingClientRect().top;
if(i3 < screen){
    icon3.classList.add("animUp3");
  }
})
  window.addEventListener('scroll', function(){
  let i4 = icon4.getBoundingClientRect().top;
if(i4 < screen){
    icon4.classList.add("animUp4");
  }
})
//выезд правой картинки налево и текста направо
let textLeft = document.querySelector(".section-3_block");

    window.addEventListener('scroll', function(){

  let text1 = textLeft.getBoundingClientRect().top;
  if(text1 < screen){
    textLeft.classList.add("animRight");
  }
})
let imgRight = document.querySelector(".section-3_block__img");

    window.addEventListener('scroll', function(){

  let img1 = imgRight.getBoundingClientRect().top;
  if(img1 < screen){
    imgRight.classList.add("animleft");
  }
})
//выезд правой картинки налево и текста направо
let p = document.querySelector(".section-4_p");
let but1 = document.querySelector(".section-4_button");
let sec4_h2 = document.querySelector(".section-4_h2");

  window.addEventListener('scroll', function(){
  let text2 = p.getBoundingClientRect().top;
  if(text2 < screen){
    p.classList.add("animRight");
  }
})
  window.addEventListener('scroll', function(){
  let text3 = but1.getBoundingClientRect().top;
  if(text3 < screen){
    but1.classList.add("animRight");
  }
})
    window.addEventListener('scroll', function(){
  let text4 = sec4_h2.getBoundingClientRect().top;
  if(text4 < screen){
    sec4_h2.classList.add("animleft");
  }
})
//анимация стоимости
let sec5_h2 = document.querySelector(".section-5_h2");
let sec5_line = document.querySelector(".section-5_line");

  window.addEventListener('scroll', function(){
  let price = sec5_h2.getBoundingClientRect().top;
  if(price < screen){
    sec5_h2.classList.add("animRight");
  }
})
  window.addEventListener('scroll', function(){
  let priceLine = sec5_line.getBoundingClientRect().top;
  if(priceLine < screen){
    sec5_line.classList.add("animleft");
  }
})
//блоки стоимости на верх
let card1 = document.querySelector(".card");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");

  window.addEventListener('scroll', function(){
  let block = card1.getBoundingClientRect().top;
 if(block < screen){
  card1.classList.add("animBlock1");
  }
})
  window.addEventListener('scroll', function(){
  let block2 = card2.getBoundingClientRect().top;
 if(block2 < screen){
  card2.classList.add("animBlock2");
 }
})
    window.addEventListener('scroll', function(){
  let block3 = card3.getBoundingClientRect().top;
if(block3 < screen){
  card3.classList.add("animBlock3");
  }
})
  window.addEventListener('scroll', function(){
  let block4 = card4.getBoundingClientRect().top;
if(block4 < screen){
  card4.classList.add("animBlock4");
  }
})
//Анимация наши клиеты
let sec6_h2 = document.querySelector(".section-6_h2");
let sec6_line = document.querySelector(".section-6_line");

  window.addEventListener('scroll', function(){
  let head = sec6_h2.getBoundingClientRect().top;
  if(head  < screen){
    sec6_h2.classList.add("animRight");
  }
})
  window.addEventListener('scroll', function(){
  let Line = sec6_line.getBoundingClientRect().top;
  if(Line < screen){
    sec6_line.classList.add("animleft");
  }
})
//блоки клиентов
let cl1 = document.querySelector(".section-6_img-1");
let cl2 = document.querySelector(".section-6_img-2");
let cl3 = document.querySelector(".section-6_img-3");
let cl4 = document.querySelector(".section-6_img-4");

  window.addEventListener('scroll', function(){
  let bl = cl1.getBoundingClientRect().top;
 if(bl < screen){
  cl1.classList.add("animBlock1");
  }
})
  window.addEventListener('scroll', function(){
  let bl2 = cl2.getBoundingClientRect().top;
 if(bl2 < screen){
  cl2.classList.add("animBlock2");
 }
})
    window.addEventListener('scroll', function(){
  let bl3 = cl3.getBoundingClientRect().top;
if(bl3 < screen){
  cl3.classList.add("animBlock3");
  }
})
  window.addEventListener('scroll', function(){
  let bl4 = cl4.getBoundingClientRect().top;
if(bl4 < screen){
  cl4.classList.add("animBlock4");
  }
})
//Анимация отзывы
let sec7_h2 = document.querySelector(".section-7_h2");
let sec7_line = document.querySelector(".section-7_line");
let sec7_slider = document.querySelector(".section-7_slider-item");

  window.addEventListener('scroll', function(){
  let head1 = sec7_h2.getBoundingClientRect().top;
  if(head1  < screen){
    sec7_h2.classList.add("animRight");
  }
})
  window.addEventListener('scroll', function(){
  let Line1 = sec7_line.getBoundingClientRect().top;
  if(Line1 < screen){
    sec7_line.classList.add("animleft");
  }
})
//Анимация слайдера не получилась
  window.addEventListener('scroll', function(){
  let Slider = sec7_slider.getBoundingClientRect().top;
  if(Slider < screen){
    sec7_slider.classList.add("animUP");
  }
})
//Анимация футера
let sec8_cont = document.querySelector(".section-8_wrapper-contact");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let textarea = document.querySelector(".text");
let sec8_sub = document.querySelector(".section-8_submit");
let tw = document.querySelector(".fa-twitter-square");
let fa = document.querySelector(".fa-facebook-square");
let go = document.querySelector(".fa-google-plus-square");
let ins = document.querySelector(".fa-instagram");

  window.addEventListener('scroll', function(){
  let cont = sec8_cont.getBoundingClientRect().top;
 if(cont < screen){
  sec8_cont.classList.add("animUp");
  }
})
  window.addEventListener('scroll', function(){
  let inputName = name.getBoundingClientRect().top;
 if(inputName < screen){
    name.classList.add("animUp2");
 }
})
    window.addEventListener('scroll', function(){
  let inputEmail = email.getBoundingClientRect().top;
if(inputEmail < screen){
    email.classList.add("animUp3");
  }
})
window.addEventListener('scroll', function(){
  let inputText = textarea.getBoundingClientRect().top;
if(inputText < screen){
  textarea.classList.add("animUp4");
  }
})
  window.addEventListener('scroll', function(){
  let inputsub = sec8_sub.getBoundingClientRect().top;
 if(inputsub < screen){
  sec8_sub.classList.add("animUp");
  }
})
  window.addEventListener('scroll', function(){
  let twit = tw.getBoundingClientRect().top;
 if(twit < screen){
    tw.classList.add("animBlock1");
 }
})
    window.addEventListener('scroll', function(){
  let facebook = fa.getBoundingClientRect().top;
if(facebook < screen){
    fa.classList.add("animBlock2");
  }
})
  window.addEventListener('scroll', function(){
  let google = go.getBoundingClientRect().top;
if(google < screen){
    go.classList.add("animBlock3");
  }
})
  window.addEventListener('scroll', function(){
  let insta = ins.getBoundingClientRect().top;
if(insta < screen){
    ins.classList.add("animBlock4");
  }
})
//Здесь меню навигации прилипает к верхней границе экрана
var navPanel = document.querySelector(".nav");

var avatarSourceBottom = navPanel.getBoundingClientRect().bottom + window.pageYOffset;

window.addEventListener('scroll', function(){
  if (navPanel.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
    navPanel.classList.remove('fixed');
  } else if (window.pageYOffset > avatarSourceBottom) {
    navPanel.classList.add('fixed');
  }
})

//Плавный скролл
$(".footer-scroll").click(function(){
  $("html,body").animate({
      scrollTop:0},1000);
})
$(".header-wrapper__button-about").click(function(){
  $("html,body").animate({
      scrollTop:600},1000);
})
$(".header-wrapper__button-price").click(function(){
  $("html,body").animate({
      scrollTop:2600},1000);
})
$(".nav1").click(function(){
  $("html,body").animate({
      scrollTop:$("#nav").offset().top},1000);
})
$(".advantages").click(function(){
  $("html,body").animate({
    scrollTop:$("#advantages").offset().top},1000);
})
$(".order").click(function(){
  $("html,body").animate({
    scrollTop:$("#order").offset().top},1000);
})
$(".price").click(function(){
  $("html,body").animate({
    scrollTop:$("#price").offset().top},1000);
})
$(".comments").click(function(){
  $("html,body").animate({
    scrollTop:$("#comments").offset().top},1000);
})
$(".contact").click(function(){
  $("html,body").animate({
    scrollTop:$("#contact").offset().top},1000);
})
$(".section-1_button").click(function(){
  $("html,body").animate({
      scrollTop:1100},1000);
})
$(".section-3_block__button").click(function(){
  $("html,body").animate({
      scrollTop:2600},1000);
})
$(".section-5_price__button").click(function(){
  $("html,body").animate({
      scrollTop:4000},1000);
})

// Здесь исчезает стрелка вверх
var up = document.querySelector(".footer-scroll");

var arrowUp = up.getBoundingClientRect().top;

window.onscroll = function arrow() {
  if (up.classList.contains('arrow') && window.pageYOffset > arrowUp) {
    up.classList.remove('arrow');
  } else if (window.pageYOffset < arrowUp) {
    up.classList.add('arrow');
  }
};







