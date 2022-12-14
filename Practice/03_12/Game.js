/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Game {
  constructor(name, size, playerOne, playerTwo, playerThree, rating, comment) {
    (this.name = name),
      (this.size = size),
      (this.characters = {
        playerOne: playerOne,
        playerTwo: playerTwo,
        playerThree: playerThree,
      }),
      (this.rating = rating),
      (this.comment = comment);
  }

  renameGame(name) {
    this.name = name;
  }

  changePlayerColors(one, two, three) {
    (this.characters.playerOne = one),
      (this.characters.playerTwo = two),
      (this.characters.playerThree = three);
  }
}

export default Game;
