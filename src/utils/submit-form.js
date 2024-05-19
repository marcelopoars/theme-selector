import { getCurrentTheme, renderThemeList } from "../app/app.js";
import { getSubmitType, resetForm } from "../components/theme-buttons.js";
import { createNewTheme } from "./crud/create-new-theme.js";
import { getSelectedThemeForUpdate } from "./set-editable-theme-data.js";
import { updateTheme } from "./crud/update-theme.js";

export async function submitForm(event) {
  event.preventDefault()

  const submitType = getSubmitType();
  const currentTheme = getCurrentTheme();
  const selectedThemeForUpdate = getSelectedThemeForUpdate();

  // Create new theme
  if (submitType === "POST") {
    await createNewTheme();
  }

  // Upadate theme
  if (submitType === "PUT") {
    await updateTheme(selectedThemeForUpdate);
  }

  renderThemeList(currentTheme);
  resetForm(currentTheme);
}
