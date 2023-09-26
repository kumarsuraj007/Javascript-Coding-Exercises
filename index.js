// 1. Write a function to calculate two numbers?
function addTwoNum (a, b) {
console.log(a + b);
}

addTwoNum(1, 4);

// 2. Write a JavaScript program to find the maximum number in an array. 
var arr = [30, 1, 3, 60, 100];

function maxArr (arr) {
let max = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
return max;
}

console.log(maxArr(arr))

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). Function to check if  string is a palindrome.
function isPalindrome(str) {
    let start = 0
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++;
        end--
    }
    return true;
}

console.log(isPalindrome("dalad"))

// 4. Write a JavaScript program to reverse a given string.  
function reverseString (str) {
    let reversed = '';
    for (let i = str.length - 1; i >=0; i--) {
        reversed += str[i];
    }
    return reversed
}

console.log(reverseString("suraj"));

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.  
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNum (arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);
        }
    }
    return newArray
}

console.log(evenNum(numArr));

// 6. Write a JavaScript program to calculate the factorial of a given number.  
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(10));

// 7. Write a JavaScript function to check if a given number is prime. 
function isPrime(num) {
    if (num <= 1) {
        return false
    }

    for (let i = 0; i < num; i ++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(7))

// 8. Write a JavaScript program to find the largest element in a nested array. 
let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function findLargestNestedArray (nestedArr) {
    let max = nestedArr[0][0]
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr.length; j++) {
            if (nestedArr[i][j] > max) {
                max = nestedArr[i][j]
            }
        }
    }
    return max
 }

console.log(findLargestNestedArray(nestedArr))