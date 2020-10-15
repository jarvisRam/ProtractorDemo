Feature: Faded t-shirt purchase
	User should be able to add a faded short sleeve t-shirt to his cart

	Background: 
		Given I navigate to automation practice site
@functional @regression @smoke
Scenario: Logon to automation practice website to see my account page
	When I logon with username "sriram20mail@gmail.com" with password "Passw0rd"
	Then I should see "my account" page

@functional @regression
Scenario: User is able to navigate to women's section
When I logon with username "sriram20mail@gmail.com" with password "Passw0rd"
And I navigate to the "Women" section
Then I should see the page heading as "Women"

