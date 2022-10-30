import {LinkedList} from "../linked-list";
// [0,1,2] [3,4,5] [6,7,8]]
//   1        2       3
// size = 3
// index = 5; value = 5;
// index / 3 = 1
//         for (const value of this.#list) {
//             console.log(value);
//         }

class DynamicArrayBasedLinkedList<T> {
    #list: LinkedList<T[]>;
    #length = 0;
    #sizeNode: number;

    constructor(size: number) {
        this.#list = new LinkedList<T[]>();
        this.#sizeNode = size;
    }

    get length() {
        return this.#length;
    }

    #addNode = (value) => {
        const newNode = new Array<T>(this.#sizeNode);
        newNode[0] = value;

        this.#list.add(newNode);
        this.#length += 1;

        return newNode;
    }

    #getNode = (index) => {
        let currentIndex = 0;
        const indexNodeInList = Math.floor(index / this.#sizeNode);
        const nodeValueIndex = index % this.#sizeNode;

        for (const node of this.#list) {
            if (currentIndex === indexNodeInList) {
                return { node, valueIndex: nodeValueIndex };
            }
            currentIndex += 1;
        }

        return { node: null, valueIndex: null };
    }

    add = (value) => {
        const last = this.#list.last;

        if (last === null) {
            this.#addNode(value);
            return;
        }

        const filledValues = last.value.filter(Boolean);

        if (filledValues.length === this.#sizeNode) {
            this.#addNode(value);
            return;
        }

        const { valueIndex: emptyValueIndex } = this.#getNode(this.#length);

        last.value[emptyValueIndex] = value;

        this.#length += 1;
    }

    get = (index) => {
        const { node, valueIndex } = this.#getNode(index);
        if (node) {
            return node[valueIndex];
        }

        return undefined;
    }

    * values() {
        let item = this.#list.first;
        while (item) {
            for (const value of item.value) {
                yield value;
            }
            item = item.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }
}

export { DynamicArrayBasedLinkedList };