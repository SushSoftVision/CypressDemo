//Write once and run multiple test cases with Cypress
//basically using an array of JSON objects with the first pair of key and values dataProviderOne.json 

// <reference types="cypress" />
import LoginPage from '../../support/page_objects/LoginPage';
import Utils from '../../integration/utilities/Utils';
import FindflightPage from '../../support/page_objects/FindflightPage';

const testUserData = require("../../fixtures/dataProviderOne.json")
testUserData.forEach((user) => {
    describe('Dynamic test data, passed through DataProvider/fixture[array of JSON Objects]', () => {

    let loginPage=new LoginPage();
    let utils=new Utils();
    let findflightPage=new FindflightPage();

     beforeEach(() => {
        loginPage.visitApp();
        cy.addContext('Visited the app -PASS ')
        });
   

    it('display the user details', function () {
   
            cy.log(user.Name);
            cy.log(user.Address);
           
        });

    it.only(`display the user ${user.Name} details`, function () {
   
            cy.log(user.Name);
            cy.log(user.Address);
            if(user.Name==='Mercury'){
                loginPage.enterUserNameAndPswd(user.UserName,user.Password);
                findflightPage.findArequiredFlight();
                cy.log('This will navigate to next page');
                cy.title().should('eq','Find a Flight: Mercury Tours:');

            }
        });

       
    });
});

//This code will use the data stored within the JSON file to drive our defined test case without the need to
// repeat ourselves with multiple spec files