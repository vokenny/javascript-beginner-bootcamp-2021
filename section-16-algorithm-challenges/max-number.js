/* Return largest value number in an array */

function largestNum(arr) {
  return arr.reduce((max, num) => max > num ? max : num);

  // Alternatively, more simple:
  // return Math.max(...arr);
}

var testNums = [10, 4, 101, 0, -1, 18]

console.log(largestNum(testNums));