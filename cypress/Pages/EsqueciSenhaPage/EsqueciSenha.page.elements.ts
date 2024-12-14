export interface IEsqueciSenhaPageElementsInput {
  Email: string;
}

export interface IEsqueciSenhaPageElementsBotao {
  Enviar: string;
  Voltar: string;
}

export interface IEsqueciSenhaPageElementsLink {
  "Esqueci minha senha": string;
}

export const defaultEsqueciSenhaElementInput: IEsqueciSenhaPageElementsInput = {
  Email: "#email",
};

export const defaultEsqueciSenhaElementBotao: IEsqueciSenhaPageElementsBotao = {
  Enviar: "Enviar",
  Voltar: "Voltar",
};

export const defaultEsqueciSenhaElementLink: IEsqueciSenhaPageElementsLink = {
  "Esqueci minha senha": "Esqueci minha senha",
};
