type Field = number | string;

interface Structure<T> {
    set: (field: Field, value: T) => void;
    get: (field: Field) => T;
}

export { Structure };