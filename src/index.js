import listbooks from './modules/localStorage.js';
import listNavMenu from './modules/listMenuComponent.js';
import addMenu from './modules/addMenuComponent.js';
import contactNavMenu from './modules/contactMenuComponent.js';

const list = document.getElementById('list');
const main = document.getElementById('main');

const listMenu = document.getElementById('listMenu');
const addNewMenu = document.getElementById('addNewMenu');
const contactMenu = document.getElementById('contactMenu');

let menu = '';

// eslint-disable-next-line no-constant-condition
if (menu === '' || 'list') {
  if (listbooks.length <= 0) {
    const noBooks = document.createElement('h1');
    noBooks.innerText = 'Please add some books!';
    main.append(noBooks);
  }
  listNavMenu();
}

listMenu.addEventListener('click', () => {
  main.innerHTML = '';
  list.innerHTML = '';
  menu = 'list';
  listNavMenu();
});

addNewMenu.addEventListener('click', () => {
  main.innerHTML = '';
  addMenu();
});

contactMenu.addEventListener('click', () => {
  main.innerHTML = '';
  contactNavMenu();
});
