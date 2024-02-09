class ModalMensagemPage {
  error(mensagem) {
    return cy
      .get('div[class*="swal2-modal"]')
      .contains(mensagem)
      .should("be.visible");
  }
}

export { ModalMensagemPage };
