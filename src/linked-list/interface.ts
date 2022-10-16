export interface LinkedItem<T> {
    prev: LinkedItem<T> | null;
    next: LinkedItem<T> | null;
    value: T;
}

export interface LinkedList<T> {
    isEmpty: boolean;
    add: (value: T) => void;
    delete: (linkedItem: LinkedItem<T>) => boolean;
    pop: () => T;
    shift: () => T;
    values(): IterableIterator<T>;
}