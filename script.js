



var but = document.querySelector(".button");

but.onclick = generate;

function generate() {
    let number = Math.round(Math.random() * 10);
    console.log(number)
}




