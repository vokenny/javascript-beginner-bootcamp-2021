/* Given an array with two values, find the sum within the range */

function sumOfRange(rangeValues) {
  let min = Math.min(rangeValues[0], rangeValues[1]);
  let max = Math.max(rangeValues[0], rangeValues[1]);
  let arrLen = 1 + Math.abs(max - min);

  let range = [...Array(arrLen).keys()].map(i => min + i++);

  return range.reduce((sum, num) => { return sum + num });
}

console.log(sumOfRange([2, 8])); // 35
console.log(sumOfRange([-8, -10])); // -27