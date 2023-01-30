const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("push() adds an item to the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.array).toEqual(["fox", "goose"]);
  });

  test("pop() removes and returns the last item in the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.pop()).toBe("goose");
    expect(stack.array).toEqual(["fox"]);
  });

  test("pop() returns null when the stack is empty", () => {
    expect(stack.pop()).toBeNull();
  });

  test("peek() returns the last item in the stack", () => {
    stack.push("fox");
    stack.push("goose");
    expect(stack.peek()).toBe("goose");
    expect(stack.array).toEqual(["fox", "goose"]);
  });

  test("peek() returns null when the stack is empty", () => {
    expect(stack.peek()).toBeNull();
  });
});
