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
        this.count = 0,
        this.getTotalPrice = function () {
            return this.totalPrice;
        },
        this.addGoods = function (good) {
            this.goods.push(good);
            this.calculateGoodsPrice();
            this.increaseCount(good.productCount);
        },
        this.increaseCount = function (productCount) {
            this.count += productCount;
        },
        this.calculateGoodsPrice = function () {
           this.totalPrice = this.goods.reduce((total, item) => total + (item.productPrice * item.productCount - item.discount), 0);
        },
        this.clear = function () {
            this.goods = [];
            this.totalPrice = 0;
            this.count = 0;
        },
        this.print = function () {
            this.calculateGoodsPrice();
            console.log(`${JSON.stringify(this.goods)}\n Общая сумма: ${this.totalPrice}`);
        }
};
