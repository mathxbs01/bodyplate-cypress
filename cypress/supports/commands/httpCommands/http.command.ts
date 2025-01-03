/// <reference types="cypress"/>

import { HttpClient } from "../../service/httpService/http.service";
import { IPayloadFixtures } from "./Ihttp.command";
type IFixture = {
  key: keyof IPayloadFixtures;
  path: string;
};

let API = Cypress.env("API");
let payloads: Partial<IPayloadFixtures> = {};
let httpService = new HttpClient();
const paginacaoPayload = {
  pageNumber: 1,
  pageSize: 10,
};

const fixtures: IFixture[] = [];

beforeEach(() => {
  fixtures.forEach(({ key, path }) => {
    cy.fixture(path).then((data) => {
      payloads[key] = data;
    });
  });
});

Cypress.Commands.add("cadastrarMassa", (massa: FuncionalidadeType) => {});

Cypress.Commands.add("excluirMassa", (massa: FuncionalidadeType) => {
  let response = {};

  return response;
});

Cypress.Commands.add(
  "pesquisarMassa",
  (massa: FuncionalidadeType, body?: any, params: any = paginacaoPayload) => {
    let response = {};

    return response;
  }
);
