/// <references type="cypress" />

describe('FileUpload', () => {
    
    //FileUpload için Plugin yüklememiz lazım
    //kod: npm install --save-dev cypress-file-upload
    //import :  import 'cypress-file-upload'
    

    it('SingleUpload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(3000)
        
        //dosya fixture file içinde ise sadece ismi ve uzantısı yeterlidir.yoksa yol olarak yazılmalıdır.
        const path1="bir.png"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','bir.png')


    })

    it('Multiple FileUpload 1', () => {

        //çok dosya tektek

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(3000)

        const path1="bir.png"
        const path2="iki.png"
        const path3="uc.png"
        
        cy.get('#filesToUpload').
        attachFile(path1).wait(1000).
        attachFile(path2).wait(1000).
        attachFile(path3).wait(1000)



    })

    it('Multiple FileUpload 2', () => {

        //çok dosya birlikte

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(3000)

        const path1="bir.png"
        const path2="iki.png"
        const path3="uc.png"
        
        cy.get('#filesToUpload').
        attachFile([path1, path2, path3])

        cy.get('#fileList > :nth-child(1)').should('have.text','bir.png') //birebir aynı olmak zorunda
        cy.get('#fileList > :nth-child(2)').should('contain.text','iki.png') //içeriyormu
        cy.get('#fileList > :nth-child(3)').should('include.text','uc.png') //içeriyormu


        



    })

    it.only('OverWrite File Name', () => {
        
        //dosya ismini değiştirerek gönderme

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(3000)

        const path1="bir.png"
        
        cy.get('#filesToUpload').
        attachFile({filePath: path1, fileName: 'image01.png'})

        
        

    })

})