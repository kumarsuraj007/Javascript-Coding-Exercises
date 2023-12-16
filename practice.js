// How to find the max value in an Array
const arr = [1,2,3,4,60,78];

function maxValue (arr) {
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
}
return max
}

console.log(maxValue(arr));