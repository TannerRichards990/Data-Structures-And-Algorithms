class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    if (this.array.length === 0) {
      return null;
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      return null;
    }
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push("llama");
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

module.exports = Stack;
