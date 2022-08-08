export default () => {
  const listbooks = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
  return listbooks;
};