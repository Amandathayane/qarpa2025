#language: pt

#TELA DE LOGIN
#login válido: user e senha válidos

#user invalido e senha válida
#senha inválido e user válido
#user em branco e senha válida
#senha em branco e user válido

#user bloqueado e senha válida
#senha com espaço e user bloqueado
#user com problema e senha válida
#senha com espaço e user com problema

#page objects

# 1 Login válido (user e senha válidos)
# - Login inválido:
#   2 User inválido e senha válida
#   3 User válido e senha inválida
#   4 User vazio e senha válida
#   5 User válido e senha vazia
# 6 Usuário bloqueado
# 7 Usuário com prolema

Funcionalidade: Validação do login do saucedemo
    Cenários voltados para os os testes de login do saucedemo

    Contexto: O usuário deve estar na página de login do saucedemo
        Dado que eu acesse a página de login

    # Cenário: Validação do login válido
    #     Quando eu preencho o campo login "standard_user"
    #     E eu preencher a senha "secret_sauce"
    #     E eu clico em "LOGIN"
    #     Então o sistema irá para a tela de "Catálogo de produtos"

    Cenário: Validação de Login com Diferentes Tipos de Usuário
        Quando eu preencho os campos de usuário e senha com as credenciais do usuário "usuario_valido"
        E eu clico no botão "LOGIN"
        Então eu devo ser redirecionado para a tela de "Catálogo de produtos"



    #Esquema do Cenário: Validação de login inválido
     #   Quando eu preencher o campo <login> e <senha> com dados inválidos
      #  E eu clico em "LOGIN"
       # Então o sistema irá informar que o login foi <Resultado>

        #Exemplos: 
        #| Perfil | ValorCredito | Renda | Resultado |
        #| "User inválido, senha válida" | "123" | "secret_sauce" | "LOGIN NÃO EFETUADO, USER INVÁLIDO" |
        #| "User válido, senha inválida" | "standard_user" | "123" | "LOGIN NÃO EFETUADO, SENHA INVÁLIDA" |
