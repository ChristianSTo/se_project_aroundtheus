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
  open(currentCard, cardId) {
    this._currentCard = currentCard;
    this._cardId = cardId;
    super.open();
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
      this._handleConfirmAction(this._currentCard, this._cardId);
      this.close();
    });
    super.setEventListeners();
  }
}
export default ModalWithConfirm;
