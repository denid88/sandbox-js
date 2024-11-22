'use  strict';

class Stack {
  constructor() {
    this.last = null;
  }

  push(data) {
    this.last = { prev: this.last, data };
  }

  pop() {
    if (this.last === null) {
      return null;
    }
    const data = this.last.data;
    this.last = this.last.prev;
    return data;
  }
}

// Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());