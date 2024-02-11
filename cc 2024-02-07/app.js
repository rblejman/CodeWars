// Kata 1 <<----------
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

//Kata 2 <--
/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

function sumArray(array) {
  array.sort((a, b) => a - b);
  array.pop();
  array.shift();
  console.log(array);
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(sumArray([6, 2, 1, 8, 10]), 16);
