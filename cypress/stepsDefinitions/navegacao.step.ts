/// <reference types="cypress" />
import { E } from "../../index";
import { IPageModel } from "../supports/models/pagesModel/Ipages.model";
import { PageModel } from "../supports/models/pagesModel/pages.model";

let funcionalidadeAtual: FuncionalidadeType;
let page: IPageModel;
let usuario: any;
const URL: string = Cypress.env("BASE_URL");

beforeEach(() => {
  funcionalidadeAtual = Cypress.spec.name.split(".")[0] as FuncionalidadeType;

  page = PageModel.getPage(funcionalidadeAtual);

  if (!page) {
    throw new Error(`Funcionalidade desconhecida: ${funcionalidadeAtual}`);
  }

  cy.fixture("acessos/acesso").then((acessos) => {
    usuario = acessos;
  });
});

// Métodos associados a URL ou Navegação.
E("que visito o Dix Aeroportos", () => {
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
    Inicial: "/home",
    "Esqueci a senha": "/recovery-password",
  };

  cy.url().should("eq", URL + urlByTela[tela]);
});

E("estou autenticado", () => {
  cy.wait(500);

  cy.loginUsuario(usuario.email, usuario.senha);
});

E("mudo para a aba {string}", (nomeAba) => {
  cy.wait(500);

  cy.mudarAba(nomeAba);
});
