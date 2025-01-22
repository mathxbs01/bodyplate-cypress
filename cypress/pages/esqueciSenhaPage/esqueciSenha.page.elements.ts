export interface IEsqueciSenhaPageElementsInput extends ValidatableObject {
  Email: string;
}

export interface IEsqueciSenhaPageElementsBotao extends ValidatableObject {
  Enviar: string;
  Voltar: string;
}

export interface IEsqueciSenhaPageElementsLink extends ValidatableObject {
  "Esqueci minha senha": string;
}

export const esqueciSenhaElementInput: IEsqueciSenhaPageElementsInput = {
  Email: 'app-modal-input input[name="e-mail"]',
};

export const esqueciSenhaElementBotao: IEsqueciSenhaPageElementsBotao = {
  Enviar: "Enviar",
  Voltar: "Voltar",
};

export const esqueciSenhaElementLink: IEsqueciSenhaPageElementsLink = {
  "Esqueci minha senha": "Esqueci minha senha",
};
