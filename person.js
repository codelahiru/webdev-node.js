// const person = {
//     name: 'John Doe',
//     age: 30,

// }

// module.exports = person;

// const obj = {
//     name: 'John',
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };
  
//   obj.greet(); // Output: Hello, John!
  
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old`)
    }
}

module.exports = Person;

