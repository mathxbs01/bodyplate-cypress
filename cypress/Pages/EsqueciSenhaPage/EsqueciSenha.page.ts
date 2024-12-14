import { IPageModel } from "../../Supports/Models/Interfaces/IPages.model";
import {
  IEsqueciSenhaPageElementsBotao,
  IEsqueciSenhaPageElementsInput,
  IEsqueciSenhaPageElementsLink,
  defaultEsqueciSenhaElementBotao,
  defaultEsqueciSenhaElementInput,
  defaultEsqueciSenhaElementLink,
} from "../EsqueciSenhaPage/EsqueciSenha.page.elements";

export class EsqueciSenhaPage
  implements
    IPageModel<
      IEsqueciSenhaPageElementsInput,
      IEsqueciSenhaPageElementsBotao,
      IEsqueciSenhaPageElementsLink
    >
{
  public EscreveCampo(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ) {
    cy.escreverValorNoCampo(
      defaultEsqueciSenhaElementInput[campo],
      String(valor)
    );
  }

  public LimpaCampo(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.get(
      defaultEsqueciSenhaElementInput[
        campo as keyof IEsqueciSenhaPageElementsInput
      ]
    ).clear({ force: true });
  }

  public SelecionarValor(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ) {
    cy.selecionarValorNoCampo(
      defaultEsqueciSenhaElementInput[campo],
      String(valor)
    );
  }

  public ClicaBotao(nomeBotao: keyof IEsqueciSenhaPageElementsBotao) {
    cy.buscarBotaoPorTexto(defaultEsqueciSenhaElementBotao[nomeBotao]).click();
  }

  public ClicaLink(nomeHiperLink: keyof IEsqueciSenhaPageElementsLink) {
    cy.obterLinkPorTexto(defaultEsqueciSenhaElementLink[nomeHiperLink]).click();
  }
}
