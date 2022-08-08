import { newBook } from './Book.js';

const main = document.getElementById('main');

export default () => {
  const addContainer = document.createElement('div');
  addContainer.classList.add('addNew');
  const addText = document.createElement('h2');
  addText.classList.add('addBook');
  addText.innerText = 'Add a new book';
  const addForm = document.createElement('form');
  addForm.classList.add('addForm');

  const titleInput = document.createElement('input');
  titleInput.classList.add('text');
  titleInput.type = 'text';
  titleInput.placeholder = 'Title';
  titleInput.id = 'title';
  titleInput.required = true;

  const authorInput = document.createElement('input');
  authorInput.classList.add('text');
  authorInput.type = 'text';
  authorInput.placeholder = 'Author';
  authorInput.id = 'author';
  authorInput.required = true;

  const addButton = document.createElement('button');
  addButton.classList.add('button');
  addButton.type = 'button';
  addButton.setAttribute('id', 'add');
  addButton.innerText = 'Add';
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const titleText = titleInput.value;
    const authorText = authorInput.value;
    newBook.add(titleText, authorText);
    document.location.reload();
  });
  addForm.append(titleInput, authorInput, addButton);
  addContainer.append(addText, addForm);
  main.appendChild(addContainer);
  return main;
};