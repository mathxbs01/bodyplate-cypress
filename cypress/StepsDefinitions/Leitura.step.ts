/// <reference types="cypress" />
import { E, LoginPage, EsqueciSenhaPage } from "../../index";
import { IPageModel } from "../Supports/Models/Interfaces/IPages.model";
import { FuncionalidadeType } from "../Supports/Models/Types/FuncionalidadeType.model";

let loginPage = new LoginPage();
let esqueciSenhaPage = new EsqueciSenhaPage();

let funcionalidadeAtual: string;
let funcionalidadeMap: Record<FuncionalidadeType, IPageModel>;
let page: IPageModel;
const APIUrl: string = Cypress.env("API");
const URL: string = Cypress.env("BASE_URL");

beforeEach(() => {
  funcionalidadeAtual = Cypress.env("funcionalidadeAtual");

  funcionalidadeMap = {
    EsqueciSenha: esqueciSenhaPage,
    Login: loginPage,
  };

  page = funcionalidadeMap[funcionalidadeAtual as FuncionalidadeType];

  if (!page) {
    throw new Error(`Funcionalidade desconhecida: ${funcionalidadeAtual}`);
  }
});

//Modal de mensagem.
E("visualizo a mensagem {string}", (mensagem) => {
  cy.verificarMensagemModal(mensagem);
});
