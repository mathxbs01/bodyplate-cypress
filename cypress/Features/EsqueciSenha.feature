            # language: pt
            @esqueci-senha
            Funcionalidade: Esqueci senha

            Contexto:
            Dado que visito o Dix Aeroportos

            Cenario: Acesso a tela esqueci a senha
            Dado que estou na página de "Login"
            Quando clico no link "Esqueci minha senha"
            Então devo visualizar o modal "Esqueceu sua senha?"

            Esquema do Cenario: Recupero a senha
            Dado que estou na página de "Login"
            Quando clico no link "Esqueci minha senha"
            Quando preencho no campo "Email" o valor "<EMAIL>"
            E clico no botão "Enviar"
            E visualizo a mensagem "Pronto. Caso exista uma conta vinculada a esse e-mail nós enviaremos um link de redefinição de senha. Verifique suas caixas de entrada e spam."

            Exemplos:
            | EMAIL                  |
            | elias.gomes@modalgr.io |

            Esquema do Cenario: Tenta realizar a recuperação de senha
            Dado que estou na página de "Login"
            Quando clico no link "Esqueci minha senha"
            Quando preencho no campo "Email" o valor "<EMAIL>"
            E clico no botão "Enviar"
            E visualizo a mensagem "Não foi possivel requisitar a recuperação de senha!"

            Exemplos:
            | EMAIL           |
            | teste@teste.com |
