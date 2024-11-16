function abrirModalEdicao(id) {
    fetch(`http://localhost:3011/emprestimo/${id}`)  // Substitua pela URL correta do seu backend
        .then(response => response.json())
        .then(data => {
            // Preenche os campos do modal com os dados recebidos
            document.getElementById('editId').value = data.id;
            document.getElementById('editItem').value = data.item.nome;
            document.getElementById('editColaborador').value = data.pessoa.nome;

            // Exibe o modal
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        })
        .catch(error => {
            console.error("Erro ao carregar dados:", error);
            alert("Erro ao carregar dados para edição.");
        });
}
function salvarEdicao() {
    // Coleta os dados dos campos do modal
    const id = document.getElementById('editId').value;
    const item = document.getElementById('editItem').value;
    const colaborador = document.getElementById('editColaborador').value;

    // Prepara os dados para envio
    const dadosEditados = {
        item: { nome: item },  // Estrutura conforme seu modelo de dados
        pessoa: { nome: colaborador }
    };

    // Faz a requisição PUT para atualizar as informações no banco
    fetch(`http://localhost:3011/emprestimo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosEditados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Empréstimo atualizado com sucesso!");

            // Fecha o modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
            modal.hide();

            // Atualiza a tabela de empréstimos
            atualizarTabela();
        } else {
            alert("Erro ao atualizar o empréstimo.");
        }
    })
    .catch(error => {
        console.error("Erro ao salvar as edições:", error);
        alert("Erro ao atualizar o empréstimo.");
    });
}
function atualizarTabela() {
    fetch('http://localhost:3011/emprestimo')  // URL para obter todos os empréstimos
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';  // Limpa a tabela antes de adicionar os novos dados

            data.forEach(emprestimo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${emprestimo.id}</td>
                    <td>${emprestimo.item.nome}</td>
                    <td>${emprestimo.pessoa.nome}</td>
                    <td>${emprestimo.item.itemEPI.validade}</td>
                    <td>${emprestimo.usuario.username}</td>
                    <td>${emprestimo.dataEmprestimo}</td>
                    <td>${emprestimo.dataDevolucao}</td>
                    <td>
                        <button class="btn btn-success" onclick="abrirModalEdicao(${emprestimo.id})">Editar</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Erro ao atualizar a tabela:", error);
            alert("Erro ao carregar a tabela.");
        });
}
