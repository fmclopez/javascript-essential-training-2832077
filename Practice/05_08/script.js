/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

console.log(document.querySelector(".site-description"));

console.log(document.querySelector(".site-description").className);

console.log(document.querySelector(".site-description").classList);
console.log(
  document.querySelector(".site-description").classList.add("1st-class")
);
console.log(
  document.querySelector(".site-description").classList.add("2nd-class")
);
console.log(
  document.querySelector(".site-description").classList.remove("2nd-class")
);

console.log(
  document
    .querySelector(".site-description")
    .setAttribute("src", "this-is-a-source-sample")
);
console.log(document.querySelector(".site-description").getAttribute("src"));
console.log(
  document
    .querySelector(".site-description")
    .setAttribute("src", "this-is-the-new-one")
);

console.log(
  (document.querySelector(".site-description").style.color = "purple")
);
console.log(
  (document.querySelector(".site-description").style.fontWeight = 600)
);
console.log(document.querySelector(".site-description").style);
