/* Return largest value number in an array */

function largestNum(arr) {
  return arr.reduce((max, num) => max > num ? max : num)
}

var testNums = [10, 4, 101, 0, -1, 18]

console.log(largestNum(testNums));