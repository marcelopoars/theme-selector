import { themes } from "../mock/themes.js";

export function renderThemeList() {
  const themeListElement = document.querySelector("#theme-list");

  themeListElement.innerHTML = "";

  themes.forEach((theme) => {
    const li = document.createElement("li");

    li.style.backgroundColor = theme.colors.primary
    li.style.fontWeight = 700

    li.textContent = theme.name;
    themeListElement.appendChild(li);
  });

  console.log(themeListElement);
}
