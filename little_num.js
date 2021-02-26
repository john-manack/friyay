// Write a program that will search an array of integers and will return the smallest integer greater than 0 (n > 0) not in the array.
// Array integers could be between [-10,000 ... 10,000] and have indexes up to 10,000.

//EX.
// Arr = [1,3,6,4,1,2]
// Expected N = 5

// Arr = [-3,2,-1,5,3]
// expected N = 1


"use strict";

function lowestNumber(arr) {
    let littleNum = 0;
    const lengthArr = arr.length;
    for (let i = 1; i < lengthArr; i++) {
        for (let j = 1; j <= lengthArr; j++) {
            if (arr[i] === j) {
                break;
            }
            if (lengthArr === j) {
                littleNum = i - 1;
                return littleNum;
            }
        }
    }
}

let List = [-5, -3, -2, -1, 1, 2, 3, 4, 6, 7, 8, 9, 10 ,11, 13, 14, 15];
console.log(lowestNumber(List));