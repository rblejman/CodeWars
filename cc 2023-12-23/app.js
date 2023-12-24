// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function reversed(num) {
  let newArray = num.toString().split("").reverse(); // been reversed but still array of strings
  return newArray.map((e) => parseInt(e)); // make a copy of the array and parse every element.
}
console.log(reversed(35231), [1, 3, 2, 5, 3]);

// Kata n2
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.includes(x) ? true : false;
}

console.log(check([1, 2, 3], "3"));
