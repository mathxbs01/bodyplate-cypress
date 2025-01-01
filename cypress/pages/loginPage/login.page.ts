import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  defaultLoginElementInput,
  defaultLoginElementBotao,
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
  public VerificaRadioSelecionado(campo: keyof ILoginPageElementsInput): void {
    cy.verificaRadioButtonSelecionado(defaultLoginElementInput[campo]);
  }

  public VerificaValorPreenchido(
    campo: keyof ILoginPageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(defaultLoginElementInput[campo], valor);
  }

  public EscreveCampo(
    campo: keyof ILoginPageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      defaultLoginElementInput[campo],
      String(valor),
      forcarEnter
    );
  }

  public ClicaRadioButton(campo: keyof ILoginPageElementsInput) {
    cy.contains("label.radio-label", defaultLoginElementInput[campo])
      .find('input[type="radio"]')
      .click();
  }

  public ClicaCheckBox(campo: keyof ILoginPageElementsInput) {
    cy.contains("ion-label", defaultLoginElementInput[campo])
      .parent()
      .find("ion-checkbox")
      .click({ force: true });
  }

  public LimpaCampo(campo: keyof ILoginPageElementsInput) {
    cy.get(
      defaultLoginElementInput[campo as keyof ILoginPageElementsInput]
    ).clear({ force: true });
  }

  public SelecionarValor(campo: keyof ILoginPageElementsInput, valor: string) {
    cy.selecionarValorNoCampo(defaultLoginElementInput[campo], String(valor));
  }

  public ClicaBotao(nomeBotao: keyof ILoginPageElementsBotao) {
    cy.buscarBotaoPorTexto(defaultLoginElementBotao[nomeBotao]).click({
      force: true,
    });
  }

  public ClicaLink(nomeHiperLink: keyof ILoginPageElementsLink) {}
}
