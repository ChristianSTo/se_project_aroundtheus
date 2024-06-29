class UserInfo {
  constructor(profileName, profileJob) {
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._profileTitle = document.querySelector(".profile__title");
    this._profileSubTitle = document.querySelector(".profile__subtitle");
  }

  getUserInfo() {
    //make an object to contain name and job info
    let info = {
      name: "",
      job: "",
    };
    info.name = this._profileName;
    info.job = this._profileJob;

    return info;
  }

  setUserInfo() {
    //add the info to the page
    this._info = this.getUserInfo();
    this._profileTitle.textContent = this._info.name;
    this._profileSubTitle.textContent = this._info.job;
  }
}

export default UserInfo;
