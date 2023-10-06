// 1. Write a JavaScript program to find the maximum number in an array. 
var arr = [30, 1, 3, 60, 100];

function maxNumber (arr) {
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
return max
}

console.log(maxNumber(arr))