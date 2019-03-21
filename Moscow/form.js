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

   let name  = document.querySelector("[name='name']");
    let email  = document.querySelector("[name='email']");
    let telephone  = document.querySelector("[name='telephone']");
    let sub = document.querySelector(".submit");
    let text = document.querySelector("[name='text']");   
    
    sub.onclick = function (event){
        event.preventDefault();

   



if (name == "") {
    // name.className = "empty";
    alert("Ты не заполнил имя");
}
else if (email ==""){
    // email.className = "empty";
    alert("Ты не заполнил email");  
}
else if (telephone ==""){
    // telephone.className = "empty";
    alert("Ты не заполнил телефон");  
}
else if (text ==""){
    // text.className = "empty";
    alert("Ты не заполнил вопрос");  
}
 }