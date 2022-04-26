let min = 1;
let max = 100;
let guessNumber = 0;
let attempts = 0;

const midleNumber = (min, max) => {
    attempts++;
    return Math.round(min + (max - min) / 2);
}

const showGuessNumber = (compGuesNumber) => {
    const label = document.querySelector('.compGuesNumber');
    label.textContent = compGuesNumber;
}

const startBtn = document.querySelector('.start');
const down = document.querySelector('.down');
const win = document.querySelector('.win');
const up = document.querySelector('.up');

startBtn.addEventListener('click', () => {
    guessNumber = midleNumber(min, max);
    showGuessNumber(guessNumber);
});

down.addEventListener('click', () => {
    max = guessNumber;
    guessNumber = midleNumber(min, max);
    showGuessNumber(guessNumber);
});

up.addEventListener('click', () => {
    min = guessNumber;
    guessNumber = midleNumber(min, max);
    showGuessNumber(guessNumber);
});

win.addEventListener('click', () => {
    showGuessNumber(`Ура я угадал всего лишь ${attempts} попытки`);
});
