//replaces the getCardElement function
class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.name = data.name;
    this.link = data.link;
    this.alt = data.alt;
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
    this._likeButton.classList.toggle("gallery__like-button_clicked");
  }
  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleToggleLike());
    this._trashButton.addEventListener("click", () => this._handleDeleteCard());
    this._cardPhoto.addEventListener("click", () => {
      this._handleImageClick({ name: this.name, link: this.link });
    });
  }
  getView() {
    this._element = this._getTemplate();
    this._cardPhoto = this._element.querySelector(".gallery__image");
    this._likeButton = this._element.querySelector(".gallery__like-button");
    this._trashButton = this._element.querySelector(".gallery__delete-button");
    this._cardLabel = this._element.querySelector(".gallery__label");
    this._cardPhoto.src = this.link;
    this._cardPhoto.alt = this.name;
    this._cardLabel.textContent = this.name;

    this._setEventListeners();
    return this._element;
  }
} //end of class Card

export default Card;
