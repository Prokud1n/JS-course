import {mapSeq} from "./iterators";

export {take, random, enumerate, filter, seq} from "./iterators";
export { Range } from "./range"
export { Result } from "./result";
export {DynamicArrayBasedLinkedList} from "./dynamic-array-based-linked-list";
export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";
export { Stack } from "./stack";

const numbers = [1, 2, 3];
const numberMappers = [(num: number) => num * 2, (num: number) => num + 1, (num: number) => num + num];

console.log([...mapSeq(numbers, numberMappers)]); // ([6, 10, 14]);

const string = 'r2d2';
const stringMappers = [(str: string) => str.toUpperCase(), (str: string) => str.replace(/\d/, ' ')];

console.log([...mapSeq(string, stringMappers)].join('')); // ('R D ');