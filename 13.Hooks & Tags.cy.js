
//  Hooks & Tags in Cypress

// Hooks: "before", "after", "beforeEach", "afterEach"
// Tags:  "skip", "only"

describe('MyTestSuite', () => {

    before( () =>{
        cy.log('****   Launch app   ****');
    })

    after( () => {
        cy.log('****   Close app   ****');
    })

    beforeEach( () => {
        cy.log('****   Login   ****');
    })

    afterEach( () => {
        cy.log('****   Logout   ****');
    })



    it('Search', () => {
        cy.log('*****   Searching   *****');
    })


    it.skip('Advanced Search', () => {
        cy.log('*****   Advanced Searching   *****');
    })


    it.only('Listing Products', () => {
        cy.log('*****   Listing Products   *****');
    })

})