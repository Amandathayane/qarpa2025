const ELEMENTS = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    btnLogin: '[data-test="login-button"]'
}

class LoginPage {

    preencherUsuario(usuario){
        cy.get(ELEMENTS.username).type(usuario)
    }

    preencherSenha(senha){
        cy.get(ELEMENTS.password).type(senha)
    }

    clicarLogin(){
        cy.get(ELEMENTS.btnLogin).click()
    }
}

export default new LoginPage();