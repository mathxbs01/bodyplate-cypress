/// <reference types="cypress"/>

import "./commands/dummy_commands";
import "./service/dummy_autenticacao.service";
import "./service/common.service";

import { beforeEach } from "mocha";
require("cypress-plugin-tab");

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(() => {});
