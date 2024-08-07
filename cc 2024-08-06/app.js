// kata 1
/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// kata 2
/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/
function switchItUp(number) {
  let solution = 0;
  switch (number) {
    case 1:
      solution = "One";
      break;
    case 2:
      solution = "Two";
      break;
    case 3:
      solution = "Three";
      break;
    case 4:
      solution = "Four";
      break;
    case 5:
      solution = "Five";
      break;
    case 6:
      solution = "Six";
      break;
    case 7:
      solution = "Seven";
      break;
    case 8:
      solution = "Eight";
      break;
    case 9:
      solution = "Nine";
      break;

    default:
      solution = "Zero";
      break;
  }
  return solution;
}
