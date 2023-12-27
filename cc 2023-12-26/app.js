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

// Kata n2 <---------------
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(num) {
  let accum = 0;
  for (let index = 1; index <= num; index++) {
    accum += index;
  }
  return accum;
}

console.log(summation(8), 36);
