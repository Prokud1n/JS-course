type Field = number | string;

type GetIndexByField = (field: Field) => number;

interface Structure<T> {
    set: (field: Field, value: T) => void;
    get: (field: Field) => T;
}

export { Structure, Field, GetIndexByField };