/* < --- IMPORT CSS --- >*/
import "./index.css";
/* < --- IMPORT JS --- >*/
/* < --- for initials card --- >*/
import { initialCards } from "./components/list-of-cards.js";
import { buildCard } from "./components/card.js";
import { runDeleteButton } from "./components/card.js";
import { runCardLikeButton } from "./components/card.js";
import { runOpenImage } from "./components/card.js";
/* < --- for popups --- >*/
import { openPopup } from "./components/popup.js";
import { closePopup } from "./components/popup.js";

import { getProfileInfo } from "./components/profile.js";
import { handleFormSubmit } from "./components/profile.js";

import { addCard } from "./components/card.js";

/* < --- VARIABLES --- >*/
/* < --- VARIABLES EXPORT JS --- >*/
export const cardTemplate = document.querySelector("#card-template").content;

// < --- profile section --- >
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const openPopupTypeEdit = document.querySelector(
  ".profile__edit-button"
);
export const openPopupAddNewCardButton = document.querySelector(
  ".profile__add-button"
);

// < --- global popup --- >
export const popups = document.querySelectorAll(".popup");

// < --- popup type edit --- >
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popupTypeContent = popupTypeEdit.querySelector(".popup__content");
export const popupTypeForm = popupTypeContent.querySelector(".popup__form");
export const popupInputTypeName = popupTypeForm.querySelector(
  ".popup__input_type_name"
);
export const popupInputTypeDescription = popupTypeForm.querySelector(
  ".popup__input_type_description"
);

// < --- popup type new card --- >
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
export const popupTypeNewCardForm =
  popupTypeNewCard.querySelector(".popup__form");
export const popupInputNewCardName = popupTypeNewCardForm.querySelector(
  ".popup__input_type_card-name"
);
export const popupInputNewCardUrl = popupTypeNewCardForm.querySelector(
  ".popup__input_type_url"
);

// < --- popup type image --- >
export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupTypeImageContent =
  popupTypeImage.querySelector(".popup__content");
export const popupTypeImageImage =
  popupTypeImageContent.querySelector(".popup__image");
export const popupTypeImageCaption =
  popupTypeImage.querySelector(".popup__caption");

/* < --- VARIABLES LOCAL JS --- >*/
export const placesList = document.querySelector(".places__list");
const cardImage = cardTemplate.querySelector(".card__image");

/* < --- FUNCTIONS --- >*/
initialCards.forEach((item) => {
  placesList.prepend(
    buildCard(item, runDeleteButton, runCardLikeButton, runOpenImage)
  );
});

// < --- LISTENERS --- >
// < --- listener open popup --- >
// < --- listener popup type edit --- >
openPopupTypeEdit.addEventListener("click", () => getProfileInfo());
popupTypeForm.addEventListener("submit", handleFormSubmit);
// < --- listener popup type new card --- >
openPopupAddNewCardButton.addEventListener("click", () =>
  openPopup(popupTypeNewCard)
);
popupTypeNewCardForm.addEventListener("submit", addCard);

// < --- listener popup type image --- >
cardImage.addEventListener("click", () => runOpenImage(popupTypeImage));

// < --- listener popup close --- >
popups.forEach((popup) => {
  const popupCloseButton = popup.querySelector(".popup__close");
  popupCloseButton.addEventListener("click", () => closePopup(popup));
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
  });
});

// < --- input profile info --- >
