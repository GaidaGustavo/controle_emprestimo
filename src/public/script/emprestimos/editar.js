let idEmEdicao; // Variável global para armazenar o ID do empréstimo em edição

// Função para abrir o modal de edição e preencher os dados
function abrirModalEdicao(id) {
    idEmEdicao = id; // Armazena o ID do empréstimo em edição

    fetch(`http://localhost:3011/emprestimo/${id}`) // Substitua pelo endpoint correto
        .then(response => {
            if (!response.ok) throw new Error("Empréstimo não encontrado");
            return response.json();
        })
        .then(data => {
            document.getElementById("editItem").value = data.item.nome;
            document.getElementById("editColaborador").value = data.pessoa.nome;
            document.getElementById("editValidade").value = data.item.itemEPI.validade;
            document.getElementById("editUsuario").value = data.usuario.username;
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

// Função para salvar as edições no banco de dados
function salvarEdicao(event) {
    event.preventDefault();

    const emprestimoAtualizado = {
        item: document.getElementById('editItem').value,
        colaborador: document.getElementById('editColaborador').value,
        validade: document.getElementById('editValidade').value,
        usuario: document.getElementById('editUsuario').value,
        dataEmprestimo: document.getElementById('editDataEmprestimo').value,
        dataDevolucao: document.getElementById('editDataDevolucao').value
    };

    fetch(`http://localhost:3011/emprestimo/${idEmEdicao}`, { // Substitua pelo endpoint correto
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
        
        const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
        modal.hide();

        atualizarTabela(); // Atualiza a tabela para refletir as mudanças
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao salvar alterações.");
    });
}

// Função para atualizar a tabela (você precisa implementá-la)
function atualizarTabela() {
    // Implemente o código para recarregar ou atualizar os dados da tabela após salvar
    // Exemplo: chamar o backend para obter a lista atualizada e renderizar as linhas
    fetch('http://localhost:3011/emprestimo') // URL do endpoint que retorna todos os empréstimos
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de renderizar os dados

            data.forEach(emprestimo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${emprestimo.id}</td>
                    <td>${emprestimo.item.nome}</td>
                    <td>${emprestimo.pessoa.nome}</td>
                    <td>${emprestimo.item.itemEPI.validade}</td>
                    <td>${emprestimo.usuario.username}</td>
                    <td>${emprestimo.dataEmprestimo}</td>
                    <td>${emprestimo.data
