const defaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
  },
};

export function setCurrentThemeStyles(currentTheme) {
  const colors = currentTheme ? currentTheme.colors : defaultTheme.colors;

  const headerPage = document.querySelector("#header-page");
  const themeNameInput = document.querySelector("#theme-name-input");
  const newThemeFormButton = document.querySelector("#new-theme-form-button");

  const filterThemeInput = document.querySelector("#filter-theme-input");
  const filterThemesButton = document.querySelector("#filter-themes-button");

  headerPage.style.backgroundColor = colors.primary;

  themeNameInput.style.border = `2px solid ${colors.primary}`;
  newThemeFormButton.style.backgroundColor = colors.primary;

  filterThemeInput.style.border = `2px solid ${colors.primary}`;
  filterThemesButton.style.backgroundColor = colors.primary;
  filterThemesButton.style.fontSize = "1.125rem";

  const primaryColorIputn = document.querySelector("#primary-color-input");
  primaryColorIputn.value = colors.primary;

  const secondaryColorIputn = document.querySelector("#secondary-color-input");
  secondaryColorIputn.value = colors.secondary;

  const successColorIputn = document.querySelector("#success-color-input");
  successColorIputn.value = colors.success;

  const dangerColorIputn = document.querySelector("#danger-color-input");
  dangerColorIputn.value = colors.danger;

  const warningColorIputn = document.querySelector("#warning-color-input");
  warningColorIputn.value = colors.warning;
}
