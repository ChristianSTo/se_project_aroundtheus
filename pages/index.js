//import js files

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
/*********************************************
Initial cards array
**********************************************/

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*********************************************
Variables
**********************************************/

const profileTitle = document.querySelector(".profile__title");
const profileSubTitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector("#title");
const inputSubTitle = document.querySelector("#subtitle");
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__grid");
//selects the edit button in profile section
const profileEditButton = document.querySelector("#profile-edit-button");
//select the modal for person edit
const profileEditModal = document.querySelector("#profile-edit-modal");
//select close button for each of the 3 modals
const modalPersonCloseButton = document.querySelector("#modal-person-close");
const modalCreateCloseButton = document.querySelector("#modal-create-close");
const modalPhotoCloseButton = document.querySelector("#modal-photo-close");
//select the form for person
const formPerson = document.querySelector("#modal__form-person");
//select the form for adding
const formImg = document.querySelector("#modal__form-img");
//select the modal for img edit
const imgCreateModal = document.querySelector("#img-create-modal");
//selects add button
const modalAdd = document.querySelector("#profile-add-button");
//selects the create button
const createButton = document.querySelector(".modal__create");
//selects input for img title:
const imgTitle = document.querySelector("#img-title");
//selects input for img URL:
const imgURL = document.querySelector("#img-URL");
//select the photo modal
const photoModal = document.querySelector("#photo-modal");
//select the save person button
const savePersonButton = document.querySelector(".modal__save-button");
//select the create img button
const createImgButton = document.querySelector(".modal__create-button");
//select box-photo
const boxPhoto = document.querySelector(".modal__box-photo");
//select box-title
const boxTitle = document.querySelector(".modal__box-title");
//select the error message for the title input
const errorTitleMessage = document.querySelector(".modal__error-title");
//select the error message for the subtitle input
const errorSubTitleMessage = document.querySelector(".modal__error-subtitle");
//selects img error message
const errorImgMessage = document.querySelector(".modal__error-img");
//selects url error message
const errorUrlMessage = document.querySelector(".modal__error-url");
//selects all modals
const modals = document.querySelectorAll(".modal");
//selects all modal containers
const modalContainers = document.querySelectorAll(".modal__container");
//makes an array from modalContainers
const modalContainersArray = Array.from(modalContainers);

/*********************************************
Functions
**********************************************/
//univseral function to close modals
const closeModal = function (modal) {
  modal.classList.remove("modal_opened");
  //stops listening for esc
  document.removeEventListener("keydown", closeOnEsc);
};
//function to close any modal
const closeAnyModal = function () {
  modals.forEach(closeModal);
};
//function to close any modal if press esc
const closeOnEsc = function (evt) {
  if (evt.key === "Escape") {
    closeAnyModal();
  }
};
//univseral function to open modals
const openModal = function (modal) {
  modal.classList.add("modal_opened");
  //starts to listen for esc
  document.addEventListener("keydown", closeOnEsc);
};

//function to close any modal if click away
//each modal listens to a click
modals.forEach(function (modal) {
  modal.addEventListener("mousedown", function (evt) {
    evt.stopPropagation(); //prevents bubble effect
    //make variable to know if inside modal container or not
    let isInsideContainer = false;
    //each container is checked if the event target (where the click occurs) is in it or not
    modalContainersArray.forEach((modalContainer) => {
      if (
        evt.target === modalContainer ||
        modalContainer.contains(evt.target)
      ) {
        isInsideContainer = true;
      }
    });
    //if it's not inside, close the modal
    if (!isInsideContainer) {
      closeAnyModal();
    }
  });
});

//function to open person modal
const openPersonModal = function () {
  //1/3
  //makes current text the input text when OPEN the modal
  inputTitle.value = profileTitle.textContent;
  inputSubTitle.value = profileSubTitle.textContent;
  //change the modal css
  openModal(profileEditModal);
};

//function to save person
const handleProfileFormSubmit = function () {
  //close the modal
  closeModal(profileEditModal);
  //replaces inputs
  //title
  profileTitle.textContent = inputTitle.value;
  //sub
  profileSubTitle.textContent = inputSubTitle.value;
};

//function to open preview photo. This will be in the class parameter

const handleImageClick = (data) => {
  //const cardPhoto = cardElement.querySelector(".gallery__image");
  //reveals modal
  openModal(photoModal);
  //changes photo to clicked photo
  boxTitle.textContent = data._name;
  boxPhoto.src = data._link;
  boxPhoto.alt = data._name;
};

//access the card template
const cardSelector = "#card-template";
//function runs the entire array for each element every time it runs the next
initialCards.forEach((initialCard) => {
  const card = new Card(initialCard, cardSelector, handleImageClick);
  cardGallery.append(card.getView());
});

const openImgModal = function () {
  //change the modal css
  openModal(imgCreateModal);
};

//make a function to create
const handleImgFormSubmit = function () {
  //close the modal
  closeModal(imgCreateModal);
  //create new card
  const newCard = {
    name: imgTitle.value,
    link: imgURL.value,
    alt: imgTitle.value,
  };

  const card = new Card(newCard, cardSelector, handleImageClick);
  cardGallery.prepend(card.getView());

  //reset inputs
  formImg.reset();
  const formValidator = new FormValidator(config, formImg);
  formValidator.disableButton(createImgButton);
};

//////////////////////////////////////////////////////

//click edit button to open person modal
profileEditButton.addEventListener("click", openPersonModal);
//click close (x) button to close modals
modalPersonCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});
modalCreateCloseButton.addEventListener("click", () => {
  closeModal(imgCreateModal);
});
modalPhotoCloseButton.addEventListener("click", () => {
  closeModal(photoModal);
});
//click add button to open img modal
modalAdd.addEventListener("click", openImgModal);

//listens for the submit, prevents reload on save and calls handleProfileFormSubmit handleImgFormSubmit function
formPerson.addEventListener("submit", function (event) {
  event.preventDefault();
  handleProfileFormSubmit();
});
formImg.addEventListener("submit", function (event) {
  event.preventDefault();
  handleImgFormSubmit();
});

//move the config variable here
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button:disabled",
  inputErrorClass: "modal__error",
  errorClass: "modal__error_visible",
};

//call and make a new formValidator with the specific parameters of the relative object

const editFormValidator = new FormValidator(config, formPerson);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, formImg);
addFormValidator.enableValidation();

const data = {
  name: cardSelector.name,
  link: cardSelector.src,
  alt: cardSelector.alt,
};

const cardPreview = new Card(data, cardSelector, handleImageClick);
