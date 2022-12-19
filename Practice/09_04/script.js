/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const btnOne = document.querySelector(".cell01");
const btnTwo = document.querySelector(".cell02");
const btnThree = document.querySelector(".cell03");
const btnFour = document.querySelector(".cell04");
const btnFive = document.querySelector(".cell05");
const btnSix = document.querySelector(".cell06");
const btnSeven = document.querySelector(".cell07");
const btnEight = document.querySelector(".cell08");
const btnNine = document.querySelector(".cell09");
const btnTen = document.querySelector(".cell10");

const changeColor = (element) => {
  console.log(element.className);
  if (element.className == "cell cell01") {
    element.style.backgroundColor = "red";
  }
};

btnOne.addEventListener("mouseover", () => {
  console.log("mouse is over");
  changeColor(btnOne);
});

btnOne.addEventListener("mouseout", () => {
  btnOne.style.backgroundColor = "lightgrey";
});

btnTwo.addEventListener("mouseover", () => {
  btnTwo.style.backgroundColor = "orange";
});

btnTwo.addEventListener("mouseout", () => {
  btnTwo.style.backgroundColor = "lightgrey";
});
