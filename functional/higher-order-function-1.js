function fnRun(fn) {
  fn(arg);
}

function fnRun(fn) {
  fn();
}

function fnRunWithArgument(fn, arg) {
  fn(arg);
}

function fnRunWithReturn(fn, arg) {
  return fn(arg);
}

function sayHi() {
  console.log('Hi!');
}

function sayHelloTo(name) {
  console.log(`Hello ${name}!`);
}

function sumElems(arr) {
  let total = 0;
  for (elem of arr) {
    total += elem;
  }

  return total;
}

fnRun(sayHi);
fnRunWithArgument(sayHelloTo, 'Hector');
console.log(fnRunWithReturn(sumElems, [1, 2, 3]));
