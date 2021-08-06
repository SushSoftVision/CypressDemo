class FindflightPage{

    rdBtnRoundtrip(){
        return cy.get('input[value=roundtrip]');
    }
    rdBtnOneway(){
        return cy.get('input[value=oneway]');
    }
    ddPassengercount(){
        return cy.get('select[name="passCount"]');
    }
    ddFromPort(){
        return cy.get('select[name="fromPort"]');
    }
    btnFindflihts(){
        return cy.get('input[name="findFlights"]');
    }

  findArequiredFlight(){                          
    this.rdBtnRoundtrip().should('be.checked')           // radio button should be checked by default
    this.rdBtnOneway().should('not.be.checked')          // radio button should not be checked by default 
    cy.log('Selecting Passengers & fromPort starting from DropDowns and click on Continue')
    this.ddPassengercount().select('3')                    // dropdown options selecting 
    this.ddFromPort().select('Frankfurt')
    this.btnFindflihts().should('be.enabled')
    this.btnFindflihts().click()
    }

    findArequiredFlightWithOptions(){                          
        this.rdBtnRoundtrip().should('be.checked')           // radio button should be checked by default
        this.rdBtnOneway().should('not.be.checked')          // radio button should not be checked by default 
        cy.log('Selecting Passengers & fromPort starting from DropDowns and click on Continue')
        this.ddPassengercount().select("3").should('have.value', '3')   
        this.ddPassengercount().find('option').each(($el, index, $list) => {
            cy.log($el.text());
            console.log($el.text());
         })
       
        this.ddFromPort().select("Frankfurt").should('have.value', 'Frankfurt')
        this.btnFindflihts().should('be.enabled').click();
        }


}
export default FindflightPage;