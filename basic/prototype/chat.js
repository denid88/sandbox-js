'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function() {
  console.log("Hi, I'm " + this.name);
};

let dog = new Animal("Rex");

// подивитися прототип об'єкта
console.log(Object.getPrototypeOf(dog)); 
// те саме що dog.__proto__

// подивитися prototype самої функції
console.log(Animal.prototype);

// перевірити ланцюжок
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true

console.dir(Object.prototype);