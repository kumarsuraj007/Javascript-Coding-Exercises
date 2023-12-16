// let str = 'anubhav';
// function capitalizeR(str) {
//     return str.split('').map((char) => char.toLowerCase() === 'b' ? char.toUpperCase() : char.toLowerCase)
//     .join()
// }

// console.log(capitalizeR(str))

function capitalizeD(arr) {
    return arr.map(str => {
         return str.split('').map(chat => chat.toLowerCase() === 'd' ? chat.toUpperCase() : chat.toLowerCase()).join('')
     })
 }
 
 const stringsArray = ['dad', 'red'];
 const capitalizedArray = capitalizeD(stringsArray);
 console.log(capitalizedArray); // Output: ['DaD', 'reD']