// Kata n1 <---------------
// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x) {
//   console.log(x);
//   let newArr = x.map((element) => {
//     return typeof element == "string" ? parseInt(element) : element;
//   });
//   console.log(newArr);
//   return newArr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// }

function sumMix(x) {
  console.log(x);
  return x.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    0
  );
}

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix([1, 1, "1"]), 3);
