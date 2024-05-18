import { getCurrentTheme } from "../app/app.js";
import {
  renderDeleteThemeButton,
  renderEditThemeButton,
  renderSelectThemeButton,
} from "./theme-buttons.js";

export function renderThemeItem(theme) {
  const themeWrapper = document.createElement("li");

  themeWrapper.style.border = `2px solid ${theme.colors.primary}`;
  themeWrapper.style.padding = "1.5rem";

  const currentTheme = getCurrentTheme();

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

  const editThemeButton = renderEditThemeButton(theme);
  themeWrapper.appendChild(editThemeButton);

  const deleteThemeButton = renderDeleteThemeButton(theme);
  themeWrapper.appendChild(deleteThemeButton);

  return themeWrapper;
}
