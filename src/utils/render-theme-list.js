import { themes } from "../mock/themes.js";

const defaultTheme =  {
  id: 1,
  name: "Tema Azul",
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
  },
}

const headerPage = document.querySelector('#header-page')
headerPage.style.backgroundColor = defaultTheme.colors.primary

document.querySelector("#new-theme-form").addEventListener("submit", addNewTheme);

document.querySelector('#primary-color-input').value = defaultTheme.colors.primary
document.querySelector('#secondary-color-input').value = defaultTheme.colors.secondary
document.querySelector('#success-color-input').value = defaultTheme.colors.success
document.querySelector('#danger-color-input').value = defaultTheme.colors.danger
document.querySelector('#warning-color-input').value = defaultTheme.colors.warning

const newThemeFormButton = document.querySelector('#new-theme-form-button')
newThemeFormButton.style.backgroundColor = defaultTheme.colors.primary

function renderThemeButton(colors) {
  const button = document.createElement("button");
  button.style.backgroundColor = colors.primary;
  button.textContent = "Selecionar tema";
  button.addEventListener("click", () => console.log(colors.primary));

  return button;
}

function renderThemeItem(theme) {
  const themeWrapper = document.createElement("li");
  themeWrapper.style.border = `2px solid ${theme.colors.primary}`;
  themeWrapper.style.padding = "1.5rem";

  const title = document.createElement("h3");
  title.style.marginBottom = "1rem";
  title.textContent = theme.name;

  const button = renderThemeButton(theme.colors);

  themeWrapper.appendChild(title);
  themeWrapper.appendChild(button);

  return themeWrapper;
}

export function renderThemeList() {
  const themeListElement = document.querySelector("#theme-list");

  themeListElement.innerHTML = "";

  themes.forEach((theme) => {
    const themeItem = renderThemeItem(theme);
    themeListElement.appendChild(themeItem);
  });
}

function addNewTheme(event) {
  event.preventDefault();

  const themeName = document.querySelector("#theme-name-input").value;
  const primaryColor = document.getElementById('primary-color-input').value;
  const secondaryColor = document.getElementById('secondary-color-input').value;
  const successColor = document.getElementById('success-color-input').value;
  const dangerColor = document.getElementById('danger-color-input').value;
  const warningColor = document.getElementById('warning-color-input').value;

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
  }

  themes.push(newTheme);

  document.querySelector("#theme-name-input").value = ''
  document.getElementById('primary-color-input').value = defaultTheme.colors.primary
  document.getElementById('secondary-color-input').value = defaultTheme.colors.secondary
  document.getElementById('success-color-input').value = defaultTheme.colors.success
  document.getElementById('danger-color-input').value = defaultTheme.colors.danger
  document.getElementById('warning-color-input').value = defaultTheme.colors.warning

  renderThemeList();
  console.log(themes);
}
