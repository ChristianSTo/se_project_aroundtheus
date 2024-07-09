//replaces the getCardElement function
class Card {
  constructor({
    data,
    cardSelector,
    handleImageClick,
    handleTrashClick,
    handleDeleteConfirm,
    toggleLike,
    removeLike,
  }) {
    this.name = data.name;
    this.link = data.link;
    this.alt = data.alt;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleTrashClick = handleTrashClick;
    this._handleDeleteConfirm = handleDeleteConfirm;
    this._toggleLike = toggleLike;
    this._removeLike = removeLike;
  }

  getId() {
    return this._id;
  }
  removeCard() {
    this._element.remove();
  }
  //clone the template element with all its content
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);
  }

  getLikeStatus() {
    if (this._likeButton.classList.contains("gallery__like-button_clicked")) {
      this.likeStatus = true;
    } else {
      this.likeStatus = false;
    }
    return this.likeStatus;
  }

  //function to change like button color
  _handleToggleLike() {
    this._likeButton.classList.toggle("gallery__like-button_clicked");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleToggleLike());
    this._likeButton.addEventListener("click", () => this._toggleLike());

    this._trashButton.addEventListener("click", () => this._handleTrashClick());
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
