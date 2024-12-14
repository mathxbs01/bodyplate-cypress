/// <reference types="cypress"/>

import { AutorizacaoService } from "../Service/Autenticacao.service";
const autorizacaoService = new AutorizacaoService();
let usuario;

beforeEach(() => {
  cy.fixture("Acessos/acesso").then((acessos) => {
    usuario = acessos;
  });
});

Cypress.Commands.add("getToken", () => {
  autorizacaoService.autorizacaoToken();
});
