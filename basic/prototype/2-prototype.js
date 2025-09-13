'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function(obj) {
  const {x, y} = obj;
  return new Point(x, y);
}

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
}

const point = new Point(10, 20);
point.move(2, 3);

const point1 = Point.from({x: 100, y: 200})

console.log(point);
console.log(point1);