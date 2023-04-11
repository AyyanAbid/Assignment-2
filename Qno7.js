function getObjectFromLocalStorage(key) {
    const objStr = localStorage.getItem(key);
    return JSON.parse(objStr);
  }
  const myObject = getObjectFromLocalStorage('myKey');
  console.log(myObject);
    