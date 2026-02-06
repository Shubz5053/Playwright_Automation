Feature: Login Carrier Equity

  Scenario: Verify User Login Carrier Equity Using Tabel Format
    Given Go To Carrier Equity Website
    When User Enter '<Username>' and '<Password>'
    When User Clicks on Login Button
    Then Verify Carrier Equity not login '<Error>'
    Examples:
      | Username                  | Password  | Error                |
      | shubhamsitnew@yopmail.com | Admin@123 | User does not exist. |

  Scenario: Verify User Login Carrier Equity
    Given Go To Carrier Equity Website
    When User Enter 'shubhamsitnew01@yopmail.com' and 'Admin@123'
    When User Clicks on Login Button
    Then Verify User login successfully





