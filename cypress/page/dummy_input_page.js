class InputPage {
  idInput(Campo) {
    const camposID = {
      CAMPO_TESTE: "#campo",
    };

    return camposID[Campo];
  }

  inputPreenchimento(tipoCampo, textoLabel, textoPreenchimento) {
    const tipoInput = (type) => {
      switch (type) {
        case "data":
          return this.inputData(textoLabel, textoPreenchimento);
        case "text":
          return this.inputText(textoLabel, textoPreenchimento);
        case "multiSelect":
          return this.inputSelect("multiSelect", textoLabel);
        case "singleSelect":
          return this.inputSelect("singleSelect", textoLabel);
        default:
          return null;
      }
    };

    return tipoInput(tipoCampo);
  }

  inputText(textoLabel, textoPreenchimento) {
    let inputElement;
    let textArea = ["Motivo", "Descritivo de entrada", "Observação Devolução"];

    if (this.idInput(textoLabel) === undefined) {
      if (textArea.includes(textoLabel)) {
        if (textoLabel === "Motivo") {
          inputElement = cy.get("textarea");
        } else {
          inputElement = cy.contains("textarea");
        }
      } else {
        inputElement = cy
          .get(`label:contains('${textoLabel}') + input`)
          .clear({ force: true });
      }
    } else {
      inputElement = this.idInput(textoLabel).clear({ force: true });
    }
    cy.wait(500);

    return inputElement.type(textoPreenchimento);
  }

  inputData(textoLabel, DataPreenchimento) {
    let dataFormata = DataPreenchimento.split("/").reverse().join("-");

    return cy.get(`label:contains('${textoLabel}') + input`).type(dataFormata);
  }

  inputSelect(tipoDropdown, textoLabel) {
    const tipoSelect = (type) => {
      switch (type) {
        case "multiSelect":
          return cy
            .get('div[class*="input-wrapper"]')
            .get(`label:contains('${textoLabel}') + mat-select`);
        case "singleSelect":
          return this.idInput(textoLabel);
        default:
          return null;
      }
    };
    return tipoSelect(tipoDropdown);
  }

  verificaValor(tipoCampo, textoLabel, valor) {
    let inputElement =
      this.idInput(textoLabel) === undefined
        ? cy.get(`label:contains('${textoLabel}') + input`)
        : this.idInput(textoLabel);

    const tipoInput = (type) => {
      switch (type) {
        case "text":
          return inputElement.should("have.value", valor);
        case "dropdown":
          return inputElement.contains("span", valor).should("exist");
        default:
          return null;
      }
    };

    return tipoInput[tipoCampo];
  }
}

export { InputPage };