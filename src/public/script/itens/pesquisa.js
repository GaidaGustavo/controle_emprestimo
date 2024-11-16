// Função para carregar um item do backend e preencher a tabela
function loadItem() {
    const id = document.getElementById('searchId').value; // Obtém o ID do input

    fetch(`http://localhost:3011/itens/${id}`) // Requisição GET para o backend
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o item do servidor.');
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(item => {
            const tableBody = document.getElementById('tableBody'); // Seleciona o corpo da tabela
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir os novos dados

            // Cria uma nova linha com os dados do item
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.tipoItem.name}</td>
                <td>${item.itemEPI.ca}</td>
                <td>${item.itemEPI.validade}</td>
                <td>
                    <button class="btn btn-success" onclick="openEditModal(${item.id})">
                        Editar
                    </button>
                    <button class="btn btn-danger" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId(${item.id})">
                        Excluir
                    </button>
                </td>
            `;
            tableBody.appendChild(row); // Adiciona a linha ao corpo da tabela
        })
        .catch(error => {
            console.error('Erro ao buscar os itens:', error); // Log do erro
            alert('Erro ao carregar o item. Verifique se o ID está correto.');
        });
}
