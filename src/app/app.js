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

export function addNewTheme(event) {
  event.preventDefault();

  const themeName = document.querySelector("#theme-name-input").value;
  const primaryColor = document.querySelector("#primary-color-input").value;
  const secondaryColor = document.querySelector("#secondary-color-input").value;
  const successColor = document.querySelector("#success-color-input").value;
  const dangerColor = document.querySelector("#danger-color-input").value;
  const warningColor = document.querySelector("#warning-color-input").value;

  const newTheme = {
    id: new Date().toISOString(),
    name: themeName,
    colors: {
      primary: primaryColor,
      secondary: secondaryColor,
      success: successColor,
      danger: dangerColor,
      warning: warningColor,
    },
  };

  userThemes.push(newTheme);

  resetForm(currentTheme);
  renderThemeList();
  saveUserThemesToLocalStorage();
}

export function setCurrentTheme(theme) {
  console.log("theme id: ", theme.id);
  currentTheme = theme;

  setCurrentThemeStyles(currentTheme);
  renderThemeList();
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
