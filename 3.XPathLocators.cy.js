
describe('XPathLocators', () => {

    it('Find no of products', () => {

        cy.visit("http://automationpractice.com/index.php")

        cy.xpath('//*[@id="homefeatured"]/li').should("have.length",7)

    }) 
    
})