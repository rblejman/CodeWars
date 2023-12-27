// Kata n1
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const arr = name.split(" ");
  let newName = arr[0][0] + "." + arr[1][0];
  return newName.toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");

// another clever way to do it
// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }
