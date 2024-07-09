class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
      "Content-Type": "application/json",
    };
  }
  //GET https://around-api.en.tripleten-services.com/v1/cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
  //PATCH https://around-api.en.tripleten-services.com/v1/users/me
  editProfile({ name, about }) {
    console.log("editing");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
  //PATCH https://around-api.en.tripleten-services.com/v1/users/me/avatar
  changePfp({ avatar }) {
    console.log("changing pfp");
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
        alert("Error. The request has failed ", err);
      });
  }
  //POST https://around-api.en.tripleten-services.com/v1/cards
  addNewCard({ name, link }) {
    console.log("adding");
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
  //DELETE https://around-api.en.tripleten-services.com/v1/cards/cardId
  deleteCard({ cardId }) {
    console.log("deleting");
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
  //PUT https://around-api.en.tripleten-services.com/v1/cards/cardId/likes
  addLike({ cardId, isLiked }) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        isLiked,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
  //PUT https://around-api.en.tripleten-services.com/v1/cards/cardId/likes
  removeLike({ cardId }) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }
}

export default Api;
