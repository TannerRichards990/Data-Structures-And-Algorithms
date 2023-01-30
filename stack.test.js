const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test.skip("push() adds an item to the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.array).toEqual(["fox", "goose"]);
  });

  test.skip("pop() removes and returns the last item in the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.pop()).toBe("goose");
    expect(stack.array).toEqual(["fox"]);
  });

  test.skip("pop() returns null when the stack is empty", () => {
    expect(stack.pop()).toBeNull();
  });

  test.skip("peek() returns the last item in the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.peek()).toBe("goose");
    expect(stack.array).toEqual(["fox", "goose"]);
  });

  test.skip("peek() returns null when the stack is empty", () => {
    expect(stack.peek()).toBeNull();
  });
});
