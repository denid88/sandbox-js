'use strict';

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = fn => {
  const cache = {};

  return (...args) => {
    const key = generateKey(args);
    const val = cache[key];
    if (val) return val;
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
};

const sumSeq = (a, b) => {
  console.log('Calculate sum');
  let r = 0;
  for (let i = a; i < b; i++) r += i;
  return r;
};

const mSumSeq = memoize(sumSeq);

console.log('First call mSumSeg');
console.log('Value:', mSumSeq(2, 5));

console.log('Second call mSumSeg');
console.log('Value:', mSumSeq(2, 5));

console.log('Second call mSumSeg');
console.log('Calculated:', mSumSeq(2, 6));