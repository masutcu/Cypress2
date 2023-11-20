
describe('MultipleUpload',()=>{
it('test',()=>{
    
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    
    //dosya seçme alanının 'choose file' locate'i alınır
    cy.get('#filesToUpload').attachFile(['bir.png', 'iki.png'])
    
    //yüklenen dosya isimlerinin locate i alınır
    cy.get('#fileList > :nth-child(1)').should('have.text','bir.png')
    cy.get('#fileList > :nth-child(2)').should('have.text','iki.png')
    

})
})