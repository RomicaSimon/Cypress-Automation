
import 'cypress-file-upload';
describe('File Uploads', () =>{

    it('Single File Upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('2. Testarea+functionala.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })


    it('File Upload - Rename', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile({filePath:'2. Testarea+functionala.pdf', fileName:'Testare Functionala'});
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    
    it('File Upload - Drag & Drop', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').attachFile('2. Testarea+functionala.pdf', {subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('2. Testarea+functionala.pdf');
    })

    it('Multiple Files Uploads', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload').attachFile( ['2. Testarea+functionala.pdf', '3. Testarea+Non-functionala.pdf']);
        cy.wait(3000);
        cy.get('#fileList > :nth-child(1)').should('have.text', '2. Testarea+functionala.pdf');
        cy.get('#fileList > :nth-child(2)').should('contain.text', '3. Testarea+Non-functionala.pdf');
    })


    it.only('File Upload - Shadow Dom', () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('2. Testarea+functionala.pdf');
        cy.wait(3000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('2. Testarea+functionala.pdf');
    })

})