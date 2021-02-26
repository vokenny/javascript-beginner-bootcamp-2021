/*
  Given a string, return the string with all letters in alphabetical order
*/

function alphabeticalSort(str) {
  let charsArr = str.match(/\w/g);

  return charsArr.sort().join('');
}

var testStrs = [
  'qwerty8624', // 2468eqrtwy
  '"Hello"',    // Hello
  '"hello"',    // ehllo
  'Good bye'    // Gbdeooy
]

testStrs.forEach(_ => console.log(alphabeticalSort(_)));