'use strict'
// 1
function getArrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// function getArrSum(arr) {
//     return arr.reduce((acc,el) => acc+el,0)
// }
console.log(getArrSum([4, 5, 3]));




// 2
function getWordsLength(str) {
    return str.split(' ').length;
}
console.log(getWordsLength('count these words'));

// 3
function getReversedStr(str) {
    return str.split('').reverse().join('');
}
console.log(getReversedStr('someWords'));



// 4
function frequentSymbol(str) {
    var charObj = {}
    var maxCharValue = 0
    var maxChar = ''
    for (var char of str) {
        if (charObj.hasOwnProperty(char)) {
            charObj[char]++
        } else {
            charObj[char] = 1
        }
    }
    for (var char in charObj) {
        if (charObj[char] > maxCharValue) {
            maxCharValue = charObj[char]
            maxChar = char
        }
    }
    console.log(maxChar);
}
frequentSymbol(words);


function getMax(str) {
    let arr = str.split('');
    let result = ['', 0]
    let obj = {};
    for (let symbol of arr) {
        if (obj[symbol]) {
            obj[symbol]++
        } else {
            obj[symbol] = 1;
        }
    }
    for (let item in obj) {
        let num = obj[item];
        if (num > result[1]) {
            result = [item, num];
        }
    }
    console.log(result[0], result[1]);
    return result[0];
}

console.log(getMax('aaabbbcccddddddd'));