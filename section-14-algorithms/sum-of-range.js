/* Given an array with two values, find the sum within the range */

function sumOfRange(rangeValues) {
  let start = rangeValues[0];
  let end = rangeValues[1];
  let range = [...Array(1 + end - start).keys()].map(i => start + i++);

  return range.reduce((sum, num) => { return sum + num });
}

console.log(sumOfRange([2, 8]));