import { resetForm } from "../components/theme-buttons.js";
import { renderThemeItem } from "../components/theme-item.js";
import { fetchThemes } from "../utils/fetch-themes.js";
import { setCurrentThemeStyles } from "../utils/set-current-theme-styles.js";
import { submitForm } from "../utils/submit-form.js";

const themeListElement = document.querySelector("#theme-list");

// CREATE and UPDATE theme
const newThemeForm = document.querySelector("#new-theme-form");
newThemeForm.addEventListener("submit", submitForm);

// Reset form
const resetFormButton = document.querySelector("#reset-form-button");
resetFormButton.addEventListener("click", () => resetForm(currentTheme));

// Filter theme by name
const filterThemeInput = document.querySelector("#filter-theme-input");

const filterThemesForm = document.querySelector("#filter-themes-form");
filterThemesForm.addEventListener("submit", filterThemes);

let currentTheme = null;
let filteredThemes = [];

export function getCurrentTheme() {
  return currentTheme;
}

const resetFilterFormButton = document.querySelector(
  "#reset-filter-form-button"
);
resetFilterFormButton.addEventListener("click", resetFIlterForm);

async function resetFIlterForm() {
  renderThemeList();
}

async function filterThemes(event) {
  event.preventDefault();

  const filterValue = filterThemeInput.value;

  filteredThemes = await fetchThemes(filterValue);

  themeListElement.innerHTML = "";

  if (filteredThemes.length === 0) {
    themeListElement.innerHTML = `
      <div>
        <p>Nenhum tema com este nome :(</p>
      </div>
    `;
  } else {
    filteredThemes.forEach((theme) => {
      const themeItem = renderThemeItem(theme);
      themeListElement.appendChild(themeItem);
    });
  }
}

export async function renderThemeList(theme) {
  themeListElement.innerHTML = "";

  const themes = await fetchThemes();

  currentTheme = theme || themes[0];

  setCurrentThemeStyles(currentTheme);

  if (themes.length === 0) {
    themeListElement.innerHTML = `
      <div>
        <p>Nenhum tema encontrado :(</p>
      </div>
    `;
  } else {
    themes.forEach((theme) => {
      const themeItem = renderThemeItem(theme);
      themeListElement.appendChild(themeItem);
    });
  }
}

renderThemeList();
