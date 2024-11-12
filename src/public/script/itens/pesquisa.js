function buscarPorId() {
    const id = document.getElementById('searchId').value;
    
    if (!id) {
        alert("Por favor, insira um ID.");
        return;
    }

    fetch(`http://${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Empréstimo não encontrado");
            return response.json();
        })
        .then(data => {
            preencherModalComDados(data);
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Empréstimo não encontrado");
        });
}

function preencherModalComDados(data) {
    document.getElementById("emprestimoId").textContent = data.id;
    document.getElementById("emprestimoItem").textContent = data.itemNome; // Supondo que o nome do item é retornado como `itemNome`
    document.getElementById("emprestimoColaborador").textContent = data.colaboradorNome; // Supondo que o nome do colaborador é retornado como `colaboradorNome`
    document.getElementById("emprestimoData").textContent = data.dataEmprestimo; // Supondo que a data do empréstimo é retornada como `dataEmprestimo`
}
