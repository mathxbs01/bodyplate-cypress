/// <reference types="cypress"/>

import "./Commands/Common/Commands";
import "./Commands/AutenticacaoCommands";
import "./Service/Autenticacao.service";
import "./Service/Common/Common.service";

import { beforeEach } from "mocha";
require("cypress-plugin-tab");

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(() => {});
