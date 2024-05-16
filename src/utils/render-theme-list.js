import { themes } from "../mock/themes.js";

let currentTheme = getThemeById(1);

function getThemeById(id) {
  return themes.find((theme) => theme.id === id);
}

let userThemes = loadUserThemesFromLocalStorage() || themes;

function saveUserThemesToLocalStorage() {
  localStorage.setItem("themes", JSON.stringify(userThemes));
}

function loadUserThemesFromLocalStorage() {
  const savedThemes = localStorage.getItem("themes");
  return savedThemes ? JSON.parse(savedThemes) : null;
}

const headerPage = document.querySelector("#header-page");
const themeNameInput = document.querySelector("#theme-name-input");

const newThemeFormButton = document.querySelector("#new-theme-form-button");

function setCurrentThemeStyles(theme) {
  headerPage.style.backgroundColor = theme.colors.primary;
  themeNameInput.style.border = `2px solid ${theme.colors.primary}`;
  newThemeFormButton.style.backgroundColor = theme.colors.primary;
}

setCurrentThemeStyles(currentTheme);

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

function setCurrentTheme(theme) {
  currentTheme = getThemeById(theme.id);

  console.log("currentTheme", currentTheme);

  setCurrentThemeStyles(theme);
  renderThemeList()
}

function deleteTheme(id) {
  userThemes = userThemes.filter((theme) => theme.id !== id);
  saveUserThemesToLocalStorage();
  renderThemeList();
}

function renderSelectThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Selecionar tema";
  button.addEventListener("click", () => setCurrentTheme(theme));

  return button;
}

function renderdeleteThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.danger;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Deletar tema";
  button.addEventListener("click", () => deleteTheme(theme.id));

  return button;
}

function renderThemeItem(theme) {
  const themeWrapper = document.createElement("li");

  themeWrapper.style.border = `2px solid ${theme.colors.primary}`;
  themeWrapper.style.padding = "1.5rem";

  if (theme.id === currentTheme.id) {
    themeWrapper.style.opacity = 0.5;
    themeWrapper.style.pointerEvents = "none";
    themeWrapper.style.userSelect = "none";
  }

  const title = document.createElement("h3");
  title.style.marginBottom = "1rem";
  title.textContent = theme.name;

  themeWrapper.appendChild(title);

  const colorKeys = Object.keys(theme.colors);

  colorKeys.forEach((colorKey) => {
    const colorSquare = document.createElement("span");
    colorSquare.classList.add("colorSquare");
    colorSquare.style.backgroundColor = theme.colors[colorKey];
    themeWrapper.appendChild(colorSquare);
  });

  const selectThemeButton = renderSelectThemeButton(theme);
  themeWrapper.appendChild(selectThemeButton);

  const deleteThemeButton = renderdeleteThemeButton(theme);
  themeWrapper.appendChild(deleteThemeButton);

  return themeWrapper;
}

export function renderThemeList() {
  const themeListElement = document.querySelector("#theme-list");

  themeListElement.innerHTML = "";

  userThemes.forEach((theme) => {
    const themeItem = renderThemeItem(theme);
    themeListElement.appendChild(themeItem);
  });
}

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
