Feature: Website menu

        Scenario: I accept cookies
            Given I am on the "main" page
             Then I accept cookies

        Scenario Outline: I can go through website menu and all links work

            Given I am on the "main" page
             When I hover <menuitem> menu item and I click <item> from page "othersMenu"
             Then I should see "<title>" h1 title from page "othersMenu"

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
             When I click "Our team" menu item from page "othersMenu"
             Then I should see "Our Team Of Movers" h1 title from page "othersMenu"

        Scenario: I click Shape the future from menu
            Given I am on the "main" page
             When I click "Shape the future" menu item from page "othersMenu"
             Then I should see "We Can Make A Difference" h1 title from page "othersMenu"


        Scenario Outline: I can go through website menu "How we work" and all links work
            Given I am on the "main" page
             When I click "How we work" menu item from page "howWeWork"
             Then I should see "How We Work" h1 title from page "howWeWork"
             When I click "<item>" menu item from page "howWeWork"
             Then I should see "<title>" h1 title from page "howWeWork"
        
        Examples:
                  | item                     | title                         |
                  | No Vendor Lock-In        | We Work Vendor Agnostic       |
                  | Open Source First        | We Consider Open Source First |
                  | Fair Partnership         | We Build Long-Term            |
                  | Agility                  | We Work Agile                 |
                  | Cross-Domain Perspective | We Approach Each              |
                  | Multi-Industry Expertise | We Combine The Best           |

        # This test case is only valid if there are any jobs offer
        # If this is not the case, please comment out this test case
        Scenario: I test Careers search bar if open positions available
            Given I am on the "main" page
             When I click "Careers" menu item from page "careersMenu"
             Then I should see "Careers H1" h1 title from page "careersMenu"
             When I click "See open positions" from page "careersMenu"
              And I scroll into view "Search bar" on page "careersMenu"
             Then I should see "Search bar" from page "careersMenu"
             When I click "Show more" from page "careersMenu"
              And I click all jobs offer filters
              And I click "Search" from page "careersMenu"
             Then I should see "Job search record" from page "careersMenu"
             When I type "testcccccccccccccc" word into text field "Search bar" from page "careersMenu"
              And I click "Search" from page "careersMenu"
             Then I should not see "Job search record" from page "careersMenu"
             When I click "Clear all" from page "careersMenu"
             Then I should see "Job search record" from page "careersMenu"

    


