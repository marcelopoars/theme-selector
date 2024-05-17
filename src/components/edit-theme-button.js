import { setEditableThemeData } from "../utils/set-editable-theme-data.js";

export function renderEditThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Editar tema";

  button.addEventListener("click", () => {
    document.querySelector("#new-theme-form-button").textContent = "Salvar";
    setEditableThemeData(theme);

    console.log(theme.name);
    console.log(theme.id);
  });

  return button;
}
