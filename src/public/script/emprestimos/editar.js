function modalEdicao(id, itemId, pessoaId,  dataEmprestimo, dataDevolucao) {
    if (dataDevolucao != 'null') {
        alert('Um empréstimo devolvido não pode ser alterado!');
        return fetchEmprestimos();
    }
    
    document.getElementById('id').value = id;
    document.getElementById('itemId').value = itemId;
    document.getElementById('pessoaId').value = pessoaId;
    document.getElementById('dataEmprestimo').value = dataEmprestimo;
    document.getElementById('dataDevolucao').value = dataDevolucao;
    const modalEdicao = new bootstrap.Modal(document.getElementById('modal'));
    modalEdicao.show(); 
}

function salvarEdicao() {
    const id = document.getElementById('id').value;
    const itemId = document.getElementById('itemId').value;
    const pessoaId = document.getElementById('pessoaId').value;
    const usuarioId = '9c83e43a-faab-43eb-9494-5248bdbc5d8e'
    const dataEmprestimo = document.getElementById('dataEmprestimo').value;
    const dataDevolucao = document.getElementById('dataDevolucao').value;

    fetch(`http://localhost:3011/emprestimo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({itemId: itemId,
            pessoaId: pessoaId,
            usuarioId: usuarioId,
            dataEmprestimo: dataEmprestimo,
            dataDevolucao: dataDevolucao})
    })
    .then(response => {
        if (!response.ok) throw new Error("Erro ao salvar as alterações.");
        return response.json();
    })
    .then(() => {
        alert("Emprestimo atualizado com sucesso!");
        // Fechar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
        modal.hide();

        // Atualize a tabela na interface ou recarregue os dados
        fetchEmprestimos();
    })
    .catch(error => console.error("Erro ao salvar as alterações:", error));
}
