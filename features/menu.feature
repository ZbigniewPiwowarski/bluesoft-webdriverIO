Feature: Website menu

        Scenario: I accept cookies
            Given I am on the "main" page
             Then I accept cookies

        Scenario Outline: I can go through website menu and all links work

            Given I am on the "main" page
             When I hover <menuitem> menu item and I click <item>
             Then I should see <title> h1 title

        Examples:
                  | menuitem     | item         | title                         |
                  | What we do   | Industries   | we understand your business   |
                  | What we do   | Services     | Surpass Your Competitors      |
                  | What we do   | Competencies | From Digital Transformation   |
                  | What we do   | Technologies | 200 Technologies              |
                  | Our projects | Case studies | We Deliver Excellence         |
                  | Our projects | Products     | Advance Your Business         |
                  | Our projects | Clients      | We Build Strong Relationships |

        Scenario: I click Our team from menu
            Given I am on the "main" page
             When I click "Our team" menu item
             Then I should see "Our Team Of Movers" h1 title

        Scenario: I click Shape the future from menu
            Given I am on the "main" page
             When I click "Shape the future" menu item
             Then I should see "We Can Make A Difference" h1 title