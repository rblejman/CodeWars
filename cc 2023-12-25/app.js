// Kata n1

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let newStr = "";
  for (let index = 0; index < n; index++) {
    newStr += s;
  }
  return newStr;
}

console.log(repeatStr(6, "A"));
console.log("Answer: AAAAAA");

// I could have used the repeat method
// function repeatStr (num, string) {
//     return string.repeat(num);
//   }

// Kata n2
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Rodrigo"));

//Kata n3
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}

console.log(opposite(4), -4);

//Kata n4
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
function century(year) {
  if (year >= 1000) {
    return Math.floor(year / 100) + 1;
  } else {
    return 1;
  }
}

console.log(century(1700));

// A better solution
// const century = year => Math.ceil(year/100)
