// cypress/Support/index.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Faz login de um usuário no sistema.
     * @param matriculaUsuario Matrícula do usuário.
     * @param senhaUsuario Senha do usuário.
     * @param nomeUsuario Nome do usuário.
     */
    LoginUsuario(
      matriculaUsuario?: string,
      senhaUsuario?: string
    ): Chainable<Element>;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Comando personalizado para autenticação de login.
     */
    GetToken(): Chainable<void>;
  }
}
