const numbers = [1, 2, 3, 4, 5, 6];

const mapResult = numbers.map(elem => elem * 2);
console.log(mapResult);

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Mary', score: 8.3 },
  { name: 'John', score: 9.5 },
  { name: 'Jake', score: 7.8 },
];

const getScore = elem => elem.score;

const scores01 = students.map(getScore);
console.log(scores01);

const scores02 = students.map(getScore).map(Math.ceil);
console.log(scores02);
