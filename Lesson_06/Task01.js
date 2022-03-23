'use strict';

for (let i = 1; i <= 10; i++) {
    let container = ``, innerContainer = ``;
    for (let j = 1; j <= 10; j++) {
        innerContainer += `${i ** j} `;
    }
    container += innerContainer;
    innerContainer = ``;
    console.log(container);
}

