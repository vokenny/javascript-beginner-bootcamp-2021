/* Given an array of +ve numbers and strings, filter for only the numbers */

function filterNums(arr) {
  return arr.filter(_ => typeof _ === 'number')
}

var testArr = [
  1,
  2,
  'Hello',
  3,
  'is it',
  4,
  5,
  '1',
  6,
  'me you\'re',
  7,
  8,
  'for?',
  9
]

console.log(filterNums(testArr));