interface Queue<T> {
    head: T | null;
    tail: T | null;
    push: (value: T) => void;
    pop: () => T;

}

export { Queue }