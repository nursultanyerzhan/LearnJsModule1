const items = document.querySelectorAll('.item');
items[3].after(items[0]);

const li_Fives = document.querySelector('.item_three .content ol');
const item_three_h2 = document.querySelector('.item_three .content h2');
const li_Threes = document.querySelector('.item_five .content ol');
const item_five_h2 = document.querySelector('.item_five .content h2');
item_three_h2.after(li_Threes);
item_five_h2.after(li_Fives);


const item_four_props__list = document.querySelectorAll('.item_four .content .props__list .props__item');
const item_two_props__list = document.querySelectorAll('.item_two .content .props__list .props__item');
item_four_props__list[2].after(item_two_props__list[3]);

const item_six_props__list = document.querySelectorAll('.item_six .content .props__list .props__item');
item_two_props__list[8].after(item_six_props__list[9]);
item_two_props__list[8].after(item_six_props__list[8]);

