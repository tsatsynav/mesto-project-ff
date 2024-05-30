/* < --- VARIABLES --- >*/
/* < --- template --- >*/
const cardTemplate = document.querySelector("#card-template").content;

// -----------------------------------------------------------------------------------

// < --- FUNCTIONALITY --- >
/* < --- build card --- >*/
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

/* < --- delete card --- >*/
export function runCardDeleteButton(item) {
  item.remove();
}

/* < --- like card --- >*/
export function runCardLikeButton(event) {
  const runButton = event.target;
  runButton.classList.toggle("card__like-button_is-active");
}
