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

function seq2(...iterables) {
    const argIter = iterables[Symbol.iterator]();

    let argCursor = argIter.next();
    let cursor;

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            while(true) {
                if (argCursor.done) {
                    return { done: true, value: undefined };
                }

                cursor ??= argCursor.value[Symbol.iterator]();

                const result = cursor.next();

                if (result.done) {
                    argCursor = argIter.next();
                    cursor = undefined;
                    continue;
                }

                return result;
            }
        }
    }
}