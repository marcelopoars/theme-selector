export async function updateTheme(id) {
  const url = "http://localhost:3000/themes";

  const [
    themeName,
    primaryColor,
    secondaryColor,
    successColor,
    dangerColor,
    warningColor,
  ] = document.getElementsByTagName("input");

  const editedTheme = {
    id,
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
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTheme),
    });

    if (!response.ok) {
      throw new Error(
        "Erro ao atualizar tema. Código de status: " + response.status
      );
    }
  } catch (error) {
    console.error("Erro ao atualizar tema:", error);
  }
}
