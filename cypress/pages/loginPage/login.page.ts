import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  loginElementInput,
  loginElementBotao,
  ILoginPageElementsInput,
  ILoginPageElementsBotao,
  ILoginPageElementsLink,
} from "./login.page.elements";

export class LoginPage
  implements
    IPageModel<
      ILoginPageElementsInput,
      ILoginPageElementsBotao,
      ILoginPageElementsLink
    >
{
  public VerificaValorPreenchido(
    campo: keyof ILoginPageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(loginElementInput[campo], valor);
  }

  public EscreveCampo(
    campo: keyof ILoginPageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      loginElementInput.validaElemento(campo),
      String(valor),
      forcarEnter
    );
  }

  public LimpaCampo(campo: keyof ILoginPageElementsInput) {
    cy.get(loginElementInput.validaElemento(campo)).clear({
      force: true,
    });
  }

  public ClicaBotao(nomeBotao: keyof ILoginPageElementsBotao) {
    cy.buscarBotaoPorTexto(
      loginElementBotao.validaElemento(nomeBotao)
    ).click({
      force: true,
    });
  }
}
