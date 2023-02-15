class Range<T extends string | number> {
    #from: number;
    #to: number;
    #rangeType: 'string' | 'number';
 
    constructor(from: T, to: T) {
        if (typeof from === "number" && typeof to === "number") {
            this.#from = from;
            this.#to = to;
            this.#rangeType = 'number';
        }

        if (typeof from === 'string' && typeof to === 'string') {
            this.#from = from.codePointAt(0);
            this.#to = to.codePointAt(0);
            this.#rangeType = 'string';
        }
    }

    reverse = () => {
        const reversedRange = this.#rangeType === 'string'
            ? new Range(String.fromCodePoint(this.#to), String.fromCodePoint(this.#from))
            : new Range(this.#to, this.#from);

        return reversedRange[Symbol.iterator]();
    }


    [Symbol.iterator]() {
        const isReversed = this.#from > this.#to;
        let current = this.#from;

        return {
            next: () => {
                const isDone = isReversed ? current < this.#to : current > this.#to;

                if (isDone) {
                    return { done: true, value: undefined };
                }

                const value = isReversed ? current-- : current++;

                return { done: false, value: this.#rangeType === 'string' ? String.fromCodePoint(value) : value };
            },

            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

export { Range };