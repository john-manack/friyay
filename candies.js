'use strict';

const candies = [2,3,5,1,3]
const extraCandies = 3
// Expected output: [true, true, true, false, true]

function kids(integer, arr) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + integer) >= Math.max(...arr)) {
            new_arr = [...new_arr, true]
        } else {
            new_arr = [...new_arr, false]
        }
    }
    return new_arr;
}

console.log(kids(extraCandies, candies));

// Long version of above (removing Math.max method and adding push)
function long_kids(integer, arr) {
    let new_arr = [];
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] >= max) {
            max = arr[j];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + integer) >= max) {
            new_arr.push(true)
        } else {
            new_arr.push(false)
        }
    }
    return new_arr;
}

console.log(long_kids(extraCandies, candies));