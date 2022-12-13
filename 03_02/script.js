/**
 * Create a Backpack object.
 */

// holds variable data & curly brackets {} define data as an object
const backpack = {
  // object properties -> defined by key-value pairs
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  // sub-object with own properties
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  // object methods -> properties containing function
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  ChangeName: function (newName) {
    this.name = newName;
  },
};
