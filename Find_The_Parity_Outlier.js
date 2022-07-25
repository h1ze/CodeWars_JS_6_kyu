// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let evens = integers.filter((el) => el % 2 === 0);
  return evens.length === 1
    ? evens[0]
    : integers.filter((el) => el % 2 !== 0)[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
