import { IPageModel } from "../../supports/models/pagesModel/Ipages.model";
import {
  IEsqueciSenhaPageElementsBotao,
  IEsqueciSenhaPageElementsInput,
  IEsqueciSenhaPageElementsLink,
  esqueciSenhaElementBotao,
  esqueciSenhaElementInput,
  esqueciSenhaElementLink,
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
    cy.verificaRadioButtonSelecionado(
      esqueciSenhaElementInput.validaElemento(campo)
    );
  }

  public VerificaValorPreenchido(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ): void {
    cy.verificaCampoPreenchido(
      esqueciSenhaElementInput.validaElemento(campo),
      valor
    );
  }

  public EscreveCampo(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string,
    forcarEnter: boolean = false
  ) {
    cy.escreverValorNoCampo(
      esqueciSenhaElementInput.validaElemento(campo),
      String(valor),
      forcarEnter
    );
  }

  public ClicaRadioButton(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains(
      "label.radio-label",
      esqueciSenhaElementInput.validaElemento(campo)
    )
      .find('input[type="radio"]')
      .click();
  }

  public ClicaCheckBox(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.contains("ion-label", esqueciSenhaElementInput.validaElemento(campo))
      .parent()
      .find("ion-checkbox")
      .click({ force: true });
  }

  public LimpaCampo(campo: keyof IEsqueciSenhaPageElementsInput) {
    cy.get(esqueciSenhaElementInput.validaElemento(campo)).clear({
      force: true,
    });
  }

  public SelecionarValor(
    campo: keyof IEsqueciSenhaPageElementsInput,
    valor: string
  ) {
    cy.selecionarValorNoCampo(
      esqueciSenhaElementInput.validaElemento(campo),
      String(valor)
    );
  }

  public ClicaBotao(nomeBotao: keyof IEsqueciSenhaPageElementsBotao) {
    cy.buscarBotaoPorTexto(
      esqueciSenhaElementBotao.validaElemento(nomeBotao)
    ).click({
      force: true,
    });
  }

  public ClicaLink(nomeHiperLink: keyof IEsqueciSenhaPageElementsLink) {
    cy.obterLinkPorTexto(
      esqueciSenhaElementLink.validaElemento(nomeHiperLink)
    ).click({
      force: true,
    });
  }
}
