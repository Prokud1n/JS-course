import {LinkedItem, LinkedList} from "../linked-list";

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
        const item = new LinkedItem(value);

        if (this.queue.first == null) {
            this.queue.first = item;
        } else {
            item.prev = this.queue.last;
            this.queue.last.next = item;
        }

        this.queue.last = item;
    }

    pop = () => {
        if (!this.queue.first) {
            throw new Error('Queue is empty');
        }
        const first = this.queue.first;
        const value = this.queue.first.value;

        this.queue.delete(first);

        return value;
    }
}