class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    // _name to avoid the name collision with the getter and setter
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'The name cannot be empty';
    }
    // _name to avoid the name collision with the getter and setter
    this._name = newName;
  }
}

const person01 = new Person('Thomas Green');
// using get
console.log(person01.name);

//using set
person01.name = 'John White';

// using get again
console.log(person01.name);
