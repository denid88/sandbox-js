'use strict';

const scalable = image => {
  image.scale = () => console.log('Image scaled');
};

const lazy = image => {
  const scale = image.scale;
  image.scale = () => setImmediate(() => scale());
};

const image = {};

scalable(image);
console.log('Before scale');
image.scale();
console.log('After scale');

console.log('Mixin lazy()');
lazy(image);
image.scale();
console.log('After Mixin');