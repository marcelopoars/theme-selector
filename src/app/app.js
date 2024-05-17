import { renderThemeItem } from "../components/theme-item.js";
import { themes } from "../mock/themes.js";

export function loadUserThemesFromLocalStorage() {
  const savedThemes = localStorage.getItem("themes");
  return savedThemes ? JSON.parse(savedThemes) : null;
}

let userThemes = loadUserThemesFromLocalStorage() || themes;

export function saveUserThemesToLocalStorage() {
  localStorage.setItem("themes", JSON.stringify(userThemes));
}

let currentTheme = userThemes[0] || themes[0];

function setCurrentThemeStyles() {
  const headerPage = document.querySelector("#header-page");
  const themeNameInput = document.querySelector("#theme-name-input");
  const newThemeFormButton = document.querySelector("#new-theme-form-button");

  headerPage.style.backgroundColor = currentTheme.colors.primary;
  themeNameInput.style.border = `2px solid ${currentTheme.colors.primary}`;
  newThemeFormButton.style.backgroundColor = currentTheme.colors.primary;

  document
    .querySelector("#new-theme-form")
    .addEventListener("submit", addNewTheme);

  document.querySelector("#primary-color-input").value =
    currentTheme.colors.primary;
  document.querySelector("#secondary-color-input").value =
    currentTheme.colors.secondary;
  document.querySelector("#success-color-input").value =
    currentTheme.colors.success;
  document.querySelector("#danger-color-input").value =
    currentTheme.colors.danger;
  document.querySelector("#warning-color-input").value =
    currentTheme.colors.warning;
}

setCurrentThemeStyles();

function addNewTheme(event) {
  event.preventDefault();

  const themeName = document.querySelector("#theme-name-input").value;
  const primaryColor = document.getElementById("primary-color-input").value;
  const secondaryColor = document.getElementById("secondary-color-input").value;
  const successColor = document.getElementById("success-color-input").value;
  const dangerColor = document.getElementById("danger-color-input").value;
  const warningColor = document.getElementById("warning-color-input").value;

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

  document.querySelector("#theme-name-input").value = "";
  document.getElementById("primary-color-input").value =
    currentTheme.colors.primary;
  document.getElementById("secondary-color-input").value =
    currentTheme.colors.secondary;
  document.getElementById("success-color-input").value =
    currentTheme.colors.success;
  document.getElementById("danger-color-input").value =
    currentTheme.colors.danger;
  document.getElementById("warning-color-input").value =
    currentTheme.colors.warning;

  renderThemeList();
  saveUserThemesToLocalStorage();
}

export function setCurrentTheme(theme) {
  console.log("theme id: ", theme.id);
  currentTheme = theme;

  setCurrentThemeStyles();
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
