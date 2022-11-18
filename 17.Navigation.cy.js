describe('mySuite', () => {

    it('Nvaigation test', () => {
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store');  // Homepage

        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');  // Cameras page

        cy.go('back');  // goback to homepage
        cy.title().should('eq', 'Your Store');

        cy.go('forward');   // again Cameras page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.go(-1);  // takes also to homepage
        cy.title().should('eq', 'Your Store');

        cy.go(1);  // again Cameras page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.reload();  // reload the page
    })

})