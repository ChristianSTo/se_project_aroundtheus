!function(){"use strict";var e=class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._nactiveButtonClass=e.inactiveButtonClass,this._inputInvalidClass=e.inputInvalidClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}disableButton(e){e.disabled=!0}enableButton(e){e.disabled=!1}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputInvalidClass)}_hideInputError(e){this._form.querySelector(`#${e.id}-error`).classList.remove(this._errorClass),e.classList.remove(this._inputInvalidClass)}checkInputValidity(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}_checkFormValidity=()=>this.inputElements.every((e=>e.validity.valid));_toggleButtonAbility=()=>{this._checkFormValidity()?this.enableButton(this.submitButton):this.disableButton(this.submitButton)};_setEventListeners(){this.inputElements=[...this._form.querySelectorAll(this._inputSelector)],this.submitButton=this._form.querySelector(this._submitButtonSelector),this.inputElements.forEach((e=>{e.addEventListener("input",(t=>{this.checkInputValidity(e),this._toggleButtonAbility(this.inputElements)}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this.disableButton(this.submitButton)})),this._setEventListeners()}},t=class{constructor(e,t,o){this.name=e.name,this.link=e.link,this.alt=e.alt,this._cardSelector=t,this._handleImageClick=o}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__card").cloneNode(!0)}_handleToggleLike(){this._likeButton.classList.toggle("gallery__like-button_clicked")}_handleDeleteCard(){this._element.remove()}_setEventListeners(){this._likeButton.addEventListener("click",(()=>this._handleToggleLike())),this._trashButton.addEventListener("click",(()=>this._handleDeleteCard())),this._cardPhoto.addEventListener("click",(()=>{this._handleImageClick({name:this.name,link:this.link})}))}getView(){return this._element=this._getTemplate(),this._cardPhoto=this._element.querySelector(".gallery__image"),this._likeButton=this._element.querySelector(".gallery__like-button"),this._trashButton=this._element.querySelector(".gallery__delete-button"),this._cardLabel=this._element.querySelector(".gallery__label"),this._cardPhoto.src=this.link,this._cardPhoto.alt=this.name,this._cardLabel.textContent=this.name,this._setEventListeners(),this._element}},o=class{constructor(e){this.modalSelector=document.querySelector(e)}open(){this.modalSelector.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this.modalSelector.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this.currentCloseButton=this.modalSelector.querySelector(".modal__close"),this.currentCloseButton.addEventListener("click",this.close.bind(this)),this.modalContainer=this.modalSelector.querySelector(".modal__container"),this.modalSelector.addEventListener("mousedown",(e=>{e.stopPropagation();let t=!1;(e.target===this.modalContainer||this.modalContainer.contains(e.target))&&(t=!0),!1===t&&this.close()}))}},s=class extends o{constructor(e){let{modalSelector:t,handleSubmitForm:o}=e;super(t),this._modalSelector=document.querySelector(t),this._modalForm=this._modalSelector.querySelector(".modal__form"),this._inputFields=this._modalForm.querySelectorAll(".modal__input"),this._handleSubmitForm=o}close(){this._modalForm.reset(),super.close()}_getInputValues(){const e=[...this._modalSelector.querySelectorAll(".modal__input")],t={};for(const o of e)t[o.name]=o.value;return t}setEventListeners(){this._modalForm.addEventListener("submit",(e=>{e.preventDefault(),this.data=this._getInputValues(),this._handleSubmitForm(this.data),this.close()})),super.setEventListeners()}};document.querySelector(".profile__title"),document.querySelector(".profile__subtitle");const n=document.querySelector("#title"),i=document.querySelector("#subtitle"),r=document.querySelector("#profile-edit-button"),l=document.querySelector("#modal__form-person"),a=document.querySelector("#modal__form-img"),c=document.querySelector("#profile-add-button"),d=new class extends o{constructor(e){super(e),this._boxPhoto=document.querySelector(".modal__box-photo"),this._boxTitle=document.querySelector(".modal__box-title")}open(e){this._boxPhoto.src=e.link,this._boxPhoto.alt=e.name,this._boxTitle.textContent=e.name,super.open()}setEventListeners(){super.setEventListeners()}}("#photo-modal"),u=e=>{d.open(e)};d.setEventListeners();let m="append";const h=e=>{const o=new t(e,"#card-template",u).getView();_.addItem(o,m)},_=new class{constructor(e,t){let{items:o,renderer:s}=e;this._items=o,this._renderer=s,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append";"append"===t&&this._container.append(e),"prepend"===t&&this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:h},".gallery__grid");_.renderItems();const p=new class{constructor(e){let{profileNameSelector:t,profileJobSelector:o}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(o)}getUserInfo(){const e={name:"",job:""};return e.name=this._profileName.textContent,e.job=this._profileJob.textContent,e}setUserInfo(e,t){this._profileName.textContent=e,this._profileJob.textContent=t}}({profileNameSelector:".profile__title",profileJobSelector:".profile__subtitle"}),b=new s({modalSelector:"#profile-edit-modal",handleSubmitForm:e=>{p.setUserInfo(e.title,e.subtitle)}});r.addEventListener("click",(()=>{b.open();const{name:e,job:t}=p.getUserInfo();n.value=e,i.value=t})),b.setEventListeners();const S=new s({modalSelector:"#img-create-modal",handleSubmitForm:e=>{const t={name:e.imgTitle,link:e.imgURL,alt:e.imgTitle};m="prepend",h(t)}});c.addEventListener("click",(()=>{S.open()})),S.setEventListeners();const g={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button:disabled",inputInvalidClass:"modal__input_invalid",inputErrorClass:"modal__error",errorClass:"modal__error_visible"};new e(g,l).enableValidation(),new e(g,a).enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0gsTUFBUXFDLENBQUcsSUFJM0JFLEVBQWlCM0Qsb0JBR2pCLE1BQU1nRSxFQUFlLElBQUlKLEVBQWMsQ0FDckNsRSxjQUFlLG9CQUNmZ0IsaUJBOUIyQnRDLElBRTNCLE1BQU02RixFQUFVLENBQ2QxRixLQUFNSCxFQUFLOEYsU0FDWDFGLEtBQU1KLEVBQUsrRixPQUNYMUYsSUFBS0wsRUFBSzhGLFVBRVpuQyxFQUFRLFVBQ1JDLEVBQVdpQyxFQUFRLElBNEJyQnRDLEVBQVMzRCxpQkFBaUIsU0FKSm9HLEtBQ3BCSixFQUFhckUsTUFBTSxJQUlyQnFFLEVBQWFoRSxvQkFPYixNQUFNNUUsRUFBUyxDQUNiaUosYUFBYyxlQUNkN0ksY0FBZSxnQkFDZkUscUJBQXNCLHdCQUN0QkUsb0JBQXFCLGdDQUNyQkUsa0JBQW1CLHVCQUNuQkUsZ0JBQWlCLGVBQ2pCRSxXQUFZLHdCQUtZLElBQUlvSSxFQUFjbEosRUFBUXFHLEdBQ2xDdkQsbUJBRU8sSUFBSW9HLEVBQWNsSixFQUFRc0csR0FDbEN4RCxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL01vZGFsV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9tYWtlIGEgY2xhc3MgY2FsbGVkIEZvcm1WYWxpZGF0b3JcbmNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAvL2FsbCBjbGFzc2VzIGhhdmUgYSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX25hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0SW52YWxpZENsYXNzID0gY29uZmlnLmlucHV0SW52YWxpZENsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgbW92ZSBmdW5jdGlvbnMgZnJvbSBpbmRleCB0byBoZXJlLCBhbmQgdXNlIFwidGhpc1wiXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLy91bml2ZXJzYWwgZ2xvYmFsIGZ1bmN0aW9uIHRvIGRpc2FibGUgYnV0dG9uc1xuICBkaXNhYmxlQnV0dG9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgLy91bml2ZXJzYWwgZnVuY3Rpb24gdG8gZW5hYmxlIGJ1dHRvbnNcbiAgZW5hYmxlQnV0dG9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy9mdW5jdGlvbiB0byBzaG93IGlucHV0IGVycm9yXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEludmFsaWRDbGFzcyk7XG4gIH1cbiAgLy9mdW5jdGlvbiB0byBoaWRlIGlucHVyIGVycm9yXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRJbnZhbGlkQ2xhc3MpO1xuICB9XG4gIC8vZnVuY3Rpb24gdG8gY2hlY2sgaW5wdXQgdmFsaWRpdHlcbiAgY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8vdGhlIFwidGhpcy5pbnB1dEVsZW1lbnRzXCIgaXMgZGVmaW5lZCBhcyBhbiBhcnJheSB1c2luZyBbXSBpbiBfc2V0RXZlbnRMaXN0ZW5lcnMoKVxuICBfY2hlY2tGb3JtVmFsaWRpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uQWJpbGl0eSA9ICgpID0+IHtcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCk7XG4gICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVCdXR0b24odGhpcy5zdWJtaXRCdXR0b24pO1xuICAgIH1cbiAgfTtcbiAgLy9hZGRFdmVudExpc3RlbmVyc1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy9ub3csIHRoaXMgaXMgdXNlZCB0byByZWZlciB0byB0aGUgb2JqZWN0IGluIHF1ZXN0aW9uLCBzbyBpdHMgcHJvcGVydGllcyBhcmUgYWxzbyBhYmxlIHRvIGJlIHJlZmVycmVkIHRvLlxuICAgIHRoaXMuaW5wdXRFbGVtZW50cyA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xuICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25BYmlsaXR5KHRoaXMuaW5wdXRFbGVtZW50cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vZW5hYmxlVmFsaWRhdGlvblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vZGlzYWJsZSB0aGUgYnV0dG9uIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXRcbiAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbih0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufSAvLyBlbmQgb2YgY2xhc3MgRm9ybVZhbGlkYXRvclxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiLy9yZXBsYWNlcyB0aGUgZ2V0Q2FyZEVsZW1lbnQgZnVuY3Rpb25cbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spIHtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuYWx0ID0gZGF0YS5hbHQ7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xuICB9XG5cbiAgLy9jbG9uZSB0aGUgdGVtcGxhdGUgZWxlbWVudCB3aXRoIGFsbCBpdHMgY29udGVudFxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2NhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICAvL2Z1bmN0aW9uIHRvIGNoYW5nZSBsaWtlIGJ1dHRvbiBjb2xvclxuICBfaGFuZGxlVG9nZ2xlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJnYWxsZXJ5X19saWtlLWJ1dHRvbl9jbGlja2VkXCIpO1xuICB9XG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlVG9nZ2xlTGlrZSgpKTtcbiAgICB0aGlzLl90cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpKTtcbiAgICB0aGlzLl9jYXJkUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2soeyBuYW1lOiB0aGlzLm5hbWUsIGxpbms6IHRoaXMubGluayB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2NhcmRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pbWFnZVwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX3RyYXNoQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZExhYmVsID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2xhYmVsXCIpO1xuICAgIHRoaXMuX2NhcmRQaG90by5zcmMgPSB0aGlzLmxpbms7XG4gICAgdGhpcy5fY2FyZFBob3RvLmFsdCA9IHRoaXMubmFtZTtcbiAgICB0aGlzLl9jYXJkTGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59IC8vZW5kIG9mIGNsYXNzIENhcmRcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IobW9kYWxTZWxlY3Rvcikge1xuICAgIC8vbWFrZSBzdXJlIHRoZSBwYXJlbnQgdXNlcyBnbG9iYWwgbm90IHByaXZhdGUgc28gY2hpbGRlbiBjYW4gdXNlIGl0LlxuICAgIHRoaXMubW9kYWxTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxTZWxlY3Rvcik7XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLm1vZGFsU2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAvL3N0YXJ0cyB0byBsaXN0ZW4gZm9yIGVzY1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICAvL2Nsb3NlcyBtb2RhbFxuICAgIHRoaXMubW9kYWxTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgIC8vc3RvcHMgbGlzdGVuaW5nIGZvciBlc2NcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmN1cnJlbnRDbG9zZUJ1dHRvbiA9IHRoaXMubW9kYWxTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcbiAgICB0aGlzLmN1cnJlbnRDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm1vZGFsQ29udGFpbmVyID0gdGhpcy5tb2RhbFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NvbnRhaW5lclwiKTtcbiAgICB0aGlzLm1vZGFsU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvL21ha2UgdmFyaWFibGUgdG8ga25vdyBpZiBpbnNpZGUgbW9kYWwgY29udGFpbmVyIG9yIG5vdFxuICAgICAgbGV0IGlzSW5zaWRlQ29udGFpbmVyID0gZmFsc2U7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQgPT09IHRoaXMubW9kYWxDb250YWluZXIgfHxcbiAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jb250YWlucyhldnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGlzSW5zaWRlQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0luc2lkZUNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsLmpzXCI7XG5cbmNsYXNzIE1vZGFsV2l0aEZvcm0gZXh0ZW5kcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHsgbW9kYWxTZWxlY3RvciwgaGFuZGxlU3VibWl0Rm9ybSB9KSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG4gICAgdGhpcy5fbW9kYWxTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxTZWxlY3Rvcik7XG4gICAgdGhpcy5fbW9kYWxGb3JtID0gdGhpcy5fbW9kYWxTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2lucHV0RmllbGRzID0gdGhpcy5fbW9kYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2lucHV0XCIpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0gPSBoYW5kbGVTdWJtaXRGb3JtO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fbW9kYWxGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxuXG4gIC8vbWFkZSBjb21tZW50cyB0byBsZWFybiBmcm9tIG1pc3Rha2VzXG4gIC8vZnVuY3Rpb24gdG8gZ2V0IHRoZSB2YWx1ZXMgb2YgZXZlcnkgaW5wdXRcbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIC8vZ2V0cyBhbGwgaW5wdXRzIGFzIGFuIGFycmF5XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gW1xuICAgICAgLi4udGhpcy5fbW9kYWxTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKSxcbiAgICBdO1xuXG4gICAgLy9tYWtlIGFuIG9iamVjdCB0byBjb250YWluIHRoZSB2YWx1ZXNcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuXG4gICAgLy9nb2VzIHRob3VnaCB0aGUgaW5wdXQgbGlzdCBhcnJheSwgdGhlbiBhc3NpZ25zIHRoZSBhdHRyaWJ1dGVzIGZvciBlYWNoIGlucHV0XG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dExpc3QpIHtcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuX2dldElucHV0VmFsdWVzKCk7XG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtKHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWxXaXRoRm9ybTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblZhcmlhYmxlc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZVN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBpbnB1dFN1YlRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJ0aXRsZVwiKTtcbi8vc2VsZWN0cyB0aGUgZWRpdCBidXR0b24gaW4gcHJvZmlsZSBzZWN0aW9uXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1idXR0b25cIik7XG4vL3NlbGVjdCB0aGUgZm9ybSBmb3IgcGVyc29uXG5leHBvcnQgY29uc3QgZm9ybVBlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxfX2Zvcm0tcGVyc29uXCIpO1xuLy9zZWxlY3QgdGhlIGZvcm0gZm9yIGFkZGluZ1xuZXhwb3J0IGNvbnN0IGZvcm1JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsX19mb3JtLWltZ1wiKTtcbi8vc2VsZWN0cyBhZGQgYnV0dG9uXG5leHBvcnQgY29uc3QgbW9kYWxBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtYWRkLWJ1dHRvblwiKTtcbiIsIi8vaW1wb3J0IGpzIGFuZCBjc3MgZmlsZXNcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IE1vZGFsV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IE1vZGFsV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHtcbiAgaW5wdXRUaXRsZSxcbiAgaW5wdXRTdWJUaXRsZSxcbiAgcHJvZmlsZUVkaXRCdXR0b24sXG4gIGZvcm1QZXJzb24sXG4gIGZvcm1JbWcsXG4gIG1vZGFsQWRkLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Jbml0aWFsIGNhcmRzIGFycmF5XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuRnVuY3Rpb25zXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuU3ByaW50IDggc3RhcnRcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vL21ha2Ugc3VyZSB0byBkZWZpbmUgdGhlIGZ1bmN0aW9ucyBiZWZvcmUgdHJ5aW5nIHRvIGNhbGwgdGhlbS5cbi8vcHJldmlldyBwaG90b1xuY29uc3QgcHJldmlld01vZGFsID0gbmV3IE1vZGFsV2l0aEltYWdlKFwiI3Bob3RvLW1vZGFsXCIpO1xuY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChkYXRhKSA9PiB7XG4gIC8vcmV2ZWFscyBtb2RhbFxuICBwcmV2aWV3TW9kYWwub3BlbihkYXRhKTtcbn07XG5wcmV2aWV3TW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy9hY2Nlc3MgdGhlIGdyaWQgb2YgY2FyZHNcbmNvbnN0IGNhcmRHYWxsZXJ5U2VsZWN0b3IgPSBcIi5nYWxsZXJ5X19ncmlkXCI7XG4vL2FjY2VzcyB0aGUgY2FyZCB0ZW1wbGF0ZVxuY29uc3QgY2FyZFNlbGVjdG9yID0gXCIjY2FyZC10ZW1wbGF0ZVwiO1xuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBjYXJkXG5sZXQgcGxhY2UgPSBcImFwcGVuZFwiO1xuY29uc3QgY3JlYXRlQ2FyZCA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpdGVtLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2V0VmlldygpO1xuXG4gIHNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCwgcGxhY2UpO1xufTtcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAgeyBpdGVtczogaW5pdGlhbENhcmRzLCByZW5kZXJlcjogY3JlYXRlQ2FyZCB9LFxuICBjYXJkR2FsbGVyeVNlbGVjdG9yXG4pO1xuc2VjdGlvbi5yZW5kZXJJdGVtcygpO1xuXG4vL21ha2UgZ2xvYmFsIGluc3RhbmNlIG9mIFVzZXJpbmZvIGNsYXNzXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHByb2ZpbGVOYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fc3VidGl0bGVcIixcbn0pO1xuXG4vL2Z1bmN0aW9uIHRvIHNhdmUgcGVyc29uLiB0aGlzIHRha2VzIGRhdGEgZnJvbSB0aGUgZm9ybSxcbi8vdGhlbiBsZXRzIHVzZXJpbmZvIHVzZSBpdFxuY29uc3QgaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAvL2FkZCB0aGUgaW5mbyB0byB0aGUgcGFnZVxuICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhLnRpdGxlLCBkYXRhLnN1YnRpdGxlKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBjYXJkIGltZ1xuY29uc3QgaGFuZGxlSW1nRm9ybVN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gIC8vY3JlYXRlIG5ldyBjYXJkXG4gIGNvbnN0IG5ld0NhcmQgPSB7XG4gICAgbmFtZTogZGF0YS5pbWdUaXRsZSxcbiAgICBsaW5rOiBkYXRhLmltZ1VSTCxcbiAgICBhbHQ6IGRhdGEuaW1nVGl0bGUsXG4gIH07XG4gIHBsYWNlID0gXCJwcmVwZW5kXCI7XG4gIGNyZWF0ZUNhcmQobmV3Q2FyZCk7XG59O1xuXG4vL2VkaXQgcHJvZmlsZSBwZXJzb24gZm9ybVxuY29uc3QgZWRpdFByb2ZpbGVNb2RhbCA9IG5ldyBNb2RhbFdpdGhGb3JtKHtcbiAgbW9kYWxTZWxlY3RvcjogXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIsXG4gIGhhbmRsZVN1Ym1pdEZvcm06IGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0LFxufSk7XG5jb25zdCBvcGVuUGVyc29uTW9kYWwgPSAoKSA9PiB7XG4gIGVkaXRQcm9maWxlTW9kYWwub3BlbigpO1xuICAvL21ha2VzIGN1cnJlbnQgdGV4dCB0aGUgaW5wdXQgdGV4dCB3aGVuIG9wZW4gdGhlIG1vZGFsXG4gIGNvbnN0IHsgbmFtZSwgam9iIH0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBpbnB1dFRpdGxlLnZhbHVlID0gbmFtZTtcbiAgaW5wdXRTdWJUaXRsZS52YWx1ZSA9IGpvYjtcbn07XG4vL2NsaWNrIGVkaXQgYnV0dG9uIHRvIG9wZW4gcGVyc29uIG1vZGFsXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblBlcnNvbk1vZGFsKTtcbmVkaXRQcm9maWxlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy9hZGQgY2FyZCBpbWFnZSBmb3JtXG5jb25zdCBuZXdDYXJkTW9kYWwgPSBuZXcgTW9kYWxXaXRoRm9ybSh7XG4gIG1vZGFsU2VsZWN0b3I6IFwiI2ltZy1jcmVhdGUtbW9kYWxcIixcbiAgaGFuZGxlU3VibWl0Rm9ybTogaGFuZGxlSW1nRm9ybVN1Ym1pdCxcbn0pO1xuY29uc3Qgb3BlbkNhcmRNb2RhbCA9ICgpID0+IHtcbiAgbmV3Q2FyZE1vZGFsLm9wZW4oKTtcbn07XG4vL2NsaWNrIGFkZCBidXR0b24gdG8gb3BlbiBpbWcgbW9kYWxcbm1vZGFsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2FyZE1vZGFsKTtcbm5ld0NhcmRNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5TcHJpbnQgOCBlbmRcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vbW92ZSB0aGUgY29uZmlnIHZhcmlhYmxlIGhlcmVcbmNvbnN0IGNvbmZpZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3N1Ym1pdC1idXR0b246ZGlzYWJsZWRcIixcbiAgaW5wdXRJbnZhbGlkQ2xhc3M6IFwibW9kYWxfX2lucHV0X2ludmFsaWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG4vL2NhbGwgYW5kIG1ha2UgYSBuZXcgZm9ybVZhbGlkYXRvciB3aXRoIHRoZSBzcGVjaWZpYyBwYXJhbWV0ZXJzIG9mIHRoZSByZWxhdGl2ZSBvYmplY3RcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1QZXJzb24pO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtSW1nKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsLmpzXCI7XG5cbmNsYXNzIE1vZGFsV2l0aEltYWdlIGV4dGVuZHMgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihtb2RhbFNlbGVjdG9yKSB7XG4gICAgc3VwZXIobW9kYWxTZWxlY3Rvcik7XG4gICAgdGhpcy5fYm94UGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19ib3gtcGhvdG9cIik7XG4gICAgdGhpcy5fYm94VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19ib3gtdGl0bGVcIik7XG4gIH1cbiAgb3BlbihkYXRhKSB7XG4gICAgdGhpcy5fYm94UGhvdG8uc3JjID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2JveFBob3RvLmFsdCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9ib3hUaXRsZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsV2l0aEltYWdlO1xuIiwiY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgLy9cbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICAvL2NhbGwgdGhlIHJlbmRlcmVyKCkgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0sIHBsYWNlID0gXCJhcHBlbmRcIikge1xuICAgIC8vYWxsb3dzIHRoZSBuZXcgc3VibWl0dGVkIGNhcmQgaXMgcHJlcGVuZGVkICYgaW5pdGlhbCBjYXJkcyBhcmUgYXBwZW5kZWRcbiAgICBpZiAocGxhY2UgPT09IFwiYXBwZW5kXCIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfVxuICAgIGlmIChwbGFjZSA9PT0gXCJwcmVwZW5kXCIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVKb2JTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVKb2JTZWxlY3Rvcik7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICAvL21ha2UgYW4gb2JqZWN0IHRvIGNvbnRhaW4gbmFtZSBhbmQgam9iIGluZm9cbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGpvYjogXCJcIixcbiAgICB9O1xuICAgIGluZm8ubmFtZSA9IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50O1xuICAgIGluZm8uam9iID0gdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gaW5mbztcbiAgfVxuXG4gIHNldFVzZXJJbmZvKG5hbWUsIGpvYikge1xuICAgIC8vYWRkIHRoZSBpbmZvIHRvIHRoZSBwYWdlXG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XG4iXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9uYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0SW52YWxpZENsYXNzIiwiaW5wdXRJbnZhbGlkQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm0iLCJkaXNhYmxlQnV0dG9uIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJlbmFibGVCdXR0b24iLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2VFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImlkIiwidGV4dENvbnRlbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsIl9oaWRlSW5wdXRFcnJvciIsInJlbW92ZSIsImNoZWNrSW5wdXRWYWxpZGl0eSIsIm9wdGlvbnMiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrRm9ybVZhbGlkaXR5IiwiaW5wdXRFbGVtZW50cyIsImV2ZXJ5IiwiaW5wdXQiLCJfdG9nZ2xlQnV0dG9uQWJpbGl0eSIsInN1Ym1pdEJ1dHRvbiIsIl9zZXRFdmVudExpc3RlbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwibmFtZSIsImxpbmsiLCJhbHQiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJkb2N1bWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfaGFuZGxlVG9nZ2xlTGlrZSIsIl9saWtlQnV0dG9uIiwidG9nZ2xlIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfZWxlbWVudCIsIl90cmFzaEJ1dHRvbiIsIl9jYXJkUGhvdG8iLCJnZXRWaWV3IiwiX2NhcmRMYWJlbCIsInNyYyIsIm1vZGFsU2VsZWN0b3IiLCJvcGVuIiwiX2hhbmRsZUVzY0Nsb3NlIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJjdXJyZW50Q2xvc2VCdXR0b24iLCJiaW5kIiwibW9kYWxDb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0luc2lkZUNvbnRhaW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwiTW9kYWwiLCJfcmVmIiwiaGFuZGxlU3VibWl0Rm9ybSIsInN1cGVyIiwiX21vZGFsU2VsZWN0b3IiLCJfbW9kYWxGb3JtIiwiX2lucHV0RmllbGRzIiwiX2hhbmRsZVN1Ym1pdEZvcm0iLCJyZXNldCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0TGlzdCIsImlucHV0VmFsdWVzIiwidmFsdWUiLCJldmVudCIsImlucHV0VGl0bGUiLCJpbnB1dFN1YlRpdGxlIiwicHJvZmlsZUVkaXRCdXR0b24iLCJmb3JtUGVyc29uIiwiZm9ybUltZyIsIm1vZGFsQWRkIiwicHJldmlld01vZGFsIiwiX2JveFBob3RvIiwiX2JveFRpdGxlIiwicGxhY2UiLCJjcmVhdGVDYXJkIiwiaXRlbSIsImNhcmRFbGVtZW50IiwiQ2FyZCIsInNlY3Rpb24iLCJhZGRJdGVtIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYXBwZW5kIiwicHJlcGVuZCIsInVzZXJJbmZvIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVKb2JTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ2V0VXNlckluZm8iLCJpbmZvIiwiam9iIiwic2V0VXNlckluZm8iLCJlZGl0UHJvZmlsZU1vZGFsIiwiTW9kYWxXaXRoRm9ybSIsInRpdGxlIiwic3VidGl0bGUiLCJvcGVuUGVyc29uTW9kYWwiLCJuZXdDYXJkTW9kYWwiLCJuZXdDYXJkIiwiaW1nVGl0bGUiLCJpbWdVUkwiLCJvcGVuQ2FyZE1vZGFsIiwiZm9ybVNlbGVjdG9yIiwiRm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=