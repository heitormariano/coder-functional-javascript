function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const sumAB = sum(10)(20);
console.log(sumAB);

const sumABC = sumAB(30);
console.log(sumABC);

console.log(sum(2)(3)(4));
console.log(sum(6)(7)(8));

function calcFn(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

const test01 = calcFn(10)(20)((x, y) => x + y);
console.log(test01);

const test02 = calcFn(30)(20)((x, y) => x - y);
console.log(test02);

const test03 = calcFn(5)(5)((x, y) => x * y);
console.log(test03);

const test04 = calcFn(100)(25)((x, y) => x / y);
console.log(test04);
