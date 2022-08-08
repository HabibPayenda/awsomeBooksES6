import listbooksFunction from './localStorage.js';

const listbooks = listbooksFunction();

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add(title, author) {
    this.new = 'new';
    const newBook = { title, author };
    if (localStorage.getItem('books')) {
      let savedBooks = JSON.parse(localStorage.getItem('books'));
      savedBooks = [newBook, ...savedBooks];
      localStorage.setItem('books', JSON.stringify(savedBooks));
    } else {
      localStorage.setItem('books', JSON.stringify([newBook]));
    }
  }

  remove(id) {
    this.new = 'new';
    const list = listbooks.filter((book) => book.title !== listbooks[id].title);
    localStorage.setItem('books', JSON.stringify(list));
  }
}

export const newBook = new Book();
