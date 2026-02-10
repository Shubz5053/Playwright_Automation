Feature: Login Feature

  Scenario: Verify user login
    Given Go to Career Equity Website
    When User enters valid credentials
    Then User should be logged in successfully

  Scenario: Create Program
    Given Go to program Page
    When clicks on Add Program Page
    When enter a program Details
    When clicks on save and continue button
    Then Validate the program is created
