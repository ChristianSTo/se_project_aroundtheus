class Modal {
  constructor(modalSelector) {
    //make sure the parent uses global not private so childen can use it.
    this.modalSelector = document.querySelector(modalSelector);
  }
  open() {
    this.modalSelector.classList.add("modal_opened");
    //starts to listen for esc
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
  close() {
    //closes modal
    this.modalSelector.classList.remove("modal_opened");
    //stops listening for esc
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this.currentCloseButton = this.modalSelector.querySelector(".modal__close");
    this.currentCloseButton.addEventListener("click", this.close.bind(this));
    this.modalContainer = this.modalSelector.querySelector(".modal__container");
    this.modalSelector.addEventListener("mousedown", (evt) => {
      evt.stopPropagation();
      //make variable to know if inside modal container or not
      let isInsideContainer = false;
      if (
        evt.target === this.modalContainer ||
        this.modalContainer.contains(evt.target)
      ) {
        isInsideContainer = true;
      }
      if (isInsideContainer === false) {
        this.close();
      }
    });
  }
}

export default Modal;
