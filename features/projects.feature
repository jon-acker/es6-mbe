Feature: Projects

  Background:
    Given there is a project called "VB"
    And there is a project called "EBI"
    And "Daniel K" is allocated to the "VB" project for the period "25/03/2016" to "26/03/2016" in the planner
    And "Niko" is allocated to the "EBI" project for the period "25/03/2016" to "26/03/2016" in the planner

  Scenario: Seeing whos on what project
    When I ask the planner to tell me which project "Daniel K" is currently allocated to
    Then I should be told that "Daniel K" is on the "VB" project