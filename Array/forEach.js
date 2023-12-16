// example 
let arr = [1,2,3,4,5];
arr.forEach((item, index, arr) => console.log(`a${item} = ${index}`));

// Question --> Show how many same value present in an letter arr;
let letter = ['a', 'b', 'a', 'c', 'c'];
let count = {};

letter.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count)
