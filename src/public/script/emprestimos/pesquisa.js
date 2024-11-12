function buscarPorId() {
    const id = document.getElementById('searchId').value;
    
    if (!id) {
        alert("Por favor, insira um ID.");
        return;
    }
    
    fetch(`http://seu-backend-url.com/api/emprestimos/${id}`)
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
    document.getElementById('editItem').value = data.item;
    document.getElementById('editColaborador').value = data.colaborador;
    document.getElementById('editValidade').value = data.validade;
    document.getElementById('editUsuario').value = data.usuario;
    document.getElementById('editDataEmprestimo').value = data.dataEmprestimo;
    document.getElementById('editDataDevolucao').value = data.dataDevolucao;
}
