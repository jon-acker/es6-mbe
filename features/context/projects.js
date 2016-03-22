'use strict';

import Project from 'Project';

module.exports = function() {
    this.Given(/^there is a project called "([^"]*)" in the planner$/, function (projectName, callback) {
        let project = Project.called(projectName);
        callback();
    });
};
