function saveEdit(id) {   
    // Captura o valor do campo de tipo de item
    const username = document.getElementById('editUserName').value;
    const pessoaId = document.getElementById('editUserPessoa').value;

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
        if (data.success) {
            loadTiposDeItem();
            alert("Tipo de item atualizado com sucesso!");
            location.reload(); // Recarrega a tabela
        } else {
            alert("Erro ao atualizar o tipo de item.");
        }
        loadTiposDeItem()
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao atualizar o tipo de item.");
    });

}