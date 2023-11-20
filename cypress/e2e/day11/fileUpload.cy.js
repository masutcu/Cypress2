/// <references type="cypress" />

describe('FileUpload',()=>{
    //fileUpload için önce plugin yüklenir
    //kod: npm install --save-dev cypress-file-upload
    //import :  import 'cypress-file-upload'

   
    it('FileUpload1_Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        //dosya seçme alanının locatei alınır
        cy.get('#file-upload').attachFile('bir.png')
        //upload kısmının locate i alınır
        cy.get('#file-submit').click()
        cy.get('h3').contains('File Uploaded!')




   })

   

   it('FileUPLOAD2',()=>{
    //yüklenen dosyayı yeniden isimlendirerek yükleme
    cy.visit('https://the-internet.herokuapp.com/upload')
        //dosya seçme alanının locatei alınır
        cy.get('#file-upload').attachFile({filePath:'bir.png', fileName:'birbir.png'})
        //upload kısmının locate i alınır
        cy.get('#file-submit').click()
        cy.get('h3').contains('File Uploaded!')


   })

   it("file upload-drag and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("bir.png", {
      subjectType: "drag-n-drop",
    });

    cy.get(".dz-filename").contains("bir");
  });

})
