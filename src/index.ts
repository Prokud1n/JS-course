import {seq} from "./iterators";

export {take, random, enumerate, filter} from "./iterators";
export { Range } from "./range"
export { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

console.log(...seq([1, 2], new Set([3, 4]), 'bla')); // 1, 2, 3, 4, 'b', 'l', 'a'
