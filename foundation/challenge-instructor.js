// Solution of instructor
function range(num01, num02, step = 1) {
  const n01 = num02 === undefined ? 1 : num01;
  const n02 = num02 === undefined ? num01 : num02;
  const currentStep = n01 <= n02 ? Math.abs(step) : -Math.abs(step);

  const nums = [];

  for (let i = n01; n01 <= n02 ? i <= n02 : i >= n02; i += currentStep) {
    nums.push(i);
  }
  return nums;
}

console.log(range(10));
console.log(range(5));

console.log(range(6, 11));
console.log(range(6, 2));

console.log(range(5, 8));
console.log(range(10, 2));

console.log(range(10, 19, 2));
console.log(range(8, -3, 4));

console.log(range(12, 1, 3));
