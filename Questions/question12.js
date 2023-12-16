let count = 0;
let sum = 0;

let arr = [1, 2, -3, -600, -800, 500, 300, 245];

function sumCount(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++; // Increment count for negative values
        } else if (arr[i] > 0) {
            sum += arr[i]; // Add positive values to the sum
        }
    }
}

sumCount(arr);

console.log("Count of negative values:", count);
console.log("Sum of positive values:", sum);
