import { Queue } from "./queue";

const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12

try {
    queue.pop();
} catch (e) {
    console.log(e);
}

export { LinkedList } from "./linked-list";
export { Queue } from "./queue"