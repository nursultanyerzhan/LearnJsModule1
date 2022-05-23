// task01
const array1 = ['module.jsx', 'index.html', 'style.css', 'index.js',
    'file.ts', 'library.css',
    'my.plugin.js'];

const check = item => {
    let regExp = /js|jsx|ts/;
    return regExp.test(item);
};

const result = [];
array1.forEach(item => {
    if (check(item))
        result.push(item);
});
// console.log(result);


//task02
const array2 = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io',
    'zero@mai1.xyz', 'tom_yam@ya.ru', 'my-mail@yandex.ru'];

const checkMail = item => {
    let regExp = /(\w)@([A-Za-z]){3,}\.([a-z]{2,5})$/i;
    return regExp.test(item);
}

const result2 = [];
array2.forEach(item => {
    if (checkMail(item))
        result2.push(item);
});
console.log(result2);


//task3
{
    const text = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';
    let regExp = /\(.+?\)/g;
    const match = text.match(regExp);
    // console.log(match);
}


//task4
{
    const tags = ['<a href="http://site.ru">site.ru</a>', '<a href="http://site.com">site.com</a>'];
    let regExp = /".+?"/g;
    tags.forEach(item => {
        const match = item.match(regExp);
        console.log(match);
    });
}