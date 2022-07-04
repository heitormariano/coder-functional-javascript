// map, filter, reduce
const cart = [
  { name: 'laptop', quantity: 1, price: 2500, fragile: true },
  { name: 'monitor', quantity: 2, price: 1200, fragile: true },
  { name: 'mouse', quantity: 3, price: 100, fragile: false },
  { name: 'keyboard', quantity: 2, price: 150, fragile: false },
];

//filter
const getFragileProds = elem => elem.fragile;
let prods = cart.filter(getFragileProds);
console.log(prods);

//map
const getTotals = elem => elem.quantity * elem.price;
let totals = cart.map(getTotals);
console.log(totals);

// reduce
const getAvg = function (total, current, index, arr) {
  if (index === arr.length - 1) {
    return (total + current) / arr.length;
  } else {
    return total + current;
  }
};

// avg (fragile products)
const result = cart.filter(getFragileProds).map(getTotals).reduce(getAvg);
console.log('Average (Fragile Products):', result);

// avg (all products)
const result02 = cart.map(getTotals).reduce(getAvg);
console.log('Average:', result02);
