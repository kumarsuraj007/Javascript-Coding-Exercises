// example 
let arr = [1,2,3,4,5];
let evenVal = arr.filter((item, value, arr) => {
    return item % 2 === 0
});

console.log(evenVal);


// another example 
let persons = [
    {
        name: 'Suraj',
        age: 21
    },
    {
        name: 'Lisa',
        age: '18'
    },
    {
        name: 'Andrew',
        age: '12'
    }
];

const greaterThan = persons.filter(item => {
    return item.age >= 18
});

console.log(greaterThan);


// Question --> Find the same numbers in an array;

let numbers = [1, 2, 3, 4, 2, 2, 4, 5];
// var singleNum = []
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers.indexOf(numbers[i]) === i) {
//         singleNum.push(numbers[i])
//     } 
// }
// console.log(singleNum)

let duplicateNo = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index
});

console.log(duplicateNo)