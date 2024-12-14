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

// Método para tentativa de habilitar "re-captcha"
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

// Métodos associados a inputs.
E("preencho no campo {string} o valor {string}", (campo, valor) => {
  if (valor === "") return;
  cy.wait(500);

  page.EscreveCampo(campo, valor);
});

E("preencho seleciono o valor {string} no campo {string}", (valor, campo) => {
  if (valor === "") return;
  cy.wait(500);

  page.SelecionarValor(campo, valor);
});

E("limpo os campos {string}", (campo) => {
  cy.wait(500);
  if (campo === "") return;

  page.LimpaCampo(campo);
});

// Métodos associados a botões.
E("clico no botão {string}", (nomeBotao) => {
  cy.wait(500);

  page.ClicaBotao(nomeBotao);
});

// Métodos associados a acesso via "hiperlink".
E("clico no link {string}", (nomeLink) => {
  cy.wait(500);

  page.ClicaLink(nomeLink);
});
