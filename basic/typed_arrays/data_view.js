'use strict';

const len = 1024;
const buffer = new ArrayBuffer(len);

const view1 = new DataView(buffer);

for (let i = 0; i < len; i++) {
  const value = (i + 7) * 5;
  view1.setUint8(i, value);
}

console.log(view1);