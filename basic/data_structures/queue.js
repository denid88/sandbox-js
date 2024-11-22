'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = { next: null, data };
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  dequeue() {
    if (this.first === null) {
      return null;
    }
    const data = this.first.data;
    this.first = this.first.next;
    return data;
  }
}

// Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());