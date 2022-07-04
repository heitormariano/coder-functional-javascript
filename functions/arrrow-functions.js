const greeting = () => console.log('Hi guys!');
greeting();

const sum = (...numbers) => {
  let total = 0;
  if (Array.isArray(numbers)) {
    for (num of numbers) {
      total += num;
    }
  }
  return total;
};

console.log(sum(1, 2, 3));

// function returning another function
const myPowFn = base => exponent => Math.pow(base, exponent);

const base3 = myPowFn(3);
const base3Exp4 = base3(4);
console.log(base3Exp4);

console.log(myPowFn(5)(2));
console.log(myPowFn(2)(4));
