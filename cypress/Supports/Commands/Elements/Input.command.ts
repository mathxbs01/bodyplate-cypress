/// <reference types="cypress"/>

Cypress.Commands.add(
  "verificarValorCampo",
  (tipoCampo: IInputTypes, seletor: string, valor: string) => {
    let inputElement = cy.get(seletor);

    const tipoInput = (type: IInputTypes) => {
      switch (type) {
        case "texto":
          return inputElement.should("have.value", valor);
        case "select":
          return inputElement.contains("span", valor).should("exist");
        default:
          throw new Error(`Tipo de campo inválido: ${type}`);
      }
    };

    return tipoInput(tipoCampo);
  }
);

Cypress.Commands.add(
  "escreverValorNoCampo",
  (
    seletor: string,
    textoPreenchimento: string
  ): Cypress.Chainable<JQuery<HTMLInputElement>> => {
    let texto: string;

    if (textoPreenchimento.includes("/")) {
      texto = textoPreenchimento.split("/").reverse().join("-");
    } else {
      texto = textoPreenchimento;
    }

    return cy.get(seletor).find("input").clear({ force: true }).type(texto);
  }
);

Cypress.Commands.add(
  "selecionarValorNoCampo",
  (
    seletor: string,
    textoPreenchimento: string
  ): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(seletor).select(textoPreenchimento);
  }
);
