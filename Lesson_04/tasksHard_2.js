const earnings = +prompt('Введите ваш доход: ', 0);
const maxChargeUpTo15000 = 15000 * 0.13;
const maxChargeUpTo50000 = maxChargeUpTo15000 + (50000 - 15000) * 0.2;
let charge;

if (earnings < 15000)
    charge = earnings * 0.13;
else if (earnings > 15000 && earnings < 50000)
    charge = maxChargeUpTo15000 + (earnings - 15000) * 0.2;
else
    charge = maxChargeUpTo50000 + (earnings - 50000) * 0.3;

console.log('Cумма налога: ', charge);