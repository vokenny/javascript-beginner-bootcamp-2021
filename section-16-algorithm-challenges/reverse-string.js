/* Reverse a given string */

function reverseString(str) {
  return [...str].reverse().join('');
}

var testStrs = [
  'qwertyuiop',   // poiuytrewq
  'abcdefghji',   // ijhgfedcba
  '0123456789'    // 9876543210
]

testStrs.forEach(_ => console.log(reverseString(_)));