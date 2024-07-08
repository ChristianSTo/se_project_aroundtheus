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
    console.log("getting cards");
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

  // other methods for working with the API
}

//1. loading user info form the server
// fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
//   method: "GET",
//   headers: {
//     authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
//   },
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .catch((err) => {
//     console.error("Error. The request has failed: ", err);
//   });

// //2. loading cards from the server
// fetch("https://around-api.en.tripleten-services.com/v1/cards", {
//   method: "GET",
//   headers: {
//     authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
//   },
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .catch((err) => {
//     console.error("Error. The request has failed: ", err);
//   });

// //3. editing the profile
// fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
//   method: "PATCH",
//   headers: {
//     authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Marie Skłodowska Curie",
//     about: "Physicist and Chemist",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .catch((err) => {
//     console.error("Error. The request has failed: ", err);
//   });

// //4. adding a new card
// fetch("https://around-api.en.tripleten-services.com/v1/cards", {
//   method: "POST",
//   headers: {
//     authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
//     "Content-Type": "application/JSON",
//   },
//   body: JSON.stringify({
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .catch((err) => {
//     console.error("Error. The request has failed: ", err);
//   });

// //6. deleting a card
// fetch("https://around-api.en.tripleten-services.com/v1/cards/cardId", {
//   method: "DELETE",
//   headers: {
//     authorization: "6d7ae9eb-8869-410f-b35c-8e1dcc44f04b",
//   },
// })
//   // .then((res) => {
//   //   if (!res.ok) {
//   //     throw new Error("Failed to delete card");
//   //   }
//   //   console.log("Card deleted successfully");
//   // })
//   .catch((err) => {
//     console.error("Error. The request has failed: ", err);
//   });

export default Api;
