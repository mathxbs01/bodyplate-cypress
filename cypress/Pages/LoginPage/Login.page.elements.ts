export interface ILoginPageElementsInput {
  Email: string;
  Senha: string;
}

export interface ILoginPageElementsBotao {
  "Fazer login": string;
}

export interface ILoginPageElementsLink {}

export const defaultLoginElementInput: ILoginPageElementsInput = {
  Email: 'input[name="e-mail"]',
  Senha: 'input[type="password"]',
};

export const defaultLoginElementBotao: ILoginPageElementsBotao = {
  "Fazer login": "Fazer login",
};
