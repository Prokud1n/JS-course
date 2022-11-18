import { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

const result = new Result(() => 30);
result
    .map((el) => el * 3)
    .flatMap((el) => Result.error(el))
    .catch((err) => console.log(err));
