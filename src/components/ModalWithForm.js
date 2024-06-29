import Modal from "./Modal.js";

class ModalWithForm extends Modal {
  constructor({ modalSelector, handleSubmitForm }) {
    super(modalSelector);
    this._modalSelector = document.querySelector(modalSelector);
    this._modalForm = this._modalSelector.querySelector(".modal__form");
    this._inputFields = this._modalForm.querySelectorAll(".modal__input");
    this._handleSubmitForm = handleSubmitForm;
  }

  close() {
    this._modalForm.reset();
    super.close();
  }

  _getInputValues() {
    //make the data object
    let data = {
      title: "",
      subTitle: "",
      imgTitle: "",
      imgURL: "",
    };
    //get the input values from each corresponding inputs
    this._inputFields.forEach((inputField) => {
      //for title inputs
      if (inputField.id === "title") {
        data.title = inputField.value;
      }
      //for subtitle inputs
      if (inputField.id === "subtitle") {
        data.subTitle = inputField.value;
      }
      //for img title inputs
      if (inputField.id === "img-title") {
        data.imgTitle = inputField.value;
      }
      //for img url link inputs
      if (inputField.id === "img-URL") {
        data.imgURL = inputField.value;
      }
    });
    return data;
  }
  setEventListeners() {
    this._modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.data = this._getInputValues();
      this._handleSubmitForm(this.data);
      this.close();
    });
    super.setEventListeners();
  }
}
export default ModalWithForm;
