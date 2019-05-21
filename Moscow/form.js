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

var sub = document.querySelector(".start");
var fieldName = document.querySelector(".name");
var fieldMail = document.querySelector(".mail");
var fieldTel = document.querySelector(".tel");
check(fieldName);
check(fieldMail);
check(fieldTel);

sub.onclick = function () {
    event.preventDefault();

    if (!fieldName.value) {
        fieldName.className = "first";
        fieldName.placeholder = "Заполните имя, пожалуйста";
    }
    else {
        fieldName.className = "second";
       
    }
    if (!fieldMail.value) {
        fieldMail.className = "first";
        fieldMail.placeholder = "Заполните электронную почту, пожалуйста"
    } else {
        fieldMail.className = "second";
    }
    if (!fieldTel.value) {
        fieldTel.className = "first";
        fieldTel.placeholder = "Заполните телефон, пожалуйста"
    } else {
        fieldTel.className = "second";
    } 
}   



function check(x) {
    x.onblur = function () {
        if (x.value == "") {
            x.className = "first";
        } else {
            x.className = "second";
        }
    }
}

let reset = document.querySelector(".reset");
reset.onclick = function () {
    fieldTel.className = "";
    fieldMail.className = "";
    fieldName.className = "";
    fieldTel.placeholder = "*Ваш телефон";
    fieldMail.placeholder = "*email@mail.ru";
    fieldName.placeholder = "*Ваше имя";
}