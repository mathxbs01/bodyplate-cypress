import { IPageModel } from "../../Supports/Models/Interfaces/IPages.model";
import {
  defaultLoginElementInput,
  defaultLoginElementBotao,
  ILoginPageElementsInput,
  ILoginPageElementsBotao,
  ILoginPageElementsLink,
} from "./Login.page.elements";

export class LoginPage
  implements
    IPageModel<
      ILoginPageElementsInput,
      ILoginPageElementsBotao,
      ILoginPageElementsLink
    >
{
  public EscreveCampo(campo: keyof ILoginPageElementsInput, valor: string) {
    cy.escreverValorNoCampo(
      defaultLoginElementInput[campo],
      String(valor)
    );
  }

  public LimpaCampo(campo: keyof ILoginPageElementsInput) {
    cy.get(
      defaultLoginElementInput[campo as keyof ILoginPageElementsInput]
    ).clear({ force: true });
  }

  public SelecionarValor(campo: keyof ILoginPageElementsInput, valor: string) {
    cy.selecionarValorNoCampo(
      defaultLoginElementInput[campo],
      String(valor)
    );
  }

  public ClicaBotao(nomeBotao: keyof ILoginPageElementsBotao) {
    cy.buscarBotaoPorTexto(defaultLoginElementBotao[nomeBotao]).click();
  }

  public ClicaLink(nomeHiperLink: keyof ILoginPageElementsLink) {}
}
