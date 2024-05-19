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

// ---------------------------------------------------
// < --- global popup --- >
const popups = document.querySelectorAll(".popup");

// < --- profile section --- >
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const openPopupTypeEdit = document.querySelector(".profile__edit-button");
const openPopupAddNewCardButton = document.querySelector(
  ".profile__add-button"
);

// < --- popup type edit --- >
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeContent = popupTypeEdit.querySelector(".popup__content");
const popupTypeForm = popupTypeContent.querySelector(".popup__form");
const popupInputTypeName = popupTypeForm.querySelector(
  ".popup__input_type_name"
);
const popupInputTypeDescription = popupTypeForm.querySelector(
  ".popup__input_type_description"
);
const saveProfileChangesButton = popupTypeForm.querySelector(".button");

// < --- popup type new card --- >
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeNewCardContent =
  popupTypeNewCard.querySelector(".popup__content");
const popupTypeNewCardForm =
  popupTypeNewCardContent.querySelector(".popup__form");
const popupInputNewCardName = popupTypeNewCardForm.querySelector(
  ".popup__input_type_card-name"
);
const popupInputNewCardUrl = popupTypeNewCardForm.querySelector(
  ".popup__input_type_url"
);
const saveNewCardButton = popupTypeNewCardForm.querySelector(".button");

// < --- popup type image --- >
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageContent = popupTypeImage.querySelector(".popup__content");
const popupTypeImageImage =
  popupTypeImageContent.querySelector(".popup__image");
const popupTypeImageCaption = popupTypeImage.querySelector(".popup__caption");

// < --- EVENT LISTENERS --- >
// < --- listener open popup --- >
openPopupTypeEdit.addEventListener("click", () => openPopup(popupTypeEdit));
openPopupAddNewCardButton.addEventListener("click", () =>
  openPopup(popupTypeNewCard)
);

// < --- listener profile popup --- >
saveProfileChangesButton.addEventListener("click", (event) => {
  event.preventDefault();
  inputProfileInfo();
  closePopup(popupTypeEdit);
});

// < --- FUNCTIONS --- >
// < --- open popup --- >
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
}

// < --- close popup --- >
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}

// < --- input profile info --- >
function inputProfileInfo() {
  profileTitle.textContent = popupInputTypeName.value;
  profileDescription.textContent = popupInputTypeDescription.value;
  openPopup(popupTypeEdit);
}

function addCard(event) {
  event.preventDefault();
  const cardName = popupInputNewCardName.value;
  const cardLink = popupInputNewCardUrl.value;
  buildTemplateCard({ name: cardName, link: cardLink });
  closePopup(popupTypeNewCard);
}

//< --- open image --- >
function openImage(cardData) {
  popupTypeImageImage.src = cardData.link;
  popupTypeImageImage.alt = cardData.name;
  popupTypeImageCaption.textContent = cardData.name;
  openPopup(popupTypeImage);
}

// < --- OTHERS --- >
popups.forEach((popup) => {
  const popupCloseButton = popup.querySelector(".popup__close");
  popupCloseButton.addEventListener("click", () => closePopup(popup));
});
