/// <references type="cypress" />

describe('Loop',()=>{
   
    it('Loop Test',()=>{
        cy.visit('https://google.com')

        cy.get("[class='RNNXgb']").type('Cypress Automation')
        cy.wait(2000)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()==='cypress automation'){
                cy.wrap($el).click();
            } 
        })
        /*
        
Cypress testlerinde .each() fonksiyonunu kullanırken $el, index, ve $list parametreleri kullanılır:

$el: $el parametresi, .each() fonksiyonu tarafından geçirilen her öğeyi (elementi) temsil eder. Yani, $el, döngünün her bir adımında bir öğeyi ifade eder ve bu öğe üzerinde işlem yapmanıza olanak sağlar. Örneğinizde, $el Google arama sonuçlarından birini temsil eder ve cy.wrap($el).click() ile bu sonuca tıklar.

index: index parametresi, döngünün o anki adımının sıra numarasını temsil eder. Yani, döngünün kaçıncı adımında olduğunuzu belirtir. Bu, döngü içinde öğelerin sırasını izlemek veya işlem yapmak için kullanılabilir.

$list: $list parametresi, döngü içindeki tüm öğelerin bir koleksiyonunu temsil eder. Bu koleksiyon, $el ile işlem yaparken kullanılabilir. $list öğelerin bir listesini ifade eder ve örneğinizde $el öğelerinin içinde dolaşmak için kullanılır.
        */



   })

   

})