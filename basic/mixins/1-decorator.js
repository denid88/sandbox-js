'use strict';

const g1 = {};
const g2 = {};
const g3 = { area: 300 };

// Add property to g2
g2.area = 200;

const mixinCalculateCose = obj => {
  obj.area = obj.area || 0;
  obj.calculateCost = function(price) {
    return this.area * price;
  }
};

mixinCalculateCose(g1);
g1.area = 200;
console.log(g1.calculateCost(20));