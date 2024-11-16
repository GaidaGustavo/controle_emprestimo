function abrirModalEdicao(emprestimo) {
    // Preenche os campos editáveis do modal com as informações do empréstimo
    document.getElementById('editId').value = emprestimo.id;
    document.getElementById('editItem').value = emprestimo.item;
    document.getElementById('editColaborador').value = emprestimo.colaborador;

    // Exibe o modal
    const myModal = new bootstrap.Modal(document.getElementById('editModal'));
    myModal.show();
}

function salvarEdicao() {
    const id = document.getElementById('editId').value;
    const item = document.getElementById('editItem').value;
    const colaborador = document.getElementById('editColaborador').value;

    // Enviar dados para o backend para atualizar o empréstimo
    // Aqui, você pode fazer uma requisição para atualizar no banco de dados
    console.log(`Atualizando empréstimo ${id} - Item: ${item}, Colaborador: ${colaborador}`);

    // Fechar o modal
    const myModal = new bootstrap.Modal(document.getElementById('editModal'));
    myModal.hide();
}
