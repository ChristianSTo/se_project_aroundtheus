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
//used the SHIFT + Alt + F. It lined up everything, hopefully correctly.
const profileTitle = document.querySelector(".profile__title");
const profileSubTitle = document.querySelector(".profile__subtitle");
const inputTitle = document.querySelector("#title");
const inputSubTitle = document.querySelector("#subtitle");
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__grid");
//selects the edit button in profile
const profileEditButton = document.querySelector("#profile-edit-button");
//select the modal
const profileEditModal = document.querySelector("#profile-edit-modal");
//select x button
const modalX = document.querySelector(".modal__close");
//selects save button
const modalSave = document.querySelector(".modal__save");
//select the form that contains the save button
const form = document.querySelector(".modal__form");

//function to add css to modal
const openModal = function () {
  //1/3
  //makes current text the input text when OPEN the modal
  inputTitle.value = profileTitle.textContent;
  inputSubTitle.value = profileSubTitle.textContent;
  //change the modal css
  profileEditModal.classList.add("modal_opened");
};
//click edit button to open modal
profileEditButton.addEventListener("click", openModal);

//function to remove css to modal
const closeModal = function () {
  //change the modal css
  profileEditModal.classList.remove("modal_opened");
};
//click x button to close modal
modalX.addEventListener("click", closeModal);

//2/3 Edit form

//function to remove css to modal
//make a function to save
const handleProfileFormSubmit = function () {
  //change the modal css
  profileEditModal.classList.remove("modal_opened");
  //replaces inputs
  //title

  profileTitle.textContent = inputTitle.value;
  //sub

  profileSubTitle.textContent = inputSubTitle.value;
};

//listens for the submit, prevents reload on save and calls handleProfileFormSubmit function
form.addEventListener("submit", function (event) {
  event.preventDefault();
  handleProfileFormSubmit();
});

//3/3 Rendering cards

function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  console.log(cardElement);
  //access the card title and image and store them in variables

  const cardTitle = cardElement.querySelector(".gallery__label");
  console.log(cardTitle);
  const cardPhoto = cardElement.querySelector(".gallery__image");

  //set the path to the image to the link field of the object
  cardPhoto.src = cardData.link;
  //set the image alt text to the name field of the object
  cardPhoto.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitle.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
}

//function runs the entire array for each element every time it runs the next
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardGallery.append(cardElement);
  //use prepend later
});
