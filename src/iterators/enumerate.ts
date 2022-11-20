export function enumerate(iter: IterableIterator<unknown>): IterableIterator<unknown> {
    let state = 0;

    return {
        next() {
            const result = iter.next();

            return { done: result.done, value: [state++, result.value]};
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}