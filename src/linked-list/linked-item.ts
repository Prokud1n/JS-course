import * as Interfaces from "./interface";

class LinkedItem<T>  implements Interfaces.LinkedItem<T> {
    value = null;
    prev = null;
    next = null;
    constructor(value) {
        this.value = value;
    }
}

export { LinkedItem }