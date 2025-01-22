export interface ILoginPageElementsInput extends ValidatableObject {
  Email: string;
  Senha: string;
}

export interface ILoginPageElementsBotao extends ValidatableObject {
  "Fazer login": string;
}

export interface ILoginPageElementsLink {}

export const loginElementInput: ILoginPageElementsInput = {
  Email: 'input[name="e-mail"]',
  Senha: 'input[type="password"]',
};

export const loginElementBotao: ILoginPageElementsBotao = {
  "Fazer login": "Fazer login",
};
