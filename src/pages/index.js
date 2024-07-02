//import js and css files

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import {
  inputTitle,
  inputSubTitle,
  profileEditButton,
  formPerson,
  formImg,
  modalAdd,
} from "../utils/constants.js";
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
Functions
**********************************************/
/*********************************************
Sprint 8 start
**********************************************/
//make sure to define the functions before trying to call them.
//preview photo
const previewModal = new ModalWithImage("#photo-modal");
const handleImageClick = (data) => {
  //reveals modal
  previewModal.open(data);
};
previewModal.setEventListeners();

//access the grid of cards
const cardGallerySelector = ".gallery__grid";
//access the card template
const cardSelector = "#card-template";

//function to create card
let place = "append";
const createCard = (item) => {
  const card = new Card(item, cardSelector, handleImageClick);
  const cardElement = card.getView();

  section.addItem(cardElement, place);
};
const section = new Section(
  { items: initialCards, renderer: createCard },
  cardGallerySelector
);
section.renderItems();

//make global instance of Userinfo class
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
});

//function to save person. this takes data from the form,
//then lets userinfo use it
const handleProfileFormSubmit = (data) => {
  //add the info to the page
  userInfo.setUserInfo(data.title, data.subtitle);
};

//function to create new card img
const handleImgFormSubmit = (data) => {
  //create new card
  const newCard = {
    name: data.imgTitle,
    link: data.imgURL,
    alt: data.imgTitle,
  };
  place = "prepend";
  createCard(newCard);
};

//edit profile person form
const editProfileModal = new ModalWithForm({
  modalSelector: "#profile-edit-modal",
  handleSubmitForm: handleProfileFormSubmit,
});
const openPersonModal = () => {
  editProfileModal.open();
  //makes current text the input text when open the modal
  const { name, job } = userInfo.getUserInfo();
  inputTitle.value = name;
  inputSubTitle.value = job;
};
//click edit button to open person modal
profileEditButton.addEventListener("click", openPersonModal);
editProfileModal.setEventListeners();

//add card image form
const newCardModal = new ModalWithForm({
  modalSelector: "#img-create-modal",
  handleSubmitForm: handleImgFormSubmit,
});
const openCardModal = () => {
  newCardModal.open();
};
//click add button to open img modal
modalAdd.addEventListener("click", openCardModal);
newCardModal.setEventListeners();

/*********************************************
Sprint 8 end
**********************************************/

//move the config variable here
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button:disabled",
  inputInvalidClass: "modal__input_invalid",
  inputErrorClass: "modal__error",
  errorClass: "modal__error_visible",
};

//call and make a new formValidator with the specific parameters of the relative object

const editFormValidator = new FormValidator(config, formPerson);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, formImg);
addFormValidator.enableValidation();
