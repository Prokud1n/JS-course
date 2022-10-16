interface Stack<T> {
    head: T | null;
    push: (value: T) => void;
    pop: () => T;
}

export { Stack };