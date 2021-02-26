/* Given a string, find the length of the longest word in the string */

function lengthLongestWord(queryStr) {
  let words = queryStr.split(' ');

  return words.reduce((longest, word) => word.length > longest.length ? word : longest).length;
}

var testStr = 'The quick brown fox jumped over the lazy dog';

console.log(lengthLongestWord(testStr)); // 6