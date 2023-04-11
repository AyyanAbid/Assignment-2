function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  const myObject = { name: 'John', age: 30 };
  saveObjectToLocalStorage('myKey', myObject);
    