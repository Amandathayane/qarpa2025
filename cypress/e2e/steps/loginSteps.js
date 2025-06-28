import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/page/loginPage";
import productsPage from "../../support/page/productsPage";

let usersData; // Armazenará todos os dados do fixture
let currentUser; // Armazenará o objeto do usuário atualmente em teste
let invalidUserData;


// Carrega o fixture uma vez antes de todos os cenários
before(() => {
  cy.fixture('users').then((dadosDoJson) => {
    usersData = dadosDoJson;
  });
  cy.fixture('usersInvalid.json').then((data) => {
    invalidUserData = data;
});
});



// Dado que eu acesse a página de login do Saucedemo
Given('que eu acesse a página de login', () => {
  cy.visit('/'); // URL do Saucedemo
});



// Quando eu preencho os campos de usuário e senha com as credenciais do usuário "{string}"
When('eu preencho os campos de usuário e senha com as credenciais do usuário {string}', (perfil_usuario) => {
    if (!usersData[perfil_usuario]) {
        cy.log(`Usuário '${perfil_usuario}' não encontrado no fixture!`);
      throw new Error(`Usuário '${perfil_usuario}' não encontrado no fixture!`);
    }
    const user = usersData[perfil_usuario];
    loginPage.loginAppAction(user.username, user.password);
   // loginPage.preencherUsuario(user.username)
   // loginPage.preencherSenha(user.password)
  });

When('eu preencho os campos de usuário ou senha com as credenciais inválidas do usuário {string}', (tipoCredencial) => {
    const user = invalidUserData[tipoCredencial]; // Pega os dados do JSON usando a chave (TipoCredencial)
    if (user) {
        loginPage.preencherUsuario(user.username);
        loginPage.preencherSenha(user.password);
    } else {
        throw new Error(`Tipo de credencial inválido: ${tipoCredencial}`);
    }
});

When('eu clico no botão {string}', (buttonText) => {
    loginPage.clicarLogin();
})



Then('eu devo ser redirecionado para a tela de {string}', (titleText) => {
    productsPage.textoDoTitulo(titleText)
  });

Then('o sistema irá informar que o login foi {string}', (mensagemDeErroEsperada) => {
    loginPage.validarMensagemDeErro(mensagemDeErroEsperada);
});