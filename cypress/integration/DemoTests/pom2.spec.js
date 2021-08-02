// <reference types="cypress" />
import LoginPage from '../../support/page_objects/LoginPage';
import Utils from '../utilities/Utils';
import FindflightPage from '../../support/page_objects/FindflightPage';



describe("My first- test group -Using Page Obects", function(){
    let loginPage=new LoginPage();
    let utils=new Utils();
    let findflightPage=new FindflightPage();
  
    beforeEach(function() {
        // runs before each test in the it block
        loginPage.visitApp();
        cy.fixture('loginCred').then(function(data){
        this.data=data;
         })
        cy.log(utils.getcurrentDate());
    
      })

      after(function() {
        // runs after each test in the it block
        cy.log("I am in After block")
        cy.addContext('Test case is PASSED')
        // implement app log out method to invoke in this block
      })

   
    it("Find a requird flight to travel-Custom cypress commands", function(){
        cy.loginCommand(this.data.username,this.data.password)
        cy.log('This will navigate to next page');
        cy.title().should('eq','Login: Mercury Tours'); 
        
    })

    it("Find a requird flight to travel-each", function(){
        loginPage.enterUserNameAndPswd(this.data.username,this.data.password)
        findflightPage.findArequiredFlightWithOptions();
        cy.title().should('eq','Login: Mercury Tours'); 
        
    })

    it("Login with Invalid credentials-should Fail", function(){
        loginPage.enterUserNameAndPswd('mercury','wrongPassword');
        findflightPage.findArequiredFlight();
        cy.log('This will navigate to next page');
        cy.title().should('eq','Find a Flight: Mercury Tours:'); 
    })

  

})