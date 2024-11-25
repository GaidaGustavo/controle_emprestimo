function modalExclusaoItem(id) {
    document.getElementById('idExclusão').textContent = id
    const modalDelete = new bootstrap.Modal(document.getElementById('modalDelete'));
    modalDelete.show();
}

function excluir() {
    const id = document.getElementById('idExclusão').textContent

    fetch(`http://localhost:3011/itens/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao realizar exclusão.");
        return response.json();
    })
    .then(() => {
        alert("Exclusão realizada com sucesso!");
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalDelete'));
        modal.hide();

        // Atualize a tabela na interface ou recarregue os dados
        fetchItens();
    })
    .catch(error => console.error("Erro ao salvar as alterações:", error));
}
