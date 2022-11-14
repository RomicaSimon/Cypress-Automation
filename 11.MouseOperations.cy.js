import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {

    it('Mouseover', () => {

        cy.visit('https://demo.opencart.com/');

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');

        cy.get('ul[class="nav navbar-nav"]>li:nth-child(1)').trigger('mouseover').click();

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    }) 

    it('Right Click', () => {

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        //Aproach 1
        //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        //cy.get('.context-menu-icon-copy > span').should('be.visible');  
        
        //Aproach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    })
    
    it('Double click', () => {

        cy.visit('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick3');

        cy.frameLoaded('#iframeResult');  // Load the frame cy.get('body')

        //Aproach 1: using trigger method
        //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        //cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');

        //Aproach 2: using dblclick method
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')
    })  

    it('Drag & Drop using plugin', ()=> {

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);
        cy.get('#box6').drag('#box106', {force:true});
    })

    it.only('Scrolling page', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');

        // Romanian flag
        cy.get(':nth-child(2) > tbody > :nth-child(48) > :nth-child(2)').scrollIntoView({duration:3000});
        cy.get(':nth-child(2) > tbody > :nth-child(48) > :nth-child(2)').should('be.visible');

        //Scroll back(up) to Moldova flag
        cy.get(':nth-child(13) > :nth-child(1) > img').scrollIntoView({duration:3000});
        cy.get(':nth-child(13) > :nth-child(1) > img').should('be.visible');

        cy.get('#footer').scrollIntoView();
    })
});