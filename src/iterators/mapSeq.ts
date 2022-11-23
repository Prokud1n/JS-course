export function mapSeq<T>(iterable: Iterable<T>, functions: ((value: T) => T)[]): IterableIterator<T> {
    const iter = iterable[Symbol.iterator]();

    return {
        next() {
            const result = iter.next();

            if (result.done) {
                return { done: true, value: undefined };
            }

            let value = result.value;

            for (const fn of functions) {
                value = fn(value);
            }

            return {done: false, value};
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}