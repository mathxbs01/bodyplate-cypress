import { ILinkElementType } from "./LinkElement.model";

export class LinkElement {
  nomeLink(textoLink: ILinkElementType) {
    const elementoLink = cy.contains("a", textoLink);
    return elementoLink;
  }
}
