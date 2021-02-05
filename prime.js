'use strict';

const givenMax = 100;

function findPrimes(integer) {
    let primeList = [];
    for (let i=2; i <= integer; i++) {
        if (i === 2 || i === 3 || i === 5 || i === 7){
            primeList.push(i)
        } if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            primeList.push(i);
        }
    }
    return primeList;
}

console.log(findPrimes(givenMax));