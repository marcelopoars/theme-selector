import { themes } from "../mock/themes.js";

console.log(themes[0].colors);

function renderButton(colors) {
  const button = document.createElement('button')
  button.style.backgroundColor = colors.primary
  button.textContent = 'Selecionar tema'

  return button
}

function renderThemeItem(theme) {
  const themeWrapper = document.createElement("li");
  themeWrapper.style.border = `2px solid ${theme.colors.primary}`;
  themeWrapper.style.padding = "1.5rem";

  const title = document.createElement("h3");
  title.style.marginBottom = '1rem'
  title.textContent = theme.name;
  
  const button = renderButton(theme.colors)
  
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
