/* Determine if two strings are permutations of each other */

function isPermutation(queryStr1, queryStr2) {
  let str1 = queryStr1.toLocaleLowerCase();
  let str2 = queryStr2.toLocaleLowerCase();

  let strArr1 = [...str1].sort();
  let strArr2 = [...str2].sort();

  return strArr1.every((char, idx) => char === strArr2[idx]);
}

var testStr1 = 'baseball';
var testStr2 = 'ASaLlBbE';

console.log(isPermutation(testStr1, testStr2));