import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/page/loginPage";

let usersData; // Armazenará todos os dados do fixture
let currentUser; // Armazenará o objeto do usuário atualmente em teste

// Carrega o fixture uma vez antes de todos os cenários
before(() => {
  cy.fixture('users').then((dadosDoJson) => {
    usersData = dadosDoJson;
  });
});

// Dado que eu acesse a página de login do Saucedemo
Given('que eu acesse a página de login', () => {
  cy.visit('https://www.saucedemo.com/'); // URL do Saucedemo
});

// Quando eu preencho os campos de usuário e senha com as credenciais do usuário "{string}"
When('eu preencho os campos de usuário e senha com as credenciais do usuário {string}', (perfil_usuario) => {
    if (!usersData[perfil_usuario]) {
        cy.log(`Usuário '${perfil_usuario}' não encontrado no fixture!`);
      throw new Error(`Usuário '${perfil_usuario}' não encontrado no fixture!`);
    }
    const user = usersData[perfil_usuario];
    //LoginPage.login(user.username, user.password);
    loginPage.preencherUsuario(user.username)
    loginPage.preencherSenha(user.password)
  });