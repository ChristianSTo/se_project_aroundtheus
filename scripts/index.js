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
//selects the add button in profile section
const profileAddButton = document.querySelector("#profile-add-button");
//select the modal for person edit
const profileEditModal = document.querySelector("#profile-edit-modal");
//select x button
const modalPersonX = document.querySelector(".modal__close");
const modalCreateX = document.querySelector("#modal-create-close");
//selects save button
const modalSave = document.querySelector(".modal__save");
//select the form that contains the save button
const formPerson = document.querySelector("#modal__form-person");
//select the form that contains the create button
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

/*********************************************
Functions
**********************************************/

//function to add css to person modal
const openPersonModal = function () {
  //1/3
  //makes current text the input text when OPEN the modal
  inputTitle.value = profileTitle.textContent;
  inputSubTitle.value = profileSubTitle.textContent;
  //change the modal css
  profileEditModal.classList.add("modal_opened");
};

//function to remove css from modals
const closeEditModal = function () {
  profileEditModal.classList.remove("modal_opened");
  //putting this here doesnt work somehow: imgCreateModal.classList.remove("modal_opened");
};
const closeCreateModal = function () {
  //somehow needs seperate function
  imgCreateModal.classList.remove("modal_opened");
};

//make a function to save person
const handleProfileFormSubmit = function () {
  //change the modal css
  closeEditModal();
  //replaces inputs
  //title
  profileTitle.textContent = inputTitle.value;
  //sub
  profileSubTitle.textContent = inputSubTitle.value;
};

//Rendering cards
function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables

  const cardTitle = cardElement.querySelector(".gallery__label");
  const cardPhoto = cardElement.querySelector(".gallery__image");

  //set the path to the image to the link field of the object
  cardPhoto.src = cardData.link;
  //set the image alt text to the name field of the object
  cardPhoto.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitle.textContent = cardData.name;
  //function to change like button color
  const toggleLike = function () {
    likeButton.classList.toggle("gallery__like-button_clicked");
  };
  //select like button
  const likeButton = cardElement.querySelector(".gallery__like-button");
  //click the like button to change colors
  likeButton.addEventListener("click", toggleLike);
  const galleryCard = cardElement.querySelector(".gallery__card");
  //function to delete
  const deleteCard = function () {
    galleryCard.remove();
  };
  //select trash button
  const trashButton = cardElement.querySelector(".gallery__delete-button");
  //click the trash button to delete card
  trashButton.addEventListener("click", deleteCard);

  //select the photo modal
  const photoModal = document.querySelector("#photo-modal");
  //select box-photo
  const boxPhoto = document.querySelector(".modal__box-photo");
  //select box-title
  const boxTitle = document.querySelector(".modal__box-title");
  //function to open photo
  const openPhoto = function () {
    //reveals modal
    photoModal.classList.add("modal_opened");
    //changes photo to clicked photo
    boxPhoto.src = cardPhoto.src;
    boxPhoto.alt = cardPhoto.alt;
    boxTitle.textContent = cardTitle.textContent;
  };
  //select x button
  const modalPhotoX = document.querySelector("#modal-photo-close");
  //select picture (already selected as cardPhoto)
  //click cardPhoto to open photo
  cardPhoto.addEventListener("click", openPhoto);
  //function to close photo
  const closePhotoModal = function () {
    photoModal.classList.remove("modal_opened");
  };
  //click x button to close person modal
  modalPhotoX.addEventListener("click", closePhotoModal);
  //return the ready HTML element with the filled-in data
  return cardElement;
}

//function runs the entire array for each element every time it runs the next
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardGallery.append(cardElement);
});

const openImgModal = function () {
  //change the modal css
  imgCreateModal.classList.add("modal_opened");
};

//make a function to create
const handleImgFormSubmit = function () {
  //close the modal
  closeCreateModal();
  //create new card
  const newCard = {
    name: imgTitle.value,
    link: imgURL.value, //prettier auto inserts a comma.
  };
  const cardElement = getCardElement(newCard);

  cardGallery.prepend(cardElement);
  //reset inputs
  imgTitle.value = "";
  imgURL.value = "";
};

/*********************************************
Events
**********************************************/
//click edit button to open person modal
profileEditButton.addEventListener("click", openPersonModal);
//click x button to close person modal
modalPersonX.addEventListener("click", closeEditModal);
modalCreateX.addEventListener("click", closeCreateModal);
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

//Project 5 notes
//1/7 already using forEach, unless I overlooked
