// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//   let countArr = [];
//   A.forEach((element) => {
//     if (countArr.indexOf(element) === -1) {
//       countArr.push(element);
//     }
//     return countArr;
//   });
//   return countArr;
// }

// let array = [0, 1, 0, 1, 0];

// function findOdd(A) {
//   let lengthArr = [];
//   A.forEach((element) => {
//     A.filter((el) => {
//       if (el === element) {
//         return el;
//       }
//     });
//     return A.length;
//   });
//   return A.length;
// }

// function elementCount(arr, item) {
//   let result = arr.filter((el) => {
//     if (!el || el == item) {
//       return el;
//     }
//   }).length;
//   if (result % 2 === 0) return result;
// }

// console.log(elementCount(array, 0));

// function equal(arg1, arg2) {
//   return arg1 === arg2;
// }

// console.log(equal(0, 0));

function findOdd(A) {
  let result = A.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  for (let key in result) {
    if (result[key] % 2 !== 0) return +key;
  }
}

console.log(findOdd([2, 1, 2, 1, 2]));

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd3(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}
