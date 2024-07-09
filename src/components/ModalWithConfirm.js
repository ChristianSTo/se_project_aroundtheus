import Modal from "./Modal.js";

class ModalWithConfirm extends Modal {
  constructor({ modalSelector }) {
    //
    super(modalSelector);
    this._modalSelector = document.querySelector(modalSelector);
    this._modalForm = this._modalSelector.querySelector(".modal__form");
  }

  //Make it generalized. The action/info can be specified elsewhere when needed.
  setAction(action) {
    this._handleFormSubmit = action;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._handleFormSubmit) {
        this._handleFormSubmit();
      }
    });
    super.setEventListeners();
  }
}
export default ModalWithConfirm;
