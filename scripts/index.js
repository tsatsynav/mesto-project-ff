// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

function buildCard(item, deleteFunction) {
  const newCardFromTemplate = cardTemplate
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = newCardFromTemplate.querySelector(".card__image");
  const cardTitle = newCardFromTemplate.querySelector(".card__title");
  const cardDeleteButton = newCardFromTemplate.querySelector(
    ".card__delete-button"
  );
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  cardDeleteButton.addEventListener("click", () =>
    deleteFunction(newCardFromTemplate)
  );
  return newCardFromTemplate;
}

// @todo: Функция удаления карточки
function runDeleteButton(item) {
  item.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.prepend(buildCard(item, runDeleteButton));
});
