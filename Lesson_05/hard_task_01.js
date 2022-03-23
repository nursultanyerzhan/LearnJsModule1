'use strict';

const nod = (x, y) => {
    if (y === 0) 
        return x;
    return nod(y, x % y);
}