'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  add(productName, productPrice, productCount = 1) {
    const newItem = {
      productName,
      productPrice,
      productCount,
    };
    this.items.push(newItem);
    this.increaseCount(productCount);
  },
  increaseCount(productCount) {
    this.count += productCount;
  },
  calculateItemPrice() {
    return this.items.reduce((total, item) =>
      total + (item.productPrice * item.productCount), 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)}\n 
    Общая сумма: ${this.totalPrice}`);
  },
};

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return this.calculateItemPrice();
  },
});
