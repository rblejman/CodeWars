// Kata 1 <-----
/*
Replace U with T
*/
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
console.log(DNAtoRNA("TTTT"), "UUUU");

//Kata 2 <-------
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x) {
  return x
    .split("")
    .map((e) => (e < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("45385593107843568"), "01011110001100111");

/*  Another Option:
return x.replace(/\d/g, d => d < 5 ? 0 : 1);
*/

// Kata 3 <----
/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/
function monkeyCount(n) {
  let array = [];
  for (let index = 1; index <= n; index++) {
    array.push(index);
  }
  return array;
}

console.log(monkeyCount(5));
