import { themes } from "../mock/themes.js";

const defaultTheme = themes.find((theme) => theme.id === 1);

const userThemes = loadUserThemesFromLocalStorage() || themes;

function saveUserThemesToLocalStorage() {
  localStorage.setItem("themes", JSON.stringify(userThemes));
}

function loadUserThemesFromLocalStorage() {
  const savedThemes = localStorage.getItem("themes");
  return savedThemes ? JSON.parse(savedThemes) : null;
}

const headerPage = document.querySelector("#header-page");
headerPage.style.backgroundColor = defaultTheme.colors.primary;

document
  .querySelector("#new-theme-form")
  .addEventListener("submit", addNewTheme);

document.querySelector("#primary-color-input").value =
  defaultTheme.colors.primary;
document.querySelector("#secondary-color-input").value =
  defaultTheme.colors.secondary;
document.querySelector("#success-color-input").value =
  defaultTheme.colors.success;
document.querySelector("#danger-color-input").value =
  defaultTheme.colors.danger;
document.querySelector("#warning-color-input").value =
  defaultTheme.colors.warning;

const newThemeFormButton = document.querySelector("#new-theme-form-button");
newThemeFormButton.style.backgroundColor = defaultTheme.colors.primary;

function setCurrentTheme(theme = defaultTheme) {
  console.log(theme.name);
}

function renderThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Selecionar tema";
  button.addEventListener("click", () => setCurrentTheme(theme));

  return button;
}

function renderThemeItem(theme) {
  const themeWrapper = document.createElement("li");

  themeWrapper.style.border = `2px solid ${theme.colors.primary}`;
  themeWrapper.style.padding = "1.5rem";

  if (theme.id === defaultTheme.id) {
    themeWrapper.style.opacity = 0.5;
    themeWrapper.style.pointerEvents = "none";
    themeWrapper.style.userSelect = "none";
  }

  const title = document.createElement("h3");
  title.style.marginBottom = "1rem";
  title.textContent = theme.name;

  themeWrapper.appendChild(title);

  const colorKeys = Object.keys(theme.colors);

  console.log(colorKeys);

  colorKeys.forEach((colorKey) => {
    const colorSquare = document.createElement("span");
    colorSquare.classList.add("colorSquare");
    colorSquare.style.backgroundColor = theme.colors[colorKey];
    themeWrapper.appendChild(colorSquare);
  });

  const button = renderThemeButton(theme);
  themeWrapper.appendChild(button);

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
    id: themes.length + 1,
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
    defaultTheme.colors.primary;
  document.getElementById("secondary-color-input").value =
    defaultTheme.colors.secondary;
  document.getElementById("success-color-input").value =
    defaultTheme.colors.success;
  document.getElementById("danger-color-input").value =
    defaultTheme.colors.danger;
  document.getElementById("warning-color-input").value =
    defaultTheme.colors.warning;

  renderThemeList();
  saveUserThemesToLocalStorage();

  console.log(userThemes);
}
