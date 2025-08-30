// 'use strict';

// const vm = require('vm');

// const jstp = `{
//  name: 'Marcus'
// }`;

// const script = vm.createScript('(' + jstp + ')');
// const data = script.runInThisContext();
// console.dir(data);

'use strict';

const vm = require('vm');

const jstp = `{
  name: 'Marcus'
}`;

const sandbox = {};
const data = vm.runInNewContext('(' + jstp + ')', sandbox);

console.dir(data);