# language: pt
@login
Funcionalidade: Login

  Contexto:
    Dado que visito o Timekeeping

  Cenario: Login Timekeeping
    Dado que estou na página de "Login"
    Quando preencho no campo "Email" o valor "teste@teste.com"
    E preencho no campo "Senha" o valor "teste@123"
    E autentico como não robo
    E clico no botão "Entrar"
    Então devo visualizar a página "Inicial"

  Esquema do Cenario: Tentativa de login
    Dado que estou na página de "Login"
    Quando preencho no campo "Email" o valor "<EMAIL>"
    E preencho no campo "Senha" o valor "<SENHA>"
    E autentico como não robo
    E clico no botão "Entrar"
    E visualizo a mensagem "MENSAGEM"

    Exemplos:
      | EMAIL           | SENHA    |
      | teste@teste.com | teste123 |
      | teste@teste.com | teste321 |
      | teste@teste.com | teste312 |
