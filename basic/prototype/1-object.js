'use strict';

const pointMethods = {
  move(x, y) {
    console.log(`${x} ${y}`);
  }
}

const point = {
  x: 10, 
  y: 20,
};

Object.setPrototypeOf(point, pointMethods);

console.log({ point });
console.log({ pointMethods });

point.move(2,3);

console.log(point.__proto__ == pointMethods);
console.log(point.__proto__.__proto__ == Object.prototype);
console.log(point.__proto__.__proto__.__proto__ === null);
console.log(pointMethods.__proto__ === Object.prototype);
