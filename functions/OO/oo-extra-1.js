// factory functions Vs constructor functions

// First: FACTORY functions
const createPerson = function (name, age) {
  return {
    name: name,
    age: age,
  };
};

const mary = createPerson('Mary', 33);
const john = createPerson('John', 40);
console.log('type:', typeof mary, '-', 'return:', mary);
console.log('type:', typeof john, '-', 'return:', john);

const createStudent = function (name, course, institution) {
  return {
    name: name,
    course: course,
    institution: institution,
  };
};

const robert = createStudent('Robert', 'Economy', 'Inst01');
const thomas = createStudent('Thomas', 'Computer Science', 'Inst02');
console.log(robert);
console.log(thomas);

// // Second: CONSTRUCTOR functions
// var Pessoa = function (nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// };

// var jose = new Pessoa('José', 36);
// var amanda = new Pessoa('Amanda', 28);
// console.log(jose);
// console.log(amanda);

// var Fruta = function (nome, cor, forma) {
//   this.nome = nome;
//   this.cor = cor;
//   this.forma = forma;
//   this.descrever = function () {
//     return 'A fruta ' + this.nome + ' apresenta a cor ' + this.cor + ' e a forma ' + this.forma;
//   };
// };

// var laranja = new Fruta('laranja', 'laranja', 'arredondada');
// var melao = new Fruta('melão', 'amarela', 'arredondada');
// console.log(laranja);
// console.log(laranja.descrever());
// console.log(melao);
// console.log(melao.descrever());
