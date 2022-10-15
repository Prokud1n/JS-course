// const a = {
//     prev: null,
//     next: b,
//     value: 1,
// }
//
// const b = {
//     prev: a,
//     next: c,
//     value: 2,
// }
//
//
// const c = {
//     prev: b,
//     next: d,
//     value: 3,
// }
//
// const d = {
//     prev: c,
//     next: null,
//     value: 4,
// }


class LinkedItem {
    value = null;
    prev = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    first = null;
    last = null;
    current = null;

    get next() {
        return this.current.next;
    }

    get isEmpty() {
        return this.first == null;
    }

    add = (value) => {
        const item = new LinkedItem(value);
        if (this.first == null) {
            this.first = item;
        } else {
            item.prev = this.last;
            this.last.next = item;
        }

        this.last = item;
    }

    delete = (linkedItem: LinkedItem) => {
        if (linkedItem instanceof LinkedItem) {
            const isLast = linkedItem === this.last;
            const isFirst = linkedItem === this.first;
            const prevItem = linkedItem.prev;
            const nextItem = linkedItem.next;

            if (prevItem != null) {
                prevItem.next = linkedItem.next;
                console.log(prevItem);
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
        return this.delete(this.last);
    }

    shift = () => {
        return this.delete(this.first);
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