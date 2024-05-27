/* < --- IMPORT CSS --- >*/
import "./index.css";

// -----------------------------------------------------------------------------------

/* < --- IMPORT JS --- >*/
/* < --- for initials card --- >*/
import { initialCards } from "./components/list-of-cards.js";
import {
  placesList,
  buildCard,
  runDeleteButton,
  runCardLikeButton,
} from "./components/card.js";
import {
  newCardPopup,
  newCardNameInput,
  newCardUrlInput,
  closePopup,
  runOpenImage,
} from "./components/popup.js";
// -----------------------------------------------------------------------------------

/* < --- FUNCTIONS --- >*/
/* < --- initial list of cards --- >*/
initialCards.forEach((item) => {
  placesList.prepend(
    buildCard(item, runDeleteButton, runCardLikeButton, runOpenImage)
  );
});

/* < --- add new card --- >*/
function buildTemplateCard(item) {
  const newCard = buildCard(
    item,
    runDeleteButton,
    runCardLikeButton,
    runOpenImage
  );
  placesList.prepend(newCard);
}

export function addCard(event) {
  event.preventDefault();
  const cardName = newCardNameInput.value;
  const cardLink = newCardUrlInput.value;
  buildTemplateCard({ name: cardName, link: cardLink });
  event.target.reset();
  closePopup(newCardPopup);
}
