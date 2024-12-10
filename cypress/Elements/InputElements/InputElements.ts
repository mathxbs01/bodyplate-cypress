import { IInputElement, IInputElementType, IInputTypes } from "./InputElements.model";

export class InputElement {
  public idInput(Campo: IInputElementType) {
    const camposID: IInputElement = {
      Email: "#email",
      Senha: "#senha",
    };

    return camposID[Campo];
  }

  public inputPreenchimento(
    tipoCampo: IInputTypes,
    textoLabel: IInputElementType,
    textoPreenchimento: string
  ) {
    const tipoInput = (type: IInputTypes) => {
      switch (type) {
        case "texto":
          return this.escreveTexto(textoLabel, textoPreenchimento);
        case "select":
          return this.selecionaValor(textoLabel, textoPreenchimento);
        default:
          return null;
      }
    };

    return tipoInput(tipoCampo);
  }

  private escreveTexto(
    textoLabel: IInputElementType,
    textoPreenchimento: string
  ) {
    let inputElement;
    let texto: string;

    if (textoPreenchimento.includes("/"))
      texto = textoPreenchimento.split("/").reverse().join("-");

    inputElement = cy
      .get(this.idInput(textoLabel))
      .find("input")
      .clear({ force: true });

    cy.wait(500);

    return inputElement.type(textoPreenchimento);
  }

  private selecionaValor(
    textoLabel: IInputElementType,
    textoPreenchimento: string
  ) {
    //TODO: Montar lógica para selecionar select.

    return this.idInput(textoLabel);
  }

  public verificaValor(
    tipoCampo: IInputTypes,
    textoLabel: IInputElementType,
    valor: string
  ) {
    let inputElement = cy.get(this.idInput(textoLabel));

    const tipoInput = (type: IInputTypes) => {
      switch (type) {
        case "texto":
          return inputElement.should("have.value", valor);
        case "select":
          return inputElement.contains("span", valor).should("exist");
        default:
          return null;
      }
    };

    return tipoInput(tipoCampo);
  }
}
