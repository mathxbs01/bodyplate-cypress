/// <reference types="cypress"/>

Cypress.Commands.add("buscarBotaoPorTexto", (textoBotao: string) => {
  const elementoBotao = cy.contains("button", textoBotao);
  return elementoBotao;
});
