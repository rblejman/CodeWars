// Kata n1 <-----

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"));

// Kata n2 <----
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length !== 0) {
    let average =
      array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / array.length;
    return average;
  } else {
    return 0;
  }
}

console.log(findAverage([5, 5, 5]));
