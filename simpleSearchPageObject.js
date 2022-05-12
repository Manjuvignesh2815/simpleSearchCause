class simpleSearchPageObjects{

    //Web Element Selectors
    get cookiePopUp() {return $('/html/body/div[1]/div/a')}
    get searchBox() {return $('#causeTerm')}    //find searchbox
    get searchButton(){return $('#causeSubmitSearch')}   //find search button
    get searchedCause(){ return $('//*[@id="search-page"]/div/div/p/span/q')}   //find cause that is searched
    get showMoreCause(){return $('#primarySearchResultsShowMore')}   //find show more cause button
    get twelfthCause(){return $('//*[@id="causesSearchItem11TextLink"]')}
    get openCause(){return $('//*[@id="cause-profile"]')}
    
    
       
    /*
     * methods to encapsule automation code to interact with the pages
     * e.g. search a cause in the home page
     */
    

    async homePage()                              //It navigates to home page
    {
      await browser.url('https://www.easyfundraising.org.uk/');
      await browser.maximizeWindow();
      let homePageTitle = await browser.getTitle();
      await this.cookiePopUp.waitForExist();
      await this.cookiePopUp.click();
      console.log("I am on " +homePageTitle+" page");
      
    }

    async searchCause()                           //It searches a cause
    {
        await this.searchBox.waitForExist();
        await this.searchBox.setValue('UK cause');
        await this.searchButton.click();
        console.log("Searched a cause successfully");
    }
    
    async searchResults()                          // It displays the search results
    {
        let searchResultTitle = await browser.getTitle();
        (await this.searchedCause).waitForExist();
        let resultCause = await this.searchedCause.getText();
        console.log("I am on "+searchResultTitle+" page with "+resultCause+" is displayed");
         }

    async seeMoreResults()                         //It displays more causes
    {
        (await this.showMoreCause).waitForExist();
        await this.showMoreCause.scrollIntoView();
        expect(this.showMoreCause).toBeDisplayed();
        await this.showMoreCause.click();
        
    }
    
    async openTwelfthCause()                       //It opens the 12th cause from the search result
    {
        (await this.twelfthCause).waitForExist();
        await this.twelfthCause.scrollIntoView();
        expect(this.twelfthCause).toBeDisplayed();
        await this.twelfthCause.click();
        console.log("I clicked on 12th result");
    }
    
    async twelfthCausePage()                      //It displays the 12th cause with information about it
    {
        let causePageTitle= await browser.getTitle();
        await browser.takeScreenshot();
        console.log("I am on "+causePageTitle+" Page");
        let causeText= (await this.openCause).getText();
        expect(causeText).toHaveText(this.twelfthCauseText);
        console.log("I Opened the twelfth cause : "+ causeText);
        
    }
    async twelfthCauseText(text)               //It outputs the twelth cause text
    {
       let twelfthText= await  this.twelfthCause.$('/div[2]/p').getText();
       return twelfthText;
    }
}export default new simpleSearchPageObjects();