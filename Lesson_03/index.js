'use strict';

// {
//     const productName = "keyBoard";
//     const productCount = 150;
//     const productCategory = 'device';
//     const productPrice = 50;

//     console.log('productName: ', productName);
//     console.log('totalAmount: ', productCount * productPrice);
// }

// {
//     const productName = "Ручка";
//     const productCount = 500;
//     const productCategory = 'канцелярские';
//     const productPrice = 9;

//     console.log('productName: ', productName);
//     console.log('totalAmount: ', productCount * productPrice);
// }

{
    const productName = prompt('Наименование товара: ');
    const productCount = parseInt(prompt('Количество товара: ', 0));
    const productCategory = prompt('Категория товара: ');
    const productPrice = parseInt(prompt('Цена товара: ', 0));

    console.log('productNameType', typeof productName);
    console.log('productCountType', typeof productCount);
    console.log('productCategoryType', typeof productCategory);
    console.log('productPriceType', typeof productPrice);

    console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productCount * productPrice} ${productCategory}`);
}