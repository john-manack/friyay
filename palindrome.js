'use strict';

const string1 = "bingo";
const string2 = "radar";

const checkPalindrome = (string) => {
    let newString = "";
    for (let i = (string.length - 1); i >= 0; i--) {
        newString += string[i]
    }
    if (string === newString) {
        return true
    } else {
        return false
    }
}

console.log("Should return false: ", checkPalindrome(string1));
console.log("Should return true: ", checkPalindrome(string2));