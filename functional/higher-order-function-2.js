// curring
function calcFinalPrice(tax) {
  return function (price) {
    return price * (1 + tax);
  };
}

const taxAcalcFinalPrice = calcFinalPrice(0.07); // tax = 7%

console.log(taxAcalcFinalPrice(100)); // price = 100
console.log(taxAcalcFinalPrice(200)); // price = 200
console.log(taxAcalcFinalPrice(300)); // price = 300

const taxBcalcFinalPrice = calcFinalPrice(0.15); // tax = 15%

console.log(taxBcalcFinalPrice(100).toFixed(2)); // price = 100
console.log(taxBcalcFinalPrice(200).toFixed(2)); // price = 200
console.log(taxBcalcFinalPrice(300).toFixed(2)); // price = 300
