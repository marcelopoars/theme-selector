export function setCurrentThemeStyles(selectedTheme) {
  const headerPage = document.querySelector("#header-page");
  const themeNameInput = document.querySelector("#theme-name-input");
  const newThemeFormButton = document.querySelector("#new-theme-form-button");

  headerPage.style.backgroundColor = selectedTheme.colors.primary;
  themeNameInput.style.border = `2px solid ${selectedTheme.colors.primary}`;
  newThemeFormButton.style.backgroundColor = selectedTheme.colors.primary;

  document.querySelector("#primary-color-input").value =
    selectedTheme.colors.primary;
  document.querySelector("#secondary-color-input").value =
    selectedTheme.colors.secondary;
  document.querySelector("#success-color-input").value =
    selectedTheme.colors.success;
  document.querySelector("#danger-color-input").value =
    selectedTheme.colors.danger;
  document.querySelector("#warning-color-input").value =
    selectedTheme.colors.warning;
}
