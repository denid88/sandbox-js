'use strict';

const obj1 = {
  field: 'Value',
  subObject: {
    arr: [1, 2, 3],
    fn: x => x / 2
  }
};

const s = JSON.stringify(obj1);

console.log(s);

const obj2 = JSON.parse(s);

console.dir(obj2);