import { getCurrentTheme, renderThemeList } from "../app/app.js";
import { deleteTheme } from "../utils/delete-theme.js";
import { setEditableThemeData } from "../utils/set-editable-theme-data.js";

let submitType = "POST";
const newThemeFormButton = document.querySelector("#new-theme-form-button");

export function getSubmitType() {
  return submitType;
}

export function renderSelectThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Selecionar tema";

  button.addEventListener("click", () => {
    renderThemeList(theme);

    const currentTheme = getCurrentTheme();

    resetForm(currentTheme);
  });

  return button;
}

export function renderEditThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Editar";

  button.addEventListener("click", () => {
    submitType = "PUT";

    setEditableThemeData(theme);

    newThemeFormButton.textContent = "Salvar alterações";
  });

  return button;
}

export function renderDeleteThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.danger;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Deletar";

  button.addEventListener("click", async () => {
    await deleteTheme(theme.id);

    const currentTheme = getCurrentTheme();

    await renderThemeList(currentTheme);

    resetForm(currentTheme);
  });

  return button;
}

export function resetForm(currentTheme) {
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

  submitType = "POST";
  newThemeFormButton.textContent = "Adicionar";
}
