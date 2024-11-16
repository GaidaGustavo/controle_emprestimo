// Função para carregar os tipos de item do backend e preencher a tabela
function loadTiposDeItem() {
    fetch('http://localhost:3011/tipoItens')  // Endereço do endpoint que retorna os dados dos tipos de item
        .then(response => response.json())  // Converte a resposta em JSON
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';  // Limpa a tabela antes de inserir os novos dados

            // Itera pelos tipos de item e preenche a tabela
            data.forEach(tipo => {
                const row = document.createElement('tr');  // Cria uma nova linha

                // Preenche as células da linha com os dados do tipo de item
                row.innerHTML = `
                    <td>${tipo.id}</td>
                    <td>${tipo.nome}</td>
                    <td>
                       <button class="btn btn-primary btn-sm" onclick="openEditModal('${tipo.id}', '${tipo.nome}')">
                            Editar
                        </button>
                        <button class="btn btn-danger" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId('${tipo.id}')">Excluir</button>
                    </td>
                `;
                
                tableBody.appendChild(row);  // Adiciona a linha à tabela
            });
        })
        .catch(error => console.error('Erro ao carregar os tipos de item:', error));  // Tratar erros
}

// Chama a função ao carregar a página
window.onload = function() {
    loadTiposDeItem();  // Carrega os tipos de item ao carregar a página
};


// Função para abrir o modal de edição
function openEditModal(id, nome) {
    document.getElementById('editItemId').value = id;
    document.getElementById('editItemName').value = nome;
    const editModal = new bootstrap.Modal(document.getElementById('editItemModal'));
    editModal.show();
}

