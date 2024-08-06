/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function solution(str) {
  return str.split("").reverse().join("");
}

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
*/

function cockroachSpeed(s) {
  return Math.floor(s * 27.777778);
}
