/// <reference types="cypress"/>

//Commands Generic
import "./commands/token.command";
import "./commands/login.command";
import "./commands/common/common.command";
import "./commands/upload.command";
import "./commands/colapse.command";
import "./commands/aba.command";
//Commands Elements
import "./commands/elements/botao.command";
import "./commands/elements/input.command";
import "./commands/elements/link.command";
import "./commands/elements/lista.command";
import "./commands/elements/modal.command";
import "./commands/elements/menu.command";
//Services
import "./service/common/common.service";
import { beforeEach } from "mocha";

require("cypress-plugin-tab");

beforeEach(() => {});

afterEach(() => {});
