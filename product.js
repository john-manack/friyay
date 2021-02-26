'use strict';

const multiply = (num1, num2) => {
    let product = 0;
    for (let i=0; i <= (num2 - 1); i++) {
        product += num1;
    }
    return product;
}

const number1 = 6;
const number2 = 10;

console.log("The product of ", number1, " and ", number2, " is ", multiply(number1, number2));