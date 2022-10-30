import {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";

export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

const arr = new DynamicArrayBasedLinkedList(2);

arr.add(1);
arr.add(2);
arr.add(3);

console.log("START");

for (const value of arr) {
    console.log(value);
}

