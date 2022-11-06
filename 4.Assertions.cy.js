
describe("Assertions demo", () => {

    it("Implicit assertions", () => {

        cy.visit("https://www.emag.ro/") 

        cy.url().should('include','emag')
        cy.url().should('eq','https://www.emag.ro/') 
        cy.url().should('contain','.ro')  

        //the same block

        cy.url().should('include','emag')
        .should('eq','https://www.emag.ro/') 
        .should('contain','.ro')    

        //the same block

        cy.url().should('include','emag')
        .and('eq','https://www.emag.ro/') 
        .and('contain','.ro') 
        .and('not.contain','ciomag') 

        cy.title().should('include', 'niciodată')
        .and('eq', 'eMAG.ro - Căutarea nu se oprește niciodată')
        .and('contain', 'Căutarea')  


        cy.get('.navbar-brand > img').should('be.visible')
        //cy.get('.navbar-brand > img').should('exist')
        .and('exist') 

        cy.xpath('//a').should('have.length', '97')          //  ('//a') returns no of links  

        cy.get('#searchboxTrigger').type('telefoane')     //provide value to input
        cy.get('#searchboxTrigger').should('have.value','telefoane')   //check value 
       
    })

})