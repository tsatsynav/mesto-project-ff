// < --- OPEN POPUP --- >
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByKeyboard);
}

// -----------------------------------------------------------------------------------

// < --- CLOSE POPUP --- >
export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByKeyboard);
}

// -----------------------------------------------------------------------------------

// < --- KEYBOARD POPUP FUNCTIONALITY --- >
function closePopupByKeyboard(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened");
    closePopup(popupOpened);
  }
}
