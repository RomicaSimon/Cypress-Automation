
describe('My First Test', () => {

    it('verify title-positive', () => {

      cy.visit('https://www.emag.ro/')

      cy.title().should('eq','eMAG.ro - Căutarea nu se oprește niciodată')
    })


    it('verify title-negative', () => {

      cy.visit('https://www.emag.ro/')

      cy.title().should('eq','eMAG.ro - Căutarea nu se oprește')

    })
})   