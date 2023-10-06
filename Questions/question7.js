// 7. write the number of same value in the arr 
const arr = ['a', 'b', 'c', 'a', 'a', 'd', 'c'];

let count = {};
arr.forEach(item => {
    if (count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
});

console.log(count)