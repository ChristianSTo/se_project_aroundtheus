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
    this.isSubmitted = false;
  }
  close() {
    super.close();
  }
  getIsSubmitted() {
    return this.isSubmitted;
  }

  setEventListeners() {
    this._modalConfirmBox.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.close();
      this.isSubmitted = true;
    });
    super.setEventListeners();
  }
}
export default ModalWithConfirm;
