
describe('Check UI Elements', () => {

    it('Checking Radio Buttons', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // Visibility of radio buttons
        cy.get('#male').should('be.visible') 
        cy.get('#female').should('be.visible')

        // Selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })  

    it('Checking Checkboxes buttons', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // Visibility of Checkboxes butons
        cy.get('#monday').should('be.visible')

        // Selecting single checkbox - monday
        cy.get('#monday').check().should('be.checked')

        // Unselecting the same checbox - monday
        cy.get('#monday').uncheck().should('not.be.checked')

        // Selecting all the checkboxes
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        // Select first and last checkbox
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
        
    })
})