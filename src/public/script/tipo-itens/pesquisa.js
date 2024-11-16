// Função para carregar os tipos de item do backend e preencher a tabela
function loadTipoItem() {
    const id = document.getElementById('searchId').value; // Obtém o ID do input

    // Faz a requisição ao backend para buscar o tipo de item pelo ID
    fetch(`http://localhost:3011/tipoItens/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o tipo de item.');
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(tipo => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir o novo dado

            // Cria uma nova linha com os dados do tipo de item
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tipo.id}</td>
                <td>${tipo.nome}</td>
                <td>
                   <button class="btn btn-primary btn-sm" onclick="openEditModal('${tipo.id}', '${tipo.nome}')">
                        Editar
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId('${tipo.id}')">
                        Excluir
                    </button>
                </td>
            `;

            tableBody.appendChild(row); // Adiciona a linha à tabela
        })
        .catch(error => {
            console.error('Erro ao carregar o tipo de item:', error);
            alert('Erro ao carregar o tipo de item. Verifique se o ID está correto.');
        });
}


