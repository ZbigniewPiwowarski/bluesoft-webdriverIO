Feature: Uppper navbar

        Scenario: I accept cookies
            Given I am on the "main" page
             Then I accept cookies

        Scenario Outline: I go through upper navbar blog

            Given I am on the "main" page
              And I click "Blog" from page "upperNavbarBlog"
             When I hover <menuitem> menu item and I click <item> from page "upperNavbarBlog"
             Then I should see "<title>" h1 title from page "upperNavbarBlog"

        Examples:
                  | menuitem       | item                       | title                               |
                  | Expert's Voice | Platform Engineering       | Platform Engineering H1 Title       |
                  | Expert's Voice | Agile                      | Agile H1 Title                      |
                  | Expert's Voice | API Management             | API Management H1 Title             |
                  | Expert's Voice | Business Inteligence       | Business Inteligence H1 Title       |
                  | Expert's Voice | Cloud                      | Cloud H1 Title                      |
                  | Expert's Voice | Data                       | Data H1 Title                       |
                  | Expert's Voice | DevOps                     | DevOps H1 Title                     |
                  | Expert's Voice | Digital Transformation     | Digital Transformation H1 Title     |
                  | Expert's Voice | Robotic Process Automation | Robotic Process Automation H1 Title |
                  | Expert's Voice | System Integration         | System Integration H1 Title         |
                  | Expert's Voice | Quality Assurance          | Quality Assurance H1 Title          |


        Scenario: I change language of website
            Given I am on the "main" page
             When I click "Polish language icon" from page "upperNavbarOthers"
             Then I should see "Twój Partner Technologiczny" from page "upperNavbarOthers"
             When I click "English language icon" from page "upperNavbarOthers"
             Then I should see "Impacting Industry Leaders With" from page "upperNavbarOthers"

        Scenario: I test contact us form
            Given I am on the "main" page
             When I click "Contact" from page "upperNavbarOthers"
              And I click "Send button" from page "upperNavbarOthers"
             Then I should count "Field invalid" elements be equal 8 on page "upperNavbarOthers"
             When I type "test" word into text field "First name field" from page "upperNavbarOthers"
              And I type "test" word into text field "Last name field" from page "upperNavbarOthers"
              And I type "test@com.pl" word into text field "Email field" from page "upperNavbarOthers"
              And I type "123456789" word into text field "Phone field" from page "upperNavbarOthers"
              And I type "test" word into text field "Company field" from page "upperNavbarOthers"
              And I type "test" word into text field "Job title field" from page "upperNavbarOthers"
              And I click "Service select" from page "upperNavbarOthers"
              And I click "Service select DevOps" from page "upperNavbarOthers"
              And I click "Send button" from page "upperNavbarOthers"
             Then I should count "Field invalid" elements be equal 1 on page "upperNavbarOthers"
            

       

