class ListaPage {
  lista() {
    return cy.get('div[role="listbox"]');
  }
  listaInput(elementos) {
    return this.lista()
      .get("span")
      .filter((index, elemento) => elemento.innerText.includes(elementos));
  }
  listaInputSelecionado(elementos) {
    let inputElement =
      elementos === undefined
        ? cy.get('mat-option[role="option"]').get("span")
        : cy
            .get('mat-option[role="option"]')
            .get(`span:contains('${elementos}')`);

    return inputElement
      .siblings('mat-pseudo-checkbox[class*="mat-pseudo-checkbox-checked"]')
      .parent()
      .should("have.attr", "aria-selected", "true");
  }
}

export { ListaPage };
