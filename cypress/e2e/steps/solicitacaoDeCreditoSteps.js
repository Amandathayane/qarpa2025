/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página de solicitação de crédito", () =>{
    cy.visit('/')
})

When("eu preencher os campos obrigatórios com dados válidos", () => {
    cy.get('#nome').type('Anjo')
    cy.get('#email').type('a@a.com')
    cy.get('#renda').type('2000')
    cy.get('#cpf').type('123.456.789-01')
    cy.get('#credito').type('1000')
})

And("eu clico em {string}", (text) => {
    cy.contains(text).click()
})

Then("o sistema irá informar que houve uma solicitação", () => {
    cy.get('#result').should('exist').should('be.visible')
})
//context('Validação da funcionalidade de aprovação ou reprovanpção', () => {
  //  beforeEach(() => {
        //Pré-requisito
    //    cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    //});

    //it('Validar os campos obrigatórios', () => {
        //Passos
        //cy.get('#nome').type('Anjo')
      //  cy.get('#email').type('a@a.com')
        //cy.get('#renda').type('2000')
        //cy.get('#cpf').type('123.456.789-01')
        //cy.get('#credito').type('1000')
        //cy.get('[type="submit"]').click()
        //cy.get('#result').should('exist').should('be.visible')
    //});