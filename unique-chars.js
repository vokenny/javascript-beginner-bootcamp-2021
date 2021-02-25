/*
  Implement an algorithm to determine if a string has all unique characters
*/

/* 1. Kept as a string */
function isAllUniqueChars(queryStr) {
  let isUnique = true;
  let queryStrLower = queryStr.toLocaleLowerCase();

  for (let charIdx in queryStrLower) {
    let char = queryStrLower[charIdx];

    if (queryStrLower.indexOf(char) !== queryStrLower.lastIndexOf(char)) isUnique = false;
  }

  return isUnique;
}

/* 2. Converted to Array */
function isAllUniqueCharsArr(queryStr) {
  let queryStrLower = queryStr.toLocaleLowerCase();
  let queryArr = queryStrLower.split('');

  let isUnique = queryArr.every((char) => {
    return queryArr.filter((c) => c === char).length === 1;
  })

  return isUnique;
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