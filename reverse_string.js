'use strict';

const string1 = "bingo";

const reverseString = (strVar) => {
    let newString = "";
    for (let i = (strVar.length - 1); i >= 0; i--) {
        newString += strVar[i]
    }
    return newString;
}

console.log(reverseString(string1));