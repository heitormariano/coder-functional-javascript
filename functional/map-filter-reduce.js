const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Mary', score: 8.6 },
  { name: 'John', score: 9.5 },
  { name: 'Jake', score: 7.8 },
];

const goodStudents = elem => elem.score >= 8.5;
const getScore = elem => elem.score;
const calcAvg = (total, current, index, array) => {
  if (index === array.length - 1) {
    return (total + current) / array.length;
  } else {
    return total + current;
  }
};

const avg = students.filter(goodStudents).map(getScore).reduce(calcAvg);
console.log(`Average: ${avg}`);
