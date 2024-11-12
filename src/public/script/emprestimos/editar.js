function abrirModalEdicao(id) {
    fetch(`http://${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Empréstimo não encontrado");
            return response.json();
        })
        .then(data => {
            document.getElementById("editItem").value = data.item;
            document.getElementById("editColaborador").value = data.colaborador;
            document.getElementById("editValidade").value = data.validade;
            document.getElementById("editUsuario").value = data.usuario;
            document.getElementById("editDataEmprestimo").value = data.dataEmprestimo;
            document.getElementById("editDataDevolucao").value = data.dataDevolucao;

            const modal = new bootstrap.Modal(document.getElementById("editModal"));
            modal.show();
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Empréstimo não encontrado");
        });
}
//salva no banco :D
function salvarEdicao(event) {
    event.preventDefault();

    const id = /* ID do item que está sendo editado (armazenado em uma variável global, por exemplo) */;
    const emprestimoAtualizado = {
        item: document.getElementById('editItem').value,
        colaborador: document.getElementById('editColaborador').value,
        validade: document.getElementById('editValidade').value,
        usuario: document.getElementById('editUsuario').value,
        dataEmprestimo: document.getElementById('editDataEmprestimo').value,
        dataDevolucao: document.getElementById('editDataDevolucao').value
    };

    fetch(`http://seu-backend-url.com/api/emprestimos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimoAtualizado)
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao salvar alterações");
        return response.json();
    })
    .then(data => {
        alert("Alterações salvas com sucesso!");
        document.getElementById('editModal').classList.remove('show');
        // Atualize a tabela para refletir as mudanças
        atualizarTabela();
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao salvar alterações.");
    });
}
