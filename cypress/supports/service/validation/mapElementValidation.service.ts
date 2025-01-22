Object.prototype.validaElemento = function (key: keyof any): string {
  const stringKey = String(key);

  if (typeof this !== "object" || this === null)
    throw new Error("O método validaElemento deve ser chamado em um objeto.");

  if (!(stringKey in this))
    throw new Error(`Elemento "${stringKey}" não está mapeado no objeto. Por favor, verifique a feature e a interface em pages.`);

  return this[stringKey];
};

Object.prototype.validaTela = function (key: keyof any): string {
  const stringKey = String(key);

  if (typeof this !== "object" || this === null)
    throw new Error("O método validaElemento deve ser chamado em um objeto.");

  if (!(stringKey in this))
    throw new Error(`A tela "${stringKey}" não está mapeado no objeto. Por favor, verifique a feature e o objeto em stepDefinitions.`);

  return this[stringKey];
};
