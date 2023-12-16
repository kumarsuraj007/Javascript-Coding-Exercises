// pass by value 
var a = 5;
var b = a;
console.log(b)

// pass by reference 
var c = {username: 'suraj'}
var d = {...c};
d.username = 'Nandini'
console.log(c)
console.log(d)


// Functions are First Class Citizens in JS 
// mens we can pass function as arguments 
function greet (hello)
 {
    hello ()
 }
 greet ( function () {
    console.log('hello')
 })

//  2 we can also return functions 
function createLogger() {
    return function() {
      console.log('wow');
    };
  }
  
createLogger()

// default params 
function run(param=6) {
    return param
}

run()
