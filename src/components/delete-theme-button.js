import { deleteTheme } from "../utils/delete-theme.js";

export function renderDeleteThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.danger;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Deletar";

  button.addEventListener("click", () => deleteTheme(theme.id));

  return button;
}
