//Before - After İşlevleri
describe('', () => {
   before(() => {//Tüm testlerden(Tüm it blokları) önce bir kere çalışır
        cy.visit('https://www.google.com') 
  });  
  after(() => { // Tüm Testler ( Tüm it blokları) tamamlandı
    cy.log('Tüm testler tamamlandı')
});
  beforeEach(() => { //Her bir testten (it bloğu) önce bir kere çalışır
    cy.log('yeni bir test başlıyor')  
  });
    it('google da 3 Idiots', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')
        
    });
    afterEach(() => { //Her bir testten (it bloğu) sonra çalışır 
        cy.log('Bir test tamamlandı. Diğerine geçiliyor')
    });
});