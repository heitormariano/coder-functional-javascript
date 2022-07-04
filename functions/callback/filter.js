const cart = [
  { name: 'laptop', quantity: 1, price: 2500 },
  { name: 'monitor', quantity: 2, price: 1200 },
  { name: 'mouse', quantity: 3, price: 100 },
  { name: 'keyboard', quantity: 2, price: 150 },
];

const getName = elem => elem.name;
const getGreaterOneHundred = elem => elem.price > 100;
const getGreaterTwoThousand = elem => elem.price > 2000;

const validNameProds01 = cart.filter(getGreaterOneHundred).map(getName);
console.log(validNameProds01);

const validNameProds02 = cart.filter(getGreaterTwoThousand).map(getName);
console.log(validNameProds02);

// implementing my own filter function
Array.prototype.myFilter = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      arr.push(this[i], i, this);
    }
  }
  return arr;
};

Array.prototype.instructorFilter = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log('-------- Using myFilter --------');
console.log(cart.myFilter(getGreaterOneHundred));
console.log(cart.myFilter(getGreaterTwoThousand));

console.log('-------- Using instructorFilter --------');
console.log(cart.instructorFilter(getGreaterOneHundred));
console.log(cart.instructorFilter(getGreaterTwoThousand));

console.log('-------- Using instructorFilter and Map --------');
console.log(cart.instructorFilter(getGreaterOneHundred).map(getName));
console.log(cart.instructorFilter(getGreaterTwoThousand).map(getName));
