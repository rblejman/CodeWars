// kata 1 <-----------
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(5, 5), "answer:", 25);

// Kata 2 <----------------------
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
  if (!input == null || !input.length == 0) {
    let result = [];
    result.push(input.reduce((acc, val) => acc + (val > 0 ? 1 : 0), 0));
    result.push(input.reduce((acc, val) => acc + (val <= 0 ? val : 0), 0));
    return result;
  } else {
    return [];
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
  "answer:",
  [10, -65]
);

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ]),
  "answer",
  [8, -50]
);
