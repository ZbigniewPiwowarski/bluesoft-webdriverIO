Feature: Social media links

        Scenario: I go through the social media - Facebook link
            Given I am on the "main" page
              And I accept cookies
             When I click "Facebook" from page "socialMediaLinks"
             Then I should see second window opened with title "BlueSoft | Warsaw"

        Scenario: I go through the social media - Linkedin link
            Given Start new browser session
              And I am on the "main" page
              And I accept cookies
             When I click "Linkedin" from page "socialMediaLinks"
             Then I should see second window opened with title "Sign In | LinkedIn"

        Scenario: I go through the social media - YouTube link
            Given Start new browser session
              And I am on the "main" page
              And I accept cookies
             When I click "YouTube" from page "socialMediaLinks"
             Then I should see second window opened with title "YouTube"

        Scenario: I go through the social media - Clutch link
            Given Start new browser session
              And I am on the "main" page
              And I accept cookies
             When I click "Clutch" from page "socialMediaLinks"
             Then I should see second window opened with URL "https://clutch.co/profile/bluesoft"

        Scenario: I go through the social media - Instagram link
            Given Start new browser session
              And I am on the "main" page
              And I accept cookies
             When I click "Instagram" from page "socialMediaLinks"
             Then I should see second window opened with title "Instagram"

    

