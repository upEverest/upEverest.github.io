var count = 1;
var count1 = 1;
var but = document.querySelector(".button");
var but1 = document.querySelector(".button1");
let computer_number;
let computer_number1;


but.addEventListener("click", generate);
but.addEventListener("click", game);

function generate() {
    computer_number = Math.round(Math.random() * 10);
    console.log(computer_number)
}

function game() {
    var answer = prompt("Попробуй угадать число от 0 до 10");
    if (answer > computer_number) {
        if (count >= 10) {
            alert("Ты проиграл");
            alert("Число неправильных ответов " + count);
            return count = 1;
        }
        alert("Это число меньше " + answer);
        count++;
        game()
    } else if (answer < computer_number) {
        if (count >= 10) {
            alert("Ты проиграл");
            alert("Число неправильных ответов " + count);
            return count = 1;
        }
        alert("Это число больше " + answer);
        count++;
        game()
    } else {
        alert("Ты победил с/со "  +  count + "-ой" + " попытки");
        return count = 1;
    }
}

but1.addEventListener("click", generate1);
but1.addEventListener("click", game1);

function generate1() {
    computer_number1 = Math.round(Math.random() * 10);
    console.log(computer_number1)
}

function game1() {
    var answer = prompt("Попробуй угадать число от 0 до 10 с трех попыток");
    if (answer > computer_number1) {
        if (count1 >= 3) {
            alert("Ты проиграл");
            alert("Число неправильных ответов больше " + count1);
            return count1 = 1;
        }
        alert("Это число меньше " + answer);
        count1++;
        game1()
    } else if (answer < computer_number1) {
        if (count1 >= 3) {
            alert("Ты проиграл");
            alert("Число неправильных ответов больше  " + count1);
            return count1 = 1;
        }
        alert("Это число больше " + answer);
        count1++;
        game1()
    } else {
        alert("Ты победил с/со "  +  count1 + "-ой" + " попытки");
        return count1 = 1;
    }
}
