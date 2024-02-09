/// <reference types="cypress" />
import {
  Dado,
  Quando,
  Entao,
  E,
  InputPage,
  ListaPage,
  ModalMensagemPage,
} from "../..";

let APIUrl = Cypress.env("API");
let API = APIUrl;
let inputPage = new InputPage();
let listaPage = new ListaPage();
let modalPage = new ModalMensagemPage();

beforeEach(() => {
  cy.intercept("GET", `${API}/v1/GET/*`).as("getTESTE");
});

E("preencho no campo {string} o valor {string}", (campo, valor) => {
  if (valor != "") {
    cy.wait(500);
    if (valor.includes("/")) {
      inputPage.inputPreenchimento("data", campo, valor).tab();
    } else {
      inputPage.inputPreenchimento("text", campo, valor).tab();
    }
  }
});

E("clico no botão {string}", (nomeBotao) => {
  cy.wait(500);
  botaoPage.botao(nomeBotao).click({ force: true });
});

E("limpo os campos {string}", (campo) => {
  cy.wait(500);
  if (campo !== "") {
    inputPage.idInput(campo).clear({ force: true });
  }
});

E("seleciono a opção {string}", (opcao) => {
  cy.wait(500);
  if (opcao != "") {
    listaPage
      .lista()
      .contains("span", opcao)
      .click()
      .trigger("keydown", { keyCode: 27 });
  }
});

E("seleciono o radio-button {string}", (nomeRadio) => {
  cy.wait(500);
  if (nomeRadio != "") {
    if (inputPage.idInput(nomeRadio) === undefined) {
      cy.get("[ng-reflect-value]")
        .contains(nomeRadio, { matchCase: false })
        .click();
    } else {
      inputPage.idInput(nomeRadio.trim()).click({ force: true });
    }
  }
});

E("seleciono o checkbox {string}", (nomeCheck) => {
  cy.wait(500);
  if (nomeCheck != "") {
    if (nomeCheck == "Não Controlados") {
      inputPage.idInput(nomeCheck).check();
      inputPage.idInput("Controlados").uncheck();
    } else {
      inputPage.idInput(nomeCheck).check();
    }
  }
});

Entao("visualizo a mensagem {string}", (mensagem) => {
  cy.wait(2000);
  modalPage.error(mensagem);
});