Feature: Navigation tests

  Scenario: Check persistent navigation for Family room page
    Given I am a user at the home page
    When I navigate to Theather page
    Then I should see Family room page
    When I reload page
    Then I should see Family room page