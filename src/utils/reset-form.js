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
}
