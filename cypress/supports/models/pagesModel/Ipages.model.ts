export interface IPageModel<TInput = any, TBotao = any, TLink = any> {
  EscreveCampo?(
    campo: keyof TInput,
    valor: string,
    forcarEnter?: boolean
  ): void;
  ClicaRadioButton?(campo: keyof TInput): void;
  ClicaCheckBox?(campo: keyof TInput): void;
  LimpaCampo?(campo: keyof TInput): void;
  SelecionarValor?(campo: keyof TInput, valor: string): void;
  ClicaBotao?(nomeBotao: keyof TBotao): void;
  ClicaLink?(nomeHiperLink: keyof TLink): void;
  VerificaRadioSelecionado?(campo: keyof TInput): void;
  VerificaValorPreenchido?(campo: keyof TInput, valor: string): void;
  VerificaOpcaoSelecionada?(campo: keyof TInput, valor: string): void;
  VerificaCampoDesabilitado?(campo: keyof TInput): void;
  UploadDocumento?(
    campo: keyof TInput,
    tipoDocumento: TipoDocumentosType
  ): void;
}
