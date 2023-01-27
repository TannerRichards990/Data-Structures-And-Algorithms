const Stack = require("./stack");

test("stack is a class", () => {
  expect(typeof Stack.prototype.constructor).toEqual("function");
});

test("can add an item to the stack", () => {
  const s = new Stack();
  s.push(1);
  expect(s.peek()).toEqual(1);
  s.push(2);
  expect(s.peek()).toEqual(2);
});

test("can remove an item from the stack", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
  expect(s.pop()).toBeNull();
});

test("peeks at the top item on the stack", () => {
  const s = new Stack();
  s.push(1);
  expect(s.peek()).toEqual(1);
  s.push(2);
  expect(s.peek()).toEqual(2);
});
