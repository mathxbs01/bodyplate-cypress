import {
  Given as Dado,
  When as Quando,
  Then as Entao,
  And as E,
} from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "./cypress/Pages/LoginPage/Login.page";
import { EsqueciSenhaPage } from "./cypress/Pages/EsqueciSenhaPage/EsqueciSenha.page";

export {
  Dado,
  Quando,
  Entao,
  E,
  LoginPage,
  EsqueciSenhaPage,
};
