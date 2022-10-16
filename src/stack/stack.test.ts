import { Stack } from "./stack";

test('stack', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(11);
    stack.push(12);

    expect(stack.head).toBe(12);
    expect(stack.pop()).toBe(12);
    expect(stack.head).toBe(11);
    expect(stack.pop()).toBe(11);
    expect(stack.pop()).toBe(10);
})