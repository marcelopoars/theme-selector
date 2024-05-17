export function setEditableThemeData(theme) {
  document.querySelector("#theme-name-input").value = theme.name;
  document.getElementById("primary-color-input").value = theme.colors.primary;
  document.getElementById("secondary-color-input").value =
    theme.colors.secondary;
  document.getElementById("success-color-input").value = theme.colors.success;
  document.getElementById("danger-color-input").value = theme.colors.danger;
  document.getElementById("warning-color-input").value = theme.colors.warning;
}
