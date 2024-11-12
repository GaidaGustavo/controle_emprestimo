

//=========================================================================================================================================

// Empréstimo de Itens

// Função para adicionar um item à lista
function adicionarItem() {
    const inputItem = document.getElementById("inputItem");
    const itemNome = inputItem.value.trim();

    if (itemNome) {
        const listaItens = document.getElementById("listaItens");
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = itemNome;

        // Botão de remoção para cada item adicionado
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-danger btn-sm float-end";
        removeBtn.textContent = "Remover";
        removeBtn.onclick = () => listaItens.removeChild(li);

        li.appendChild(removeBtn);
        listaItens.appendChild(li);

        inputItem.value = ""; // Limpa o campo após adicionar o item
    }
}

//============================funcao para cadastro item============================================================

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página ao enviar o formulário
    
    // Captura os dados dos campos
    const nome = document.getElementById('itemNome').value;
    const tipoItem = document.getElementById('tipoItem').value;
    
    // Cria o objeto com os dados do item
    const item = {
        nome: nome,
        tipoItem: tipoItem
    };
    
    // Envia os dados para o servidor
    fetch('http://localhost:3000/api/itens', {  // Endpoint da API para cadastrar o item
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => {
        if (response.ok) {
            alert('Item cadastrado com sucesso!');
            document.getElementById('formCadastro').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar item');
        }
    })
    .catch(error => console.error('Erro:', error));
});

//=============função para fazer empréstimo=================================
document.getElementById('emprestimoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página ao enviar o formulário
    
    // Captura os dados dos campos do formulário
    const nomePessoa = document.getElementById('pessoa').value;
    const itens = Array.from(document.querySelectorAll('#listaItens li'))
                       .map(item => item.textContent.replace("Remover", "").trim());  // Captura os itens da lista

    // Cria o objeto com os dados do empréstimo
    const emprestimo = {
        nomePessoa: nomePessoa,
        itens: itens
    };
    
    // Envia os dados para o servidor
    fetch('http://localhost:3002/', {  // Endpoint da API para cadastrar o empréstimo
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimo)
    })
    .then(response => {
        if (response.ok) {
            alert('Empréstimo cadastrado com sucesso!');
            document.getElementById('emprestimoForm').reset();  // Limpa o formulário
            document.getElementById('listaItens').innerHTML = '';  // Limpa a lista de itens
        } else {
            throw new Error('Erro ao cadastrar empréstimo');
        }
    })
    .catch(error => console.error('Erro:', error));
});


// Exclusão de Item=============================================================
function confirmarExclusao(id) {
    if (confirm("Tem certeza que deseja excluir este item?")) {
        excluirItem(id);
    }
}

function excluirItem(id) {
    fetch(`https://seuservidor.com/api/itens/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                alert("Item excluído com sucesso!");
                document.getElementById(`row-${id}`).remove(); // Remove a linha da tabela
            } else {
                alert("Erro ao excluir o item.");
            }
        })
        .catch(error => console.error("Erro:", error));
}

let itemIdToDelete;

function setItemId(id) {
    itemIdToDelete = id; // Define o ID do item a ser excluído
}

function confirmarDevolucao() {
    fetch(`https://seuservidor.com/api/itens/${itemIdToDelete}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                alert("Item devolvido com sucesso!");
                document.getElementById(`row-${itemIdToDelete}`).remove();
                const modalElement = document.getElementById('confirmDeleteModal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();
            } else {
                alert("Erro ao devolver o item.");
            }
        })
        .catch(error => console.error("Erro:", error));
}

//=========================================================================================================================================

// Edição de Item
let itemIdParaEditar;

function abrirModalEdicao(id) {
    itemIdParaEditar = id;
    const row = document.getElementById(`row-${id}`);
    const cells = row.getElementsByTagName("td");

    document.getElementById("editItem").value = cells[1].textContent;
    document.getElementById("editTipo").value = cells[2].textContent;
    document.getElementById("editValidade").value = cells[3].textContent;
    document.getElementById("editDataEmprestimo").value = cells[4].textContent;
   

    const editModal = new bootstrap.Modal(document.getElementById("editModal"));
    editModal.show();
}

function salvarEdicao() {
    const itemData = {
        id: itemIdParaEditar,
        item: document.getElementById("editItem").value,
        tipo: document.getElementById("editTipo").value,
        validade: document.getElementById("editValidade").value,
        dataEmprestimo: document.getElementById("editDataEmprestimo").value,
       
    };

    fetch('URL_DA_API/atualizarEmprestimo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const row = document.getElementById(`row-${itemIdParaEditar}`);
                const cells = row.getElementsByTagName("td");

                cells[1].textContent = itemData.item;
                cells[2].textContent = itemData.tipo;
                cells[3].textContent = itemData.validade;
                cells[4].textContent = itemData.dataEmprestimo;
             

                alert('Alterações salvas com sucesso!');
                const editModal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
                editModal.hide();
            } else {
                alert('Erro ao atualizar no banco de dados.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao conectar ao servidor.');
        });
}


 //==============================================================================



//===============================funcao para buscar infos da tabela tipos item===================