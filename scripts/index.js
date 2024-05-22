

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

console.log(initialCards);


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
