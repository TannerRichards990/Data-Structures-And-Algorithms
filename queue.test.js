const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it.skip("enqueue adds an item to the end of the queue", () => {
    queue.enqueue("fox");
    queue.enqueue("goose");
    queue.enqueue("lizard");
    expect(queue.queue).toEqual(["fox", "goose", "lizard"]);
  });

  it.skip("dequeue returns the first item in the queue", () => {
    queue.enqueue("fox");
    queue.enqueue("goose");
    queue.enqueue("lizard");
    expect(queue.dequeue()).toEqual("fox");
    expect(queue.dequeue()).toEqual("goose");
    expect(queue.dequeue()).toEqual("lizard");
    expect(queue.dequeue()).toEqual(null);
  });
  it.skip("hasNext returns true if the queue is not empty, false otherwise", () => {
    expect(queue.hasNext()).toEqual(false);
    queue.enqueue("fox");
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
