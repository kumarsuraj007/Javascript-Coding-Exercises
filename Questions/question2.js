// 2. Write a JavaScript program to find the second largest number in an array. 
var arr = [30, 1, 3, 60, 100];

function secLargestNum (arr) {
arr.sort((a, b) => {
    return b - a
})
return arr[1]
}

console.log(secLargestNum(arr))