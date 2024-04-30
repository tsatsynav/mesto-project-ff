// < --- CARD TEMPLATE --- >
const cardTemplate = document.querySelector("#card-template").content;
const newCardFromTemplate = cardTemplate.querySelector(".card");
const cardImage = newCardFromTemplate.querySelector(".card__image");
const cardDeleteButton = newCardFromTemplate.querySelector(".card__delete");
const cardDescription = newCardFromTemplate.querySelector(".card__description");
const cardTitle = cardDescription.querySelector(".card__title");
const cardLikeButton = cardDescription.querySelector(".card__like-button");

// < --- DOM VARIABLES --- >
// < --- BLOCKS VARIABLES --- >
// < --- global popup --- >
const popups = document.querySelectorAll(".popup");

// < --- profile section --- >
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const openPopupTypeEdit = document.querySelector(".profile__edit-button");
const openPopupAddNewCardButton = document.querySelector(
  ".profile__add-button"
);

// < --- places section --- >
const placesList = document.querySelector(".places__list");

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

// < --- listener of card --- >
function cardListener(card, cardData) {
  card
    .querySelector(".card__delete-button")
    .addEventListener("click", runDeleteButton);
  card
    .querySelector(".card__like-button")
    .addEventListener("click", runCardLikeButton);
  card.querySelector(".card__image").addEventListener("click", () => {
    openImage(cardData);
  });
}

// < --- listener add card button --- >
saveNewCardButton.addEventListener("click", addCard);

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

// < --- run like card button --- >
function runCardLikeButton(event) {
  const runButton = event.target;
  runButton.classList.toggle("card__like-button_is-active");
}

// < --- run delete card button --- >
function runDeleteButton(event) {
  const runButton = event.target;
  runButton.closest(".card").remove();
}

// < --- output cards --- >
initialCards.forEach(buildTemplateCard);

function buildTemplateCard(data) {
  const newCard = buildCard(data);
  console.log(newCard);
  placesList.prepend(newCard);
}

function buildCard(data) {
  const newCardFromTemplate = cardTemplate
    .querySelector(".card")
    .cloneNode(true);
  const cardImage = newCardFromTemplate.querySelector(".card__image");
  const cardTitle = newCardFromTemplate.querySelector(".card__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardListener(newCardFromTemplate, data);
  return newCardFromTemplate;
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
