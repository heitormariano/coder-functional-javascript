class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  get info() {
    let phrase = `Name: ${this.name}\nOriginal Price: ${this.price}\nFinal price: ${this.finalPrice}`;
    return phrase;
  }
  get finalPrice() {
    return this.price * (1 - this.discount);
  }
}

const prod01 = new Product('Computer', 5000, 0.2);
console.log(prod01.info);
