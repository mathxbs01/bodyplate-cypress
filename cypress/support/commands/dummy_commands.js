/// <reference types="cypress"/>

import {
  BotaoSubmitPage,
  InputPage,
} from "../../..";

const baseUrl = Cypress.env("BASE_URL");
const BASE = baseUrl;

Cypress.Commands.add(
  "commandDummy",
  (matriculaUsuario = "", senhaUsuario = "", nomeUsuario = "") => {
    const inputPage = new InputPage();
    const botaoPage = new BotaoSubmitPage();

    cy.visit(BASE);

    inputPage.inputPreenchimento("text","Matricula", matriculaUsuario);
    inputPage.inputPreenchimento("text","Senha", senhaUsuario);
    botaoPage.botao("Login").click();
  }
);
