import { resetForm } from "../components/theme-buttons.js";
import { renderThemeItem } from "../components/theme-item.js";
import { fetchThemes } from "../utils/fetch-themes.js";
import { setCurrentThemeStyles } from "../utils/set-current-theme-styles.js";
import { submitForm } from "../utils/submit-form.js";

const themeListElement = document.querySelector("#theme-list");

const newThemeForm = document.querySelector("#new-theme-form");
newThemeForm.addEventListener("submit", submitForm);

const resetFormButton = document.querySelector("#reset-form-button");
resetFormButton.addEventListener("click", () => resetForm(currentTheme));

let currentTheme = null;

export function getCurrentTheme() {
  return currentTheme;
}

export async function renderThemeList(theme) {
  themeListElement.innerHTML = "";

  const themes = await fetchThemes();

  currentTheme = theme || themes[0];

  themes.forEach((theme) => {
    const themeItem = renderThemeItem(theme);
    themeListElement.appendChild(themeItem);
  });

  setCurrentThemeStyles(currentTheme);
}

renderThemeList();
