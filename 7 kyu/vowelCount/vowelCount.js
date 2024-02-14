/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  const array = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  vowels.forEach((v) => {
    let checkVowel = array.filter((letter) => letter == v);
    count += checkVowel.length;
  });
  return count;
}
console.log(getCount("abracadabra"), 5);
