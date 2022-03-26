'use strict';

const calculate = (totalSum, totalCount, promoCode) => {
    let _totalSum = totalSum;

    if (totalCount > 10)
        _totalSum -= _totalSum * 0.03;

    if (_totalSum > 30000) {
        const sumMoreThan30k = _totalSum - 30000;
        const discount = sumMoreThan30k * 0.15;
        _totalSum -= discount;
    }

    if (promoCode === 'METHED')
        _totalSum -= _totalSum * 0.1;
    else if (promoCode === 'G3H2Z1')
        if (_totalSum > 2000)
            _totalSum -= 500;
    
    return _totalSum;
}

// console.log(calculate(40000, 15, 'METHED'));