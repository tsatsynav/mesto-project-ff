/* < --- IMPORT JS --- >*/
import { profileTitle } from "../index.js";
import { profileDescription } from "../index.js";
import { popupInputTypeName } from "../index.js";
import { popupInputTypeDescription } from "../index.js";
import { openPopup } from "./popup.js";
import { closePopup } from "./popup.js";
import { popupTypeEdit } from "../index.js";

// -----------------------------------------------------------------------------------

// < --- SET PROFILE INFO --- >
export function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTypeName.value;
  profileDescription.textContent = popupInputTypeDescription.value;
  closePopup(popupTypeEdit);
}

// -----------------------------------------------------------------------------------

// < --- GET PROFILE INFO --- >
export function getProfileInfo() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
  openPopup(popupTypeEdit);
}
