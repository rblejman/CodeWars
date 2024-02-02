// kata 1 <----------
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((e) => e ** 2)
      .join("")
  );
}

console.log(squareDigits(3212), 9414);

// kata 2 <---
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = (n) => {
  let arr = [];
  for (let index = n; index > 0; index--) {
    arr.push(index);
  }
  return arr;
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

// Kata 3 <---------------
/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft ? true : false;
};
console.log("Fuel Kata");
console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

// kata 4 < -----------
//rock paper scisors conditional
const rps = (p1, p2) => {
  if (p1 == "rock" && p2 == "scissors") {
    return "Player 1 won!";
  } else if (p1 == "scissors" && p2 == "paper") {
    return "Player 1 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    return "Player 1 won!";
  } else if (p1 == p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

// Another way with objects.
// Uses the object and p1 is the key to the value. So you just compare the condition that p2 has to be equal for p1 to wing
/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
*/

// kata 5 <----
/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}
