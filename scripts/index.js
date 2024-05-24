

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
  }
]

//selects the edit button in profile
const profileEditButton = document.querySelector("#profile-edit-button");
//select the modal
  const profileEditModal = document.querySelector("#profile-edit-modal");
//function to add css to modal
let openModal = function(){
  //change the modal css
  profileEditModal.classList.add("modal_opened");
}
//click edit button to open modal
profileEditButton.addEventListener("click", openModal);


//select x button
const modalX = document.querySelector(".modal__close");
//function to remove css to modal
let closeModal = function(){
  //change the modal css
  profileEditModal.classList.remove("modal_opened");
}
//click x button to close modal
modalX.addEventListener("click", closeModal);


//1/3
//makes current text the input text on load
//use let because they will change
let inputTitle = document.querySelector("#title");
inputTitle.value = document.querySelector(".profile__title").textContent;
let inputSubTitle = document.querySelector("#subtitle");
inputSubTitle.value = document.querySelector(".profile__subtitle").textContent;


//2/3 Edit form
//selects save button
let modalSave = document.querySelector(".modal__save");
//function to remove css to modal
//make a function to save
const saveModal = function(){
  //change the modal css
  profileEditModal.classList.remove("modal_opened");
  //replaces inputs
  //title
  let profileTitle = document.querySelector(".profile__title");
  profileTitle.textContent = inputTitle.value;
  //sub
  let profileSubTitle = document.querySelector(".profile__subtitle");
  profileSubTitle.textContent = inputSubTitle.value;

}
//select the form that contains the save button
const form = document.querySelector(".modal__form");
//listens for the submit, prevents reload on save and calls saveModal function
form.addEventListener("submit", function(event){
  event.preventDefault();
  saveModal();
});

//3/3 Rendering cards


function getCardElement(cardData){
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



const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__grid");
//const galleryCard = document.querySelector(".gallery__card");
//function runs the entire array for each element every time it runs the next
initialCards.forEach(cardData => {
  const cardElement = getCardElement(cardData);
  cardGallery.append(cardElement);
  //use prepend later
});

