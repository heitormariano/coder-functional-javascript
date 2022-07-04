const cart = [
  { name: 'laptop', quantity: 1, price: 2500 },
  { name: 'monitor', quantity: 2, price: 1200 },
  { name: 'mouse', quantity: 3, price: 100 },
  { name: 'keyboard', quantity: 2, price: 150 },
];

const getTotals = elem => elem.quantity * elem.price;
const getGeneralCost = (total, current) => total + current;

const sum = cart.map(getTotals).reduce(getGeneralCost);
console.log(sum);
