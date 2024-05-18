import { renderThemeItem } from "../components/theme-item.js";
import { createNewTheme } from "../utils/create-new-theme.js";
import { fetchThemes } from "../utils/fetch-themes.js";
import { setCurrentThemeStyles } from "../utils/set-current-theme-styles.js";

const themeListElement = document.querySelector("#theme-list");
const newThemeForm = document.querySelector("#new-theme-form");

newThemeForm.addEventListener("submit", createNewTheme);

export function setCurrentTheme(theme) {
  const currentTheme = theme;

  setCurrentThemeStyles(currentTheme);
  renderThemeList(currentTheme);
}

export async function renderThemeList(theme) {
  themeListElement.innerHTML = "";

  const themes = await fetchThemes();

  const currentTheme = theme || themes[0];

  setCurrentThemeStyles(currentTheme);
  
  themes.forEach((theme) => {
    const themeItem = renderThemeItem(theme, currentTheme);
    themeListElement.appendChild(themeItem);
  });
}

renderThemeList();
