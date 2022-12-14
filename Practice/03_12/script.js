/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Game from "./Game.js";

const myGame = new Game(
  "Pico Park",
  500,
  "red",
  "yellow",
  "blue",
  10,
  "Fun and Exciting!"
);

console.log(myGame);

console.log(
  "Previous Player Colors: 1. %s 2. %s, 3. %s",
  myGame.characters.playerOne,
  myGame.characters.playerTwo,
  myGame.characters.playerThree
);
myGame.changePlayerColors("purple", "violet", "amethyst");
console.log(
  "Updated Player Colors: 1. %s 2. %s, 3. %s",
  myGame.characters.playerOne,
  myGame.characters.playerTwo,
  myGame.characters.playerThree
);
