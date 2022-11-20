export function filter(iter: IterableIterator<unknown>, callback: (value: unknown) => boolean): IterableIterator<unknown> {
    return {
        next() {
            const result = iter.next();
            if (result.done) {
                return { done: true, value: undefined };
            }

            if (callback(result.value)) {
                return { done: false, value: result.value };
            }

            return this.next();
        },
        [Symbol.iterator]() {
            return this;
        }

    }
}