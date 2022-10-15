import {LinkedList} from "../linked-list";

class Stack {
    stack: LinkedList

    constructor() {
        this.stack = new LinkedList();
    }

    get head() {
        return this.stack.last.value;
    }

    push = (value) => {
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