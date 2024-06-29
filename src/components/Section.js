class Section {
  constructor({ items, renderer }, cardGallerySelector) {
    //
    this._items = items;
    this._renderer = renderer;
    this._cardGallerySelector = document.querySelector(cardGallerySelector);
  }

  renderItems() {
    //call the renderer() function on each item
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item, place = "append") {
    //allows the new submitted card is prepended & initial cards are appended
    if (place === "append") {
      this._cardGallerySelector.append(item);
    }
    if (place === "prepend") {
      this._cardGallerySelector.prepend(item);
    }
  }
}

export default Section;
