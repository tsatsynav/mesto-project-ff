/* < --- IMPORTS --- >*/
import { addCard } from "../index.js";
import { handleProfileFormSubmit, getProfileInfo } from "./profile.js";

// -----------------------------------------------------------------------------------

/* < --- VARIABLES --- >*/
/* < --- global popups --- >*/
const popups = document.querySelectorAll(".popup");

/* < --- profile popup --- >*/
export const openProfileEditPopup = document.querySelector(
  ".profile__edit-button"
);
export const profileEditPopup = document.querySelector(".popup_type_edit");
const profileEditForm = document.forms["edit-profile"];
export const profileNameInput = document.querySelector(
  ".popup__input_type_name"
);
export const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description"
);

/* < --- add new card popup --- >*/
const openNewCardPopupButton = document.querySelector(".profile__add-button");
export const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = document.forms["new-place"];
export const newCardNameInput = newCardForm.querySelector(
  ".popup__input_type_card-name"
);
export const newCardUrlInput = newCardForm.querySelector(
  ".popup__input_type_url"
);

/* < --- image popup --- >*/
const imagePopup = document.querySelector(".popup_type_image");
const imageContent = imagePopup.querySelector(".popup__image");
const imageCaption = imagePopup.querySelector(".popup__caption");

// -----------------------------------------------------------------------------------

// < --- FUNCTIONALITY --- >
// < --- open popup --- >
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByKeyboard);
}

// < --- close popup --- >
export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByKeyboard);
}

// < --- keyboard popup --- >
function closePopupByKeyboard(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened");
    closePopup(popupOpened);
  }
}

// < --- global popup listeners --- >
popups.forEach((popup) => {
  const popupCloseButton = popup.querySelector(".popup__close");
  popupCloseButton.addEventListener("click", () => closePopup(popup));
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
  });
});

/* < --- profile form listener --- >*/
openProfileEditPopup.addEventListener("click", () => getProfileInfo());
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

/* < --- new card listeners --- >*/
openNewCardPopupButton.addEventListener("click", () => openPopup(newCardPopup));
newCardForm.addEventListener("submit", addCard);

/* < --- open image popup --- >*/
export function runOpenImage(item) {
  imageContent.src = item.link;
  imageContent.alt = item.name;
  imageCaption.textContent = item.name;
  openPopup(imagePopup);
}
