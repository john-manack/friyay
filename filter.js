'use strict';

const numbersArray = [1,2,3,4,5,6,7]

const myFilter = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 2) || (arr[i] === 4)) {
            newArr = [...newArr, arr[i]]
        }
    }
    return newArr;
}

console.log(myFilter(numbersArray));