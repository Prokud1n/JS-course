import { DynamicArrayBasedVector } from "./";

test('linked-list adding values', () => {
    const arr = new DynamicArrayBasedVector(2);

    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    arr.add(6);
    arr.add(7);
    arr.add(8);
    arr.add(9);
    arr.add(10);
    arr.add(11);

    expect(arr.get(0)).toBe(1);
    expect(arr.get(1)).toBe(2);
    expect(arr.get(4)).toBe(5);
});