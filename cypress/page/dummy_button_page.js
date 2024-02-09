class BotaoSubmitPage {
  botao(textoBotao) {
    const elementoBotao = cy.contains("button", textoBotao);
    return elementoBotao;
  }
}

export { BotaoSubmitPage };
