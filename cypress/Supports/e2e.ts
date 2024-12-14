/// <reference types="cypress"/>

import "./Commands/Token.command";
import "./Commands/Elements/Botao.command";
import "./Commands/Elements/Input.command";
import "./Commands/Elements/Link.command";
import "./Commands/Elements/Lista.command";
import "./Commands/Elements/Modal.command";
import "./Commands/Funcionalidade.command";
import "./Service/Autenticacao.service";
import "./Service/Common/Common.service";
import { beforeEach } from "mocha";

require("cypress-plugin-tab");

beforeEach(() => {
  Cypress.on("test:before:run", (details) => {
    if (details.title) {
      Cypress.env("testeAtual", details.title);

      Cypress.env("funcionalidadeAtual", Cypress.spec.name.split(".")[0]);
    }
  });

  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(() => {});
