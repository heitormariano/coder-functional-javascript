const cart = [
  { name: 'laptop', quantity: 1, price: 2500 },
  { name: 'monitor', quantity: 2, price: 1200 },
  { name: 'mouse', quantity: 3, price: 100 },
  { name: 'keyboard', quantity: 2, price: 150 },
];

console.log(cart);

const getProductNames = elem => elem.name;
const names = cart.map(getProductNames);
console.log(names);

const getTotalCost = elem => elem.quantity * elem.price;
const investment = cart.map(getTotalCost);
console.log(investment);

// implementing my own map function
Array.prototype.myMap = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this));
  }
  return arr;
};

// testing...
console.log('-------- Using myMap --------');
console.log(cart.myMap(getProductNames));
console.log(cart.myMap(getTotalCost));
