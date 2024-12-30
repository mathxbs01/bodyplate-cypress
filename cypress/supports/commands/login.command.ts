/// <reference types="cypress"/>

import { LoginPage } from "../../pages/loginPage/login.page";

const baseUrl = Cypress.env("BASE_URL");
const BASE = baseUrl;
const loginPage = new LoginPage();

Cypress.Commands.add(
  "loginUsuario",
  (emailUsuario: string = "", senhaUsuario: string = "") => {
    cy.visit(BASE);

    loginPage.EscreveCampo("Email", String(emailUsuario));
    loginPage.EscreveCampo("Senha", String(senhaUsuario), false);
    loginPage.ClicaBotao("Fazer login");
  }
);
