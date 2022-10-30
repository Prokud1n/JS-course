import { DynamicArrayBasedLinkedList } from "./";

test('linked-list adding values', () => {
    const arr = new DynamicArrayBasedLinkedList(3);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);

    expect(arr.get(0)).toBe(1);
    expect(arr.get(1)).toBe(2);
    expect(arr.get(4)).toBe(5);
    expect(arr.length).toBe(5);
});