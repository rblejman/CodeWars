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
