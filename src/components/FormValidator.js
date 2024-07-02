//make a class called FormValidator
class FormValidator {
  //all classes have a constructor
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._nactiveButtonClass = config.inactiveButtonClass;
    this._inputInvalidClass = config.inputInvalidClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = formElement;
  }
  /*********************************************
    move functions from index to here, and use "this"
  **********************************************/

  //universal global function to disable buttons
  disableButton(button) {
    button.disabled = true;
  }
  //universal function to enable buttons
  enableButton(button) {
    button.disabled = false;
  }

  //function to show input error
  _showInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputInvalidClass);
  }
  //function to hide inpur error
  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    errorMessageElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputInvalidClass);
  }
  //function to check input validity
  checkInputValidity(inputElement, options) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, options);
    } else {
      this._hideInputError(inputElement, options);
    }
  }

  //the "this.inputElements" is defined as an array using [] in _setEventListeners()
  _checkFormValidity = () => {
    return this.inputElements.every((input) => input.validity.valid);
  };

  _toggleButtonAbility = () => {
    const isFormValid = this._checkFormValidity();
    if (!isFormValid) {
      this.disableButton(this.submitButton);
    } else {
      this.enableButton(this.submitButton);
    }
  };
  //addEventListeners
  _setEventListeners() {
    //now, this is used to refer to the object in question, so its properties are also able to be referred to.
    this.inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this.submitButton = this._form.querySelector(this._submitButtonSelector);

    this.inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this.checkInputValidity(inputElement);
        this._toggleButtonAbility(this.inputElements);
      });
    });
  }

  //enableValidation
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      //disable the button on a successful submit
      this.disableButton(this.submitButton);
    });
    this._setEventListeners();
  }
} // end of class FormValidator

export default FormValidator;
