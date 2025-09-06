'use strict';

const obj1 = {
  name: 'Marcus',
  age: 32
};

const mix1 = {
  sayHello() {
    console.log(`${this.name} ${this.age}`) 
  }
}

const obj2 = Object.assign(obj1, mix1);

obj2.sayHello();