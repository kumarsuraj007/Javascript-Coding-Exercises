// example
let arr = [1, 2, 3, 4, 5];
arr.map((value, item, arr) => {
  console.log(value * 2);
});

// another example
const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const productsVal = products.map(item => ({
    name: item.name,
    totalVal: item.price * item.count
}));

console.log(productsVal)
