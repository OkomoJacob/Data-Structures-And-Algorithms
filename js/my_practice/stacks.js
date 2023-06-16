class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, no item to remove.";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty, no item at the top.";
    }
    return this.stack[this.arraySize() - 1];
  }

  isEmpty() {
    return this.arraySize() === 0;
  }

  arraySize() {
    return this.stack.length;
  }

  printStack(arr) {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(arr[i]);
    }
  }
}

const stack = new Stack();
stack.push(13);
stack.push(23);
stack.push(56);
stack.push(0);
stack.push(89);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.isEmpty());
stack.printStack();
