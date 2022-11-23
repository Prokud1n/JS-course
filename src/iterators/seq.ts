export function seq(...args) {
    let index = 0;
    let currentIterable = args[index];
    let iterator = currentIterable[Symbol.iterator]();

    return {
        next() {
            const result = iterator.next();

            if (result.done) {
                index++;
                currentIterable = args[index];
                if (currentIterable === undefined) {
                    return { done: true, value: undefined };
                }
                iterator = currentIterable[Symbol.iterator]();

                return this.next();
            }

            return { done: false, value: result.value };
        },

        [Symbol.iterator]() {
            return this;
        }
    }

}