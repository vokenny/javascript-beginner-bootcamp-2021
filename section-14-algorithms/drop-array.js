/* Given an array, drop the first N elements from the array */

function drop(n, array) {
  return array.splice(n, array.length - n);
}

var testArr = [0, 1, 2, 3, 4, 5];

console.log(drop(2, testArr)); // [2, 3, 4, 5]