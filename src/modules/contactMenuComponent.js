const main = document.getElementById('main');

export default () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactDiv');
  const contactText = document.createElement('h2');
  contactText.innerText = 'Contact information';
  contactText.classList.add('contactText');
  const contactP1 = document.createElement('p');
  contactP1.innerText = 'Do you have any question or you just want to say "Hello"?';
  const contactP2 = document.createElement('p');
  contactP2.innerText = 'You can reach out to us!';
  contactP2.classList.add('p2');
  const contactUl = document.createElement('ul');
  contactUl.classList.add('contactList');
  const ourEmail = document.createElement('li');
  ourEmail.innerText = 'Our e-mail: info@payenda.af';
  const ourPhone = document.createElement('li');
  ourPhone.innerText = 'Our phone number: +93(0)749665340';
  const ourAdd = document.createElement('li');
  ourAdd.innerText = 'Kabul, Afghanistan';
  contactUl.append(ourEmail, ourPhone, ourAdd);
  contactContainer.append(contactText, contactP1, contactP2, contactUl);
  main.append(contactContainer);
  return main;
};