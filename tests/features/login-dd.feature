Feature: Feature name

  Scenario: Verify User Login Carrier Equity
    Given Go To Carrier Equity Website
    When User Enter invalid Username and Password
    When User Clicks on Login Button
    Then Verify Carrier Equity not login 'User does not exist.'