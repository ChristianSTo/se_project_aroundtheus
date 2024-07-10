class UserInfo {
  constructor(
    { profileNameSelector, profileJobSelector, profilePictureSelector },
    initialdata
  ) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._profilePicture = document.querySelector(profilePictureSelector);
    if (initialdata) {
    }
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

  setUserInfo({ name, job, picture }) {
    //add the info to the page
    if (name) this._profileName.textContent = name;
    if (job) this._profileJob.textContent = job;
    if (picture) this._profilePicture.src = picture;
  }
  setUserPicture({ picture }) {
    this.setUserInfo({ picture });
  }
}

export default UserInfo;
