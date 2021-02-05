'use strict';

const myArray = [1,2,3,4,5,6];

const descend = myArray.sort((a,b) => a > b ? -1 : 1); // that last piece is a ternary, shorthand for an if statement
console.log(descend); // logs [6,5,4,3,2,1]

const ascend = myArray.sort(); // the default is ascending order
console.log(ascend);
