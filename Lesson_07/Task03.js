'use strict';

const addPrefix = (names, prefix) => {
    const names_ = names;
    return names_.map(item => `${prefix} ${item}`);
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(addPrefix(names, 'Mr'));