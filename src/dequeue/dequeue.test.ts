import { Dequeue} from "./dequeue";

test("dequeue", () => {
    const dequeue = new Dequeue();

    dequeue.push(10);
    dequeue.unshift(11);
    dequeue.push(12);

    expect(dequeue.pop()).toBe(12);
    expect(dequeue.shift()).toBe(11);
    expect(dequeue.pop()).toBe(10);
    // expect(dequeue.pop()).toBe(10); Exception
});
