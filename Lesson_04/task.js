//Вторая задача:
const rain = Math.round(Math.random());

if (rain === 1)
    console.log('Пошёл дождь. Возьмите зонт!');
else
    console.log('Дождя нет!');


//Третья задача:
const rightAnswerMathem = +prompt('Введите кол-во баллов по математике: ', 0);
const rightAnswerRusLang = +prompt('Введите кол-во баллов по русскому языку: ', 0);
const rightAnswerInform = +prompt('Введите кол-во баллов по информатике: ', 0);

if ((rightAnswerMathem + rightAnswerRusLang + rightAnswerInform) < 265)
    console.log('К сожалению, вы не поступили на бюджет!');
else
    console.log('Поздравляю, вы поступили на бюджет!');

//Четвёртая задача:
const requestedMoney = +prompt('Сколько денег хотите снять: ', 0);
if (requestedMoney % 100 === 0)
    console.log(`Банкомат может выдать сумму ${requestedMoney}`);
else
    console.log(`Банкомат НЕ может выдать сумму ${requestedMoney}`);