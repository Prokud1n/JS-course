import {forEach} from "./generators";

export {take, random, enumerate, filter, seq, mapSeq} from "./iterators";
export { Range } from "./range"
export { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

let total = 0;

forEach(new Array(50e7), () => {
    total++;
}).then(() => console.log("in then", total));

console.log(total);