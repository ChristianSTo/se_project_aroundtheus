import Modal from "./Modal.js";

class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._boxPhoto = document.querySelector(".modal__box-photo");
    this._boxTitle = document.querySelector(".modal__box-title");
  }
  open(data) {
    this._boxPhoto.src = data.link;
    this._boxPhoto.alt = data.name;
    this._boxTitle.textContent = data.name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}

export default ModalWithImage;
