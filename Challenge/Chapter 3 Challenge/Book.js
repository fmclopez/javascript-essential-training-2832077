class Book {
  constructor(title, pages, author) {
    (this.title = title), (this.pages = pages), (this.author = author);
  }

  renameBook(newTitle) {
    this.title = newTitle;
  }
  changeAuthor(newName) {
    this.author = newName;
  }
  addPage() {
    this.pages += 1;
  }
  minusPage() {
    this.pages -= 1;
  }
}

export default Book;
