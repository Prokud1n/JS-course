import {take, random, enumerate, filter} from "./iterators";

export { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

const randomInt = random(0, 100);

const iter = take(enumerate(filter(randomInt, (el) => el < 10)), 10);

for (const el of iter) {
    console.log(el);
}
