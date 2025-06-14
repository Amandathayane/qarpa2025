/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {
    beforeEach(() => {
        //Pré-requisito
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    });

    it('Validar os campos obrigatórios', () => {
        //Passos
        cy.get('#nome').type('Anjo')
        cy.get('#email').type('a@a.com')
        cy.get('#renda').type('2000')
        cy.get('#cpf').type('123.456.789-01')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('exist').should('be.visible')
    });

    it('Validar aprovação de crédito', () => {
        //Passos
        cy.get('#nome').type('Anjo')
        cy.get('#email').type('a@a.com')
        cy.get('#renda').type('2000')
        cy.get('#cpf').type('123.456.789-01')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('contain','APROVADA')
        cy.get('#result').contains(/Aprovada/i)
        cy.get('#result').contains('Aprovada', {matchCase: false})
    });

    it('Validar reprovação de crédito', () => { 
        //Passos
        cy.get('#nome').type('Anjo')
        cy.get('#email').type('a@a.com')
        cy.get('#renda').type('1000')
        cy.get('#cpf').type('123.456.789-01')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('contain', 'REPROVADA').and('have.text', 'Olá, Anjo. Sua solicitação de crédito no valor de R$ 1000 foi REPROVADA, pois sua renda é menor que R$ 2000.')
    }); 
});