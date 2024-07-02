class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    //make an object to contain name and job info
    const info = {
      name: "",
      job: "",
    };
    info.name = this._profileName.textContent;
    info.job = this._profileJob.textContent;
    return info;
  }

  setUserInfo(name, job) {
    //add the info to the page
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
  }
}

export default UserInfo;
