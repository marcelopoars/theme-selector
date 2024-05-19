export async function fetchThemes(query = "") {
  const url = "http://localhost:3000/themes";

  const string = query ? `${url}?q=${query}` : url;

  try {
    const response = await fetch(string);
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
