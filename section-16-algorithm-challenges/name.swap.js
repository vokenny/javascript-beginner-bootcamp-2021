/*
  Name swap
  Reverse the order of a provided string
*/

function nameSwap(name) {
  return name.split(' ').reverse().join(' ');
}

var testNames = [
  'Kenny Vo',
  'Geralt of Rivia',
  'Spongebob Squarepants'
]

testNames.forEach(name => console.log(nameSwap(name)));