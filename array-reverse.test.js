const { Stack, reverseArr } = require("./array-reverse");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("can push items onto the stack", () => {
    stack.push(1);
    expect(stack.stack).toEqual([1]);
  });

  it("can pop items off the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });

  it("returns null when popping from an empty stack", () => {
    expect(stack.pop()).toBeNull();
  });
});

describe("reverseArr", () => {
  it("reverses an array", () => {
    const arr = [12, 3, 5, 7];
    expect(reverseArr(arr)).toEqual([7, 5, 3, 12]);
  });
});
