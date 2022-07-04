const arrayEx01 = [1, 2, 3, 4, 5, 6];

// previous argument works as a counter/totalizer
const reduceFn = (previous, current, index, array) => {
  const returns = previous + current;

  console.log(array);
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  console.log();

  return returns;
};

const result01 = arrayEx01.reduce(reduceFn);
console.log('result:', result01);

const numbers = [10, 20, 30, 40];

const sumAll = (total, currentElem) => total + currentElem;
console.log('Elements sum:', numbers.reduce(sumAll));

const avg = array => {
  const sumElems = array.reduce(sumAll);
  const avg = sumElems / array.length;
  return avg;
};

// avg function of instructor
const instructorAvg = (acc, elem, index, array) => {
  if (index === array.length - 1) {
    return (acc + elem) / array.length;
  } else {
    return acc + elem;
  }
};

console.log('Average:', avg(numbers));
console.log('instructor average function:', numbers.reduce(instructorAvg));
