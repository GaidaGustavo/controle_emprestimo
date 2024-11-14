let pessoaIdParaEdicao;

// Função para abrir o modal de edição com os dados preenchidos
function abrirModalEdicao(id) {
    pessoaIdParaEdicao = id;

    // Supondo que você já tenha uma função para obter os dados do backend
    fetch(`http://localhost:3011/pessoas/${id}`) // Substitua pelo endpoint correto
        .then(response => response.json())
        .then(data => {
            document.getElementById('editId').value = data.id;
            document.getElementById('editNome').value = data.nome;
            document.getElementById('editDocumento').value = data.documento;

            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        })
        .catch(error => console.error("Erro ao carregar dados para edição:", error));
}

// Função para salvar a edição
function salvarEdicao() {
    const id = document.getElementById('editId').value;
    const nome = document.getElementById('editNome').value;
    const documento = document.getElementById('editDocumento').value;

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
        const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        modal.hide();

        // Atualize a tabela na interface ou recarregue os dados
        atualizarTabela();
    })
    .catch(error => console.error("Erro ao salvar as alterações:", error));
}
