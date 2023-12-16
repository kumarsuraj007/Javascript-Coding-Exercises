// example 
let arr = [1, 2, 3, 4, 5];
let total = arr.reduce(totalFn, 0)
function totalFn (acc, val) {
    return acc + val
}

console.log(total);

// another example 
let products = [{
    name: 'apple',
    count: 2,
    price: 1000
},
{
    name: 'banana',
    count: 3,
    price: 800
}];

let totalFruits = products.reduce(callback, 0);

function callback(acc, val) {
    let subTotal = val.count * val.price;
    return acc + subTotal;
}

console.log(totalFruits)