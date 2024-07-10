import Modal from "./Modal.js";

class ModalWithForm extends Modal {
  constructor({ modalSelector, handleSubmitForm, loadingButtonText }) {
    super(modalSelector);
    this._modalSelector = document.querySelector(modalSelector);
    this._modalForm = this._modalSelector.querySelector(".modal__form");
    this._submitButton = this._modalForm.querySelector(".modal__submit-button");
    this._buttonText = this._submitButton.textContent;
    this._loadingButtonText = loadingButtonText;
    this._handleSubmitForm = handleSubmitForm;
  }

  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }

  close() {
    this._modalForm.reset();
    super.close();
  }

  //made comments to learn from mistakes
  //function to get the values of every input
  _getInputValues() {
    //gets all inputs as an array
    const inputList = [
      ...this._modalSelector.querySelectorAll(".modal__input"),
    ];

    //make an object to contain the values
    const inputValues = {};

    //goes though the input list array, then assigns the attributes for each input
    for (const input of inputList) {
      inputValues[input.name] = input.value;
    }

    return inputValues;
  }
  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.data = this._getInputValues();
      this._handleSubmitForm(this.data);
    });
    super.setEventListeners();
  }
}
export default ModalWithForm;
