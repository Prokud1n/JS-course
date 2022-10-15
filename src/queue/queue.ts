import {LinkedList} from "../linked-list";

export class Queue {
    queue: LinkedList;

    constructor() {
        this.queue = new LinkedList();
    }

    get head() {
        return this.queue.first.value;
    }

    get tail() {
        return this.queue.last.value;
    }

    push = (value) => {
        this.queue.add(value);
    }

    pop = () => {
        if (this.queue.isEmpty) {
            throw new Error('Queue is empty');
        }
        const value = this.queue.first.value;

        this.queue.shift();

        return value;
    }
}