
let _name = Symbol();

export default class Resource {
    constructor(name) {
        this[_name] = name;
    }
}
