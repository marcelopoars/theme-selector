export async function deleteTheme(id) {
  try {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Erro ao excluir tema:", error);
  }
}
