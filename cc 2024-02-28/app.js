//kata 1
/*
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/

function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0;
}

//kata 2

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0
*/

function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}
