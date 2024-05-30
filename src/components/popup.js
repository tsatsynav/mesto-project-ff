// < --- FUNCTIONALITY --- >
// < --- open popup --- >
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByKeyboard);
}

// < --- close popup --- >
export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByKeyboard);
}

// < --- keyboard popup --- >
function closePopupByKeyboard(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened");
    closePopup(popupOpened);
  }
}
