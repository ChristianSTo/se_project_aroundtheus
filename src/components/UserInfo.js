class UserInfo {
  constructor({
    profileNameSelector,
    profileJobSelector,
    profilePictureSelector,
  }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profilePicture = document.querySelector(profilePictureSelector);
  }

  getUserInfo() {
    //make an object to contain name and job info
    const info = {
      name: "",
      job: "",
      picture: "",
    };
    info.name = this._profileName.textContent;
    info.job = this._profileJob.textContent;
    info.picture = this._profilePicture.src;
    return info;
  }

  setUserInfo({ name, job }) {
    //add the info to the page
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
  }
  setUserPicture({ picture }) {
    this._profilePicture.src = picture;
  }
}

export default UserInfo;
