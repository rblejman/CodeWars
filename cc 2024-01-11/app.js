// Kata 1 <---
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
function findSmallestInt(args) {
  let newArr = args.sort((a, b) => a - b);
  return newArr[0];
}
console.log(findSmallestInt([78, 56, 232, 12, 8]), "Answer:", 8);

/*
A better solution:
findSmallestInt(args) {
    return Math.min(...args)
  }

*/

// Kata 2 <---------
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log("Kata 2");
console.log(litres(12.3), "Answer:", 6);
console.log(litres(0.82), "Answer:", 0);

//Kata 3 <-------------
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

function findNeedle(haystack) {
  let position = haystack.findIndex((e) => e == "needle");
  return `found the needle at position ${position}`;
}
