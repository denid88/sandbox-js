'use strict';

const target = { name: "Bro" };

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(`Читають властивість: ${prop}`);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log(`Задають ${prop} = ${value}`);
    obj[prop] = value;
    return true;
  }
});

console.log(proxy.name);   // "Читають властивість: name" → "Bro"
proxy.age = 37;            // "Задають age = 37"