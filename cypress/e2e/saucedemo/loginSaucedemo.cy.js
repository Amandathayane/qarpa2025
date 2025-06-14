/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {
    beforeEach(() => {
        //Pré-requisito
        cy.visit('https://www.saucedemo.com/v1/')
    });

    it('Login válido', () => {
        //Passos
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('exist')
    });

   
});