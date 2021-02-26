/* Remove odd numbers from an array */

function filterEven(arr) {
  return arr.filter(i => i % 2 === 0)
}

var testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterEven(testNums));