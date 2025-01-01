import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  IEsqueciSenhaPageElementsBotao,
  IEsqueciSenhaPageElementsInput,
  IEsqueciSenhaPageElementsLink,
  defaultEsqueciSenhaElementBotao,
  defaultEsqueciSenhaElementInput,
  defaultEsqueciSenhaElementLink,
} from "./esqueciSenha.page.elements";

export class EsqueciSenhaPage
  implements
    IPageModel<
      IEsqueciSenhaPageElementsInput,
      IEsqueciSenhaPageElementsBotao,
      IEsqueciSenhaPageElementsLink
    >
{
  public VerificaRadioSelecionado(
    campo: keyof IEsqueciSenhaPageElementsInput
  ): void {
    cy.verificaRadioButtonSelecionado(defaultEsqueciSenhaElementInput[campo]);
  }

  public VerificaValorPreenchido(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(defaultEsqueciSenhaElementInput[campo], valor);
  }

  public EscreveCampo(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      defaultEsqueciSenhaElementInput[campo],
      String(valor),
      forcarEnter
    );
  }

  public ClicaRadioButton(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains("label.radio-label", defaultEsqueciSenhaElementInput[campo])
      .find('input[type="radio"]')
      .click();
  }

  public ClicaCheckBox(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains("ion-label", defaultEsqueciSenhaElementInput[campo])
      .parent()
      .find("ion-checkbox")
      .click({ force: true });
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
    cy.buscarBotaoPorTexto(defaultEsqueciSenhaElementBotao[nomeBotao]).click({
      force: true,
    });
  }

  public ClicaLink(nomeHiperLink: keyof IEsqueciSenhaPageElementsLink) {
    cy.obterLinkPorTexto(defaultEsqueciSenhaElementLink[nomeHiperLink]).click({
      force: true,
    });
  }
}
