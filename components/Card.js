//replaces the getCardElement function
class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  //clone the template element with all its content
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);
  }

  //function to change like button color
  _handleToggleLike() {
    this._likeButton.querySelector("gallery__like-button");
    this._likeButton.classList.toggle("gallery__like-button_clicked");
  }
  _handleDeleteCard() {
    document.querySelector(".gallery__card").remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleToggleLike());
    this._trashButton.addEventListener("click", () => this._handleDeleteCard());
    this._cardPhoto.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }
  getView() {
    const element = this._getTemplate();
    this._cardPhoto = element.querySelector(".gallery__image");
    this._likeButton = element.querySelector(".gallery__like-button");
    this._trashButton = element.querySelector(".gallery__delete-button");
    this._cardLabel = element.querySelector(".gallery__label");
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardLabel.textContent = this._name;

    this._setEventListeners();
    return element;
  }
} //end of class Card

export default Card;
