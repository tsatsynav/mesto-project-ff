/* < --- IMPORT JS --- >*/
import {
  profileEditPopup,
  profileNameInput,
  profileDescriptionInput,
  openPopup,
  closePopup,
} from "./popup.js";
/* < --- VARIABLES --- >*/
/* < --- profile --- >*/
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// -----------------------------------------------------------------------------------

// < --- SET PROFILE INFO --- >
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditPopup);
}

// -----------------------------------------------------------------------------------

// < --- GET PROFILE INFO --- >
export function getProfileInfo() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
}
