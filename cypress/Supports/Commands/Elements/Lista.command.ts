/// <reference types="cypress"/>

Cypress.Commands.add("obterLista", () => {
  cy.get('div[role="listbox"]');
});
