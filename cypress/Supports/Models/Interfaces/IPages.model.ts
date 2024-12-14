export interface IPageModel<TInput = any, TBotao = any, TLink = any> {
  EscreveCampo(campo: keyof TInput, valor: string): void;
  LimpaCampo(campo: keyof TInput): void;
  SelecionarValor(campo: keyof TInput, valor: string): void;
  ClicaBotao(nomeBotao: keyof TBotao): void;
  ClicaLink(nomeHiperLink: keyof TLink): void;
}
