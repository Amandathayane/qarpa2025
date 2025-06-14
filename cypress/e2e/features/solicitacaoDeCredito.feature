#language: pt

Funcionalidade: Validação da funcionalidade de aprovação ou reprovação.
    Descrição da funcionalidade: Cenários voltados para os -caminhos felizes- da solicitação de crédito.

Contexto: O usuário está logado e tem permissão para aprovar ou reprovar solicitações
        Dado que eu acesse a página de solicitação de crédito
        
    Cenário: Validação dos campos obrigatórios
        Quando eu preencher os campos obrigatórios com dados válidos
        E eu clico em "Solicitar Crédito"
        Então o sistema irá informar que houve uma solicitação
        
    #Cenário: Análise de aprovação para clientes dentro do padrão de aprovação
    #    Quando eu preencho os dados co cliente com nome "Anjo do céu", email "anjo@doceu.com", renda mensal de "3000", CPF "123.456.789.01" e valor de crédito de "3000"
    #    E eu clico em "Solicitar Crédito"
    #    Então o sistema irá informar que a solicitação foi "APROVADA"

    #Cenário: Análise de aprovação para clientes fora do padrão de aprovação
    #    Quando eu preencho os dados co cliente com nome "Anjo do céu", email "anjo@doceu.com", renda mensal de "3000", CPF "123.456.789.01" e valor de crédito de "3000"
    #    E eu clico em "Solicitar Crédito"
    #    Então o sistema irá informar que a solicitação foi "REPROVADA"

    Esquema do Cenário: Análise de crédito para clientes
        Quando um cliente solicitar um crédito de <ValorCredito> com uma renda mensal de <Renda> 
        E eu clico em "Solicitar Crédito"
        Então o sistema irá informar que a solicitação foi <Resultado>

        Exemplos: 
        | Perfil | ValorCredito | Renda | Resultado |
        | "Renda alta, crédito aprovado" | "3000" | "3000" | "APROVADA" |
        | "Renda baixa, crédito reprovado" | "3000" | "1000" | "REPROVADA" |


    Esquema do Cenário: Análise de crédito para clientes
        Quando um cliente aleatório solicitar um crédito de <ValorCredito> com uma renda mensal de <Renda>
        E eu clico em "Solicitar Crédito"
        Então o sistema irá informar que a solicitação foi <Resultado>

        Exemplos:
        | Perfil        | ValorCredito  | Renda    | Resultado    |
        | "Renda alta"  | "3000"        | "3000"   | "APROVADA"   |