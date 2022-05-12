import { Given, When, Then, And } from "@wdio/cucumber-framework";
import simpleSearchPageObjects  from "../pageobjects/simpleSearchPageObject.js"

Given(/^I search a cause in easyfundraising website$/, async () => {

    await simpleSearchPageObjects.homePage();
    await simpleSearchPageObjects.searchCause(); 
});

When(/^I open the 12th cause in search results page$/, async () => {

   
   await  simpleSearchPageObjects.searchResults();
   await  simpleSearchPageObjects.seeMoreResults();
   await  simpleSearchPageObjects.openTwelfthCause();
    
});

Then(/^Respective cause should be opened with information$/ , async () => {

    await simpleSearchPageObjects.twelfthCausePage();
});
