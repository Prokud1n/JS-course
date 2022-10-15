import { Stack } from "./stack"
const stack = new Stack();

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception

export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";