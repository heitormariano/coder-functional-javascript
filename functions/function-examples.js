function executeFn(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executeFn(10);
executeFn(function () {
  console.log('Bom dia!');
});

executeFn(() => console.log('Boa tarde!'));

function myPowFn(base) {
  return function (exponent) {
    return Math.pow(base, exponent);
  };
}

// base 10
const base10 = myPowFn(10);

const base10Exp3 = base10(3);
console.log(base10Exp3);

const base10Exp5 = base10(5);
console.log(base10Exp5);

// base 4
const base4 = myPowFn(4);

const base4Exp5 = base4(5);
console.log(base4Exp5);

const base4Exp6 = base4(6);
console.log(base4Exp6);

// base 2 exponent 3
const base2Exp3 = myPowFn(2)(3);
console.log(base2Exp3);
