class Section {
  constructor({ items, renderer }, containerSelector) {
    //
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
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
      this._container.append(item);
    }
    if (place === "prepend") {
      this._container.prepend(item);
    }
  }
}

export default Section;
