class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  info() {
    return `Name: ${this.name} - Year: ${this.year}`;
  }
}

const car01 = new Car('Ford', 2015);
console.log(car01.info());
console.log(`Age: ${car01.age()} years old`);

const car02 = new Car('Nissan', 2017);
console.log(car02.info());
console.log(`Age: ${car02.age()} years old`);
