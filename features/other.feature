Feature: other

  Scenario: Seeing whos on what project
    When I ask the planner to tell me which project "Daniel K" is currently on
    Then I should be told that "Daniel K" is on the "VB" project