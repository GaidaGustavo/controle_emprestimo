function saveEdit() {
    const id = document.getElementById('editItemId').value;
    const nome = document.getElementById('editItemName').value;

    fetch(`http://localhost:3011/tipoItens/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome })
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
