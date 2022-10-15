import {LinkedItem, LinkedList} from "../linked-list";

class Dequeue {
    dequeue: LinkedList;
    #dequeueLength = 0;

    constructor() {
        this.dequeue = new LinkedList();
    }

    get head() {
        return this.dequeue.first?.value ?? null;
    }

    get tail() {
        return this.dequeue.last?.value ?? null;
    }

    get length() {
        return this.#dequeueLength;
    }

    push = (value) => {
        this.dequeue.add(value);
        this.#dequeueLength++;

    }

    unshift = (value) => {
        const item = new LinkedItem(value);

        if (this.dequeue.first == null) {
            this.dequeue.first = item;
        } else {
            const first = this.dequeue.first;

            first.prev = item;
            item.next = first;

            this.dequeue.first = item;
        }

        this.#dequeueLength++;
    }

    pop = () => {
        if (!this.dequeue.first) {
            throw new Error('Queue is empty');
        }
        const value = this.dequeue.last.value;
        this.dequeue.pop();

        this.#dequeueLength--;

        return value;
    }

    shift = () => {
        if (!this.dequeue.first) {
            throw new Error('Queue is empty');
        }
        const value = this.dequeue.first.value;

        this.dequeue.shift();
        this.#dequeueLength--;

        return value;
    }
}

export { Dequeue };