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

// Métodos associados a URL ou Navegação.
E("que visito o Timekeeping", () => {
  cy.wait(500);

  cy.visit(URL);
});

E("que estou na página de {string}", (tela) => {
  cy.wait(500);

  const urlByTela: Record<string, string> = {
    Login: URL + "/login",
    "Esqueci senha": URL + "/recovery-password",
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
