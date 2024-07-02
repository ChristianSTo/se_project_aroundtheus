class UserInfo {
  constructor(profileName, profileJob) {
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._profileTitle = document.querySelector(".profile__title");
    this._profileSubTitle = document.querySelector(".profile__subtitle");
  }

  getUserInfo() {
    //make an object to contain name and job info
    const info = {
      name: "",
      job: "",
    };
    info.name = this._profileName;
    info.job = this._profileJob;
    console.log(info);
    return info;
  }

  setUserInfo(name, job) {
    //add the info to the page
    name = this._profileName;
    job = this._profileJob;
    this._profileTitle.textContent = name;
    this._profileSubTitle.textContent = job;
  }
}

export default UserInfo;
