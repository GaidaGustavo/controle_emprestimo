function openEditModal(id, nome, documento) {
    document.getElementById('id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('documento').value = documento;
    const editModal = new bootstrap.Modal(document.getElementById('modal'));
    editModal.show();
}

// Função para salvar a edição
function salvarEdicao() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const documento = document.getElementById('documento').value;

    fetch(`http://localhost:3011/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, documento })
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao salvar as alterações.");
        return response.json();
    })
    .then(() => {
        alert("Pessoa atualizada com sucesso!");
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
        modal.hide();

        // Atualize a tabela na interface ou recarregue os dados
        carregarPessoas();
    })
    .catch(error => console.error("Erro ao salvar as alterações:", error));
}
