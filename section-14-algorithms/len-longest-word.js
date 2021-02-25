/* Given a string, find the length of the longest word in the string */

function findLongestWord(queryStr) {
  let words = queryStr.split(' ');

  return words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  });
}

var testStr = 'The quick brown fox jumped over the lazy dog';

console.log(findLongestWord(testStr)); // jumped