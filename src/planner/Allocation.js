"use strict";

let _resource = Symbol();
let _project = Symbol();
let _period = Symbol();

export default class Allocation {
    constructor(resource, project) {
        this[_resource] = resource;
        this[_project] = project;
    }

    forPeriod(period) {
        this[_period] = period;

    }
}
