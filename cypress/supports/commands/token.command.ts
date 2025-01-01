/// <reference types="cypress"/>

let usuario;
let API = Cypress.env("API");

Cypress.Commands.add("getToken", () => {
  cy.fixture("acessos/acesso").then((x) => {
    usuario = x;

    let token;

    cy.request({
      method: "POST",
      url: `${API}v1/Autenticacao/Login`,
      body: usuario,
      failOnStatusCode: false,
    }).then((response: any) => {
      token = response.body?.data?.token;

      Cypress.env("TokenCypress", token);
      localStorage.setItem("TokenCypress", token);

      return token;
    });
  });
});
