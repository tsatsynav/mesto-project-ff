/* < --- IMPORT JS --- >*/
import { openPopup, closePopup } from "./popup.js";

// -----------------------------------------------------------------------------------

/* < --- VARIABLES --- >*/
/* < --- profile --- >*/
const profileEditPopup = document.querySelector(".popup_type_edit");

const profileNameInput = document.querySelector(".popup__input_type_name");

const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description"
);

const profileTitle = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

// -----------------------------------------------------------------------------------

// < --- FUNCTIONALITY --- >
// < --- set profile info --- >
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditPopup);
}

// < --- get profile info --- >
export function getProfileInfo() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditPopup);
}
