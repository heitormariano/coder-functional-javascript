const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
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

const result01 = person.fullName.apply(member1, ['Oslo', 'Norway']);
console.log(result01);

const result02 = person.fullName.apply(member2, ['Natal', 'Brazil']);
console.log(result02);
