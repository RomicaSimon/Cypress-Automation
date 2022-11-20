describe('mySuite', () => {

    it('Capture screenshots & videos', () => {

        cy.visit("https://demo.nopcommerce.com/");
        
        cy.screenshot('Homepage');
        cy.wait(3000);  
        cy.get("img[alt='nopCommerce demo store']").screenshot('Logo');  

        /* Automaticaly capture screenshots and videos on failure - only when executed through CLI
        cy.get("ul[class='top-menu notmobile'] li:nth-child(5) a:nth-child(1)").click();  //Books
        cy.get("div[class='page-title'] h1").should('have.text', 'Jewelry');  */

    })

})