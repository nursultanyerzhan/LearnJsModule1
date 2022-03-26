'use strict';

const runGame2 = () => {
    let userNumberMin, userNumberMax, maxAttemptCount;
    while (true) {
        userNumberMin = +prompt('Введите начало промежутка ');

        if (Number.isNaN(userNumberMin)) {
            alert('Введи число!');
            continue;
        }
        if (!userNumberMin) {
            return;
        }

        userNumberMax = +prompt('Введите конец промежутка ');

        if (Number.isNaN(userNumberMax)) {
            alert('Введи число!');
            continue;
        }
        if (!userNumberMax) {
            return;
        }
        maxAttemptCount = (userNumberMax - userNumberMin) * 0.3;
        break;
    }

    const generatedNumberByBot = getRandomInRange(userNumberMin, userNumberMax);
    let userEnteredNumbers = [];
    let attemptCount = 0;
    while (true) {
        var userNumber = +prompt(`Введите число от ${userNumberMin} до ${userNumberMax} `);

        if (Number.isNaN(userNumber)) {
            alert('Введи число!');
            continue;
        }
        if (!userNumber) {
            return;
        }

        const doIEnterThisNumberBefore = userEnteredNumbers.some(item => item === userNumber);

        if (doIEnterThisNumberBefore) {
            alert('Вы уже ввели эту числу!');
            continue;
        }
        
        
        if (userNumber < generatedNumberByBot) {
            alert('Больше!');
            userEnteredNumbers.push(userNumber);
            attemptCount++;
            if (attemptCount === maxAttemptCount) {
                alert('У вас не осталось попыток, вы проиграли!');
                break;
            }
            continue;
        }

        if (userNumber > generatedNumberByBot) {
            alert('Меньше!');
            userEnteredNumbers.push(userNumber);
            attemptCount++;
            if (attemptCount === maxAttemptCount) {
                alert('У вас не осталось попыток, вы проиграли!');
                break;
            }
            continue;
        }

        if (userNumber === generatedNumberByBot) {
            alert('Правильно!');
            return;
        }
    }
}

//runGame2();
