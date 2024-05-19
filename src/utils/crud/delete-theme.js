export async function deleteTheme(id) {
  const url = "http://localhost:3000/themes";

  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Erro ao excluir tema:", error);
  }
}
