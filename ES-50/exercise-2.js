class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify();
  } 

  static fromJson(json) {
    const {id, firstName, lastName, age} = JSON.parse(json);
    return new Person(id, firstName, lastName, age);
  }
  
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);