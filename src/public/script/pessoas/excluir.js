let itemIdToDelete;

// Função para definir o ID do item a ser excluído e abrir o modal de confirmação
function setItemIdToDelete(id) {
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modal.show();
}

// Função para excluir o item
function excluirItem() {
    if (!itemIdToDelete) return;

    fetch(`http://localhost:3011/pessoas/${id}`, { // Substitua pelo endpoint correto
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) throw new Error("Falha ao excluir o empréstimo.");
        return response.json();
    })
    .then(() => {
        // Remove o item da tabela
        document.getElementById(`row-${itemIdToDelete}`).remove();
        alert("Empréstimo excluído com sucesso.");

        // Fecha o modal de confirmação
        const modal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
        modal.hide();

        // Limpa a variável itemIdToDelete
        itemIdToDelete = null;
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao excluir o empréstimo.");
    });
}
