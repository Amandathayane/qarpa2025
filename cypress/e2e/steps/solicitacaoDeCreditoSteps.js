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

When("eu preencho os dados co cliente com nome {string}, email {string}, renda mensal de {string}, CPF {string} e valor de crédito de {string}", (nome, email, renda, cpf, credito) => {
    cy.get('#nome').type(nome)
    cy.get('#email').type(email)
    cy.get('#renda').type(renda)
    cy.get('#cpf').type(cpf)
    cy.get('#credito').type(credito)
})

When("um cliente solicitar um crédito de {string} com uma renda mensal de {string}", (valorCredito, renda) => {
    cy.get('#nome').type("Cliente Teste")
    cy.get('#email').type("cliente.teste@email.com")
    cy.get('#renda').type(renda)
    cy.get('#cpf').type("123.456.789-01")
    cy.get('#credito').type(valorCredito)
})

When("um cliente solicitar um crédito de {string} com uma renda mensal de {string}", (valorCredito, renda) => {
    cy.task("geradorDeUsuario")
    cy.get('#nome').type("Cliente Teste")
    cy.get('#email').type("cliente.teste@email.com")
    cy.get('#renda').type(renda)
    cy.get('#cpf').type("123.456.789-01")
    cy.get('#credito').type(valorCredito)
})

  // ESTE É O NOVO STEP DEFINITION QUE USA FAKER
When("um cliente aleatório solicitar um crédito de {string} com uma renda mensal de {string}", (renda, credito) => {
      
    // 1. Chamamos a task 'generateUser' que definimos no cypress.config.js
    cy.task('geradorDeUser').then((user) => {
    // 2. O .then() nos dá acesso ao objeto 'user' retornado pela task
    cy.log(`Usuário Gerado: ${user.nome} | ${user.email} | ${user.cpf}`);
  
    // 3. Usamos os dados do objeto 'user' e os parâmetros do step para preencher o formulário
    cy.get('#nome').type(user.nome);
    cy.get('#email').type(user.email);
    cy.get('#cpf').type(user.cpf);
    cy.get('#renda').type(renda);
    cy.get('#credito').type(credito);
});
}
);

And("eu clico em {string}", (text) => {
    cy.contains(text).click()
})

Then("o sistema irá informar que houve uma solicitação", () => {
    cy.get('#result').should('exist').should('be.visible')
})

Then("o sistema irá informar que a solicitação foi {string}", (resultado) => {
    cy.get('#result').should('exist').should('be.visible').should('contain', resultado)
})


//context('Validação da funcionalidade de aprovação ou reprovação', () => {
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