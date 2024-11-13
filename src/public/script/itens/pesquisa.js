function buscarPorId() {
    const id = document.getElementById('searchId').value;
    
    if (!id) {
        alert("Por favor, insira um ID.");
        return;
    }

    fetch(`http://localhost:3011/itens${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Item não encontrado");
            return response.json();
        })
        .then(data => {
            preencherModalComDados(data);
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Item não encontrado");
        });
}
function preencherModalComDados(data) {
    document.getElementById('nome').value = data.nome;
    document.getElementById('tipoItem').value = data.tipoItem;
}
