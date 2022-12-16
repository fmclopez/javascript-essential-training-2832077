/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let color = "PURPLE";

function createClass() {
  const content = `
    <p> My Favorite color is <span style = "color:purple">${color}</span> !! </p>
    `;
  const main = document.querySelector("main");
  main.innerHTML = content;
}

createClass();

const createAnotherOne = function (color) {
  this.color = color;

  const text = `<h1> ${color} </h1>`;

  const newDiv = document.createElement("div");
  newDiv.classList.add("color");
  newDiv.setAttribute("id", "color-one");
  newDiv.innerHTML = text;
  const main = document.querySelector("main");
  main.append(newDiv);
};

createAnotherOne("cherry fiery red");

const createArrow = (color) => {
  this.color = color;

  const text = `<h1> ${color} </h1>`;

  const newDiv = document.createElement("div");
  newDiv.classList.add("color");
  newDiv.setAttribute("id", "color-two");
  newDiv.innerHTML = text;
  const main = document.querySelector("main");
  main.append(newDiv);
};

createArrow("calming green");
