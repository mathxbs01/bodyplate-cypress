/// <reference types="cypress"/>
const APIUrl = Cypress.env("API");
const API = APIUrl;
let usuario: any;

beforeEach(() => {
  cy.fixture("Acessos/acesso.json").then((acessos) => {
    usuario = acessos;
  });
});

export class AutorizacaoService {
  autorizacaoToken() {
    let token;

    return cy
      .request({
        method: "POST",
        url: `${API}/v1/DUMMY/AUTENTICACAODUMMY`,
        body: {
          USER: usuario.email,
          PASSWORD: usuario.senha,
        },
        failOnStatusCode: false,
      })
      .then((response) => {
        token = response.body.TOKEN.Token;
        return token;
      });
  }
}
