'use strict';

class Rect {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side;
  }
}

const equilateral = Category => class extends Category {
  constructor(x, y, side) {
    super(x, y, side);
  }
}

const Square = equilateral(Rect);
const p1 = new Square(10, 20, 50);
console.log(p1);