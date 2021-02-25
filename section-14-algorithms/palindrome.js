/* Check if a given string is a palindrome, ignoring punctuation */

function isPalindrome(queryStr) {
  let normStrArr = queryStr.match(/\w/g).map(_ => _.toLowerCase())
  let normStrArrRev = [...normStrArr].reverse();

  return normStrArr.join('') === normStrArrRev.join('');
}

var testStrs = [
  'racecar',        // true
  'Level',          // true
  'R"a/Ce^c-a@r&',  // true
  'Hello'           // false
];

testStrs.forEach(_ => console.log(isPalindrome(_)));