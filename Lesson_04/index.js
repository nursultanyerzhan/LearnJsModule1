'use strict';

{
    const productName = prompt('Наименование товара: ');
    const productCount = +prompt('Количество товара: ', 0);
    const productCategory = prompt('Категория товара: ');
    const productPrice = +prompt('Цена товара: ', 0);

    if (!isNaN(productCount) && !isNaN(productPrice)) 
        console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productCount * productPrice} ${productCategory}`);
    else 
        console.log('Вы ввели некорректные данные!');
}