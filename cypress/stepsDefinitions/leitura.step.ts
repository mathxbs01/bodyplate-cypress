/// <reference types="cypress" />
import { E } from "../../index";
import { IPageModel } from "../supports/models/pagesModel/Ipages.model";
import { PageModel } from "../supports/models/pagesModel/pages.model";

let funcionalidadeAtual: FuncionalidadeType;
let page: IPageModel;

beforeEach(() => {
  funcionalidadeAtual = Cypress.spec.name.split(".")[0] as FuncionalidadeType;

  page = PageModel.getPage(funcionalidadeAtual);

  if (!page) {
    throw new Error(`Funcionalidade desconhecida: ${funcionalidadeAtual}`);
  }
});

//Modal de mensagem.
E("visualizo a mensagem {string}", (mensagem) => {
  cy.wait(500);

  cy.verificarMensagemModal(mensagem);
});

E("visualizo a informação {string}", (mensagem) => {
  cy.wait(500);

  cy.verificaMensagemToast(mensagem);
});

E("visualizo a mensagem de validação {string}", (mensagem) => {
  cy.wait(500);

  cy.verificaShielError(mensagem);
});

E("devo visualizar o modal {string}", (nomeModal) => {
  cy.wait(500);

  cy.verificaModalExistente(nomeModal);
});

E("devo visualizar na coluna {string} o valor {string}", (coluna, valor) => {
  cy.verificarValorLista(coluna, valor);
});
