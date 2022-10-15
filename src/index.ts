import { Dequeue } from "./dequeue";

const dequeue = new Dequeue();

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

console.log(dequeue.pop());   // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop());   // 10
console.log(dequeue.pop());   // Exception

// console.log(list.first.value);           // 1
// console.log(list.last.value);            // 3
// console.log(list.first.next.value);      // 2
// console.log(list.first.next.prev.value); // 1



export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";