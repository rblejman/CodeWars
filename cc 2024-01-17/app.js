// Kata 1 <--------
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s) {
  if (h == 0 && m == 0 && s == 0) {
    return 0;
  } else {
    return (h * 3600 + m * 60 + s) * 1000;
  }
}

console.log(past(0, 1, 1), 61000);
console.log(past(1, 1, 1), 3661000);

// Kata 2 <---------------------
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
  return array.map((e) => -e);
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);

// Kata 3 <-------
/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
  let mass = weight / height ** 2;
  if (mass <= 18.5) {
    return "Underweight";
  } else if (mass <= 25.0) {
    return "Normal";
  } else if (mass <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8), "Normal");

// Kata 4 <----
function smash(words) {
  return words.join("").split(",").join(" ");
}

/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great
*/

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
