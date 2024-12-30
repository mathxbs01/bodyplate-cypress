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
  if (page.EscreveCampo) page.EscreveCampo(campo, valor);
});

E("seleciono a opção {string} no campo {string}", (valor, campo) => {
  if (valor === "") return;
  cy.wait(500);
  if (page.SelecionarValor) page.SelecionarValor(campo, valor);
});

E("limpo os campos {string}", (campo) => {
  cy.wait(500);
  if (campo === "") return;
  if (page.LimpaCampo) page.LimpaCampo(campo);
});

E("clico no radio-button {string}", (nomeRadio) => {
  cy.wait(500);
  if (page.ClicaRadioButton) page.ClicaRadioButton(nomeRadio);
});

E("clico no check-box {string}", (nomeCheckBox) => {
  cy.wait(500);
  if (page.ClicaCheckBox) page.ClicaCheckBox(nomeCheckBox);
});

E("aguardo {int} segundos", (periodo) => {
  cy.wait(periodo * 1000);
});

E("verifico se o radio-button {string} está selecionado", (nomeRadio) => {
  if (page.VerificaRadioSelecionado) page.VerificaRadioSelecionado(nomeRadio);
});

E(
  "verifico se a opção {string} está selecionada no campo {string}",
  (valor, campo) => {
    if (page.VerificaOpcaoSelecionada)
      page.VerificaOpcaoSelecionada(campo, valor);
  }
);

E(
  "verifico se no campo {string} o valor {string} está preenchido",
  (campo, valor) => {
    if (page.VerificaValorPreenchido)
      page.VerificaValorPreenchido(campo, valor);
  }
);

E("verifico se o campo {string} está desabilitado", (campo) => {
  if (page.VerificaCampoDesabilitado) page.VerificaCampoDesabilitado(campo);
});

// Métodos associados a botões.
E("clico no botão {string}", (nomeBotao) => {
  cy.wait(500);
  if (page.ClicaBotao) page.ClicaBotao(nomeBotao);
});

E("clico no dropdown de filtro", () => {
  cy.wait(500);

  cy.clicarFiltroRefinado();
});

// Métodos associados a acesso via "hiperlink".
E("clico no link {string}", (nomeLink) => {
  cy.wait(500);
  if (page.ClicaLink) page.ClicaLink(nomeLink);
});

// Método associado a menu
E("que expando o menu lateral", () => {
  cy.wait(500);

  cy.expandirMenu();
});

E("seleciono o menu {string}", (nomeMenu) => {
  cy.wait(500);

  cy.clicarMenu(nomeMenu);
});

E("seleciono o submenu {string}", (nomeSubMenu) => {
  cy.wait(500);

  cy.clicarSubMenu(nomeSubMenu);
});

//Método associado as ações de excluir, editar e visualizar
E("clico no ícone de {string}", (acao) => {
  cy.acaoLista(acao);
});

//Método para upload de documento
E("realiza upload de {string} no campo {string}", (tipoDocumento, campo) => {
  if (page.UploadDocumento) page.UploadDocumento(campo, tipoDocumento);
});

// Método para cadastrar massa REST API
E("possui massa cadastrada", () => {
  cy.cadastrarMassa(funcionalidadeAtual);
});

E("não possuo massa", () => {
  cy.excluirMassa(funcionalidadeAtual);
});

// Métodos associados aos colapses
E("seleciono as opções no colapse do módulo {string}:", (modulo, dataTable) => {
  const opcoes = dataTable.hashes();

  cy.abrirOuFecharColapse(modulo, "abro");

  opcoes.forEach((nomeCheckBox: any) => {
    if (page.ClicaCheckBox) page.ClicaCheckBox(nomeCheckBox.OPCAO);
  });

  cy.abrirOuFecharColapse(modulo, "fecho");
});
