describe('Alerts', () => {

    // 1) JavaScript alert: it will have some text aand an "OK" button
    it('Js alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('#content > div > ul > li:nth-child(1) > button').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })

        // alert window automatically closed by Cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })


    //2) JavaScript Confirm alert: it will have some text aand an "OK" and "Cancel" buttons
    it('Js Confirm alert - Ok', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('#content > div > ul > li:nth-child(2) > button').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        // Cypress automatically closed alert window by using "Ok" button
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })


    it('Js Confirm alert - Cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('#content > div > ul > li:nth-child(2) > button').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })


        cy.on('window:confirm', () => false)  //cypress closes alert window by using "Cancel" button

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })


    // Javascript Prompt alert: it will have some text with a textbox for user input along with "Ok" and "Cancel" buttons

    it('Js Prompt alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get('#content > div > ul > li:nth-child(3) > button').click() 

        cy.get('#result').should('have.text', 'You entered: welcome')

        // cypress will automatically close prompt alert by using "Ok" button by default

        cy.on('window:prompt', () => false)
        cy.get('#result').should('have.text', 'You entered: null')

    })

    // 4) Authenticated alert
    it.only('Authenticated alert', () => {

        //Approach 1 
        
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {
                                                                            username: "admin", 
                                                                            password: "admin" 
                                                                        }
        })

        cy.get('#content > div > p').should('have.contain', 'Congratulations')  

        //Approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('#content > div > p').should('have.contain', 'Congratulations')

    })

})