'use strict';

// Simple linked list on Classes

'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.lenght = 1;
  }

  append(value) {
    while(value != null) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.lenght++;
      return this;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.lenght++;
    return this;
  }

  insert(index, value) {
    if(index >= this.lenght) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.lenght++;
    return this;
  }

  remove(index) {
    if(index >= this.lenght) {
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.lenght--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  printList() {
    let current = this.head;
    let result = '';
    while(current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)

myLinkedList.insert(2, 100);

myLinkedList.remove(2);

myLinkedList.printList();

