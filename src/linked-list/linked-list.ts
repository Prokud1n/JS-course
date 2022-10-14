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

    delete = (value) => {
        if (value instanceof LinkedItem) {
            const prevItem = value.prev;
            const nextItem = value.next;

            if (prevItem != null) {
                prevItem.next = value.next;
            }

            if (nextItem != null) {
                nextItem.prev = value.prev;
            }

            if (this.first.value === value.value) {
                this.first = this.first.next;
            }

            return true;
        }

        return false;
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

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

// const r = list.delete(list.first.next);

// for (const value of list) {
//     console.log(value);
// }

export { LinkedList, LinkedItem };