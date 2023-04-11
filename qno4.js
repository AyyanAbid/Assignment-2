function addListItem(text) {
    const listItem = document.createElement('li');
   listItem.textContent = text;
    const list = document.querySelector('ul');
    list.appendChild(listItem);
  }
  addListItem('New list item');
