const earnings = +prompt('Введите ваш доход: ', 0);
let charge;

if (earnings < 15000)
    charge = earnings * 0.13;
else if (earnings > 15000 && earnings < 50000)
    charge = earnings * 0.2;
else 
    charge = earnings * 0.3;

console.log('Cумма налога: ', charge);