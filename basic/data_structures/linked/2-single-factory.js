'use strict';

const node = (prev, data) => ({prev, data});

const traverse = head => {
  let current = head; 
  while (current !== null) {
    console.log(current.data);
    current = current.prev;
  }
}

// Usage
const node1 = node(null, 1);
const node2 = node(node1, 2);
const node3 = node(node2, 3);

traverse(node3);
