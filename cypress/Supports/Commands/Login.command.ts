/// <reference types="cypress"/>

import { LoginPage } from "../../Pages/LoginPage/Login.page";

const baseUrl = Cypress.env("BASE_URL");
const BASE = baseUrl;
const loginPage = new LoginPage();

Cypress.Commands.add(
  "loginUsuario",
  (matriculaUsuario: string = "", senhaUsuario: string = "") => {
    cy.visit(BASE);

    loginPage.EscreveCampo("Email", String(matriculaUsuario));
    loginPage.EscreveCampo("Senha", String(senhaUsuario));
    loginPage.ClicaBotao("Entrar");
  }
);
