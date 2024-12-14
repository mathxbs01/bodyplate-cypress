/// <reference types="cypress"/>

Cypress.Commands.add("verificarMensagemModal", (mensagem: string) => {
  cy.get("div.toast-message")
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(mensagem.trim());
    });
});
