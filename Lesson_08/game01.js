'use strict';


const runGame = () => {
    const generatedNumberByBot = Math.round(Math.random() * 100);
    console.log(generatedNumberByBot);
    while (true) {
        const userNumber = +prompt('Введите число до 100 ');

        if (Number.isNaN(userNumber)) {
            alert('Введи число!');
            continue;
        }

        if (!userNumber) {
            return;
        }

        if (userNumber < generatedNumberByBot) {
            alert('Больше!');
            continue;
        }

        if (userNumber > generatedNumberByBot) {
            alert('Меньше!');
            continue;
        }

        if (userNumber === generatedNumberByBot) {
            alert('Правильно!');
            return;
        }
    }
}

// runGame();
