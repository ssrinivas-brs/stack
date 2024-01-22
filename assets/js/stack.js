

// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class for Stack
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
    this.capacity = 3;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length >= this.capacity;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }
}

// Implementation
let myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);


console.log(myStack.isFull());

console.log(myStack);

