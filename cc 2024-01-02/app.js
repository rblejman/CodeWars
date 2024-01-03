// Kata n1 <---
// use a switch to return how many days a month has
function howManydays(month) {
  var days;
  switch (month) {
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 31;
  }
  return days;
}
console.log(howManydays(4), 30);

// Kata n2 <---
// Task Description
// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm".

// Output
// Output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
  let splitDate = longDate.split(", ");
  return splitDate[0];
}
console.log(shortenToDate("Friday May 2, 7pm"), "Answer: Friday May 2");

// A shorter version could be
// return longDate.split(",")[0];

// Kata 3 <---
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 0) ||
    (flower1 % 2 === 1 && flower2 % 2 === 1)
    ? false
    : true;
  //   if (flower1 % 2 == 0 && flower2 % 2 == 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
}
console.log(lovefunc(2, 3), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(119, 663), false);

// A clever way to solve it:
//  return flower1 % 2 !== flower2 % 2;

// Kata n4 <----
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
  return x.reduce((acc, cVal) => acc * cVal, 1);
}

console.log(grow([1, 2, 3, 4]), `Answer is: ${24}`);
