function modalExclusaoTipoItem(id) {
    document.getElementById('idExclusão').textContent = id
    const modalDelete = new bootstrap.Modal(document.getElementById('modalDelete'));
    modalDelete.show();
}

function excluir() {
    const id = document.getElementById('idExclusão').textContent

    fetch(`http://localhost:3011/tipoItens/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response == 'erro') {
            throw new Error("Erro ao realizar exclusão. Certifique-se de que o tipo de item não está associado a nenhum item.");
        }
        return response.json();
    })
    .then(() => {
        alert("Exclusão realizada com sucesso!");
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalDelete'));
        modal.hide();

        // Atualize a tabela na interface ou recarregue os dados
        loadTiposDeItem();
    })
    .catch(error => console.error("Erro ao salvar as alterações:", error));
}
