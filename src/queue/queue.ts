import {LinkedList} from "../linked-list";
import * as Interfaces from "./interfaces";

export class Queue<T> implements Interfaces.Queue<T>{
    queue: LinkedList<T>;

    constructor() {
        this.queue = new LinkedList();
    }

    get head(): T {
        return this.queue.first?.value ?? null;
    }

    get tail(): T {
        return this.queue.last?.value ?? null;
    }

    push = (value: T) => {
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