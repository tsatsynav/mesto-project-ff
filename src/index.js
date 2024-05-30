/* < --- IMPORT CSS --- >*/
import "./index.css";

// -----------------------------------------------------------------------------------

/* < --- IMPORT JS --- >*/
/* < --- for initials card --- >*/
import { initialCards } from "./components/list-of-cards.js";

/* < --- for card creation --- >*/
import {
  buildCard,
  runCardDeleteButton,
  runCardLikeButton,
} from "./components/card.js";

/* < --- for popup functionality --- >*/
import { openPopup, closePopup } from "./components/popup.js";

/* < --- for profile functionality --- >*/
import {
  handleProfileFormSubmit,
  getProfileInfo,
} from "./components/profile.js";
// -----------------------------------------------------------------------------------

/* < --- VARIABLES --- >*/
/* < --- places list --- >*/
const placesList = document.querySelector(".places__list");

/* < --- global popups --- >*/
const popups = document.querySelectorAll(".popup");

/* < --- profile popup --- >*/
const openProfileEditPopup = document.querySelector(".profile__edit-button");

const profileEditForm = document.forms["edit-profile"];

/* < --- add new card popup --- >*/
const openNewCardPopupButton = document.querySelector(".profile__add-button");

const newCardPopup = document.querySelector(".popup_type_new-card");

const newCardForm = document.forms["new-place"];

const newCardNameInput = newCardForm.querySelector(
  ".popup__input_type_card-name"
);

const newCardUrlInput = newCardForm.querySelector(".popup__input_type_url");

/* < --- image popup --- >*/
const imagePopup = document.querySelector(".popup_type_image");

const imageContent = imagePopup.querySelector(".popup__image");

const imageCaption = imagePopup.querySelector(".popup__caption");

// -----------------------------------------------------------------------------------

// < --- FUNCTIONALITY --- >
/* < --- initial list of cards --- >*/
initialCards.forEach((item) => {
  placesList.prepend(
    buildCard(item, runCardDeleteButton, runCardLikeButton, runOpenImage)
  );
});

/* < --- add new card --- >*/
function buildTemplateCard(item) {
  const newCard = buildCard(
    item,
    runCardDeleteButton,
    runCardLikeButton,
    runOpenImage
  );
  placesList.prepend(newCard);
}

function addCard(event) {
  event.preventDefault();
  const cardName = newCardNameInput.value;
  const cardLink = newCardUrlInput.value;
  buildTemplateCard({ name: cardName, link: cardLink });
  event.target.reset();
  closePopup(newCardPopup);
}

/* < --- open image popup --- >*/
function runOpenImage(item) {
  imageContent.src = item.link;
  imageContent.alt = item.name;
  imageCaption.textContent = item.name;
  openPopup(imagePopup);
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
