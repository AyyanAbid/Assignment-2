function addNumber(n) {
    function add(x) {
      return x + n;
    }
    return add;
  }
  let addFive = addNumber(5);
console.log(addFive(12));