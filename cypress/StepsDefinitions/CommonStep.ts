/// <reference types="cypress" />
import {
  Dado,
  Quando,
  Entao,
  E,
  InputElement,
  ListaElement,
  ModalElement,
  BotaoElement,
  LinkElement,
} from "../../index";
import { IInputElementType } from "../Elements/InputElements/InputElements.model";

const APIUrl: string = Cypress.env("API");
const URL: string = Cypress.env("BASE_URL");
let inputElement = new InputElement();
let listaElement = new ListaElement();
let modalElement = new ModalElement();
let botaoElement = new BotaoElement();
let linkElement = new LinkElement();

beforeEach(() => {
  cy.intercept("GET", `${APIUrl}/v1/GET/*`).as("GetTeste");
});

// Métodos associados a URL ou Navegação.
Dado("que visito o Timekeeping", () => {
  cy.wait(500);

  cy.visit(URL);
});

E("que estou na página de {string}", (tela) => {
  cy.wait(500);

  const urlByTela: any = {
    Login: URL + "/login",
  };

  cy.url().should("eq", urlByTela[tela]);
});

E("devo visualizar a página {string}", (tela) => {
  cy.wait(500);

  const urlByTela: any = {
    "Esqueci a senha": URL + "/recovery-password",
  };

  cy.url().should("eq", urlByTela[tela]);
});

// Métodos associados a inputs.
E("preencho no campo {string} o valor {string}", (campo, valor) => {
  if (valor === "") return;

  cy.wait(500);

  inputElement.inputPreenchimento(
    "texto",
    campo as IInputElementType,
    String(valor)
  );
});

E("limpo os campos {string}", (campo) => {
  cy.wait(500);
  if (campo !== "") cy.get(inputElement.idInput(campo)).clear({ force: true });
});

// Métodos associados a botões.
E("clico no botão {string}", (nomeBotao) => {
  cy.wait(500);

  botaoElement.nomeBotao(nomeBotao).click({ force: true });
});

// Métodos associados a botões.
E("clico no link {string}", (nomeLink) => {
  cy.wait(500);

  linkElement.nomeLink(nomeLink).click({ force: true });
});

//Modal de mensagem.
Entao("visualizo a mensagem {string}", (mensagem) => {
  modalElement.modalMensagem(mensagem);
});
