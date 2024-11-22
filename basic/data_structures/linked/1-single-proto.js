'use strict';

function Node(prev, data) {
  this.prev = prev;
  this.data = data;
}

function traverse(head) {
  let current = head; 
  while (current !== null) {
    console.log(current.data);
    current = current.prev;
  }
}

// Usage 
const node1 = new Node(null, 1);
const node2 = new Node(node1, 2);
const node3 = new Node(node2, 3);

console.dir(node1);
console.dir(node2);
console.dir(node3);

traverse(node3);