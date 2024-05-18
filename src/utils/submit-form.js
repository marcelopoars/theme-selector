import { getCurrentTheme, renderThemeList } from "../app/app.js";
import { getSubmitType, resetForm } from "../components/theme-buttons.js";
import { createNewTheme } from "./create-new-theme.js";
import { getSelectedThemeForUpdate } from "./set-editable-theme-data.js";
import { updateTheme } from "./update-theme.js";

export async function submitForm(event) {
  event.preventDefault();

  const submitType = getSubmitType();
  const currentTheme = getCurrentTheme();
  const selectedThemeForUpdate = getSelectedThemeForUpdate();

  if (submitType === "POST") {
    await createNewTheme();
  }

  if (submitType === "PUT") {
    await updateTheme(selectedThemeForUpdate);
  }

  renderThemeList(currentTheme);
  resetForm(currentTheme);
}
