'use strict';
const unorderedArray = [6,5,4,3,2,1];
const mySort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, swapping; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                swapping = arr[j+1];
                arr[j+1] = j;
                arr[j] = swapping;
            };
        };
    };
    return arr;
};

console.log(mySort(unorderedArray));