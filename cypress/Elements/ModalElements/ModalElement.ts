export class ModalElement {
  modalMensagem(mensagem: string) {
    return cy
      .get("div.toast-message")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(mensagem.trim());
      });
  }
}
