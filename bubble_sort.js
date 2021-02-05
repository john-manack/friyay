'use strict';

const one = [3, 1, 4, 2]
const two = [12, 5, 11, 1, 4, 7, 9, 2, 6, 3, 10, 8]

function bubbleSort (array_1) {
    for (let j=0; j < array_1.length; j++)
        for (let i = 0; i < array_1.length; i++){
            if (array_1[i + 1] < array_1[i]) {
                let swap = array_1[i];
                array_1[i] = array_1[i + 1];
                array_1[i + 1] = swap;
            }
        }
    return array_1;
}

console.log(bubbleSort(two));