function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// export function* random(from,to) {
//     while (true) {
//         const value = getRandomIntInclusive(from, to);
//
//         yield value;
//     }
// }

export function random(from, to): IterableIterator<number> {
    return {
        next() {
            const value = getRandomIntInclusive(from, to);

            return { done: false, value };
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}