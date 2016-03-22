Feature: Projects

  Background:
    Given there is a project called "VB" in the planner
    And there is a project called "EBI" in the planner
    And "Daniel K" is on the "VB" project
    And "Niko" is on the "EBI" project

  Scenario: Seeing whos on what project
    When I ask the planner to tell me which project "Daniel K" is currently on
    Then I should be told that "Daniel K" is on the "VB" project