/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * @param matriculaUsuario
     * @param senhaUsuario
     * @param nomeUsuario
     * @param mensagem
     * @param tipoCampo
     * @param seletor
     * @param textoPreenchimento
     * @returns
     */

    loginUsuario(
      matriculaUsuario?: string,
      senhaUsuario?: string
    ): Chainable<Element>;

    getToken(): Chainable<void>;

    escreverValorNoCampo(
      seletor: string,
      textoPreenchimento: string
    ): Chainable<JQuery<HTMLInputElement>>;

    selecionarValorNoCampo(
      seletor: string,
      textoPreenchimento: string
    ): Chainable<JQuery<HTMLElement>>;

    verificarValorCampo(
      tipoCampo: IInputTypes,
      seletor: string,
      valor: string
    ): Chainable<JQuery<HTMLElement>>;

    buscarBotaoPorTexto(
      nomeBotao: string
    ): Chainable<JQuery<HTMLButtonElement>>;

    verificarMensagemModal(mensagem: string): Chainable<void>;

    obterLista(): Chainable<void>;

    obterLinkPorTexto(textoLink: string): Chainable<JQuery<HTMLAnchorElement>>;
  }
}
