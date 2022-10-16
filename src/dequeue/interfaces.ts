interface Dequeue<T> {
    head: T | null;
    tail: T | null;
    length: number;
    push: (value: T) => void;
    unshift: (value: T) => void;
    pop: () => T;
    shift: () => T;
}

export { Dequeue }