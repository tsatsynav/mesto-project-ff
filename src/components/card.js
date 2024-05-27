/* < --- VARIABLES --- >*/
/* < --- template --- >*/
const cardTemplate = document.querySelector("#card-template").content;
export const placesList = document.querySelector(".places__list");

// -----------------------------------------------------------------------------------

/* < --- BUILD CARD --- >*/
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

/* < --- DELETE CARD --- >*/
export function runDeleteButton(item) {
  item.remove();
}

/* < --- LIKE CARD --- >*/
export function runCardLikeButton(event) {
  const runButton = event.target;
  runButton.classList.toggle("card__like-button_is-active");
}
