'use strict';

const wrap = f => {
  console.log('Wrap function: ' + f.name);
  return (...args) => {
    console.log('Called wrapper function: ' + f.name);
    const result = f(...args);
    console.log('Ended wrapper function: ' + f.name);
    return result;
  };
};

// Usage
const func = (par1, par2) => {
 console.dir({ par1, par2 });
 return [par1, par2];
};

const wrapped = wrap(func);
wrapped('Uno', 'Due');