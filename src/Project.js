"use strict";

let _name = Symbol();

export default class Project {

    constructor(name) {
        this[_name] = name;
    }

    static called(name) {
        return new Project(name);
    }
}
