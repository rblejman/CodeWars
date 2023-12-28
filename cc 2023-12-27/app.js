// Kata n1
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name.startsWith("r") || name.startsWith("R")) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo("odrigo"));

// Kata n2 <----
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example,
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//Input will always be valid, i.e. no negative integers.

let countSheep = function (num) {
  let murmur = "";
  for (let index = 1; index <= num; index++) {
    murmur += `${index} sheep...`;
  }
  console.log(murmur);
};

countSheep(3);

//Kata n3 <----
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet("Daniel", "Daniel"), "Hello boss");
console.log(greet("Greg", "Daniel"), "Hello guest");
