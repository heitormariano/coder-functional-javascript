// function declaration

function sayHello() {
  console.log('Hello!');
}

sayHello();

function sayHelloTo(name) {
  console.log('Hello ' + name);
}

sayHelloTo('Richard');

function getHi() {
  return 'Hi';
}

console.log(getHi());

console.log('New function test...');
const greeting = getHi();
console.log(greeting);

function getHiTo(name) {
  return `Hi ${name}`;
}

console.log(getHiTo('Hector'));
