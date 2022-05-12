Feature: Open the 12th cause from search results page in Easyfundraising Website

Scenario: As a user, I can open the 12th cause from search results
    Given I search a cause in easyfundraising website
    When I open the 12th cause in search results page
    Then Respective cause should be opened with information