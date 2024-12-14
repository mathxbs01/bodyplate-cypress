export interface ILoginPageElementsInput {
  Email: string;
  Senha: string;
}

export interface ILoginPageElementsBotao {
  Entrar: string;
}

export interface ILoginPageElementsLink {}

export const defaultLoginElementInput: ILoginPageElementsInput = {
  Email: "#email",
  Senha: "#senha",
};

export const defaultLoginElementBotao: ILoginPageElementsBotao = {
  Entrar: "Entrar",
};
