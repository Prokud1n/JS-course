import {Structure} from "./structure";
const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

console.log(jackBlack.get('name'));// 'Jack'
console.log(jackBlack.get('lastName'));// 'Jack'
console.log(jackBlack.get('age'));// 'Jack'

export { Structure } from "./structure"
export { LinkedList } from "./linked-list";
export { Queue } from "./queue"
export { Dequeue } from "./dequeue";