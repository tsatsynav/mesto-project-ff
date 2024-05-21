/* < --- SINGLE CARD JS --- >*/
import { initialCards } from "./list-of-cards.js";
import { cardTemplate } from "../index.js";
import { popupTypeImage } from "../index.js";
import { popupTypeImageImage } from "../index.js";
import { popupTypeImageCaption } from "../index.js";
import { openPopup } from "./popup.js";
import { closePopup } from "./popup.js";
import { popupTypeNewCard } from "../index.js";
import { popupInputNewCardName } from "../index.js";
import { popupInputNewCardUrl } from "../index.js";
import { placesList } from "../index.js";

/* < --- BUILD CARD JS --- >*/

export function buildCard(item, deleteFunction, likeFunction, openFunction) {
  const newCardFromTemplate = cardTemplate
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = newCardFromTemplate.querySelector(".card__image");
  const cardTitle = newCardFromTemplate.querySelector(".card__title");
  const cardDeleteButton = newCardFromTemplate.querySelector(
    ".card__delete-button"
  );
  const cardLikeButton =
    newCardFromTemplate.querySelector(".card__like-button");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardDeleteButton.addEventListener("click", () =>
    deleteFunction(newCardFromTemplate)
  );
  cardLikeButton.addEventListener("click", () => likeFunction(event));
  cardImage.addEventListener("click", () => openFunction(item));

  return newCardFromTemplate;
}

/* < --- ADD NEW CARD JS --- >*/
export function addCard(event) {
  event.preventDefault();
  const cardName = popupInputNewCardName.value;
  const cardLink = popupInputNewCardUrl.value;
  buildTemplateCard({ name: cardName, link: cardLink });
  event.target.reset();
  closePopup(popupTypeNewCard);
}

export function buildTemplateCard(item) {
  const newCard = buildCard(
    item,
    runDeleteButton,
    runCardLikeButton,
    runOpenImage
  );
  placesList.prepend(newCard);
}

/* < --- DELETE CARD JS --- >*/
export function runDeleteButton(item) {
  item.remove();
}

/* < --- LIKE CARD JS --- >*/
export function runCardLikeButton(event) {
  const runButton = event.target;
  runButton.classList.toggle("card__like-button_is-active");
}

/* < --- OPEN IMAGE POPUP JS --- >*/
export function runOpenImage(item) {
  popupTypeImageImage.src = item.link;
  popupTypeImageImage.alt = item.name;
  popupTypeImageCaption.textContent = item.name;
  openPopup(popupTypeImage);
}
