// How to push value to end of array without using push method?

let arr = [2, 3, 4];
let value = 5;

arr[arr.length] = value;
console.log(arr);

// How to add value to start of array without using push method?

for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = 1;

console.log(arr);

 -6320