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
