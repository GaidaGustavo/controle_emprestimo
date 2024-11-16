let idEmEdicao; // Variável global para armazenar o ID do empréstimo em edição

// Função para abrir o modal de edição e preencher os dados
function abrirModalEdicao(id) {
    idEmEdicao = id; // Armazena o ID do empréstimo em edição

    fetch(`http://localhost:3011/emprestimo/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Empréstimo não encontrado");
            return response.json();
        })
        .then(data => {
            // Preenchendo os campos do modal
            document.getElementById("editItem").value = data.item.nome;
            document.getElementById("editColaborador").value = data.pessoa.nome;
            document.getElementById("editValidade").value = data.item.itemEPI.validade;
            document.getElementById("editUsuario").value = data.usuario.username;
            document.getElementById("editDataEmprestimo").value = data.dataEmprestimo;
            document.getElementById("editDataDevolucao").value = data.dataDevolucao;

            // Exibindo o modal
            const modal = new bootstrap.Modal(document.getElementById("editModal"));
            modal.show();
        })
        .catch(error => {
            console.error("Erro ao carregar dados do empréstimo:", error);
            alert("Erro ao carregar os dados. Tente novamente.");
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
    // Busca a linha correspondente ao empréstimo atualizado
    const row = document.querySelector(`#row-${idEmEdicao}`);
    
    // Caso a linha exista, atualiza os campos dela com os novos dados
    if (row) {
        fetch(`http://localhost:3011/emprestimo/${idEmEdicao}`)
            .then(response => response.json())
            .then(data => {
                row.innerHTML = `
                    <td>${data.id}</td>
                    <td>${data.item.nome}</td>
                    <td>${data.pessoa.nome}</td>
                    <td>${data.item.itemEPI.validade}</td>
                    <td>${data.usuario.username}</td>
                    <td>${data.dataEmprestimo}</td>
                    <td>${data.dataDevolucao}</td>
                    <td>
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onclick="abrirModalEdicao(${data.id})">Editar</button>
                        <button class="btn btn-primary orientacao" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onclick="setItemId(${data.id})">Devolver</button>
                    </td>
                `;
            })
            .catch(error => {
                console.error("Erro ao atualizar tabela:", error);
            });
    }
}

