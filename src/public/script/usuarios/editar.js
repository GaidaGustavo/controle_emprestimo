function modalEdicao(id, username, colaboradorId) {
    document.getElementById('id').value = id;
    document.getElementById('username').value = username;
    document.getElementById('colaboradorId').value = colaboradorId;
    const editModal = new bootstrap.Modal(document.getElementById('modal'));
    editModal.show();
}

function saveEdit() {   
    // Captura o valor do campo de tipo de item
    const id = document.getElementById('id').value
    const username = document.getElementById('username').value;
    const pessoaId = document.getElementById('colaboradorId').value;

    // Cria o objeto a ser enviado
    const data = {
        username: username,
        pessoaId: pessoaId
        };
    fetch(`http://localhost:3011/usuario/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data = {}) {
            carregarUsuarios();
            alert("Usuário atualizado com sucesso!");
            location.reload(); // Recarrega a tabela
        } else {
            alert("Erro ao atualizar Usuário.");
        }
        carregarUsuarios()
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao atualizar Usuário.");
    });

}
