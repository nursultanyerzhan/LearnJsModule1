'use strict';

const modifyText = text => {
    const firstLetter = text.substring(0,1).toUpperCase();
    const otherLetters = text.substring(1,text.Length).toLowerCase();
    return firstLetter + otherLetters;
}

// console.log(modifyText('привет Мир'));