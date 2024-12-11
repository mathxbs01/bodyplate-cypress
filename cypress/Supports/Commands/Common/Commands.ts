/// <reference types="cypress"/>

import { BotaoElement, InputElement } from "../../../..";

const baseUrl = Cypress.env("BASE_URL");
const BASE = baseUrl;
const inputElement = new InputElement();
const botaoElement = new BotaoElement();

Cypress.Commands.add(
  "LoginUsuario",
  (matriculaUsuario: string = "", senhaUsuario: string = "") => {
    cy.visit(BASE);

    inputElement.inputPreenchimento(
      "texto",
      "Email",
      String(matriculaUsuario)
    );
    inputElement.inputPreenchimento("texto", "Senha", String(senhaUsuario));
    botaoElement.nomeBotao("Entrar").click();
  }
);
