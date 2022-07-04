const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanThree = elem => elem > 3;
console.log(numbers.filter(greaterThanThree));

const greaterThanTen = elem => elem > 10;
console.log(numbers.filter(greaterThanTen));

const even = elem => elem % 2 === 0;
console.log(numbers.filter(even));

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Mary', score: 8.3 },
  { name: 'John', score: 9.5 },
  { name: 'Jake', score: 7.8 },
];

const greatStudent = student => student.score >= 9;
console.log('All students', students);
console.log(students.filter(greatStudent));
