// cypress/supports/types.d.ts

export {};

declare global {
  type IInputTypes = "texto" | "select";
  type AcoesListaType = "Editar" | "Visualizar" | "Excluir";
  type TipoDocumentosType = "JPG" | "JSON" | "PDF";
  type AcaoColapseType = "abro" | "fecho";

  //Tipos deverão possuir o mesmo nome das nomenclaturas das features.
  type FuncionalidadeType =
    | "login"
    | "esqueciSenha";
}
