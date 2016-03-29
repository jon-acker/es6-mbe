"use strict";

import Project from 'Project';
import Resource from 'Resource';
import Period from 'planner/Period';

import planner from 'planner';

let projects = new Map();


module.exports = function() {
    this.When(/^I ask the planner to tell me which project "([^"]*)" is currently on$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(new Error());
    });

    this.Then(/^I should be told that "([^"]*)" is on the "([^"]*)" project$/, function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Given(/^there is a project called "([^"]*)"$/, function (name, callback) {

        let project = Project.called(name);

        projects.set(name, project);

        callback();
    });

    this.Given(/^"([^"]*)" is allocated to the "([^"]*)" project for the period "([^"]*)" to "([^"]*)" in the planner$/, function (resourceName, projectName, fromDate, toDate, callback) {

        let resource = new Resource(resourceName);
        let project = projects.get(projectName);
        let period = new Period(fromDate, toDate);

        let allocation = planner.allocate(resource, project);

        allocation.forPeriod(period);

        callback();

    });

    this.When(/^I ask the planner to tell me which project "([^"]*)" is currently allocated to$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
};
