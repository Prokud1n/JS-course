class Result<T, Err extends Error | undefined = undefined> {
    #value: T;
    #error: unknown;

    static ok<T>(value: T): Result<T> {
        return new Result(() => value);
    }

    static error<Err>(error: unknown): Result<Err> {
        return new Result(() => {
            throw error;
        })
    }

    constructor(getValue: () => T) {
        try {
            this.#value = getValue();

        } catch (error) {
            this.#error = error;
        }
    }

    #throwError = () => new Result<T>(() => {
        throw this.#error;
    });

    map = (callback: (value: T) => T): Result<T> => {
        if (this.#error !== undefined) {
            return this.#throwError();
        }
        return new Result<T>(() => callback(this.#value));
    }

    flatMap = (callback: (value: T) => Result<T>): Result<T> => {
        if (this.#error !== undefined) {
            return this.#throwError();
        }
        return callback(this.#value);
    }

    catch<V>(callback: (error: unknown) => V): Result<T | V> {
        if (this.#error !== undefined) {
            return new Result(() => callback(this.#error));
        }

        return new Result<T>(() => this.#value);
    }
}

export { Result };