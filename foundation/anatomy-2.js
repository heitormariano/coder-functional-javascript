// Anonymous function

(function (a, b, c) {
  return a + b + c;
});

// executing...
let result = (function (a, b, c) {
  return a + b + c;
})(10, 20, 30);

console.log('Result: ' + result);

// function expression
const sum = function (num01, num02) {
  return num01 + num02;
};

const value = sum(10, 34);
console.log(value);

const anotherFnSum = sum;
const valueTwo = anotherFnSum(5, 6);
console.log(valueTwo);
