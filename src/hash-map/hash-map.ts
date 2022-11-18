class HashMap {
    #size: number;

    constructor(size: number) {
        this.#size = size;
    }

    #keyToIndex = (key: string) => {
        const sum = key.split("").reduce((acc, item) => {
            acc += item.codePointAt(0);

            return acc;
        }, 0);

        return sum % this.#size;
    }

    set = (key, value) => {
        this.#keyToIndex(key);
    }

    get = (key) => {

    }
}

export { HashMap }