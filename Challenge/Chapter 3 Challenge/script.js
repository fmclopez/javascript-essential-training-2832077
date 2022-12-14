import Book from "./Book.js";

// const cannot be reassigned
// var can be reassigned

const bookOne = new Book("The Inheritance Games", 384, "Jennifer Lynn Barnes");

const bookTwo = new Book("City of Bones", 512, "Cassandra Clare");

const bookThree = new Book("Hunger Games", 374, "Suzanne Collins");

const bookFour = new Book(
  "Harry Potter and the Philosopher's Stone",
  223,
  "J.K. Rowling"
);

const bookFive = new Book("The Summer I Turned Pretty", 307, "Jenny Han");

var books = [bookOne, bookTwo, bookThree, bookFour, bookFive];

console.log(books);
console.log(books[2].pages);
bookOne.addPage();
bookThree.minusPage();
console.log(books);
