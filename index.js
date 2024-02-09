import {
  Given as Dado,
  When as Quando,
  Then as Entao,
  And as E,
} from "cypress-cucumber-preprocessor/steps";
import { BotaoSubmitPage } from "./cypress/page/dummy_button_page";
import { InputPage } from "./cypress/page/dummy_input_page";
import { ListaPage } from "./cypress/page/dummy_lista_page";
import { ModalMensagemPage } from "./cypress/page/dummy_modal_page";

export {
  Dado,
  Quando,
  Entao,
  E,
  BotaoSubmitPage,
  InputPage,
  ListaPage,
  ModalMensagemPage,
};
