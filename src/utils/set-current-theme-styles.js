export function setCurrentThemeStyles(currentTheme) {
  const headerPage = document.querySelector("#header-page");
  const themeNameInput = document.querySelector("#theme-name-input");
  const newThemeFormButton = document.querySelector("#new-theme-form-button");

  headerPage.style.backgroundColor = currentTheme.colors.primary;
  themeNameInput.style.border = `2px solid ${currentTheme.colors.primary}`;
  newThemeFormButton.style.backgroundColor = currentTheme.colors.primary;

  document.querySelector("#primary-color-input").value =
    currentTheme.colors.primary;
  document.querySelector("#secondary-color-input").value =
    currentTheme.colors.secondary;
  document.querySelector("#success-color-input").value =
    currentTheme.colors.success;
  document.querySelector("#danger-color-input").value =
    currentTheme.colors.danger;
  document.querySelector("#warning-color-input").value =
    currentTheme.colors.warning;
}
