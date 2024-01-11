// // kata 1 <----
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let average =
    classPoints.reduce((acc, val) => acc + val, 0) / classPoints.length;

  return yourPoints > average ? true : false;
}
console.log(betterThanAverage([2, 3], 5), true);

// Kata 2 <-------------
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
console.log("dragons:");
console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
