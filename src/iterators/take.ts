export function take(iter: IterableIterator<unknown>, count: number): IterableIterator<unknown> {
    let state = 0;

    return {
        next() {
            const result = iter.next();

            if (result.done || state++ === count) {
                return { done: true, value: undefined };
            }
            return { done: false, value: result.value }
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}