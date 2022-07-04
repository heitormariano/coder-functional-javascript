function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 20, 30);
logParams(3, 4);
logParams(100);
logParams(5, 6, 7, 8, 9, 10);
logParams();

function defaultParams(a, b, c = 3) {
  console.log(a, b, c);
}

defaultParams(34);
defaultParams(34, 35);
defaultParams(10, 20, 30);
defaultParams();

function defaultParamsV2(a = 1, b = 3, c = 5) {
  console.log(a, b, c);
}

defaultParamsV2();
defaultParamsV2(200, 300, 400);
defaultParamsV2(50);

// spread/rest
function logNums(...nums) {
  nums.forEach(n => console.log(n));
}

logNums(10, 20, 30);
logNums(1, 2, 3, 4, 5, 6);

function sumAll(...nums) {
  let total = 0;
  nums.forEach(n => (total += n));

  return total;
}

console.log('Sum:', sumAll(2, 3, 4));

function logNames(...names) {
  console.log('Result:', Array.isArray(names) ? 'Is Array' : 'Is not Array');

  for (let name of names) {
    console.log(name);
  }
}

logNames('Hector', 'John', 'Richard');
