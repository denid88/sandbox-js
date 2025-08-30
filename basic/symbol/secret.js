'use strict';

const secret = Symbol("secret");

const user = {
  name: "Marcus",
  [secret]: "hidden-data"
};

console.log(user.name);           // Marcus
console.log(user[secret]);        // hidden-data
console.log(Object.keys(user));   // ["name"]
console.log(typeof secret);