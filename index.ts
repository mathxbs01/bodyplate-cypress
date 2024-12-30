import {
  Given as Dado,
  When as Quando,
  Then as Entao,
  And as E,
} from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "./cypress/pages/loginPage/login.page";
import { EsqueciSenhaPage } from "./cypress/pages/esqueciSenhaPage/esqueciSenha.page";

export {
  Dado,
  Quando,
  Entao,
  E,
  LoginPage,
  EsqueciSenhaPage,
};
