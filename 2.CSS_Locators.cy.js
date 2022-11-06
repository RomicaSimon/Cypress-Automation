
describe('CSS_Locators', () => {

    it('CSSlocators', () => {

        cy.visit('http://automationpractice.com/index.php')

        cy.get('#search_query_top').type('T-Shirts')        // by Id

        cy.get('[name="submit_search"]').click()            // by Attribute

        cy.get('.lighter').contains('T-Shirts')             // by Class

    })

})