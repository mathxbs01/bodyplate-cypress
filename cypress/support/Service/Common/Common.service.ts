/// <reference types="cypress"/>
import { AutorizacaoService } from "../Autenticacao.service";
const autorizacaoService = new AutorizacaoService();

const APIUrl = Cypress.env("API");
const API = APIUrl;

let APIGet: any = {
  DUMMY: `${API}/v1/DUMMY`,
};

let APIFiltered: any = {
  DUMMYFiltered: `${API}/v1/DUMMY`,
};

let APIPost: any = {
  DUMMYPost: `${API}/v1/DUMMY`,
};

let APIDelete: any = {
  DUMMYDelete: `${API}/v1/DUMMY`,
};

let APIPut: any = {
  DUMMYPut: `${API}/v1/DUMMY`,
};

const todosPost: any = {
  ...APIFiltered,
  ...APIPost,
};

export class httpClient {
  useGet(nome: string, params: string) {
    let url = APIGet[nome];
    let uri;
    let token;
    params != undefined ? (uri = `${url}/${params}`) : (uri = `${url}`);
    return autorizacaoService.autorizacaoToken().then((x) => {
      token = x;
      cy.request({
        method: "GET",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  usePost(nome: string, body: any) {
    let uri = todosPost[nome];
    let token;
    return autorizacaoService.autorizacaoToken().then((x) => {
      token = x;
      cy.request({
        method: "POST",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  useDelete(nome: string, params: string) {
    let url = APIDelete[nome];
    let uri;
    let token;
    params != undefined ? (uri = `${url}${params}`) : (uri = `${url}`);
    return autorizacaoService.autorizacaoToken().then((x) => {
      token = x;
      cy.request({
        method: "DELETE",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }

  usePut(nome: string, params: string, body: any) {
    let url = APIPut[nome];
    let uri;
    let token;
    const active: any = {
      FuncionarioPut: `${url}${params}/Active`,
    };
    active[nome] == undefined
      ? (uri = `${url}/${params}`)
      : (uri = active[nome]);

    return autorizacaoService.autorizacaoToken().then((x) => {
      token = x;
      cy.request({
        method: "PUT",
        url: uri,
        headers: { Authorization: `Bearer ${token}` },
        body: body,
        failOnStatusCode: false,
      }).then((response) => {
        return response;
      });
    });
  }
}
