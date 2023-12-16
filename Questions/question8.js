// 8. Find the duplicate numbers in the array.

// function findDuplicates(arr) {
//     let duplicates = {};
//     let result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (duplicates[arr[i]] === undefined) {
//         duplicates[arr[i]] = 1;
//       } else {
//         if (duplicates[arr[i]] === 1) {
//           result.push(arr[i]);
//         }
//         duplicates[arr[i]]++;
//       }
//     }
  
//     return result;
//   }
  
  // Example usage:
  // const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 9];
  // const duplicateNumbers = findDuplicates(numbers);
  // console.log("Duplicate numbers:", duplicateNumbers);

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 9];

let result = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(result);
