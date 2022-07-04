const person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const member1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const member2 = {
  firstName: 'Heitor',
  lastName: 'Camara',
};

// Return "John Doe"
let result = person.fullName.call(member1);
console.log(result);

// Return "Hector White"
let result02 = person.fullName.call(member2);
console.log(result02);

const newPerson = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

result = newPerson.fullName.call(member1, 'Washington', 'USA');
console.log(result);

result02 = newPerson.fullName.call(member2, 'Brasilia', 'Brazil');
console.log(result02);
