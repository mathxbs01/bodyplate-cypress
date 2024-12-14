# language: pt
@esqueci-senha
Funcionalidade: Esqueci senha

  Contexto:
    Dado que visito o Timekeeping

  Cenario: Acesso a tela esqueci a senha
    Dado que estou na página de "Login"
    Quando clico no link "Esqueci minha senha"
    Então devo visualizar a página "Esqueci a senha"

  Esquema do Cenario: Recupero a senha
    Dado que estou na página de "Login"
    Quando clico no link "Esqueci minha senha"
    Quando preencho no campo "Email" o valor "<EMAIL>"
    E clico no botão "Enviar"
    E visualizo a mensagem "Envio realizado com sucesso"

    Exemplos:
      | EMAIL           |
      | teste@teste.com |

  Esquema do Cenario: Tenta realizar a recuperação de senha
    Dado que estou na página de "Login"
    Quando clico no link "Esqueci minha senha"
    Quando preencho no campo "Email" o valor "<EMAIL>"
    E clico no botão "Enviar"
    E visualizo a mensagem "Não foi possivel requisitar a recuperação de senha!"

    Exemplos:
      | EMAIL           |
      | teste@teste.com |
