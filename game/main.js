var count = 0;
var but = document.querySelector(".button");

function generate(){
    return  Math.round(Math.random() * 10);
}
but.onclick = game;

function game() {
    let computer_number = generate();
    console.log(computer_number);
    var answer = prompt("Попробуй угадать число");
    if (answer > computer_number) {
        if (count >= 10) {
            alert("Ты проиграл");
            alert("Число попыток:" + count);
            return;
        }
        alert("Ты взял многовато");
        count++;
        game()

    } else if (answer < computer_number) {
        if (count >= 10) {
            alert("Ты проиграл");
            alert("Число попыток:" + count);
            return;
        }
        alert("Ты взял маловато");
        count++;
        game1()
    } else {
        alert("ты победил");
        alert("Число попыток:" + count);
        return count = 0;
        }
}