let itemIdToDelete;

function setItemIdToDelete(id) {
    itemIdToDelete = id;
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modal.show();
}

function excluirItem() {
    if (!itemIdToDelete) return;

    fetch(`http://seu-backend-url.com/api/emprestimos/${itemIdToDelete}`, {
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
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao excluir o empréstimo.");
    });
}
