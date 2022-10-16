import {LinkedList} from "../linked-list";
import * as Interfaces from "./interfaces";

class Stack<T> implements Interfaces.Stack<T>{
    stack: LinkedList<T>

    constructor() {
        this.stack = new LinkedList();
    }

    get head() {
        return this.stack.last?.value ?? null;
    }

    push = (value: T) => {
        this.stack.add(value);
    }

    pop = () => {
        const value = this.stack.last.value;

        if (this.stack.isEmpty) {
            throw new Error("Stack is empty");
        }

        this.stack.pop();

        return value;
    }
}

export { Stack };