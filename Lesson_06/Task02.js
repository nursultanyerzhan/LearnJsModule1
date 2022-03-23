'use strict';

const isPrime = number_ => {
    for (let i = 2; i < number_ / 2; i++) {
        if (number_ % i === 0)
            return false;
    }
    return true;
}