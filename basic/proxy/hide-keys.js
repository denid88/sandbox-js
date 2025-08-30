'use strict';

const data = { name: "Marcus", age: 36, _city: 'Kyiv' }

const person = new Proxy(data, {
  get(obj, prop) {
    if (String(prop).startsWith('_')) {
      return undefined; 
    }
    return obj[prop];
  },
  ownKeys(obj) {
    return Reflect.ownKeys(obj).filter(k => !String(k).startsWith('_'));
  },
  has(obj, prop) {
    if (String(prop).startsWith('_')) {
      return false;
    }
    return prop in obj;
  },
  set(obj, prop, value) {
  if (String(prop).startsWith('_')) {
    console.log(`Заборонено запис у приховане поле: ${prop}`);
    return true; // ігноруємо
  }
  obj[prop] = value;
  return true;
}
});

console.dir(Object.keys(person));
person._city = 'Buoo';
console.log(person._city);
console.log('_city' in person);