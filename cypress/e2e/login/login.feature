Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the todoly login page
    Scenario: Success Login
        When a user clicks the login button and enters the username "lfer@gmail.com", the password "123" and clicks the login button
        Then the URL will contain the inventory subdirectory
    Scenario: Blocked Login
        When a user clicks the login button and enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | secret_sauce |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username      | password     |
            | standard_user | testPassword |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed