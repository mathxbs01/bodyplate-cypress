interface ValidatableObject {
  [key: string]: string;
}

interface Object {
  validaElemento(this: Record<string, string>, key: keyof any): string;
  validaTela(this: Record<string, string>, key: keyof any): string;
}
