'use strict';

const obj1 = {
  field: 'Value',
  subObject: {
    arr: [1, 2, 3],
    fn: x => x / 2
  }
};

console.dir(obj1);