'use strict';

const cart  = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(productName, productPrice, productCount = 1) {
        const newItem = {
            'productName': productName, 
            'productPrice': productPrice,
            'productCount': productCount
        };
        this.items.push(newItem);
        this.calculateItemPrice();
        this.increaseCount(productCount);
    },
    increaseCount (productCount) {
        this.count += productCount;
    },
    calculateItemPrice() {
        this.totalPrice = this.items.reduce((total, item) => total + (item.productPrice * item.productCount), 0)
    },
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(`${JSON.stringify(this.items)}\n Общая сумма: ${this.totalPrice}`);
    },
}

cart.add('Мышка', 3, 2);
cart.add('Клавиатура', 4, 6);
cart.add('Монитор', 10);
cart.print();