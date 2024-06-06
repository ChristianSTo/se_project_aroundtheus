/*********************************************
Validation JS
**********************************************/

//universal function to disable buttons
const disableButton = function (button) {
  button.disabled = true;
};
//universal function to enable buttons
const enableButton = function (button) {
  button.disabled = false;
};

//wrap validations in functions

//function to show input error
const showInputError = function (formElement, inputElement, { errorClass }) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.classList.add(errorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
};
//function to hide inpur error
const hideInputError = function (formElement, inputElement, { errorClass }) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.classList.remove(errorClass);
};

//function to check input validity
const checkInputValidity = function (formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
};
const toggleButtonAbility = function (inputElements, submitButton) {
  let inValid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      inValid = true;
    }
  });
  if (inValid) {
    disableButton(submitButton);
  } else {
    enableButton(submitButton);
  }
};

//function for event listeners
const setEventListeners = function (formElement, options) {
  const { inputSelector, submitButtonSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonAbility(inputElements, submitButton);
    });
  });
};

//function to enable validation
const enableValidation = function (options) {
  //select forms
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, options);
  });
};

//make an object for validation based on requirements
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button:disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__error_visible",
};

//call the validation function at the end.
enableValidation(config);
//end of validation function.

/*********************************************
END
**********************************************/
