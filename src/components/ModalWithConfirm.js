import Modal from "./Modal.js";

class ModalWithConfirm extends Modal {
  constructor({ modalSelector, handleConfirmAction }) {
    //
    super(modalSelector);
    this._modalSelector = document.querySelector(modalSelector);
    this._modalConfirmBox = this._modalSelector.querySelector(
      ".modal__confirm-box"
    );
    this._handleConfirmAction = handleConfirmAction;
  }
  close() {
    super.close();
  }
  setEventListeners() {
    this._modalConfirmBox.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleConfirmAction();
      this.close();
    });
    super.setEventListeners();
  }
}
export default ModalWithConfirm;
