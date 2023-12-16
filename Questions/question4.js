// 4. Write a JavaScript program to reverse a given string.  

// function reverseString (str) {
//     let reversed = '';

//     for (i = str.length - 1; i >=0; i--) {
//        reversed += str[i]
//     }
//     return reversed
// }

// console.log(reverseString('suraj'))

let str = 'suraj';

function reverseString (str) {
    return str.split('').reverse().join('')
}

console.log(reverseString(str))