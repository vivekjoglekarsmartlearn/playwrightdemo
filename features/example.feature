Feature: Login to DemoBlaze

  Scenario: User logs in successfully
    Given I am on the DemoBlaze homepage
    When I log in with valid credentials
    Then I should see the welcome message with my username
