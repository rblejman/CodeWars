// Kata n1 <------

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels

function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  vowels.forEach((e) => (string = string.replaceAll(e, "")));
  return string;
}
console.log(shortcut("how are you today?"), "hw r y tdy?");

// Another Solution
// function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }

// Kata n2 <---
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"), "McClane john");
