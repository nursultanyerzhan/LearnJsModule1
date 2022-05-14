'use strict';

const body = document.querySelector('body');
const input = document.createElement('input');
const p = document.createElement('p');

input.addEventListener('change', () => {
    setTimeout(() => {
        p.textContent = input.value;
    }, 300);
});

body.append(input);
body.append(p);