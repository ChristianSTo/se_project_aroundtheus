import Modal from "./Modal.js";

class ModalWithConfirm extends Modal {
  constructor({ modalSelector, loadingButtonText }) {
    //
    super(modalSelector);
    this._modalSelector = document.querySelector(modalSelector);
    this._modalForm = this._modalSelector.querySelector(".modal__form");
    this._submitButton = this._modalForm.querySelector(".modal__submit-button");
    this._buttonText = this._submitButton.textContent;
    this._loadingButtonText = loadingButtonText;
  }

  //Make it generalized. The action/info can be specified elsewhere when needed.
  setAction(action) {
    this._handleFormSubmit = action;
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
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
