import { Range } from "./range"

export {take, random, enumerate, filter} from "./iterators";
export { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

const symbolRange = new Range('a', 'f');

console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(Array.from(symbolRange.reverse())); // ['a', 'b', 'c', 'd', 'e', 'f']

const numberRange = new Range(-5, 1);

console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]