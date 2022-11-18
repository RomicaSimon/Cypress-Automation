// click on link using label
// overwriting existing contains() comand
// re-usuable custom command

describe('Custom commands', () => {

    it('Handling links', () => {
        cy.visit('https://demo.nopcommerce.com/');

        // direct - without using Custom command
        //cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();

        //using Custom command
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })

    it('Overwriting existing command', () => {
        cy.visit('https://demo.nopcommerce.com/');        

        //using Custom command
        cy.clickLink('APPLE MACBOOK PRO 13-inch');
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })

    it.only('Login command', () => {
        cy.visit('https://demo.nopcommerce.com/');

        cy.clickLink('Log in');  //custom command
        cy.loginApp('test@gmail.com', '123test');  // custom command
        cy.get('.ico-account').should('have.text', 'My account');
    })

})