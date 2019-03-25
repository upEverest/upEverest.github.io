//создаем 4 переменные 
let light = document.querySelector(".theme_light"); //берем кнопку розовую
let darkly = document.querySelector(".theme_darkly"); //берем кнопку синию
let neutral = document.querySelector(".theme_neutral"); //берем кнопку серую
let container = document.querySelector(".form_container_content"); //берем подопытную панель

document.onclick = function (event) {
    console.log("hello") // для проверки

    if (event.target == light) { //при нажатии на переменную light (розовую кнопку)
        container.className = "pink"; //переменная container (панель) меняет класс (background-color)

    } else if (event.target == darkly) {
        container.className = "blue";

    } else if (event.target == neutral) {
        container.className = "grey";

    } else if (event.target == container) {
        container.className = "form_container_content";
    }
}