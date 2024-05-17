import { setCurrentTheme } from "../app/app.js";

export function renderSelectThemeButton(theme) {
  const button = document.createElement("button");
  button.style.backgroundColor = theme.colors.primary;
  button.style.display = "block";
  button.style.marginTop = "1rem";
  button.textContent = "Selecionar tema";
  
  button.addEventListener("click", () => {
    document.querySelector("#theme-name-input").value = "";
    document.querySelector('#new-theme-form-button').textContent = "Adicionar"
    setCurrentTheme(theme)
  });

  return button;
}
