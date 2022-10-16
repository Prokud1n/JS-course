import {LinkedItem} from "./linked-item";
import * as Interfaces from "./interface";

class LinkedList<T> implements Interfaces.LinkedList<T> {
    first = null;
    last = null;

    get isEmpty() {
        return this.first == null;
    }

    add = (value: T) => {
        const item = new LinkedItem(value);
        if (this.first == null) {
            this.first = item;
        } else {
            item.prev = this.last;
            this.last.next = item;
        }

        this.last = item;
    }

    delete = (linkedItem) => {
        if (linkedItem instanceof LinkedItem) {
            const isLast = linkedItem === this.last;
            const isFirst = linkedItem === this.first;
            const prevItem = linkedItem.prev;
            const nextItem = linkedItem.next;

            if (prevItem != null) {
                prevItem.next = linkedItem.next;
            }

            if (nextItem != null) {
                nextItem.prev = linkedItem.prev;
            }

            if (isLast) {
                this.last = prevItem;
            }

            if (isFirst) {
                this.first = nextItem;
            }

            return true;
        }

        return false;
    }

    pop = () => {
        const value = this.last.value;

        this.delete(this.last);

        return value;
    }

    shift = () => {
        const value = this.last.first;

        this.delete(this.first);

        return value;
    }

    * values() {
        let item = this.first;
        while (item) {
            yield item.value;
            item = item.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }
}

export { LinkedList, LinkedItem };