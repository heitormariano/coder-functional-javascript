const fnIncrement = function (n) {
  return n + 1;
};

const result01 = fnIncrement(5);
console.log(result01);

// arrow functions is always anonymous
const fnIncrement02 = n => {
  return n + 1;
};

const fnIncrement03 = n => n + 10;

console.log(fnIncrement02(10));
console.log(fnIncrement03(25));

const fnSum = (a, b) => {
  return a + b;
};

const fnSum02 = (a, b) => a + b;

console.log(fnSum(10, 40));
console.log(fnSum02(100, 200));
