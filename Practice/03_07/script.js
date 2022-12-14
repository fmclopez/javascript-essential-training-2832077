/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const game = {
  name: "Pico Park",
  size: 500,
  players: "2-8 players",
  characters: {
    playerOne: "Blue",
    playerTwo: "Red",
    playerThree: "Yellow",
    playerFour: "Pink",
    playerFive: "Purple",
    playerSix: "Brown",
  },
  rating: 10,
  comment: "A Fun and chaotic game",
};

var x = "characters";

console.log(game);
console.log("This game is called ", game.name);
console.log("The MB size of this game is", game["size"]);
console.log("Player Five is color ->", game[x].playerFive);
console.log(game["characters"]["playerTwo"]);
