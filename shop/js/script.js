//Вход в ЛК
var cross = document.querySelector(".registration-cross");
var account = document.querySelector(".account");
var form = document.querySelector(".registration");

function show(){
    form.style.display = "flex";
}
function displaynone(){
    form.style.display = "none";
}
account.onclick = show;
cross.onclick = displaynone;