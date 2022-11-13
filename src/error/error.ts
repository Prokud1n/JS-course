type Data<T> = T | Optional<T>;

class Optional<T> {
    readonly isEmpty: boolean;

    protected readonly data?: T;

    constructor(data: () => Data<T>) {
        try {
            const d = data();
            if (d instanceof Optional) {
                this.isEmpty = d.isEmpty;

                if (!this.isEmpty) {
                    this.data = d.unwrap();
                }
            } else {
                this.data = d;
                this.isEmpty = false;
            }
        } catch {
            this.isEmpty = true;
        }
    }

    then<R>(cb: (T) => Data<R>): Optional<R> {
        return new Optional<R>(() => {
            if (this.isEmpty) {
                throw new Error("empty");
            }

            return cb(this.data);
        });
    }

    else<R>(cb: (T) => Data<R>): Optional<T | R> {
        // @ts-ignore
        return new Optional(() => {
            if (this.isEmpty) {
                return cb(this.data);
            }

            return this.data!;
        });
    }

    unwrap(): T {
        if (this.isEmpty) {
            throw new Error("data is empty");
        }

        return this.data;
    }
}

function None<T>(): Optional<T> {
    return new Optional(() => {
        throw new Error("empty");
    });
}

function Some<T>(data: Data<T>): Optional<T> {
    return new Optional(() => data);
}

Some(10).then((n) => n+2).then(console.log);