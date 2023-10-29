/// <references type="cypress" />

describe('Drag And Drop',()=>{
    // Drag and Drop yapabilmek için plugin indirmemiz gereklidir.
    //https://www.npmjs.com/package/@4tw/cypress-drag-drop
    //kod: npm install --save-dev @4tw/cypress-drag-drop
    //import :  import '@4tw/cypress-drag-drop'
    //require: require('@4tw/cypress-drag-drop')

   
    it('DragAndDrop',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.wait(3000)
        cy.get('#column-a')//sürüklenecek element
        .drag('#column-b')//sürüklenecek yer
        .then((success) => {
            assert.isTrue(success)
        })



   })

   it('Drag And Drop Koordinat ile',()=>{

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.wait(3000)
        cy.get('#column-a')//sürüklenecek element
        .drag('#column-b', { 
        source: {x:100, y:100},//sürüklenecek koordinat
        target: { position: 'left' }, //bırakma hedefi için
        force: true,//hem kaynak hem de hedef öğeye uygulanır
    })
        
   })


   //farklı yol ile
   it.only('Drag And Drop 2.yol',()=>{

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.wait(3000)
    
    const dataTransfer=new DataTransfer();

        cy.get('#column-a').trigger('dragstart',{dataTransfer})  
        cy.get('#column-b').trigger('drop',{dataTransfer})    
        
   })

})