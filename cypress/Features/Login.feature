            # language: pt
            @login
            Funcionalidade: Login

            Contexto:
            Dado que visito o Dix Aeroportos

            Cenario: Login Dix Aeroportos
            Dado que estou na página de "Login"
            Quando preencho no campo "Email" o valor "elias.gomes@modalgr.io"
            E preencho no campo "Senha" o valor "ModalGR@2024"
            E clico no botão "Fazer login"
            Então devo visualizar a página "Inicial"

            Esquema do Cenario: Tentativa de login
            Dado que estou na página de "Login"
            Quando preencho no campo "Email" o valor "<EMAIL>"
            E preencho no campo "Senha" o valor "<SENHA>"
            E clico no botão "Fazer login"
            Então visualizo a informação "Verifique os dados inseridos e tente novamente."

            Exemplos:
            | EMAIL           | SENHA     |
            | teste@teste.com | Teste@123 |

            Esquema do Cenario: E-mail e senha inválidos
            Dado que estou na página de "Login"
            Quando preencho no campo "<TIPO>" o valor "<EMAIL>"
            Então visualizo a mensagem de validação "<MENSAGEM>"

            Exemplos:
            | TIPO  | EMAIL           | MENSAGEM                                                                                                                         |
            | Email | teste           | E-mail precisa estar em um formato válido                                                                                        |
            | Senha | teste@teste.com | A senha deve conter pelo menos, uma letra maiúscula, uma letra minúscula, um número, um caractere especial, 8 caracteres ou mais |
