import * as Interfaces from "./interfaces";

class Structure<T> implements Interfaces.Structure<T>{
    #structure: Array<T>;

    #getIndexByField: Interfaces.GetIndexByField;

    #initFunctionBodyToFindingIndex = (keys: Array<T>) => {
        const cases = keys.map((key, index) => `case '${key}': return ${index};`).join('\n');

        return ` {
            switch (key) {
                ${cases}
                default:
                    throw new Error("Structure doesn't contain this field");
            }
        }
        `;
    };

    constructor(fields: Array<T>) {
        this.#structure = Array(fields.length);

        this.#getIndexByField = <Interfaces.GetIndexByField>new Function('key', this.#initFunctionBodyToFindingIndex(fields));
    }

    set = (field, value) => {
        const index = this.#getIndexByField(field);
        this.#structure[index] = value;
    }

    get = (field) => {
        const index = this.#getIndexByField(field);

        return this.#structure[index];
    }

}

export { Structure };