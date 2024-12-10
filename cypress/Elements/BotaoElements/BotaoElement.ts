import { IBotaoElementType } from "./BotaoElement.model";

export class BotaoElement {
  nomeBotao(textoBotao: IBotaoElementType) {
    const elementoBotao = cy.contains("button", textoBotao);
    return elementoBotao;
  }
}
