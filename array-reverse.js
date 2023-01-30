class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
    return null;
  }
}

function reverseArr(arr) {
  let stack = new Stack();
  for (let item of arr) {
    stack.push(item);
  }
  let reversedArr = [];
  while (stack.stack.length > 0) {
    reversedArr.push(stack.pop());
  }
  return reversedArr;
}

console.log(reverseArr([12, 3, 5, 7]));
