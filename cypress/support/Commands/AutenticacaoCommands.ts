/// <reference types="cypress"/>

import { AutorizacaoService } from "../Service/Autenticacao.service";
const autorizacaoService = new AutorizacaoService();
let usuario;
let token;

beforeEach(() => {
  cy.fixture("Acessos/acesso").then((acessos) => {
    usuario = acessos;
  });
});

Cypress.Commands.add("GetToken", () => {
  autorizacaoService.autorizacaoToken();
});

export { token };
