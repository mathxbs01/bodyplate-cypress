/// <reference types="cypress"/>

//Commands Generic
import "./commands/token.command";
import "./commands/login.command";
import "./commands/httpCommands/http.command";
import "./commands/upload.command";
import "./commands/colapse.command";
import "./commands/aba.command";
import "./commands/dbCommands/db.command";
//Commands Elements
import "./commands/elementsCommands/botao.command";
import "./commands/elementsCommands/input.command";
import "./commands/elementsCommands/link.command";
import "./commands/elementsCommands/lista.command";
import "./commands/elementsCommands/modal.command";
import "./commands/elementsCommands/menu.command";
//Services
import "./service/httpService/http.service";
import { beforeEach } from "mocha";

const sqlServer = require("cypress-sql-server");

sqlServer.loadDBCommands();

beforeEach(() => {});

afterEach(() => {});
