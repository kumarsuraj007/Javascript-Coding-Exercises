// Write a program to find the sum of the numbers which is divisible by 9 and 5 

let numbers = [];
let sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 9 === 0 && i % 5 === 0) {
        numbers.push(i);
        sum += i;
    }
}

console.log(numbers, sum)