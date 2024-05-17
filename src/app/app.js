import { renderThemeItem } from "../components/theme-item.js";
import { themes } from "../mock/themes.js";
import { resetForm } from "../utils/reset-form.js";
import { setCurrentThemeStyles } from "../utils/set-current-theme-styles.js";

export function loadUserThemesFromLocalStorage() {
  const savedThemes = localStorage.getItem("themes");
  return savedThemes ? JSON.parse(savedThemes) : null;
}

let userThemes = loadUserThemesFromLocalStorage() || themes;

export function saveUserThemesToLocalStorage() {
  localStorage.setItem("themes", JSON.stringify(userThemes));
}

let currentTheme = userThemes[0] || themes[0];

setCurrentThemeStyles(currentTheme);

export function setCurrentTheme(theme) {
  currentTheme = theme;

  setCurrentThemeStyles(currentTheme);
  renderThemeList();
}

document.querySelector("#new-theme-form").addEventListener("submit", addNewTheme);

export function addNewTheme(event) {
  event.preventDefault();

  const [
    themeName,
    primaryColor,
    secondaryColor,
    successColor,
    dangerColor,
    warningColor,
  ] = document.getElementsByTagName("input");

  const newTheme = {
    id: new Date().toISOString(),
    name: themeName.value,
    colors: {
      primary: primaryColor.value,
      secondary: secondaryColor.value,
      success: successColor.value,
      danger: dangerColor.value,
      warning: warningColor.value,
    },
  };

  userThemes.push(newTheme);

  resetForm(currentTheme);
  renderThemeList();
  saveUserThemesToLocalStorage();
}

export function deleteTheme(id) {
  userThemes = userThemes.filter((theme) => theme.id !== id);
  saveUserThemesToLocalStorage();
  renderThemeList();
}

export function renderThemeList() {
  const themeListElement = document.querySelector("#theme-list");

  themeListElement.innerHTML = "";

  userThemes.forEach((theme) => {
    const themeItem = renderThemeItem(theme, currentTheme);
    themeListElement.appendChild(themeItem);
  });
}

renderThemeList();
