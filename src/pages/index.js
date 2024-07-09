//import js and css files

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithConfirm from "../components/ModalWithConfirm.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import {
  inputTitle,
  inputSubTitle,
  inputPictureUrl,
  profileEditButton,
  formPerson,
  formImg,
  changePfpForm,
  modalAdd,
  profileSaveButton,
  cardSaveButton,
  pfpSaveButton,
} from "../utils/constants.js";

/*********************************************
API on top to avoid scope issues
**********************************************/
const newApi = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
});

/*********************************************
Functions
**********************************************/

//make sure to define the functions/consts before trying to call them.

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

let place = "append";
const cardHolder = [];
//function to create card
const createCard = (item) => {
  const card = new Card({
    data: item,
    cardSelector: cardSelector,
    handleImageClick: handleImageClick,
    handleTrashClick: () => {
      const cardId = card.getId();
      confirmModal.open(card, cardId);
    },
    toggleLike: () => {
      const cardId = card.getId();
      const isLiked = card.getLikeStatus();
      if (isLiked) {
        newApi.addLike({ cardId: cardId, isLiked: isLiked }).then((res) => {
          console.log(`liking: ${cardId}`);
          console.log(res);
        });
      } else {
        newApi.removeLike({ cardId: cardId, isLiked: isLiked }).then((res) => {
          console.log(`disliking: ${cardId}`);
          console.log(res);
        });
      }
    },
  });
  const cardElement = card.getView();
  section.addItem(cardElement, place);

  return { card, cardId: card.getId() };
};
const section = new Section(
  { items: cardHolder, renderer: createCard },
  cardGallerySelector
);

const handleDeleteConfirm = (currentCard, cardId) => {
  const isNotSubmitted = !confirmModal.getIsSubmitted();
  console.log(`not submitted: ${isNotSubmitted}`);
  if (!confirmModal.getIsSubmitted()) {
    console.log("no submission");
  } else {
    newApi.deleteCard({ cardId: cardId }).then((res) => {
      console.log(res, cardId);
    });
    //remove card from page
    currentCard.removeCard();
    console.log(`deleting: ${cardId}`);
  }
};

//"Are you sure?" confirmation form to delete
const confirmModal = new ModalWithConfirm({
  modalSelector: "#confirm-modal",
  handleConfirmAction: handleDeleteConfirm,
});
confirmModal.setEventListeners();

//the API's data (response) is the new "initial" array
newApi.getInitialCards().then((data) => {
  const section = new Section(
    { items: data, renderer: createCard },
    cardGallerySelector
  );
  section.renderItems();
});

//make global instance of Userinfo class
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
  profilePictureSelector: ".profile__picture",
});

//function to save person. this takes data from the form,
//then lets userinfo use it
const handleProfileFormSubmit = (inputData) => {
  console.log(inputData);
  //add the info to the page
  newApi
    .editProfile({ name: inputData.title, about: inputData.subtitle })
    .then((data) => {
      console.log(data);
    });
  userInfo.setUserInfo({ name: inputData.title, job: inputData.subtitle });
};

//function to create new card img
const handleImgFormSubmit = (inputData) => {
  console.log(inputData);
  //create new card
  console.log(inputData.imgTitle, inputData.imgURL);
  newApi
    .addNewCard({ name: inputData.imgTitle, link: inputData.imgURL })
    .then((data) => {
      const newCard = {
        name: data.name,
        link: data.link,
        alt: data.name,
        _id: data._id,
      };
      place = "prepend";
      createCard(newCard);
    });
};

/*just try this valid link from practicum:
https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/logo.svg
 to enter into the input to test it for convenience.
 */
const handlePfpFormSubmit = (inputData) => {
  console.log(inputData.pfpURL);
  console.log(`change pfp url to: ${inputData.pfpURL} `);
  newApi.changePfp({ avatar: `${inputData.pfpURL}` }).then((res) => {
    console.log(res);
  });
  userInfo.setUserPicture({ picture: inputData.pfpURL });
};
//edit profile person form
const editProfileModal = new ModalWithForm({
  modalSelector: "#profile-edit-modal",
  handleSubmitForm: handleProfileFormSubmit,
});
const openPersonModal = () => {
  editProfileModal.open();
  profileSaveButton.textContent = "Save";
  //makes current text the input text when open the modal
  const { name, job } = userInfo.getUserInfo();
  inputTitle.value = name;
  inputSubTitle.value = job;
};
const changePfpModal = new ModalWithForm({
  modalSelector: "#changePfp-modal",
  handleSubmitForm: handlePfpFormSubmit,
});
const openPfpModal = () => {
  changePfpModal.open();
  console.log(pfpSaveButton);
  pfpSaveButton.textContent = "Save";
  //makes current text the input text when open the modal
  const { picture } = userInfo.getUserInfo();
  inputPictureUrl.value = picture;
};
const pfpChangeButton = document.querySelector(".profile__picture-container");
pfpChangeButton.addEventListener("click", openPfpModal);
changePfpModal.setEventListeners();

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
  cardSaveButton.textContent = "Create";
};
//click add button to open img modal
modalAdd.addEventListener("click", openCardModal);
newCardModal.setEventListeners();

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
function initializeFormValidator(config, form) {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
  return formValidator;
}
const editFormValidator = initializeFormValidator(config, formPerson);
const addFormValidator = initializeFormValidator(config, formImg);
const changePfpFormValidator = initializeFormValidator(config, changePfpForm);
