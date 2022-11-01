class DynamicArrayBasedVector<T> {
    #size: number;
    #increasingCoefficient = 2;
    #array: T[];
    #length = 0;

    constructor(size) {
        this.#size = size;
        this.#array = new Array<T>(size);
    }

    add = (value) => {
        if (this.#length === this.#size) {
            const newSize = this.#size * this.#increasingCoefficient;
            const newArray = new Array(newSize);

            for (let index = 0; index < this.#length; index += 1) {
                newArray[index] = this.#array[index];
            }

            this.#size = newSize;
            this.#array = newArray
        }

        this.#array[this.#length] = value;
        this.#length += 1;
    }

    get = (index) => {
        return this.#array[index];
    }
}

export { DynamicArrayBasedVector };