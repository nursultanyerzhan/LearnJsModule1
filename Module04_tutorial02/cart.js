'use strict';

const Goods = function (productName, productPrice, productCount, discount) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productCount = productCount;
    this.discount = discount;
};


const FoodGoods = function (productName, productPrice, productCount, discount, calory) {
    Goods.call(this, productName, productPrice, productCount, discount);
    this.calory = calory;
};
const СlothingGoods = function (productName, productPrice, productCount, discount, material) {
    Goods.call(this, productName, productPrice, productCount, discount);
    this.material = material;
};
const TechnicsGoods = function (productName, productPrice, productCount, discount, equipmentType) {
    Goods.call(this, productName, productPrice, productCount, discount);
    this.equipmentType = equipmentType;
};

const Cart = function (goods = []) {
    this.goods = goods,
    this.totalPrice = 0,
    this.count = 0
};

Cart.prototype.getTotalPrice = function () {
    return this.totalPrice;
};
Cart.prototype.addGoods = function (good) {
    this.goods.push(good);
    this.calculateGoodsPrice();
    this.increaseCount(good.productCount);
};
Cart.prototype.increaseCount = function (productCount) {
    this.count += productCount;
};
Cart.prototype.calculateGoodsPrice = function () {
    this.totalPrice = this.goods.reduce((total, item) => total + (item.productPrice * item.productCount - item.discount), 0);
};
Cart.prototype.clear = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};
Cart.prototype.print = function () {
    this.calculateGoodsPrice();
    console.log(`${JSON.stringify(this.goods)}\n Общая сумма: ${this.totalPrice}`);
};