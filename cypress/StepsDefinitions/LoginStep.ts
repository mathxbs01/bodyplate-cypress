/// <reference types="cypress" />
import {
  Dado,
  Quando,
  Entao,
  E,
  InputElement,
  ListaElement,
  ModalElement,
} from "../..";

let APIUrl = Cypress.env("API");
let API = APIUrl;
let inputElement = new InputElement();
let listaElement = new ListaElement();
let modalElement = new ModalElement();

beforeEach(() => {
  cy.intercept("GET", `${API}/v1/GET/*`).as("GetTeste");
});

E("autentico como não robo", () => {
  cy.wait(500);
  cy.get("iframe")
    .first()
    .then((recaptchaIframe) => {
      const body = recaptchaIframe.contents();
      cy.wrap(body)
        .find(".recaptcha-checkbox-border")
        .should("be.visible")
        .click();
    });
});
