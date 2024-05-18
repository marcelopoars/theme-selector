import { renderThemeList } from "../app/app.js";

export async function createNewTheme(event) {
  event.preventDefault();

  const [
    themeName,
    primaryColor,
    secondaryColor,
    successColor,
    dangerColor,
    warningColor,
  ] = document.getElementsByTagName("input");

  const newTheme = {
    id: new Date().toISOString(),
    name: themeName.value,
    colors: {
      primary: primaryColor.value,
      secondary: secondaryColor.value,
      success: successColor.value,
      danger: dangerColor.value,
      warning: warningColor.value,
    },
  };

  try {
    const response = await fetch("http://localhost:3000/themes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTheme),
    });

    if (!response.ok) {
      throw new Error(
        "Erro ao adicionar tema. Código de status: " + response.status
      );
    }

    renderThemeList();

    resetForm(currentTheme);
  } catch (error) {
    console.error("Erro ao adicionar tema:", error);
  }
}
