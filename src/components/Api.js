class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
      "Content-Type": "application/json",
    };
  }

  //Function to process response. Reuse it for each fetch.
  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  //GET https://around-api.en.tripleten-services.com/v1/cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._processResponse);
  }

  //PATCH https://around-api.en.tripleten-services.com/v1/users/me
  editProfile({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._processResponse);
  }
  //PATCH https://around-api.en.tripleten-services.com/v1/users/me/avatar
  changePfp({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._processResponse);
  }
  //POST https://around-api.en.tripleten-services.com/v1/cards
  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._processResponse);
  }
  //DELETE https://around-api.en.tripleten-services.com/v1/cards/cardId
  deleteCard({ cardId }) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._processResponse);
  }
  //PUT https://around-api.en.tripleten-services.com/v1/cards/cardId/likes
  addLike({ cardId, isLiked }) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        isLiked,
      }),
    }).then(this._processResponse);
  }
  //PUT https://around-api.en.tripleten-services.com/v1/cards/cardId/likes
  removeLike({ cardId }) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._processResponse);
  }
}

export default Api;
