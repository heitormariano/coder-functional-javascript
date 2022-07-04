function Product(name, price, discount = 0.1) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.finalPrice = function () {
    return this.price * (1 - discount);
  };
}

const product01 = new Product('Computer', 3500);
console.log(typeof product01);
console.log(product01);
console.log(`Final price: ${product01.finalPrice()}`);

console.log();

const product02 = new Product('Monitor', 1200, 0.3);
console.log(typeof product02);
console.log(product02);
console.log(`Final price: ${product02.finalPrice()}`);
