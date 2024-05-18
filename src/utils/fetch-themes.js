export async function fetchThemes() {
  try {
    const response = await fetch("http://localhost:3000/themes");
    if (!response.ok) {
      throw new Error(
        "Erro ao buscar os temas. Código de status: " + response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os temas:", error.message);
    return null;
  }
}
