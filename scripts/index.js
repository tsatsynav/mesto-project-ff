// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

function buildCard(data) {
  const newCardFromTemplate = cardTemplate
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = newCardFromTemplate.querySelector(".card__image");
  const cardTitle = newCardFromTemplate.querySelector(".card__title");
  const cardDeleteButton = newCardFromTemplate.querySelector(
    ".card__delete-button"
  );
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardDeleteButton.addEventListener("click", runDeleteButton);
  placesList.prepend(newCardFromTemplate);
  return newCardFromTemplate;
}

// @todo: Функция удаления карточки
function runDeleteButton(event) {
  const runDeleteCardBtn = event.target;
  runDeleteCardBtn.closest(".card").remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(buildCard);
