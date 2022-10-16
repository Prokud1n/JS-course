import { Queue} from "./queue";

test('queue', () => {
    const queue = new Queue();

    queue.push(10);
    queue.push(11);
    queue.push(12);

    expect(queue.head).toBe(10);
    expect(queue.pop()).toBe(10);
    expect(queue.head).toBe(11);
    expect(queue.pop()).toBe(11);
    expect(queue.pop()).toBe(12);
});