/* 
  Given a string and a number, return one string with the original string repeated N times,
  or empty if the number is zero or negative
*/

function repeatString(str, n) {
  let strArr = Array.from({ length: n }).map(_ => str);

  return strArr.join('');
}

console.log(repeatString('test', 3));