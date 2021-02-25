/*
  Implement an algorithm to determine if a string has all unique characters
*/

/* 1. Kept as a string */
function isAllUniqueChars(queryStr) {
  let queryStrLower = queryStr.toLocaleLowerCase();

  for (let charIdx in queryStrLower) {
    let char = queryStrLower[charIdx];

    // Exit early with false if any single character is not unique
    if (queryStrLower.indexOf(char) !== queryStrLower.lastIndexOf(char)) return false;
  }

  return true;
}

/* 2. Converted to Array */
function isAllUniqueCharsArr(queryStr) {
  let queryStrLower = queryStr.toLocaleLowerCase();
  let queryArr = queryStrLower.split('');

  return queryArr.every((char) => {
    return queryArr.filter((c) => c === char).length === 1;
  })
}

var testStrs = [
  'abcd',   // true
  'Kenny',  // false
  'Lol',    // false
  'foo',    // false
  'bar',    // true
  '123',    // true
  '121'     // false
];

console.log('Kept as a string');
testStrs.forEach((word) => console.log(isAllUniqueChars(word)));

console.log('Converted to array');
testStrs.forEach((word) => console.log(isAllUniqueCharsArr(word)));